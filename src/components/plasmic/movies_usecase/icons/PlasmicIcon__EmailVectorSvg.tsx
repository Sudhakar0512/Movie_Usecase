/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EmailVectorSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EmailVectorSvgIcon(props: EmailVectorSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 20"}
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
          "M25.284 6.465a.294.294 0 01.474.229v9.985a2.344 2.344 0 01-2.344 2.344H3.102A2.344 2.344 0 01.758 16.68V6.7c0-.244.278-.38.474-.23 1.093.85 2.544 1.93 7.524 5.547 1.03.752 2.769 2.334 4.502 2.325 1.743.014 3.516-1.602 4.507-2.325 4.98-3.618 6.426-4.702 7.52-5.551zm-12.026 6.308c1.133.02 2.764-1.426 3.584-2.021 6.48-4.703 6.973-5.113 8.467-6.285.283-.22.45-.561.45-.922v-.928A2.344 2.344 0 0023.413.273H3.102A2.344 2.344 0 00.758 2.617v.928c0 .36.166.698.45.922C2.7 5.634 3.194 6.05 9.673 10.752c.82.595 2.451 2.04 3.584 2.021z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EmailVectorSvgIcon;
/* prettier-ignore-end */
