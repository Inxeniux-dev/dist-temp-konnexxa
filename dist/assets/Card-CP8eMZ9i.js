import{u as d,j as e,I as o}from"./index-C3URLPT6.js";function m({id:l,imgSrc:s,title:t,description:r,location:a,association:n}){const i=d(),c=()=>{i(`/company/${l}`)};return e.jsx("div",{className:"flex justify-center md:justify-start w-full",onClick:c,children:e.jsx("div",{className:"w-full md:w-80 lg:w-96 rounded-xl shadow-lg bg-white overflow-hidden",children:e.jsxs("div",{className:"flex flex-col items-start p-2",children:[s?e.jsx("img",{className:"w-full h-full cursor-pointer rounded-t-lg object-cover",src:s,alt:t}):e.jsx("div",{className:"flex items-center justify-center w-full h-48 cursor-pointer rounded-t-lg text-gray-500 bg-gray-200",children:"Sin imagen de la empresa"}),e.jsxs("div",{className:"p-4 rounded-lg mt-[-10px] w-full",children:[e.jsxs("h3",{className:"mt-2 flex justify-between items-center text-lg font-semibold leading-8 tracking-tight text-purple-recon",children:[t,e.jsx(o,{className:"cursor-pointer text-3xl text-purple-recon hover:text-purple-recon-300 transition-colors duration-200"})]}),e.jsx("p",{className:"text-base leading-7 text-gray-700",children:r}),e.jsx("p",{className:"text-sm leading-6 text-gray-500",children:a}),e.jsx("p",{className:"text-sm leading-6 text-gray-500",children:n})]})]})})})}export{m as default};
