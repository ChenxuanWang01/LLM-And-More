import{d as M,au as W,i as Y,x as H,z as N,o as j,U as P,k as u,Z as g,W as n,n as a,F as K,l as D,m as t,j as e,Y as q,aA as J,a5 as Z,_,$ as F,aD as G,a0 as Q,av as $,at as X,r as L,D as ee,a1 as z,al as te,am as ae}from"./utils-b5033829.js";import{_ as R}from"./UiParentCard.vue_vue_type_script_setup_true_lang-376c5560.js";import{_ as se}from"./Explain.vue_vue_type_style_index_0_lang-00609ff7.js";import{I as le,S as oe}from"./SpeakerSelector-c8c7192d.js";import{_ as ie}from"./TagCorner.vue_vue_type_style_index_0_lang-db71d746.js";import{ad as ne,M as re,a5 as U,a0 as de,_ as O,a4 as S}from"./index-a319b856.js";import{V as p}from"./VCol-3b0a2491.js";import{V as T}from"./VRow-ca04fd4f.js";import{u as ce}from"./useScroll-3136b844.js";import{_ as ue}from"./NavBack.vue_vue_type_script_setup_true_lang-9b589645.js";import{V as me}from"./VForm-5d962dd0.js";import{V as pe}from"./VTextarea-b2446ea6.js";import{V as _e}from"./VSwitch-aa0de09a.js";import"./IconInfoCircle-10f069c7.js";import"./IconCircleCheckFilled-20ff8a17.js";import"./AiAudio.vue_vue_type_style_index_0_lang-4c81f11e.js";const fe={class:"aspect-square"},ge=["src","poster"],he={class:"d-flex align-center justify-center fill-height"},ve={key:1,class:"h-full w-full bg-gray-100"},ye={class:"box-list scrollbar-auto flex-1 pt-4 overflow-auto"},xe=["onClick"],Ve={class:"relative overflow-hidden"},ke={class:"image-human overflow-hidden"},be=["src","alt"],we={class:"hv-center mt-2"},De={class:"line1"},Se=M({__name:"DigitalHumanSelector",setup(h){W();const v=Y("provieDigitalHumanEdit"),m=H({list:[],formData:{name:""}}),{formData:V}=N(m),{selectedDigitalHuman:c}=N(v);function y(k){v.selectedDigitalHuman=k}const l=async()=>{await $.get({showLoading:!0,url:"/api/digitalhuman/person/list",data:{pageSize:20,page:1,...m.formData}}).then(([k,o])=>{o&&(m.list=o.list,m.list.length>0?y(m.list[0]):v.selectedDigitalHuman={name:"",cname:"",cover:"",video:"",mediaType:""})})};return j(()=>{l()}),(k,o)=>{const A=P("NoData");return u(),g("div",null,[n("div",fe,[a(c).video?(u(),g(K,{key:0},[a(c).mediaType=="video"?(u(),g("video",{key:0,style:{width:"100%",height:"100%"},src:a(c).video,controls:"",poster:a(c).cover,class:"block"},null,8,ge)):a(c).mediaType=="image"?(u(),D(re,{key:1,src:a(c).video},{placeholder:t(()=>[n("div",he,[e(ne,{color:"primary",indeterminate:"",width:2,size:42})])]),_:1},8,["src"])):q("",!0)],64)):(u(),g("div",ve))]),e(T,{class:"mt-5"},{default:t(()=>[e(p,null,{default:t(()=>[e(U,{density:"compact",modelValue:a(V).name,"onUpdate:modelValue":o[0]||(o[0]=i=>a(V).name=i),label:"搜索角色名称","hide-details":"",clearable:"",variant:"outlined",color:"red",onKeyup:J(l,["enter"]),"onClick:clear":l},null,8,["modelValue","onKeyup"])]),_:1})]),_:1}),n("div",ye,[m.list.length?(u(!0),g(K,{key:0},Z(m.list,(i,C)=>(u(),D(de,{variant:"outlined",rounded:"sm",elevation:"0",class:"pa-2 bg-hover-secondary d-inline-block list-item ma-2 overflow-visible",pointer:""},{default:t(()=>{var b;return[n("div",{onClick:r=>y(i)},[n("div",Ve,[e(ie,{class:Q(a(G).mediaType[i.mediaType].className)},{default:t(()=>[_(F(a(G).mediaType[i.mediaType].text),1)]),_:2},1032,["class"]),n("div",ke,[n("img",{src:i.cover,alt:i.cname},null,8,be)]),n("div",we,[n("div",De,F(i.cname),1)])]),i.name===((b=a(c))==null?void 0:b.name)?(u(),D(le,{key:0})):q("",!0)],8,xe)]}),_:2},1024))),256)):(u(),D(A,{key:1},{default:t(()=>[_("暂无数据，请更换搜索条件")]),_:1}))])])}}});const Te=O(Se,[["__scopeId","data-v-472de3c9"]]),Ce=h=>(te("data-v-4c8572a7"),h=h(),ae(),h),Ie=Ce(()=>n("div",null,"请输入语音播放文本，文本内容小于500个字(包括标点符号)。",-1)),He={class:"generate-text"},Ne={class:"flex-1"},Ke=M({__name:"digitalHumanEdit",setup(h){const{scrollRef:v,scrollToBottom:m}=ce(),V=X(),c=L(),y=L(),l=H({style:{},textKey:"",formData:{text:"",title:"",speakName:"",isGfpgan:!1},selectedSpeaker:{speakName:"",speakCname:"",headImg:"",speakDemo:"",gender:"",ageGroup:"",subTitle:""},selectedDigitalHuman:{name:"",cname:"",cover:"",video:"",mediaType:""},listSpeaker:[]}),{style:k,formData:o,selectedSpeaker:A}=N(l);ee("provieDigitalHumanEdit",l);const i=H({title:[r=>!!r||"请输入标题"],text:[r=>!!r||"请输入语音播放文本",r=>r.length<=500||"文本内容不能超过500个字"]}),C=async()=>{if(l.textKey){const r={model:"gpt-4-turbo-preview",maxTokens:512,temperature:0,topP:0,messages:[{role:"system",content:"你是一个文案专家，请根据输入的关键词，生成一段优秀的营销文案"},{role:"user",content:l.textKey}]};let s=!1;await $.post({url:"/channels/chat/completions",timeout:300*1e3,data:r,showLoading:"btn#btnGenerateText",onDownloadProgress:f=>{const d=f.target,{responseText:w}=d,B=w.lastIndexOf(`
`,w.length-2);let E=w;B!==-1&&(E=w.substring(B));try{const x=JSON.parse(E);if(x.success){const I=x.data;I&&I.fullContent&&(l.formData.text=I.fullContent,m())}else s||(z.error(x.message||"AI生成文案异常"),s=!0),console.error("AI生成文案异常：",x)}catch{}}})}},b=async()=>{const{valid:r}=await c.value.validate();if(r){const[s,f]=await $.post({url:"/api/digitalhuman/synthesis/create",showSuccess:!0,showLoading:"btn#btnSubmit",data:{...l.formData,dhpName:l.selectedDigitalHuman.name}});f&&V.push("/digital-human/video-list/list")}else{let s="请处理页面标错的地方后，再尝试提交";z.warning(s)}};return j(()=>{v.value=y.value.$el.querySelector("textarea")}),(r,s)=>{const f=P("AiBtn");return u(),g(K,null,[e(ue,{backUrl:"/digital-human/video-list/list"},{default:t(()=>[_("创建视频")]),_:1}),e(T,null,{default:t(()=>[e(p,{cols:"12",md:"6"},{default:t(()=>[e(R,{title1:"人物视频"},{default:t(()=>[e(Te)]),_:1})]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(R,{title:"开始数字人合成"},{default:t(()=>[e(me,{ref_key:"refForm",ref:c,class:"my-form"},{default:t(()=>[e(T,null,{default:t(()=>[e(p,{cols:"12"},{default:t(()=>[e(S,{class:"mb-2 required"},{default:t(()=>[_("标题"),e(se,{class:"ml-2"},{default:t(()=>[_("用于列表展示和搜索，能够快速了解基本信息")]),_:1})]),_:1}),e(U,{density:"compact",variant:"outlined",placeholder:"请输入标题","hide-details":"auto",rules:i.title,modelValue:a(o).title,"onUpdate:modelValue":s[0]||(s[0]=d=>a(o).title=d)},null,8,["rules","modelValue"])]),_:1}),e(p,{cols:"12"},{default:t(()=>[e(S,{class:"mb-2 required",style:{"white-space":"inherit"}},{default:t(()=>[Ie]),_:1}),n("div",He,[e(T,null,{default:t(()=>[e(p,{cols:"12",class:"flex space-x-2"},{default:t(()=>[n("div",Ne,[e(U,{density:"compact",variant:"outlined",placeholder:"请输入关键字","hide-details":"auto",modelValue:l.textKey,"onUpdate:modelValue":s[1]||(s[1]=d=>l.textKey=d),onKeyup:J(C,["enter"]),clearable:""},null,8,["modelValue","onKeyup"])]),e(f,{id:"btnGenerateText",color:"secondary",height:"40",onClick:C,disabled:!l.textKey},{default:t(()=>[_("AI生成文案")]),_:1},8,["disabled"])]),_:1})]),_:1})]),e(pe,{ref_key:"refTextarea",ref:y,modelValue:a(o).text,"onUpdate:modelValue":s[2]||(s[2]=d=>a(o).text=d),modelModifiers:{trim:!0},rules:i.text,placeholder:"请输入语音播放文本",counter:"",rows:"5",maxlength:"500"},null,8,["modelValue","rules"])]),_:1}),e(p,{cols:"12"},{default:t(()=>[e(S,{class:"mb-2 required"},{default:t(()=>[_("是否超分")]),_:1}),e(_e,{modelValue:a(o).isGfpgan,"onUpdate:modelValue":s[3]||(s[3]=d=>a(o).isGfpgan=d),color:"primary","hide-details":"auto"},null,8,["modelValue"])]),_:1}),e(p,{cols:"12"},{default:t(()=>[e(S,{class:"mb-2 required"},{default:t(()=>[_("请选择需要合成的发声人")]),_:1}),e(oe,{modelValue:a(o).speakName,"onUpdate:modelValue":s[4]||(s[4]=d=>a(o).speakName=d)},null,8,["modelValue"])]),_:1}),e(p,{cols:"12",class:"hv-center"},{default:t(()=>[e(f,{id:"btnSubmit",color:"secondary",width:"200",height:"48",size:"large",onClick:b},{default:t(()=>[_("开始合成")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})],64)}}});const We=O(Ke,[["__scopeId","data-v-4c8572a7"]]);export{We as default};
