import React, {FC} from 'react';

import {Grid, GridProps, Typography, TypographyProps} from '@material-ui/core';
import clsx from 'clsx';

import {StyledProps} from 'shared/models/styles';

import {useStyles} from './styles';

interface Props extends StyledProps {
  title: string | JSX.Element;
  subtitle?: string | JSX.Element;
  label?: string;
  overline?: JSX.Element;
  ctaGroup?: JSX.Element[];
  fadeUp?: boolean;
  align?: "right" | "left" | "center";
  disableGutter?: boolean;
  titleClasses?: string;
  titleVariant?: TypographyProps["variant"];
  subtitleVariant?: TypographyProps["variant"];
  subtitleColor?: TypographyProps["color"];
  labelProps?: TypographyProps;
  titleProps?: TypographyProps;
  subtitleProps?: TypographyProps;
}

const SectionHeader: FC<Props> = (props) => {
  const {
    title,
    titleVariant,
    subtitleVariant,
    subtitle,
    subtitleColor,
    label,
    overline,
    fadeUp,
    align,
    ctaGroup,
    disableGutter,
    titleClasses,
    className,
    labelProps,
    titleProps,
    subtitleProps,
    ...rest
  } = props;

  const classes = useStyles();

  let justifyGrid = "center" as GridProps["justify"];

  if (align === "left") {
    justifyGrid = "flex-start";
  } else if (align === "right") {
    justifyGrid = "flex-end";
  }

  return (
    <Grid
      container
      spacing={2}
      data-aos={fadeUp ? "fade-up" : ""}
      className={clsx(
        classes.root,
        disableGutter ? classes.disableGutter : {},
        className
      )}
      {...rest}
    >
      {overline && (
        <Grid item container justify={justifyGrid} xs={12}>
          {overline}
        </Grid>
      )}
      {label && (
        <Grid item xs={12}>
          <Typography
            variant="overline"
            color="primary"
            align={align || "center"}
            {...labelProps}
          >
            {label}
          </Typography>
        </Grid>
      )}
      <Grid item xs={12}>
        <Typography
          variant={titleVariant}
          align={align || "center"}
          className={clsx(classes.title, titleClasses ? titleClasses : {})}
          color="textPrimary"
          {...titleProps}
        >
          {title}
        </Typography>
      </Grid>
      {subtitle && (
        <Grid item xs={12}>
          <Typography
            variant={subtitleVariant || "h6"}
            align={align || "center"}
            color={subtitleColor || "textSecondary"}
            {...subtitleProps}
          >
            {subtitle}
          </Typography>
        </Grid>
      )}
      {ctaGroup && ctaGroup.length && (
        <Grid item xs={12}>
          <Grid
            container
            justify={justifyGrid}
            alignItems="center"
            wrap="nowrap"
          >
            {ctaGroup.map((item, index) => (
              <div key={index} className={clsx(classes.cta)}>
                {item}
              </div>
            ))}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

SectionHeader.defaultProps = {
  titleVariant: "h4",
  labelProps: {},
  titleProps: {},
  subtitleProps: {},
};

export default SectionHeader;
