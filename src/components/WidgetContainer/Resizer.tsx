import React from 'react';
import styled, { css } from 'styled-components';

interface IResizerStyle {
  width: string;
  height: string;
  cursor: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

const resizerStyles: { [direction: string]: IResizerStyle } = {
  top: {
    height: '10px',
    width: '100%',
    top: '-5px',
    left: '0px',
    cursor: 'n-resize',
  },
  bottom: {
    height: '10px',
    width: '100%',
    bottom: '-5px',
    left: '0px',
    cursor: 's-resize',
  },
  left: {
    height: '100%',
    width: '10px',
    left: '-5px',
    top: '0px',
    cursor: 'e-resize',
  },
  right: {
    height: '100%',
    width: '10px',
    right: '-5px',
    top: '0px',
    cursor: 'w-resize',
  },
  topLeft: {
    width: '20px',
    height: '20px',
    top: '-10px',
    left: '-10px',
    cursor: 'nw-resize',
  },
  topRight: {
    width: '20px',
    height: '20px',
    top: '-10px',
    right: '-10px',
    cursor: 'ne-resize',
  },
  bottomLeft: {
    width: '20px',
    height: '20px',
    bottom: '-10px',
    left: '-10px',
    cursor: 'sw-resize',
  },
  bottomRight: {
    width: '20px',
    height: '20px',
    bottom: '-10px',
    right: '-10px',
    cursor: 'se-resize',
  },
} as const;

export type TDirection =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight';

const ResizerWrapper = styled.div<IResizerStyle>`
  position: absolute;
  user-select: none;
  z-index: 100;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: ${({ cursor }) => cursor};
  ${({ top }) =>
    top &&
    css`
      top: ${top};
    `}

  ${({ bottom }) =>
    bottom &&
    css`
      bottom: ${bottom};
    `}

  ${({ left }) =>
    left &&
    css`
      left: ${left};
    `}

  ${({ right }) =>
    right &&
    css`
      right: ${right};
    `}
`;

interface IResizerProps {
  direction: TDirection;
  onResizeStart: (
    e: React.MouseEvent<HTMLDivElement>,
    direction: TDirection,
  ) => void;
}

function Resizer(props: IResizerProps) {
  const { direction, onResizeStart } = props;
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    onResizeStart(e, direction);
  };
  const { width, height, top, bottom, left, right, cursor } =
    resizerStyles[direction];
  return (
    <ResizerWrapper
      width={width}
      height={height}
      cursor={cursor}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      onMouseDown={onMouseDown}
    />
  );
}

export default Resizer;
