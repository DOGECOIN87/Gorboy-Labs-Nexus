export function BackgroundEffects() {
  return (
    <>
      {/* Grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Scanlines */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] opacity-40 mix-blend-soft-light"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "100% 3px",
        }}
      />

      {/* Watermark logo */}
      <div className="fixed top-4 right-4 z-[2] opacity-20 pointer-events-none">
        <img
          src="/gorboy-logo.png"
          alt="Gorboy Labs Watermark"
          className="w-16 h-16 md:w-20 md:h-20"
          style={{ imageRendering: "pixelated" }}
        />
      </div>
    </>
  );
}
