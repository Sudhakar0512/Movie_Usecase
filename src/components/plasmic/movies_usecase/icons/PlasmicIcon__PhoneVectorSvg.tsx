/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhoneVectorSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhoneVectorSvgIcon(props: PhoneVectorSvgIconProps) {
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
          "M24.575 17.694l-5.468-2.344a1.171 1.171 0 00-1.367.337l-2.422 2.959a18.099 18.099 0 01-8.652-8.652l2.959-2.422a1.17 1.17 0 00.337-1.367L7.618.736A1.18 1.18 0 006.275.057L1.197 1.23a1.172 1.172 0 00-.908 1.142c0 12.525 10.151 22.657 22.656 22.657a1.172 1.172 0 001.143-.909l1.171-5.078a1.186 1.186 0 00-.684-1.347z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhoneVectorSvgIcon;
/* prettier-ignore-end */
