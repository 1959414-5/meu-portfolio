function Footer() {
    try {
        const year = 2026; // Using current context year
        
        return (
            <footer className="py-8 border-t border-[var(--surface-border)] bg-[var(--bg-color)] relative z-10" data-name="footer" data-file="components/Footer.js">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-xl font-bold tracking-tighter text-white">
                        Bárbara<span className="text-[var(--primary-color)]">.</span>BI
                    </div>
                    
                    <p className="text-sm text-[var(--text-muted)] text-center">
                        &copy; {year} Bárbara Cabral Paschoalin. Todos os direitos reservados.
                    </p>
                    
                    <div className="flex items-center gap-4 text-[var(--text-muted)]">
                        <span className="text-sm">Maringá - PR, Brasil</span>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        return null;
    }
}