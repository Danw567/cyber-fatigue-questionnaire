export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 120"
      className="h-full w-full"
    >
      <g transform="translate(30, 20)">
        <path
          d="M12,15 L38,15 L38,40 L12,40 C12,26 20,18 12,15 Z"
          fill="#0F172A"
        />
        <path d="M44,12 L70,12 C62,15 70,26 70,37 L44,37 Z" fill="#0D9488" />
        <path
          d="M12,46 L38,46 L38,72 L12,72 C12,72 12,56 12,46 Z"
          fill="#334155"
        />
        <path d="M44,43 L70,43 L70,55 C70,68 54,78 44,82 Z" fill="#14B8A6" />

        <circle cx="41" cy="41" r="5" fill="#FFFFFF" />
      </g>

      <g transform="translate(118, 75)">
        <text
          x="0"
          y="0"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontWeight: 800,
            fontSize: "42px",
            fill: "#1E293B",
            letterSpacing: "-0.8px",
          }}
        >
          CyFa
          <tspan style={{ fill: "#0D9488", fontWeight: 900 }}>-4</tspan>
        </text>
      </g>
    </svg>
  );
}
