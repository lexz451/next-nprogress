import { __assign } from 'tslib';
import NextLink from 'next/link';
import React, { memo, useEffect } from 'react';
import nProgress from 'nprogress';
import { usePathname, useSearchParams, useRouter as useRouter$1 } from 'next/navigation';

function isModifiedEvent(event) {
    var eventTarget = event.currentTarget;
    var target = eventTarget.getAttribute("target");
    return ((target && target !== "_self") ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey || // triggers resource download
        (event.nativeEvent && event.nativeEvent.button === 1));
}
var shouldTriggerProgressStart = function (href, event) {
    var current = window.location;
    var target = new URL(href.toString(), window.location.href);
    if (event && isModifiedEvent(event))
        return false;
    if (current.origin !== target.origin)
        return false;
    if (current.pathname === target.pathname && current.search === target.search)
        return false;
    return true;
};

function Link(props) {
    return (React.createElement(NextLink, __assign({}, props, { onClick: function (event) {
            if (shouldTriggerProgressStart(props.href, event))
                nProgress.start();
            if (props.onClick)
                props.onClick(event);
        }, className: props.className }), props.children));
}

var ProgressBar = memo(function ProgressBar(props) {
    if (props === void 0) { props = {
        color: '#29D',
        height: '2px',
        options: nProgress.settings,
        delay: 0,
    }; }
    nProgress.configure(props.options);
    var pathName = usePathname();
    var searchParams = useSearchParams();
    useEffect(function () {
        nProgress.done();
    }, [pathName, searchParams]);
    var color = props.color, height = props.height;
    return (React.createElement("style", null, "\n                      #nprogress {\n                        pointer-events: none;\n                      }\n            \n                      #nprogress .bar {\n                        background: ".concat(color, ";\n            \n                        position: fixed;\n                        z-index: 1031;\n                        top: 0;\n                        left: 0;\n            \n                        width: 100%;\n                        height: ").concat(height, ";\n                      }\n            \n                      /* Fancy blur effect */\n                      #nprogress .peg {\n                        display: block;\n                        position: absolute;\n                        right: 0px;\n                        width: 100px;\n                        height: 100%;\n                        box-shadow: 0 0 10px ").concat(color, ", 0 0 5px ").concat(color, ";\n                        opacity: 1.0;\n            \n                        -webkit-transform: rotate(3deg) translate(0px, -4px);\n                            -ms-transform: rotate(3deg) translate(0px, -4px);\n                                transform: rotate(3deg) translate(0px, -4px);\n                      }\n            \n                      /* Remove these to get rid of the spinner */\n                      #nprogress .spinner {\n                        display: block;\n                        position: fixed;\n                        z-index: 1031;\n                        top: 15px;\n                        right: 15px;\n                      }\n            \n                      #nprogress .spinner-icon {\n                        width: 18px;\n                        height: 18px;\n                        box-sizing: border-box;\n            \n                        border: solid 2px transparent;\n                        border-top-color: ").concat(color, ";\n                        border-left-color: ").concat(color, ";\n                        border-radius: 50%;\n            \n                        -webkit-animation: nprogress-spinner 400ms linear infinite;\n                                animation: nprogress-spinner 400ms linear infinite;\n                      }\n            \n                      .nprogress-custom-parent {\n                        overflow: hidden;\n                        position: relative;\n                      }\n            \n                      .nprogress-custom-parent #nprogress .spinner,\n                      .nprogress-custom-parent #nprogress .bar {\n                        position: absolute;\n                      }\n            \n                      @-webkit-keyframes nprogress-spinner {\n                        0%   { -webkit-transform: rotate(0deg); }\n                        100% { -webkit-transform: rotate(360deg); }\n                      }\n                      @keyframes nprogress-spinner {\n                        0%   { transform: rotate(0deg); }\n                        100% { transform: rotate(360deg); }\n                      }\n                ")));
}, function () { return true; });
ProgressBar.displayName = "ProgressBar";

var useRouter = function () {
    var router = useRouter$1();
    var push = function (href, options) {
        if (shouldTriggerProgressStart(href)) {
            nProgress.start();
        }
        router.push(href, options);
    };
    var back = function () {
        nProgress.start();
        return router.back();
    };
    return __assign(__assign({}, router), { push: push, back: back });
};

export { Link, ProgressBar, useRouter };
//# sourceMappingURL=index.mjs.map
