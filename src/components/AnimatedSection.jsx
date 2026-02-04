import React from "react";
import { useScrollAnimation, useStaggerAnimation } from "../hooks/useScrollAnimation";

export const AnimatedSection = ({
  children,
  animation = "fadeUp",
  duration = 0.8,
  delay = 0,
  start = "top 85%",
  className = "",
  style = {},
  as: Component = "div",
  ...props
}) => {
  const ref = useScrollAnimation({
    preset: animation,
    duration,
    delay,
    start,
  });

  return (
    <Component ref={ref} className={className} style={style} {...props}>
      {children}
    </Component>
  );
};


export const AnimatedStagger = ({
  children,
  childSelector = "> *",
  animation = "fadeUp",
  duration = 0.8,
  stagger = 0.1,
  delay = 0,
  start = "top 85%",
  className = "",
  style = {},
  as: Component = "div",
  ...props
}) => {
  const ref = useStaggerAnimation(childSelector, {
    preset: animation,
    duration,
    stagger,
    delay,
    start,
  });

  return (
    <Component ref={ref} className={className} style={style} {...props}>
      {children}
    </Component>
  );
};


export const AnimatedItem = ({
  children,
  className = "",
  style = {},
  as: Component = "div",
  ...props
}) => {
  return (
    <Component className={`animated-item ${className}`} style={style} {...props}>
      {children}
    </Component>
  );
};

export default AnimatedSection;
