import{u as y,b as k,r as a,j as e,L as T,a as f}from"./index-D2TPxXiu.js";import{S as D,a as A,b as L,c as t}from"./select-B3KVTSd3.js";import{B as j}from"./button-GmKsRPRy.js";import{C as W}from"./card-DQXNvk-Z.js";import{L as E}from"./Loader-2ymP49Ji.js";import{A as _}from"./AlertDialogDemo-CcE40q5i.js";import{T as $,a as P,b as g,e as l,d as B}from"./table-0Os8YReR.js";function q(){const{user:n,setNotification:d}=y(),i=k();a.useEffect(()=>{["owner","work"].some(s=>n.role.includes(s))||i("/404")},[n,i]);const[x,p]=a.useState([]),[r,b]=a.useState("all"),[v,o]=a.useState(!1),[m,h]=a.useState(null),[C,c]=a.useState(!1);function u(){f.get(`/works${r!=="all"?`?category=${r}`:""}`).then(s=>{p(s.data),o(!1)}).catch(s=>{console.error("Error fetching works",s),o(!1)})}a.useEffect(()=>{o(!0),u()},[r]);const w=s=>{h(s),c(!0)},S=()=>{m&&f.delete(`/works/${m.id}`).then(()=>{d("Work was successfully deleted"),u()}).catch(s=>{console.log(s),d("Error deleting Work",s)}),c(!1),h(null)};return e.jsxs("div",{className:"p-4 mx-auto",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center mb-4",children:[e.jsx("h1",{className:"text-2xl font-semibold",children:"Daliy Works"}),e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center w-full sm:w-auto sm:space-x-4",children:[e.jsx("div",{className:"w-full sm:w-1/2 mb-4 sm:mb-0 sm:order-1 mr-6",children:e.jsxs(D,{value:r,onValueChange:s=>b(s),className:"mt-1 block w-full",children:[e.jsx(A,{className:"xl:w-[150px]",children:e.jsx("span",{children:r||"---select---"})}),e.jsxs(L,{children:[e.jsx(t,{value:"all",children:"All"}),e.jsx(t,{value:"Collage",children:"Collage"}),e.jsx(t,{value:"Coding",children:"Coding"}),e.jsx(t,{value:"HomeWork",children:"HomeWork"}),e.jsx(t,{value:"Soical_Media",children:"Soical Media"}),e.jsx(t,{value:"Playing",children:"Playing"}),e.jsx(t,{value:"Self_Learning",children:"Self Learning"}),e.jsx(t,{value:"Data_Scinece",children:"Data Scinece"}),e.jsx(t,{value:"Time_Pass",children:"Time Pass"})]})]})}),e.jsx(j,{className:"bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:order-2 xl:w-[100px]",onClick:()=>i("/work/new"),children:"Create"})]})]}),e.jsxs("div",{className:"mt-8",children:[e.jsx(W,{className:"overflow-x-auto",children:v?e.jsx("div",{className:"flex items-center justify-center p-4",children:e.jsx(E,{})}):x.length>0?e.jsxs($,{children:[e.jsx(P,{children:e.jsxs(g,{children:[e.jsx(l,{children:"Date"}),e.jsx(l,{children:"Category"}),e.jsx(l,{children:"Title"}),e.jsx(l,{children:"Start Time"}),e.jsx(l,{className:"hidden md:table-cell",children:"Description"}),n.name==="dhruvish"&&e.jsx(l,{children:"Actions"})]})}),e.jsx(B,{children:x.map(s=>e.jsxs(g,{children:[e.jsx(l,{children:e.jsx(T,{to:`/work/${s.id}`,className:"text-blue-500 hover:underline",children:s.Today_date})}),e.jsx(l,{children:s.category.toUpperCase()}),e.jsx(l,{children:s.title}),e.jsx(l,{children:s.start_time}),e.jsx(l,{className:"hidden md:table-cell",children:s.description?s.description.length>20?`${s.description.substring(0,35)}...`:s.description:" "}),["owner","work-d"].some(N=>n.role.includes(N))&&e.jsx(l,{children:e.jsx(j,{className:"ml-4 bg-red-500 text-white hover:bg-red-600",onClick:()=>w(s),children:"Delete"})})]},s.id))})]}):e.jsx("div",{className:"p-4 text-center text-gray-500 dark:text-gray-400",children:"No found."})}),e.jsx(_,{open:C,onClose:()=>c(!1),onConfirm:S,title:"Confirm Deletion",description:"Are you sure you want to delete this work? This action cannot be undone."})]})]})}export{q as default};