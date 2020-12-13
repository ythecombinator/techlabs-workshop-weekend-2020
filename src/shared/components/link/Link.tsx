import React, {FC} from 'react';

import {IconButtonProps, Typography, TypographyProps} from '@material-ui/core';
import clsx from 'clsx';

import {StyledProps} from 'shared/models/styles';

import {useStyles} from './styles';

interface Props extends StyledProps {
  title: string;
  href: string;
  variant?: TypographyProps["variant"];
  typographyProps?: TypographyProps;
  iconProps?: IconButtonProps;
}

const Link: FC<Props> = (props) => {
  const {
    variant,
    title,
    href,
    className,
    iconProps,
    typographyProps,
    ...rest
  } = props;

  const classes = useStyles();

  const children = (
    <>
      <Typography
        component="span"
        className={classes.title}
        variant={variant}
        {...typographyProps}
      >
        {title}
      </Typography>
    </>
  );

  return (
    <a href={href} className={clsx(classes.root, className)} {...rest}>
      {children}
    </a>
  );
};

export default Link;
