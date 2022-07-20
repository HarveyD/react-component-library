import React, { FC } from 'react';
import styled from 'styled-components';

import { ButtonProps } from './Button.types';
const StyledButton = styled.button<ButtonProps>`
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
  color: ${(props) => (props.primary ? '#FFFFFF' : '#4A90E2')};
  background-color: ${(props) => (props.primary ? '#4A90E2' : '#F2F6FD')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    //   background-color: ${(props) =>
      props.primary ? '#55bd90' : '#6bedb5'};
    background-color: ${(props) => props.theme.color};
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
`;

const Button: FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {

  return (
    <> 
      <StyledButton
        type='button'
        onClick={onClick}
        primary={primary}
        disabled={disabled}
        size={size}
        className="theme-twt"
        {...props}
      >
        {text}
      </StyledButton>

    </>
  );
};

export default Button;
