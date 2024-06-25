'use client';
import { LinkProps as NextLinkProps } from 'next/link';
import NextLink from 'next/link';
import React, { Suspense } from 'react';
import { completeProgress, isModifiedEvent, isSameUrlNavigation, startProgress } from '../utils/nprogress';

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
                    if (event.currentTarget.href.startsWith("#")) return;
                    if (isModifiedEvent(event)) return;
                    startProgress();
                    if (props.onClick) props.onClick(event);
                    if (isSameUrlNavigation(props.href)) {
                        completeProgress();
                    }
                }
            }>
                {props.children}
            </NextLink>
        </Suspense>
    )
};
