import React from "react";

function Goals(props) {
  const iconFill = props.iconFill || "#393c47";
  const width = props.width || "35";
  const height = props.height || "45";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 39 46"
    >
      <g fill={iconFill} transform="translate(.776 .83)">
        <path d="M9.44091187 5.30501804L5.87754597 5.30501804C5.38554108 5.30501804 4.98608096 4.90557039 4.98608096 4.41355303L4.98608096 1.02066103C4.98608096.528656147 5.38552861.12919602 5.87754597.12919602L9.44091187.12919602C9.93291675.12919602 10.3323769.528643676 10.3323769 1.02066103L10.3323769 4.41355303C10.3323769 4.90555792 9.935361 5.30501804 9.44091187 5.30501804zM6.76894862 3.52208803L8.54944686 3.52208803 8.54944686 1.90969426 6.76894862 1.90969426 6.76894862 3.52208803zM9.44091187 40.3201324L5.87754597 40.3201324C5.38554108 40.3201324 4.98608096 39.9206848 4.98608096 39.4286674L4.98851648 18.657539C4.98851648 18.1655341 5.38796413 17.7660739 5.87998149 17.7660739L9.44334739 17.7660739C9.93535227 17.7660739 10.3348124 18.1655216 10.3348124 18.657539L10.3348124 39.4286674C10.3323763 39.9206723 9.93536474 40.3201324 9.44091561 40.3201324L9.44091187 40.3201324zM6.76894862 38.5396342L8.54944686 38.5396342 8.55188238 19.5486922 6.77138414 19.5486922 6.76894862 38.5396342z" />
        <path d="M14.368069 44.7652986L.952134762 44.7652986C.46012988 44.7652986.0606697527 44.3658509.0606697527 43.8738336L.0631052722 40.9266429C.0631052722 39.6089308 1.13483365 38.5396966 2.45005163 38.5396966L12.8798867 38.5396966C14.1927353 38.5396966 15.2571059 39.6114249 15.2571059 40.9266429L15.2571059 43.8762654C15.2595415 44.3658385 14.8600901 44.7652986 14.3680727 44.7652986L14.368069 44.7652986zM1.84378683 42.9848004L13.4764169 42.9848004 13.4764169 40.9266429C13.4764169 40.592953 13.208491 40.3201574 12.8796772 40.3201574L2.44984212 40.3201574C2.11615224 40.3201574 1.84335659 40.592953 1.84335659 40.9266429L1.84378683 42.9848004zM25.991346 19.549004L5.87991539 19.549004C5.38791051 19.549004 4.98845038 19.1495563 4.98845038 18.657539L4.98845038 4.41355303C4.98845038 3.92154815 5.38789804 3.52208803 5.87991539 3.52208803L25.9938402 3.52208803C26.4858451 3.52208803 26.8853052 3.92153568 26.8853052 4.41355303L26.882869 18.657539C26.882869 19.1495438 26.4858532 19.549004 25.991404 19.549004L25.991346 19.549004zM6.76901472 17.7660739L25.099694 17.7660739 25.1021295 5.30539216 6.76901472 5.30539216 6.76901472 17.7660739z" />
        <path d="M36.4598402,23.2902015 L17.7170643,23.2902015 C17.2250594,23.2902015 16.8255992,22.8907538 16.8255992,22.3987364 L16.8255992,18.657539 C16.8255992,18.1655341 17.2250469,17.7660739 17.7170643,17.7660739 L25.1021881,17.7660739 L25.1021881,8.15493759 C25.1021881,7.6629327 25.501642,7.26347258 25.9936531,7.26347258 L36.4596531,7.26347258 C36.8006508,7.26347258 37.1148615,7.45832661 37.2610176,7.76765506 C37.409593,8.0769835 37.3681904,8.44231767 37.1562828,8.71024977 L31.6857791,15.5834531 L37.1295332,21.8114869 C37.3584883,22.074543 37.4145065,22.4471787 37.2708008,22.7662405 C37.1246572,23.0853148 36.8080209,23.2899084 36.4597092,23.2899084 L36.4598402,23.2902015 Z M18.6087163,21.5072714 L34.4988291,21.5072714 L29.8564395,16.1975145 C29.5739043,15.8735705 29.5617205,15.3937183 29.8296476,15.057634 L34.6133297,9.0464026 L26.8846393,9.0464026 L26.8822031,18.657539 C26.8822031,19.1495438 26.4827555,19.549004 25.9907381,19.549004 L18.6056143,19.549004 L18.6087163,21.5072714 Z" />
      </g>
    </svg>
  );
}

export default Goals;
