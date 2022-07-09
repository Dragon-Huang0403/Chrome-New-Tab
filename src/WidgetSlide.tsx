import React from 'react';
import styled from 'styled-components';
import type { WidgetType } from './types/WidgetTypes';
import { widgetDemo } from './Widget/defaultConfig';
import renderWidget from './Widget/renderWidget';

const Wrapper = styled.div`
  height: 65vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  cursor: pointer;
  gap: 1rem;
`;

const WidgetContainer = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;

const WidgetName = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
`;

interface WidgetSlideProps {
  widgetType: WidgetType;
  addWidget: () => void;
}

function WidgetSlide({ widgetType, addWidget }: WidgetSlideProps) {
  const onClickCapture = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addWidget();
  };
  const widget = widgetDemo[widgetType];
  return (
    <Wrapper onClickCapture={onClickCapture}>
      <WidgetContainer>{renderWidget(widget)}</WidgetContainer>
      <WidgetName>{widget.text}</WidgetName>
    </Wrapper>
  );
}

export default WidgetSlide;
