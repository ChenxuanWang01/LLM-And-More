import{u as Q}from"./useScroll-3136b844.js";import{_ as X}from"./NavBack.vue_vue_type_script_setup_true_lang-9b589645.js";import{d as ee,au as te,r as i,x as ae,o as se,U as M,k as f,Z as k,j as a,m as o,_ as m,n as oe,W as _,F as D,a5 as q,l as P,$ as ne,Y as le,av as R,al as re,am as de}from"./utils-b5033829.js";import{S as ue,M as ce}from"./index-f9c55f78.js";import{_ as ie}from"./ConfirmByClick.vue_vue_type_style_index_0_lang-0325f4ff.js";import{_ as me}from"./ModelSelect.vue_vue_type_script_setup_true_lang-2ac54796.js";import{V}from"./VSheet-7ca816da.js";import{a4 as x,L as z,a0 as pe,_ as fe}from"./index-a319b856.js";import{V as E}from"./VTextarea-b2446ea6.js";import{V as _e}from"./VCheckbox-9bca1f24.js";import"./favicon-b93d40a9.js";import"./Confirm-8cb73da5.js";const F=h=>(re("data-v-e274d0d9"),h=h(),de(),h),he={class:"chat-playground d-flex h-100"},ge={class:"left-part pa-4 d-none d-md-block"},ve=F(()=>_("h4",{class:"text-h6 mb-6"},"助理设置",-1)),ye={class:"middle-part d-flex flex-column"},Ve=F(()=>_("h4",{class:"text-h6 pa-4"},"聊天会话",-1)),xe=ee({__name:"playground",setup(h){const{scrollRef:J,scrollToBottom:N,scrollToBottomIfAtBottom:O}=Q(),j=te(),{assistantId:w}=j.query;i({title:"助手操场"});const l=ae({toolIds:[],instructions:"",modelName:"",stream:!0}),n=i([]),g=i(""),C=i(!1),b=i(),I=i({}),T=i(""),H=()=>{const s=g.value;g.value="",Y("text",s)},W=s=>{const e={...l},d=6*2;let u=[];const t=[{role:"system",content:T.value}];return u=n.value.slice(-d),u.forEach(r=>{const S=r.msgType==="question"?"user":"assistant";t.push({role:S,content:r.content})}),t.push({role:"user",content:s}),e.messages=t,e},Y=async(s,e,d={})=>{let u=e;const t=W(u);$({content:u,contentType:s,createdAt:new Date,ext:d,msgType:"question"}),N(),C.value=!0,$({loading:!0,content:"",contentType:"text",createdAt:new Date,msgType:"answer"}),N();try{await R.post({url:`/assistants/${w}/playground`,timeout:300*1e3,data:t,onDownloadProgress:r=>{const S=r.target,{responseText:v}=S,B=v.lastIndexOf(`
`,v.length-2);let L=v;B!==-1&&(L=v.substring(B));try{const p=JSON.parse(L),y=n.value.length-1;if(p.success){const c=p.data;A(y,{loading:!0,content:c.fullContent,contentType:c.contentType||"text",createdAt:c.createdAt,msgType:"answer"})}else{const c=n.value[y];if(c.content&&c.content!==""){U(y,{content:`${c.content}
[${p.message}]`,loading:!0});return}A(y,{loading:!0,content:p.message,contentType:"text",createdAt:new Date,msgType:"answer"})}O()}catch{}}})}catch(r){console.log(r)}finally{U(n.value.length-1,{loading:!1}),C.value=!1}},$=s=>{n.value.push(s)},A=(s,e)=>{n.value[s]=e},U=(s,e)=>{n.value[s]={...n.value[s],...e}},Z=()=>{b.value.show({width:"400px"})},G=()=>{n.value=[],b.value.hide()},K=async()=>{let[s,e]=await R.get({showLoading:!0,url:`/assistants/${w}`});e&&(I.value=e,l.instructions=e.instructions,l.modelName=e.modelName,l.toolIds=I.value.tools.map(d=>d.toolId))};return se(()=>{K()}),(s,e)=>{const d=M("el-tooltip"),u=M("perfect-scrollbar");return f(),k(D,null,[a(X,{backUrl:`/ai-assistant/assistants/detail?assistantId=${oe(w)}`},{default:o(()=>[m("助手操场")]),_:1},8,["backUrl"]),a(pe,{elevation:"10",class:"mt-4",style:{height:"calc(100vh - 188px)"}},{default:o(()=>[_("div",he,[_("div",ge,[ve,a(V,null,{default:o(()=>[a(x,{class:"mb-2 font-weight-medium"},{default:o(()=>[m("系统提示词")]),_:1}),a(E,{modelValue:T.value,"onUpdate:modelValue":e[0]||(e[0]=t=>T.value=t),variant:"outlined",placeholder:"可以给定助理角色及相关要求，不要超过2000个字",rows:"3","no-resize":"",color:"primary","row-height":"25",shaped:""},null,8,["modelValue"])]),_:1}),a(V,null,{default:o(()=>[a(x,{class:"mb-2 font-weight-medium"},{default:o(()=>[m("指令")]),_:1}),a(E,{modelValue:l.instructions,"onUpdate:modelValue":e[1]||(e[1]=t=>l.instructions=t),variant:"outlined",placeholder:"请输入指令",rows:"6","no-resize":"",color:"primary","row-height":"25",shaped:""},null,8,["modelValue"])]),_:1}),a(V,null,{default:o(()=>[a(x,{class:"mb-2 font-weight-medium"},{default:o(()=>[m("模型")]),_:1}),a(me,{modelValue:l.modelName,"onUpdate:modelValue":e[2]||(e[2]=t=>l.modelName=t)},null,8,["modelValue"])]),_:1}),a(V,null,{default:o(()=>[a(x,{class:"mb-2 font-weight-medium"},{default:o(()=>[m("工具")]),_:1}),(f(!0),k(D,null,q(I.value.tools,t=>(f(),P(_e,{modelValue:l.toolIds,"onUpdate:modelValue":e[3]||(e[3]=r=>l.toolIds=r),color:"primary","hide-details":"",value:t.toolId},{label:o(()=>[a(d,{content:t.description,placement:"top"},{default:o(()=>[m(ne(t.name),1)]),_:2},1032,["content"])]),_:2},1032,["modelValue","value"]))),256))]),_:1})]),_("div",ye,[Ve,a(z),a(u,{ref_key:"scrollRef",ref:J,class:"middle-part__list"},{default:o(()=>[n.value.length>0?(f(!0),k(D,{key:0},q(n.value,(t,r)=>(f(),P(ce,{key:r,"chat-item":t},null,8,["chat-item"]))),128)):le("",!0)]),_:1},512),a(z),a(ue,{modelValue:g.value,"onUpdate:modelValue":e[4]||(e[4]=t=>g.value=t),onSubmit:H,onClear:Z,"send-loading":C.value},null,8,["modelValue","send-loading"])])])]),_:1}),a(ie,{ref_key:"refConfirmDelete",ref:b,onSubmit:G},{text:o(()=>[m("确定清空会话？")]),_:1},512)],64)}}});const Be=fe(xe,[["__scopeId","data-v-e274d0d9"]]);export{Be as default};
