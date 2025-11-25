import { toast } from "sonner";

export interface WidgetData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: "live" | "coming-soon";
  slot?: string;
  embedCode?: string;
  demoUrl?: string;
  howToEmbed?: string[];
}

interface WidgetCardProps {
  widget: WidgetData;
}

export function WidgetCard({ widget }: WidgetCardProps) {
  const handleCopyEmbed = () => {
    if (widget.embedCode) {
      navigator.clipboard.writeText(widget.embedCode);
      toast.success("Copied to clipboard!");
    }
  };

  const isComingSoon = widget.status === "coming-soon";

  return (
    <article 
      className={`border border-border p-3.5 bg-[#050505] relative overflow-hidden transition-all duration-200 ${
        isComingSoon ? "opacity-60" : ""
      }`}
      style={{
        zIndex: 0,
      }}
    >
      {/* Hover gradient effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-200"
        style={{
          background: "radial-gradient(circle at 0 0, rgba(255,255,255,0.08) 0, transparent 55%)",
          zIndex: -1,
        }}
      />

      {/* Status label */}
      <div 
        className={`absolute top-2 right-2.5 text-[10px] px-2 py-0.5 border uppercase tracking-[0.18em] bg-black/85 ${
          widget.status === "live" 
            ? "border-foreground" 
            : "border-border border-dashed"
        }`}
      >
        {widget.status === "live" ? "live" : widget.slot?.toLowerCase() || "coming soon"}
      </div>

      {/* Title */}
      <h3 className="text-[13px] uppercase tracking-[0.12em] mb-1.5">
        {widget.title}
      </h3>

      {/* Subtitle */}
      {widget.subtitle && (
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground mb-2">
          {widget.subtitle}
        </div>
      )}

      {/* Description */}
      <p className="text-xs text-muted-foreground mb-2.5">
        {widget.description}
      </p>

      {!isComingSoon && (
        <>
          {/* How to embed */}
          {widget.howToEmbed && (
            <div className="mb-2.5">
              <h4 className="text-[11px] tracking-[0.18em] uppercase text-accent mb-1.5">
                How to embed
              </h4>
              <ol className="space-y-0.5 text-xs text-muted-foreground list-decimal list-inside">
                {widget.howToEmbed.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          {/* Embed code */}
          {widget.embedCode && (
            <div className="relative mb-2.5">
              <button
                onClick={handleCopyEmbed}
                className="absolute top-1.5 right-1.5 px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase bg-black border border-foreground text-white opacity-70 hover:opacity-100 transition-opacity duration-150 z-10"
              >
                COPY
              </button>
              <pre className="mt-1.5 p-2.5 bg-black border border-border whitespace-pre overflow-x-auto text-[11px] font-mono">
                {widget.embedCode}
              </pre>
            </div>
          )}

          {/* Demo button */}
          {widget.demoUrl && (
            <a
              href={widget.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2.5 px-3.5 py-1.5 text-[11px] tracking-[0.16em] uppercase border border-foreground bg-black text-white transition-all duration-150 hover:bg-white hover:text-black hover:shadow-[0_0_18px_rgba(255,255,255,0.35)] hover:-translate-y-px"
            >
              Open {widget.title} demo
            </a>
          )}
        </>
      )}
    </article>
  );
}
