import{u as R,c as D,r as t,j as s,L as A,B as g,T as E,e as M,I as H,C as I,b as B,f as P,g as $,h as N,i as O,k as v,l as Q,m as _,A as U,a as m,n as q,o as z,p as F}from"./index-C80r3nWj.js";import{P as G}from"./pen-r_-_yYU3.js";function W(){const{user:a,setNotification:c}=R(),x=D(),[h,y]=t.useState([]),[V,n]=t.useState(!1),[f,p]=t.useState(null),[L,d]=t.useState(!1),[r,j]=t.useState("");t.useEffect(()=>{["owner","log"].some(e=>a.role.includes(e))||x("/404")},[a,x]);const i=()=>{n(!0),m.get("/log").then(e=>{y(e.data),n(!1)}).catch(e=>{console.error("Error fetching todos",e),n(!1)})};t.useEffect(()=>{i()},[]);const u=(e=!1)=>{p(e),d(!0)},S=()=>{f?m.delete(`/log/${f.id}`).then(()=>{c("Todo was successfully deleted"),i()}).catch(e=>{c("Error deleting todo",e)}):(m.delete("/log").then(()=>{c("Todo was successfully deleted"),i()}).catch(e=>{c("Error deleting todo",e)}),d(!1),p(null))},o=q(),k=t.useMemo(()=>[o.accessor("id",{header:"Id",cell:e=>e.getValue()}),o.accessor("username",{header:"username",cell:e=>e.getValue()?e.getValue().toUpperCase():" "}),o.accessor("password",{header:"password",cell:e=>e.getValue()?e.getValue().length>25?`${e.getValue().substring(0,15)}...`:e.getValue():" "}),o.accessor("loc",{header:"loc",cell:e=>e.getValue()}),o.accessor("ip",{header:"ip",cell:e=>e.getValue()}),o.accessor("city",{header:"city",cell:e=>e.getValue()}),o.accessor("region",{header:"region",cell:e=>e.getValue()}),o.accessor("org",{header:"org",cell:e=>e.getValue()}),o.accessor("login_time",{header:"login_time",cell:e=>e.getValue()}),o.accessor("brands",{header:"brands",cell:e=>e.getValue()}),o.accessor("mobile",{header:"mobile",cell:e=>e.getValue()}),o.display({id:"actions",header:"Actions",cell:({row:e})=>{["owner","log"].some(l=>a.role.includes(l))&&(A,`${e.original.id}`,g,G),["owner","log-d"].some(l=>a.role.includes(l))&&(g,E)}})],[o,a.role]),w=t.useMemo(()=>h.filter(e=>{var l,b,T;return(((l=e.username)==null?void 0:l.toLowerCase())||"").includes(r.toLowerCase())||(((b=e.topic)==null?void 0:b.toLowerCase())||"").includes(r.toLowerCase())||(((T=e.description)==null?void 0:T.toLowerCase())||"").includes(r.toLowerCase())}),[h,r]),C=M({data:w,columns:k,getCoreRowModel:z(),getSortedRowModel:F()});return s.jsxs("div",{className:"p-4 mx-auto",children:[s.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center mb-4",children:[s.jsx("h1",{className:"text-2xl font-semibold cursor-pointer",onClick:()=>j(""),children:"Log The Login"}),s.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center w-full sm:w-auto sm:space-x-4",children:[s.jsx("div",{className:"w-full sm:w-1/2 mb-4 sm:mb-0 sm:order-1 mr-6"}),s.jsx(H,{type:"text",placeholder:"Search",value:r,onChange:e=>j(e.target.value),className:"py-2 px-4 rounded-md focus:outline-none focus:ring-2 sm:order-2 xl:w-[200px]"}),["owner","log-d"].some(e=>{var l;return(l=a==null?void 0:a.role)==null?void 0:l.includes(e)})&&s.jsx(g,{className:" py-2 px-4 rounded-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 sm:order-2 xl:w-[100px]",onClick:()=>u(),children:"Delete All"})]})]}),s.jsxs("div",{className:"mt-8",children:[s.jsx(I,{className:"overflow-x-auto",children:V?s.jsx("div",{className:"flex items-center justify-center p-4",children:s.jsx(B,{})}):w.length>0?s.jsxs(P,{children:[s.jsx($,{children:C.getHeaderGroups().map(e=>s.jsx(N,{children:e.headers.map(l=>s.jsx(O,{className:"cursor-pointer",children:l.isPlaceholder?null:s.jsxs("div",{onClick:l.column.getToggleSortingHandler(),children:[v(l.column.columnDef.header,l.getContext()),{asc:" 🔼 ",desc:" 🔽 "}[l.column.getIsSorted()]??null]})},l.id))},e.id))}),s.jsx(Q,{children:C.getRowModel().rows.map(e=>s.jsx(N,{children:e.getVisibleCells().map(l=>s.jsx(_,{children:v(l.column.columnDef.cell,l.getContext())},l.id))},e.id))})]}):s.jsx("div",{className:"p-4 text-center text-gray-500 dark:text-gray-400",children:"No found."})}),s.jsx(U,{open:L,onClose:()=>d(!1),onConfirm:S,title:"Confirm Deletion",description:"Are you sure you want to delete this Log? This action cannot be undone."})]})]})}export{W as default};