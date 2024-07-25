"use client"
var v=Object.create;var m=Object.defineProperty;var E=Object.getOwnPropertyDescriptor;var R=Object.getOwnPropertyNames;var S=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty;var T=(r,e)=>{for(var t in e)m(r,t,{get:e[t],enumerable:!0})},h=(r,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of R(e))!A.call(r,o)&&o!==t&&m(r,o,{get:()=>e[o],enumerable:!(s=E(e,o))||s.enumerable});return r};var g=(r,e,t)=>(t=r!=null?v(S(r)):{},h(e||!r||!r.__esModule?m(t,"default",{value:r,enumerable:!0}):t,r)),M=r=>h(m({},"__esModule",{value:!0}),r);var U={};T(U,{Link:()=>d,ProgressBar:()=>L,useRouter:()=>N});module.exports=M(U);var l=g(require("next/link")),n=g(require("react"));var a=g(require("nprogress")),x=r=>{a.default.configure({...a.default.settings,...r})},b=r=>{let t=r.currentTarget.getAttribute("target");return t&&t!=="_self"||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.nativeEvent&&r.nativeEvent.button===1},c=r=>{let e=window.location,t=new URL(r.toString(),window.location.href);return e.origin===t.origin&&e.pathname===t.pathname&&e.search===t.search},p=()=>{a.default.start()},i=()=>{a.default.done(),document.documentElement.classList.remove("nprogress-busy")};function O(r){return n.default.createElement(l.default,{...r},r.children)}function d(r){return n.default.createElement(n.Suspense,{fallback:n.default.createElement(O,{...r})},n.default.createElement(l.default,{...r,onClick:e=>{e.currentTarget.href.startsWith("#")||b(e)||(p(),r.onClick&&r.onClick(e),c(r.href)&&i())}},r.children))}var P=g(require("react")),f=require("next/navigation"),u=require("react");var k=(0,u.memo)(function({color:e="hsl(var(--primary, 202, 73%, 50%))",height:t="2px",options:s={}}){x(s);let o=(0,f.usePathname)(),w=(0,f.useSearchParams)();return(0,u.useEffect)(()=>{i()},[o,w]),P.default.createElement("style",null,`
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
         `)},()=>!0);k.displayName="ProgressBar";var L=k;var y=require("next/navigation");var B=()=>{let r=(0,y.useRouter)();return{...r,push:(s,o)=>{p(),r.push(s,o),c(s)&&i()},back:()=>(p(),r.back())}},N=B;0&&(module.exports={Link,ProgressBar,useRouter});
//# sourceMappingURL=index.js.map