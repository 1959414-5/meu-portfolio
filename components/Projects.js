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
                description: "Solução para descentralização de dados entre ERP e planilhas, melhorando a visibilidade operacional.",
                tags: ["Power BI", "ERP", "Eficiência"],
                details: [
                    "A empresa possuía dados descentralizados entre ERP e planilhas.",
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
                    "Dificuldade em identificar pedidos atrasados em tempo real.",
                    "Necessidade de monitoramento operacional contínuo.",
                    "Criação de painel para rastreamento de status de pedidos.",
                    "Melhoria significativa na gestão operacional e comunicação."
                ]
            },
            {
                id: "ind-dash",
                title: "Indicadores de Produção",
                image: "https://app.trickle.so/storage/public/images/usr_1f3f54a390000001/1c3e9195-11dc-4974-912a-8b3275054126.jpeg",
                description: "Análise de métricas produtivas para identificar gargalos e produtividade.",
                tags: ["Power BI", "Métricas", "Operação"],
                details: [
                    "Falta de indicadores estratégicos operacionais estruturados.",
                    "Dashboard desenvolvido com foco em eficiência e análise.",
                    "Melhor visibilidade de gargalos na linha de produção.",
                    "Aumento da capacidade analítica dos gestores de fábrica."
                ]
            },
            {
                id: "abc-dash",
                title: "Curva ABC Estratégica",
                image: "https://app.trickle.so/storage/public/images/usr_1f3f54a390000001/73461f75-28ed-499d-8553-a9795eb94d04.Curva ABC Estratégica",
                description: "Análise comercial estratégica para priorização de clientes e concentração de receita.",
                tags: ["Power BI", "Comercial", "Estratégia"],
                details: [
                    "Necessidade de identificar os clientes mais importantes.",
                    "Análise comercial e de concentração de receita.",
                    "Classificação dinâmica de produtos e clientes (ABC).",
                    "Melhor priorização de atendimento e foco comercial."
                ]
            }
        ];

        return (
            <section id="projetos" className="py-24 relative" data-name="projects" data-file="components/Projects.js">
                <div className="container mx-auto px-6">
                    <h2 className="section-title">Projetos em Destaque</h2>
                    
                    <div className="space-y-16">
                        {projects.map((project, index) => (
                            <div key={project.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}>
                                
                                {/* Image Container */}
                                <div className="w-full lg:w-1/2">
                                    <div 
                                        className="glass-panel aspect-[16/10] flex flex-col items-center justify-center p-2 border-2 border-[var(--surface-border)] group hover:border-[var(--primary-color)] transition-colors relative overflow-hidden rounded-xl cursor-pointer"
                                        onClick={() => setSelectedImage(project.image)}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface-color)] to-transparent opacity-50"></div>
                                        <img src={project.image} alt={project.title} className="w-full h-full object-contain rounded-lg z-10 relative group-hover:scale-[1.02] transition-transform duration-500" />
                                        
                                        {/* Hover Overlay for "Click to expand" */}
                                        <div className="absolute inset-0 bg-[#0b1121] bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 z-20 flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 bg-[var(--primary-color)] text-white p-3 rounded-full shadow-lg">
                                                <div className="icon-maximize text-xl"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-[10px] md:text-xs text-[var(--text-muted)] mt-4 italic flex items-center justify-center md:justify-start gap-1.5 opacity-80">
                                        <div className="icon-shield-check text-[var(--primary-color)]"></div>
                                        <span>Dados anonimizados para preservação de confidencialidade corporativa.</span>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="w-full lg:w-1/2 space-y-5 md:space-y-6 text-center lg:text-left">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                                    <p className="text-base md:text-lg text-[var(--text-muted)]">{project.description}</p>
                                    
                                    <div className="space-y-3">
                                        {project.details.map((detail, idx) => (
                                            <div key={idx} className="flex gap-3 items-start">
                                                <div className="icon-circle-check text-[var(--primary-color)] mt-1 flex-shrink-0"></div>
                                                <span className="text-[var(--text-main)] text-sm md:text-base">{detail}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="text-xs font-medium px-3 py-1 glass-panel text-[var(--primary-color)] rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
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