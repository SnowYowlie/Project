import * as React from "react";
import { SVGProps } from "react";
const SvgTime = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1.5rem" height="1.5rem" fill="#FFF" viewBox="0 0 16 16" {...props}>
    <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
    <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z" />
  </svg>
);
export default SvgTime;
