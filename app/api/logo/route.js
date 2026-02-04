export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const domain = searchParams.get('domain');
  const token = process.env.LOGO_DEV_TOKEN; // Clé sécurisée côté serveur

  // 1. Validation du domaine
  if (!domain) {
    return new Response(JSON.stringify({ error: "Le domaine est requis" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // 2. Appel à l'API Logo.dev avec interpolation correcte
    const response = await fetch(`https://img.logo.dev/${domain}?token=${token}`);

    if (!response.ok) {
      throw new Error("Logo non trouvé ou erreur API");
    }

    // 3. Récupération de l'image sous forme de buffer
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 4. Retour de l'image brute au navigateur
    return new Response(buffer, {
      headers: { 
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400, s-maxage=86400" // Cache 24h
      },
    });

  } catch (err) {
    console.error("Erreur Proxy Logo:", err.message);

    // 5. FALLBACK : Pixel transparent pour éviter l'icône cassée
    const transparentPixel = Buffer.from(
      "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=", 
      "base64"
    );
    
    return new Response(transparentPixel, {
      headers: { "Content-Type": "image/png" },
    });
  }
}
