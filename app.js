// Important: DO NOT remove this `ErrorBoundary` component.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-black"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function SiteEffects() {
  React.useEffect(() => {
    const revealTargets = Array.from(document.querySelectorAll(
      "main > section, main > section .glass-panel, main > section .section-title"
    ));

    revealTargets.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      if (element.classList.contains("glass-panel")) {
        element.style.setProperty("--reveal-delay", `${(index % 4) * 65}ms`);
      }
    });

    let observer;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -36px 0px" });

      revealTargets.forEach(element => observer.observe(element));
    } else {
      revealTargets.forEach(element => element.classList.add("is-visible"));
    }

    const progress = document.getElementById("scroll-progress");
    const updateProgress = () => {
      if (!progress) return;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const amount = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      progress.style.transform = `scaleX(${amount})`;
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();

    // O conteúdo principal é montado pelo React depois do carregamento do tradutor.
    // Reaplica o idioma após o primeiro commit para garantir que todo o DOM esteja disponível.
    const applyInitialLanguage = () => {
      let language = null;
      try {
        const requested = new URLSearchParams(window.location.search).get("lang");
        const saved = localStorage.getItem("portfolio-language");
        language = ["pt", "es", "en"].includes(requested) ? requested :
          (["pt", "es", "en"].includes(saved) ? saved : "pt");
      } catch (error) {
        language = "pt";
      }

      const apply = () => {
        if (typeof window.setPortfolioLanguage === "function") {
          window.setPortfolioLanguage(language);
        } else {
          const script = document.createElement("script");
          script.src = "./portfolio-i18n.js?v=20261111-react-mount-fix";
          script.onload = () => {
            if (typeof window.setPortfolioLanguage === "function") {
              window.setPortfolioLanguage(language);
            }
          };
          document.head.appendChild(script);
        }
      };

      window.requestAnimationFrame(() => window.requestAnimationFrame(apply));
    };
    applyInitialLanguage();

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return <div id="scroll-progress" aria-hidden="true"></div>;
}

function App() {
  try {
    return (
      <div className="relative min-h-screen" data-name="app" data-file="app.js">
        <div className="bg-glow top-0 left-0"></div>
        <div className="bg-glow top-1/2 right-0"></div>
        <SiteEffects />
        <Header />
        <main>
          <Hero />
          <Highlights />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
