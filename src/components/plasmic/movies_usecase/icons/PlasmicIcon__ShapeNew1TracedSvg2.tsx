/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShapeNew1TracedSvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShapeNew1TracedSvg2Icon(props: ShapeNew1TracedSvg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 710 182"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M0 70.85v70.85l5.794 5.039C26.246 164.528 48.187 174.406 80 180.147c11.506 2.076 57.008 1.796 73-.45 16.256-2.283 39.188-6.963 55.5-11.327 7.15-1.913 16.375-4.383 20.5-5.489 14.591-3.912 58.008-18.922 97.732-33.789 60.664-22.703 78.83-28.249 93.268-28.475 17.178-.268 20.561 8.804 11.604 31.112-1.923 4.791-3.409 8.788-3.301 8.882.108.095 63.422-31.479 140.697-70.164L709.5.11 354.75.055 0 0v70.85z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShapeNew1TracedSvg2Icon;
/* prettier-ignore-end */
