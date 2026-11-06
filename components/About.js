function About() {
    try {
        return (
            <section id="sobre" className="py-24 relative" data-name="about" data-file="components/About.js">
                <div className="container mx-auto px-6">
                    <h2 className="section-title">Sobre Mim</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="glass-panel p-6 md:p-10 order-2 md:order-1 relative overflow-hidden text-center md:text-left">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <div className="icon-database text-9xl"></div>
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-[var(--text-main)]">Da indústria para os dados</h3>
                            <div className="space-y-4 text-[var(--text-muted)] leading-relaxed text-sm md:text-base">
                                <p>
                                    Sou formada em <strong>Análise e Desenvolvimento de Sistemas</strong> pela UniCesumar (2024). Minha trajetória profissional começou na indústria, em 2018, como Jovem Aprendiz.
                                </p>
                                <p>
                                    Ao longo desse período, passei por rotinas administrativas, programação CNC e, desde 2021, atuo como Auxiliar Administrativa de Vendas. Essa experiência me deu contato direto com processos de produção, pedidos, orçamentos e informações de um ERP industrial.
                                </p>
                                <p>
                                    Paralelamente às atividades do cargo, desenvolvi dashboards e indicadores em Power BI a partir de relatórios exportados do ERP. Nesse trabalho, utilizei Power Query, DAX e Excel para organizar os dados e construir visões de acompanhamento.
                                </p>
                                <p>
                                    Tenho direcionado meus estudos e projetos para análise de dados, SQL e Business Intelligence, com foco em entender a estrutura dos dados e as regras de negócio antes de transformar informações em indicadores.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 order-1 md:order-2">
                            <div className="glass-panel p-5 flex gap-4 items-start group hover:border-[var(--primary-color)] transition-colors duration-300">
                                <div className="p-3 rounded-lg bg-[var(--surface-color)] text-[var(--primary-color)] group-hover:scale-110 transition-transform">
                                    <div className="icon-factory text-2xl"></div>
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-[var(--text-main)] mb-1">Vivência industrial</h4>
                                    <p className="text-sm text-[var(--text-muted)]">Experiência em rotinas administrativas, programação CNC e processos de produção.</p>
                                </div>
                            </div>

                            <div className="glass-panel p-5 flex gap-4 items-start group hover:border-[var(--primary-color)] transition-colors duration-300">
                                <div className="p-3 rounded-lg bg-[var(--surface-color)] text-[var(--primary-color)] group-hover:scale-110 transition-transform">
                                    <div className="icon-chart-no-axes-combined text-2xl"></div>
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-[var(--text-main)] mb-1">Análise de dados</h4>
                                    <p className="text-sm text-[var(--text-muted)]">Desenvolvimento de dashboards e indicadores com dados operacionais exportados do ERP.</p>
                                </div>
                            </div>

                            <div className="glass-panel p-5 flex gap-4 items-start group hover:border-[var(--primary-color)] transition-colors duration-300">
                                <div className="p-3 rounded-lg bg-[var(--surface-color)] text-[var(--primary-color)] group-hover:scale-110 transition-transform">
                                    <div className="icon-workflow text-2xl"></div>
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-[var(--text-main)] mb-1">Entendimento de processos</h4>
                                    <p className="text-sm text-[var(--text-muted)]">Conhecimento prático de pedidos, orçamentos, produção e rotinas de uma indústria.</p>
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