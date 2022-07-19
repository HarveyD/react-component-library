import styled, { css } from 'styled-components/macro';

import * as breakpoints from '../constants/mediaQueries.js';
import * as colors from '../constants/colorConstants.js'

interface StatsPaneStylesProps {
  $smallPane?: boolean;
  $isWidgetMoodPositive?:boolean;
  $displayMood?:boolean;
  $whiteBackground?:boolean;
}


export const StatsPaneWrapper = styled.div `
  display: block;
  align-self: center;

  @media screen and (max-width: ${breakpoints.maxTablet}) and (orientation: portrait),
    screen and (max-width: ${breakpoints.maxMobile}) {
    display: flex;
    overflow: visible;
    height: 100%;
    width: 100%;
  }
  @media screen and (max-width: ${breakpoints.maxMobile}) {
    display: block;
  }
`;

// export const StatsPaneGeneral = css``;

export const StatsPane = styled.div <StatsPaneStylesProps>`
  border-radius: 4px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  place-content: center;
  align-self: center;
  width: 140px;
  display: flex;
  grid-area: stats-pane;
  flex-shrink: 0;
  font-family: Roboto Condensed, sans-serif;
  color: ${colors.black1};
  margin: 20px auto;
  padding: 15px;
  justify-content: space-between;
  height: ${({ $smallPane }) => ($smallPane ? '140px' : '300px')};
  background-color: ${colors.neutralBackground};

  ${({ $displayMood, $isWidgetMoodPositive }) =>
    $displayMood &&
    css`
      background-color: ${$isWidgetMoodPositive ? colors.positiveTrendBackground : colors.negativeTrendBackground};
    `}

    @media screen and (max-width: ${breakpoints.maxTablet}) and (orientation: portrait),
    screen and (max-width: ${breakpoints.maxMobile}) {
    height: 85px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
    margin: 10px auto;
    width: ${({ $smallPane }) => ($smallPane ? '47.5%' : '97%')};
  }

  @media screen and (max-width: ${breakpoints.maxMobile}) {
    width: 96%;
    padding: 10px;
  }


`;

export const OverallRatingLabel = styled.div`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${colors.lightBlack};
  width: 150px;
  margin-bottom: 18px;
  text-align: center;
  @media screen and (min-width: ${breakpoints.minLaptop}) {
    font-size: 16px;
    width: 150px;
  }
`;

export const TotalCustomerRatingLabel = styled(OverallRatingLabel)`
  text-align: center;
`;

export const StarsBlock = styled.div`
  align-self: center;
  & > * {
    width: 16px;

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const RatingStar = styled.img`
  display: inline-block;
`;

export const TotalRatesBlock = styled.div`
  text-transform: uppercase;
  grid-area: total;
  margin-top: auto;
  @media screen and (min-width: ${breakpoints.minLaptop}) {
    margin-bottom: 15px;
  }
`;

export const PaneHeader = styled.div <StatsPaneStylesProps>`
  text-align: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  min-height: ${({ $smallPane }) => ($smallPane ? '35px' : '80px')};
  margin-top: ${({ $smallPane }) => ($smallPane ? '0px' : '10px')};

  @media screen and (max-width: ${breakpoints.maxTablet}) and (orientation: portrait),
    screen and (max-width: ${breakpoints.maxMobile}) {
    font-size: 12px;
    text-align: unset;
    height: auto;
    display: flex;
    place-items: center;
    margin-top: 0px;
    min-height: auto;
  }
`;

export const CurrentDayTitle = styled.div <StatsPaneStylesProps>`
  display: ${({ $smallPane }) => ($smallPane ? 'flex' : 'unset')};
  align-items: ${({ $smallPane }) => ($smallPane ? 'center' : 'unset')};
  justify-content: space-between;
  text-align: left;
  width: 112px;

  @media screen and (max-width: ${breakpoints.maxTablet}) and (orientation: portrait),
    screen and (max-width: ${breakpoints.maxMobile}) {
    width: auto;
  }
`;

export const CurrentDayLabel = styled.div`
  color: ${colors.darkGray14};
  @media screen and (max-width: ${breakpoints.maxTablet}) and (orientation: portrait),
    screen and (max-width: ${breakpoints.maxMobile}) {
    display: none;
  }
`;

export const UpperBlock = styled.div <StatsPaneStylesProps>`
  color: ${({ $isWidgetMoodPositive, $displayMood }) =>
    $displayMood && !$isWidgetMoodPositive ? colors.downwardTrendColor : colors.positiveTrendColor};
`;

export const TrendsBlock = styled.div <StatsPaneStylesProps>`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  height: ${({ $smallPane }) => ($smallPane ? 'auto' : '100px')};

  @media screen and (max-width: ${breakpoints.maxTablet}) and (orientation: portrait),
    screen and (max-width: ${breakpoints.maxMobile}) {
    display: flex;
    margin: 0px 0px;
    padding: 10px 0px;
    flex-direction: row;
    height: auto;
    justify-content: left;
  }
`;

export const FaceIconContainer = styled.div`
  margin: 40px auto 0px auto;
  display: flex;
  place-content: center;

  @media screen and (max-width: ${breakpoints.maxTablet}) and (orientation: portrait),
    screen and (max-width: ${breakpoints.maxMobile}) {
    padding-top: 0px;
    align-self: center;
    margin: 0px;
  }
`;

export const FaceIcon = styled.div`
  color: white;
  display: flex;
  height: 24px;
  width: 24px;
  align-self: center;
  align-items: center;
  background: white;
  border-radius: 50%;
  align-self: self-start;

  @media screen and (max-width: ${breakpoints.maxTablet}) and (orientation: portrait),
    screen and (max-width: ${breakpoints.maxMobile}) {
    padding-top: 0px;
    align-self: center;
    margin: 0px 0px 0px 10px;
  }
`;

export const CenteredPaneNumber = css`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 20px;
  align-items: flex-start;
  display: flex;
`;

export const CurrentDayNumber = styled.div<StatsPaneStylesProps>`
  ${CenteredPaneNumber}
  margin:15px;
  /* color: ${({ $isWidgetMoodPositive, $displayMood }) =>
    $displayMood && !$isWidgetMoodPositive ? colors.downwardTrendColor : colors.positiveTrendColor}; */
  svg {
    height: auto;
    display: flex;
    height: 20px;
    align-self: center;
    margin: 0px 5px 0px 0px;
    stroke: ${({ $isWidgetMoodPositive, $displayMood }) =>
      $displayMood && !$isWidgetMoodPositive ? colors.downwardTrendColor : colors.positiveTrendColor};
  }
  @media screen and (max-width: ${breakpoints.maxTablet}) and (orientation: portrait),
    screen and (max-width: ${breakpoints.maxMobile}) {
    margin: auto 0px;
  }
`;

export const BottomBlock = styled.div<StatsPaneStylesProps>`
  font-weight: normal;
  display: ${({ $smallPane }) => ($smallPane ? 'flex' : 'block')};
  align-items: flex-end;
  width: ${({ $whiteBackground }) => ($whiteBackground ? '100px' : 'auto')};
  text-align: center;
  background: ${({ $whiteBackground }) => ($whiteBackground ? colors.white50 : 'unset')};
  border-radius: 4px;
  font-family: 'Roboto';
  padding: ${({ $whiteBackground, $smallPane }) => ($whiteBackground && $smallPane ? '2px' : '10px 5px')};
  color: ${({ $isWidgetMoodPositive, $displayMood }) =>
    $displayMood && !$isWidgetMoodPositive ? colors.downwardTrendColor : colors.positiveTrendColor};
  place-content: center;

  @media screen and (max-width: ${breakpoints.maxTablet}) and (orientation: portrait),
    screen and (max-width: ${breakpoints.maxMobile}) {
    display: block;
  }
`;

export const PreviousLabel = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 140%;
`;
export const PreviousNumber = styled.div<StatsPaneStylesProps>`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  font: ${({ $smallPane }) => ($smallPane ? '400 11px/140% Roboto;' : '500 16px/19px Roboto;')};
  margin-top: 3px;
  margin:-left:3px;

  @media screen and (max-width: ${breakpoints.maxTablet}) and (orientation: portrait),
    screen and (max-width: ${breakpoints.maxMobile}) {
    font: 500 16px/19px Roboto;
  }
`;
