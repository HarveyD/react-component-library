import styled, { css } from 'styled-components/macro';
import { TooltipProps } from './Tooltip.types';

export const CustomTooltipStyled = styled.div<TooltipProps>`
  position: absolute;

  left: 35px;
  top: 35px;
  max-width: 400px;
  height: auto;
  border: 1px solid black;
  background: black;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  padding: 10px;
  text-align: left;
  z-index: 100;
  color: white;
`;

export const CustomTooltipTitleStyled = styled.div`
  padding-bottom: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  color: white;
`;

export const CustomTooltipTextStyled = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  color: white;
`;

export const TriangleStyled = styled.span<TooltipProps>`
  display: block;
  height: 15px;
  width: 15px;
  background: black;
  border: inherit;
  position: absolute;
  clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
  transform: rotate(135deg);
  border-radius: 0 0 0 0.25em;
  text-align: left;

  ${props => {
    if (props.alignment==='top') {
      return `
      top: -9px;
     left: calc(50% - 20px);
    `
    }  if (props.alignment==='bottom')  {
      return `
      top: calc(100% - 10px);
      transform: rotate(315deg);
      left: calc(50% - 20px);
    `
    }
    if (props.alignment==='right')  {
      return `
      right: -9px;
      top: 20px;
      transform: rotate(225deg);
    `
    }  else {
      return `
      transform: rotate(45deg);
      left: -9px;
      top: 20px;
    `
    }
  }}

`;
