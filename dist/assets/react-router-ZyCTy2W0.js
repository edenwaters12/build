import{r as n}from"./react-Dzin6bBt.js";import{i as p,g as O,r as U,j as P,m as _,A,p as T,s as w,a as S}from"./@remix-run--NbqtF80.js";/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},R.apply(this,arguments)}const F=n.createContext(null),z=n.createContext(null),E=n.createContext(null),I=n.createContext(null),g=n.createContext({outlet:null,matches:[],isDataRoute:!1}),L=n.createContext(null);function oe(e,t){let{relative:r}=t===void 0?{}:t;y()||p(!1);let{basename:a,navigator:i}=n.useContext(E),{hash:u,pathname:o,search:d}=Q(e,{relative:r}),c=o;return a!=="/"&&(c=o==="/"?a:P([a,o])),i.createHref({pathname:c,search:d,hash:u})}function y(){return n.useContext(I)!=null}function B(){return y()||p(!1),n.useContext(I).location}function M(e){n.useContext(E).static||n.useLayoutEffect(e)}function $(){let{isDataRoute:e}=n.useContext(g);return e?ne():q()}function q(){y()||p(!1);let e=n.useContext(F),{basename:t,future:r,navigator:a}=n.useContext(E),{matches:i}=n.useContext(g),{pathname:u}=B(),o=JSON.stringify(O(i,r.v7_relativeSplatPath)),d=n.useRef(!1);return M(()=>{d.current=!0}),n.useCallback(function(f,s){if(s===void 0&&(s={}),!d.current)return;if(typeof f=="number"){a.go(f);return}let l=U(f,JSON.parse(o),u,s.relative==="path");e==null&&t!=="/"&&(l.pathname=l.pathname==="/"?t:P([t,l.pathname])),(s.replace?a.replace:a.push)(l,s.state,s)},[t,a,o,u,e])}const G=n.createContext(null);function K(e){let t=n.useContext(g).outlet;return t&&n.createElement(G.Provider,{value:e},t)}function ie(){let{matches:e}=n.useContext(g),t=e[e.length-1];return t?t.params:{}}function Q(e,t){let{relative:r}=t===void 0?{}:t,{future:a}=n.useContext(E),{matches:i}=n.useContext(g),{pathname:u}=B(),o=JSON.stringify(O(i,a.v7_relativeSplatPath));return n.useMemo(()=>U(e,JSON.parse(o),u,r==="path"),[e,o,u,r])}function se(e,t,r,a){y()||p(!1);let{navigator:i}=n.useContext(E),{matches:u}=n.useContext(g),o=u[u.length-1],d=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let f=B(),s;s=f;let l=s.pathname||"/",v=l;if(c!=="/"){let m=c.replace(/^\//,"").split("/");v="/"+l.replace(/^\//,"").split("/").slice(m.length).join("/")}let h=_(e,{pathname:v});return Z(h&&h.map(m=>Object.assign({},m,{params:Object.assign({},d,m.params),pathname:P([c,i.encodeLocation?i.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?c:P([c,i.encodeLocation?i.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),u,r,a)}function V(){let e=re(),t=S(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},t),r?n.createElement("pre",{style:i},r):null,null)}const W=n.createElement(V,null);class X extends n.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?n.createElement(g.Provider,{value:this.props.routeContext},n.createElement(L.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y(e){let{routeContext:t,match:r,children:a}=e,i=n.useContext(F);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),n.createElement(g.Provider,{value:t},a)}function Z(e,t,r,a){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),a===void 0&&(a=null),e==null){var u;if(!r)return null;if(r.errors)e=r.matches;else if((u=a)!=null&&u.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,d=(i=r)==null?void 0:i.errors;if(d!=null){let s=o.findIndex(l=>l.route.id&&(d==null?void 0:d[l.route.id])!==void 0);s>=0||p(!1),o=o.slice(0,Math.min(o.length,s+1))}let c=!1,f=-1;if(r&&a&&a.v7_partialHydration)for(let s=0;s<o.length;s++){let l=o[s];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(f=s),l.route.id){let{loaderData:v,errors:h}=r,C=l.route.loader&&v[l.route.id]===void 0&&(!h||h[l.route.id]===void 0);if(l.route.lazy||C){c=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((s,l,v)=>{let h,C=!1,m=null,x=null;r&&(h=d&&l.route.id?d[l.route.id]:void 0,m=l.route.errorElement||W,c&&(f<0&&v===0?(C=!0,x=null):f===v&&(C=!0,x=l.route.hydrateFallbackElement||null)));let j=t.concat(o.slice(0,v+1)),k=()=>{let b;return h?b=m:C?b=x:l.route.Component?b=n.createElement(l.route.Component,null):l.route.element?b=l.route.element:b=s,n.createElement(Y,{match:l,routeContext:{outlet:s,matches:j,isDataRoute:r!=null},children:b})};return r&&(l.route.ErrorBoundary||l.route.errorElement||v===0)?n.createElement(X,{location:r.location,revalidation:r.revalidation,component:m,error:h,children:k(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):k()},null)}var D=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(D||{}),N=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(N||{});function H(e){let t=n.useContext(F);return t||p(!1),t}function ee(e){let t=n.useContext(z);return t||p(!1),t}function te(e){let t=n.useContext(g);return t||p(!1),t}function J(e){let t=te(),r=t.matches[t.matches.length-1];return r.route.id||p(!1),r.route.id}function re(){var e;let t=n.useContext(L),r=ee(N.UseRouteError),a=J(N.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[a]}function ne(){let{router:e}=H(D.UseNavigateStable),t=J(N.UseNavigateStable),r=n.useRef(!1);return M(()=>{r.current=!0}),n.useCallback(function(i,u){u===void 0&&(u={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,R({fromRouteId:t},u)))},[e,t])}function ue(e){let{to:t,replace:r,state:a,relative:i}=e;y()||p(!1);let{future:u,static:o}=n.useContext(E),{matches:d}=n.useContext(g),{pathname:c}=B(),f=$(),s=U(t,O(d,u.v7_relativeSplatPath),c,i==="path"),l=JSON.stringify(s);return n.useEffect(()=>f(JSON.parse(l),{replace:r,state:a,relative:i}),[f,l,i,r,a]),null}function ce(e){return K(e.context)}function de(e){let{basename:t="/",children:r=null,location:a,navigationType:i=A.Pop,navigator:u,static:o=!1,future:d}=e;y()&&p(!1);let c=t.replace(/^\/*/,"/"),f=n.useMemo(()=>({basename:c,navigator:u,static:o,future:R({v7_relativeSplatPath:!1},d)}),[c,d,u,o]);typeof a=="string"&&(a=T(a));let{pathname:s="/",search:l="",hash:v="",state:h=null,key:C="default"}=a,m=n.useMemo(()=>{let x=w(s,c);return x==null?null:{location:{pathname:x,search:l,hash:v,state:h,key:C},navigationType:i}},[c,s,l,v,h,C,i]);return m==null?null:n.createElement(E.Provider,{value:f},n.createElement(I.Provider,{children:r,value:m}))}new Promise(()=>{});function fe(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:n.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:n.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:n.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}export{F as D,E as N,ce as O,de as R,z as a,oe as b,$ as c,B as d,Q as e,ue as f,ie as g,fe as m,se as u};