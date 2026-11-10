function Skills() {
 try {
  const skillGroups = [
   {title:"Business Intelligence",subtitle:"Transformação de dados em indicadores e análises visuais.",icon:"icon-chart-no-axes-combined",skills:[
    {label:"Power BI",image:"power-bi.svg"},{label:"DAX",image:"dax.svg"},{label:"Power Query",image:"power-query.svg"},
    {label:"Modelagem de Dados",icon:"icon-network"},{label:"Dashboards",icon:"icon-layout-dashboard"},{label:"Data Visualization",icon:"icon-chart-no-axes-combined"}
   ],application:"Construção de painéis gerenciais e operacionais, definição de métricas e acompanhamento de indicadores."},
   {title:"Dados e Automação",subtitle:"Preparação, consulta, organização e integração de dados.",icon:"icon-database",skills:[
    {label:"SQL / MySQL",image:"mysql.svg"},{label:"Excel",image:"excel.svg"},{label:"Google Sheets",image:"google-sheets.svg"},
    {label:"Google Apps Script",image:"google-apps-script.svg"},{label:"Python",image:"python.svg"},{label:"JavaScript",image:"javascript.svg"},
    {label:"HTML",image:"html5.svg"},{label:"CSS",image:"css3.svg"},{label:"API REST",image:"api-rest.svg"},{label:"ETL e Tratamento",icon:"icon-workflow"}
   ],application:"Consultas e validações, tratamento de bases e automação de rotinas com planilhas, ERP e aplicações."},
   {title:"Negócio e Processos",subtitle:"Conhecimento dos processos que dão contexto aos dados.",icon:"icon-factory",skills:[
    {label:"KPIs e Indicadores",icon:"icon-gauge"},{label:"Análise de Processos",icon:"icon-git-branch"},{label:"ERP Industrial",icon:"icon-factory"},
    {label:"Análise Comercial",icon:"icon-chart-line"},{label:"Produção e Estoque",icon:"icon-boxes"},{label:"Melhoria Contínua",icon:"icon-trending-up"}
   ],application:"Leitura de processos comerciais e industriais, identificação de gargalos e apoio à tomada de decisão."}
  ];

  // Anima cada bolha diretamente no navegador e cria um novo percurso ao fim de cada ciclo.
  React.useEffect(() => {
   const section = document.getElementById("habilidades");
   if (!section || typeof Element.prototype.animate !== "function") return;

   const bubbles = Array.from(section.querySelectorAll(".skill-icon-frame"));
   const activeAnimations = new Set();
   const timers = new Set();
   let disposed = false;

   const randomBetween = (min, max) => Math.random() * (max - min) + min;

   const createPath = () => {
    const points = [{ transform: "translate3d(0px,0px,0px) rotate(0deg)", offset: 0 }];
    for (let point = 1; point <= 7; point++) {
     const x = randomBetween(-22, 22).toFixed(1);
     const y = randomBetween(-16, 16).toFixed(1);
     const rotation = randomBetween(-5, 5).toFixed(1);
     points.push({
      transform: "translate3d(" + x + "px," + y + "px,0) rotate(" + rotation + "deg)",
      offset: point / 8
     });
    }
    points.push({ transform: "translate3d(0px,0px,0px) rotate(0deg)", offset: 1 });
    return points;
   };

   const startDrift = (bubble, delay = randomBetween(0, 2600)) => {
    const timer = window.setTimeout(() => {
     timers.delete(timer);
     if (disposed) return;

     const animation = bubble.animate(createPath(), {
      duration: randomBetween(18000, 28000),
      easing: "cubic-bezier(.42,0,.26,1)",
      iterations: 1,
      fill: "forwards"
     });
     activeAnimations.add(animation);

     animation.onfinish = () => {
      activeAnimations.delete(animation);
      animation.cancel();
      if (!disposed) startDrift(bubble, randomBetween(180, 900));
     };
     animation.oncancel = () => activeAnimations.delete(animation);
    }, delay);

    timers.add(timer);
   };

   bubbles.forEach(bubble => startDrift(bubble));

   return () => {
    disposed = true;
    timers.forEach(timer => window.clearTimeout(timer));
    activeAnimations.forEach(animation => animation.cancel());
    timers.clear();
    activeAnimations.clear();
   };
  }, []);

  return (
   <section id="habilidades" className="py-20 lg:py-24 relative bg-[var(--bg-color)]" data-name="skills" data-file="components/Skills.js">
    <div className="container mx-auto px-6">
     <div className="text-center mb-12">
      <h2 className="section-title mb-4">Habilidades</h2>
      <p className="text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed">Ferramentas e conhecimentos que utilizo para organizar dados, compreender processos e desenvolver soluções de análise e BI.</p>
     </div>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch skills-groups-grid">
      {skillGroups.map((group,index)=>(
       <article key={group.title} className="glass-panel h-full p-5 md:p-6 flex flex-col border border-[var(--surface-border)] hover:border-[var(--primary-color)]/50 transition-colors duration-200">
        <div className="flex items-center gap-3 mb-4">
         <div className="w-11 h-11 shrink-0 rounded-xl bg-[var(--primary-color)]/10 flex items-center justify-center text-[var(--primary-color)]"><span className={group.icon+" text-2xl"} aria-hidden="true"></span></div>
         <div><span className="block text-[10px] uppercase tracking-[0.16em] text-[var(--primary-color)] font-semibold mb-1">0{index+1}</span><h3 className="text-lg font-bold text-[var(--text-main)] leading-tight">{group.title}</h3></div>
        </div>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">{group.subtitle}</p>
        <div className="skills-icon-grid">
         {group.skills.map(skill=>(
          <div key={skill.label} className="skill-icon-item" title={skill.label}>
           <div className="skill-icon-frame">
            {skill.image?<img src={"./images/technologies/"+skill.image} alt="" loading="lazy"/>:<span className={skill.icon+" skill-generic-icon"} aria-hidden="true"></span>}
           </div>
           <span className="skill-icon-caption">{skill.label}</span>
          </div>
         ))}
        </div>
       </article>
      ))}
     </div>
     <div className="mt-7 glass-panel p-5 md:p-6 border border-[var(--primary-color)]/20">
      <div className="flex items-center gap-3 mb-4">
       <div className="w-11 h-11 shrink-0 rounded-xl bg-[var(--primary-color)]/10 flex items-center justify-center text-[var(--primary-color)]"><span className="icon-lightbulb text-2xl" aria-hidden="true"></span></div>
       <div><h3 className="font-semibold text-[var(--text-main)]">Aplicação prática</h3><p className="text-xs text-[var(--text-muted)]">Como conecto essas habilidades ao trabalho.</p></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
       {skillGroups.map(group=>(
        <div key={group.title} className="min-w-0">
         <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--primary-color)] font-semibold mb-2">{group.title}</p>
         <p className="text-sm text-[var(--text-muted)] leading-relaxed">{group.application}</p>
        </div>
       ))}
      </div>
     </div>
     <div className="mt-5 flex items-start gap-4 rounded-xl border border-[var(--surface-border)] bg-[var(--section-wash)] p-5 md:p-6">
      <div className="w-10 h-10 shrink-0 rounded-xl bg-[var(--primary-color)]/10 flex items-center justify-center text-[var(--primary-color)]"><span className="icon-sparkles text-xl" aria-hidden="true"></span></div>
      <div><h3 className="font-semibold text-[var(--text-main)] mb-1">Meu diferencial</h3><p className="text-sm text-[var(--text-muted)] leading-relaxed">Vivência prática em ambiente industrial, conectando o conhecimento dos processos comerciais e produtivos à análise de dados e ao desenvolvimento de soluções.</p></div>
     </div>
    </div>
   </section>
  );
 } catch(error) {
  console.error("Skills component error:",error);
  return null;
 }
}