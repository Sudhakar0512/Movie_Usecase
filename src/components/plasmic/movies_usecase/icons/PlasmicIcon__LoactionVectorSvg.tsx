/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LoactionVectorSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LoactionVectorSvgIcon(props: LoactionVectorSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 26"}
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
        d={
          "M22.463.32L2.161 9.69C-.18 10.783.6 14.22 3.098 14.22h8.59v8.59c0 2.498 3.435 3.28 4.529.936l9.37-20.301c.78-1.875-1.25-3.905-3.124-3.124z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LoactionVectorSvgIcon;
/* prettier-ignore-end */
