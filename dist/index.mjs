"use client"
import f from"next/link";import p,{Suspense as x}from"react";import i from"nprogress";var g=r=>{i.configure({...i.settings,...r})},c=r=>{let t=r.currentTarget.getAttribute("target");return t&&t!=="_self"||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.nativeEvent&&r.nativeEvent.button===1},a=r=>{let e=window.location,t=new URL(r.toString(),window.location.href);return e.origin===t.origin&&e.pathname===t.pathname&&e.search===t.search},s=()=>{i.start()},o=()=>{i.done(),document.documentElement.classList.remove("nprogress-busy")};function h(r){return p.createElement(f,{...r},r.children)}function l(r){return p.createElement(x,{fallback:p.createElement(h,{...r})},p.createElement(f,{...r,onClick:e=>{c(e)||(s(),r.onClick&&r.onClick(e),a(r.href)&&o())}},r.children))}import b from"react";import{usePathname as P,useSearchParams as k}from"next/navigation";import{memo as L,useEffect as N}from"react";var u=L(function({color:e="#29D",height:t="2px",options:n={}}){g(n);let m=P(),d=k();return N(()=>{o()},[m,d]),b.createElement("style",null,`
          #nprogress {
              pointer-events: none;
          }
          
          #nprogress .bar {
              background: ${e};
              position: fixed;
              z-index: 1031;
              top: 0;
              left: 0;
              width: 100%;
              height: ${t};
          }
          
          /* Fancy blur effect */
          #nprogress .peg {
              display: block;
              position: absolute;
              right: 0px;
              width: 100px;
              height: 100%;
              box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
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
          
              border-top-color: ${e};
              border-left-color: ${e};
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
              0% {
                  -webkit-transform: rotate(0deg);
              }
          
              100% {
                  -webkit-transform: rotate(360deg);
              }
          }
          
          @keyframes nprogress-spinner {
              0% {
                  transform: rotate(0deg);
              }
          
              100% {
                  transform: rotate(360deg);
              }
          }
         `)},()=>!0);u.displayName="ProgressBar";var y=u;import{useRouter as w}from"next/navigation";var v=()=>{let r=w();return{...r,push:(n,m)=>{s(),r.push(n,m),a(n)&&o()},back:()=>(s(),r.back())}},E=v;export{l as Link,y as ProgressBar,E as useRouter};
//# sourceMappingURL=index.mjs.map