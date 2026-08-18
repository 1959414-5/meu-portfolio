function Header() {
    try {
        const [isScrolled, setIsScrolled] = React.useState(false);
        const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

        React.useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 20);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

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

        return (
            <header 
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3 shadow-lg' : 'bg-transparent py-5'}`}
                data-name="header" 
                data-file="components/Header.js"
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="text-xl font-bold tracking-tighter text-white">
                        Bárbara<span className="text-[var(--primary-color)]">.</span>BI
                    </div>

                    <nav className="hidden md:flex gap-8">
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

                    <div className="hidden md:block">
                        <button onClick={() => scrollToSection('contato')} className="btn-primary py-2 px-4 text-sm">
                            Falar Comigo
                        </button>
                    </div>

                    <button 
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <div className={`icon-${mobileMenuOpen ? 'x' : 'menu'} text-2xl`}></div>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden glass-panel mx-4 mt-4 p-4 flex flex-col gap-4 absolute top-full left-0 right-0 shadow-2xl border border-[var(--surface-border)] bg-[#0b1121]/95 z-[60] backdrop-blur-xl animate-slide-up">
                        {navItems.map(item => (
                            <button 
                                key={item.id} 
                                onClick={() => scrollToSection(item.id)}
                                className="text-left text-[var(--text-main)] hover:text-[var(--primary-color)] py-3 border-b border-[var(--surface-border)]/50 transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}
                        <button onClick={() => scrollToSection('contato')} className="btn-primary py-3 px-4 text-sm mt-2 w-full text-center">
                            Falar Comigo
                        </button>
                    </div>
                )}
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        return null;
    }
}