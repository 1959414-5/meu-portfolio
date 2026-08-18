function Hero() {
    try {
        const [activeTab, setActiveTab] = React.useState(0);
        const [isAnimating, setIsAnimating] = React.useState(false);

        const handleTabChange = (index) => {
            if (index === activeTab || isAnimating) return;
            setIsAnimating(true);
            setActiveTab(index);
            setTimeout(() => setIsAnimating(false), 400); // matches transition duration
        };

        const tabs = [
            { icon: 'chart-pie', label: 'Visão Estratégica' },
            { icon: 'trending-up', label: 'Produção' },
            { icon: 'package', label: 'Pedidos & Atrasos' },
            { icon: 'layers', label: 'Curva ABC' },
            { icon: 'target', label: 'Indicadores' }
        ];

        const viewsData = [
            {
                title: "Visão Estratégica",
                subtitle: "Análise de Performance Geral",
                kpis: [
                    { title: "Eficiência OEE", val: "94.2%", inc: "+2.4%", color: "text-green-400", incIcon: "trending-up" },
                    { title: "Volume Produzido", val: "12.4K", inc: "+5.1%", color: "text-green-400", incIcon: "trending-up" },
                    { title: "Taxa de Atraso", val: "1.2%", inc: "-0.8%", color: "text-[var(--primary-color)]", incIcon: "trending-down" }
                ],
                chartBars: [45, 65, 50, 85, 60, 95, 80],
                donutValue: "80%",
                donutLabel: "CLASSE A",
                donutItems: [
                    { label: 'Classe A', val: '80%', color: 'bg-[var(--primary-color)]' },
                    { label: 'Classe B', val: '15%', color: 'bg-blue-400' },
                    { label: 'Classe C', val: '5%', color: 'bg-[var(--text-muted)]' },
                ]
            },
            {
                title: "Dashboard de Produção",
                subtitle: "Acompanhamento Operacional",
                kpis: [
                    { title: "Peças/Hora", val: "845", inc: "+12/h", color: "text-green-400", incIcon: "trending-up" },
                    { title: "Tempo Máquina", val: "18.2h", inc: "+0.5h", color: "text-green-400", incIcon: "trending-up" },
                    { title: "Refugo", val: "0.8%", inc: "-0.2%", color: "text-[var(--primary-color)]", incIcon: "trending-down" }
                ],
                chartBars: [80, 85, 90, 75, 85, 95, 88],
                donutValue: "92%",
                donutLabel: "DISPONÍVEL",
                donutItems: [
                    { label: 'Operando', val: '92%', color: 'bg-[var(--primary-color)]' },
                    { label: 'Setup', val: '5%', color: 'bg-yellow-400' },
                    { label: 'Parada', val: '3%', color: 'bg-red-400' },
                ]
            },
            {
                title: "Pedidos & Atrasos",
                subtitle: "Logística e Entregas",
                kpis: [
                    { title: "Total Pedidos", val: "1.240", inc: "+124", color: "text-green-400", incIcon: "trending-up" },
                    { title: "Em Atraso", val: "18", inc: "-5", color: "text-[var(--primary-color)]", incIcon: "trending-down" },
                    { title: "OTIF", val: "98.5%", inc: "+1.2%", color: "text-green-400", incIcon: "trending-up" }
                ],
                chartBars: [30, 40, 25, 50, 35, 20, 15],
                donutValue: "98%",
                donutLabel: "NO PRAZO",
                donutItems: [
                    { label: 'No Prazo', val: '98%', color: 'bg-green-400' },
                    { label: 'Risco', val: '1.5%', color: 'bg-yellow-400' },
                    { label: 'Atrasado', val: '0.5%', color: 'bg-red-400' },
                ]
            },
            {
                title: "Curva ABC Estratégica",
                subtitle: "Concentração de Receita",
                kpis: [
                    { title: "Clientes Ativos", val: "450", inc: "+12", color: "text-green-400", incIcon: "trending-up" },
                    { title: "Ticket Médio", val: "R$ 12k", inc: "+R$ 1k", color: "text-green-400", incIcon: "trending-up" },
                    { title: "Churn", val: "2.1%", inc: "-0.4%", color: "text-[var(--primary-color)]", incIcon: "trending-down" }
                ],
                chartBars: [95, 80, 60, 40, 25, 15, 5],
                donutValue: "75%",
                donutLabel: "RECEITA A",
                donutItems: [
                    { label: 'Clientes A', val: '20%', color: 'bg-[var(--primary-color)]' },
                    { label: 'Receita A', val: '75%', color: 'bg-blue-400' },
                    { label: 'Outros', val: '5%', color: 'bg-[var(--text-muted)]' },
                ]
            },
            {
                title: "Indicadores Chave",
                subtitle: "Métricas Consolidadas",
                kpis: [
                    { title: "Faturamento", val: "R$ 2.4M", inc: "+15%", color: "text-green-400", incIcon: "trending-up" },
                    { title: "Custos", val: "R$ 850k", inc: "-2%", color: "text-[var(--primary-color)]", incIcon: "trending-down" },
                    { title: "Margem", val: "35%", inc: "+2.5%", color: "text-green-400", incIcon: "trending-up" }
                ],
                chartBars: [50, 55, 60, 70, 75, 85, 90],
                donutValue: "35%",
                donutLabel: "MARGEM",
                donutItems: [
                    { label: 'Margem Bruta', val: '35%', color: 'bg-[var(--primary-color)]' },
                    { label: 'Custos Fixos', val: '45%', color: 'bg-red-400' },
                    { label: 'Variáveis', val: '20%', color: 'bg-yellow-400' },
                ]
            }
        ];

        const currentView = viewsData[activeTab];

        return (
            <section id="hero" className="min-h-screen flex flex-col justify-center pt-28 pb-12 md:pt-20 md:pb-0 relative overflow-hidden" data-name="hero" data-file="components/Hero.js">
                <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center flex-1">
                    <div className="space-y-6 md:space-y-8 z-10 text-center md:text-left mt-8 md:mt-0">
                        <div className="inline-block px-4 py-2 rounded-full glass-panel text-xs md:text-sm text-[var(--primary-color)] font-medium mb-2 md:mb-4 shadow-[0_0_15px_rgba(14,165,233,0.15)]">
                            Maringá - PR | Analista de Dados & BI
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                            Transformando Dados em <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-blue-400">
                                Decisões Estratégicas
                            </span>
                        </h1>
                        <p className="text-lg text-[var(--text-muted)] max-w-lg leading-relaxed">
                            Olá, sou a Bárbara Cabral Paschoalin. Trago minha experiência operacional na indústria para o mundo dos dados, construindo soluções em Power BI que otimizam processos e geram insights valiosos para o negócio.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button onClick={() => document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' })} className="btn-primary flex items-center gap-2">
                                <div className="icon-chart-bar"></div>
                                Ver Projetos
                            </button>
                            <button onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })} className="btn-outline">
                                Entrar em Contato
                            </button>
                        </div>
                        
                        <div className="flex gap-6 pt-8 border-t border-[var(--surface-border)]">
                            <div>
                                <div className="text-2xl font-bold text-white">Power BI</div>
                                <div className="text-sm text-[var(--text-muted)]">Dashboards Dinâmicos</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white">Analytics</div>
                                <div className="text-sm text-[var(--text-muted)]">Indicadores Estratégicos</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative z-10 hidden md:flex items-center justify-center w-full min-h-[500px] py-10">
                        <style>
                            {`
                            @keyframes float-dash {
                                0% { transform: translateY(0px) rotateX(2deg) rotateY(-4deg); }
                                50% { transform: translateY(-12px) rotateX(4deg) rotateY(-2deg); }
                                100% { transform: translateY(0px) rotateX(2deg) rotateY(-4deg); }
                            }
                            @keyframes fillBar {
                                from { height: 0%; opacity: 0; }
                                to { opacity: 1; }
                            }
                            @keyframes countUp {
                                from { opacity: 0; transform: translateY(10px); }
                                to { opacity: 1; transform: translateY(0); }
                            }
                            .dashboard-preview {
                                animation: float-dash 12s ease-in-out infinite;
                                transform-style: preserve-3d;
                                perspective: 1500px;
                                transform-origin: center center;
                            }
                            .dashboard-preview:hover {
                                animation-play-state: paused;
                                transform: translateY(-5px) rotateX(0deg) rotateY(0deg) scale(1.02);
                                transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
                                box-shadow: 0 40px 80px rgba(0,0,0,0.8), 0 0 40px rgba(14,165,233,0.15);
                            }
                            .bar-animate {
                                animation: fillBar 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                            }
                            .kpi-animate {
                                animation: countUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                            }
                            .view-transition {
                                transition: opacity 0.4s ease, transform 0.4s ease;
                            }
                            .view-hidden {
                                opacity: 0;
                                transform: translateY(10px);
                            }
                            .view-visible {
                                opacity: 1;
                                transform: translateY(0);
                            }
                            `}
                        </style>

                        {/* Glowing backdrop to prevent clipping issues while giving volume */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-square bg-gradient-to-tr from-[var(--primary-color)] to-indigo-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

                        {/* Scale wrapper to ensure it doesn't crop on smaller desktop screens */}
                        <div className="w-full max-w-[640px] transform scale-95 lg:scale-100 transition-transform">
                            <div className="dashboard-preview glass-panel w-full aspect-[16/10] rounded-xl border border-[var(--surface-border)] shadow-[0_25px_50px_rgba(0,0,0,0.6)] flex overflow-hidden relative transition-all duration-700">
                                
                                {/* Reflection overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50 pointer-events-none z-20"></div>
                                
                                {/* Sidebar */}
                                <div className="w-16 border-r border-[var(--surface-border)] bg-[#0b1121]/90 backdrop-blur-xl flex flex-col items-center py-5 gap-6 z-30">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary-color)] to-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.5)] cursor-pointer hover:scale-110 transition-transform">
                                        <div className="icon-layout-dashboard text-white text-sm"></div>
                                    </div>
                                    <div className="flex flex-col gap-3 mt-2 w-full px-2">
                                        {tabs.map((tab, i) => (
                                            <button 
                                                key={i} 
                                                onClick={() => handleTabChange(i)}
                                                className={`w-full aspect-square rounded-lg flex items-center justify-center transition-all duration-300 relative group
                                                    ${i === activeTab 
                                                        ? 'bg-[var(--primary-color)]/20 text-[var(--primary-color)] border border-[var(--primary-color)]/40 shadow-[0_0_10px_rgba(14,165,233,0.2)]' 
                                                        : 'text-[var(--text-muted)] hover:text-white hover:bg-[var(--surface-color)] border border-transparent'
                                                    }`}
                                                title={tab.label}
                                            >
                                                <div className={`icon-${tab.icon} text-lg`}></div>
                                                
                                                {/* Tooltip */}
                                                <div className="absolute left-full ml-3 px-2 py-1 bg-gray-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity shadow-lg z-50">
                                                    {tab.label}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="mt-auto mb-2 w-full px-2">
                                        <button className="w-full aspect-square rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:bg-[var(--surface-color)] transition-all">
                                            <div className="icon-settings text-lg"></div>
                                        </button>
                                    </div>
                                </div>

                                {/* Main Content Area */}
                                <div className="flex-1 bg-gradient-to-br from-[#0f172a]/60 to-[#0b1121]/90 backdrop-blur-md relative overflow-hidden">
                                    
                                    {/* Animated View Container */}
                                    <div className={`absolute inset-0 p-6 flex flex-col gap-5 view-transition ${isAnimating ? 'view-hidden' : 'view-visible'}`}>
                                        
                                        {/* Header */}
                                        <div className="flex justify-between items-center z-10">
                                            <div>
                                                <h3 className="text-white font-bold text-lg tracking-wide flex items-center gap-2">
                                                    {currentView.title}
                                                    <span className="px-2 py-0.5 rounded text-[8px] bg-green-500/20 text-green-400 border border-green-500/30 uppercase tracking-widest animate-pulse">Live</span>
                                                </h3>
                                                <p className="text-xs text-[var(--text-muted)] mt-1">{currentView.subtitle}</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <div className="px-3 py-1.5 rounded-lg bg-[var(--surface-color)] border border-[var(--surface-border)] text-[10px] text-[var(--text-muted)] flex items-center gap-2 hover:border-[var(--primary-color)] transition-colors cursor-pointer group">
                                                    <div className="icon-calendar w-3 h-3 group-hover:text-[var(--primary-color)] transition-colors"></div>
                                                    Últimos 30 Dias
                                                    <div className="icon-chevron-down w-3 h-3 ml-1"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* KPIs Grid */}
                                        <div className="grid grid-cols-3 gap-4 z-10">
                                            {currentView.kpis.map((kpi, i) => (
                                                <div key={`${activeTab}-kpi-${i}`} className="glass-panel bg-[#1e293b]/40 p-3 lg:p-4 rounded-xl flex flex-col gap-1.5 kpi-animate group hover:border-[var(--primary-color)] hover:bg-[#1e293b]/60 transition-all duration-300 relative overflow-hidden" style={{ animationDelay: `${i * 0.1}s` }}>
                                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
                                                    <span className="text-[9px] lg:text-[10px] text-[var(--text-muted)] font-semibold uppercase tracking-wider">{kpi.title}</span>
                                                    <div className="text-xl lg:text-2xl font-bold text-white group-hover:text-[var(--primary-color)] transition-colors">{kpi.val}</div>
                                                    <div className={`text-[9px] flex items-center gap-1 font-medium ${kpi.color}`}>
                                                        <div className={`icon-${kpi.incIcon} w-3 h-3`}></div>
                                                        {kpi.inc} vs meta
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Charts Container */}
                                        <div className="flex gap-4 flex-1 z-10">
                                            
                                            {/* Main Chart */}
                                            <div className="glass-panel bg-[#1e293b]/40 rounded-xl p-4 flex-1 flex flex-col justify-between group hover:border-[var(--primary-color)] hover:bg-[#1e293b]/60 transition-all duration-300 relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-[10px] font-semibold text-[var(--text-muted)] group-hover:text-white transition-colors uppercase tracking-wider">Histórico vs Meta</span>
                                                    <div className="icon-ellipsis text-[var(--text-muted)] w-4 h-4 cursor-pointer hover:text-white transition-colors"></div>
                                                </div>
                                                
                                                {/* Bar Chart Area */}
                                                <div className="flex items-end gap-2 lg:gap-3 h-24 lg:h-28 mt-auto relative border-b border-[var(--surface-border)] border-dashed pb-1">
                                                    {/* Target Line */}
                                                    <div className="absolute top-8 left-0 w-full border-t border-[var(--primary-color)]/40 border-dashed z-0">
                                                        <span className="absolute -top-4 right-0 text-[8px] text-[var(--primary-color)] font-mono bg-[#0b1121]/80 px-1 rounded">META</span>
                                                    </div>
                                                    
                                                    {currentView.chartBars.map((h, i) => (
                                                        <div key={`${activeTab}-bar-${i}`} className="flex-1 bg-[var(--surface-color)] rounded-t relative group-hover:bg-[var(--surface-border)] transition-colors z-10 flex flex-col justify-end overflow-hidden cursor-pointer hover:!bg-[var(--primary-color)]/20">
                                                            <div 
                                                                className="w-full bg-gradient-to-t from-blue-600 to-[var(--primary-color)] rounded-t bar-animate opacity-0 relative"
                                                                style={{ height: `${h}%`, animationDelay: `${0.3 + (i * 0.05)}s` }}
                                                            >
                                                                <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent"></div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                {/* X Axis Labels */}
                                                <div className="flex justify-between text-[8px] lg:text-[9px] text-[var(--text-muted)] mt-2 px-1 font-mono">
                                                    <span>SEG</span><span>TER</span><span>QUA</span><span>QUI</span><span>SEX</span><span>SAB</span><span>DOM</span>
                                                </div>
                                            </div>

                                            {/* Side Widget */}
                                            <div className="glass-panel bg-[#1e293b]/40 rounded-xl p-4 w-[35%] flex flex-col gap-2 group hover:border-[var(--primary-color)] hover:bg-[#1e293b]/60 transition-all duration-300">
                                                <div className="text-[10px] font-semibold text-[var(--text-muted)] group-hover:text-white transition-colors uppercase tracking-wider">Composição</div>
                                                
                                                {/* Animated Donut simulation */}
                                                <div className="flex-1 flex items-center justify-center py-2 relative">
                                                    <div key={`${activeTab}-donut`} className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-[6px] lg:border-[8px] border-[var(--surface-border)] relative flex items-center justify-center shadow-inner group-hover:shadow-[0_0_15px_rgba(14,165,233,0.2)] transition-shadow">
                                                        <div className="absolute inset-[-6px] lg:inset-[-8px] rounded-full border-[6px] lg:border-[8px] border-[var(--primary-color)] border-r-transparent border-b-transparent transform rotate-45 animate-[spin_3s_ease-out_forwards]"></div>
                                                        <div className="absolute inset-[-6px] lg:inset-[-8px] rounded-full border-[6px] lg:border-[8px] border-blue-400/80 border-l-transparent border-t-transparent transform rotate-12 opacity-80"></div>
                                                        <div className="text-center kpi-animate" style={{animationDelay: '0.4s'}}>
                                                            <span className="block text-sm lg:text-lg font-bold text-white group-hover:scale-110 transition-transform">{currentView.donutValue}</span>
                                                            <span className="block text-[6px] lg:text-[8px] text-[var(--text-muted)] -mt-1 leading-none">{currentView.donutLabel}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="space-y-1.5 mt-2">
                                                    {currentView.donutItems.map((item, i) => (
                                                        <div key={`${activeTab}-leg-${i}`} className="flex justify-between items-center text-[9px] lg:text-[10px] kpi-animate" style={{ animationDelay: `${0.5 + (i * 0.1)}s` }}>
                                                            <div className="flex items-center gap-1.5">
                                                                <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full ${item.color} shadow-[0_0_5px_rgba(255,255,255,0.3)]`}></div>
                                                                <span className="text-[var(--text-muted)] truncate max-w-[50px] lg:max-w-[60px]">{item.label}</span>
                                                            </div>
                                                            <span className="text-white font-medium font-mono">{item.val}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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