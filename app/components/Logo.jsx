import { useHeader } from "~/contexts/HeaderContext";

export default function Logo({ displayWordmark = true, shouldAnimateLogo = false, ...props }) {
  const { shouldAnimateLogo: shouldAnimateLogoOnRouteChange } = useHeader();
  const isAnimated = shouldAnimateLogo && shouldAnimateLogoOnRouteChange;

  return (
    <svg width="140" height="140" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="80%" height="80%" fill="none" />
      <path
        d="M40,115 C45,55 120,60 130,68"
        fill="none"
        stroke="gold"
        strokeWidth="8"
        strokeLinecap="round"
      >
        <animate
          attributeName="stroke-dasharray"
          from="0,200"
          to="200,0"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate attributeName="stroke-width" from="4" to="10" dur="2s" repeatCount="indefinite" />
      </path>
      <text
        x="100"
        y="120"
        fill="white"
        fontSize="60"
        fontFamily="Arial"
        textAnchor="middle"
        fontWeight="bold"
      >
        <tspan>V</tspan>
        <tspan dx="5">V</tspan>
      </text>
      <text
        x="100"
        y="140"
        fill="white"
        fontSize="18"
        fontFamily="Arial"
        textAnchor="middle"
        fontWeight="bold"
      >
        ALPHA CODER
      </text>
    </svg>
  );
}
