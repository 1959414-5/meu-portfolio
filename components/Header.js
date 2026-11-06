function Header() {
    try {
        const [isScrolled, setIsScrolled] = React.useState(false);
        const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
        const [theme, setTheme] = React.useState(() => {
            try {
                return localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light';
            } catch (error) {
                return 'light';
            }
        });

        React.useEffect(() => {
            const handleScroll = () => setIsScrolled(window.scrollY > 20);
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        React.useEffect(() => {
            document.documentElement.setAttribute('data-theme', theme);
            try {
                localStorage.setItem('portfolio-theme', theme);
            } catch (error) {}
        }, [theme]);

        const toggleTheme = () => setTheme(current => current === 'light' ? 'dark' : 'light');

        const scrollToSection = (id) => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
            }
        };

        const navItems = [
            { id: 'sobre', label: 'Sobre' },
            { id: 'habilidades', label: 'Habilidades' },
            { id: 'projetos', label: 'Projetos' },
            { id: 'experiencia', label: 'Experiência' },
            { id: 'contato', label: 'Contato' }
        ];

        const themeToggle = (
            <button
                type="button"
                onClick={toggleTheme}
                className="theme-toggle glass-panel w-10 h-10 inline-flex items-center justify-center rounded-full hover:border-[var(--primary-color)] transition-colors"
                aria-label={theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro'}
                title={theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro'}
                aria-pressed={theme === 'dark'}
            >
                <div className={`icon-${theme === 'light' ? 'moon' : 'sun'} text-lg`} aria-hidden="true"></div>
            </button>
        );

        return (
            <header
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'}`}
                data-name="header"
                data-file="components/Header.js"
            >
                <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
                    <div className="text-xl font-bold tracking-tight text-[var(--text-main)]">
                        Bárbara<span className="text-[var(--primary-color)]">.</span>BI
                    </div>

                    <nav className="hidden lg:flex gap-7" aria-label="Navegação principal">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="nav-link"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center gap-3">
                        {themeToggle}
                        <button onClick={() => scrollToSection('contato')} className="btn-primary py-2.5 px-5 text-sm">
                            Falar comigo
                        </button>
                    </div>

                    <div className="flex lg:hidden items-center gap-2">
                        {themeToggle}
                        <button
                            type="button"
                            className="w-10 h-10 inline-flex items-center justify-center rounded-full text-[var(--text-main)] hover:bg-[var(--surface-color)] transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-navigation"
                        >
                            <div className={`icon-${mobileMenuOpen ? 'x' : 'menu'} text-2xl`} aria-hidden="true"></div>
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <nav id="mobile-navigation" className="lg:hidden glass-panel mx-4 mt-3 p-4 flex flex-col gap-1 absolute top-full left-0 right-0 shadow-2xl z-[60] animate-slide-up" aria-label="Navegação móvel">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-left text-[var(--text-main)] hover:text-[var(--primary-color)] py-3 px-2 border-b border-[var(--surface-border)] transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}
                        <button onClick={() => scrollToSection('contato')} className="btn-primary py-3 px-4 text-sm mt-3 w-full text-center">
                            Falar comigo
                        </button>
                    </nav>
                )}
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        return null;
    }
}