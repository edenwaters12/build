import{r,j as e}from"./react-Dzin6bBt.js";import{u as y,a as p}from"./index-tA_CkrcO.js";import{S as w,a as T,b as k,c as l}from"./select-C6-oVS-l.js";import{L as D}from"./react-router-dom-1oKpTQ5_.js";import{B as f}from"./button-DzNIufI-.js";import{C as A}from"./card-i-PQbjv3.js";import{L}from"./Loader-BO7wm5pM.js";import{A as W}from"./AlertDialogDemo-CXyDHvY0.js";import{T as $,a as E,b as j,e as t,d as _}from"./table-CSH5w9c-.js";import{c as P}from"./react-router-DZbvGhyJ.js";import"./exenv-BTN8Bl8p.js";import"./react-dom-vuVZB_ht.js";import"./scheduler-CzFDRTuY.js";import"./axios-CCb-kr4I.js";import"./@radix-ui-DSbTQSaq.js";import"./aria-hidden-DQ5UC2Eg.js";import"./react-remove-scroll-fK1ikR0O.js";import"./tslib-CDuPK5Eb.js";import"./react-remove-scroll-bar-C0y-sxxv.js";import"./react-style-singleton-CNUZfl4K.js";import"./get-nonce-C-Z93AgS.js";import"./use-sidecar-BGkMMORt.js";import"detect-node-es";import"./use-callback-ref-CM22xisT.js";import"./@floating-ui-hWHCA-rQ.js";import"./clsx-B-dksMZM.js";import"./tailwind-merge-Dnoi3Axr.js";import"./lucide-react-DVh0U7qo.js";import"./@remix-run-DxFES9XG.js";import"./class-variance-authority-Bb4qSo10.js";function xe(){const{user:a,setNotification:c}=y(),d=P();r.useEffect(()=>{a.role=="owner"||a.role=="admin"||d("/404")});const[m,g]=r.useState([]),[i,b]=r.useState("all"),[v,o]=r.useState(!1),[x,h]=r.useState(null),[C,n]=r.useState(!1);function u(){p.get(`/works${i!=="all"?`?category=${i}`:""}`).then(s=>{g(s.data),o(!1)}).catch(s=>{console.error("Error fetching works",s),o(!1)})}r.useEffect(()=>{o(!0),u()},[i]);const S=s=>{h(s),n(!0)},N=()=>{x&&p.delete(`/works/${x.id}`).then(()=>{c("Work was successfully deleted"),u()}).catch(s=>{console.log(s),c("Error deleting Work",s)}),n(!1),h(null)};return e.jsxs("div",{className:"p-4 mx-auto",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center mb-4",children:[e.jsx("h1",{className:"text-2xl font-semibold",children:"Daliy Works"}),e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center w-full sm:w-auto sm:space-x-4",children:[e.jsx("div",{className:"w-full sm:w-1/2 mb-4 sm:mb-0 sm:order-1 mr-6",children:e.jsxs(w,{value:i,onValueChange:s=>b(s),className:"mt-1 block w-full",children:[e.jsx(T,{className:"xl:w-[150px]",children:e.jsx("span",{children:i||"---select---"})}),e.jsxs(k,{children:[e.jsx(l,{value:"all",children:"All"}),e.jsx(l,{value:"Collage",children:"Collage"}),e.jsx(l,{value:"Coding",children:"Coding"}),e.jsx(l,{value:"HomeWork",children:"HomeWork"}),e.jsx(l,{value:"Soical_Media",children:"Soical Media"}),e.jsx(l,{value:"Playing",children:"Playing"}),e.jsx(l,{value:"Self_Learning",children:"Self Learning"}),e.jsx(l,{value:"Data_Scinece",children:"Data Scinece"}),e.jsx(l,{value:"Time_Pass",children:"Time Pass"})]})]})}),e.jsx(f,{className:"bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:order-2 xl:w-[100px]",onClick:()=>d("/work/new"),children:"Create"})]})]}),e.jsxs("div",{className:"mt-8",children:[e.jsx(A,{className:"overflow-x-auto",children:v?e.jsx("div",{className:"flex items-center justify-center p-4",children:e.jsx(L,{})}):m.length>0?e.jsxs($,{children:[e.jsx(E,{children:e.jsxs(j,{children:[e.jsx(t,{children:"Date"}),e.jsx(t,{children:"Category"}),e.jsx(t,{children:"Title"}),e.jsx(t,{children:"Start Time"}),e.jsx(t,{className:"hidden md:table-cell",children:"Description"}),a.name==="dhruvish"&&e.jsx(t,{children:"Actions"})]})}),e.jsx(_,{children:m.map(s=>e.jsxs(j,{children:[e.jsx(t,{children:e.jsx(D,{to:`/work/${s.id}`,className:"text-blue-500 hover:underline",children:s.Today_date})}),e.jsx(t,{children:s.category.toUpperCase()}),e.jsx(t,{children:s.title}),e.jsx(t,{children:s.start_time}),e.jsx(t,{className:"hidden md:table-cell",children:s.description?s.description.length>20?`${s.description.substring(0,35)}...`:s.description:" "}),a.name==="dhruvish"&&e.jsx(t,{children:e.jsx(f,{className:"ml-4 bg-red-500 text-white hover:bg-red-600",onClick:()=>S(s),children:"Delete"})})]},s.id))})]}):e.jsx("div",{className:"p-4 text-center text-gray-500 dark:text-gray-400",children:"No found."})}),e.jsx(W,{open:C,onClose:()=>n(!1),onConfirm:N,title:"Confirm Deletion",description:"Are you sure you want to delete this work? This action cannot be undone."})]})]})}export{xe as default};