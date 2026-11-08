function Projects() {
    try {
        const [selectedImage, setSelectedImage] = React.useState(null);
        const [dashboardIndex, setDashboardIndex] = React.useState(0);
        const [sqlEvidenceIndex, setSqlEvidenceIndex] = React.useState(0);
        const [modalImageIndex, setModalImageIndex] = React.useState(0);

        // Close modal with ESC key
        React.useEffect(() => {
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') setSelectedImage(null);
                if (e.key === 'ArrowLeft') setModalImageIndex((current) => (current - 1 + modalImages.length) % modalImages.length);
                if (e.key === 'ArrowRight') setModalImageIndex((current) => (current + 1) % modalImages.length);
            };
            if (selectedImage) {
                window.addEventListener('keydown', handleKeyDown);
                document.body.style.overflow = 'hidden';
            }
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
                document.body.style.overflow = 'auto';
            };
        }, [selectedImage]);

        const projects = [
            {
                id: "prod-dash",
                title: "Dashboard de Produção",
                image: "https://app.trickle.so/storage/public/images/usr_1f3f54a390000001/fe673bf6-ded4-4441-b90d-e823371b2ca2.jpeg",
                description: "Consolidação de informações de produção antes dispersas em relatórios do ERP, com acompanhamento operacional em uma única fonte.",
                tags: ["Power BI", "ERP", "Eficiência"],
                details: [
                    "As informações de produção e os indicadores estavam distribuídos em relatórios diferentes do ERP.",
                    "Dificuldade em monitorar produção e eficiência operacional.",
                    "Criação de um modelo de dados unificado no Power BI.",
                    "Rastreamento de KPIs e suporte à tomada de decisão."
                ]
            },
            {
                id: "orders-dash",
                title: "Dashboard de Pedidos & Atrasos",
                image: "https://app.trickle.so/storage/public/images/usr_1f3f54a390000001/253c27b1-7f7e-4cd5-aa89-dffd459fb73f.jpeg",
                description: "Monitoramento operacional para identificar atrasos e melhorar a gestão de entregas.",
                tags: ["Power BI", "Logística", "Gestão"],
                details: [
                    "Necessidade de visualizar pedidos em aberto e acompanhar prazos.",
                    "Organização dos pedidos por status e situação de entrega.",
                    "Construção de indicadores para destacar atrasos e prioridades.",
                    "Visão consolidada para apoiar o acompanhamento operacional."
                ]
            },
            {
                id: "ind-dash",
                title: "Indicadores de Produção",
                image: "https://app.trickle.so/storage/public/images/usr_1f3f54a390000001/1c3e9195-11dc-4974-912a-8b3275054126.jpeg",
                description: "Análise de métricas produtivas para identificar gargalos e produtividade.",
                tags: ["Power BI", "Métricas", "Operação"],
                details: [
                    "Necessidade de acompanhar indicadores de desempenho da produção.",
                    "Organização das métricas em uma visão analítica.",
                    "Acompanhamento de produtividade e identificação de pontos de atenção.",
                    "Indicadores apresentados para apoiar a análise da operação."
                ]
            },
            {
                id: "abc-dash",
                title: "Curva ABC Estratégica",
                image: "images/curva-abc.png",
                description: "Análise comercial estratégica para priorização de clientes e concentração de receita.",
                tags: ["Power BI", "Comercial", "Estratégia"],
                details: [
                    "Necessidade de identificar os clientes mais importantes.",
                    "Análise comercial e de concentração de receita.",
                    "Classificação dinâmica de produtos e clientes (ABC).",
                    "Melhor priorização de atendimento e foco comercial."
                ]
            },
            {
                id: "delivery-map",
                title: "Mapa de Entregas",
                image: "images/delivery-map.jpg",
                description: "Sistema web para planejamento e acompanhamento de rotas de entrega, com visualização geográfica em tempo real.",
                tags: ["JavaScript", "Leaflet.js", "Google Apps Script", "Logística"],
                details: [
                    "Necessidade de organizar entregas e consultar rotas em uma visão geográfica.",
                    "Desenvolvimento de mapa interativo com Leaflet.js para apoiar o planejamento.",
                    "Interfaces para coordenação, motoristas e consulta pela equipe de vendas.",
                    "Cadastro e reutilização de endereços de clientes."
                ]
            },
            {
                id: "sheet-control",
                title: "Controle de Chapas",
                image: "images/sheet-control.jpg",
                description: "Sistema de rastreamento de chapas metálicas, do estoque até a produção, com totem, painel de TV e conferência.",
                tags: ["Google Apps Script", "Google Sheets", "QR Code", "PCP"],
                details: [
                    "Necessidade de registrar a movimentação de chapas entre estoque e produção.",
                    "Interface de totem para registrar movimentações no chão de fábrica.",
                    "Painel de acompanhamento e página de conferência para o PCP.",
                    "Integração com Google Sheets e Apps Script."
                ]
            },
            {
                id: "stock-request",
                title: "Solicitação de Estoque",
                image: "images/stock-request.jpg",
                description: "Controle de estoque de peças com geração de etiquetas térmicas e leitura por QR Code.",
                tags: ["Google Apps Script", "Google Sheets", "QR Code", "GitHub Pages"],
                details: [
                    "Necessidade de identificar peças e acompanhar sua movimentação no estoque.",
                    "Aplicação web integrada ao Google Sheets e Apps Script.",
                    "Geração de etiquetas térmicas para identificação dos itens.",
                    "Leitura de QR Code para consulta e solicitação de peças."
                ]
            }
        ];

        const dashboardProjects = projects.slice(0, 4);
        const additionalProjects = projects.slice(4);

        const sqlEvidence = [
            { title: "Indicadores Comerciais", image: "https://raw.githubusercontent.com/1959414-5/erp-industrial-analytics/main/evidencias/01_indicadores_comerciais.png" },
            { title: "Análise de Pedidos", image: "https://raw.githubusercontent.com/1959414-5/erp-industrial-analytics/main/evidencias/02_analise_pedidos.png" },
            { title: "Saldo de Estoque", image: "https://raw.githubusercontent.com/1959414-5/erp-industrial-analytics/main/evidencias/03_saldo_estoque.png" },
            { title: "Necessidade de Materiais", image: "https://raw.githubusercontent.com/1959414-5/erp-industrial-analytics/main/evidencias/04_necessidade_materiais.png" },
            { title: "Indicadores de Produção", image: "https://raw.githubusercontent.com/1959414-5/erp-industrial-analytics/main/evidencias/05_indicadores_producao.png" },
            { title: "Consumo de Materiais", image: "https://raw.githubusercontent.com/1959414-5/erp-industrial-analytics/main/evidencias/06_consumo_materiais.png" }
        ];

        const sqlProjects = [
            {
                id: "erp-industrial-analytics",
                title: "ERP Industrial Analytics",
                image: "https://raw.githubusercontent.com/1959414-5/erp-industrial-analytics/main/evidencias/01_indicadores_comerciais.png",
                description: "Projeto demonstrativo de análise de dados com MySQL, baseado em uma indústria fictícia. Integra dados comerciais, compras, estoque e produção para gerar indicadores e apoiar decisões operacionais.",
                tags: ["MySQL 8.4", "SQL", "Modelagem Relacional", "CTEs", "Window Functions", "Performance"],
                repoUrl: "https://github.com/1959414-5/erp-industrial-analytics",
                pageUrl: "projeto-erp-industrial-analytics.html",
                details: [
                    "Modelagem relacional com tabelas de clientes, fornecedores, produtos, pedidos de venda e compra, estoque e ordens de produção.",
                    "Consultas analíticas com JOINs, agregações, CASE, CTEs, funções de janela e Views.",
                    "Indicadores e análises de faturamento, pedidos, saldo e reposição de estoque, produção, qualidade e consumo de materiais.",
                    "Análise de desempenho com EXPLAIN ANALYZE e comparação entre índices simples e compostos.",
                    "Base de dados 100% fictícia, criada para estudo e demonstração, sem informações confidenciais de empresas."
                ]
            }
        ];

        const modalImages = [...new Map([
            ...dashboardProjects,
            ...sqlEvidence,
            ...additionalProjects
        ].map((project) => [project.image, { image: project.image, title: project.title }])).values()];

        const openImage = (image) => {
            const index = modalImages.findIndex((item) => item.image === image);
            setModalImageIndex(index >= 0 ? index : 0);
            setSelectedImage(image);
        };

        const renderProjectCard = (project) => (
            <article key={project.id} className="glass-panel overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <button
                    type="button"
                    className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100/70 p-2 text-left"
                    onClick={() => openImage(project.image)}
                    aria-label={`Ampliar imagem de ${project.title}`}
                >
                    <img src={project.image} alt={project.title} className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]" />
                    <span className="absolute bottom-4 right-4 inline-flex items-center justify-center rounded-full bg-white/90 text-slate-800 p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                        <div className="icon-maximize text-lg"></div>
                    </span>
                </button>

                <div className="p-5 md:p-6 flex flex-col flex-1 gap-4">
                    <div>
                        <h4 className="text-xl font-bold text-[var(--text-main)] mb-2">{project.title}</h4>
                        <p className="text-sm md:text-base text-[var(--text-muted)] leading-relaxed">{project.description}</p>
                    </div>

                    <details className="project-details border-t border-[var(--surface-border)] pt-3">
                        <summary className="list-none flex items-center justify-between gap-3 cursor-pointer text-sm font-semibold text-[var(--text-main)] hover:text-[var(--primary-color)]">
                            <span>Ver solução e detalhes</span>
                            <span className="project-details-icon icon-plus text-[var(--primary-color)] transition-transform" aria-hidden="true"></span>
                        </summary>
                        <ul className="space-y-2 mt-4">
                            {project.details.map((detail, idx) => (
                                <li key={idx} className="flex gap-2 items-start text-sm text-[var(--text-muted)] leading-relaxed">
                                    <div className="icon-circle-check text-[var(--primary-color)] mt-1 flex-shrink-0"></div>
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </details>

                    {project.pageUrl && (
                        <a
                            href={project.pageUrl}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-color)] hover:underline"
                        >
                            <div className="icon-book-open text-base" aria-hidden="true"></div>
                            Ver estudo de caso completo
                            <div className="icon-arrow-up-right text-xs" aria-hidden="true"></div>
                        </a>
                    )}

                    {project.repoUrl && (
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-color)] hover:underline"
                        >
                            <div className="icon-github text-base" aria-hidden="true"></div>
                            Ver código-fonte no GitHub
                            <div className="icon-external-link text-xs" aria-hidden="true"></div>
                        </a>
                    )}

                    <div className="flex flex-wrap gap-2 pt-1 mt-auto">
                        {project.tags.map((tag, idx) => (
                            <span key={idx} className="text-xs font-medium px-3 py-1.5 rounded-full border border-[var(--surface-border)] bg-[var(--surface-color)] text-[var(--primary-color)]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        );

        return (
            <section id="projetos" className="py-24 relative" data-name="projects" data-file="components/Projects.js">
                <div className="container mx-auto px-6">
                    <h2 className="section-title">Projetos em Destaque</h2>
                    
                    <div className="glass-panel overflow-hidden mb-14 border border-[var(--surface-border)]">
                        <div className="p-6 md:p-8 lg:p-10">
                            <div className="flex flex-wrap items-center gap-2 mb-5">
                                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary-color)]">
                                    <span className="w-2 h-2 rounded-full bg-[var(--primary-color)]"></span>
                                    Case principal · Business Intelligence
                                </span>
                                <span className="rounded-full border border-[var(--surface-border)] px-3 py-1 text-xs text-[var(--text-muted)]">Power BI</span>
                            </div>

                            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-start">
                                <div>
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--text-main)] leading-tight mb-5">
                                        Dados comerciais e operacionais em uma visão integrada
                                    </h3>
                                    <p className="text-sm md:text-base text-[var(--text-muted)] leading-relaxed max-w-3xl">
                                        Solução de Business Intelligence desenvolvida para consolidar informações de diferentes rotinas do negócio e facilitar o acompanhamento de pedidos, produção, prazos e desempenho comercial.
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-5 mt-8">
                                        <div>
                                            <h4 className="text-sm font-bold text-[var(--text-main)] mb-2 flex items-center gap-2">
                                                <span className="icon-target text-[var(--primary-color)]" aria-hidden="true"></span>
                                                Contexto
                                            </h4>
                                            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                                Informações distribuídas em relatórios e controles distintos dificultavam uma leitura conjunta dos indicadores comerciais e operacionais.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-[var(--text-main)] mb-2 flex items-center gap-2">
                                                <span className="icon-chart-no-axes-combined text-[var(--primary-color)]" aria-hidden="true"></span>
                                                Solução
                                            </h4>
                                            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                                Organização dos dados em um modelo analítico no Power BI, com páginas e indicadores voltados ao acompanhamento de diferentes áreas.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-color)]/70 p-5 md:p-6">
                                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-muted)] mb-4">Escopo técnico</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="rounded-xl inner-card border border-[var(--surface-border)] p-4">
                                            <div className="text-2xl md:text-3xl font-bold text-[var(--primary-color)]">5</div>
                                            <div className="text-xs text-[var(--text-muted)] mt-1">páginas analíticas</div>
                                        </div>
                                        <div className="rounded-xl inner-card border border-[var(--surface-border)] p-4">
                                            <div className="text-2xl md:text-3xl font-bold text-[var(--primary-color)]">184</div>
                                            <div className="text-xs text-[var(--text-muted)] mt-1">medidas DAX</div>
                                        </div>
                                        <div className="rounded-xl inner-card border border-[var(--surface-border)] p-4 col-span-2">
                                            <div className="text-2xl md:text-3xl font-bold text-[var(--primary-color)]">~40</div>
                                            <div className="text-xs text-[var(--text-muted)] mt-1">tabelas de negócio no modelo</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-5">
                                        {["Power BI", "DAX", "Power Query", "Modelagem de Dados", "Google Sheets"].map((tag) => (
                                            <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full border border-[var(--surface-border)] text-[var(--primary-color)]">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-[var(--surface-border)] bg-[var(--bg-color)]/40 p-4 md:p-6">
                            <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold text-[var(--text-main)]">Quatro perspectivas da solução</h4>
                                    <p className="text-sm text-[var(--text-muted)] mt-1">Selecione uma imagem para ampliar a visualização.</p>
                                </div>
                                <span className="text-xs text-[var(--text-muted)]">Galeria do projeto</span>
                            </div>


                            <div className="relative">
                                <button type="button" className="relative block w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xl bg-slate-100/70 group" onClick={() => openImage(dashboardProjects[dashboardIndex].image)} aria-label={"Ampliar imagem de " + dashboardProjects[dashboardIndex].title}>
                                    <img src={dashboardProjects[dashboardIndex].image} alt={dashboardProjects[dashboardIndex].title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.015]" />
                                    <span className="absolute bottom-3 left-3 rounded-lg text-xs md:text-sm px-3 py-2 font-semibold shadow-lg" style={{ backgroundColor: "rgba(15, 23, 42, 0.92)", color: "#ffffff" }}>{dashboardProjects[dashboardIndex].title}</span>
                                    <span className="absolute bottom-3 right-3 rounded-full bg-white/90 text-slate-800 p-2 shadow-md"><span className="icon-maximize text-lg" aria-hidden="true"></span></span>
                                </button>
                                <button type="button" onClick={() => setDashboardIndex((dashboardIndex - 1 + dashboardProjects.length) % dashboardProjects.length)} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/95 hover:bg-white text-slate-900 shadow-lg p-3" aria-label="Imagem anterior">
                                    <span className="icon-chevron-left text-xl" aria-hidden="true"></span>
                                </button>
                                <button type="button" onClick={() => setDashboardIndex((dashboardIndex + 1) % dashboardProjects.length)} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/95 hover:bg-white text-slate-900 shadow-lg p-3" aria-label="Próxima imagem">
                                    <span className="icon-chevron-right text-xl" aria-hidden="true"></span>
                                </button>
                            </div>
                            <div className="flex items-center justify-center gap-2 mt-4">
                                {dashboardProjects.map((project, index) => (
                                    <button key={project.id} type="button" onClick={() => setDashboardIndex(index)} className={"h-2.5 rounded-full transition-all " + (dashboardIndex === index ? "w-7 bg-[var(--primary-color)]" : "w-2.5 bg-[var(--surface-border)]")} aria-label={"Ver " + project.title} aria-current={dashboardIndex === index ? "true" : undefined} />
                                ))}
                                <span className="ml-2 text-xs text-[var(--text-muted)] tabular-nums">{dashboardIndex + 1} / {dashboardProjects.length}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 mb-5">
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--text-main)]">Banco de dados e SQL</h3>
                        <p className="text-sm text-[var(--text-muted)] mt-1">Modelagem relacional, consultas analíticas e análise de performance com MySQL</p>
                    </div>

                    <article className="glass-panel overflow-hidden border border-[var(--surface-border)]">
                        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-0">
                            <div className="relative bg-slate-100/70 p-3 md:p-4 flex flex-col justify-center">
                                <button type="button" className="w-full aspect-[4/3] relative group" onClick={() => openImage(sqlEvidence[sqlEvidenceIndex].image)} aria-label={"Ampliar evidência: " + sqlEvidence[sqlEvidenceIndex].title}>
                                    <img src={sqlEvidence[sqlEvidenceIndex].image} alt={sqlEvidence[sqlEvidenceIndex].title} className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.015]" />
                                    <span className="absolute bottom-3 left-3 rounded-lg px-3 py-2 text-xs md:text-sm font-semibold shadow-lg" style={{ backgroundColor: "rgba(15, 23, 42, 0.92)", color: "#ffffff" }}>{sqlEvidence[sqlEvidenceIndex].title}</span>
                                    <span className="absolute bottom-3 right-3 rounded-full bg-white/95 text-slate-800 p-3 shadow-md"><span className="icon-maximize text-lg" aria-hidden="true"></span></span>
                                </button>
                                <button type="button" onClick={() => setSqlEvidenceIndex((sqlEvidenceIndex - 1 + sqlEvidence.length) % sqlEvidence.length)} className="absolute left-5 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/95 hover:bg-white text-slate-900 shadow-lg p-3" aria-label="Evidência anterior"><span className="icon-chevron-left text-xl" aria-hidden="true"></span></button>
                                <button type="button" onClick={() => setSqlEvidenceIndex((sqlEvidenceIndex + 1) % sqlEvidence.length)} className="absolute right-5 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/95 hover:bg-white text-slate-900 shadow-lg p-3" aria-label="Próxima evidência"><span className="icon-chevron-right text-xl" aria-hidden="true"></span></button>
                                <div className="flex justify-center items-center gap-2 mt-2">
                                    {sqlEvidence.map((item, index) => <button key={item.title} type="button" onClick={() => setSqlEvidenceIndex(index)} className={"h-2.5 rounded-full transition-all " + (sqlEvidenceIndex === index ? "w-7 bg-[var(--primary-color)]" : "w-2.5 bg-slate-400/40")} aria-label={"Ver " + item.title} />)}
                                    <span className="ml-2 text-xs text-slate-600 tabular-nums">{sqlEvidenceIndex + 1} / {sqlEvidence.length}</span>
                                </div>
                            </div>

                            <div className="p-5 md:p-7 lg:p-8 flex flex-col justify-start">
                                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary-color)] mb-2">Projeto prático · MySQL</span>
                                <h4 className="text-2xl md:text-3xl font-bold text-[var(--text-main)] mb-3">{sqlProjects[0].title}</h4>
                                <p className="text-sm md:text-base text-[var(--text-muted)] leading-relaxed mb-4">
                                    Banco de dados relacional desenvolvido para simular a operação de uma indústria. O projeto conecta informações de vendas, compras, produtos, estoque e produção em uma base fictícia, permitindo praticar consultas SQL e construir análises próximas de problemas reais de negócio.
                                </p>
                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    <div className="rounded-xl border border-[var(--surface-border)] inner-card p-4"><div className="text-2xl font-bold text-[var(--primary-color)]">11</div><div className="text-xs text-[var(--text-muted)] mt-1">tabelas relacionais</div></div>
                                    <div className="rounded-xl border border-[var(--surface-border)] inner-card p-4"><div className="text-2xl font-bold text-[var(--primary-color)]">2</div><div className="text-xs text-[var(--text-muted)] mt-1">views SQL</div></div>
                                </div>
                                <p className="text-sm font-semibold text-[var(--text-main)] mb-2">O que foi desenvolvido</p>
                                <ul className="space-y-2 mb-4">
                                    {[
                                        "Modelagem relacional com chaves primárias, estrangeiras e restrições.",
                                        "Consultas com JOINs, agregações, CTEs e Window Functions.",
                                        "Views para organizar consultas analíticas de faturamento e estoque.",
                                        "Testes de desempenho com EXPLAIN ANALYZE e análise de índices."
                                    ].map((item, index) => (
                                        <li key={index} className="flex gap-2 items-start text-sm text-[var(--text-muted)] leading-relaxed"><span className="icon-check text-[var(--primary-color)] mt-1 flex-shrink-0" aria-hidden="true"></span><span>{item}</span></li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {sqlProjects[0].tags.map((tag) => <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full border border-[var(--surface-border)] bg-[var(--surface-color)] text-[var(--primary-color)]">{tag}</span>)}
                                </div>
                                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                                    <a href={sqlProjects[0].pageUrl} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-color)] hover:underline"><span className="icon-book-open" aria-hidden="true"></span>Ver estudo de caso completo</a>
                                    <a href={sqlProjects[0].repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-color)] hover:underline"><span className="icon-github" aria-hidden="true"></span>Explorar repositório no GitHub</a>
                                </div>
                            </div>
                        </div>
                    </article>

                    <div className="mt-16 mb-5">
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--text-main)]">Outras soluções digitais</h3>
                        <p className="text-sm text-[var(--text-muted)] mt-1">Aplicações e automações desenvolvidas para necessidades operacionais</p>
                    </div>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {additionalProjects.map(renderProjectCard)}
                    </div>
                </div>

                {/* Fullscreen Image Modal */}
                {selectedImage && (
                    <div 
                        className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-4 bg-[#0b1121] bg-opacity-90 backdrop-blur-sm animate-fade-in"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="absolute top-4 right-4 z-20">
                            <button 
                                onClick={() => setSelectedImage(null)} 
                                className="p-3 rounded-full bg-[var(--surface-color)] hover:bg-[var(--primary-color)] text-white transition-colors"
                            >
                                <div className="icon-x text-2xl"></div>
                            </button>
                        </div>
                        
                        <div className="relative flex items-center justify-center w-full h-full" onClick={(e) => e.stopPropagation()}>
                            <button type="button" onClick={() => setModalImageIndex((modalImageIndex - 1 + modalImages.length) % modalImages.length)} className="absolute left-1 md:left-6 z-20 rounded-full bg-white/95 hover:bg-white text-slate-900 shadow-xl p-3 md:p-4" aria-label="Imagem anterior">
                                <span className="icon-chevron-left text-2xl" aria-hidden="true"></span>
                            </button>
                            <div className="flex flex-col items-center justify-center max-w-[85vw] max-h-[88vh]">
                                <img src={modalImages[modalImageIndex]?.image || selectedImage} className="max-w-full max-h-[78vh] object-contain rounded-lg animate-slide-up shadow-2xl" alt={modalImages[modalImageIndex]?.title || "Visualização em tela cheia"} />
                                <div className="mt-3 text-center text-sm text-white font-medium">
                                    {modalImages[modalImageIndex]?.title || ""}
                                    <span className="ml-3 text-white/70 tabular-nums">{modalImageIndex + 1} / {modalImages.length}</span>
                                </div>
                            </div>
                            <button type="button" onClick={() => setModalImageIndex((modalImageIndex + 1) % modalImages.length)} className="absolute right-1 md:right-6 z-20 rounded-full bg-white/95 hover:bg-white text-slate-900 shadow-xl p-3 md:p-4" aria-label="Próxima imagem">
                                <span className="icon-chevron-right text-2xl" aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>
                )}
            </section>
        );
    } catch (error) {
        console.error('Projects component error:', error);
        return null;
    }
}
