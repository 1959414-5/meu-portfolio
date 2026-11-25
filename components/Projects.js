function Projects() {
    const modules = [
        {
            id: "dados", number: "01", type: "module",
            title: "Dados & Business Intelligence",
            subtitle: "Análise, indicadores e inteligência para decisões melhores.",
            description: "Projetos com Power BI, modelagem de dados e SQL, conectando informações comerciais e operacionais a análises úteis para o negócio.",
            count: "02 projetos", roles: ["Análise de Dados", "Business Intelligence", "SQL"],
            technologies: [
                { name: "Power BI", image: "images/technologies/power-bi.svg", featured: true },
                { name: "Power Query", image: "images/technologies/power-query.svg" },
                { name: "DAX", image: "images/technologies/dax.svg" },
                { name: "Google Sheets", image: "images/technologies/google-sheets.svg" }
            ],
            image: "https://app.trickle.so/storage/public/images/usr_1f3f54a390000001/fe673bf6-ded4-4441-b90d-e823371b2ca2.jpeg",
            icon: "icon-chart-no-axes-combined", href: "modulo-dados.html", action: "Explorar módulo"
        },
        {
            id: "desenvolvimento", number: "02", type: "module",
            title: "Desenvolvimento de Software",
            subtitle: "Aplicações web e soluções para operações reais.",
            description: "Aplicações web, plataformas SaaS e sistemas com APIs, bancos de dados, automações e inteligência artificial.",
            count: "06 projetos", roles: ["Front-end", "Back-end", "Full Stack"],
            technologies: [
                { name: "TypeScript", image: "images/technologies/typescript.svg" },
                { name: "Three.js", icon: "icon-box" },
                { name: "Node.js", image: "images/technologies/nodejs.svg" },
                { name: "MySQL", image: "images/technologies/mysql.svg" }
            ],
            image: "images/erp3d/01-producao.jpg", icon: "icon-code-2",
            href: "modulo-desenvolvimento.html", action: "Explorar módulo"
        },
        {
            id: "automacao", number: "03", type: "module",
            title: "Automação & Integração",
            subtitle: "Menos tarefas repetitivas. Mais eficiência operacional.",
            description: "Automação de rotinas administrativas e relatórios com Python, interação com ERP desktop e controles para conferência da execução.",
            count: "01 projeto", roles: ["Python", "RPA", "Processos"],
            technologies: [
                { name: "Python", image: "images/technologies/python.svg" },
                { name: "PyAutoGUI", icon: "icon-mouse-pointer-click" },
                { name: "Tkinter", icon: "icon-monitor" }
            ],
            image: "images/automacao/01-menu-principal.png?v=20261109",
            icon: "icon-workflow", href: "projeto-automacao-relatorios.html", action: "Ver estudo de caso"
        }
    ];

    const featuredProjects = [
        {
            id: "bloomio", number: "04", type: "project",
            title: "Bloomio · Plataforma SaaS",
            subtitle: "Produto SaaS proprietário",
            description: "Plataforma para salões, barbearias e clínicas de estética, com agenda, clientes, estoque, financeiro, comissões, relatórios e portal público de agendamento.",
            image: "images/bloomio/dashboard.webp", imageFit: "contain",
            tags: ["React · Vite", "Supabase · PostgreSQL", "RLS · Edge Functions"],
            caseHref: "projeto-bloomio.html", demoHref: "https://bloomio.com.br/",
            demoLabel: "Site do produto", badge: "SaaS · Produto proprietário"
        },
        {
            id: "aprova", number: "05", type: "project",
            title: "Aprova · Plataforma de estudos",
            subtitle: "Plataforma educacional",
            description: "Ambiente de preparação para concursos com trilhas de estudo, diagnóstico, simulados, flashcards, redação, acompanhamento de progresso e professor com IA.",
            image: "images/aprova/visao-geral.webp", imageFit: "cover",
            tags: ["React · Vite", "Supabase · PostgreSQL", "TypeScript · Playwright"],
            caseHref: "projeto-aprova.html", demoHref: "https://1959414-5.github.io/Aprova/",
            demoLabel: "Demonstração", repoHref: "https://github.com/1959414-5/Aprova",
            badge: "Plataforma educacional"
        }
    ];

    const items = [...modules, ...featuredProjects];
    const viewportRef = React.useRef(null);
    const trackRef = React.useRef(null);
    const [index, setIndex] = React.useState(0);
    const [visibleCount, setVisibleCount] = React.useState(3);
    const [paused, setPaused] = React.useState(false);

    React.useEffect(() => {
        const updateVisible = () => setVisibleCount(window.innerWidth <= 760 ? 1 : window.innerWidth <= 1050 ? 2 : 3);
        updateVisible();
        window.addEventListener("resize", updateVisible);
        return () => window.removeEventListener("resize", updateVisible);
    }, []);

    React.useEffect(() => {
        if (paused) return;
        const timer = window.setInterval(() => {
            setIndex(current => current >= items.length - visibleCount ? 0 : current + 1);
        }, 5200);
        return () => window.clearInterval(timer);
    }, [paused, visibleCount, items.length]);

    React.useEffect(() => {
        if (!viewportRef.current || !trackRef.current) return;
        const first = trackRef.current.querySelector(".portfolio-carousel-card");
        if (!first) return;
        const gap = parseFloat(getComputedStyle(trackRef.current).columnGap || getComputedStyle(trackRef.current).gap) || 0;
        const step = first.getBoundingClientRect().width + gap;
        trackRef.current.style.transform = `translate3d(-${index * step}px, 0, 0)`;
    }, [index, visibleCount]);

    const maxIndex = Math.max(0, items.length - visibleCount);
    const goTo = (next) => setIndex(Math.max(0, Math.min(maxIndex, next)));
    const renderCard = (item) => {
        if (item.type === "project") {
            return (
                <article key={item.id} className="portfolio-carousel-card project-card glass-panel overflow-hidden flex flex-col group">
                    <div className="px-5 md:px-6 pt-5 pb-4">
                        <h3 className="text-lg md:text-xl font-bold leading-snug text-[var(--text-main)]">{item.title}</h3>
                    </div>
                    <a href={item.caseHref} className="block relative aspect-[16/9] overflow-hidden bg-[var(--inner-card-color)]" aria-label={"Ver estudo de caso: " + item.title}>
                        <img src={item.image} alt={item.title} loading="lazy" className={"w-full h-full " + (item.imageFit === "contain" ? "object-contain" : "object-cover") + " transition-transform duration-500 group-hover:scale-[1.025]"} />
                        <span className="absolute top-4 left-4 rounded-full px-3 py-1.5 bg-[var(--card-color)]/90 border border-[var(--surface-border)] text-xs font-bold text-[var(--text-main)]">{item.badge}</span>
                        <span className="absolute top-4 right-4 rounded-full px-3 py-1.5 bg-[var(--card-color)]/90 border border-[var(--surface-border)] text-xs font-bold text-[var(--primary-color)]">{item.number}</span>
                    </a>
                    <div className="p-5 md:p-6 flex flex-col flex-1">
                        <p className="text-xs font-bold uppercase tracking-[.14em] text-[var(--primary-color)] mb-2">{item.subtitle}</p>
                        
                        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2 mb-5">
                            {item.tags.map(tag => <span key={tag} className="rounded-full border border-[var(--surface-border)] bg-[var(--inner-card-color)] px-2.5 py-1.5 text-xs font-semibold text-[var(--text-muted)]">{tag}</span>)}
                        </div>
                        <div className="project-tech-icons flex flex-wrap items-center gap-2 mb-5" aria-label="Tecnologias principais">
                            {(item.id === "bloomio" ? [
                                { name: "React", mark: "R" },
                                { name: "Vite", mark: "V" },
                                { name: "Supabase", mark: "S" },
                                { name: "PostgreSQL", mark: "PG" },
                                { name: "Edge Functions", mark: "EF" }
                            ] : [
                                { name: "React", mark: "R" },
                                { name: "TypeScript", mark: "TS" },
                                { name: "Supabase", mark: "S" },
                                { name: "PostgreSQL", mark: "PG" },
                                { name: "Playwright", mark: "P" },
                                { name: "IA", mark: "AI" }
                            ]).map(tech => <span key={tech.name} className="inline-flex items-center gap-2 rounded-lg border border-[var(--surface-border)] bg-[var(--inner-card-color)] px-2 py-1.5 text-[11px] font-semibold text-[var(--text-muted)]"><span className="project-tech-mark grid h-7 w-7 shrink-0 place-items-center rounded-md bg-white text-[#303b49] font-extrabold text-[10px]">{tech.mark}</span><span>{tech.name}</span></span>)}
                        </div>
                        <div className="mt-auto pt-4 border-t border-[var(--surface-border)] flex flex-wrap items-center gap-x-4 gap-y-2">
                            <a href={item.caseHref} className="text-sm font-bold text-[var(--primary-color)] hover:underline">Estudo de caso</a>
                            <a href={item.demoHref} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[var(--primary-color)] hover:underline">{item.demoLabel} ↗</a>
                            {item.repoHref && <a href={item.repoHref} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[var(--primary-color)] hover:underline">GitHub ↗</a>}
                        </div>
                        {item.id === "bloomio" && <p className="text-xs text-[var(--text-muted)] mt-3">Código-fonte privado por se tratar de produto proprietário.</p>}
                    </div>
                </article>
            );
        }
        return (
            <a key={item.id} href={item.href} className="portfolio-carousel-card project-card glass-panel overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)]" aria-label={item.action + ": " + item.title}>
                <div className={"px-5 md:px-6 pt-5 pb-4 " + (item.id === "desenvolvimento" ? "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-600" : "")}>
                    <h3 className={"text-lg md:text-xl font-bold mb-0 " + (item.id === "desenvolvimento" ? "text-white" : "text-[var(--text-main)]")}>{item.title}</h3>
                </div>
                <div className="relative aspect-[16/9] overflow-hidden bg-[var(--inner-card-color)]">
                    <img src={item.image} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#150f18]/85 via-[#150f18]/10 to-transparent"></div>
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-[var(--card-color)]/90 border border-[var(--surface-border)] text-xs font-bold text-[var(--text-main)]"><span className="text-[var(--primary-color)]">{item.number}</span><span>{item.count}</span></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
                        <span className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/15 border border-white/25 backdrop-blur-sm"><span className={item.icon + " text-xl"} aria-hidden="true"></span></span>
                        <span className="text-xs font-bold uppercase tracking-[.16em] text-white/90">Área profissional</span>
                    </div>
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1">
                    <p className="text-sm font-semibold text-[var(--primary-color)] mb-3">{item.subtitle}</p>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">{item.roles.map(role => <span key={role} className="inline-flex items-center rounded-full border border-[var(--surface-border)] bg-[var(--inner-card-color)] px-3 py-1.5 text-xs font-semibold text-[var(--text-muted)]">{role}</span>)}</div>
                    <div className="flex flex-wrap items-center gap-2 mb-5" aria-label="Principais tecnologias">
                        {item.technologies.map(tech => <span key={tech.name} className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--surface-border)] bg-[var(--inner-card-color)] px-2 py-1.5 text-[11px] font-semibold text-[var(--text-muted)]"><span className={"grid h-7 w-7 shrink-0 place-items-center rounded-md " + (tech.featured ? "bg-[#303b49] ring-1 ring-[#e6ad10]/60" : "bg-white")}>{tech.image ? <img src={tech.image} alt="" className={tech.featured ? "h-5 w-5 object-contain" : "h-4 w-4 object-contain"} /> : <span className={tech.icon + " text-base text-[#303b49]"} aria-hidden="true"></span>}</span><span>{tech.name}</span></span>)}
                    </div>
                    <div className="mt-auto pt-4 border-t border-[var(--surface-border)] flex items-center justify-between gap-3"><span className="text-sm font-bold text-[var(--primary-color)]">{item.action}</span><span className="w-9 h-9 rounded-full border border-[var(--surface-border)] flex items-center justify-center text-[var(--primary-color)] group-hover:bg-[var(--primary-color)] group-hover:text-white group-hover:border-[var(--primary-color)] transition-all"><span className="icon-arrow-up-right" aria-hidden="true"></span></span></div>
                </div>
            </a>
        );
    };

    return (
        <section id="projetos" className="py-24 relative" data-name="projects" data-file="components/Projects.js">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="section-title">Escolha um módulo para explorar</h2>
                    <p className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed">
                        Minha trajetória combina experiência em processos industriais com projetos de dados, desenvolvimento de software e automação. Selecione uma área ou projeto para conhecer as tecnologias e soluções em mais detalhes.
                    </p>
                </div>

                <div className="portfolio-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}>
                    <div className="portfolio-carousel-viewport" ref={viewportRef}>
                        <div className="portfolio-carousel-track" ref={trackRef}>{items.map(renderCard)}</div>
                    </div>
                    <div className="portfolio-carousel-controls" aria-label="Controles do carrossel">
                        <button type="button" onClick={() => goTo(index <= 0 ? maxIndex : index - 1)} aria-label="Projeto anterior" className="portfolio-carousel-arrow portfolio-carousel-arrow-left"><span className="icon-arrow-left" aria-hidden="true"></span></button>
                        <button type="button" onClick={() => goTo(index >= maxIndex ? 0 : index + 1)} aria-label="Próximo projeto" className="portfolio-carousel-arrow portfolio-carousel-arrow-right"><span className="icon-arrow-right" aria-hidden="true"></span></button>
                    </div>
                    <div className="flex items-center justify-center gap-3 mt-5">
                        <div className="flex items-center gap-1.5" aria-label="Paginação do carrossel">
                            {Array.from({ length: maxIndex + 1 }, (_, page) => <button key={page} type="button" onClick={() => goTo(page)} aria-label={"Ir para posição " + (page + 1)} className={"h-2.5 rounded-full transition-all duration-300 " + (index === page ? "w-7 bg-[var(--primary-color)]" : "w-2.5 bg-[var(--text-muted)]/40 hover:bg-[var(--primary-color)]/60")} />)}
                        </div>
                        <span className="text-xs text-[var(--text-muted)] tabular-nums">{index + 1} / {maxIndex + 1}</span>
                    </div>
                </div>
            </div>
            <style>{`
                 .portfolio-carousel { position: relative; margin-inline: 52px; }
                .portfolio-carousel-viewport { overflow: hidden; width: 100%; }
                .portfolio-carousel-controls { pointer-events: none; position: absolute; top: 0; bottom: 48px; left: -52px; right: -52px; display: flex; align-items: center; justify-content: space-between; z-index: 5; }
                .portfolio-carousel-arrow { pointer-events: auto; width: 44px; height: 44px; display: grid; place-items: center; border-radius: 9999px; border: 1px solid var(--surface-border); color: var(--primary-color); background: var(--card-color); box-shadow: 0 8px 24px var(--shadow-color); transition: transform 180ms ease, background 180ms ease, color 180ms ease; }
                .portfolio-carousel-arrow:hover { transform: scale(1.06); background: var(--primary-color); color: white; }
                .portfolio-carousel-arrow-left { margin-left: 0; }
                .portfolio-carousel-arrow-right { margin-right: 0; }
                @media (max-width: 760px) { .portfolio-carousel { margin-inline: 36px; } .portfolio-carousel-controls { left: -36px; right: -36px; } .portfolio-carousel-arrow { width: 38px; height: 38px; } }
                .portfolio-carousel-track { display: flex; gap: 24px; align-items: stretch; transition: transform 900ms cubic-bezier(.22,.61,.36,1); will-change: transform; }
                .portfolio-carousel-card { flex: 0 0 calc((100% - 48px) / 3); min-width: 0; align-self: stretch; }\n                .project-card > div:last-of-type { flex: 1; min-height: 0; }\n                .project-tech-icons { min-height: 74px; align-content: flex-start; }\n                .project-tech-mark { letter-spacing: -.04em; }
                @media (max-width: 1050px) and (min-width: 761px) { .portfolio-carousel-card { flex-basis: calc((100% - 24px) / 2);  } }
                @media (max-width: 760px) { .portfolio-carousel-track { gap: 16px; } .portfolio-carousel-card { flex-basis: 100%; height: auto;  } }
                @media (prefers-reduced-motion: reduce) { .portfolio-carousel-track { transition: none; } }
            `}</style>
        </section>
    );
}
