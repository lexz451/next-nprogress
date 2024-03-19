import { UrlObject } from "url";
import nProgress from "nprogress";

export const configureProgress = (options: Partial<nProgress.NProgressOptions>) => {
    nProgress.configure({
        ...nProgress.settings,
        ...options
    });
}

export const isModifiedEvent = (event: React.MouseEvent): boolean => {
    const eventTarget = event.currentTarget as HTMLAnchorElement | SVGAElement;
    const target = eventTarget.getAttribute("target");
    return (
      (target && target !== "_self") ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey || // triggers resource download
      (event.nativeEvent && event.nativeEvent.button === 1)
    );
}

export const isSameUrlNavigation = (href: string | UrlObject) => {
    const current = window.location;
    const target = new URL(href.toString(), window.location.href);
    if (current.origin !== target.origin) return false;
    if (current.pathname !== target.pathname && current.search !== target.search) return false;
    return true;
}

export const startProgress = () => {
    nProgress.start();
}

export const completeProgress = () => {
    nProgress.done();
    // remove 'nprogress-busy' class from html tag
    document.documentElement.classList.remove('nprogress-busy');
}