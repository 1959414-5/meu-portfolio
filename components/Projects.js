function Projects() {
    try {
        const [selectedImage, setSelectedImage] = React.useState(null);

        // Close modal with ESC key
        React.useEffect(() => {
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') setSelectedImage(null);
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

        const renderProjectCard = (project) => (
            <article key={project.id} className="glass-panel overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <button
                    type="button"
                    className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100/70 p-2 text-left"
                    onClick={() => setSelectedImage(project.image)}
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
                    
                    <div className="glass-panel p-6 md:p-8 mb-12 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center border border-[var(--surface-border)]">
                        <div>
                            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary-color)] mb-4">
                                <span className="w-2 h-2 rounded-full bg-[var(--primary-color)]"></span>
                                Projeto em destaque · Business Intelligence
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-main)] leading-tight mb-4">
                                Uma visão integrada dos dados comerciais e operacionais
                            </h3>
                            <p className="text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
                                Desenvolvimento de uma solução de BI para organizar informações comerciais e operacionais em dashboards interativos. O projeto reúne visões de pedidos, produção, prazos e análise comercial, conectando indicadores às rotinas de acompanhamento do negócio.
                            </p>
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)] mb-3">Escopo técnico</p>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-color)]/70 p-4">
                                    <div className="text-2xl md:text-3xl font-bold text-[var(--primary-color)]">5</div>
                                    <div className="text-xs md:text-sm text-[var(--text-muted)] mt-1">módulos funcionais</div>
                                </div>
                                <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-color)]/70 p-4">
                                    <div className="text-2xl md:text-3xl font-bold text-[var(--primary-color)]">184</div>
                                    <div className="text-xs md:text-sm text-[var(--text-muted)] mt-1">medidas DAX</div>
                                </div>
                                <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-color)]/70 p-4">
                                    <div className="text-2xl md:text-3xl font-bold text-[var(--primary-color)]">~40</div>
                                    <div className="text-xs md:text-sm text-[var(--text-muted)] mt-1">tabelas de negócio</div>
                                </div>
                                <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-color)]/70 p-4">
                                    <div className="text-2xl md:text-3xl font-bold text-[var(--primary-color)]">12</div>
                                    <div className="text-xs md:text-sm text-[var(--text-muted)] mt-1">relacionamentos no modelo</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-end justify-between gap-4 mb-5">
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-[var(--text-main)]">Solução de BI · Comercial e Operações</h3>
                            <p className="text-sm text-[var(--text-muted)] mt-1">Quatro perspectivas complementares de acompanhamento</p>
                        </div>
                        <span className="hidden sm:inline-flex rounded-full border border-[var(--surface-border)] px-3 py-1.5 text-xs text-[var(--text-muted)]">04 visões da solução</span>
                    </div>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {dashboardProjects.map(renderProjectCard)}
                    </div>

                    <div className="mt-16 mb-5">
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--text-main)]">Banco de dados e SQL</h3>
                        <p className="text-sm text-[var(--text-muted)] mt-1">Modelagem relacional, consultas analíticas e análise de performance com MySQL</p>
                    </div>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {sqlProjects.map(renderProjectCard)}
                    </div>

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
                        
                        <img 
                            src={selectedImage} 
                            className="max-w-full max-h-full object-contain rounded-lg animate-slide-up shadow-2xl" 
                            alt="Visualização em tela cheia" 
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}
            </section>
        );
    } catch (error) {
        console.error('Projects component error:', error);
        return null;
    }
}
