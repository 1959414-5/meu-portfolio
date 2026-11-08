function Experience() {
    try {
        const experiences = [
            {
                role: "Auxiliar Administrativa de Vendas",
                period: "2021 – Atual",
                current: true,
                description: [
                    "Elaboração de orçamentos, lançamento e acompanhamento de pedidos de venda.",
                    "Consulta, conferência e atualização de informações comerciais no ERP industrial.",
                    "Apoio ao atendimento de clientes e cobertura de rotinas de faturamento e suporte à equipe de vendas.",
                    "Contato diário com informações de pedidos, prazos e processos que conectam a área comercial à operação."
                ]
            },
            {
                role: "Programadora CNC",
                period: "2020 – 2021",
                current: false,
                description: [
                    "Programação de máquinas CNC para operações de corte de chapas metálicas.",
                    "Análise de encaixe e aproveitamento de material conforme as especificações dos serviços.",
                    "Interpretação de desenhos técnicos e interface direta com a rotina de produção."
                ]
            },
            {
                role: "Jovem Aprendiz",
                period: "2018 – 2020",
                current: false,
                description: [
                    "Apoio às rotinas administrativas e à organização de informações.",
                    "Contato inicial com processos de pedidos e atividades de suporte à operação."
                ]
            }
        ];

        return (
            <section id="experiencia" className="py-24 relative bg-[var(--bg-color)]" data-name="experience" data-file="components/Experience.js">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="icon-briefcase text-3xl text-[var(--primary-color)]"></div>
                                <h2 className="text-3xl font-bold text-[var(--text-main)]">Experiência Profissional</h2>
                            </div>
                            <p className="text-sm text-[var(--text-muted)] mb-9 ml-10">Trajetória na indústria · 2018 – Atual</p>

                            <div className="relative border-l-2 border-[var(--surface-border)] ml-3 md:ml-4 space-y-7 pb-4">
                                {experiences.map((experience, index) => (
                                    <div className="relative pl-6 md:pl-8" key={experience.role}>
                                        <div className={"absolute w-4 h-4 rounded-full -left-[9px] top-1 border-2 border-[var(--bg-color)] " + (experience.current ? "bg-[var(--primary-color)] shadow-[0_0_10px_var(--primary-color)]" : "bg-[var(--surface-border)]")}></div>
                                        <article className="glass-panel p-5 md:p-6 hover:border-[var(--primary-color)] transition-colors">
                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                                <h3 className="text-lg md:text-xl font-bold text-[var(--text-main)]">{experience.role}</h3>
                                                {experience.current && (
                                                    <span className="text-[10px] uppercase tracking-wider font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1">Cargo atual</span>
                                                )}
                                            </div>
                                            <div className="text-sm text-[var(--primary-color)] font-medium mb-4">Perfinorte Indústria e Comércio de Chapas · {experience.period}</div>
                                            <ul className="space-y-2 text-sm text-[var(--text-muted)] list-none">
                                                {experience.description.map((item, itemIndex) => (
                                                    <li key={itemIndex} className="flex gap-2 items-start">
                                                        <div className="icon-chevron-right text-[var(--primary-color)] flex-shrink-0 mt-0.5 w-4 h-4"></div>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </article>
                                    </div>
                                ))}
                            </div>

                            <div className="glass-panel p-5 md:p-6 mt-2 border border-[var(--primary-color)]/20">
                                <div className="flex items-center gap-2 text-[var(--primary-color)] font-semibold text-sm mb-2">
                                    <div className="icon-chart-no-axes-combined text-lg"></div>
                                    Projetos de análise de dados
                                </div>
                                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                    A partir da experiência com dados operacionais do ERP, desenvolvi por iniciativa própria dashboards e indicadores em Power BI, utilizando relatórios exportados do sistema como fonte.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-10">
                                <div className="icon-graduation-cap text-3xl text-[var(--primary-color)]"></div>
                                <h2 className="text-3xl font-bold text-[var(--text-main)]">Formação Acadêmica</h2>
                            </div>

                            <div className="relative border-l-2 border-[var(--surface-border)] ml-4 space-y-12 pb-4">
                                <div className="relative pl-8">
                                    <div className="absolute w-4 h-4 rounded-full bg-[var(--primary-color)] -left-[9px] top-1 shadow-[0_0_10px_var(--primary-color)]"></div>
                                    <article className="glass-panel p-6 hover:border-[var(--primary-color)] transition-colors">
                                        <h3 className="text-xl font-bold text-[var(--text-main)]">Análise e Desenvolvimento de Sistemas</h3>
                                        <div className="text-sm text-[var(--primary-color)] font-medium mb-2">UniCesumar</div>
                                        <div className="text-xs text-[var(--text-muted)] mb-4 flex items-center gap-2">
                                            <div className="icon-calendar w-3 h-3"></div>
                                            Concluído em 2024
                                        </div>
                                        <p className="text-sm text-[var(--text-muted)]">
                                            Formação em lógica de programação, banco de dados, desenvolvimento de sistemas e análise de requisitos.
                                        </p>
                                    </article>
                                </div>
                            </div>

                            <div className="glass-panel p-6 mt-8 border border-[var(--primary-color)]/20">
                                <div className="flex items-center gap-2 text-[var(--primary-color)] text-sm font-semibold mb-3">
                                    <div className="icon-chart-no-axes-combined text-lg"></div>
                                    Especialização e desenvolvimento
                                </div>
                                <h3 className="text-lg font-bold text-[var(--text-main)] mb-1">Análise de Dados com Power BI</h3>
                                <p className="text-xs text-[var(--text-muted)] mb-3">Em andamento</p>
                                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                    Aprofundamento em preparação, modelagem, análise e visualização de dados para construção de indicadores e soluções de Business Intelligence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Experience component error:', error);
        return null;
    }
}