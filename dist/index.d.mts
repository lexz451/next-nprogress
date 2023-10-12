import { LinkProps as LinkProps$1 } from 'next/link';
import React from 'react';
import { NProgressOptions } from 'nprogress';
import * as next_dist_shared_lib_app_router_context_shared_runtime from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';

type LinkProps = LinkProps$1 & {
    children: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;
declare function Link(props: LinkProps): React.JSX.Element;

type ProgressBarProps = {
    color: string;
    height: string;
    options: Partial<NProgressOptions>;
    delay: number;
};
declare const ProgressBar: React.NamedExoticComponent<ProgressBarProps>;

declare const useRouter: () => {
    push: (href: string, options?: NavigateOptions) => void;
    back: () => void;
    forward(): void;
    refresh(): void;
    replace(href: string, options?: NavigateOptions): void;
    prefetch(href: string, options?: next_dist_shared_lib_app_router_context_shared_runtime.PrefetchOptions): void;
};

export { Link, ProgressBar, useRouter };
