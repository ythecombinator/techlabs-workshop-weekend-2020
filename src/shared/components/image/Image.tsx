import React, {FC} from 'react';

import clsx from 'clsx';

import {StyledProps} from 'shared/models/styles';

import {useStyles} from './styles';

interface Props extends StyledProps {
  src: string;
  srcSet?: string;
  alt?: string;
}

const Image: FC<Props> = (props) => {
  const { src, srcSet, alt, className, ...otherProps } = props;

  const classes = useStyles();

  return (
    <img
      className={clsx(classes.root, className)}
      alt={alt}
      src={src}
      srcSet={srcSet}
      {...otherProps}
    />
  );
};

Image.defaultProps = {
  alt: "...",
};

export default Image;
