import { UrlObject } from "url";

function isModifiedEvent(event: React.MouseEvent): boolean {
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

export const shouldTriggerProgressStart = (
    href: string | UrlObject,
    event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>
): boolean => {
    const current = window.location;
    const target = new URL(href.toString(), window.location.href);
    if (event && isModifiedEvent(event)) return false;
    if (current.origin !== target.origin) return false;
    if (current.pathname === target.pathname && current.search === target.search) return false;
    return true;
};