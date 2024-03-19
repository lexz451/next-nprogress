"use client"
import l from"next/link";import m,{Suspense as h}from"react";import a from"nprogress";var g=r=>{a.configure({...a.settings,...r})},c=r=>{let t=r.currentTarget.getAttribute("target");return t&&t!=="_self"||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.nativeEvent&&r.nativeEvent.button===1},p=r=>{let e=window.location,t=new URL(r.toString(),window.location.href);return!(e.origin!==t.origin||e.pathname!==t.pathname&&e.search!==t.search)},n=()=>{a.start()},s=()=>{a.done(),document.documentElement.classList.remove("nprogress-busy")};function x(r){return m.createElement(l,{...r},r.children)}function f(r){return m.createElement(h,{fallback:m.createElement(x,{...r})},m.createElement(l,{...r,onClick:e=>{c(e)||(n(),r.onClick&&r.onClick(e),p(r.href)&&s())}},r.children))}import b from"react";import{usePathname as P,useSearchParams as k}from"next/navigation";import{memo as L,useEffect as N}from"react";var u=L(function(e={color:"#29D",height:"2px",options:{}}){g(e.options);let t=P(),i=k();N(()=>{s()},[t,i]);let{color:o,height:d}=e;return b.createElement("style",null,`
                      #nprogress {
                        pointer-events: none;
                      }
            
                      #nprogress .bar {
                        background: ${o};
            
                        position: fixed;
                        z-index: 1031;
                        top: 0;
                        left: 0;
            
                        width: 100%;
                        height: ${d};
                      }
            
                      /* Fancy blur effect */
                      #nprogress .peg {
                        display: block;
                        position: absolute;
                        right: 0px;
                        width: 100px;
                        height: 100%;
                        box-shadow: 0 0 10px ${o}, 0 0 5px ${o};
                        opacity: 1.0;
            
                        -webkit-transform: rotate(3deg) translate(0px, -4px);
                            -ms-transform: rotate(3deg) translate(0px, -4px);
                                transform: rotate(3deg) translate(0px, -4px);
                      }
            
                      /* Remove these to get rid of the spinner */
                      #nprogress .spinner {
                        display: block;
                        position: fixed;
                        z-index: 1031;
                        top: 15px;
                        right: 15px;
                      }
            
                      #nprogress .spinner-icon {
                        width: 18px;
                        height: 18px;
                        box-sizing: border-box;
            
                        border: solid 2px transparent;
                        border-top-color: ${o};
                        border-left-color: ${o};
                        border-radius: 50%;
            
                        -webkit-animation: nprogress-spinner 400ms linear infinite;
                                animation: nprogress-spinner 400ms linear infinite;
                      }
            
                      .nprogress-custom-parent {
                        overflow: hidden;
                        position: relative;
                      }
            
                      .nprogress-custom-parent #nprogress .spinner,
                      .nprogress-custom-parent #nprogress .bar {
                        position: absolute;
                      }
            
                      @-webkit-keyframes nprogress-spinner {
                        0%   { -webkit-transform: rotate(0deg); }
                        100% { -webkit-transform: rotate(360deg); }
                      }
                      @keyframes nprogress-spinner {
                        0%   { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                      }
                `)},()=>!0);u.displayName="ProgressBar";var y=u;import{useRouter as w}from"next/navigation";var v=()=>{let r=w();return{...r,push:(i,o)=>{n(),r.push(i,o),p(i)&&s()},back:()=>(n(),r.back())}},E=v;export{f as Link,y as ProgressBar,E as useRouter};
//# sourceMappingURL=index.mjs.map