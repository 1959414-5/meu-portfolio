function Header() {
    try {
        const [isScrolled, setIsScrolled] = React.useState(false);
        const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
        const [activeSection, setActiveSection] = React.useState("sobre");
        const [theme, setTheme] = React.useState(() => {
            try {
                return localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
            } catch (error) {
                return "dark";
            }
        });

        const navItems = [
            { id: "sobre", label: "Sobre" },
            { id: "habilidades", label: "Habilidades" },
            { id: "projetos", label: "Projetos" },
            { id: "experiencia", label: "Experiência" },
            { id: "contato", label: "Contato" }
        ];

        React.useEffect(() => {
            const handleScroll = () => setIsScrolled(window.scrollY > 24);
            window.addEventListener("scroll", handleScroll, { passive: true });
            handleScroll();

            const targets = navItems
                .map(item => document.getElementById(item.id))
                .filter(Boolean);
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            }, { rootMargin: "-28% 0px -58% 0px", threshold: 0 });
            targets.forEach(target => observer.observe(target));

            return () => {
                window.removeEventListener("scroll", handleScroll);
                observer.disconnect();
            };
        }, []);

        React.useEffect(() => {
            document.documentElement.setAttribute("data-theme", theme);
            const themeColor = document.querySelector('meta[name="theme-color"]');
            if (themeColor) {
                themeColor.setAttribute("content", theme === "light" ? "#fff7fa" : "#150f18");
            }
            try {
                localStorage.setItem("portfolio-theme", theme);
            } catch (error) {}
        }, [theme]);

        const toggleTheme = () => setTheme(current => current === "light" ? "dark" : "light");

        const scrollToSection = (id) => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
                setMobileMenuOpen(false);
            }
        };

        const languageSwitcher = (
            <div className="language-switch" role="group" aria-label="Idioma do site">
                <a href="?lang=pt" data-language="pt" aria-label="Português" title="Português" aria-pressed="true">🇧🇷</a>
                <a href="?lang=es" data-language="es" aria-label="Español" title="Español" aria-pressed="false">🇪🇸</a>
                <a href="?lang=en" data-language="en" aria-label="English" title="English" aria-pressed="false">🇺🇸</a>
            </div>
        );

        const themeToggle = (
            <button
                type="button"
                onClick={toggleTheme}
                className="theme-toggle glass-panel w-10 h-10 inline-flex items-center justify-center rounded-full hover:border-[var(--primary-color)] transition-colors"
                aria-label={theme === "light" ? "Ativar tema escuro" : "Ativar tema claro"}
                title={theme === "light" ? "Ativar tema escuro" : "Ativar tema claro"}
                aria-pressed={theme === "dark"}
            >
                <div className={`icon-${theme === "light" ? "moon" : "sun"} text-lg`} aria-hidden="true"></div>
            </button>
        );

        return (
            <header
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-panel py-3" : "bg-transparent py-5"}`}
                data-name="header"
                data-file="components/Header.js"
            >
                <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
                    <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-xl font-bold tracking-tight text-[var(--text-main)]" aria-label="Voltar ao início">
                        Bárbara<span className="text-[var(--primary-color)]">.</span>BI
                    </button>

                    <nav className="desktop-nav hidden lg:flex gap-7" aria-label="Navegação principal">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`nav-link ${activeSection === item.id ? "active-nav-link" : ""}`}
                                aria-current={activeSection === item.id ? "location" : undefined}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <div className="desktop-actions hidden lg:flex items-center gap-3">
                        {languageSwitcher}
                        {themeToggle}
                        <button onClick={() => scrollToSection("contato")} className="btn-primary py-2.5 px-5 text-sm">
                            Falar comigo
                        </button>
                    </div>

                    <div className="mobile-actions flex lg:hidden items-center gap-2">
                        {languageSwitcher}
                        {themeToggle}
                        <button
                            type="button"
                            className="w-10 h-10 inline-flex items-center justify-center rounded-full text-[var(--text-main)] hover:bg-[var(--surface-color)] transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-navigation"
                        >
                            <div className={`icon-${mobileMenuOpen ? "x" : "menu"} text-2xl`} aria-hidden="true"></div>
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <nav id="mobile-navigation" className="mobile-navigation lg:hidden glass-panel mx-4 mt-3 p-4 flex flex-col gap-1 absolute top-full left-0 right-0 shadow-2xl z-[60] animate-slide-up" aria-label="Navegação móvel">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-left py-3 px-2 border-b border-[var(--surface-border)] transition-colors ${activeSection === item.id ? "text-[var(--primary-color)] font-semibold" : "text-[var(--text-main)] hover:text-[var(--primary-color)]"}`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <button onClick={() => scrollToSection("contato")} className="btn-primary py-3 px-4 text-sm mt-3 w-full text-center">
                            Falar comigo
                        </button>
                    </nav>
                )}
            </header>
        );
    } catch (error) {
        console.error("Header component error:", error);
        return null;
    }
}