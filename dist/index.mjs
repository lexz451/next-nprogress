"use client"
import p from"next/link";import i,{Suspense as u}from"react";function l(r){let t=r.currentTarget.getAttribute("target");return t&&t!=="_self"||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.nativeEvent&&r.nativeEvent.button===1}var s=(r,e)=>{let t=window.location,o=new URL(r.toString(),window.location.href);return!(e&&l(e)||t.origin!==o.origin||t.pathname===o.pathname&&t.search===o.search)};import d from"nprogress";function h(r){return i.createElement(p,{...r},r.children)}function g(r){return i.createElement(u,{fallback:i.createElement(h,{...r})},i.createElement(p,{...r,onClick:e=>{s(r.href,e)&&d.start(),r.onClick&&r.onClick(e)}},r.children))}import b from"react";import{usePathname as x,useSearchParams as k}from"next/navigation";import a from"nprogress";import{memo as P,useEffect as L}from"react";var m=P(function(e={color:"#29D",height:"2px",options:a.settings}){a.configure(e.options);let t=x(),o=k();L(()=>{a.done()},[t,o]);let{color:n,height:f}=e;return b.createElement("style",null,`
                      #nprogress {
                        pointer-events: none;
                      }
            
                      #nprogress .bar {
                        background: ${n};
            
                        position: fixed;
                        z-index: 1031;
                        top: 0;
                        left: 0;
            
                        width: 100%;
                        height: ${f};
                      }
            
                      /* Fancy blur effect */
                      #nprogress .peg {
                        display: block;
                        position: absolute;
                        right: 0px;
                        width: 100px;
                        height: 100%;
                        box-shadow: 0 0 10px ${n}, 0 0 5px ${n};
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
                        border-top-color: ${n};
                        border-left-color: ${n};
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
                `)},()=>!0);m.displayName="ProgressBar";var w=m;import{useRouter as y}from"next/navigation";import c from"nprogress";var E=()=>{let r=y();return{...r,push:(o,n)=>{s(o)&&c.start(),r.push(o,n)},back:()=>(c.start(),r.back())}},N=E;export{g as Link,w as ProgressBar,N as useRouter};
//# sourceMappingURL=index.mjs.map