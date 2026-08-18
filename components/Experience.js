function Experience() {
    try {
        return (
            <section id="experiencia" className="py-24 relative bg-[var(--bg-color)]" data-name="experience" data-file="components/Experience.js">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Experience Column */}
                        <div>
                            <div className="flex items-center gap-3 mb-10">
                                <div className="icon-briefcase text-3xl text-[var(--primary-color)]"></div>
                                <h2 className="text-3xl font-bold text-white">Experiência Profissional</h2>
                            </div>
                            
                            <div className="relative border-l-2 border-[var(--surface-border)] ml-3 md:ml-4 space-y-8 md:space-y-12 pb-4">
                                {/* Experience 1 */}
                                <div className="relative pl-6 md:pl-8">
                                    <div className="absolute w-4 h-4 rounded-full bg-[var(--primary-color)] -left-[9px] top-1 shadow-[0_0_10px_var(--primary-color)]"></div>
                                    <div className="glass-panel p-5 md:p-6 hover:border-[var(--primary-color)] transition-colors">
                                        <h3 className="text-xl font-bold text-white">Assistente Administrativo de Vendas</h3>
                                        <div className="text-sm text-[var(--primary-color)] font-medium mb-4">Indústria</div>
                                        <ul className="space-y-2 text-sm text-[var(--text-muted)] list-none">
                                            <li className="flex gap-2"><div className="icon-chevron-right text-[var(--primary-color)] flex-shrink-0 mt-0.5 w-4 h-4"></div>Uso diário de sistemas ERP para gestão de processos comerciais.</li>
                                            <li className="flex gap-2"><div className="icon-chevron-right text-[var(--primary-color)] flex-shrink-0 mt-0.5 w-4 h-4"></div>Organização de grandes volumes de dados e planilhas.</li>
                                            <li className="flex gap-2"><div className="icon-chevron-right text-[var(--primary-color)] flex-shrink-0 mt-0.5 w-4 h-4"></div>Análise de indicadores comerciais para suporte à equipe de vendas.</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Experience 2 */}
                                <div className="relative pl-8">
                                    <div className="absolute w-4 h-4 rounded-full bg-[var(--surface-border)] -left-[9px] top-1 border-2 border-[var(--bg-color)]"></div>
                                    <div className="glass-panel p-6 hover:border-[var(--primary-color)] transition-colors">
                                        <h3 className="text-xl font-bold text-white">Programadora CNC</h3>
                                        <div className="text-sm text-[var(--text-muted)] font-medium mb-4">Indústria de Manufatura</div>
                                        <ul className="space-y-2 text-sm text-[var(--text-muted)] list-none">
                                            <li className="flex gap-2"><div className="icon-chevron-right text-[var(--primary-color)] flex-shrink-0 mt-0.5 w-4 h-4"></div>Programação e acomodação de chapas metálicas para processos de corte CNC.</li>
                                            <li className="flex gap-2"><div className="icon-chevron-right text-[var(--primary-color)] flex-shrink-0 mt-0.5 w-4 h-4"></div>Análise de aproveitamento de material visando melhor eficiência produtiva e redução de desperdícios.</li>
                                            <li className="flex gap-2"><div className="icon-chevron-right text-[var(--primary-color)] flex-shrink-0 mt-0.5 w-4 h-4"></div>Interpretação de desenhos técnicos e atuação em processos industriais com foco em precisão operacional.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Education Column */}
                        <div>
                            <div className="flex items-center gap-3 mb-10">
                                <div className="icon-graduation-cap text-3xl text-[var(--primary-color)]"></div>
                                <h2 className="text-3xl font-bold text-white">Formação Acadêmica</h2>
                            </div>
                            
                            <div className="relative border-l-2 border-[var(--surface-border)] ml-4 space-y-12 pb-4">
                                {/* Education 1 */}
                                <div className="relative pl-8">
                                    <div className="absolute w-4 h-4 rounded-full bg-[var(--primary-color)] -left-[9px] top-1 shadow-[0_0_10px_var(--primary-color)]"></div>
                                    <div className="glass-panel p-6 hover:border-[var(--primary-color)] transition-colors">
                                        <h3 className="text-xl font-bold text-white">Análise e Desenvolvimento de Sistemas</h3>
                                        <div className="text-sm text-[var(--primary-color)] font-medium mb-2">Unicesumar</div>
                                        <div className="text-xs text-[var(--text-muted)] mb-4 flex items-center gap-2">
                                            <div className="icon-calendar w-3 h-3"></div>
                                            Concluído em 2024
                                        </div>
                                        <p className="text-sm text-[var(--text-muted)]">
                                            Formação sólida em lógica de programação, modelagem de banco de dados, engenharia de software e análise de requisitos, fundamentais para estruturação de projetos em BI.
                                        </p>
                                    </div>
                                </div>
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