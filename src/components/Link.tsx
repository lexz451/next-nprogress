'use client';
import { LinkProps as NextLinkProps } from 'next/link';
import NextLink from 'next/link';
import React, { Suspense } from 'react';
import { shouldTriggerProgressStart } from '../utils/shouldTriggerEventStart';
import nProgress from 'nprogress';

type LinkProps = NextLinkProps & { children: React.ReactNode } & React.RefAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;

function LinkFallback(props: LinkProps) {
    return (
        <NextLink {...props}>
            {props.children}
        </NextLink>
    )
}

export default function Link(props: LinkProps) {
    return (
        <Suspense fallback={
            <LinkFallback {...props} />
        }>
            <NextLink {...props} onClick={
                (event) => {
                    if (shouldTriggerProgressStart(props.href, event)) nProgress.start();
                    if (props.onClick) props.onClick(event);
                }
            }>
                {props.children}
            </NextLink>
        </Suspense>
    )
};