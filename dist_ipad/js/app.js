(function(){"use strict";var e={3634:function(e,t,o){o(6115);var n=o(6431),a=(o(836),o(7782)),l=(o(6138),o(7987)),i=(o(8146),o(8135)),r=(o(2443),o(1876)),c=(o(9969),o(2527)),u=(o(6542),o(1321)),s=(o(1746),o(909)),f=(o(3089),o(1643)),v=o(9242),d=o(3396),h=o(2268),p=o(7139);const m={key:0,class:"words",ref:"wordRef"},g=["onClick"],w={class:"paints"},C=(0,d._)("div",{class:"slash1"},null,-1),b=(0,d._)("div",{class:"slash2"},null,-1),A=(0,d._)("div",{class:"slash3"},null,-1),k=(0,d._)("div",{class:"slash4"},null,-1),W={class:"text"},_={ref:"paintRef"},I={class:"btns"},x=(0,d._)("img",{src:p,alt:""},null,-1),y=[x],S=(0,d._)("img",{src:p,alt:""},null,-1),D=[S],U={class:"save"},j=(0,d.Uk)("保存图片"),E=(0,d.Uk)("分享图片");function L(e,t,o,n,a,l){const i=(0,d.up)("van-button"),r=(0,d.up)("van-image-preview"),c=(0,d.up)("van-field"),u=(0,d.up)("van-cell-group"),s=(0,d.up)("van-dialog"),f=(0,d.up)("van-cascader"),v=(0,d.up)("van-popup"),p=(0,d.up)("van-picker");return(0,d.wg)(),(0,d.iD)(d.HY,null,[e.words.length>0?((0,d.wg)(),(0,d.iD)("section",m,[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(e.words,((t,o)=>((0,d.wg)(),(0,d.iD)("span",{class:(0,h.C_)(["word",{active:o===e.index}]),key:o,onClick:t=>e.onWord(o)},(0,h.zw)(t),11,g)))),128))],512)):(0,d.kq)("",!0),(0,d._)("section",w,[C,b,A,k,(0,d._)("div",W,(0,h.zw)(e.words[e.index]),1),(0,d._)("canvas",_,null,512)]),(0,d._)("section",I,[(0,d._)("div",{class:"btn last",onClick:t[0]||(t[0]=(...t)=>e.onLast&&e.onLast(...t))},y),(0,d._)("div",{class:"btn",onClick:t[1]||(t[1]=(...t)=>e.onClear&&e.onClear(...t))},"撤销"),(0,d._)("div",{class:"btn next",onClick:t[2]||(t[2]=(...t)=>e.onNext&&e.onNext(...t))},D),(0,d._)("div",{class:"btn",onClick:t[3]||(t[3]=(...t)=>e.onCreateImg&&e.onCreateImg(...t))},"生成图片"),(0,d._)("div",{class:"btn",onClick:t[4]||(t[4]=(...t)=>e.onInputWord&&e.onInputWord(...t))},"录入字帖"),(0,d._)("div",{class:"btn",onClick:t[5]||(t[5]=(...t)=>e.toSelectWord&&e.toSelectWord(...t))},"选择字帖"),(0,d._)("div",{class:"btn",onClick:t[6]||(t[6]=(...t)=>e.toSelectWidth&&e.toSelectWidth(...t))},"毛笔粗细"),(0,d._)("div",{class:"btn",onClick:t[7]||(t[7]=(...t)=>e.toSelectColor&&e.toSelectColor(...t))},"毛笔颜色")]),(0,d.Wm)(r,{show:e.isPreview,"onUpdate:show":t[8]||(t[8]=t=>e.isPreview=t),images:e.previewImgs,showIndex:!1,closeable:!0},{cover:(0,d.w5)((()=>[(0,d._)("div",U,[(0,d.Wm)(i,{onClick:e.saveImgToLocal},{default:(0,d.w5)((()=>[j])),_:1},8,["onClick"]),(0,d.Wm)(i,{type:"primary",style:{"margin-left":"8px"},onClick:e.toShareImg},{default:(0,d.w5)((()=>[E])),_:1},8,["onClick"])])])),_:1},8,["show","images"]),(0,d.Wm)(s,{show:e.isDialog,"onUpdate:show":t[10]||(t[10]=t=>e.isDialog=t),title:"录入字帖","show-cancel-button":"",onConfirm:e.onConfirmInputWord,onCancel:e.onCancelInputWord},{default:(0,d.w5)((()=>[(0,d.Wm)(u,{inset:""},{default:(0,d.w5)((()=>[(0,d.Wm)(c,{modelValue:e.inputValue,"onUpdate:modelValue":t[9]||(t[9]=t=>e.inputValue=t),rows:"1",autosize:"",label:"字帖",type:"textarea",placeholder:"请录入字帖"},null,8,["modelValue"])])),_:1})])),_:1},8,["show","onConfirm","onCancel"]),(0,d.Wm)(v,{show:e.isSelect,"onUpdate:show":t[12]||(t[12]=t=>e.isSelect=t),round:"",position:"bottom"},{default:(0,d.w5)((()=>[(0,d.Wm)(f,{modelValue:e.selectValue,"onUpdate:modelValue":t[11]||(t[11]=t=>e.selectValue=t),title:"请选择字帖",options:e.selectOptions,onClose:e.onCloseSelect,onFinish:e.onSelect},null,8,["modelValue","options","onClose","onFinish"])])),_:1},8,["show"]),(0,d.Wm)(v,{show:e.isWidth,"onUpdate:show":t[13]||(t[13]=t=>e.isWidth=t),round:"",position:"bottom"},{default:(0,d.w5)((()=>[(0,d.Wm)(p,{title:"选择毛笔粗细",columns:e.widthColumns,onConfirm:e.onConfirmWidth},null,8,["columns","onConfirm"])])),_:1},8,["show"]),(0,d.Wm)(v,{show:e.isColor,"onUpdate:show":t[14]||(t[14]=t=>e.isColor=t),round:"",position:"bottom"},{default:(0,d.w5)((()=>[(0,d.Wm)(p,{title:"选择毛笔颜色",columns:e.colorColumns,onConfirm:e.onConfirmColor},null,8,["columns","onConfirm"])])),_:1},8,["show"])],64)}var B=o(4870),H=o(7398),R=o(6154),O=(0,d.aZ)({name:"App",setup(){const e=(0,B.iH)(),t=(0,B.iH)();let o;const n=(0,B.iH)("".split("")),a=(0,B.iH)(0);let l=Array(n.value.length).fill("");const r=(0,B.iH)(!1),c=(0,B.iH)([]),u=(0,B.iH)(!1),s=(0,B.iH)(),f=(0,B.iH)(!1),v=(0,B.iH)(),h=[{text:"李白",value:"1",children:[{text:"早发白帝城",value:"朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。"},{text:"黄鹤楼送孟浩然之广陵",value:"故人西辞黄鹤楼，烟花三月下扬州。孤帆远影碧空尽，唯见长江天际流。"},{text:"静夜思",value:"床前明月光，疑是地上霜。举头望明月，低头思故乡。"},{text:"赠汪伦",value:"李白乘舟将欲行，忽闻岸上踏歌声。桃花潭水深千尺，不及汪伦送我情"},{text:"望庐山瀑布",value:"日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。"}]},{text:"杜甫",value:"2",children:[{text:"望岳",value:"岱宗夫如何?齐鲁青未了。造化钟神秀，阴阳割昏晓。荡胸生曾云，决眦入归鸟。会当凌绝顶，一览众山小。"},{text:"绝句",value:"两个黄鹂鸣翠柳，一行白鹭上青天。窗含西岭千秋雪，门泊东吴万里船。"},{text:"春夜喜雨",value:"好雨知时节，当春乃发生。随风潜入夜，润物细无声。"}]}];function p(){f.value=!1,n.value=v.value.split(""),a.value=0,l=Array(n.value.length).fill(""),v.value="",k()}function m(){f.value=!0}function g(){f.value=!0}function w(){const e=Math.max(window.devicePixelRatio||1,1);t.value.width=t.value.offsetWidth*e,t.value.height=t.value.offsetHeight*e,t.value.getContext("2d")?.scale(e,e),o.clear()}function C(e){e!==a.value&&(_(),k(),a.value=e)}function b(){_(),a.value>0&&(a.value--,k(),e.value&&(e.value.scrollLeft=e.value.scrollLeft-48))}function A(){_(),a.value<n.value.length-1&&(a.value++,k(),e.value&&(e.value.scrollLeft=e.value.scrollLeft+48))}function k(){o.clear()}function W(){_();let e=n.value.length;const t=document.createElement("canvas");t.width=200*(e>=8?8:e),t.height=200*Math.ceil(e/8);const o=t.getContext("2d");o.fillStyle="#fff",o.fillRect(0,0,t.width,t.height);for(let n=0;n<l.length;n++){const a=l[n];if(a){const l=new Image;l.onload=function(){o.drawImage(l,n%8*200,200*Math.floor(n/8),200,200),e--,0===e&&(r.value=!0,c.value=[t.toDataURL()])},l.src=a}else e--,0===e&&(r.value=!0,c.value=[t.toDataURL()])}}function _(){o.isEmpty()||(l[a.value]=o.toDataURL())}function I(){u.value=!0}function x(){if(!s.value)return(0,i.Z)("请录入字帖"),!1;u.value=!1,n.value=s.value.split(""),a.value=0,l=Array(n.value.length).fill(""),s.value="",k()}function y(){s.value=""}(0,d.bv)((()=>{o=new H.Z(t.value,{minWidth:6,maxWidth:16}),w(),window.onresize=()=>w()}));const S=[2,4,6,8,10],D=(0,B.iH)(!1);function U(){D.value=!0}function j(e){D.value=!1,o.minWidth=e,o.maxWidth=e+10}const E=["黑色","红色","绿色","蓝色"],L=(0,B.iH)(!1);function O(){L.value=!0}function Z(e){L.value=!1,o.penColor={"黑色":"#00","红色":"#f00","绿色":"#0f0","蓝色":"#00f"}[e]||"#00"}function V(){R.saveAs(c.value[0],`linmo-${+new Date}.png`)}function N(){console.log(11);let e=["og:url","https://tianma630.com/linmo/dist/index.html","og:title","临摹","og:image","https://img.zcool.cn/community/01bc7b56000a516ac7251df8ded6a4.JPG@1280w_1l_2o_100sh.jpg","og:type","website"];window.open("http://www.facebook.com/sharer.php?u="+encodeURIComponent(`http://java.chendahai.cn/share/new?meta=${e.toString()}`))}return{wordRef:e,paintRef:t,words:n,index:a,onWord:C,onLast:b,onNext:A,onClear:k,onCreateImg:W,isPreview:r,previewImgs:c,onInputWord:I,isDialog:u,inputValue:s,onConfirmInputWord:x,onCancelInputWord:y,isSelect:f,selectValue:v,selectOptions:h,toSelectWord:g,onSelect:p,onCloseSelect:m,widthColumns:S,isWidth:D,toSelectWidth:U,onConfirmWidth:j,colorColumns:E,isColor:L,toSelectColor:O,onConfirmColor:Z,saveImgToLocal:V,toShareImg:N}}}),Z=o(89);const V=(0,Z.Z)(O,[["render",L]]);var N=V,z=o(678);const P={class:"home"};function Q(e,t,o,n,a,l){const i=(0,d.up)("HelloWorld");return(0,d.wg)(),(0,d.iD)("div",P,[(0,d.Wm)(i,{msg:"Welcome to Your Vue.js + TypeScript App"})])}const F={class:"hello"},Y=(0,d.uE)('<p data-v-4fcf9f3c> For a guide and recipes on how to configure / customize this project,<br data-v-4fcf9f3c> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-4fcf9f3c>vue-cli documentation</a>. </p><h3 data-v-4fcf9f3c>Installed CLI Plugins</h3><ul data-v-4fcf9f3c><li data-v-4fcf9f3c><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-4fcf9f3c>babel</a></li><li data-v-4fcf9f3c><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-4fcf9f3c>router</a></li><li data-v-4fcf9f3c><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-4fcf9f3c>eslint</a></li><li data-v-4fcf9f3c><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener" data-v-4fcf9f3c>typescript</a></li></ul><h3 data-v-4fcf9f3c>Essential Links</h3><ul data-v-4fcf9f3c><li data-v-4fcf9f3c><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-4fcf9f3c>Core Docs</a></li><li data-v-4fcf9f3c><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-4fcf9f3c>Forum</a></li><li data-v-4fcf9f3c><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-4fcf9f3c>Community Chat</a></li><li data-v-4fcf9f3c><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-4fcf9f3c>Twitter</a></li><li data-v-4fcf9f3c><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-4fcf9f3c>News</a></li></ul><h3 data-v-4fcf9f3c>Ecosystem</h3><ul data-v-4fcf9f3c><li data-v-4fcf9f3c><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-4fcf9f3c>vue-router</a></li><li data-v-4fcf9f3c><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-4fcf9f3c>vuex</a></li><li data-v-4fcf9f3c><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-4fcf9f3c>vue-devtools</a></li><li data-v-4fcf9f3c><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-4fcf9f3c>vue-loader</a></li><li data-v-4fcf9f3c><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-4fcf9f3c>awesome-vue</a></li></ul>',7);function T(e,t,o,n,a,l){return(0,d.wg)(),(0,d.iD)("div",F,[(0,d._)("h1",null,(0,h.zw)(e.msg),1),Y])}var M=(0,d.aZ)({name:"HelloWorld",props:{msg:String}});const K=(0,Z.Z)(M,[["render",T],["__scopeId","data-v-4fcf9f3c"]]);var X=K,G=(0,d.aZ)({name:"HomeView",components:{HelloWorld:X}});const J=(0,Z.Z)(G,[["render",Q]]);var q=J;const $=[{path:"/",name:"home",component:q},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,4335))}],ee=(0,z.p7)({history:(0,z.PO)("/linmo/dist/"),routes:$});var te=ee;const oe=[f.Z,s.Z,u.Z,c.Z,r.Z,i.Z,l.Z,a.Z,n.Z],ne=(0,v.ri)(N);oe.map((e=>ne.use(e))),ne.use(te).mount("#app")},7139:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAlNJREFUeF7t2d1KHDEUB/Bz8krtvRv2FYoKUhBBCkIRBCkIUi0IKggiCCJIoQilta+QnN17+z5eJTJg6TDsRz7OJCxz9soFN5n/b85kcmYQBv7BgecHAZAKGLiAXAIDLwBZBKtdAsaYE6XUh6YCnXN/xuPxSY1qrAZARAQAo7fQE621HhqAbwfWWlc5GVUmbYITkQBIBbQE5BKQNUAWwSoLcpVJ5S4gt0HZB8hGSHaCshWWXkCaIWmGpBn6LyDdoHSD0g1WacyqTLqS3WDrOf4LIl6MRqOnnMfY3Fvh1PcMwRXQeY4PiLieg8AJYK09RsRvrRMS/J4hBuAZAN61z3oOAheAtfYIEc861fhXa/0+pEKDAd5K7Gt30FQEDgAi+gIA591jcs6dhr5qCwZoJuFEyAWw1h4i4mVO+Oa3UQCcCDkA1toDRLzKDZ8EwIWQCkBE+wBwzRE+GYADIQXAGPNZKXXDFT4LIBchFsBau4eIt5zhswFyEGIAiOgTANxxh2cBSEUIBTDG7Cql7vsIzwaQghACMJ1Od5xzD32FZwWIRVgGQETbAPC9z/DsADEIiwAmk8lH7/2PvsP3AhCKMA+AiLYA4LFE+N4AQhBmARDRJgD8LBW+V4BlCN773+2g3vsNRPxVMnzvAIsQukFnfY/p6kLGm/U/0c1QykTzushFY5UIX6QC/oWMQSgVvihA6OVQMnxxgGUIpcNXAZiHUCN8NYAWwlrzt3NuGvoML2URXvSbIncB7oPmHE8AODVXcSypgFU8a5zHLBXAqbmKYw2+Al4BLW++UEV5gMUAAAAASUVORK5CYII="}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,l){if(!n){var i=1/0;for(s=0;s<e.length;s++){n=e[s][0],a=e[s][1],l=e[s][2];for(var r=!0,c=0;c<n.length;c++)(!1&l||i>=l)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(r=!1,l<i&&(i=l));if(r){e.splice(s--,1);var u=a();void 0!==u&&(t=u)}}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[n,a,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="linmo:";o.l=function(n,a,l,i){if(e[n])e[n].push(a);else{var r,c;if(void 0!==l)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==t+l){r=f;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,o.nc&&r.setAttribute("nonce",o.nc),r.setAttribute("data-webpack",t+l),r.src=n),e[n]=[a];var v=function(t,o){r.onerror=r.onload=null,clearTimeout(d);var a=e[n];if(delete e[n],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(e){return e(o)})),t)return t(o)},d=setTimeout(v.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=v.bind(null,r.onerror),r.onload=v.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/linmo/dist/"}(),function(){var e={143:0};o.f.j=function(t,n){var a=o.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var l=new Promise((function(o,n){a=e[t]=[o,n]}));n.push(a[2]=l);var i=o.p+o.u(t),r=new Error,c=function(n){if(o.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var l=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;r.message="Loading chunk "+t+" failed.\n("+l+": "+i+")",r.name="ChunkLoadError",r.type=l,r.request=i,a[1](r)}};o.l(i,c,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,l,i=n[0],r=n[1],c=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in r)o.o(r,a)&&(o.m[a]=r[a]);if(c)var s=c(o)}for(t&&t(n);u<i.length;u++)l=i[u],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(s)},n=self["webpackChunklinmo"]=self["webpackChunklinmo"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(3634)}));n=o.O(n)})();
//# sourceMappingURL=app.js.map