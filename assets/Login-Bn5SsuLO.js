import{r as s,u as w,j as a,I as h,B as v,a as o}from"./index-C80r3nWj.js";function j(){const i=s.useRef(),l=s.useRef(),{setUser:d,setToken:u}=w(),[g,n]=s.useState(null),[m,c]=s.useState(!1),b=x=>{x.preventDefault(),c(!0);const f=navigator.userAgent;let p={};"userAgentData"in navigator?navigator.userAgentData.getHighEntropyValues(["platform","brands"]).then(e=>(p={platform:navigator.platform,language:navigator.language,online:navigator.onLine,screenWidth:window.screen.width,screenHeight:window.screen.height,cookiesEnabled:navigator.cookieEnabled,hardwareConcurrency:navigator.hardwareConcurrency,deviceMemory:navigator.deviceMemory,brands:e.brands.map(r=>r.brand).join(", "),mobile:/Mobi|Android/i.test(navigator.userAgent)},o.get("https://ipinfo.io/json?token=9b203c2cebb8bc"))).then(({data:e})=>{const r={username:i.current.value,password:l.current.value,data:e,more:p};return o.post("/login",r)}).then(({data:e})=>{d(e.user),u(e.token)}).catch(e=>{var r,t;console.error("Error during login:",e),n(((t=(r=e.response)==null?void 0:r.data)==null?void 0:t.message)||"Failed to log in. Please try again.")}).finally(()=>{c(!1)}):(n("User agent data is not supported in this browser."),o.get("/get-ipinfo").then(({data:e})=>{const r={...e,browser:f},t={username:i.current.value,password:l.current.value,data:r};return o.post("/login",t)}).then(({data:e})=>{d(e.user),u(e.token)}).catch(e=>{var r,t;console.error("Error during fallback login:",e),n(((t=(r=e.response)==null?void 0:r.data)==null?void 0:t.message)||"Failed to log in. Please try again.")}).finally(()=>{c(!1)}))};return a.jsx("div",{className:"flex justify-center items-center min-h-screen",children:a.jsx("div",{className:"w-[360px] relative z-10 bg-black max-w-[360px] p-8 shadow-sm",children:a.jsxs("form",{onSubmit:b,children:[a.jsx("h1",{className:"text-lg mb-4 text-center",children:"WelCome"}),a.jsx(h,{ref:i,type:"text",placeholder:"Enter your username",className:"block w-full mb-4 p-2 border rounded",name:"username",required:!0}),a.jsx(h,{ref:l,type:"password",placeholder:"Enter Password",className:"block w-full mb-4 p-2 border rounded",name:"password",required:!0}),a.jsx(v,{className:"w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-sky-700",disabled:m,onClick:()=>n(""),children:m?"Logging in...":"Login"}),a.jsx("br",{}),g&&a.jsx("div",{className:"mt-4 text-[#ae1212]  text-center text-xl",children:a.jsx("h3",{children:g})})]})})})}export{j as default};