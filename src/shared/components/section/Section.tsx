import React, {FC} from 'react';

import clsx from 'clsx';

import {StyledProps} from 'shared/models/styles';

import {useStyles} from './styles';

interface Props extends StyledProps {
  narrow?: boolean;
  fullWidth?: boolean;
  disablePadding?: boolean;
}

const Section: FC<Props> = (props) => {
  const {
    children,
    fullWidth,
    narrow,
    disablePadding,
    className,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <section
      className={clsx(
        classes.root,
        fullWidth ? classes.fullWidth : {},
        narrow ? classes.narrow : {},
        disablePadding ? classes.disablePadding : {},
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Section;
