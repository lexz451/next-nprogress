import React from "react";
import { NProgressOptions } from "nprogress";
type ProgressBarProps = {
    color: string;
    height: string;
    options: Partial<NProgressOptions>;
    delay: number;
};
declare const ProgressBar: React.MemoExoticComponent<(props?: ProgressBarProps) => JSX.Element>;
export default ProgressBar;
