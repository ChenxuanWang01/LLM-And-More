import{_ as W}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-6d0dee73.js";import{_ as k}from"./UiParentCard.vue_vue_type_script_setup_true_lang-376c5560.js";import{d as C,x as P,r as s,c as Y,U as b,k as y,l as I,m as t,j as e,Y as S,Z as F,_ as T,F as M,av as R,al as D,am as L,W as B,o as z,$ as A,n as E,aB as Q}from"./utils-b5033829.js";import{_ as j}from"./PreviewImage.vue_vue_type_script_setup_true_lang-0267f950.js";import{V as w}from"./VCol-3b0a2491.js";import{M as q,V as $,_ as H,J as U}from"./index-a319b856.js";import{V as O}from"./VForm-5d962dd0.js";import{V as J}from"./VFileInput-eb54e281.js";import{V as N}from"./VRow-ca04fd4f.js";const Z=_=>(D("data-v-d0882110"),_=_(),L(),_),G=Z(()=>B("label",{class:"required"},"上传图像",-1)),K=C({__name:"CreateMattingPane",emits:["submit"],setup(_,{expose:x,emit:V}){const u=V,i=P({operateType:"add"}),c=s(),v=s(),o=P({file:[]}),m=s(!1),p=s(""),g=s(""),r=Y({get(){return i.operateType==="edit"?g.value:o.file&&o.file.length>0?URL.createObjectURL(o.file[0]):""},set(a){g.value=a}}),f=async()=>{let{valid:a}=await v.value.validate();if(a){m.value=!0;const[l,n]=await R.upload({url:"/esrgan/rmbg",data:o});n&&(p.value=n.data.s3Url,u("submit")),m.value=!1}};return x({show({title:a,operateType:l,infos:n}){c.value.show({title:a,width:"1000px",hasSubmitBtn:!1}),i.operateType=l,i.operateType==="add"?(o.file=[],p.value=""):(g.value=n.inputS3Url,p.value=n.outputS3Url)}}),(a,l)=>{const n=b("Pane");return y(),I(n,{ref_key:"refPane",ref:c},{default:t(()=>[e(N,null,{default:t(()=>[e(w,{cols:"12",md:"6"},{default:t(()=>[e(k,{title:"输入"},{default:t(()=>[r.value?(y(),I(q,{key:0,src:r.value,height:"350px",alt:"previewImageUrl",cover:"",class:"rounded-md align-end text-right mb-5"},null,8,["src"])):S("",!0),i.operateType==="add"?(y(),F(M,{key:1},[e(O,{ref_key:"refForm",ref:v,class:"my-form"},{default:t(()=>[e(J,{modelValue:o.file,"onUpdate:modelValue":l[0]||(l[0]=h=>o.file=h),"prepend-icon":null,accept:"image/*",label:"请上传图片","hide-details":"auto",variant:"outlined",rules:[h=>h.length>0||"请上传图片"]},{prepend:t(()=>[G]),_:1},8,["modelValue","rules"])]),_:1},512),e($,{color:"primary",block:"",size:"large",flat:"",loading:m.value,onClick:f},{default:t(()=>[T("开始生成")]),_:1},8,["loading"])],64)):S("",!0)]),_:1})]),_:1}),e(w,{cols:"12",md:"6"},{default:t(()=>[e(k,{title:"输出"},{default:t(()=>[e(j,{loading:m.value,url:p.value},null,8,["loading","url"])]),_:1})]),_:1})]),_:1})]),_:1},512)}}});const X=H(K,[["__scopeId","data-v-d0882110"]]),ee=["src"],te=["src"],ce=C({__name:"imageMatting",setup(_){const x=s({title:"抠图列表"}),V=s([{text:"图像服务",disabled:!1,href:"#"},{text:"抠图列表",disabled:!0,href:"#"}]),u=P({list:[],total:0}),i=s(),c=s(),v=r=>{let f=[];return f.push({text:"查看",color:"info",click(){g(r)}}),f},o=async(r={})=>{const[f,a]=await R.get({url:"/esrgan/list",showLoading:c.value.el,data:{modelType:"rmBackground",...r}});a?(u.list=a.list||[],u.total=a.total):(u.list=[],u.total=0)},m=()=>{c.value.query({page:1})},p=()=>{i.value.show({title:"创建抠图",operateType:"add"})},g=r=>{i.value.show({title:"查看",infos:r,operateType:"edit"})};return z(()=>{o()}),(r,f)=>{const a=b("ButtonsInForm"),l=b("el-table-column"),n=b("ButtonsInTable"),h=b("TableWithPager");return y(),F(M,null,[e(W,{title:x.value.title,breadcrumbs:V.value},null,8,["title","breadcrumbs"]),e(k,null,{default:t(()=>[e(N,null,{default:t(()=>[e(w,{cols:"12",lg:"3",md:"4",sm:"6"},{default:t(()=>[e(a,null,{default:t(()=>[e($,{color:"primary",onClick:p},{default:t(()=>[T("创建抠图")]),_:1})]),_:1})]),_:1}),e(w,{cols:"12"},{default:t(()=>[e(h,{onQuery:o,ref_key:"tableWithPagerRef",ref:c,infos:u},{default:t(()=>[e(l,{label:"原图","min-width":"150px"},{default:t(({row:d})=>[e(U,{size:"80",rounded:"md"},{default:t(()=>[B("img",{src:d.inputS3Url,alt:"原图",height:"80"},null,8,ee)]),_:2},1024)]),_:1}),e(l,{label:"抠图后","min-width":"150px"},{default:t(({row:d})=>[e(U,{size:"80",rounded:"md"},{default:t(()=>[B("img",{src:d.outputS3Url,alt:"抠图后",height:"80"},null,8,te)]),_:2},1024)]),_:1}),e(l,{label:"模型名称",prop:"modelName","min-width":"160px"}),e(l,{label:"操作人",prop:"operatorEmail","min-width":"150px","show-overflow-tooltip":""}),e(l,{label:"创建时间","min-width":"160px"},{default:t(({row:d})=>[T(A(E(Q).dateFormat(d.createdAt,"YYYY-MM-DD HH:mm:ss")),1)]),_:1}),e(l,{label:"操作",width:"80px",fixed:"right"},{default:t(({row:d})=>[e(n,{buttons:v(d),onlyOne:""},null,8,["buttons"])]),_:1})]),_:1},8,["infos"])]),_:1})]),_:1})]),_:1}),e(X,{ref_key:"createMattingPaneRef",ref:i,onSubmit:m},null,512)],64)}}});export{ce as default};
