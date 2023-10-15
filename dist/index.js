"use client"
var y=Object.create;var a=Object.defineProperty;var E=Object.getOwnPropertyDescriptor;var N=Object.getOwnPropertyNames;var T=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty;var A=(r,e)=>{for(var t in e)a(r,t,{get:e[t],enumerable:!0})},d=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of N(e))!R.call(r,o)&&o!==t&&a(r,o,{get:()=>e[o],enumerable:!(n=E(e,o))||n.enumerable});return r};var i=(r,e,t)=>(t=r!=null?y(T(r)):{},d(e||!r||!r.__esModule?a(t,"default",{value:r,enumerable:!0}):t,r)),M=r=>d(a({},"__esModule",{value:!0}),r);var O={};A(O,{Link:()=>l,ProgressBar:()=>k,useRouter:()=>L});module.exports=M(O);var f=i(require("next/link")),s=i(require("react"));function S(r){let t=r.currentTarget.getAttribute("target");return t&&t!=="_self"||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.nativeEvent&&r.nativeEvent.button===1}var p=(r,e)=>{let t=window.location,n=new URL(r.toString(),window.location.href);return!(e&&S(e)||t.origin!==n.origin||t.pathname===n.pathname&&t.search===n.search)};var h=i(require("nprogress"));function v(r){return s.default.createElement(f.default,{...r},r.children)}function l(r){return s.default.createElement(s.Suspense,{fallback:s.default.createElement(v,{...r})},s.default.createElement(f.default,{...r,onClick:e=>{p(r.href,e)&&h.default.start(),r.onClick&&r.onClick(e)}},r.children))}var b=i(require("react")),m=require("next/navigation"),g=i(require("nprogress")),c=require("react"),x=(0,c.memo)(function(e={color:"#29D",height:"2px",options:g.default.settings}){g.default.configure(e.options);let t=(0,m.usePathname)(),n=(0,m.useSearchParams)();(0,c.useEffect)(()=>{g.default.done()},[t,n]);let{color:o,height:w}=e;return b.default.createElement("style",null,`
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
                        height: ${w};
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
                `)},()=>!0);x.displayName="ProgressBar";var k=x;var P=require("next/navigation"),u=i(require("nprogress"));var B=()=>{let r=(0,P.useRouter)();return{...r,push:(n,o)=>{p(n)&&u.default.start(),r.push(n,o)},back:()=>(u.default.start(),r.back())}},L=B;0&&(module.exports={Link,ProgressBar,useRouter});
//# sourceMappingURL=index.js.map