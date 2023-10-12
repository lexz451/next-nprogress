import { LinkProps as NextLinkProps } from 'next/link';
import React from 'react';
type LinkProps = NextLinkProps & {
    children: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;
export default function Link(props: LinkProps): React.JSX.Element;
export {};
