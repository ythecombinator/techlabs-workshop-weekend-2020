import React, {FC} from 'react';

import {colors, Typography} from '@material-ui/core';
import clsx from 'clsx';

import {StyledProps} from 'shared/models/styles';

import {useStyles} from './styles';

interface Props extends StyledProps {
  color?: string;
  shape?: "square" | "rounded";
  variant?: "contained" | "outlined";
  style?: any;
}

const Label: FC<Props> = (props) => {
  const { className, variant, color, shape, children, style, ...rest } = props;

  const classes = useStyles();

  const rootClassName = clsx(
    {
      [classes.root]: true,
      [classes.rounded]: shape === "rounded",
    },
    className
  );

  const finalStyle = { ...style };

  if (variant === "contained") {
    finalStyle.backgroundColor = color;
    finalStyle.color = "#FFF";
  } else {
    finalStyle.border = `1px solid ${color}`;
    finalStyle.color = color;
  }

  return (
    <Typography
      {...rest}
      className={rootClassName}
      style={finalStyle}
      variant="overline"
    >
      {children}
    </Typography>
  );
};

Label.defaultProps = {
  style: {},
  color: colors.grey[600],
  variant: "contained",
  shape: "square",
};

export default Label;
