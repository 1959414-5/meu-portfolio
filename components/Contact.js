function Contact() {
    try {
        return (
            <section id="contato" className="py-24 relative" data-name="contact" data-file="components/Contact.js">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="glass-panel p-8 md:p-16 text-center rounded-2xl relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--primary-color)] rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
                        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
                        
                        <div className="icon-briefcase-business text-5xl text-[var(--primary-color)] mb-6 mx-auto" aria-hidden="true"></div>
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Vamos conversar sobre uma oportunidade?</h2>
                        <p className="text-base md:text-lg text-[var(--text-muted)] mb-8 md:mb-10 max-w-2xl mx-auto">
                            Estou em busca de uma oportunidade na área de Análise de Dados / Business Intelligence, onde possa aplicar meus conhecimentos em Power BI, SQL e análise de processos para apoiar equipes com informações que contribuam para decisões melhores.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 md:gap-6">
                            <a href="https://wa.me/5544936182134" target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] border-none">
                                <div className="icon-message-circle"></div>
                                WhatsApp
                            </a>
                            <a href="mailto:babzinhaa14@gmail.com?subject=Oportunidade%20%7C%20Analista%20de%20Dados%20%2F%20BI" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
                                <div className="icon-send"></div>
                                E-mail
                            </a>
                            <a href="https://www.linkedin.com/in/b%C3%A1rbara-paschoalin-980b52185/" target="_blank" rel="noopener noreferrer" className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0077b5] border-[#0077b5] hover:bg-opacity-80">
                                <div className="icon-linkedin"></div>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        return null;
    }
}