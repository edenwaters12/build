import{u as b,b as p,r,c as y,a as v,j as e,L as l}from"./index-CrO11q5U.js";import{B as a}from"./button-CuqhUsHb.js";import{C as w}from"./card-DIOXgyU6.js";import{L as N}from"./Loader-Kd97LW-S.js";import{T as E}from"./textarea-hPiOaZmj.js";function D(){const{user:c}=b(),n=p();r.useEffect(()=>{["owner","money"].some(s=>c.role.includes(s))||n("/404")},[c,n]);const{id:d}=y(),[t,x]=r.useState(null),[o,i]=r.useState(!0),[m,h]=r.useState(null),[g,u]=r.useState("");r.useEffect(()=>{j()},[d]);const j=()=>{i(!0),v.get(`/money-management/${d}`).then(({data:s})=>{x(s),i(!1)}).catch(s=>{i(!1),h("Error fetching data",s)})},f=s=>{u(s.target.value)};return e.jsxs("div",{className:"flex flex-col items-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900",children:[e.jsxs("div",{className:"w-full max-w-md mb-4 flex flex-col items-start",children:[e.jsxs("div",{className:"flex space-x-4 mb-4",children:[e.jsx(l,{to:"deposite",children:e.jsx(a,{className:"bg-blue-500 text-white hover:bg-blue-600",children:"Deposit"})}),e.jsx(l,{to:"withdraw",children:e.jsx(a,{className:"bg-green-500 text-white hover:bg-green-600",children:"Withdraw"})}),e.jsx(l,{to:"remaining",children:e.jsx(a,{className:"bg-gray-500 text-white hover:bg-gray-600",children:"Remaining"})})]}),e.jsx("input",{type:"text",placeholder:"Search...",value:g,onChange:f,className:"w-full p-2 border  rounded "})]}),e.jsxs(w,{className:"w-full max-w-md p-8 ",children:[e.jsx("h1",{className:"text-2xl font-semibold mb-6 text-center",children:"Money Management Details"}),o&&e.jsx(N,{}),m&&e.jsx("div",{className:"mb-4 p-4 bg-red-100 text-red-800 rounded",children:m}),t&&!o&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Title:"})," ",t.title]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Give Money:"})," ",t.givemoney]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Date and Time:"})," ",t.dateTime]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Description:"}),e.jsx(E,{value:t.description,readOnly:!0,className:"w-full p-2 border mt-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"})]}),e.jsx("div",{className:"flex justify-end mt-4",children:e.jsx(a,{className:"bg-blue-500 text-white hover:bg-blue-600",onClick:()=>n(`/money-management/${t.id}/edit`),children:"Edit"})})]})]})]})}export{D as default};