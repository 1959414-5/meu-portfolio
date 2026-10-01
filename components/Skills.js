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
                        icon: "icon-function-square",
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
            if (level === "Avançado") {
                return "text-emerald-300 bg-emerald-400/10 border-emerald-400/20";
            }

            if (level === "Intermediário") {
                return "text-sky-300 bg-sky-400/10 border-sky-400/20";
            }

            return "text-amber-300 bg-amber-400/10 border-amber-400/20";
        };

        return (
            <section
                id="habilidades"
                className="py-24 relative bg-[var(--bg-color)]"
                data-name="skills"
                data-file="components/Skills.js"
            >
                <div className="container mx-auto px-6">

                    <div className="text-center mb-12">
                        <h2 className="section-title mb-4">
                            Habilidades Técnicas
                        </h2>

                        <p className="text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed">
                            Ferramentas, conhecimentos em dados e visão de negócio
                            aplicados à construção de dashboards, análises e
                            automações para problemas reais.
                        </p>
                    </div>

                    <div className="space-y-14">

                        {skillGroups.map((group, groupIndex) => (
                            <div key={group.title}>

                                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">

                                    <div>

                                        <div className="flex items-center gap-3">

                                            <div className="w-2 h-8 rounded-full bg-[var(--primary-color)]"></div>

                                            <h3 className="text-2xl font-bold text-white">
                                                {group.title}
                                            </h3>

                                        </div>

                                        <p className="text-sm text-[var(--text-muted)] mt-3 md:ml-5 max-w-3xl">
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

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

                                    {group.skills.map((skill, index) => (
                                        <div
                                            key={groupIndex + "-" + index}
                                            onClick={() => setSelectedSkill(skill)}
                                            className="glass-panel p-5 md:p-6 flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)] hover:border-[var(--primary-color)] transition-all duration-300 cursor-pointer group relative overflow-hidden"
                                        >

                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--primary-color)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none"></div>

                                            <div className="p-4 rounded-full bg-[var(--surface-color)] group-hover:bg-opacity-80 transition-colors z-10 mb-2">
                                                <div
                                                    className={
                                                        skill.icon +
                                                        " text-3xl " +
                                                        skill.color +
                                                        " group-hover:scale-110 transition-transform duration-300"
                                                    }
                                                ></div>
                                            </div>

                                            <span className="font-semibold text-sm md:text-base text-[var(--text-main)] group-hover:text-white z-10 transition-colors">
                                                {skill.name}
                                            </span>

                                            <span
                                                className={
                                                    "text-[11px] px-2.5 py-1 rounded-full border z-10 " +
                                                    getLevelClasses(skill.level)
                                                }
                                            >
                                                {skill.level}
                                            </span>

                                            <div className="h-4 overflow-hidden mt-1 z-10 w-full flex justify-center">
                                                <span className="text-xs text-[var(--primary-color)] font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1">
                                                    Ver competências
                                                    <div className="icon-arrow-right text-[10px]"></div>
                                                </span>
                                            </div>

                                        </div>
                                    ))}

                                </div>

                            </div>
                        ))}

                    </div>

                    <div className="mt-12 text-center">
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
                                    className="p-2 rounded-full hover:bg-[var(--surface-color)] text-[var(--text-muted)] hover:text-white transition-colors"
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
                                                " text-4xl " +
                                                selectedSkill.color
                                            }
                                        ></div>
                                    </div>

                                    <div>

                                        <h3 className="text-2xl font-bold text-white mb-2">
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
