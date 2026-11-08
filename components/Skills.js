function Skills() {
    try {
        const skillGroups = [
            {
                title: "Business Intelligence",
                subtitle: "Transformação de dados em indicadores e análises visuais.",
                icon: "icon-chart-no-axes-combined",
                skills: ["Power BI", "DAX", "Power Query", "Modelagem de Dados", "Dashboards", "Data Visualization"],
                application: "Construção de painéis gerenciais e operacionais, definição de métricas e acompanhamento de indicadores."
            },
            {
                title: "Dados e Automação",
                subtitle: "Preparação, consulta, organização e integração de dados.",
                icon: "icon-database",
                skills: ["SQL / MySQL", "Excel", "Google Sheets", "Google Apps Script", "JavaScript", "ETL e Tratamento"],
                application: "Consultas e validações, tratamento de bases e automação de rotinas com planilhas, ERP e aplicações."
            },
            {
                title: "Negócio e Processos",
                subtitle: "Conhecimento dos processos que dão contexto aos dados.",
                icon: "icon-factory",
                skills: ["KPIs e Indicadores", "Análise de Processos", "ERP Industrial", "Análise Comercial", "Produção e Estoque", "Melhoria Contínua"],
                application: "Leitura de processos comerciais e industriais, identificação de gargalos e apoio à tomada de decisão."
            }
        ];

        return (
            <section
                id="habilidades"
                className="py-20 lg:py-24 relative bg-[var(--bg-color)]"
                data-name="skills"
                data-file="components/Skills.js"
            >
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="section-title mb-4">Habilidades</h2>
                        <p className="text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed">
                            Ferramentas e conhecimentos que utilizo para organizar dados,
                            compreender processos e desenvolver soluções de análise e BI.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        {skillGroups.map((group, index) => (
                            <article
                                key={group.title}
                                className="glass-panel p-6 md:p-7 flex flex-col h-full border border-[var(--surface-border)] hover:border-[var(--primary-color)]/50 transition-colors duration-200"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-11 h-11 shrink-0 rounded-xl bg-[var(--primary-color)]/10 flex items-center justify-center text-[var(--primary-color)]">
                                        <span className={group.icon + " text-2xl"}></span>
                                    </div>
                                    <div>
                                        <span className="block text-[10px] uppercase tracking-[0.16em] text-[var(--primary-color)] font-semibold mb-1">
                                            0{index + 1}
                                        </span>
                                        <h3 className="text-lg font-bold text-[var(--text-main)] leading-tight">
                                            {group.title}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5 min-h-[42px]">
                                    {group.subtitle}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center rounded-lg border border-[var(--surface-border)] bg-[var(--surface-color)] px-3 py-1.5 text-xs sm:text-[13px] font-medium text-[var(--text-main)]"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto pt-5 border-t border-[var(--surface-border)]">
                                    <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--primary-color)] font-semibold mb-2">
                                        Aplicação prática
                                    </p>
                                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                        {group.application}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-7 glass-panel p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-[var(--primary-color)]/20">
                        <div className="w-11 h-11 shrink-0 rounded-xl bg-[var(--primary-color)]/10 flex items-center justify-center text-[var(--primary-color)]">
                            <span className="icon-lightbulb text-2xl"></span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[var(--text-main)] mb-1">
                                Meu diferencial
                            </h3>
                            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                Vivência prática em ambiente industrial, conectando o conhecimento dos processos
                                comerciais e produtivos à análise de dados e ao desenvolvimento de soluções.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error("Skills component error:", error);
        return null;
    }
}
