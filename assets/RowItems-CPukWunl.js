import{f as V,u as A,b as E,r as l,j as o,L as h,a as x}from"./index-CrO11q5U.js";import{P as H,T as I,u as F,f as T,c as O,g as P,a as U}from"./index-DJGYMKwb.js";import{B as i}from"./button-CuqhUsHb.js";import{C as _}from"./card-DIOXgyU6.js";import{L as B}from"./Loader-Kd97LW-S.js";import{T as Q,a as q,b as k,c as z,d as J,e as G}from"./table-B6Cle3ST.js";import{A as K}from"./AlertDialogDemo-CM6L2AzR.js";import{I as W}from"./input-B9ud5Mvz.js";/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=V("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);function ae(){const{user:r,setNotification:g}=A(),d=E(),[f,S]=l.useState([]),[R,u]=l.useState(!1),[p,w]=l.useState(null),[L,m]=l.useState(!1),[c,b]=l.useState("");l.useEffect(()=>{["owner","row"].some(s=>r.role.includes(s))||d("/404")},[r,d]);const j=()=>{u(!0),x.get("/rows").then(s=>{S(s.data),u(!1)}).catch(s=>{console.error("Error fetching todos",s),u(!1)})};l.useEffect(()=>{j()},[]);const C=s=>{w(s),m(!0)},D=()=>{p&&x.delete(`/row/${p.id}`).then(()=>{g("row was successfully deleted"),j()}).catch(s=>{g("Error deleting todo",s)}),m(!1),w(null)},$=async s=>{try{const e=await x.get(`/row/${s}/download`,{responseType:"blob"}),t=window.URL.createObjectURL(e.data),a=document.createElement("a");a.href=t,a.setAttribute("download",`${s}_${Date.now()}__${Math.random().toString(36).substring(2,10)}.zip`),document.body.appendChild(a),a.click(),document.body.removeChild(a),window.URL.revokeObjectURL(t)}catch(e){console.error("Download failed:",e),alert("Failed to download the file. Please try again.")}},n=O(),M=l.useMemo(()=>{const s=[n.accessor("title",{header:"Title",cell:e=>e.getValue()}),n.accessor("description",{header:"Description",cell:e=>e.getValue()?e.getValue().length>25?`${e.getValue().substring(0,25)}...`:e.getValue():" "}),n.accessor("files",{header:"Files",cell:e=>{const t=JSON.parse(e.getValue()||"[]");return t.length>0?t.map((a,N)=>o.jsx(o.Fragment,{children:o.jsxs("div",{className:"flex flex-wrap gap-2 items-center justify-around",children:[o.jsxs(h,{to:`https://mydapi.thedhruvish.com/storage/${a}`,className:"text-blue-500 hover:underline",target:"_blank",children:["View File ",N+1]},N),t.length>0&&o.jsx(i,{className:"ml-4 hover:bg-blue-600",onClick:()=>$(e.row.original.id),children:o.jsx(X,{})})]})})):"No files"}}),n.display({id:"actions",header:"Actions",cell:({row:e})=>r.role==="owner"||r.role==="admin"?o.jsxs(o.Fragment,{children:[o.jsx(h,{to:`/row/${e.original.id}`,children:o.jsx(i,{className:"ml-4 hover:bg-blue-600",onClick:()=>C(e.original),children:o.jsx(H,{})})}),["owner","row-d"].some(t=>r.role.includes(t))&&o.jsx(i,{className:"ml-4 hover:bg-red-600",onClick:()=>C(e.original),children:o.jsx(I,{})})]}):o.jsx(h,{to:`/row/${e.original.id}`,className:"text-blue-500 hover:underline",children:"Show"})})];return(r.role==="owner"||r.role==="admin")&&s.push(n.accessor("author",{header:"Author",cell:e=>e.getValue()})),s},[n,r.role]),y=l.useMemo(()=>(f||[]).filter(s=>{var e,t;return(((e=s.title)==null?void 0:e.toLowerCase())||"").includes(c.toLowerCase())||(((t=s.description)==null?void 0:t.toLowerCase())||"").includes(c.toLowerCase())}),[f,c]),v=F({data:y,columns:M,getCoreRowModel:P(),getSortedRowModel:U()});return o.jsxs("div",{className:"p-4 mx-auto",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center mb-4",children:[o.jsx("h1",{className:"text-2xl font-semibold cursor-pointer",onClick:()=>b(""),children:"Row Items"}),o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center w-full sm:w-auto sm:space-x-4",children:[o.jsx(W,{type:"text",placeholder:"Search",value:c,onChange:s=>b(s.target.value),className:"py-2 px-4 rounded-md focus:outline-none focus:ring-2 sm:order-2 xl:w-[200px]"}),o.jsx(i,{className:"bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:order-2 xl:w-[100px]",onClick:()=>d("/row/new"),children:"Create"})]})]}),o.jsxs("div",{className:"mt-8",children:[o.jsx(_,{className:"overflow-x-auto",children:R?o.jsx("div",{className:"flex items-center justify-center p-4",children:o.jsx(B,{})}):y.length>0?o.jsxs(Q,{children:[o.jsx(q,{children:v.getHeaderGroups().map(s=>o.jsx(k,{children:s.headers.map(e=>o.jsx(z,{className:"cursor-pointer",children:e.isPlaceholder?null:o.jsxs("div",{onClick:e.column.getToggleSortingHandler(),children:[T(e.column.columnDef.header,e.getContext()),{asc:" 🔼 ",desc:" 🔽 "}[e.column.getIsSorted()]??null]})},e.id))},s.id))}),o.jsx(J,{children:v.getRowModel().rows.map(s=>o.jsx(k,{children:s.getVisibleCells().map(e=>o.jsx(G,{children:T(e.column.columnDef.cell,e.getContext())},e.id))},s.id))})]}):o.jsx("div",{className:"p-4 text-center text-gray-500 dark:text-gray-400",children:"No rows found."})}),o.jsx(K,{open:L,onClose:()=>m(!1),onConfirm:D,title:"Confirm Deletion",description:"Are you sure you want to delete this todo? This action cannot be undone."})]})]})}export{ae as default};