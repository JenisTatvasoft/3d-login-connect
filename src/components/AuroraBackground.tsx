export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Gradient blobs */}
      <div
        className="shape-blob animate-pulse-glow"
        style={{
          width: 520,
          height: 520,
          top: "-10%",
          left: "-10%",
          background: "oklch(0.7 0.28 320)",
        }}
      />
      <div
        className="shape-blob animate-pulse-glow"
        style={{
          width: 600,
          height: 600,
          bottom: "-15%",
          right: "-10%",
          background: "oklch(0.65 0.25 230)",
          animationDelay: "1.5s",
        }}
      />
      <div
        className="shape-blob animate-pulse-glow"
        style={{
          width: 420,
          height: 420,
          top: "30%",
          right: "20%",
          background: "oklch(0.7 0.22 180)",
          animationDelay: "3s",
        }}
      />

      {/* Floating 3D shapes */}
      <div
        className="shape-3d animate-float-slow"
        style={{
          width: 180,
          height: 180,
          top: "12%",
          left: "8%",
          transform: "rotate(15deg)",
        }}
      />
      <div
        className="shape-3d animate-float-med"
        style={{
          width: 120,
          height: 120,
          top: "18%",
          right: "12%",
          borderRadius: "50%",
        }}
      />
      <div
        className="shape-3d animate-float-fast"
        style={{
          width: 90,
          height: 90,
          bottom: "20%",
          left: "15%",
          borderRadius: "24%",
        }}
      />
      <div
        className="shape-3d animate-float-med"
        style={{
          width: 220,
          height: 220,
          bottom: "8%",
          right: "8%",
          borderRadius: "38%",
          animationDelay: "2s",
        }}
      />
      <div
        className="shape-3d animate-float-slow"
        style={{
          width: 70,
          height: 70,
          top: "55%",
          left: "45%",
          borderRadius: "50%",
          animationDelay: "1s",
        }}
      />

      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}
