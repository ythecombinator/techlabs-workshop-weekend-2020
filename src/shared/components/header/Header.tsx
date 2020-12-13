import React, {FC} from 'react';

import {Toolbar} from '@material-ui/core';

import Image from 'shared/components/image';
import {StyledProps} from 'shared/models/styles';

import {useStyles} from './styles';

interface Props extends StyledProps {}

const Header: FC<Props> = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <div className={classes.logoContainer}>
        <a href="/" title="TechLabs">
          <Image
            className={classes.logoImage}
            src="/images/logo.svg"
            alt="TechLabs"
          />
        </a>
      </div>
    </Toolbar>
  );
};

export default Header;
