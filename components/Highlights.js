function Highlights() {
    const highlights = [
        { icon: "icon-factory", value: "8 anos", label: "de experiência na indústria", detail: "Vivência em processos comerciais e operacionais" },
        { icon: "icon-graduation-cap", value: "ADS · 2024", label: "graduação concluída", detail: "Análise e Desenvolvimento de Sistemas" },
        { icon: "icon-chart-no-axes-combined", value: "Power BI", label: "projetos de Business Intelligence", detail: "Dashboards, indicadores, DAX e Power Query" },
        { icon: "icon-database", value: "SQL / MySQL", label: "projeto prático de banco de dados", detail: "Modelagem relacional e consultas analíticas" }
    ];
    return (
        <section aria-label="Destaques profissionais" className="relative py-8 md:py-12">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    {highlights.map((item) => (
                        <article key={item.value} className="glass-panel p-5 md:p-6 flex items-start gap-4">
                            <div className="inner-card shrink-0 w-11 h-11 rounded-xl border border-[var(--surface-border)] flex items-center justify-center text-[var(--primary-color)]">
                                <span className={item.icon + " text-xl"} aria-hidden="true"></span>
                            </div>
                            <div className="min-w-0">
                                <h2 className="text-xl font-bold text-[var(--text-main)] leading-tight">{item.value}</h2>
                                <p className="text-sm font-semibold text-[var(--text-main)] mt-1">{item.label}</p>
                                <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">{item.detail}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
