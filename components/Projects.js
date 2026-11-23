function Projects() {
    const modules = [
        {
            id: "dados",
            number: "01",
            title: "Dados & Business Intelligence",
            subtitle: "Análise, indicadores e inteligência para decisões melhores.",
            description: "Projetos com Power BI, modelagem de dados e SQL, conectando informações comerciais e operacionais a análises úteis para o negócio.",
            count: "02 projetos",
            roles: ["Análise de Dados", "Business Intelligence", "SQL"],
            technologies: [
                { name: "Power BI", image: "images/technologies/power-bi.svg", featured: true },
                { name: "Power Query", image: "images/technologies/power-query.svg" },
                { name: "DAX", image: "images/technologies/dax.svg" },
                { name: "Google Sheets", image: "images/technologies/google-sheets.svg" }
            ],
            image: "https://app.trickle.so/storage/public/images/usr_1f3f54a390000001/fe673bf6-ded4-4441-b90d-e823371b2ca2.jpeg",
            icon: "icon-chart-no-axes-combined",
            href: "modulo-dados.html",
            action: "Explorar módulo"
        },
        {
            id: "desenvolvimento",
            number: "02",
            title: "Desenvolvimento de Software",
            subtitle: "Aplicações web e soluções para operações reais.",
            description: "Aplicações web, plataformas SaaS e sistemas com APIs, bancos de dados, automações e inteligência artificial, incluindo Bloomio e Aprova.",
            count: "06 projetos",
            roles: ["Front-end", "Back-end", "Full Stack"],
            technologies: [
                { name: "TypeScript", image: "images/technologies/typescript.svg" },
                { name: "Three.js", icon: "icon-box" },
                { name: "Node.js", image: "images/technologies/nodejs.svg" },
                { name: "MySQL", image: "images/technologies/mysql.svg" }
            ],
            image: "images/erp3d/01-producao.jpg",
            icon: "icon-code-2",
            href: "modulo-desenvolvimento.html",
            action: "Explorar módulo"
        },
        {
            id: "automacao",
            number: "03",
            title: "Automação & Integração",
            subtitle: "Menos tarefas repetitivas. Mais eficiência operacional.",
            description: "Automação de rotinas administrativas e relatórios com Python, interação com ERP desktop e controles para conferência da execução.",
            count: "01 projeto",
            roles: ["Python", "RPA", "Processos"],
            technologies: [
                { name: "Python", image: "images/technologies/python.svg" },
                { name: "PyAutoGUI", icon: "icon-mouse-pointer-click" },
                { name: "Tkinter", icon: "icon-monitor" }
            ],
            image: "images/automacao/01-menu-principal.png?v=20261109",
            icon: "icon-workflow",
            href: "projeto-automacao-relatorios.html",
            action: "Ver estudo de caso"
        }
    ];

    return (
        <section id="projetos" className="py-24 relative" data-name="projects" data-file="components/Projects.js">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="section-title">Escolha um módulo para explorar</h2>
                    <p className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed">
                        Minha trajetória combina experiência em processos industriais com projetos de dados, desenvolvimento de software e automação. Selecione uma área para conhecer os projetos, tecnologias e soluções em mais detalhes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
                    {modules.map((module) => (
                        <a
                            key={module.id}
                            href={module.href}
                            className="glass-panel overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)]"
                            aria-label={module.action + ": " + module.title}
                        >
                            <div className={"px-6 md:px-7 pt-6 pb-4 " + (module.id === "desenvolvimento" ? "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-600" : "")}>
                                <h3 className={"text-xl md:text-2xl font-bold mb-0 " + (module.id === "desenvolvimento" ? "text-white" : "text-[var(--text-main)]")}>
                                    {module.title}
                                </h3>
                            </div>

                            <div className="relative aspect-[16/9] overflow-hidden bg-[var(--inner-card-color)]">
                                <img
                                    src={module.image}
                                    alt=""
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#150f18]/85 via-[#150f18]/10 to-transparent"></div>
                                <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-[var(--card-color)]/90 border border-[var(--surface-border)] text-xs font-bold text-[var(--text-main)]">
                                    <span className="text-[var(--primary-color)]">{module.number}</span>
                                    <span>{module.count}</span>
                                </div>
                                <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
                                    <span className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/15 border border-white/25 backdrop-blur-sm">
                                        <span className={module.icon + " text-xl"} aria-hidden="true"></span>
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/90">Área profissional</span>
                                </div>
                            </div>

                            <div className="p-6 md:p-7 flex flex-col flex-1">
                                <p className="text-sm font-semibold text-[var(--primary-color)] mb-3">{module.subtitle}</p>
                                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">{module.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {module.roles.map((role) => (
                                        <span key={role} className="inline-flex items-center rounded-full border border-[var(--surface-border)] bg-[var(--inner-card-color)] px-3 py-1.5 text-xs font-semibold text-[var(--text-muted)]">
                                            {role}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex flex-wrap items-center gap-2 mb-5" aria-label="Principais tecnologias do projeto">
                                    {module.technologies.map((tech) => (
                                        <span key={tech.name} className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--surface-border)] bg-[var(--inner-card-color)] px-2 py-1.5 text-[11px] font-semibold text-[var(--text-muted)]">
                                            <span className={"grid h-7 w-7 shrink-0 place-items-center rounded-md " + (tech.featured ? "bg-[#303b49] ring-1 ring-[#e6ad10]/60" : "bg-white")}>
                                                {tech.image
                                                    ? <img src={tech.image} alt="" className={tech.featured ? "h-5 w-5 object-contain" : "h-4 w-4 object-contain"} />
                                                    : <span className={tech.icon + " text-base text-[#303b49]"} aria-hidden="true"></span>}
                                            </span>
                                            <span>{tech.name}</span>
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto pt-4 border-t border-[var(--surface-border)] flex items-center justify-between gap-3">
                                    <span className="text-sm font-bold text-[var(--primary-color)]">{module.action}</span>
                                    <span className="w-9 h-9 rounded-full border border-[var(--surface-border)] flex items-center justify-center text-[var(--primary-color)] group-hover:bg-[var(--primary-color)] group-hover:text-white group-hover:border-[var(--primary-color)] transition-all">
                                        <span className="icon-arrow-up-right" aria-hidden="true"></span>
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-16">
                    <div className="max-w-3xl mb-8">
                        <h3 className="section-title">Projetos em destaque</h3>
                        <p className="text-base text-[var(--text-muted)] leading-relaxed">
                            Conheça duas aplicações completas, com estudos de caso, demonstrações e tecnologias utilizadas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 items-stretch">
                        <article className="glass-panel overflow-hidden flex flex-col">
                            <a href="projeto-bloomio.html" className="block relative aspect-[16/9] overflow-hidden bg-[var(--inner-card-color)]" aria-label="Ver estudo de caso do Bloomio">
                                <img src="images/bloomio/dashboard.webp" alt="Painel principal do Bloomio" loading="lazy" className="w-full h-full object-contain" />
                                <span className="absolute top-4 left-4 rounded-full px-3 py-1.5 bg-[var(--card-color)]/90 border border-[var(--surface-border)] text-xs font-bold text-[var(--text-main)]">SaaS · Produto proprietário</span>
                            </a>
                            <div className="p-6 flex flex-col flex-1">
                                <h4 className="text-xl font-bold mb-2">Bloomio · Gestão para negócios de beleza</h4>
                                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                                    Plataforma SaaS para salões, barbearias e clínicas de estética, com agenda, clientes, estoque, financeiro, comissões, relatórios e portal público de agendamento.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-5">
                                    <span className="rounded-full border border-[var(--surface-border)] bg-[var(--inner-card-color)] px-3 py-1.5 text-xs font-semibold text-[var(--text-muted)]">React · Vite</span>
                                    <span className="rounded-full border border-[var(--surface-border)] bg-[var(--inner-card-color)] px-3 py-1.5 text-xs font-semibold text-[var(--text-muted)]">Supabase · PostgreSQL</span>
                                    <span className="rounded-full border border-[var(--surface-border)] bg-[var(--inner-card-color)] px-3 py-1.5 text-xs font-semibold text-[var(--text-muted)]">RLS · Edge Functions</span>
                                </div>
                                <div className="mt-auto pt-4 border-t border-[var(--surface-border)] flex flex-wrap items-center gap-4">
                                    <a href="projeto-bloomio.html" className="text-sm font-bold text-[var(--primary-color)] hover:underline">Estudo de caso</a>
                                    <a href="https://bloomio.com.br/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[var(--primary-color)] hover:underline">Site do produto ↗</a>
                                </div>
                                <p className="text-xs text-[var(--text-muted)] mt-3">Código-fonte privado por se tratar de produto proprietário.</p>
                            </div>
                        </article>

                        <article className="glass-panel overflow-hidden flex flex-col">
                            <a href="projeto-aprova.html" className="block relative aspect-[16/9] overflow-hidden bg-[var(--inner-card-color)]" aria-label="Ver estudo de caso do Aprova">
                                <img src="images/aprova/visao-geral.webp" alt="Tela de simulados da plataforma Aprova" loading="lazy" className="w-full h-full object-cover" />
                                <span className="absolute top-4 left-4 rounded-full px-3 py-1.5 bg-[var(--card-color)]/90 border border-[var(--surface-border)] text-xs font-bold text-[var(--text-main)]">Plataforma educacional</span>
                            </a>
                            <div className="p-6 flex flex-col flex-1">
                                <h4 className="text-xl font-bold mb-2">Aprova · Plataforma de estudos</h4>
                                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                                    Ambiente de preparação para concursos com trilhas de estudo, diagnóstico, simulados, flashcards, redação, acompanhamento de progresso e professor com IA.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-5">
                                    <span className="rounded-full border border-[var(--surface-border)] bg-[var(--inner-card-color)] px-3 py-1.5 text-xs font-semibold text-[var(--text-muted)]">React · Vite</span>
                                    <span className="rounded-full border border-[var(--surface-border)] bg-[var(--inner-card-color)] px-3 py-1.5 text-xs font-semibold text-[var(--text-muted)]">Supabase · PostgreSQL</span>
                                    <span className="rounded-full border border-[var(--surface-border)] bg-[var(--inner-card-color)] px-3 py-1.5 text-xs font-semibold text-[var(--text-muted)]">TypeScript · Playwright</span>
                                </div>
                                <div className="mt-auto pt-4 border-t border-[var(--surface-border)] flex flex-wrap items-center gap-4">
                                    <a href="projeto-aprova.html" className="text-sm font-bold text-[var(--primary-color)] hover:underline">Estudo de caso</a>
                                    <a href="https://1959414-5.github.io/Aprova/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[var(--primary-color)] hover:underline">Demonstração ↗</a>
                                    <a href="https://github.com/1959414-5/Aprova" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[var(--primary-color)] hover:underline">GitHub ↗</a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
