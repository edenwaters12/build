import{r,u as w,j as e,a as j}from"./index-CYJ9JL1Y.js";import{I as s}from"./input-BffBF4_a.js";import"./button-lAaAvIzY.js";import{C as b}from"./card-D1RYVMHD.js";function v(){const o=r.createRef(),c=r.createRef(),m=r.createRef(),u=r.createRef(),i=r.createRef(),{setUser:d,setToken:p}=w(),[t,f]=r.useState(null),x=a=>{a.preventDefault();const h={name:o.current.value,username:m.current.value,email:c.current.value,password:u.current.value,password_confirmation:i.current.value};j.post("/signup",h).then(({data:l})=>{d(l.user),p(l.token)}).catch(l=>{const n=l.response;n&&n.status===422&&f(n.data.errors)})};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col items-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900",children:e.jsxs(b,{className:"w-full max-w-md p-8 bg-white dark:bg-gray-800 text-black dark:text-white",children:[e.jsx("h1",{className:"text-2xl font-semibold mb-6 text-center",children:"Signup"}),t&&Object.keys(t).length>0&&e.jsx("div",{className:"mb-4 p-4 border border-red-500 text-red-500 rounded",children:Object.keys(t).map(a=>e.jsx("p",{children:t[a][0]},a))}),e.jsxs("form",{onSubmit:x,className:"space-y-4",children:[e.jsx(s,{type:"text",ref:o,placeholder:"Name",required:!0,className:"w-full"}),e.jsx(s,{type:"text",ref:m,placeholder:"username",required:!0,className:"w-full"}),e.jsx(s,{type:"email",ref:c,placeholder:"Email",required:!0,className:"w-full"}),e.jsx(s,{type:"password",ref:u,placeholder:"Password",className:"w-full"}),e.jsx(s,{type:"password",ref:i,placeholder:"Password Confirmation",className:"w-full"})]})]})})})}export{v as default};