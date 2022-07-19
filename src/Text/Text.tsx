import React, { FC } from 'react';
import styled from 'styled-components';

import { TextProps } from './Text.types';
const StyledText = styled.div<TextProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${(props) =>
    props.size === 'small'
      ? '7px 25px 8px'
      : props.size === 'medium'
      ? '9px 30px 11px'
      : '14px 30px 16px'};
  // color: red

  // background-color: ${(props) => (props.primary ? '#6bedb5' : '#1b116e')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    //   background-color: ${(props) =>
      props.primary ? '#55bd90' : '#6bedb5'};
    // background-color: ${(props) => props.theme.color};
  }
  &:active {
    border: solid 2px #1b116e;
    padding: ${(props) =>
      props.size === 'small'
        ? '5px 23px 6px'
        : props.size === 'medium'
        ? '7px 28px 9px'
        : '12px 28px 14px'};
  }
  color: black

`;

const Text: FC<TextProps> = ({
  size,
  primary,
  disabled,
  theme,
  
  ...props
}) => {
  return (
    
      <StyledText
        primary={primary}
        disabled={disabled}
        size={size}
        {...props}
      >
        Text Stories
      </StyledText>
  );
};

export default Text;
