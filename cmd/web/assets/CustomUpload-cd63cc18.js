import{d as y,r as n,k as p,Z as u,L as C,X as h,Y as k,W as S,F as U,a1 as d,av as w}from"./utils-b5033829.js";import{_ as B}from"./index-a319b856.js";const $=["accept"],z=y({__name:"CustomUpload",props:{limit:{default:1},fileSize:{default:2},fileType:{default:()=>[]},isSuffixValid:{type:Boolean,default:!1},autoUpload:{type:Boolean,default:!0}},emits:["before-upload","after-upload","upload-success"],setup(f,{expose:c,emit:m}){const a=f,r=m,l=n(!1),s=n(),i=()=>{s.value.click()},_=e=>{const o=e.target.files[0];o&&g(o)},g=async e=>{s.value.value=null;let t=e.type;if(a.isSuffixValid&&(t=`.${e.name.split(".").pop().toLowerCase()}`),!a.fileType.includes(t)){d.warning("上传文件不符合所需的格式！");return}if(e.size/1024/1024>a.fileSize){d.warning(`上传文件大小不能超过 ${a.fileSize}M！`);return}if(r("before-upload",e),!a.autoUpload)return;l.value=!0;const[o,v]=await w.upload({url:"/files",data:{file:e}});l.value=!1,r("after-upload",{err:o,res:v})};return c({handleSelectFile:i}),(e,t)=>(p(),u(U,null,[e.$slots.trigger?(p(),u("a",C({key:0,href:"javascript: void(0)",onClick:i},e.$attrs),[h(e.$slots,"trigger",{loading:l.value},void 0,!0)],16)):k("",!0),S("input",{ref_key:"refUpload",ref:s,accept:e.fileType.join(","),class:"hide",type:"file",onChange:_},null,40,$)],64))}});const x=B(z,[["__scopeId","data-v-507d7843"]]);export{x as C};
