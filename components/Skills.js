function Skills() {
    try {
        const [selectedSkill, setSelectedSkill] = React.useState(null);

        const skills = [
            { 
                name: "Power BI", 
                icon: "icon-chart-pie", 
                color: "text-yellow-400",
                details: [
                    "Desenvolvimento de dashboards analíticos",
                    "Criação de indicadores estratégicos",
                    "Modelagem de dados",
                    "Power Query",
                    "DAX intermediário",
                    "Publicação no Power BI Service",
                    "Gestão à vista e acompanhamento operacional"
                ]
            },
            { 
                name: "Excel Avançado", 
                icon: "icon-file-spreadsheet", 
                color: "text-green-500",
                details: [
                    "Fórmulas avançadas",
                    "Tabelas dinâmicas",
                    "Tratamento de dados",
                    "Organização de bases",
                    "Análise operacional",
                    "Relatórios gerenciais",
                    "Scripts com Apps Script"
                ]
            },
            { 
                name: "SQL", 
                icon: "icon-database", 
                color: "text-blue-400",
                details: [
                    "Consultas básicas",
                    "Filtros e manipulação de dados",
                    "Extração de informações",
                    "Validação de dados",
                    "Consultas em bases já modeladas"
                ]
            },
            { 
                name: "Business Intelligence", 
                icon: "icon-lightbulb", 
                color: "text-purple-400",
                details: [
                    "Construção de indicadores",
                    "Visualização estratégica",
                    "Transformação de dados em insights",
                    "Apoio à tomada de decisão",
                    "Gestão orientada a dados"
                ]
            },
            { 
                name: "Sistemas ERP", 
                icon: "icon-server", 
                color: "text-gray-300",
                details: [
                    "Utilização de ERP industrial",
                    "Análise de pedidos e produção",
                    "Extração de informações operacionais",
                    "Acompanhamento de processos",
                    "Fluxos operacionais"
                ]
            },
            { 
                name: "Modelagem de Dados", 
                icon: "icon-network", 
                color: "text-indigo-400",
                details: [
                    "Relacionamentos entre tabelas",
                    "Estruturação de dados",
                    "Organização de métricas",
                    "Construção de modelos analíticos"
                ]
            },
            { 
                name: "Análise de Processos", 
                icon: "icon-git-branch", 
                color: "text-orange-400",
                details: [
                    "Identificação de gargalos",
                    "Monitoramento operacional",
                    "Melhoria contínua",
                    "Eficiência produtiva",
                    "Acompanhamento de indicadores"
                ]
            },
            { 
                name: "Indicadores Estratégicos", 
                icon: "icon-target", 
                color: "text-red-400",
                details: [
                    "KPIs operacionais",
                    "Indicadores de produtividade",
                    "Indicadores comerciais",
                    "Gestão à vista",
                    "Métricas de acompanhamento"
                ]
            },
            { 
                name: "Data Visualization", 
                icon: "icon-layout-dashboard", 
                color: "text-teal-400",
                details: [
                    "Criação de dashboards executivos",
                    "Visual limpo e moderno",
                    "Storytelling com dados",
                    "Visualização estratégica",
                    "Comunicação visual de indicadores"
                ]
            },
            { 
                name: "Análise de Negócios", 
                icon: "icon-trending-up", 
                color: "text-pink-400",
                details: [
                    "Interpretação de cenários",
                    "Apoio à tomada de decisão",
                    "Visão operacional",
                    "Conexão entre dados e negócio",
                    "Insights estratégicos"
                ]
            }
        ];

        // Fechar modal com a tecla ESC
        React.useEffect(() => {
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') setSelectedSkill(null);
            };
            if (selectedSkill) {
                window.addEventListener('keydown', handleKeyDown);
                // Prevenir scroll do body quando modal está aberto
                document.body.style.overflow = 'hidden';
            }
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
                document.body.style.overflow = 'auto';
            };
        }, [selectedSkill]);

        return (
            <section id="habilidades" className="py-24 relative bg-[var(--bg-color)]" data-name="skills" data-file="components/Skills.js">
                <div className="container mx-auto px-6">
                    <h2 className="section-title">Habilidades Técnicas</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                        {skills.map((skill, index) => (
                            <div 
                                key={index} 
                                onClick={() => setSelectedSkill(skill)}
                                className="glass-panel p-6 flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)] hover:border-[var(--primary-color)] transition-all duration-300 cursor-pointer group relative overflow-hidden"
                            >
                                {/* Subtle background glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--primary-color)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none"></div>
                                
                                <div className="p-4 rounded-full bg-[var(--surface-color)] group-hover:bg-opacity-80 transition-colors z-10 mb-2">
                                    <div className={`${skill.icon} text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}></div>
                                </div>
                                <span className="font-medium text-sm md:text-base text-[var(--text-main)] group-hover:text-white z-10 transition-colors">{skill.name}</span>
                                
                                {/* "Clique para ver mais" text revealed on hover */}
                                <div className="h-4 overflow-hidden mt-1 z-10 w-full flex justify-center">
                                    <span className="text-xs text-[var(--primary-color)] font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1">
                                        Clique para ver mais <div className="icon-arrow-right text-[10px]"></div>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal for detailed skill view */}
                {selectedSkill && (
                    <div 
                        className="fixed inset-0 z-[100] flex items-center justify-center px-4"
                        onClick={() => setSelectedSkill(null)}
                    >
                        {/* Overlay backdrop */}
                        <div className="absolute inset-0 bg-[#0b1121] bg-opacity-70 backdrop-blur-md animate-fade-in pointer-events-none"></div>
                        
                        {/* Modal Box */}
                        <div 
                            className="glass-panel border-[var(--primary-color)] shadow-[0_0_50px_rgba(14,165,233,0.15)] max-w-lg w-full relative z-10 animate-slide-up overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="absolute top-0 right-0 p-4 z-20">
                                <button 
                                    onClick={() => setSelectedSkill(null)} 
                                    className="p-2 rounded-full hover:bg-[var(--surface-color)] text-[var(--text-muted)] hover:text-white transition-colors"
                                >
                                    <div className="icon-x text-xl"></div>
                                </button>
                            </div>

                            <div className="p-8">
                                <div className="flex items-center gap-5 mb-8">
                                    <div className={`p-4 rounded-xl bg-[var(--surface-color)] shadow-inner`}>
                                        <div className={`${selectedSkill.icon} text-4xl ${selectedSkill.color}`}></div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{selectedSkill.name}</h3>
                                        <p className="text-sm text-[var(--primary-color)]">Competências & Conhecimentos</p>
                                    </div>
                                </div>
                                
                                <ul className="space-y-4">
                                    {selectedSkill.details.map((detail, idx) => (
                                        <li 
                                            key={idx} 
                                            className="flex items-start gap-3 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors duration-200"
                                            style={{ animationDelay: `${idx * 0.05}s` }}
                                        >
                                            <div className="icon-circle-check text-[var(--primary-color)] mt-1 flex-shrink-0 shadow-[0_0_10px_rgba(14,165,233,0.3)] rounded-full"></div>
                                            <span className="leading-relaxed">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        );
    } catch (error) {
        console.error('Skills component error:', error);
        return null;
    }
}