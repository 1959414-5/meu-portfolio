function About() {
    try {
        return (
            <section id="sobre" className="py-24 relative" data-name="about" data-file="components/About.js">
                <div className="container mx-auto px-6">
                    <h2 className="section-title">Sobre Mim</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="glass-panel p-6 md:p-10 order-2 md:order-1 relative overflow-hidden text-center md:text-left">
                            <div className="about-orbit-decoration" aria-hidden="true">
                                <span className="about-orbit-ring"></span>
                                <span className="about-orbit-dot"></span>
                                <div className="icon-workflow about-floating-database"></div>
                                <div className="icon-sparkles about-floating-sparkle"></div>
                            </div>
                            <h3 className="relative z-10 text-2xl font-bold mb-6 text-[var(--text-main)] pr-16">Da indústria à tecnologia</h3>
                            <div className="relative z-10 space-y-4 text-[var(--text-muted)] leading-relaxed text-sm md:text-base">
                                <p>
                                    Sou formada em <strong>Análise e Desenvolvimento de Sistemas</strong> pela UniCesumar (2024). Minha trajetória profissional começou na indústria, em 2018, como Jovem Aprendiz.
                                </p>
                                <p>
                                    Passei por rotinas administrativas, programação CNC e, desde 2021, atuo como Auxiliar Administrativa de Vendas. Essa vivência me deu contato direto com processos de produção, pedidos, orçamentos e informações de um ERP industrial — contexto que hoje levo para meus projetos de tecnologia.
                                </p>
                                <p>
                                    Em paralelo ao trabalho, desenvolvi dashboards e indicadores em Power BI, consultas e modelagem SQL, aplicações web e integrações com APIs. Também criei automações em Python para apoiar rotinas administrativas e processos de ERP.
                                </p>
                                <p>
                                    Atualmente, meus estudos e projetos se distribuem em três frentes que considero igualmente importantes: Dados & Business Intelligence, Desenvolvimento de Software e Automação & Integração. Meu objetivo é construir soluções que conectem tecnologia, processos e necessidades reais do negócio.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 order-1 md:order-2">
                            <div className="glass-panel p-5 flex gap-4 items-start group hover:border-[var(--primary-color)] transition-colors duration-300">
                                <div className="p-3 rounded-lg bg-[var(--surface-color)] text-[var(--primary-color)] group-hover:scale-110 transition-transform">
                                    <div className="icon-chart-no-axes-combined text-2xl"></div>
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-[var(--text-main)] mb-1">Dados & Business Intelligence</h4>
                                    <p className="text-sm text-[var(--text-muted)]">Modelagem, SQL, dashboards e indicadores para transformar dados em informação útil.</p>
                                </div>
                            </div>

                            <div className="glass-panel p-5 flex gap-4 items-start group hover:border-[var(--primary-color)] transition-colors duration-300">
                                <div className="p-3 rounded-lg bg-[var(--surface-color)] text-[var(--primary-color)] group-hover:scale-110 transition-transform">
                                    <div className="icon-code text-2xl"></div>
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-[var(--text-main)] mb-1">Desenvolvimento de Software</h4>
                                    <p className="text-sm text-[var(--text-muted)]">Aplicações web, APIs, bancos de dados e visualização 3D para necessidades operacionais.</p>
                                </div>
                            </div>

                            <div className="glass-panel p-5 flex gap-4 items-start group hover:border-[var(--primary-color)] transition-colors duration-300">
                                <div className="p-3 rounded-lg bg-[var(--surface-color)] text-[var(--primary-color)] group-hover:scale-110 transition-transform">
                                    <div className="icon-workflow text-2xl"></div>
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-[var(--text-main)] mb-1">Automação & Integração</h4>
                                    <p className="text-sm text-[var(--text-muted)]">Python, integração com ERP e automação de rotinas e processos operacionais.</p>
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