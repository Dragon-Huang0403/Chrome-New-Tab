import React from 'react';
import { defaultProps, SVGIconProps } from './type/svgIconType';

function Pinned({ style, fill, onClick }: SVGIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      width="48"
      viewBox="0 0 48 48"
      style={style}
      fill={fill}
      onClick={onClick}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="m31.7 25.6 4.3 3.85v3H25.5V44.5L24 46l-1.5-1.5V32.45H12v-3l4-3.85V8.95h-2.5v-3h20.7v3h-2.5Z"
      />
    </svg>
  );
}

Pinned.defaultProps = defaultProps;

export default Pinned;
