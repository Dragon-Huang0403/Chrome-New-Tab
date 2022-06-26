import React, { useRef, ReactElement, useState } from 'react';
import Resizer from './Resizer';
import Dragger from './Dragger';
import type { GridItemPosition, DraggerData } from '../types/GridLayoutTypes';
import { getBoundPosition } from './utils/positionFn';
import { createCSSTransform } from './utils/other';

type GridItemProp = {
  position: GridItemPosition;
  children: ReactElement;
  onPositionChange: (newPosition: GridItemPosition, id: string) => void;
  bound: HTMLDivElement;
  gridUnit: number;
};

function GridItem({
  children,
  position,
  onPositionChange,
  bound,
  gridUnit,
}: GridItemProp) {
  const [isResizing, setIsResizing] = useState(false);
  const nodeRef = useRef<HTMLElement>(null);
  const { x, y, w, h } = position;
  const id = children.key as string;
  const style = createCSSTransform(x, y);
  const onDrag = (draggerData: DraggerData) => {
    const { deltaX, deltaY } = draggerData;
    let newX = x + deltaX;
    let newY = y + deltaY;
    [newX, newY] = getBoundPosition(nodeRef.current!, bound, newX, newY);
    const newPosition = { ...position, x: newX, y: newY };
    onPositionChange(newPosition, id);
  };
  const onResize = (newPosition: GridItemPosition) => {
    onPositionChange(newPosition, id);
  };
  const onResizingStart = () => {
    setIsResizing(true);
  };
  const onResizingEnd = () => {
    setIsResizing(false);
  };
  return (
    <Dragger onDrag={onDrag} gridUnit={gridUnit} disable={isResizing}>
      <Resizer
        onResize={onResize}
        position={position}
        onResizingStart={onResizingStart}
        onResizingEnd={onResizingEnd}
      >
        {React.cloneElement(React.Children.only(children), {
          ref: nodeRef,
          style: {
            ...children.props.style,
            ...style,
            width: `${w}px`,
            height: `${h}px`,
          },
        })}
      </Resizer>
    </Dragger>
  );
}

export default GridItem;
