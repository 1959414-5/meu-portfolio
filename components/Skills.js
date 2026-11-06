function Skills() {
    try {
        const [selectedSkill, setSelectedSkill] = React.useState(null);

        const skillGroups = [
            {
                title: "Ferramentas",
                description: "Tecnologias utilizadas para análise, tratamento, visualização e automação de dados.",
                skills: [
                    {
                        name: "Power BI",
                        level: "Avançado",
                        icon: "icon-chart-pie",
                        color: "text-yellow-400",
                        details: [
                            "Desenvolvimento de dashboards analíticos",
                            "Criação e acompanhamento de indicadores",
                            "Modelagem de dados",
                            "Power Query para tratamento e transformação",
                            "DAX para criação de medidas e métricas",
                            "Publicação e organização no Power BI Service",
                            "Gestão à vista e acompanhamento operacional"
                        ]
                    },
                    {
                        name: "Excel",
                        level: "Avançado",
                        icon: "icon-file-spreadsheet",
                        color: "text-green-500",
                        details: [
                            "Fórmulas e funções avançadas",
                            "Tabelas e gráficos dinâmicos",
                            "Tratamento e organização de bases",
                            "Análise operacional e comercial",
                            "Relatórios gerenciais",
                            "Estruturação de controles e indicadores"
                        ]
                    },
                    {
                        name: "SQL",
                        level: "Intermediário",
                        icon: "icon-database",
                        color: "text-blue-400",
                        details: [
                            "Consultas para extração de dados",
                            "Filtros, ordenação e agregações",
                            "Manipulação de dados",
                            "Validação e conferência de informações",
                            "Consultas em bases já estruturadas"
                        ]
                    },
                    {
                        name: "Google Sheets",
                        level: "Avançado",
                        icon: "icon-table",
                        color: "text-emerald-400",
                        details: [
                            "Estruturação de bases para controle operacional",
                            "Fórmulas e organização de dados",
                            "Criação de controles compartilhados",
                            "Integração com automações",
                            "Utilização em rotinas de acompanhamento e gestão"
                        ]
                    },
                    {
                        name: "Google Apps Script",
                        level: "Intermediário",
                        icon: "icon-code",
                        color: "text-orange-400",
                        details: [
                            "Automação de rotinas administrativas e operacionais",
                            "Integração entre Google Sheets e aplicações web",
                            "Atualização e processamento automático de dados",
                            "Criação de fluxos para redução de tarefas manuais",
                            "Desenvolvimento de soluções internas orientadas a processos"
                        ]
                    },
                    {
                        name: "JavaScript",
                        level: "Intermediário",
                        icon: "icon-code",
                        color: "text-cyan-300",
                        details: [
                            "Lógica de programação",
                            "Manipulação de dados no front-end",
                            "Desenvolvimento de interfaces",
                            "Integração com APIs e serviços web",
                            "Criação de ferramentas e aplicações internas"
                        ]
                    },
                    {
                        name: "Sistemas ERP",
                        level: "Avançado",
                        icon: "icon-server",
                        color: "text-gray-300",
                        details: [
                            "Experiência prática com ERP industrial",
                            "Extração de informações operacionais",
                            "Acompanhamento de pedidos e produção",
                            "Análise de processos comerciais",
                            "Utilização de dados do ERP para indicadores e relatórios"
                        ]
                    }
                ]
            },

            {
                title: "Dados",
                description: "Conhecimentos aplicados à preparação, modelagem, transformação e visualização de dados.",
                skills: [
                    {
                        name: "Modelagem de Dados",
                        level: "Intermediário",
                        icon: "icon-network",
                        color: "text-indigo-400",
                        details: [
                            "Relacionamentos entre tabelas",
                            "Estruturação de modelos analíticos",
                            "Organização de dimensões e fatos",
                            "Definição de métricas",
                            "Preparação de modelos para dashboards"
                        ]
                    },
                    {
                        name: "Power Query",
                        level: "Intermediário",
                        icon: "icon-filter",
                        color: "text-sky-300",
                        details: [
                            "Importação de diferentes fontes",
                            "Limpeza e padronização de dados",
                            "Transformação de colunas e tabelas",
                            "Tratamento de inconsistências",
                            "Preparação de dados para análise no Power BI"
                        ]
                    },
                    {
                        name: "DAX",
                        level: "Intermediário",
                        icon: "icon-square-function",
                        color: "text-amber-300",
                        details: [
                            "Criação de medidas",
                            "Cálculos com contexto de filtro",
                            "Indicadores e métricas calculadas",
                            "Comparações entre períodos",
                            "Aplicação de regras de negócio"
                        ]
                    },
                    {
                        name: "ETL & Tratamento",
                        level: "Intermediário",
                        icon: "icon-git-branch",
                        color: "text-violet-300",
                        details: [
                            "Extração de dados de ERP e planilhas",
                            "Limpeza e padronização",
                            "Transformação de bases",
                            "Validação de consistência",
                            "Preparação de dados para análise"
                        ]
                    },
                    {
                        name: "Data Visualization",
                        level: "Avançado",
                        icon: "icon-layout-dashboard",
                        color: "text-teal-400",
                        details: [
                            "Criação de dashboards executivos e operacionais",
                            "Escolha de visuais de acordo com o objetivo da análise",
                            "Organização hierárquica das informações",
                            "Destaque de KPIs",
                            "Storytelling com dados",
                            "Comunicação visual de indicadores"
                        ]
                    }
                ]
            },

            {
                title: "Negócio",
                description: "Aplicação dos dados para compreender processos, acompanhar indicadores e apoiar decisões.",
                skills: [
                    {
                        name: "KPIs & Indicadores",
                        level: "Avançado",
                        icon: "icon-target",
                        color: "text-red-400",
                        details: [
                            "Estruturação de KPIs operacionais",
                            "Indicadores de produtividade",
                            "Indicadores comerciais",
                            "Indicadores de acompanhamento de prazos",
                            "Gestão à vista",
                            "Monitoramento de desempenho"
                        ]
                    },
                    {
                        name: "Análise de Processos",
                        level: "Avançado",
                        icon: "icon-git-branch",
                        color: "text-orange-300",
                        details: [
                            "Mapeamento de fluxos operacionais",
                            "Identificação de gargalos",
                            "Análise de causas e impactos",
                            "Monitoramento de desempenho",
                            "Apoio à melhoria contínua",
                            "Visão de processos industriais e comerciais"
                        ]
                    },
                    {
                        name: "Business Intelligence",
                        level: "Avançado",
                        icon: "icon-lightbulb",
                        color: "text-purple-400",
                        details: [
                            "Transformação de dados em informações úteis",
                            "Construção de indicadores",
                            "Visualização estratégica",
                            "Apoio à tomada de decisão",
                            "Conexão entre dados e necessidades do negócio",
                            "Gestão orientada a dados"
                        ]
                    },
                    {
                        name: "Análise de Negócios",
                        level: "Avançado",
                        icon: "icon-trending-up",
                        color: "text-pink-400",
                        details: [
                            "Interpretação de cenários",
                            "Análise de desempenho",
                            "Identificação de oportunidades",
                            "Visão operacional e comercial",
                            "Conexão entre indicadores e processos",
                            "Apoio à tomada de decisão"
                        ]
                    }
                ]
            }
        ];

        const totalSkills = skillGroups.reduce(
            (total, group) => total + group.skills.length,
            0
        );

        React.useEffect(() => {
            const handleKeyDown = (e) => {
                if (e.key === "Escape") {
                    setSelectedSkill(null);
                }
            };

            if (selectedSkill) {
                window.addEventListener("keydown", handleKeyDown);
                document.body.style.overflow = "hidden";
            }

            return () => {
                window.removeEventListener("keydown", handleKeyDown);
                document.body.style.overflow = "auto";
            };
        }, [selectedSkill]);

        const getLevelClasses = (level) => {
            if (level === "Avançado") return "skill-level-advanced";
            if (level === "Intermediário") return "skill-level-intermediate";
            return "skill-level-basic";
        };

        return (
            <section
                id="habilidades"
                className="py-20 lg:py-24 relative bg-[var(--bg-color)]"
                data-name="skills"
                data-file="components/Skills.js"
            >
                <style>{`
                    .skill-card-icon, .skill-card-icon::before { color: var(--primary-color) !important; }
                    .skill-level-advanced { color: #047857; background: rgba(16,185,129,.09); border-color: rgba(16,185,129,.24); }
                    .skill-level-intermediate { color: #0369a1; background: rgba(14,165,233,.09); border-color: rgba(14,165,233,.24); }
                    .skill-level-basic { color: #92400e; background: rgba(245,158,11,.10); border-color: rgba(245,158,11,.25); }
                    html[data-theme="dark"] .skill-level-advanced { color: #6ee7b7; background: rgba(16,185,129,.10); border-color: rgba(110,231,183,.22); }
                    html[data-theme="dark"] .skill-level-intermediate { color: #7dd3fc; background: rgba(14,165,233,.10); border-color: rgba(125,211,252,.22); }
                    html[data-theme="dark"] .skill-level-basic { color: #fcd34d; background: rgba(245,158,11,.10); border-color: rgba(252,211,77,.22); }
                `}</style>
                <div className="container mx-auto px-6">

                    <div className="text-center mb-10">
                        <h2 className="section-title mb-4">
                            Habilidades Técnicas
                        </h2>

                        <p className="text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed">
                            Ferramentas, conhecimentos em dados e visão de negócio
                            aplicados à construção de dashboards, análises e
                            automações para problemas reais.
                        </p>
                    </div>

                    <div className="space-y-10">

                        {skillGroups.map((group, groupIndex) => (
                            <div key={group.title}>

                                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-4">

                                    <div>

                                        <div className="flex items-center gap-3">

                                            <div className="w-1.5 h-6 rounded-full bg-[var(--primary-color)]"></div>

                                            <h3 className="text-xl font-bold text-[var(--text-main)]">
                                                {group.title}
                                            </h3>

                                        </div>

                                        <p className="text-sm text-[var(--text-muted)] mt-2 md:ml-4 max-w-3xl">
                                            {group.description}
                                        </p>

                                    </div>

                                    <div className="text-xs text-[var(--text-muted)] md:mb-1">
                                        {group.skills.length}{" "}
                                        {group.skills.length === 1
                                            ? "competência"
                                            : "competências"}
                                    </div>

                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                                    {group.skills.map((skill, index) => (
                                        <button
                                            type="button"
                                            key={groupIndex + "-" + index}
                                            onClick={() => setSelectedSkill(skill)}
                                            aria-label={"Ver competências de " + skill.name}
                                            className="skill-card glass-panel w-full min-h-[76px] p-3 sm:p-3.5 flex items-center gap-3 text-left hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(14,165,233,0.12)] hover:border-[var(--primary-color)] transition-all duration-200 cursor-pointer group relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)]"
                                        >
                                            <span className="w-10 h-10 shrink-0 rounded-xl bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/15 flex items-center justify-center">
                                                <span className={skill.icon + " skill-card-icon text-2xl transition-transform duration-200 group-hover:scale-110"}></span>
                                            </span>
                                            <span className="min-w-0 flex-1 flex flex-col items-start gap-1.5">
                                                <span className="font-semibold text-[13px] sm:text-sm leading-snug text-[var(--text-main)] group-hover:text-[var(--primary-color)] transition-colors">
                                                    {skill.name}
                                                </span>
                                                <span className={"skill-level text-[10px] font-medium px-2 py-0.5 rounded-full border " + getLevelClasses(skill.level)}>
                                                    {skill.level}
                                                </span>
                                            </span>
                                            <span className="shrink-0 text-[var(--text-muted)] group-hover:text-[var(--primary-color)] transition-colors">
                                                <span className="icon-arrow-up-right text-sm"></span>
                                            </span>
                                        </button>
                                    ))}
                                </div>

                            </div>
                        ))}

                    </div>

                    <div className="mt-9 text-center">
                        <span className="text-xs text-[var(--text-muted)] opacity-80">
                            {totalSkills} competências apresentadas • Clique em uma
                            habilidade para ver os conhecimentos associados.
                        </span>
                    </div>

                </div>

                {selectedSkill && (
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center px-4"
                        onClick={() => setSelectedSkill(null)}
                    >

                        <div className="absolute inset-0 bg-[#0b1121] bg-opacity-70 backdrop-blur-md animate-fade-in pointer-events-none"></div>

                        <div
                            className="glass-panel border-[var(--primary-color)] shadow-[0_0_50px_rgba(14,165,233,0.15)] max-w-lg w-full relative z-10 animate-slide-up overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >

                            <div className="absolute top-0 right-0 p-4 z-20">

                                <button
                                    onClick={() => setSelectedSkill(null)}
                                    className="p-2 rounded-full hover:bg-[var(--surface-color)] text-[var(--text-muted)] hover:text-[var(--primary-color)] transition-colors"
                                    aria-label="Fechar detalhes"
                                >
                                    <div className="icon-x text-xl"></div>
                                </button>

                            </div>

                            <div className="p-8">

                                <div className="flex items-center gap-5 mb-8 pr-8">

                                    <div className="p-4 rounded-xl bg-[var(--surface-color)] shadow-inner">
                                        <div
                                            className={
                                                selectedSkill.icon +
                                                " text-3xl text-[var(--primary-color)]"
                                            }
                                        ></div>
                                    </div>

                                    <div>

                                        <h3 className="text-2xl font-bold text-[var(--text-main)] mb-2">
                                            {selectedSkill.name}
                                        </h3>

                                        <div
                                            className={
                                                "inline-flex text-xs px-2.5 py-1 rounded-full border " +
                                                getLevelClasses(selectedSkill.level)
                                            }
                                        >
                                            Nível: {selectedSkill.level}
                                        </div>

                                    </div>

                                </div>

                                <p className="text-xs uppercase tracking-widest text-[var(--primary-color)] mb-4">
                                    Competências & Conhecimentos
                                </p>

                                <ul className="space-y-4">

                                    {selectedSkill.details.map((detail, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-3 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors duration-200"
                                        >

                                            <div className="icon-circle-check text-[var(--primary-color)] mt-1 flex-shrink-0 shadow-[0_0_10px_rgba(14,165,233,0.3)] rounded-full"></div>

                                            <span className="leading-relaxed">
                                                {detail}
                                            </span>

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

        console.error("Skills component error:", error);

        return null;
    }
}
