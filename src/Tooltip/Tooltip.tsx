import React, { FC } from 'react';
import { CustomTooltipTextStyled, CustomTooltipTitleStyled, TriangleStyled ,CustomTooltipStyled} from './Tooltip.styles';
import { TooltipProps } from './Tooltip.types';

const Tooltip: FC<TooltipProps> = ({
  title,
  text,
  visible,
  theme,
  alignment,
  ...props
}) => {
  if (!visible) {
    return null;
  }

  return (
    <div>
      <CustomTooltipStyled {...props}>
        <CustomTooltipTitleStyled>{title}</CustomTooltipTitleStyled>
        <CustomTooltipTextStyled>{text}</CustomTooltipTextStyled>
        <TriangleStyled {...props} alignment={alignment} />
      </CustomTooltipStyled  >
    </div>
  );
};

export default Tooltip;
