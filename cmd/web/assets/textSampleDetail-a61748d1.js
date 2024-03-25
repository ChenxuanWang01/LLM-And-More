import{d as R,k as m,l as Y,m as e,j as t,_ as i,$ as _,n as k,aB as z,al as te,am as se,W as o,as as ce,c as pe,U as B,Z as S,a0 as K,X as fe,r as g,x as M,a5 as ae,V as me,F as Q,a1 as _e,av as L,au as oe,o as le,aA as he,Q as X,a3 as Z}from"./utils-b5033829.js";import{_ as ve}from"./NavBack.vue_vue_type_script_setup_true_lang-9b589645.js";import{_ as N}from"./UiParentCard.vue_vue_type_script_setup_true_lang-376c5560.js";import{c as ye,ae as F,_ as G,J as be,V as J,a5 as O,ax as xe,e as we}from"./index-a319b856.js";import{V as D}from"./VCol-3b0a2491.js";import{V as ne}from"./VRow-ca04fd4f.js";import{_ as re}from"./ConfirmByClick.vue_vue_type_style_index_0_lang-0325f4ff.js";import{u as ge}from"./useScroll-3136b844.js";import{d as ke,T as Ce,I as $e}from"./favicon-b93d40a9.js";import{V as W}from"./VTextarea-b2446ea6.js";import{V as ie}from"./VForm-5d962dd0.js";import{A as Te}from"./AlertBlock-47a7c50e.js";import{I as ee}from"./IconInfoCircle-10f069c7.js";import"./Confirm-8cb73da5.js";import"./VAlert-b2ba5739.js";var Ie=ye("edit","IconEdit",[["path",{d:"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1",key:"svg-0"}],["path",{d:"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z",key:"svg-1"}],["path",{d:"M16 5l3 3",key:"svg-2"}]]);const U=c=>(te("data-v-defe08aa"),c=c(),se(),c),Ve=U(()=>o("label",null,"创建人",-1)),De=U(()=>o("label",null,"总会话",-1)),Se=U(()=>o("label",null,"创建时间",-1)),Ae=U(()=>o("label",null,"更新时间",-1)),Be=U(()=>o("label",null,"备注",-1)),Me=R({__name:"DetailBaseInfo",props:{info:{default:()=>({})}},setup(c){const a=c;return(b,h)=>(m(),Y(ne,{class:"my-form waterfall"},{default:e(()=>[t(D,{xs:"12",sm:"6",md:"4",lg:"3"},{default:e(()=>[t(F,{"hide-details":""},{prepend:e(()=>[Ve]),default:e(()=>[i(" "+_(a.info.creator),1)]),_:1})]),_:1}),t(D,{xs:"12",sm:"6",md:"4",lg:"3"},{default:e(()=>[t(F,{"hide-details":""},{prepend:e(()=>[De]),default:e(()=>[i(" "+_(a.info.samples),1)]),_:1})]),_:1}),t(D,{xs:"12",sm:"6",md:"4",lg:"3"},{default:e(()=>[t(F,{"hide-details":""},{prepend:e(()=>[Se]),default:e(()=>[i(" "+_(k(z).dateFormat(a.info.createdAt,"YYYY-MM-DD HH:mm:ss")),1)]),_:1})]),_:1}),t(D,{xs:"12",sm:"6",md:"4",lg:"3"},{default:e(()=>[t(F,{"hide-details":""},{prepend:e(()=>[Ae]),default:e(()=>[i(" "+_(k(z).dateFormat(a.info.updatedAt,"YYYY-MM-DD HH:mm:ss")),1)]),_:1})]),_:1}),t(D,{xs:"12",sm:"6",md:"4",lg:"3"},{default:e(()=>[t(F,{"hide-details":""},{prepend:e(()=>[Be]),default:e(()=>[i(" "+_(a.info.remark),1)]),_:1})]),_:1})]),_:1}))}});const Ye=G(Me,[["__scopeId","data-v-defe08aa"]]),qe=["src"],Ee={key:1,class:"message-avatar__text"},Fe={class:"overflow-hidden"},Re={class:"h-box"},Ue=R({__name:"Message",props:{msgType:{default:"question"},text:{default:""}},emits:["click:edit","click:delete"],setup(c,{emit:a}){const b=a,h=ce(),x=pe(()=>{const n=h.userInfo.username;return n?n[0].toUpperCase():"Y"});return(n,v)=>{const d=B("el-popover");return m(),S("div",{class:K([{"flex-row-reverse":n.msgType==="answer"},"pa-5 d-flex w-100 position-relative"])},[o("div",{class:K(["d-flex align-center justify-center flex-shrink-0 align-self-start",n.msgType==="answer"?"ml-2":"mr-2"])},[n.msgType==="answer"?(m(),Y(be,{key:0},{default:e(()=>[o("img",{class:"rounded-circle",src:k(ke),alt:"avatar",width:"40"},null,8,qe)]),_:1})):(m(),S("div",Ee,_(x.value),1))],2),o("div",Fe,[n.$slots.text?fe(n.$slots,"text",{key:0},void 0,!0):(m(),Y(d,{key:1,placement:n.msgType==="question"?"bottom-start":"bottom-end","show-arrow":!1,width:"auto","popper-class":"text-popover",offset:5,"show-after":500,teleported:!1},{reference:e(()=>[o("div",{class:K(["d-flex",{"flex-row-reverse":n.msgType==="question"}])},[t(Ce,{text:n.text,"msg-type":"answer"},null,8,["text"])],2)]),default:e(()=>[o("div",Re,[o("div",{class:"operate-btn hv-center",onClick:v[0]||(v[0]=p=>b("click:edit"))},[t(k(Ie),{size:20})]),o("div",{class:"operate-btn hv-center",onClick:v[1]||(v[1]=p=>b("click:delete"))},[t(k($e),{size:20})])])]),_:1},8,["placement"]))])],2)}}});const Pe=G(Ue,[["__scopeId","data-v-39eff8ea"]]),de=c=>(te("data-v-16fbf8f5"),c=c(),se(),c),ze={class:"d-flex flex-column h-100"},Qe={class:"flex-1 position-relative"},Le={class:"qa-item"},He={key:1,class:"no-data text-medium-emphasis"},je={class:"footer"},Ke=de(()=>o("label",{class:"required"},"问",-1)),We=de(()=>o("label",{class:"required"},"答",-1)),Ne=R({__name:"CreateQA",props:{uuid:String},emits:["submit"],setup(c,{expose:a,emit:b}){const h=c,x=b,{scrollRef:n,scrollToBottom:v}=ge(),d=g([]),p=M({operateType:"add",datasetSampleId:""}),C=g(""),w=g(""),r=g(),f=g(),V=M({question:[l=>!!l||"请输入用户问"],answer:[l=>!!l||"请输入客服回答"]}),P=g(""),q=l=>{l.key==="Enter"&&!l.shiftKey&&(l.preventDefault(),u())},u=async()=>{const{valid:l}=await f.value.validate();l&&(d.value.push({isEdit:!1,role:"user",content:C.value},{isEdit:!1,role:"assistant",content:w.value}),v(),C.value="",w.value="")},$=l=>{P.value=l.content,l.isEdit=!0},T=(l,s)=>{l||(s.content||(s.content=P.value),s.isEdit=!1)},I=(l,s)=>{s.role==="user"?d.value.splice(l,2):d.value.splice(l-1,2)},H=async({showLoading:l})=>{if(d.value.length===0){_e.warning("问答数据不能为空");return}const s={url:"",method:""};p.operateType=="add"?(s.url=`/datasets/${h.uuid}/samples`,s.method="post"):(s.url=`/api/datasets/${h.uuid}/samples/${p.datasetSampleId}`,s.method="put");const[A,j]=await L[s.method]({showLoading:l,showSuccess:!0,url:s.url,data:{messages:d.value}});j&&(r.value.hide(),x("submit"))};return a({show({title:l,operateType:s,infos:A}){r.value.show({title:l,confirmText:"save"}),p.operateType=s,p.operateType==="add"?(C.value="",w.value="",d.value=[]):(p.datasetSampleId=A.uuid,d.value=A.messages)}}),(l,s)=>{const A=B("perfect-scrollbar"),j=B("Pane");return m(),Y(j,{ref_key:"refPane",ref:r,onSubmit:H},{default:e(()=>[o("div",ze,[o("div",Qe,[d.value.length>0?(m(),Y(A,{key:0,ref_key:"scrollRef",ref:n,class:"h-100"},{default:e(()=>[(m(!0),S(Q,null,ae(d.value,(y,ue)=>(m(),S("div",Le,[t(Pe,{"msg-type":y.role==="user"?"question":"answer",text:y.content,"onClick:edit":E=>$(y),"onClick:delete":E=>I(ue,y)},me({_:2},[y.isEdit?{name:"text",fn:e(()=>[t(W,{autofocus:"",style:{width:"350px"},"hide-details":"","no-resize":"","auto-grow":"",rows:1,"max-rows":4,modelValue:y.content,"onUpdate:modelValue":E=>y.content=E,"onUpdate:focused":E=>T(E,y)},null,8,["modelValue","onUpdate:modelValue","onUpdate:focused"])]),key:"0"}:void 0]),1032,["msg-type","text","onClick:edit","onClick:delete"])]))),256))]),_:1},512)):(m(),S("div",He,"暂无问答数据"))]),o("div",je,[t(N,null,{default:e(()=>[t(ie,{ref_key:"refForm",ref:f,class:"my-form"},{default:e(()=>[t(W,{modelValue:C.value,"onUpdate:modelValue":s[0]||(s[0]=y=>C.value=y),"hide-details":"auto",density:"default",placeholder:"用户问","no-resize":"","auto-grow":"",rows:1,"max-rows":4,rules:V.question,"validate-on":"submit",onKeypress:q},{prepend:e(()=>[Ke]),_:1},8,["modelValue","rules"]),t(W,{class:"mb-0",modelValue:w.value,"onUpdate:modelValue":s[1]||(s[1]=y=>w.value=y),"hide-details":"auto",density:"default",placeholder:"客服回答","no-resize":"","auto-grow":"",rows:1,"max-rows":4,rules:V.answer,"validate-on":"submit",onKeypress:q},{prepend:e(()=>[We]),"append-inner":e(()=>[t(J,{color:"primary",size:"small",flat:"",onClick:u},{default:e(()=>[i("追加")]),_:1})]),_:1},8,["modelValue","rules"])]),_:1},512)]),_:1})])])]),_:1},512)}}});const Oe=G(Ne,[["__scopeId","data-v-16fbf8f5"]]),Ge=["onClick"],Je=["onClick"],Xe=o("span",{class:"font-weight-bold"},"这是进行一项操作时必须了解的重要信息",-1),Ze=o("br",null,null,-1),et={class:"text-primary ml-1"},tt=o("br",null,null,-1),st=R({__name:"DetailTableInfo",setup(c){const a=oe(),{uuid:b}=a.query,h=M({name:""}),x=M({list:[],total:0}),n=g(),v=g(),d=g(),p=M({title:"",id:""}),C=u=>{let $=[];return $.push({text:"废弃",color:"error",click(){w(u)}}),$},w=u=>{p.title=u.title,p.id=u.uuid,d.value.show({width:"450px"})},r=async(u={})=>{const[$,T]=await L.delete({...u,showSuccess:!0,url:`/api/datasets/${b}/samples/${p.id}`});T&&(d.value.hide(),f())},f=async(u={})=>{const[$,T]=await L.get({url:`/api/datasets/${b}/samples`,showLoading:v.value.el,data:{...h,...u}});T?(x.list=T.list||[],x.total=T.total):(x.list=[],x.total=0)},V=()=>{v.value.query({page:1})},P=()=>{n.value.show({title:"添加问答",operateType:"add"})},q=u=>{n.value.show({title:"编辑问答",infos:{uuid:u.uuid,messages:u.messages},operateType:"edit"})};return le(()=>{f()}),(u,$)=>{const T=B("ButtonsInForm"),I=B("el-table-column"),H=B("ButtonsInTable"),l=B("TableWithPager");return m(),S(Q,null,[t(ne,null,{default:e(()=>[t(D,{cols:"12",lg:"3",md:"4",sm:"6"},{default:e(()=>[t(O,{modelValue:h.name,"onUpdate:modelValue":$[0]||($[0]=s=>h.name=s),label:"请输入关键字","hide-details":"",clearable:"",onKeyup:he(V,["enter"]),"onClick:clear":V},null,8,["modelValue","onKeyup"])]),_:1}),t(D,{cols:"12",lg:"3",md:"4",sm:"6"},{default:e(()=>[t(T,null,{default:e(()=>[t(J,{color:"primary",onClick:P},{default:e(()=>[i("添加问答")]),_:1})]),_:1})]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(l,{onQuery:f,ref_key:"tableWithPagerRef",ref:v,infos:x},{default:e(()=>[t(I,{label:"ID","min-width":"200px","show-overflow-tooltip":"","class-name":"link-ellipsis-color"},{default:e(({row:s})=>[o("a",{href:"javascript: void(0)",class:"link",onClick:A=>q(s)},_(s.uuid),9,Ge)]),_:1}),t(I,{label:"问题","min-width":"200px","show-overflow-tooltip":"","class-name":"link-ellipsis-color"},{default:e(({row:s})=>[o("a",{href:"javascript: void(0)",class:"link",onClick:A=>q(s)},_(s.title),9,Je)]),_:1}),t(I,{label:"对话轮次",prop:"turns",width:"180px"}),t(I,{label:"更新时间","min-width":"165px"},{default:e(({row:s})=>[i(_(k(z).dateFormat(s.updatedAt,"YYYY-MM-DD HH:mm:ss")),1)]),_:1}),t(I,{label:"添加时间","min-width":"165px"},{default:e(({row:s})=>[i(_(k(z).dateFormat(s.createdAt,"YYYY-MM-DD HH:mm:ss")),1)]),_:1}),t(I,{label:"操作人",prop:"creatorEmail","min-width":"150px","show-overflow-tooltip":""}),t(I,{label:"操作",width:"80px",fixed:"right"},{default:e(({row:s})=>[t(H,{onlyOne:!0,buttons:C(s)},null,8,["buttons"])]),_:1})]),_:1},8,["infos"])]),_:1})]),_:1}),t(re,{ref_key:"refConfirmDiscard",ref:d,onSubmit:r},{text:e(()=>[Xe,Ze,i(" 您将要废弃"),o("span",et,_(p.title),1),tt,i(" 确定要继续吗？ ")]),_:1},512),t(Oe,{ref_key:"createQAPaneRef",ref:n,onSubmit:V,uuid:k(b)},null,8,["uuid"])],64)}}}),at={style:{display:"flex"}},ot={class:"toolTip"},lt={class:"iconToolTip"},nt={style:{display:"flex"}},rt={class:"toolTip"},it={class:"iconToolTipRole"},Ct=R({__name:"textSampleDetail",setup(c){const a=M({formData:{name:""},radioCheck:0,showIcon:!1,showIconRole:!1,subTitle:"",exportList:[{text:"导出jsonl",minTitle:"jsonl",subTitle:"将导出成alpaca的训练格式文件，可在创建微调时上传该文件进行训练。"},{text:"生成微调数据集",minTitle:"data",subTitle:"将直接生成微调数据集，在创建微调时可以直接选择该数据集"}]}),b=oe(),h=g(),{uuid:x}=b.query,n=g({}),v=async()=>{let[w,r]=await L.get({showLoading:!0,url:`/api/datasets/${x}`});r&&(n.value=r)},d=()=>{h.value.show({width:"550px"})},p=(w={})=>{a.subTitle=a.exportList[a.radioCheck].subTitle},C=(w={})=>{a.subTitle=a.exportList[a.radioCheck].subTitle};return le(()=>{a.subTitle=a.exportList[a.radioCheck].subTitle,v()}),(w,r)=>(m(),S(Q,null,[t(ve,{backUrl:"/sample-library/text-sample/list"},{default:e(()=>[i("样本详情")]),_:1}),t(N,{class:"mt-4"},{header:e(()=>[i(" 名称："+_(n.value.name),1)]),action:e(()=>[t(J,{color:"primary",onClick:d},{default:e(()=>[i("导出数据集")]),_:1})]),default:e(()=>[t(Ye,{info:n.value},null,8,["info"])]),_:1}),t(N,{class:"mt-5"},{default:e(()=>[t(st)]),_:1}),t(re,{ref_key:"refConfirmByClick",ref:h,onSubmit:p},{text:e(()=>[o("div",null,[t(Te,{class:"mb-6"},{default:e(()=>[i("该操作"+_(a.subTitle)+" ",1)]),_:1}),t(ie,{ref:"refForm",class:"my-form"},{default:e(()=>[t(O,{type:"text",placeholder:"eg: 普泽AI客服","hide-details":"auto",clearable:""},{prepend:e(()=>[o("label",at,[i("角色 "),o("div",ot,[t(k(ee),{size:16,color:"#bbb",pointer:"",class:"iconTool",onMouseenter:r[0]||(r[0]=f=>a.showIcon=!0),onMouseleave:r[1]||(r[1]=f=>a.showIcon=!1)}),X(o("div",lt,"AI角色",512),[[Z,a.showIcon]])])])]),_:1}),t(O,{type:"text",placeholder:"eg: 普泽基金的研究人员","hide-details":"auto",clearable:""},{prepend:e(()=>[o("label",nt,[i("作者 "),o("div",rt,[t(k(ee),{size:16,color:"#bbb",pointer:"",class:"iconTool",onMouseenter:r[2]||(r[2]=f=>a.showIconRole=!0),onMouseleave:r[3]||(r[3]=f=>a.showIconRole=!1)}),X(o("div",it,"AI的制作人及使用的数据等",512),[[Z,a.showIconRole]])])])]),_:1})]),_:1},512),t(xe,{mandatory:"","selected-class":"text-primary",style:{"margin-left":"20%"},modelValue:a.radioCheck,"onUpdate:modelValue":r[4]||(r[4]=f=>a.radioCheck=f),onClick:C},{default:e(()=>[(m(!0),S(Q,null,ae(a.exportList,(f,V)=>(m(),Y(we,{key:V,filter:"",variant:"outlined"},{default:e(()=>[i(_(f.text),1)]),_:2},1024))),128))]),_:1},8,["modelValue"])])]),_:1},512)],64))}});export{Ct as default};
