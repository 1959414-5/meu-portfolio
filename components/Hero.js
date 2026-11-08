function Hero() {
    try {
        return (
            <section id="hero" className="min-h-screen flex flex-col justify-center pt-28 pb-12 md:pt-20 md:pb-0 relative overflow-hidden" data-name="hero" data-file="components/Hero.js">
                <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center flex-1">
                    <div className="space-y-6 md:space-y-8 z-10 text-center md:text-left mt-8 md:mt-0">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs md:text-sm text-[var(--primary-color)] font-semibold mb-2 md:mb-4"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>Maringá – PR · Dados & Business Intelligence</div>
                        <p className="text-lg sm:text-xl font-semibold tracking-wide text-[var(--text-main)] mb-2">Bárbara Cabral Paschoalin</p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                            Analista de Dados <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-blue-400">& Business Intelligence</span>
                        </h1>
                        <p className="text-lg text-[var(--text-muted)] max-w-lg leading-relaxed">
                            Sou formada em Análise e Desenvolvimento de Sistemas e tenho experiência na indústria desde 2018. Uno conhecimento de processos comerciais e operacionais à análise de dados, desenvolvendo dashboards e indicadores com Power BI e SQL.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                            <button onClick={() => document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' })} className="btn-primary flex items-center gap-2">
                                <div className="icon-chart-bar"></div>Ver Projetos
                            </button>
                            <button onClick={() => document.getElementById('experiencia').scrollIntoView({ behavior: 'smooth' })} className="btn-outline">Ver experiência</button>
                            <button onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })} className="text-sm font-semibold text-[var(--primary-color)] hover:underline px-2">Contato</button>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-5 border-t border-[var(--surface-border)] justify-center md:justify-start">
                            {["Power BI", "SQL / MySQL", "DAX", "Power Query"].map((skill) => (
                                <span key={skill} className="inner-card border border-[var(--surface-border)] rounded-full px-3 py-1.5 text-xs font-semibold text-[var(--text-main)]">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 hidden md:flex items-center justify-center w-full py-10">
                        <div aria-hidden="true" className="absolute inset-10 rounded-full bg-gradient-to-tr from-[var(--primary-color)] to-blue-500 blur-[90px] opacity-10 pointer-events-none"></div>
                        <div className="glass-panel relative w-full max-w-[600px] p-6 lg:p-8 overflow-hidden">
                            <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-[var(--primary-color)] to-transparent opacity-[0.07] rounded-bl-full pointer-events-none"></div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-between gap-4 mb-2">
                                    <span className="text-[10px] font-semibold tracking-[0.2em] text-[var(--primary-color)] uppercase">Fluxo analítico</span>
                                    <span className="inline-flex items-center gap-2 text-[10px] text-[var(--text-muted)]"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>Da informação à ação</span>
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-main)] mb-2">Do dado à decisão</h2>
                                <p className="text-sm leading-relaxed text-[var(--text-muted)] mb-6 max-w-md">
                                    Um processo estruturado para transformar informações dispersas em indicadores claros e úteis para o negócio.
                                </p>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="glass-panel inner-card rounded-xl p-4 border border-[var(--surface-border)] shadow-none">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-9 h-9 rounded-lg bg-[var(--primary-color)]/10 flex items-center justify-center text-[var(--primary-color)]" style={{ color: "var(--primary-color)" }}><div className="icon-database text-lg"></div></div>
                                            <span className="text-[10px] font-mono text-[var(--text-muted)]">01</span>
                                        </div>
                                        <h3 className="font-semibold text-sm text-[var(--text-main)] mb-1">Fontes de dados</h3>
                                        <p className="text-xs leading-relaxed text-[var(--text-muted)]">ERP, planilhas e bases operacionais</p>
                                    </div>
                                    <div className="glass-panel inner-card rounded-xl p-4 border border-[var(--surface-border)] shadow-none">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-9 h-9 rounded-lg bg-[var(--primary-color)]/10 flex items-center justify-center text-[var(--primary-color)]"><div className="icon-settings text-lg"></div></div>
                                            <span className="text-[10px] font-mono text-[var(--text-muted)]">02</span>
                                        </div>
                                        <h3 className="font-semibold text-sm text-[var(--text-main)] mb-1">Preparação</h3>
                                        <p className="text-xs leading-relaxed text-[var(--text-muted)]">Limpeza, padronização e validação</p>
                                    </div>
                                    <div className="glass-panel inner-card rounded-xl p-4 border border-[var(--surface-border)] shadow-none">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-9 h-9 rounded-lg bg-[var(--primary-color)]/10 flex items-center justify-center text-[var(--primary-color)]"><div className="icon-chart-pie text-lg"></div></div>
                                            <span className="text-[10px] font-mono text-[var(--text-muted)]">03</span>
                                        </div>
                                        <h3 className="font-semibold text-sm text-[var(--text-main)] mb-1">Análise</h3>
                                        <p className="text-xs leading-relaxed text-[var(--text-muted)]">Modelagem, métricas e indicadores</p>
                                    </div>
                                    <div className="glass-panel inner-card rounded-xl p-4 border border-[var(--surface-border)] shadow-none">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-9 h-9 rounded-lg bg-[var(--primary-color)]/10 flex items-center justify-center text-[var(--primary-color)]"><div className="icon-target text-lg"></div></div>
                                            <span className="text-[10px] font-mono text-[var(--text-muted)]">04</span>
                                        </div>
                                        <h3 className="font-semibold text-sm text-[var(--text-main)] mb-1">Decisão</h3>
                                        <p className="text-xs leading-relaxed text-[var(--text-muted)]">Dashboards e acompanhamento</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-2 mt-6 pt-5 border-t border-[var(--surface-border)]">
                                    <span className="text-[10px] text-[var(--text-muted)] mr-1">Tecnologias</span>
                                    <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold text-[var(--primary-color)] bg-[var(--primary-color)]/10">POWER BI</span>
                                    <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold text-[var(--primary-color)] bg-[var(--primary-color)]/10">SQL</span>
                                    <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold text-[var(--primary-color)] bg-[var(--primary-color)]/10">POWER QUERY</span>
                                    <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold text-[var(--primary-color)] bg-[var(--primary-color)]/10">DAX</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        return null;
    }
}