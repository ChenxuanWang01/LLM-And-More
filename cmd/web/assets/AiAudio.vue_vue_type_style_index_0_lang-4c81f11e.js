import{a3 as z}from"./index-a319b856.js";import{d as I,r as H,x as V,z as j,y as F,U,S as q,k as T,Z as R,Q as G,n as N,j as X,m as Y,W as _,$ as Q,Y as A,a0 as Z}from"./utils-b5033829.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function v(c,t,e,i){return new(e||(e=Promise))(function(s,n){function o(l){try{h(i.next(l))}catch(r){n(r)}}function a(l){try{h(i.throw(l))}catch(r){n(r)}}function h(l){var r;l.done?s(l.value):(r=l.value,r instanceof e?r:new e(function(p){p(r)})).then(o,a)}h((i=i.apply(c,t||[])).next())})}class P{constructor(){this.listeners={}}on(t,e,i){if(this.listeners[t]||(this.listeners[t]=new Set),this.listeners[t].add(e),i==null?void 0:i.once){const s=()=>{this.un(t,s),this.un(t,e)};return this.on(t,s),s}return()=>this.un(t,e)}un(t,e){var i;(i=this.listeners[t])===null||i===void 0||i.delete(e)}once(t,e){return this.on(t,e,{once:!0})}unAll(){this.listeners={}}emit(t,...e){this.listeners[t]&&this.listeners[t].forEach(i=>i(...e))}}const O={decode:function(c,t){return v(this,void 0,void 0,function*(){const e=new AudioContext({sampleRate:t});return e.decodeAudioData(c).finally(()=>e.close())})},createBuffer:function(c,t){return typeof c[0]=="number"&&(c=[c]),function(e){const i=e[0];if(i.some(s=>s>1||s<-1)){const s=i.length;let n=0;for(let o=0;o<s;o++){const a=Math.abs(i[o]);a>n&&(n=a)}for(const o of e)for(let a=0;a<s;a++)o[a]/=n}}(c),{duration:t,length:c[0].length,sampleRate:c[0].length/t,numberOfChannels:c.length,getChannelData:e=>c==null?void 0:c[e],copyFromChannel:AudioBuffer.prototype.copyFromChannel,copyToChannel:AudioBuffer.prototype.copyToChannel}}};function $(c,t){const e=t.xmlns?document.createElementNS(t.xmlns,c):document.createElement(c);for(const[i,s]of Object.entries(t))if(i==="children")for(const[n,o]of Object.entries(t))typeof o=="string"?e.appendChild(document.createTextNode(o)):e.appendChild($(n,o));else i==="style"?Object.assign(e.style,s):i==="textContent"?e.textContent=s:e.setAttribute(i,s.toString());return e}function B(c,t,e){const i=$(c,t||{});return e==null||e.appendChild(i),i}var J=Object.freeze({__proto__:null,createElement:B,default:B});const K={fetchBlob:function(c,t,e){return v(this,void 0,void 0,function*(){const i=yield fetch(c,e);if(i.status>=400)throw new Error(`Failed to fetch ${c}: ${i.status} (${i.statusText})`);return function(s,n){v(this,void 0,void 0,function*(){if(!s.body||!s.headers)return;const o=s.body.getReader(),a=Number(s.headers.get("Content-Length"))||0;let h=0;const l=p=>v(this,void 0,void 0,function*(){h+=(p==null?void 0:p.length)||0;const d=Math.round(h/a*100);n(d)}),r=()=>v(this,void 0,void 0,function*(){let p;try{p=yield o.read()}catch{return}p.done||(l(p.value),yield r())});r()})}(i.clone(),t),i.blob()})}};class tt extends P{constructor(t){super(),this.isExternalMedia=!1,t.media?(this.media=t.media,this.isExternalMedia=!0):this.media=document.createElement("audio"),t.mediaControls&&(this.media.controls=!0),t.autoplay&&(this.media.autoplay=!0),t.playbackRate!=null&&this.onceMediaEvent("canplay",()=>{t.playbackRate!=null&&(this.media.playbackRate=t.playbackRate)})}onMediaEvent(t,e,i){return this.media.addEventListener(t,e,i),()=>this.media.removeEventListener(t,e)}onceMediaEvent(t,e){return this.onMediaEvent(t,e,{once:!0})}getSrc(){return this.media.currentSrc||this.media.src||""}revokeSrc(){const t=this.getSrc();t.startsWith("blob:")&&URL.revokeObjectURL(t)}canPlayType(t){return this.media.canPlayType(t)!==""}setSrc(t,e){if(this.getSrc()===t)return;this.revokeSrc();const i=e instanceof Blob&&this.canPlayType(e.type)?URL.createObjectURL(e):t;this.media.src=i}destroy(){this.media.pause(),this.isExternalMedia||(this.media.remove(),this.revokeSrc(),this.media.src="",this.media.load())}setMediaElement(t){this.media=t}play(){return v(this,void 0,void 0,function*(){if(this.media.src)return this.media.play()})}pause(){this.media.pause()}isPlaying(){return!this.media.paused&&!this.media.ended}setTime(t){this.media.currentTime=t}getDuration(){return this.media.duration}getCurrentTime(){return this.media.currentTime}getVolume(){return this.media.volume}setVolume(t){this.media.volume=t}getMuted(){return this.media.muted}setMuted(t){this.media.muted=t}getPlaybackRate(){return this.media.playbackRate}isSeeking(){return this.media.seeking}setPlaybackRate(t,e){e!=null&&(this.media.preservesPitch=e),this.media.playbackRate=t}getMediaElement(){return this.media}setSinkId(t){return this.media.setSinkId(t)}}class W extends P{constructor(t,e){super(),this.timeouts=[],this.isScrollable=!1,this.audioData=null,this.resizeObserver=null,this.lastContainerWidth=0,this.isDragging=!1,this.options=t;const i=this.parentFromOptionsContainer(t.container);this.parent=i;const[s,n]=this.initHtml();i.appendChild(s),this.container=s,this.scrollContainer=n.querySelector(".scroll"),this.wrapper=n.querySelector(".wrapper"),this.canvasWrapper=n.querySelector(".canvases"),this.progressWrapper=n.querySelector(".progress"),this.cursor=n.querySelector(".cursor"),e&&n.appendChild(e),this.initEvents()}parentFromOptionsContainer(t){let e;if(typeof t=="string"?e=document.querySelector(t):t instanceof HTMLElement&&(e=t),!e)throw new Error("Container not found");return e}initEvents(){const t=i=>{const s=this.wrapper.getBoundingClientRect(),n=i.clientX-s.left,o=i.clientX-s.left;return[n/s.width,o/s.height]};this.wrapper.addEventListener("click",i=>{const[s,n]=t(i);this.emit("click",s,n)}),this.wrapper.addEventListener("dblclick",i=>{const[s,n]=t(i);this.emit("dblclick",s,n)}),this.options.dragToSeek&&this.initDrag(),this.scrollContainer.addEventListener("scroll",()=>{const{scrollLeft:i,scrollWidth:s,clientWidth:n}=this.scrollContainer,o=i/s,a=(i+n)/s;this.emit("scroll",o,a)});const e=this.createDelay(100);this.resizeObserver=new ResizeObserver(()=>{e().then(()=>this.onContainerResize()).catch(()=>{})}),this.resizeObserver.observe(this.scrollContainer)}onContainerResize(){const t=this.parent.clientWidth;t===this.lastContainerWidth&&this.options.height!=="auto"||(this.lastContainerWidth=t,this.reRender())}initDrag(){(function(t,e,i,s,n=3,o=0){if(!t)return()=>{};let a=()=>{};const h=l=>{if(l.button!==o)return;l.preventDefault(),l.stopPropagation();let r=l.clientX,p=l.clientY,d=!1;const m=u=>{u.preventDefault(),u.stopPropagation();const w=u.clientX,C=u.clientY,x=w-r,E=C-p;if(d||Math.abs(x)>n||Math.abs(E)>n){const M=t.getBoundingClientRect(),{left:S,top:D}=M;d||(i==null||i(r-S,p-D),d=!0),e(x,E,w-S,C-D),r=w,p=C}},f=()=>{d&&(s==null||s()),a()},y=u=>{u.relatedTarget&&u.relatedTarget!==document.documentElement||f()},b=u=>{d&&(u.stopPropagation(),u.preventDefault())},g=u=>{d&&u.preventDefault()};document.addEventListener("pointermove",m),document.addEventListener("pointerup",f),document.addEventListener("pointerout",y),document.addEventListener("pointercancel",y),document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("click",b,{capture:!0}),a=()=>{document.removeEventListener("pointermove",m),document.removeEventListener("pointerup",f),document.removeEventListener("pointerout",y),document.removeEventListener("pointercancel",y),document.removeEventListener("touchmove",g),setTimeout(()=>{document.removeEventListener("click",b,{capture:!0})},10)}};t.addEventListener("pointerdown",h)})(this.wrapper,(t,e,i)=>{this.emit("drag",Math.max(0,Math.min(1,i/this.wrapper.getBoundingClientRect().width)))},()=>this.isDragging=!0,()=>this.isDragging=!1)}getHeight(t){return t==null?128:isNaN(Number(t))?t==="auto"&&this.parent.clientHeight||128:Number(t)}initHtml(){const t=document.createElement("div"),e=t.attachShadow({mode:"open"});return e.innerHTML=`
      <style>
        :host {
          user-select: none;
          min-width: 1px;
        }
        :host audio {
          display: block;
          width: 100%;
        }
        :host .scroll {
          overflow-x: auto;
          overflow-y: hidden;
          width: 100%;
          position: relative;
        }
        :host .noScrollbar {
          scrollbar-color: transparent;
          scrollbar-width: none;
        }
        :host .noScrollbar::-webkit-scrollbar {
          display: none;
          -webkit-appearance: none;
        }
        :host .wrapper {
          position: relative;
          overflow: visible;
          z-index: 2;
        }
        :host .canvases {
          min-height: ${this.getHeight(this.options.height)}px;
        }
        :host .canvases > div {
          position: relative;
        }
        :host canvas {
          display: block;
          position: absolute;
          top: 0;
          image-rendering: pixelated;
        }
        :host .progress {
          pointer-events: none;
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          overflow: hidden;
        }
        :host .progress > div {
          position: relative;
        }
        :host .cursor {
          pointer-events: none;
          position: absolute;
          z-index: 5;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 2px;
        }
      </style>

      <div class="scroll" part="scroll">
        <div class="wrapper" part="wrapper">
          <div class="canvases"></div>
          <div class="progress" part="progress"></div>
          <div class="cursor" part="cursor"></div>
        </div>
      </div>
    `,[t,e]}setOptions(t){if(this.options.container!==t.container){const e=this.parentFromOptionsContainer(t.container);e.appendChild(this.container),this.parent=e}t.dragToSeek&&!this.options.dragToSeek&&this.initDrag(),this.options=t,this.reRender()}getWrapper(){return this.wrapper}getScroll(){return this.scrollContainer.scrollLeft}destroy(){var t;this.container.remove(),(t=this.resizeObserver)===null||t===void 0||t.disconnect()}createDelay(t=10){let e,i;const s=()=>{e&&clearTimeout(e),i&&i()};return this.timeouts.push(s),()=>new Promise((n,o)=>{s(),i=o,e=setTimeout(()=>{e=void 0,i=void 0,n()},t)})}convertColorValues(t){if(!Array.isArray(t))return t||"";if(t.length<2)return t[0]||"";const e=document.createElement("canvas"),i=e.getContext("2d"),s=e.height*(window.devicePixelRatio||1),n=i.createLinearGradient(0,0,0,s),o=1/(t.length-1);return t.forEach((a,h)=>{const l=h*o;n.addColorStop(l,a)}),n}renderBarWaveform(t,e,i,s){const n=t[0],o=t[1]||t[0],a=n.length,{width:h,height:l}=i.canvas,r=l/2,p=window.devicePixelRatio||1,d=e.barWidth?e.barWidth*p:1,m=e.barGap?e.barGap*p:e.barWidth?d/2:0,f=e.barRadius||0,y=h/(d+m)/a,b=f&&"roundRect"in i?"roundRect":"rect";i.beginPath();let g=0,u=0,w=0;for(let C=0;C<=a;C++){const x=Math.round(C*y);if(x>g){const S=Math.round(u*r*s),D=S+Math.round(w*r*s)||1;let L=r-S;e.barAlign==="top"?L=0:e.barAlign==="bottom"&&(L=l-D),i[b](g*(d+m),L,d,D,f),g=x,u=0,w=0}const E=Math.abs(n[C]||0),M=Math.abs(o[C]||0);E>u&&(u=E),M>w&&(w=M)}i.fill(),i.closePath()}renderLineWaveform(t,e,i,s){const n=o=>{const a=t[o]||t[0],h=a.length,{height:l}=i.canvas,r=l/2,p=i.canvas.width/h;i.moveTo(0,r);let d=0,m=0;for(let f=0;f<=h;f++){const y=Math.round(f*p);if(y>d){const g=r+(Math.round(m*r*s)||1)*(o===0?-1:1);i.lineTo(d,g),d=y,m=0}const b=Math.abs(a[f]||0);b>m&&(m=b)}i.lineTo(d,r)};i.beginPath(),n(0),n(1),i.fill(),i.closePath()}renderWaveform(t,e,i){if(i.fillStyle=this.convertColorValues(e.waveColor),e.renderFunction)return void e.renderFunction(t,i);let s=e.barHeight||1;if(e.normalize){const n=Array.from(t[0]).reduce((o,a)=>Math.max(o,Math.abs(a)),0);s=n?1/n:1}e.barWidth||e.barGap||e.barAlign?this.renderBarWaveform(t,e,i,s):this.renderLineWaveform(t,e,i,s)}renderSingleCanvas(t,e,i,s,n,o,a,h){const l=window.devicePixelRatio||1,r=document.createElement("canvas"),p=t[0].length;r.width=Math.round(i*(o-n)/p),r.height=s*l,r.style.width=`${Math.floor(r.width/l)}px`,r.style.height=`${s}px`,r.style.left=`${Math.floor(n*i/l/p)}px`,a.appendChild(r);const d=r.getContext("2d");if(this.renderWaveform(t.map(m=>m.slice(n,o)),e,d),r.width>0&&r.height>0){const m=r.cloneNode(),f=m.getContext("2d");f.drawImage(r,0,0),f.globalCompositeOperation="source-in",f.fillStyle=this.convertColorValues(e.progressColor),f.fillRect(0,0,r.width,r.height),h.appendChild(m)}}renderChannel(t,e,i){return v(this,void 0,void 0,function*(){const s=document.createElement("div"),n=this.getHeight(e.height);s.style.height=`${n}px`,this.canvasWrapper.style.minHeight=`${n}px`,this.canvasWrapper.appendChild(s);const o=s.cloneNode();this.progressWrapper.appendChild(o);const a=t[0].length,h=(g,u)=>{this.renderSingleCanvas(t,e,i,n,Math.max(0,g),Math.min(u,a),s,o)};if(!this.isScrollable)return void h(0,a);const{scrollLeft:l,scrollWidth:r,clientWidth:p}=this.scrollContainer,d=a/r;let m=Math.min(W.MAX_CANVAS_WIDTH,p);if(e.barWidth||e.barGap){const g=e.barWidth||.5,u=g+(e.barGap||g/2);m%u!=0&&(m=Math.floor(m/u)*u)}const f=Math.floor(Math.abs(l)*d),y=Math.floor(f+m*d),b=y-f;h(f,y),yield Promise.all([(()=>v(this,void 0,void 0,function*(){if(f===0)return;const g=this.createDelay();for(let u=f;u>=0;u-=b)yield g(),h(Math.max(0,u-b),u)}))(),(()=>v(this,void 0,void 0,function*(){if(y===a)return;const g=this.createDelay();for(let u=y;u<a;u+=b)yield g(),h(u,Math.min(a,u+b))}))()])})}render(t){return v(this,void 0,void 0,function*(){this.timeouts.forEach(a=>a()),this.timeouts=[],this.canvasWrapper.innerHTML="",this.progressWrapper.innerHTML="",this.options.width!=null&&(this.scrollContainer.style.width=typeof this.options.width=="number"?`${this.options.width}px`:this.options.width);const e=window.devicePixelRatio||1,i=this.scrollContainer.clientWidth,s=Math.ceil(t.duration*(this.options.minPxPerSec||0));this.isScrollable=s>i;const n=this.options.fillParent&&!this.isScrollable,o=(n?i:s)*e;this.wrapper.style.width=n?"100%":`${s}px`,this.scrollContainer.style.overflowX=this.isScrollable?"auto":"hidden",this.scrollContainer.classList.toggle("noScrollbar",!!this.options.hideScrollbar),this.cursor.style.backgroundColor=`${this.options.cursorColor||this.options.progressColor}`,this.cursor.style.width=`${this.options.cursorWidth}px`,this.audioData=t,this.emit("render");try{if(this.options.splitChannels)yield Promise.all(Array.from({length:t.numberOfChannels}).map((a,h)=>{var l;const r=Object.assign(Object.assign({},this.options),(l=this.options.splitChannels)===null||l===void 0?void 0:l[h]);return this.renderChannel([t.getChannelData(h)],r,o)}));else{const a=[t.getChannelData(0)];t.numberOfChannels>1&&a.push(t.getChannelData(1)),yield this.renderChannel(a,this.options,o)}}catch{return}this.emit("rendered")})}reRender(){if(!this.audioData)return;const{scrollWidth:t}=this.scrollContainer,e=this.progressWrapper.clientWidth;if(this.render(this.audioData),this.isScrollable&&t!==this.scrollContainer.scrollWidth){const i=this.progressWrapper.clientWidth;this.scrollContainer.scrollLeft+=i-e}}zoom(t){this.options.minPxPerSec=t,this.reRender()}scrollIntoView(t,e=!1){const{scrollLeft:i,scrollWidth:s,clientWidth:n}=this.scrollContainer,o=t*s,a=i,h=i+n,l=n/2;if(this.isDragging)o+30>h?this.scrollContainer.scrollLeft+=30:o-30<a&&(this.scrollContainer.scrollLeft-=30);else{(o<a||o>h)&&(this.scrollContainer.scrollLeft=o-(this.options.autoCenter?l:0));const r=o-i-l;e&&this.options.autoCenter&&r>0&&(this.scrollContainer.scrollLeft+=Math.min(r,10))}{const r=this.scrollContainer.scrollLeft,p=r/s,d=(r+n)/s;this.emit("scroll",p,d)}}renderProgress(t,e){if(isNaN(t))return;const i=100*t;this.canvasWrapper.style.clipPath=`polygon(${i}% 0, 100% 0, 100% 100%, ${i}% 100%)`,this.progressWrapper.style.width=`${i}%`,this.cursor.style.left=`${i}%`,this.cursor.style.transform=`translateX(-${Math.round(i)===100?this.options.cursorWidth:0}px)`,this.isScrollable&&this.options.autoScroll&&this.scrollIntoView(t,e)}exportImage(t,e,i){return v(this,void 0,void 0,function*(){const s=this.canvasWrapper.querySelectorAll("canvas");if(!s.length)throw new Error("No waveform data");if(i==="dataURL"){const n=Array.from(s).map(o=>o.toDataURL(t,e));return Promise.resolve(n)}return Promise.all(Array.from(s).map(n=>new Promise((o,a)=>{n.toBlob(h=>{h?o(h):a(new Error("Could not export image"))},t,e)})))})}}W.MAX_CANVAS_WIDTH=4e3;class et extends P{constructor(){super(...arguments),this.unsubscribe=()=>{}}start(){this.unsubscribe=this.on("tick",()=>{requestAnimationFrame(()=>{this.emit("tick")})}),this.emit("tick")}stop(){this.unsubscribe()}destroy(){this.unsubscribe()}}class it extends P{constructor(t=new AudioContext){super(),this.bufferNode=null,this.autoplay=!1,this.playStartTime=0,this.playedDuration=0,this._muted=!1,this.buffer=null,this.currentSrc="",this.paused=!0,this.crossOrigin=null,this.addEventListener=this.on,this.removeEventListener=this.un,this.audioContext=t,this.gainNode=this.audioContext.createGain(),this.gainNode.connect(this.audioContext.destination)}load(){return v(this,void 0,void 0,function*(){})}get src(){return this.currentSrc}set src(t){if(this.currentSrc=t,!t)return this.buffer=null,void this.emit("emptied");fetch(t).then(e=>e.arrayBuffer()).then(e=>this.currentSrc!==t?null:this.audioContext.decodeAudioData(e)).then(e=>{this.currentSrc===t&&(this.buffer=e,this.emit("loadedmetadata"),this.emit("canplay"),this.autoplay&&this.play())})}_play(){var t;this.paused&&(this.paused=!1,(t=this.bufferNode)===null||t===void 0||t.disconnect(),this.bufferNode=this.audioContext.createBufferSource(),this.bufferNode.buffer=this.buffer,this.bufferNode.connect(this.gainNode),this.playedDuration>=this.duration&&(this.playedDuration=0),this.bufferNode.start(this.audioContext.currentTime,this.playedDuration),this.playStartTime=this.audioContext.currentTime,this.bufferNode.onended=()=>{this.currentTime>=this.duration&&(this.pause(),this.emit("ended"))})}_pause(){var t;this.paused||(this.paused=!0,(t=this.bufferNode)===null||t===void 0||t.stop(),this.playedDuration+=this.audioContext.currentTime-this.playStartTime)}play(){return v(this,void 0,void 0,function*(){this._play(),this.emit("play")})}pause(){this._pause(),this.emit("pause")}stopAt(t){var e,i;const s=t-this.currentTime;(e=this.bufferNode)===null||e===void 0||e.stop(this.audioContext.currentTime+s),(i=this.bufferNode)===null||i===void 0||i.addEventListener("ended",()=>{this.bufferNode=null,this.pause()},{once:!0})}setSinkId(t){return v(this,void 0,void 0,function*(){return this.audioContext.setSinkId(t)})}get playbackRate(){var t,e;return(e=(t=this.bufferNode)===null||t===void 0?void 0:t.playbackRate.value)!==null&&e!==void 0?e:1}set playbackRate(t){this.bufferNode&&(this.bufferNode.playbackRate.value=t)}get currentTime(){return this.paused?this.playedDuration:this.playedDuration+this.audioContext.currentTime-this.playStartTime}set currentTime(t){this.emit("seeking"),this.paused?this.playedDuration=t:(this._pause(),this.playedDuration=t,this._play()),this.emit("timeupdate")}get duration(){var t;return((t=this.buffer)===null||t===void 0?void 0:t.duration)||0}get volume(){return this.gainNode.gain.value}set volume(t){this.gainNode.gain.value=t,this.emit("volumechange")}get muted(){return this._muted}set muted(t){this._muted!==t&&(this._muted=t,this._muted?this.gainNode.disconnect():this.gainNode.connect(this.audioContext.destination))}canPlayType(t){return/^(audio|video)\//.test(t)}getGainNode(){return this.gainNode}getChannelData(){const t=[];if(!this.buffer)return t;const e=this.buffer.numberOfChannels;for(let i=0;i<e;i++)t.push(this.buffer.getChannelData(i));return t}}const st={waveColor:"#999",progressColor:"#555",cursorWidth:1,minPxPerSec:0,fillParent:!0,interact:!0,dragToSeek:!1,autoScroll:!0,autoCenter:!0,sampleRate:8e3};class k extends tt{static create(t){return new k(t)}constructor(t){const e=t.media||(t.backend==="WebAudio"?new it:void 0);super({media:e,mediaControls:t.mediaControls,autoplay:t.autoplay,playbackRate:t.audioRate}),this.plugins=[],this.decodedData=null,this.subscriptions=[],this.mediaSubscriptions=[],this.options=Object.assign({},st,t),this.timer=new et;const i=e?void 0:this.getMediaElement();this.renderer=new W(this.options,i),this.initPlayerEvents(),this.initRendererEvents(),this.initTimerEvents(),this.initPlugins(),Promise.resolve().then(()=>{this.emit("init");const s=this.options.url||this.getSrc()||"";(s||this.options.peaks&&this.options.duration)&&this.load(s,this.options.peaks,this.options.duration)})}updateProgress(t=this.getCurrentTime()){return this.renderer.renderProgress(t/this.getDuration(),this.isPlaying()),t}initTimerEvents(){this.subscriptions.push(this.timer.on("tick",()=>{if(!this.isSeeking()){const t=this.updateProgress();this.emit("timeupdate",t),this.emit("audioprocess",t)}}))}initPlayerEvents(){this.isPlaying()&&(this.emit("play"),this.timer.start()),this.mediaSubscriptions.push(this.onMediaEvent("timeupdate",()=>{const t=this.updateProgress();this.emit("timeupdate",t)}),this.onMediaEvent("play",()=>{this.emit("play"),this.timer.start()}),this.onMediaEvent("pause",()=>{this.emit("pause"),this.timer.stop()}),this.onMediaEvent("emptied",()=>{this.timer.stop()}),this.onMediaEvent("ended",()=>{this.emit("finish")}),this.onMediaEvent("seeking",()=>{this.emit("seeking",this.getCurrentTime())}))}initRendererEvents(){this.subscriptions.push(this.renderer.on("click",(t,e)=>{this.options.interact&&(this.seekTo(t),this.emit("interaction",t*this.getDuration()),this.emit("click",t,e))}),this.renderer.on("dblclick",(t,e)=>{this.emit("dblclick",t,e)}),this.renderer.on("scroll",(t,e)=>{const i=this.getDuration();this.emit("scroll",t*i,e*i)}),this.renderer.on("render",()=>{this.emit("redraw")}),this.renderer.on("rendered",()=>{this.emit("redrawcomplete")}));{let t;this.subscriptions.push(this.renderer.on("drag",e=>{this.options.interact&&(this.renderer.renderProgress(e),clearTimeout(t),t=setTimeout(()=>{this.seekTo(e)},this.isPlaying()?0:200),this.emit("interaction",e*this.getDuration()),this.emit("drag",e))}))}}initPlugins(){var t;!((t=this.options.plugins)===null||t===void 0)&&t.length&&this.options.plugins.forEach(e=>{this.registerPlugin(e)})}unsubscribePlayerEvents(){this.mediaSubscriptions.forEach(t=>t()),this.mediaSubscriptions=[]}setOptions(t){this.options=Object.assign({},this.options,t),this.renderer.setOptions(this.options),t.audioRate&&this.setPlaybackRate(t.audioRate),t.mediaControls!=null&&(this.getMediaElement().controls=t.mediaControls)}registerPlugin(t){return t._init(this),this.plugins.push(t),this.subscriptions.push(t.once("destroy",()=>{this.plugins=this.plugins.filter(e=>e!==t)})),t}getWrapper(){return this.renderer.getWrapper()}getScroll(){return this.renderer.getScroll()}getActivePlugins(){return this.plugins}loadAudio(t,e,i,s){return v(this,void 0,void 0,function*(){if(this.emit("load",t),!this.options.media&&this.isPlaying()&&this.pause(),this.decodedData=null,!e&&!i){const o=a=>this.emit("loading",a);e=yield K.fetchBlob(t,o,this.options.fetchParams)}this.setSrc(t,e);const n=s||this.getDuration()||(yield new Promise(o=>{this.onceMediaEvent("loadedmetadata",()=>o(this.getDuration()))}));if(i)this.decodedData=O.createBuffer(i,n||0);else if(e){const o=yield e.arrayBuffer();this.decodedData=yield O.decode(o,this.options.sampleRate)}this.decodedData&&(this.emit("decode",this.getDuration()),this.renderer.render(this.decodedData)),this.emit("ready",this.getDuration())})}load(t,e,i){return v(this,void 0,void 0,function*(){yield this.loadAudio(t,void 0,e,i)})}loadBlob(t,e,i){return v(this,void 0,void 0,function*(){yield this.loadAudio("blob",t,e,i)})}zoom(t){if(!this.decodedData)throw new Error("No audio loaded");this.renderer.zoom(t),this.emit("zoom",t)}getDecodedData(){return this.decodedData}exportPeaks({channels:t=2,maxLength:e=8e3,precision:i=1e4}={}){if(!this.decodedData)throw new Error("The audio has not been decoded yet");const s=Math.min(t,this.decodedData.numberOfChannels),n=[];for(let o=0;o<s;o++){const a=this.decodedData.getChannelData(o),h=[],l=Math.round(a.length/e);for(let r=0;r<e;r++){const p=a.slice(r*l,(r+1)*l);let d=0;for(let m=0;m<p.length;m++){const f=p[m];Math.abs(f)>Math.abs(d)&&(d=f)}h.push(Math.round(d*i)/i)}n.push(h)}return n}getDuration(){let t=super.getDuration()||0;return t!==0&&t!==1/0||!this.decodedData||(t=this.decodedData.duration),t}toggleInteraction(t){this.options.interact=t}setTime(t){super.setTime(t),this.updateProgress(t)}seekTo(t){const e=this.getDuration()*t;this.setTime(e)}playPause(){return v(this,void 0,void 0,function*(){return this.isPlaying()?this.pause():this.play()})}stop(){this.pause(),this.setTime(0)}skip(t){this.setTime(this.getCurrentTime()+t)}empty(){this.load("",[[0]],.001)}setMediaElement(t){this.unsubscribePlayerEvents(),super.setMediaElement(t),this.initPlayerEvents()}exportImage(t="image/png",e=1,i="dataURL"){return v(this,void 0,void 0,function*(){return this.renderer.exportImage(t,e,i)})}destroy(){this.emit("destroy"),this.plugins.forEach(t=>t.destroy()),this.subscriptions.forEach(t=>t()),this.unsubscribePlayerEvents(),this.timer.destroy(),this.renderer.destroy(),super.destroy()}}k.BasePlugin=class extends P{constructor(c){super(),this.subscriptions=[],this.options=c}onInit(){}_init(c){this.wavesurfer=c,this.onInit()}destroy(){this.emit("destroy"),this.subscriptions.forEach(c=>c())}},k.dom=J;const nt={class:"compo-aiAudio"},rt=["src"],ot=["element-loading-text"],at={key:0,class:"box-error"},lt={class:"text-info"},ct=I({__name:"AiAudio",props:{src:{default:""},gender:{default:3},type:{default:"simple"},time:{}},setup(c,{expose:t}){const e=H(),i=V({style:{isReadyComplex:!1,classNameComplex:"opacity-0"},formData:{}}),{style:s,formData:n}=j(i),o=c;let a;const h=()=>{let{type:r,gender:p,src:d}=o;if(r=="complex"){z(e.value).html("");let m={1:{waveColor:"#38bdf8",progressColor:"#38bdf850",cursorColor:"#CCC"},2:{waveColor:"#f980e9",progressColor:"#f980e950",cursorColor:"#ccc"},3:{waveColor:"#475569",progressColor:"#47556950",cursorColor:"#ccc"}},{waveColor:f,progressColor:y,cursorColor:b}=m[p];a=k.create({container:e.value,waveColor:f,progressColor:y,cursorColor:b,cursorWidth:3,mediaControls:!0,url:d,autoplay:!1,interact:!0}),d?a.on("ready",()=>{l()}):(i.style.isReadyComplex=!0,l())}},l=()=>{i.style.classNameComplex="w-75 opacity-0",setTimeout(()=>{i.style.classNameComplex="w-100 opacity-0"},100),setTimeout(()=>{i.style.isReadyComplex=!0,i.style.classNameComplex=""},200)};return F(()=>{let{type:r,src:p}=o;(r||p)&&(i.style.classNameComplex="opacity-0",setTimeout(()=>{h()},100))}),t({pause(){a.pause()}}),(r,p)=>{const d=U("el-divider"),m=q("loading");return T(),R("div",nt,[r.type=="simple"?(T(),R("audio",{key:0,style:{"vertical-align":"top"},src:r.src,controls:""}," Your browser does not support the audio element. ",8,rt)):r.type=="complex"?G((T(),R("div",{key:1,class:"aiAudio-complex","element-loading-text":r.$t("aiAudio.loadingText")},[r.src?A("",!0):(T(),R("div",at,[X(d,{class:"tips"},{default:Y(()=>[_("span",lt,Q(r.$t("aiAudio.noUrl")),1)]),_:1})])),_("div",{ref_key:"refBoxComplex",ref:e,class:Z(N(s).classNameComplex)},null,2)],8,ot)),[[m,!N(s).isReadyComplex]]):A("",!0)])}}});export{ct as _};
