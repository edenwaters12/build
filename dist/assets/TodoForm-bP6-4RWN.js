import{r as a,j as e}from"./react-Dzin6bBt.js";import{u as F,a as u}from"./index-CBuvP9i_.js";import{T as H}from"./textarea-D4cawpQl.js";import{B as k}from"./button-DaQ_XCGK.js";import{I as h}from"./input-qtv16FpJ.js";import{S as E,a as _,b as $,c as o}from"./select-DrsXEda-.js";import{c as V,g as G,d as M}from"./react-router-ZyCTy2W0.js";import"./exenv-BTN8Bl8p.js";import"./react-dom-vuVZB_ht.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-C6AuuY1s.js";import"./@remix-run--NbqtF80.js";import"./axios-CCb-kr4I.js";import"./@radix-ui-BiFA3u8r.js";import"./aria-hidden-DQ5UC2Eg.js";import"./react-remove-scroll-Bffst3Sv.js";import"./tslib-CDuPK5Eb.js";import"./react-remove-scroll-bar-C0y-sxxv.js";import"./react-style-singleton-CNUZfl4K.js";import"./get-nonce-C-Z93AgS.js";import"./use-sidecar-BgPSE0Zt.js";import"./use-callback-ref-CM22xisT.js";import"./@floating-ui-B50KHoMa.js";import"./clsx-B-dksMZM.js";import"./tailwind-merge-Dnoi3Axr.js";import"./lucide-react-DVh0U7qo.js";import"./class-variance-authority-Bb4qSo10.js";function ge(){const{user:c}=F(),n=V();a.useEffect(()=>{c.role==="owner"||c.role==="admin"||c.role==="cdmiadmin"||n("/404")});const[x,p]=a.useState(""),[w,j]=a.useState(""),[S,g]=a.useState(new Date().toISOString().split("T")[0]),[T,b]=a.useState("13:00"),[C,f]=a.useState("14:00"),[i,v]=a.useState("lecturer"),[D,y]=a.useState(""),[O,r]=a.useState(!1),[s,N]=a.useState("create"),{id:l}=G(),m=M().pathname,d=t=>t.slice(0,5);a.useEffect(()=>{m.includes("/new")?N("create"):m.includes("/edit")?(N("update"),l&&(r(!0),u.get(`/todos/${l}`).then(({data:t})=>{r(!1),p(t.title||""),j(t.description||""),g(t.today_date||""),b(d(t.start_date)||"13:00"),f(d(t.end_date)||"14:00"),v(t.category||"lecturer"),y(t.topic||"")}).catch(()=>{r(!1)}))):m.includes("/")&&(N("show"),l&&(r(!0),u.get(`/todos/${l}`).then(({data:t})=>{r(!1),p(t.title||""),j(t.description||""),g(t.today_date||""),b(d(t.start_date)||"13:00"),f(d(t.end_date)||"14:00"),v(t.category||"lecturer"),y(t.topic||"")}).catch(()=>{r(!1)})))},[m,l]);const I=t=>{t.preventDefault();let L={title:x,description:w,todayDate:S,startDate:T,endDate:C,category:i,topic:D};const P=s==="update"?`/todos/${l}`:"/todos";(s==="update"?u.put:u.post)(P,L).then(()=>n("/science")).catch(B=>console.error(s==="update"?"Error updating todo":"Error creating todo",B))};return e.jsx("div",{className:"p-4 max-w-6xl mx-auto",children:e.jsxs("form",{onSubmit:I,className:"mt-4",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Category"}),e.jsxs(E,{value:i,onValueChange:t=>v(t),className:"mt-1 block w-full",disabled:s==="show",children:[e.jsx(_,{children:e.jsx("span",{children:i||"---select---"})}),e.jsxs($,{children:[e.jsx(o,{value:"lecturer",children:"Lecturer"}),e.jsx(o,{value:"public_holidays",children:"Public Holidays"}),e.jsx(o,{value:"no_lecturer",children:"No Lecturer"}),e.jsx(o,{value:"time_e",children:"Time E"})]})]})]}),i==="lecturer"&&e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Title"}),e.jsxs(E,{value:x,onValueChange:t=>p(t),className:"mt-1 block w-full",disabled:s==="show",children:[e.jsx(_,{children:e.jsx("span",{children:x||"---select---"})}),e.jsxs($,{children:[e.jsx(o,{value:"python",children:"Python"}),e.jsx(o,{value:"excel",children:"Excel"}),e.jsx(o,{value:"django",children:"Django"}),e.jsx(o,{value:"numpy",children:"Numpy"}),e.jsx(o,{value:"pandas",children:"Pandas"})]})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Topic"}),e.jsx(h,{type:"text",value:D,onChange:t=>y(t.target.value),className:"mt-1",disabled:s==="show"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Description"}),e.jsx(H,{value:w,onChange:t=>j(t.target.value),className:"mt-1",disabled:s==="show"})]}),(i==="lecturer"||i==="time_e")&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Start Time"}),e.jsx(h,{type:"time",value:T,onChange:t=>b(t.target.value),className:"mt-1",disabled:s==="show"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"End Time"}),e.jsx(h,{type:"time",value:C,onChange:t=>f(t.target.value),className:"mt-1",disabled:s==="show"})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Today Date"}),e.jsx(h,{type:"date",value:S,onChange:t=>g(t.target.value),className:"mt-1",disabled:s==="show"})]}),e.jsxs("div",{className:"flex space-x-4",children:[c.name==="dhruvish"&&e.jsx(k,{type:s==="show"?"button":"submit",className:"bg-blue-500 text-white hover:bg-blue-600 w-[100px]",onClick:()=>s==="show"&&n(`/science/${l}/edit`),children:s==="update"?"Update Todo":s=="show"?"Edit":"Create Todo"}),e.jsx(k,{type:"button",className:"bg-gray-500 text-white hover:bg-gray-600 w-[100px]",onClick:()=>n("/science"),children:"Go To Home"})]})]})})}export{ge as default};