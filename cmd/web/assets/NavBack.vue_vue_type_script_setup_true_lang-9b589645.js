import{d as f,at as m,r as k,x as u,o as _,ax as b,U as h,k as v,Z as C,j as t,m as n,a0 as B,n as y,W as x,X as N}from"./utils-b5033829.js";import{c as w,V}from"./index-a319b856.js";var g=w("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]]);const M={class:"d-flex v-center"},z=f({__name:"NavBack",props:{tooltip:{default:""},backUrl:{default:""}},emits:["back"],setup(l,{emit:r}){const c=l,i=r,a=m(),s=k(),o=u({btnBackClassName:"opacity-0"}),p=()=>{let{backUrl:e}=c;e?e=="backCallback"?i("back"):a.replace(e):a.back()};return _(()=>{let{finished:e}=b(s.value,[{transform:"translateX(-50px)",opacity:.1},{opacity:.2},{transform:"translateX(0)"}],{duration:300,easing:"ease-in"});e.then(()=>{o.btnBackClassName="opacity-1 animate__bounceIn"})}),(e,I)=>{const d=h("el-tooltip");return v(),C("div",M,[t(d,{content:e.tooltip,disabled:!e.tooltip},{default:n(()=>[t(V,{icon:"",variant:"text",onClick:p,class:B([o.btnBackClassName,"[animation-duration:1s]"])},{default:n(()=>[t(y(g),{"stroke-width":"2.5",size:24})]),_:1},8,["class"])]),_:1},8,["content","disabled"]),x("h3",{ref_key:"refTitle",ref:s,class:"text-h3 ml-2 flex-1"},[N(e.$slots,"default")],512)])}}});export{z as _};
