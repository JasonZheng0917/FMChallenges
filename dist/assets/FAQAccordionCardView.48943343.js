import{F as y}from"./FooterNav.30f070bc.js";import{o,a as n,b as s,p as v,m as f,C as b,u as d,i as p,g as k,t as m,c as h,l as q,F as _,D as O,k as $,e as w}from"./vendor.65f7cd75.js";import{_ as c}from"./index.9de0a91f.js";var x="/FMChallenges/assets/illustration-woman-online-mobile.00dbd29f.svg";const A={},C={width:"10",height:"7",xmlns:"http://www.w3.org/2000/svg"},I=s("path",{d:"M1 .799l4 4 4-4",stroke:"#F47B56","stroke-width":"2",fill:"none","fill-rule":"evenodd"},null,-1),F=[I];function B(e,t){return o(),n("svg",C,F)}var V=c(A,[["render",B]]);const N={},S=e=>(v("data-v-bb2dab44"),e=e(),f(),e),D={width:"10",height:"7",xmlns:"http://www.w3.org/2000/svg"},M=S(()=>s("path",{d:"M1 .799l4 4 4-4",stroke:"#F47B56","stroke-width":"2",fill:"none","fill-rule":"evenodd"},null,-1)),Q=[M];function W(e,t){return o(),n("svg",D,Q)}var H=c(N,[["render",W],["__scopeId","data-v-bb2dab44"]]);const P={id:"question"},T={key:0,id:"answer"},U={props:["question","answer","isOpen"],setup(e){const t=e;b(a=>({"42e9046d":d(l),"118e95bc":d(i)}));let l=p(()=>t.isOpen?"hsl(238, 29%, 16%)":"hsl(237, 12%, 33%)"),i=p(()=>t.isOpen?"700":"400");return(a,r)=>(o(),n(_,null,[s("p",P,[k(m(e.question)+" ",1),e.isOpen?(o(),h(H,{key:0})):(o(),h(V,{key:1}))]),e.isOpen?(o(),n("p",T,m(e.answer),1)):q("",!0)],64))}};var Y=c(U,[["__scopeId","data-v-0dc6d47e"]]);const g=e=>(v("data-v-2b9f14a5"),e=e(),f(),e),z={class:"faq-card"},E=g(()=>s("div",{class:"card-img"},[s("img",{src:x,alt:"Woman online"})],-1)),G={class:"card-accordion"},L=g(()=>s("h1",null,"FAQ",-1)),j=["onClick"],J={setup(e){const t=O([{question:"How many team members can I invite?",answer:"You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",isOpen:!0},{question:"What is the maximum file upload size?",answer:"No more than 2GB. All files in your account must fit your allotted storage space.",isOpen:!1},{question:"How do I reset my password?",answer:"Click \u201CForgot password\u201D from the login page or \u201CChange password\u201D from your profile page. A reset link will be emailed to you.",isOpen:!1},{question:"Can I cancel my subscription?",answer:"Yes! Send us a message and we\u2019ll process your request no questions asked.",isOpen:!1},{question:"Do you provide additional support?",answer:"Chat and email support is available 24/7. Phone lines are open during normal business hours.",isOpen:!1}]);function l(i){t.map((a,r)=>r==i?a.isOpen=!a.isOpen:a.isOpen=!1)}return(i,a)=>(o(),n(_,null,[s("main",null,[s("div",z,[E,s("div",G,[L,s("ul",null,[(o(!0),n(_,null,$(d(t),(r,u)=>(o(),n("li",{key:u,onClick:K=>l(u)},[w(Y,{question:r.question,answer:r.answer,"is-open":r.isOpen},null,8,["question","answer","is-open"])],8,j))),128))])])])]),w(y)],64))}};var ee=c(J,[["__scopeId","data-v-2b9f14a5"]]);export{ee as default};