// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 75"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.94 74.06a1.5 1.5 0 002.12 0l9.547-9.545a1.5 1.5 0 10-2.122-2.122L12 70.88l-8.485-8.486a1.5 1.5 0 10-2.122 2.122l9.546 9.546zM10.5 0v73h3V0h-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
