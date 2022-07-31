import React from 'react';
import { defaultProps, SVGIconProps } from './type/svgIconType';

function MoreDots({ style, fill, onClick }: SVGIconProps) {
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
      <path d="M24.05 41.7Q22.8 41.7 21.925 40.825Q21.05 39.95 21.05 38.75Q21.05 37.55 21.925 36.65Q22.8 35.75 24 35.75Q25.25 35.75 26.1 36.65Q26.95 37.55 26.95 38.75Q26.95 39.95 26.1 40.825Q25.25 41.7 24.05 41.7ZM24.05 26.95Q22.8 26.95 21.925 26.075Q21.05 25.2 21.05 24Q21.05 22.75 21.925 21.9Q22.8 21.05 24 21.05Q25.25 21.05 26.1 21.9Q26.95 22.75 26.95 23.95Q26.95 25.2 26.1 26.075Q25.25 26.95 24.05 26.95ZM24.05 12.25Q22.8 12.25 21.925 11.375Q21.05 10.5 21.05 9.25Q21.05 8 21.925 7.125Q22.8 6.25 24 6.25Q25.25 6.25 26.1 7.125Q26.95 8 26.95 9.25Q26.95 10.5 26.1 11.375Q25.25 12.25 24.05 12.25Z" />
    </svg>
  );
}

MoreDots.defaultProps = defaultProps;

export default MoreDots;
