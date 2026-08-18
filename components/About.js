function About() {
    try {
        return (
            <section id="sobre" className="py-24 relative" data-name="about" data-file="components/About.js">
                <div className="container mx-auto px-6">
                    <h2 className="section-title">Sobre Mim</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="glass-panel p-6 md:p-12 order-2 md:order-1 relative overflow-hidden text-center md:text-left">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <div className="icon-database text-9xl"></div>
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-white">Da Indústria para os Dados</h3>
                            <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
                                <p>
                                    Com formação em <strong>Análise e Desenvolvimento de Sistemas</strong> (Unicesumar, 2024), minha trajetória profissional começou no ambiente operacional e administrativo da indústria.
                                </p>
                                <p>
                                    Trabalhando como Programadora CNC e Auxiliar Administrativa de Vendas, desenvolvi uma forte visão analítica e compreensão profunda dos processos de negócios. Percebi que o maior desafio das empresas não era a falta de dados, mas sim a dificuldade de visualizá-los e utilizá-los de forma estratégica.
                                </p>
                                <p>
                                    Hoje, atuo apaixonadamente na área de <strong>Business Intelligence e Análise de Dados</strong>, utilizando ferramentas como Power BI, SQL e Excel para transformar dados brutos de ERPs e planilhas em painéis interativos que orientam a tomada de decisão.
                                </p>
                                <p>
                                    Minha vivência prática me permite não apenas criar dashboards esteticamente modernos, mas construir soluções que resolvem problemas reais de operação, gargalos e eficiência.
                                </p>
                            </div>
                        </div>
                        
                        <div className="space-y-6 order-1 md:order-2">
                            <div className="glass-panel p-6 flex gap-4 items-start group hover:border-[var(--primary-color)] transition-colors duration-300">
                                <div className="p-3 rounded-lg bg-[var(--surface-color)] text-[var(--primary-color)] group-hover:scale-110 transition-transform">
                                    <div className="icon-eye text-2xl"></div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">Visão Analítica</h4>
                                    <p className="text-sm text-[var(--text-muted)]">Capacidade de identificar padrões e anomalias em grandes volumes de dados operacionais.</p>
                                </div>
                            </div>
                            
                            <div className="glass-panel p-6 flex gap-4 items-start group hover:border-[var(--primary-color)] transition-colors duration-300">
                                <div className="p-3 rounded-lg bg-[var(--surface-color)] text-[var(--primary-color)] group-hover:scale-110 transition-transform">
                                    <div className="icon-briefcase text-2xl"></div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">Entendimento de Negócio</h4>
                                    <p className="text-sm text-[var(--text-muted)]">Foco em métricas que realmente importam para o crescimento e eficiência da empresa.</p>
                                </div>
                            </div>
                            
                            <div className="glass-panel p-6 flex gap-4 items-start group hover:border-[var(--primary-color)] transition-colors duration-300">
                                <div className="p-3 rounded-lg bg-[var(--surface-color)] text-[var(--primary-color)] group-hover:scale-110 transition-transform">
                                    <div className="icon-arrow-up-right text-2xl"></div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">Melhoria de Processos</h4>
                                    <p className="text-sm text-[var(--text-muted)]">Experiência em mapear gargalos e propor soluções baseadas em indicadores sólidos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        return null;
    }
}