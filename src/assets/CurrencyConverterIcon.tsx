export default function CurrencyConverterIcon ({ maxWidth, maxHeight }:SvgProps) {
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      version="1.1"
      viewBox="0 0 26.458 26.458"
      xmlSpace="preserve"
      style={{ width: '100%', height: '100%', maxWidth, maxHeight }}
    >
      <defs>
        <marker
          id="RoundedArrow"
          markerHeight="4"
          markerWidth="4"
          orient="auto-start-reverse"
          overflow="visible"
          preserveAspectRatio="xMidYMid"
          refX="0"
          refY="0"
          viewBox="0 0 6.135 5.93"
        >
          <path
            fill="context-stroke"
            fillRule="evenodd"
            stroke="none"
            d="M-.211-4.106L6.21-.894a1 1 90 010 1.788L-.21 4.106A1.236 1.236 31.717 01-2 3v-6A1.236 1.236 148.283 01-.211-4.106z"
            transform="scale(.7)"
          ></path>
        </marker>
      </defs>
      <g stroke="#696969" strokeDasharray="none">
        <text
          xmlSpace="preserve"
          style={{
            fontFamily: "Arial",
            textAlign: "center",
          }}
          x="22.312"
          y="15.837"
          fill="#696969"
          strokeLinecap="square"
          strokeWidth="0.132"
          fontFamily="Arial"
          fontSize="5.501"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          paintOrder="markers fill stroke"
          textAnchor="middle"
          transform="scale(1.00208 .99793)"
        >
          <tspan
            style={{ textAlign: "center" }}
            x="22.312"
            y="15.837"
            strokeDasharray="none"
            strokeWidth="0.265"
            fontSize="5.178"
            textAnchor="middle"
          >
            ¥
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontFamily: "Arial",
            textAlign: "center",
          }}
          x="3.86"
          y="15.208"
          fill="#696969"
          strokeLinecap="square"
          strokeWidth="0.132"
          fontFamily="Arial"
          fontSize="4.412"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          paintOrder="markers fill stroke"
          textAnchor="middle"
          transform="scale(.99078 1.0093)"
        >
          <tspan
            style={{ textAlign: "center" }}
            x="3.86"
            y="15.208"
            strokeDasharray="none"
            strokeWidth="0.265"
            fontSize="5.178"
            textAnchor="middle"
          >
            $
          </tspan>
        </text>
        <path
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="0.609"
          markerEnd="url(#RoundedArrow)"
          d="M7.4 13.839h9.277"
        ></path>
      </g>
    </svg>
    )
  }