import{u as B,b as O,r as l,j as s,L as Q,a as D}from"./index-CrO11q5U.js";import{P as F,T as U,u as q,f as H,c as z,g as G,a as J}from"./index-DJGYMKwb.js";import{S as K,a as W,b as X,c as i}from"./select-Bw1r3uQs.js";import{B as b}from"./button-CuqhUsHb.js";import{C as Y}from"./card-DIOXgyU6.js";import{L as V}from"./Loader-Kd97LW-S.js";import{T as Z,a as ee,b as k,c as se,d as te,e as le}from"./table-B6Cle3ST.js";import{A as oe}from"./AlertDialogDemo-CM6L2AzR.js";import{I as ae}from"./input-B9ud5Mvz.js";function he(){const{user:a,setNotification:v}=B(),g=O(),[d,h]=l.useState([]),[r,M]=l.useState("all"),[c,f]=l.useState(!1),[y,S]=l.useState(null),[R,p]=l.useState(!1),[n,T]=l.useState(""),[A,j]=l.useState(1),[P,_]=l.useState(),[u,w]=l.useState(!0);l.useEffect(()=>{["owner","science"].some(e=>a.role.includes(e))||g("/404")},[a,g]);const C=()=>{!u||c||(f(!0),D.get(`/todos?page=${A}${r!=="all"?`&category=${r}`:""}`).then(e=>{h(t=>[...t,...e.data.data.filter(m=>!t.some(x=>x.id===m.id))]),_(e.data.total),e.data.current_page==e.data.last_page&&w(!1),j(t=>t+1),f(!1)}).catch(e=>{console.error("Error fetching todos",e),f(!1)}))};l.useEffect(()=>{C()},[r]),l.useEffect(()=>{const e=()=>{window.innerHeight+document.documentElement.scrollTop>=document.documentElement.offsetHeight-100&&u&&!c&&C()};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[u,c]);const N=e=>{S(e),p(!0)},$=()=>{y&&D.delete(`/todos/${y.id}`).then(()=>{v("deleted successfully"),h([]),j(1),w(!0),C()}).catch(e=>{v("Error deleting todo",e)}),p(!1),S(null)},o=z(),I=l.useMemo(()=>[o.accessor("today_date",{header:"Date",cell:e=>e.getValue()}),o.accessor("category",{header:"Category",cell:e=>e.getValue().toUpperCase()}),o.accessor("title",{header:"Title",cell:e=>e.getValue()}),o.accessor("topic",{header:"Topic",cell:e=>e.getValue()}),o.accessor("description",{header:"Description",cell:e=>e.getValue()?e.getValue().length>25?`${e.getValue().substring(0,25)}...`:e.getValue():" "}),o.display({id:"actions",header:"Actions",cell:({row:e})=>s.jsx(s.Fragment,{children:s.jsxs("div",{className:"flex flex-wrap gap-2 items-center justify-around",children:[s.jsx(Q,{to:`/science/${e.original.id}`,className:"text-blue-500 hover:underline",children:s.jsx(b,{className:"ml-4 hover:bg-blue-600",onClick:()=>N(e.original),children:s.jsx(F,{})})}),["owner","science-d"].some(t=>a.role.includes(t))&&s.jsx(b,{className:"ml-4  hover:bg-red-600",onClick:()=>N(e.original),children:s.jsx(U,{})})]})})})],[a]),L=l.useMemo(()=>d.filter(e=>{var t,m,x;return(((t=e.title)==null?void 0:t.toLowerCase())||"").includes(n.toLowerCase())||(((m=e.topic)==null?void 0:m.toLowerCase())||"").includes(n.toLowerCase())||(((x=e.description)==null?void 0:x.toLowerCase())||"").includes(n.toLowerCase())}),[d,n]),E=q({data:L,columns:I,getCoreRowModel:G(),getSortedRowModel:J()});return s.jsxs("div",{className:"p-4 mx-auto",children:[s.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center mb-4",children:[s.jsx("h1",{className:"text-2xl font-semibold cursor-pointer",onClick:()=>T(""),children:"Data Science Lecturers"}),s.jsxs("h3",{children:["Total : ",P]}),s.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center w-full sm:w-auto sm:space-x-4",children:[s.jsx("div",{className:"w-full sm:w-1/2 mb-4 sm:mb-0 sm:order-1 mr-6",children:s.jsxs(K,{value:r,onValueChange:e=>{M(e),h([]),j(1),w(!0)},className:"mt-1 block w-full",children:[s.jsx(W,{className:"xl:w-[150px]",children:s.jsx("span",{children:r||"---select---"})}),s.jsxs(X,{children:[s.jsx(i,{value:"all",children:"All"}),s.jsx(i,{value:"lecturer",children:"Lecturer"}),s.jsx(i,{value:"public_holidays",children:"Public Holidays"}),s.jsx(i,{value:"no_lecturer",children:"No Lecturer"}),s.jsx(i,{value:"time_e",children:"Time E"})]})]})}),s.jsx(ae,{type:"text",placeholder:"Search",value:n,onChange:e=>T(e.target.value),className:"py-2 px-4 rounded-md focus:outline-none focus:ring-2 sm:order-2 xl:w-[200px]"}),["owner","science-c"].some(e=>a.role.includes(e))&&s.jsx(b,{className:"bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:order-2 xl:w-[100px]",onClick:()=>g("/science/new"),children:"Create"})]})]}),s.jsxs("div",{className:"mt-8",children:[s.jsxs(Y,{className:"overflow-x-auto",children:[c&&d.length===0?s.jsx("div",{className:"flex items-center justify-center p-4",children:s.jsx(V,{})}):L.length>0?s.jsxs(Z,{children:[s.jsx(ee,{children:E.getHeaderGroups().map(e=>s.jsx(k,{children:e.headers.map(t=>s.jsx(se,{className:"cursor-pointer",children:t.isPlaceholder?null:s.jsxs("div",{onClick:t.column.getToggleSortingHandler(),children:[H(t.column.columnDef.header,t.getContext()),{asc:" 🔼 ",desc:" 🔽 "}[t.column.getIsSorted()]??null]})},t.id))},e.id))}),s.jsx(te,{children:E.getRowModel().rows.map(e=>s.jsx(k,{children:e.getVisibleCells().map(t=>s.jsx(le,{children:H(t.column.columnDef.cell,t.getContext())},t.id))},e.id))})]}):s.jsx("div",{className:"p-4 text-center text-gray-500 dark:text-gray-400",children:"No todos found."}),c&&u&&d.length!=0&&s.jsx("div",{className:"flex items-center justify-center p-4",children:s.jsx(V,{})})]}),s.jsx(oe,{open:R,onClose:()=>p(!1),onConfirm:$,title:"Confirm Deletion",description:"Are you sure you want to delete this todo? This action cannot be undone."})]})]})}export{he as default};