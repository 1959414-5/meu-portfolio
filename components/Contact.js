function Contact() {
    try {
        return (
            <section id="contato" className="py-24 relative" data-name="contact" data-file="components/Contact.js">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="glass-panel p-8 md:p-16 text-center rounded-2xl relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--primary-color)] rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
                        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
                        
                        <div className="icon-mail text-5xl text-[var(--primary-color)] mb-6 mx-auto"></div>
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Pronto para Otimizar Seus Dados?</h2>
                        <p className="text-base md:text-lg text-[var(--text-muted)] mb-8 md:mb-10 max-w-2xl mx-auto">
                            Estou disponível para novas oportunidades como Analista de Dados / BI. Vamos conversar sobre como posso ajudar a transformar os dados da sua empresa em decisões estratégicas.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 md:gap-6">
                            <a href="https://wa.me/5544936182134" target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] border-none">
                                <div className="icon-message-circle"></div>
                                WhatsApp
                            </a>
                            <a href="mailto:babzinhaa14@gmail.com" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
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