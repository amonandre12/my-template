// app/demo/[slug]/page.js

export default function DemoPage({ searchParams }) {
  // On récupère les variables passées dans l'URL par Make/Snov.io
  const name = searchParams.name || "votre entreprise";
  const color = 
  searchParams.color && /^[0-9A-Fa-f]{6}$/.test(searchParams.color) ? searchParams.color : "3b82f6";
  const oldScore = searchParams.oldScore || "20"; 
  const nextScore = searchParams.nextScore || 99;
  const audit = searchParams.audit ? searchParams.audit.split('|') : [
    "Design non optimisé pour mobile",
    "Temps de chargement supérieur à 4s",
    "Absence de boutons d'appel à l'action"
  ];
  const industry = searchParams.industry || "votre secteur";

  const whatsappMessage = encodeURIComponent(
  `Bonjour André, je viens de voir la démo du nouveau site pour notre entreprise et j’aimerais en discuter.`
);

const whatsappLink = `https://wa.me/2250153546931?text=${whatsappMessage}`; 

   const domain = searchParams?.domain || "google.com";
   const logoUrl = `/api/logo?domain=${domain}`;

  return (
    <div className="min-h-screen bg-white"> 
    <nav className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-sm p-4 md:p-6 flex justify-between items-center shadow-sm border-b">

            <div className="flex  justify-between gap-4">
                <img src={logoUrl}
                alt={`Logo ${name}`}
                className= "w-10 h-10 md:w-12 md:h-12 object-contain rounded-md"/>
                
                <span
                className= "text-xl md:text-2xl font-black uppercase tracking-tighter"
                style={{ color: `#${color}` }}>
                    {name}
                    </span>
            </div>

      <a href={whatsappLink}
      className="hidden md:block text-white px-5 py-2 rounded-lg font-bold text-sm transition-transform hover:scale-105"
      style={{ backgroundColor: `#${color}` }}
      >
    CONTACTER {name.toUpperCase()}
    </a>
    
    </nav>
    
    {/* Hero Section Optimisée */}
    <section className="py-12 md:py-24 text-center px-6 max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
        Le futur <span style={{ color: `#${color}` }}>{industry}</span> <br/> 
        est ultra-rapide.
     </h1>
     
     <p className="text-lg md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
      Nous avons conçu cette interface pour <span className="font-bold text-slate-900">{name}</span> afin de garantir une expérience instantanée à vos clients.
    </p>
    
    {/* L'alternative au "Bouton de paiement" : La preuve de concept */}
    <div className="mt-12 p-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent">
     <div className="bg-white py-4 px-8 inline-block rounded-full border border-slate-200 shadow-sm">
        <p className="text-slate-500 text-sm font-medium">
          ✨ Design exclusif généré pour <span style={{ color: `#${color}` }} className="font-bold">{name}</span>
        </p>
     </div>
  </div>
</section>
      
      <section className="py-12 bg-slate-50 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
            <p className="text-slate-400 uppercase text-xs font-bold tracking-widest mb-2">Score Actuel</p>
            <div className="text-7xl font-black text-red-500 mb-4">{oldScore}</div>
            <p className="text-slate-600 text-sm">Votre site perd 50% de ses visiteurs à cause de sa lenteur.</p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-md border-2 border-green-500 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] px-3 py-1 font-bold">OPTIMISÉ</div>
            <p className="text-slate-400 uppercase text-xs font-bold tracking-widest mb-2">Score Next.js</p>
            <div className="text-7xl font-black text-green-500 mb-4">{nextScore}</div>
            <p className="text-slate-600 text-sm">Chargement instantané pour un taux de conversion maximal.</p>
         </div>
        </div>
      </section>
      
      {/* AI Audit Section */}
      
      <section className="py-12 px-6 max-w-3xl mx-auto">
        <div className="bg-indigo-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🤖</span> Analyse de votre interface
          </h3>
          
          <ul className="space-y-4">
            {audit.map((point, index) => (
              <li key={index} className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-green-400 font-bold">✓</span>
                <p className="text-indigo-100">{point}</p> 
              </li>
            ))}
          </ul>
        </div>
      </section>

       <a 
        href={whatsappLink}
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 text-white px-6 py-4 rounded-full font-bold shadow-2xl hover:scale-110 transition-all"
        style={{ backgroundColor: `#${color}`}} 
      > 
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"> 
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.404c0 6.556-5.332 11.888-11.888 11.888-2.003 0-3.963-.505-5.698-1.467l-6.305 1.692zm6.333-3.664c1.554.92 3.327 1.406 5.155 1.406 5.394 0 9.782-4.387 9.782-9.782 0-2.613-1.017-5.07-2.862-6.915s-4.302-2.862-6.92-2.862c-5.394 0-9.782 9.782 0 1.884.538 3.714 1.556 5.291l-1.03 3.766 3.856-1.031zm10.322-7.142c-.297-.149-1.758-.868-2.03-.967-.272-.099-.47-.149-.668.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.668-1.609-.916-2.204-.242-.584-.487-.504-.668-.514-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/> 
        </svg> 
        Discuter sur WhatsApp 
      </a> 
    </div>
  );
}

