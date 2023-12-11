export default function TimeDifferenceIcon ({ maxWidth, maxHeight }:SvgProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 26.458 26.458"
        style={{width: '100%', height: '100%', maxWidth, maxHeight}}
      >
        <g
        fill='#696969'
        fillOpacity='1'
        stroke='none'
        strokeLinecap='square'
        strokeOpacity='1'
        fontFamily='Arial'
        fontSize='4.233'
        fontStretch='normal'
        fontStyle='normal'
        fontVariant='normal'
        fontWeight='normal'
        paintOrder='markers fill stroke'
        textAnchor='middle'
      >
        <text
          xmlSpace='preserve'
          style={{
            fontFamily: "Arial",
            textAlign: "center",
          }}
          x='13.278'
          y='11.509'
          strokeWidth='0'
        >
          <tspan
            style={{
              fontFamily: "Arial",
              textAlign: "center",
            }}
            x='13.278'
            y='11.509'
            fill='#696969'
            fillOpacity='1'
            stroke='none'
            strokeOpacity='1'
            strokeWidth='0'
            fontFamily='Arial'
            fontSize='4.233'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
            textAnchor='middle'
          >
            05:50 am
          </tspan>
        </text>
            <text
                xmlSpace='preserve'
                style={{
                    fontFamily: "Arial",
                    textAlign: "center",
                }}
                x='13.228'
                y='14.326'
                strokeDasharray='none'
                strokeWidth='0.794'
            >
            <tspan x='13.228' y='14.326' strokeWidth='0.794'>
                -
            </tspan>
            </text>
            <text
                xmlSpace='preserve'
                style={{
                    fontFamily: "Arial",
                    textAlign: "center",
                }}
                x='13.277'
                y='17.94'
                strokeDasharray='none'
                strokeWidth='0.794'
            >
                <tspan x='13.277' y='17.94' strokeWidth='0.794'>
                    2/2/2022
                </tspan>
            </text>
        </g>
      </svg>
    )
  }