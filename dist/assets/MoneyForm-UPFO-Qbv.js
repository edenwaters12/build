import{r as m,j as e,e as u,u as S,b as M,c as $,a as y}from"./index-CYJ9JL1Y.js";import{I as i}from"./input-BffBF4_a.js";import{c as F,B as E}from"./button-lAaAvIzY.js";import{C as G}from"./card-D1RYVMHD.js";import{L as U}from"./Loader-CxsFxNhF.js";import{T as q}from"./textarea-BAB13o-9.js";import{A as O}from"./AlertDialogDemo-Vb-nAvK6.js";import{S as f,a as j,b as v,c as b}from"./select-Cckufb_J.js";const R=F("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),N=m.forwardRef(({className:n,variant:c,...l},r)=>e.jsx("div",{ref:r,role:"alert",className:u(R({variant:c}),n),...l}));N.displayName="Alert";const V=m.forwardRef(({className:n,...c},l)=>e.jsx("h5",{ref:l,className:u("mb-1 font-medium leading-none tracking-tight",n),...c}));V.displayName="AlertTitle";const W=m.forwardRef(({className:n,...c},l)=>e.jsx("div",{ref:l,className:u("text-sm [&_p]:leading-relaxed",n),...c}));W.displayName="AlertDescription";function J(){const{user:n,setNotification:c}=S(),l=M();m.useEffect(()=>{n.role==="owner"||n.role==="admin"||l("/404")});const{id:r}=$(),[s,o]=m.useState({title:"",money:"",description:"",dateTime:h(),whoToTake:"",ToGivemoney:"",toDaydate:h(),toTakeDate:h(),category:"deposite",moneyType:"cash"}),[d,k]=m.useState({}),[p,x]=m.useState(!1),[T,w]=m.useState(!1),D=["deposite","withdraw","remaining"],C=["cash","online"];m.useEffect(()=>{r&&(async()=>{x(!0);try{const t=await y.get(`/money-management/${r}`);o(t.data)}catch(t){c(t.message),w(!0)}finally{x(!1)}})()},[r]);const A=async a=>{a.preventDefault(),x(!0);try{r?(await y.put(`/money-management/${r}`,s),c("Data was successfully updated")):(await y.post("/money-management",s),c("Data was successfully saved")),l("/money-management")}catch(t){x(!1);const g=t.response;g&&g.status===422&&(k(g.data.errors),c("Failed to save data"))}};return e.jsxs("div",{className:"flex flex-col items-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900",children:[e.jsxs(G,{className:"w-full max-w-md p-8 bg-white dark:bg-gray-800 text-black dark:text-white",children:[e.jsx("h1",{className:"text-2xl font-semibold mb-6 text-center",children:r?`Edit ${s.category.charAt(0).toUpperCase()+s.category.slice(1)}`:`New ${s.category.charAt(0).toUpperCase()+s.category.slice(1)} Entry`}),p&&e.jsx(U,{}),d&&Object.keys(d).length>0&&e.jsx(N,{variant:"error",className:"mb-4",children:Object.keys(d).map(a=>e.jsx("p",{children:d[a][0]},a))}),!p&&e.jsxs("form",{onSubmit:A,className:"space-y-4",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium dark:text-gray-200",children:"Money Type"}),e.jsxs(f,{value:s.category,onValueChange:a=>o(t=>({...t,category:a})),className:"mt-1 block w-full",children:[e.jsx(j,{children:e.jsx("span",{children:s.category.charAt(0).toUpperCase()+s.category.slice(1)})}),e.jsx(v,{children:D.map(a=>e.jsx(b,{value:a,children:a.charAt(0).toUpperCase()+a.slice(1)},a))})]})]}),e.jsxs("label",{className:"block",children:[e.jsx("span",{className:"text-gray-700 dark:text-gray-200",children:"Title"}),e.jsx(i,{type:"text",value:s.title,onChange:a=>o(t=>({...t,title:a.target.value})),placeholder:"Title",required:!0,className:"w-full mt-1"})]}),e.jsxs("label",{className:"block",children:[e.jsx("span",{className:"text-gray-700 dark:text-gray-200",children:"Description"}),e.jsx(q,{value:s.description,onChange:a=>o(t=>({...t,description:a.target.value})),placeholder:"Description",rows:"4",className:"w-full p-2 border mt-1"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium dark:text-gray-200",children:"Money Type"}),e.jsxs(f,{value:s.moneyType,onValueChange:a=>o(t=>({...t,moneyType:a})),className:"mt-1 block w-full",children:[e.jsx(j,{children:e.jsx("span",{children:s.moneyType||"---select---"})}),e.jsx(v,{children:C.map(a=>e.jsx(b,{value:a,children:a.charAt(0).toUpperCase()+a.slice(1)},a))})]})]}),s.category==="deposite"&&e.jsxs(e.Fragment,{children:[e.jsxs("label",{className:"block",children:[e.jsx("span",{className:"text-gray-700 dark:text-gray-200",children:"Total Money"}),e.jsx(i,{type:"number",value:s.money,onChange:a=>o(t=>({...t,money:a.target.value})),placeholder:"Total Money",required:!0,className:"w-full mt-1"})]}),e.jsxs("label",{className:"block",children:[e.jsx("span",{className:"text-gray-700 dark:text-gray-200",children:"Who to Take"}),e.jsx(i,{type:"text",value:s.whoToTake,onChange:a=>o(t=>({...t,whoToTake:a.target.value})),placeholder:"Who to Take",className:"w-full mt-1"})]})]}),s.category==="withdraw"&&e.jsxs(e.Fragment,{children:[e.jsxs("label",{className:"block",children:[e.jsx("span",{className:"text-gray-700 dark:text-gray-200",children:"Money"}),e.jsx(i,{type:"number",value:s.money,onChange:a=>o(t=>({...t,money:a.target.value})),placeholder:"Money",required:!0,className:"w-full mt-1"})]}),e.jsxs("label",{className:"block",children:[e.jsx("span",{className:"text-gray-700 dark:text-gray-200",children:"To Give Money"}),e.jsx(i,{type:"text",value:s.ToGivemoney,onChange:a=>o(t=>({...t,ToGivemoney:a.target.value})),placeholder:"To Give Money",className:"w-full mt-1"})]})]}),s.category==="remaining"&&e.jsxs(e.Fragment,{children:[e.jsxs("label",{className:"block",children:[e.jsx("span",{className:"text-gray-700 dark:text-gray-200",children:"Money"}),e.jsx(i,{type:"number",value:s.money,onChange:a=>o(t=>({...t,money:a.target.value})),placeholder:"Money",required:!0,className:"w-full mt-1"})]}),e.jsxs("label",{className:"block",children:[e.jsx("span",{className:"text-gray-700 dark:text-gray-200",children:"Who to Take"}),e.jsx(i,{type:"text",value:s.whoToTake,onChange:a=>o(t=>({...t,whoToTake:a.target.value})),placeholder:"Who to Take",className:"w-full mt-1"})]}),e.jsxs("label",{className:"block",children:[e.jsx("span",{className:"text-gray-700 dark:text-gray-200",children:"To Take Date"}),e.jsx(i,{type:"date",value:s.toTakeDate,onChange:a=>o(t=>({...t,toTakeDate:a.target.value})),placeholder:"To Take Date",className:"w-full mt-1"})]})]}),e.jsxs("label",{className:"block",children:[e.jsx("span",{className:"text-gray-700 dark:text-gray-200",children:"Today Date"}),e.jsx(i,{type:"date",value:s.toDaydate,onChange:a=>o(t=>({...t,toDaydate:a.target.value})),placeholder:"To Give Date",className:"w-full mt-1"})]}),e.jsx(E,{type:"submit",className:"mt-4",children:r?"Update":"Submit"})]})]}),e.jsx(O,{open:T,onClose:()=>l("/money"),onConfirm:()=>window.location.reload(),description:"Failed to fetch data. Please try again or go to the home page."})]})}function h(){const n=new Date,c=n.getFullYear();let l=n.getMonth()+1,r=n.getDate();return r<10&&(r=`0${r}`),l<10&&(l=`0${l}`),`${c}-${l}-${r}`}export{J as default};