import { LinkProps as NextLinkProps } from 'next/link';
import NextLink from 'next/link';
import React from 'react';
import { shouldTriggerProgressStart } from '../utils/shouldTriggerEventStart';
import nProgress from 'nprogress';

export default function Link(
    props: NextLinkProps & { children: React.ReactNode } & React.RefAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <NextLink {...props} onClick={
            (event) => {
                if (shouldTriggerProgressStart(props.href, event)) nProgress.start();
                if (props.onClick) props.onClick(event);
            }
        } className={props.className}>
            {props.children}
        </NextLink>
    )
};