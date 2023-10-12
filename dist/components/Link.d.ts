import { LinkProps as NextLinkProps } from 'next/link';
import React from 'react';
export default function Link(props: NextLinkProps & {
    children: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>): React.JSX.Element;
