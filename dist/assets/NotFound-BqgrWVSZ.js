import{u as n,r as i,a as l,j as t}from"./index-D2TPxXiu.js";import{B as c}from"./button-GmKsRPRy.js";const g=()=>{const{token:e,setUser:o,setToken:r,notification:s,setNotification:a}=n();return i.useEffect(()=>{e&&l.post("/logout").then(()=>{o({}),r(null),a("Logout............")})},[e]),t.jsxs("div",{className:"flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900",children:[t.jsxs("div",{className:"text-center",children:[t.jsx("h1",{className:"text-6xl font-bold text-red-500 dark:text-red-400",children:"404"}),t.jsx("p",{className:"mt-4 text-lg text-gray-700 dark:text-gray-300",children:"Oops! The page you’re looking for doesn’t exist."}),t.jsx(c,{className:"mt-6",onClick:()=>window.location.href="/login",children:"Go Back Login"})]}),s&&t.jsx("div",{className:"fixed bottom-4 right-4 p-4 bg-gray-800 text-white rounded-lg shadow-lg",children:s})]})};export{g as default};