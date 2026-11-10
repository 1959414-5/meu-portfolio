function Hero() {
    try {
        // Pequenas etiquetas técnicas flutuam em percursos próprios ao redor do painel.
        React.useEffect(() => {
            const layer = document.querySelector("#hero .hero-floating-layer");
            if (!layer || typeof Element.prototype.animate !== "function") return;

            const bubbles = Array.from(layer.querySelectorAll(".hero-float-item"));
            const timers = new Set();
            const animations = new Set();
            let disposed = false;
            const randomBetween = (min, max) => Math.random() * (max - min) + min;

            const createPath = () => {
                const points = [{ transform: "translate3d(0,0,0) rotate(0deg)", offset: 0 }];
                for (let point = 1; point <= 5; point++) {
                    const x = randomBetween(-7, 7).toFixed(1);
                    const y = randomBetween(-6, 6).toFixed(1);
                    const rotation = randomBetween(-2.5, 2.5).toFixed(1);
                    points.push({
                        transform: "translate3d(" + x + "px," + y + "px,0) rotate(" + rotation + "deg)",
                        offset: point / 6
                    });
                }
                points.push({ transform: "translate3d(0,0,0) rotate(0deg)", offset: 1 });
                return points;
            };

            const startFloat = (bubble, delay = randomBetween(0, 1800)) => {
                const timer = window.setTimeout(() => {
                    timers.delete(timer);
                    if (disposed) return;

                    const animation = bubble.animate(createPath(), {
                        duration: randomBetween(11000, 17000),
                        easing: "ease-in-out",
                        iterations: 1,
                        fill: "forwards"
                    });
                    animations.add(animation);

                    animation.onfinish = () => {
                        animations.delete(animation);
                        animation.cancel();
                        if (!disposed) startFloat(bubble, randomBetween(250, 1200));
                    };
                    animation.oncancel = () => animations.delete(animation);
                }, delay);
                timers.add(timer);
            };

            bubbles.forEach(bubble => startFloat(bubble));

            return () => {
                disposed = true;
                timers.forEach(timer => window.clearTimeout(timer));
                animations.forEach(animation => animation.cancel());
                timers.clear();
                animations.clear();
            };
        }, []);

        return (
            <section id="hero" className="min-h-screen flex flex-col justify-center pt-28 pb-12 md:pt-20 md:pb-10 relative overflow-hidden" data-name="hero" data-file="components/Hero.js">
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
                        <div className="flex flex-wrap md:flex-nowrap gap-2 pt-4 justify-center md:justify-start">
                            <button onClick={() => document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' })} className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap text-sm px-4 py-3">
                                <div className="icon-chart-bar"></div>Ver Projetos
                            </button>
                            <button onClick={() => document.getElementById('experiencia').scrollIntoView({ behavior: 'smooth' })} className="btn-outline whitespace-nowrap text-sm px-4 py-3">Ver experiência</button>
                            <button onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })} className="text-sm font-semibold text-[var(--primary-color)] hover:underline px-2 whitespace-nowrap">Contato</button>
                            <a href="./curriculo-dados.pdf" download="curriculo-dados.pdf" className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap text-sm px-4 py-3 shadow-lg ring-2 ring-[var(--primary-color)]/30">
                                <div className="icon-download"></div>Baixar currículo
                            </a>
                        </div>
                        <div className="hero-tech-strip flex flex-wrap items-center gap-2 sm:gap-3 pt-5 border-t border-[var(--surface-border)] justify-center md:justify-start" aria-label="Tecnologias principais">
                            <div className="tech-logo tech-logo--powerbi" role="img" aria-label="Power BI" title="Power BI">
                                <img src="./images/technologies/power-bi.svg" alt="" />
                            </div>
                            <div className="tech-logo tech-logo--mysql" role="img" aria-label="SQL e MySQL" title="SQL / MySQL">
                                <img src="./images/technologies/mysql.svg" alt="" />
                            </div>
                            <div className="tech-logo tech-logo--python" role="img" aria-label="Python" title="Python">
                                <img src="./images/technologies/python.svg" alt="" />
                            </div>
                            <div className="tech-logo tech-logo--javascript" role="img" aria-label="JavaScript" title="JavaScript">
                                <span className="javascript-mark" aria-hidden="true">JS</span>
                            </div>
                            <div className="tech-logo tech-logo--html" role="img" aria-label="HTML5" title="HTML">
                                <img src="./images/technologies/html5.svg" alt="" />
                            </div>
                            <div className="tech-logo tech-logo--css" role="img" aria-label="CSS3" title="CSS">
                                <img src="./images/technologies/css3.svg" alt="" />
                            </div>
                            <div className="tech-logo tech-logo--api" role="img" aria-label="API REST" title="API REST">
                                <img src="./images/technologies/api-rest.svg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 hidden md:flex items-center justify-center w-full py-10">
                        <div className="hero-floating-layer" aria-hidden="true">
                            <span className="hero-float-item hero-float-item--sql"><span className="icon-database"></span><span>SQL</span></span>
                            <span className="hero-float-item hero-float-item--bi"><span className="icon-chart-no-axes-combined"></span><span>BI</span></span>
                            <span className="hero-float-item hero-float-item--python"><span className="icon-code"></span><span>Python</span></span>
                            <span className="hero-float-item hero-float-item--dax"><span className="icon-chart-pie"></span><span>DAX</span></span>
                        </div>
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

                                <div className="flex items-center gap-2 mt-6 pt-5 border-t border-[var(--surface-border)] text-[var(--text-muted)]">
                                    <div className="icon-sparkles text-[var(--primary-color)] text-sm" aria-hidden="true"></div>
                                    <span className="text-xs">Da coleta à tomada de decisão</span>
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