import React, { FC, Component } from 'react';

import { StatsPaneProps } from './StatsPane.types';
import styled from 'styled-components';
import * as S from './StatsPane.styles';

const StyledText = styled.div<StatsPaneProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;

  color: black;
`;

const StatsPane: FC<StatsPaneProps> = ({
  title,
  whiteBackground,
  smallPane,
  currentNumber,
  previousNumber,
  previousLabel,
  currentDirection,
  ...props
}) => {
  return (
    <S.StatsPaneWrapper>
      <S.StatsPane $smallPane={smallPane}>
        <S.UpperBlock>
          <S.PaneHeader $smallPane={smallPane}>
            <S.CurrentDayTitle >{title}</S.CurrentDayTitle>
          </S.PaneHeader>
          <S.TrendsBlock $smallPane={smallPane}>
            <S.CurrentDayNumber> {currentNumber}</S.CurrentDayNumber>
          </S.TrendsBlock>{' '}
        </S.UpperBlock>

        <S.BottomBlock
          $whiteBackground={whiteBackground}
          $smallPane={smallPane}
        >
          <S.StarsBlock>stars/number</S.StarsBlock>
        </S.BottomBlock>
      </S.StatsPane>
    </S.StatsPaneWrapper>
  );
};

export default StatsPane;
