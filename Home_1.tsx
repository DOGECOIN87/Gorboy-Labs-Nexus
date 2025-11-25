import { APP_LOGO, APP_TITLE, APP_TAGLINE, APP_DESCRIPTION } from "@/const";
import { WidgetCard } from "@/components/WidgetCard";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Logo3D } from "@/components/Logo3D";
import { widgets } from "@/data/widgets";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  const widgetsReveal = useScrollReveal();
  const integrationReveal = useScrollReveal();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div 
      className="min-h-screen text-foreground relative overflow-x-hidden"
      style={{
        background: "radial-gradient(circle at 20% 0, #111 0, #000 35%, #000 100%)",
      }}
    >
      <BackgroundEffects />

      {/* Main content */}
      <div className="relative z-[5] max-w-[1120px] mx-auto px-5 py-8 md:py-12">
        {/* Hero Section */}
        <header 
          className="border border-foreground p-6 md:p-8 mb-8 relative"
          style={{
            background: "radial-gradient(circle at 0 0, #1a1a1a 0, #000000 50%)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.12), 0 0 40px rgba(255,255,255,0.08)",
          }}
        >
          {/* Corner accent */}
          <div 
            className="absolute -top-px -left-px w-3.5 h-3.5"
            style={{
              borderRight: "1px solid white",
              borderBottom: "1px solid white",
            }}
          />

          <div className="mb-3.5">
            <img
              src={APP_LOGO}
              alt={APP_TITLE}
              className="max-w-[220px]"
              style={{
                imageRendering: "pixelated",
                filter: "drop-shadow(0 0 8px rgba(255,255,255,0.35))",
              }}
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-[0.08em] uppercase mb-2">
            {APP_TITLE}
          </h1>

          <div className="text-sm tracking-[0.22em] uppercase text-accent mb-4">
            {APP_TAGLINE}
          </div>

          <p className="text-[13px] tracking-[0.16em] uppercase text-muted-foreground">
            {APP_DESCRIPTION}
          </p>

          <div className="flex gap-2.5 mt-6">
            <button
              onClick={() => scrollToSection("widgets")}
              className="border border-foreground bg-black text-white px-4 py-2 text-xs tracking-[0.16em] uppercase transition-all duration-150 hover:bg-white hover:text-black hover:shadow-[0_0_18px_rgba(255,255,255,0.35)] hover:-translate-y-px"
            >
              Widgets
            </button>
            <button
              onClick={() => scrollToSection("integration")}
              className="border border-border bg-black text-accent px-4 py-2 text-xs tracking-[0.16em] uppercase transition-all duration-150 hover:bg-white hover:text-black hover:shadow-[0_0_18px_rgba(255,255,255,0.35)] hover:-translate-y-px"
            >
              Integration
            </button>
          </div>
        </header>

        {/* 3D Logo Section - Optional Enhancement */}
        {/* <section className="mb-8">
          <Logo3D />
        </section> */}

        {/* What is Gorboy Labs */}
        <section className="border border-border p-5 mb-6 bg-black/85">
          <h2 className="text-[13px] tracking-[0.16em] uppercase text-muted-foreground mb-3">
            <span className="text-accent">00</span> · what is gorboy labs
          </h2>
          <p className="text-[13px] leading-relaxed mb-2.5">
            Gorboy Labs is the experimental wing of the Gorboy ecosystem — tools, generators,
            mini-widgets and add-ons for meme founders.
          </p>
          <p className="text-[13px] leading-relaxed">
            Pure HTML / CSS / JS. Zero VC. Zero budget. Built for people who
            want to ship fast on <strong>Gorbagana</strong>.
          </p>
        </section>

        {/* Widget Stack */}
        <section 
          id="widgets" 
          ref={widgetsReveal.ref}
          className={`border border-border p-5 mb-6 bg-black/85 transition-all duration-700 ${
            widgetsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-[13px] tracking-[0.16em] uppercase text-muted-foreground mb-3">
            <span className="text-accent">01</span> · widget stack
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {widgets.map((widget, index) => (
              <div
                key={widget.id}
                className="transition-all duration-500"
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: widgetsReveal.isVisible ? 1 : 0,
                  transform: widgetsReveal.isVisible ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <WidgetCard widget={widget} />
              </div>
            ))}
          </div>
        </section>

        {/* Integration Guide */}
        <section 
          id="integration" 
          ref={integrationReveal.ref}
          className={`border border-border p-5 mb-6 bg-black/85 transition-all duration-700 ${
            integrationReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-[13px] tracking-[0.16em] uppercase text-muted-foreground mb-3">
            <span className="text-accent">02</span> · integration guide
          </h2>
          
          <p className="text-[13px] leading-relaxed mb-2.5">
            All Gorboy Labs widgets are designed to be
            <strong> copy-paste only</strong>. No backend. No SDK.
          </p>

          <ol className="space-y-2 mb-2.5 text-[13px] leading-relaxed list-decimal list-inside">
            <li>Pick a widget above.</li>
            <li>Use the COPY button to grab its embed snippet.</li>
            <li>Paste into your website / landing / tools page.</li>
          </ol>

          <p className="text-[13px] leading-relaxed text-muted-foreground">
            If you can edit a webpage — you can embed Gorboy Labs.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center text-[13px] tracking-[0.16em] uppercase text-muted-foreground space-y-1 py-6">
          <div>GORBOY LABS — MEME.BUILD.REPEAT.</div>
          <div className="text-xs">exclusive for gorbagana chain</div>
        </footer>
      </div>
    </div>
  );
}
