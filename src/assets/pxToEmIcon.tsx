export default function PxToEmIcon ({ maxWidth, maxHeight }:SvgProps) {
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
            markerHeight="2.4"
            markerWidth="2.483"
            orient="auto-start-reverse"
            overflow="visible"
            preserveAspectRatio="xMidYMid"
            refX="0"
            refY="0"
            viewBox="0 0 6.135 5.93"
          >
            <path
              fill="#696969ff"
              fillRule="evenodd"
              stroke="none"
              d="M-.211-4.106L6.21-.894a1 1 90 010 1.788L-.21 4.106A1.236 1.236 31.717 01-2 3v-6A1.236 1.236 148.283 01-.211-4.106z"
              transform="scale(.8)"
            ></path>
          </marker>
        </defs>
        <g stroke="#696969" transform="translate(-116.175 -163.28)">
          <text
            xmlSpace="preserve"
            style={{ fontFamily: "Arial" }}
            x="134.253"
            y="179.292"
            fill="#696969"
            strokeLinecap="square"
            strokeWidth="0.265"
            fontFamily="Arial"
            fontSize="5.178"
            fontStretch="normal"
            fontStyle="normal"
            fontVariant="normal"
            fontWeight="normal"
            paintOrder="markers fill stroke"
            transform="scale(1.00479 .99523)"
          >
            <tspan x="134.253" y="179.292" strokeWidth="0.265" fontSize="5.178">
              em
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{ fontFamily: "Arial" }}
            x="116.283"
            y="179.292"
            fill="#696969"
            strokeLinecap="square"
            strokeWidth="0.265"
            fontFamily="Arial"
            fontSize="5.178"
            fontStretch="normal"
            fontStyle="normal"
            fontVariant="normal"
            fontWeight="normal"
            paintOrder="markers fill stroke"
            transform="scale(1.00479 .99523)"
          >
            <tspan x="116.283" y="179.292" strokeWidth="0.265" fontSize="5.178">
              px
            </tspan>
          </text>
          <path
            fill="none"
            fillRule="evenodd"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.609"
            markerEnd="url(#RoundedArrow)"
            markerStart="url(#RoundedArrow)"
            d="M124.054 177.102h9.276"
          ></path>
        </g>
      </svg>
    )
  }