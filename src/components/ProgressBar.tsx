'use client';
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { memo, useEffect } from "react";
import { completeProgress, configureProgress } from "../utils/nprogress";
import { NProgressOptions } from "nprogress";

type ProgressBarProps = {
  color?: string | undefined;
  height?: string | undefined,
  options?: Partial<NProgressOptions> | undefined
}
const ProgressBar = memo(
  function ProgressBar(
    {
      color = "hsl(var(--primary, 202, 73%, 50%))",
      height = "2px",
      options = {}
    }: ProgressBarProps
  ): JSX.Element {

    configureProgress(options);

    const pathName = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
      completeProgress();
    }, [pathName, searchParams]);

    return (
      <style>
          {`
          #nprogress {
              pointer-events: none;
          }
          
          #nprogress .bar {
              background: ${color};
              position: fixed;
              z-index: 1031;
              top: 0;
              left: 0;
              width: 100%;
              height: ${height};
          }
          
          /* Fancy blur effect */
          #nprogress .peg {
              display: block;
              position: absolute;
              right: 0px;
              width: 100px;
              height: 100%;
              box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
              opacity: 1.0;
          
              -webkit-transform: rotate(3deg) translate(0px, -4px);
              -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
          }
          
          /* Remove these to get rid of the spinner */
          #nprogress .spinner {
              display: block;
              position: fixed;
              z-index: 1031;
              top: 15px;
              right: 15px;
          }
          
          #nprogress .spinner-icon {
              width: 18px;
              height: 18px;
              box-sizing: border-box;
          
              border: solid 2px transparent;
          
              border-top-color: ${color};
              border-left-color: ${color};
              border-radius: 50%;
          
              -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
          }
          
          .nprogress-custom-parent {
              overflow: hidden;
              position: relative;
          }
          
          .nprogress-custom-parent #nprogress .spinner,
          .nprogress-custom-parent #nprogress .bar {
              position: absolute;
          }
          
          @-webkit-keyframes nprogress-spinner {
              0% {
                  -webkit-transform: rotate(0deg);
              }
          
              100% {
                  -webkit-transform: rotate(360deg);
              }
          }
          
          @keyframes nprogress-spinner {
              0% {
                  transform: rotate(0deg);
              }
          
              100% {
                  transform: rotate(360deg);
              }
          }
         `}
        </style>
    );
  },
  () => true
);

ProgressBar.displayName = "ProgressBar";

export default ProgressBar;