(function(){"use strict";var e={8150:function(e,t,n){n(6115);var o=n(6431),a=(n(836),n(7782)),l=(n(6138),n(7987)),i=(n(8146),n(8135)),r=(n(2443),n(1876)),c=(n(9969),n(2527)),u=(n(6542),n(1321)),s=(n(1746),n(909)),f=(n(3089),n(1643)),d=n(9242),v=n(3396),h=n(2268),p=n(7139);const m={key:0,class:"words",ref:"wordRef"},g=["onClick"],w={class:"paints"},C=(0,v._)("div",{class:"slash1"},null,-1),b=(0,v._)("div",{class:"slash2"},null,-1),A=(0,v._)("div",{class:"slash3"},null,-1),k=(0,v._)("div",{class:"slash4"},null,-1),x={ref:"paintRef"},W={class:"btns"},S=(0,v._)("img",{src:p,alt:""},null,-1),_=[S],y=(0,v._)("img",{src:p,alt:""},null,-1),I=[y],U={class:"save"},j=(0,v.Uk)("添加签名"),D=(0,v.Uk)("保存图片"),H=(0,v.Uk)("分享图片");function E(e,t,n,o,a,l){const i=(0,v.up)("van-button"),r=(0,v.up)("van-image-preview"),c=(0,v.up)("van-field"),u=(0,v.up)("van-cell-group"),s=(0,v.up)("van-dialog"),f=(0,v.up)("van-cascader"),d=(0,v.up)("van-popup"),p=(0,v.up)("van-picker");return(0,v.wg)(),(0,v.iD)(v.HY,null,[e.words.length>0?((0,v.wg)(),(0,v.iD)("section",m,[((0,v.wg)(!0),(0,v.iD)(v.HY,null,(0,v.Ko)(e.words,((t,n)=>((0,v.wg)(),(0,v.iD)("span",{class:(0,h.C_)(["word",{writen:e.wordState.writens[n],active:n===e.wordState.index}]),key:n,onClick:t=>e.onWord(n)},(0,h.zw)(t),11,g)))),128))],512)):(0,v.kq)("",!0),(0,v._)("section",w,[C,b,A,k,(0,v._)("div",{class:"text",style:(0,h.j5)({"font-family":e.font})},(0,h.zw)(e.words[e.wordState.index]||" "),5),(0,v._)("canvas",x,null,512)]),(0,v._)("section",W,[(0,v._)("div",{class:"btn last",onClick:t[0]||(t[0]=(...t)=>e.onLast&&e.onLast(...t))},_),(0,v._)("div",{class:"btn",onClick:t[1]||(t[1]=(...t)=>e.onClear&&e.onClear(...t))},"撤销"),(0,v._)("div",{class:"btn next",onClick:t[2]||(t[2]=(...t)=>e.onNext&&e.onNext(...t))},I),(0,v._)("div",{class:"btn",onClick:t[3]||(t[3]=(...t)=>e.toSelectWord&&e.toSelectWord(...t))},"选择字帖"),(0,v._)("div",{class:"btn",onClick:t[4]||(t[4]=(...t)=>e.toSelectFont&&e.toSelectFont(...t))},"切换字体"),(0,v._)("div",{class:"btn",onClick:t[5]||(t[5]=(...t)=>e.toSelectColor&&e.toSelectColor(...t))},"毛笔颜色"),(0,v._)("div",{class:"btn",onClick:t[6]||(t[6]=(...t)=>e.onCreateImg&&e.onCreateImg(...t))},"生成图片")]),(0,v.Wm)(r,{show:e.isPreview,"onUpdate:show":t[7]||(t[7]=t=>e.isPreview=t),images:e.previewImgs,showIndex:!1,closeable:!0},{cover:(0,v.w5)((()=>[(0,v._)("div",U,[(0,v.Wm)(i,{onClick:e.toAddSign},{default:(0,v.w5)((()=>[j])),_:1},8,["onClick"]),(0,v.Wm)(i,{onClick:e.saveImgToLocal,style:{"margin-left":"8px"}},{default:(0,v.w5)((()=>[D])),_:1},8,["onClick"]),(0,v.Wm)(i,{type:"primary",style:{"margin-left":"8px"},onClick:e.toShareImg},{default:(0,v.w5)((()=>[H])),_:1},8,["onClick"])])])),_:1},8,["show","images"]),(0,v.Wm)(s,{show:e.isDialog,"onUpdate:show":t[9]||(t[9]=t=>e.isDialog=t),title:"录入字帖","show-cancel-button":"",onConfirm:e.onConfirmInputWord,onCancel:e.onCancelInputWord},{default:(0,v.w5)((()=>[(0,v.Wm)(u,{inset:""},{default:(0,v.w5)((()=>[(0,v.Wm)(c,{modelValue:e.inputValue,"onUpdate:modelValue":t[8]||(t[8]=t=>e.inputValue=t),rows:"1",autosize:"",label:"字帖",type:"textarea",placeholder:"请录入字帖"},null,8,["modelValue"])])),_:1})])),_:1},8,["show","onConfirm","onCancel"]),(0,v.Wm)(d,{show:e.isSelect,"onUpdate:show":t[11]||(t[11]=t=>e.isSelect=t),round:"",position:"bottom"},{default:(0,v.w5)((()=>[(0,v.Wm)(f,{modelValue:e.selectValue,"onUpdate:modelValue":t[10]||(t[10]=t=>e.selectValue=t),title:"请选择字帖",options:e.selectOptions,onClose:e.onCloseSelect,onFinish:e.onSelect},null,8,["modelValue","options","onClose","onFinish"])])),_:1},8,["show"]),(0,v.Wm)(d,{show:e.isWidth,"onUpdate:show":t[12]||(t[12]=t=>e.isWidth=t),round:"",position:"bottom"},{default:(0,v.w5)((()=>[(0,v.Wm)(p,{title:"选择字体宽度",columns:e.widthColumns,onConfirm:e.onConfirmWidth},null,8,["columns","onConfirm"])])),_:1},8,["show"]),(0,v.Wm)(d,{show:e.isFont,"onUpdate:show":t[13]||(t[13]=t=>e.isFont=t),round:"",position:"bottom"},{default:(0,v.w5)((()=>[(0,v.Wm)(p,{title:"选择字体",columns:e.fontColumns,onConfirm:e.onConfirmFont},null,8,["columns","onConfirm"])])),_:1},8,["show"]),(0,v.Wm)(d,{show:e.isColor,"onUpdate:show":t[14]||(t[14]=t=>e.isColor=t),round:"",position:"bottom"},{default:(0,v.w5)((()=>[(0,v.Wm)(p,{title:"选择毛笔颜色",columns:e.colorColumns,onConfirm:e.onConfirmColor},null,8,["columns","onConfirm"])])),_:1},8,["show"]),(0,v.Wm)(s,{show:e.isSign,"onUpdate:show":t[16]||(t[16]=t=>e.isSign=t),title:"添加签名","show-cancel-button":"",onConfirm:e.onAddSign,onCancel:e.onCancelSign},{default:(0,v.w5)((()=>[(0,v.Wm)(u,{inset:""},{default:(0,v.w5)((()=>[(0,v.Wm)(c,{modelValue:e.signValue,"onUpdate:modelValue":t[15]||(t[15]=t=>e.signValue=t),autosize:"",label:"签名",type:"text",placeholder:"请输入您的姓名"},null,8,["modelValue"])])),_:1})])),_:1},8,["show","onConfirm","onCancel"])],64)}var L=n(4870),V=n(7398),B=n(6154),R=(0,v.aZ)({name:"App",setup(){const e=(0,L.iH)(),t=(0,L.iH)();let n;const o=(0,L.iH)("".split("")),a=(0,L.qj)({index:0,writens:Array(o.value.length).fill(!1)});let l=Array(o.value.length).fill("");const r=(0,L.iH)(!1),c=(0,L.iH)([]),u=(0,L.iH)(!1),s=(0,L.iH)(),f=(0,L.iH)(!1),d=(0,L.iH)(),h=(0,L.iH)([{text:"李白",value:1,children:[{text:"早发白帝城",value:"朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。"},{text:"黄鹤楼送孟浩然之广陵",value:"故人西辞黄鹤楼，烟花三月下扬州。孤帆远影碧空尽，唯见长江天际流。"},{text:"静夜思",value:"床前明月光，疑是地上霜。举头望明月，低头思故乡。"},{text:"赠汪伦",value:"李白乘舟将欲行，忽闻岸上踏歌声。桃花潭水深千尺，不及汪伦送我情"},{text:"望庐山瀑布",value:"日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。"}]},{text:"杜甫",value:2,children:[{text:"望岳",value:"岱宗夫如何?齐鲁青未了。造化钟神秀，阴阳割昏晓。荡胸生曾云，决眦入归鸟。会当凌绝顶，一览众山小。"},{text:"绝句",value:"两个黄鹂鸣翠柳，一行白鹭上青天。窗含西岭千秋雪，门泊东吴万里船。"},{text:"春夜喜雨",value:"好雨知时节，当春乃发生。随风潜入夜，润物细无声。"}]}]),p=(0,L.iH)(!1),m=(0,L.iH)();function g(){f.value=!1,o.value=d.value.split(""),a.index=0,l=Array(o.value.length).fill(""),a.writens=Array(o.value.length).fill(!1),d.value="",W(),e.value&&(e.value.scrollLeft=0),a.writens[a.index]=!0}function w(){f.value=!1}function C(){f.value=!0}function b(){const e=Math.max(window.devicePixelRatio||1,1);t.value.width=t.value.offsetWidth*e,t.value.height=t.value.offsetHeight*e,t.value.getContext("2d")?.scale(e,e),n.clear()}function A(t){t!==a.index&&(_(),W(),a.index=t,a.writens[a.index]=!0,e.value&&(e.value.scrollLeft=Math.max(48*a.index-170,0)))}function k(){_(),a.index>0&&(a.index--,a.writens[a.index]=!0,W(),e.value&&(e.value.scrollLeft=Math.max(48*a.index-170,0)))}function x(){_(),a.index<o.value.length-1&&(a.index++,a.writens[a.index]=!0,W(),e.value&&(e.value.scrollLeft=Math.max(48*a.index-170,0)))}function W(){n.clear()}function S(){_(),y()}function _(){n.isEmpty()||(l[a.index]=n.toDataURL())}function y(e){let t=o.value.length;const a=document.createElement("canvas");a.width=200*(t>=8?8:t),a.height=200*Math.ceil(t/8);const i=a.getContext("2d");e&&(a.height+=200),i.fillStyle="#fff",i.fillRect(0,0,a.width,a.height),e&&(i.font="100px "+F.value,i.fillStyle=n.penColor,i.fillText(e+" 沐手恭书",a.width-100*e.length-480,a.height-80));for(let n=0;n<l.length;n++){const e=l[n];if(e){const o=new Image;o.onload=function(){i.drawImage(o,n%8*200,200*Math.floor(n/8),200,200),t--,0===t&&(r.value=!0,c.value=[a.toDataURL()])},o.src=e}else t--,0===t&&(r.value=!0,c.value=[a.toDataURL()])}}function I(){u.value=!0}function U(){if(!s.value)return(0,i.Z)("请录入字帖"),!1;u.value=!1,o.value=s.value.split(""),a.index=0,l=Array(o.value.length).fill(""),s.value="",W()}function j(){s.value=""}fetch("/data.json").then((e=>e.json())).then((e=>{let t=0;h.value=e.map((e=>({...e,value:++t})))})),(0,v.bv)((()=>{n=new V.Z(t.value,{minWidth:6,maxWidth:16}),setTimeout((()=>{b(),window.onresize=()=>b()}),100)}));const D=["楷体","隶书","硬笔"],H=(0,L.iH)(!1);function E(){H.value=!0}function R(e){H.value=!1,n.minWidth=e,n.maxWidth=e+10}const F=(0,L.iH)("kaiti"),O=(0,L.iH)(!1),Z=["楷体","隶书","硬笔"];function N(){O.value=!0}function z(e){F.value={"楷体":"kaiti","隶书":"lishu","硬笔":"yingbi"}[e]||"",O.value=!1}const P=["黑色","红色"],Q=(0,L.iH)(!1);function T(){Q.value=!0}function Y(e){Q.value=!1,n.penColor={"黑色":"#00","红色":"#f00"}[e]||"#00"}function M(){p.value=!0,m.value=""}function K(){y(m.value)}function X(){p.value=!1}function G(){B.saveAs(c.value[0],`linmo-${+new Date}.png`)}function q(){let e=["og:url","https://tianma630.com/linmo/dist/index.html","og:title","临摹","og:image","https://img.zcool.cn/community/01bc7b56000a516ac7251df8ded6a4.JPG@1280w_1l_2o_100sh.jpg","og:type","website"];window.open("http://www.facebook.com/sharer.php?u="+encodeURIComponent(`http://java.chendahai.cn/share/new?meta=${e.toString()}`))}return{wordRef:e,paintRef:t,words:o,wordState:a,onWord:A,onLast:k,onNext:x,onClear:W,onCreateImg:S,isPreview:r,previewImgs:c,onInputWord:I,isDialog:u,inputValue:s,onConfirmInputWord:U,onCancelInputWord:j,isSelect:f,selectValue:d,selectOptions:h,toSelectWord:C,onSelect:g,onCloseSelect:w,widthColumns:D,isWidth:H,toSelectWidth:E,onConfirmWidth:R,colorColumns:P,isColor:Q,toSelectColor:T,onConfirmColor:Y,isSign:p,signValue:m,toAddSign:M,onAddSign:K,onCancelSign:X,saveImgToLocal:G,toShareImg:q,font:F,isFont:O,fontColumns:Z,toSelectFont:N,onConfirmFont:z}}}),F=n(89);const O=(0,F.Z)(R,[["render",E]]);var Z=O,N=n(678);const z={class:"home"};function P(e,t,n,o,a,l){const i=(0,v.up)("HelloWorld");return(0,v.wg)(),(0,v.iD)("div",z,[(0,v.Wm)(i,{msg:"Welcome to Your Vue.js + TypeScript App"})])}const Q={class:"hello"},T=(0,v.uE)('<p data-v-4fcf9f3c> For a guide and recipes on how to configure / customize this project,<br data-v-4fcf9f3c> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-4fcf9f3c>vue-cli documentation</a>. </p><h3 data-v-4fcf9f3c>Installed CLI Plugins</h3><ul data-v-4fcf9f3c><li data-v-4fcf9f3c><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-4fcf9f3c>babel</a></li><li data-v-4fcf9f3c><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-4fcf9f3c>router</a></li><li data-v-4fcf9f3c><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-4fcf9f3c>eslint</a></li><li data-v-4fcf9f3c><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener" data-v-4fcf9f3c>typescript</a></li></ul><h3 data-v-4fcf9f3c>Essential Links</h3><ul data-v-4fcf9f3c><li data-v-4fcf9f3c><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-4fcf9f3c>Core Docs</a></li><li data-v-4fcf9f3c><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-4fcf9f3c>Forum</a></li><li data-v-4fcf9f3c><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-4fcf9f3c>Community Chat</a></li><li data-v-4fcf9f3c><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-4fcf9f3c>Twitter</a></li><li data-v-4fcf9f3c><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-4fcf9f3c>News</a></li></ul><h3 data-v-4fcf9f3c>Ecosystem</h3><ul data-v-4fcf9f3c><li data-v-4fcf9f3c><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-4fcf9f3c>vue-router</a></li><li data-v-4fcf9f3c><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-4fcf9f3c>vuex</a></li><li data-v-4fcf9f3c><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-4fcf9f3c>vue-devtools</a></li><li data-v-4fcf9f3c><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-4fcf9f3c>vue-loader</a></li><li data-v-4fcf9f3c><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-4fcf9f3c>awesome-vue</a></li></ul>',7);function Y(e,t,n,o,a,l){return(0,v.wg)(),(0,v.iD)("div",Q,[(0,v._)("h1",null,(0,h.zw)(e.msg),1),T])}var M=(0,v.aZ)({name:"HelloWorld",props:{msg:String}});const K=(0,F.Z)(M,[["render",Y],["__scopeId","data-v-4fcf9f3c"]]);var X=K,G=(0,v.aZ)({name:"HomeView",components:{HelloWorld:X}});const q=(0,F.Z)(G,[["render",P]]);var J=q;const $=[{path:"/",name:"home",component:J},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,4335))}],ee=(0,N.p7)({history:(0,N.PO)("/linmo/dist/"),routes:$});var te=ee;const ne=[f.Z,s.Z,u.Z,c.Z,r.Z,i.Z,l.Z,a.Z,o.Z],oe=(0,d.ri)(Z);ne.map((e=>oe.use(e))),oe.use(te).mount("#app")},7139:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAlNJREFUeF7t2d1KHDEUB/Bz8krtvRv2FYoKUhBBCkIRBCkIUi0IKggiCCJIoQilta+QnN17+z5eJTJg6TDsRz7OJCxz9soFN5n/b85kcmYQBv7BgecHAZAKGLiAXAIDLwBZBKtdAsaYE6XUh6YCnXN/xuPxSY1qrAZARAQAo7fQE621HhqAbwfWWlc5GVUmbYITkQBIBbQE5BKQNUAWwSoLcpVJ5S4gt0HZB8hGSHaCshWWXkCaIWmGpBn6LyDdoHSD0g1WacyqTLqS3WDrOf4LIl6MRqOnnMfY3Fvh1PcMwRXQeY4PiLieg8AJYK09RsRvrRMS/J4hBuAZAN61z3oOAheAtfYIEc861fhXa/0+pEKDAd5K7Gt30FQEDgAi+gIA591jcs6dhr5qCwZoJuFEyAWw1h4i4mVO+Oa3UQCcCDkA1toDRLzKDZ8EwIWQCkBE+wBwzRE+GYADIQXAGPNZKXXDFT4LIBchFsBau4eIt5zhswFyEGIAiOgTANxxh2cBSEUIBTDG7Cql7vsIzwaQghACMJ1Od5xzD32FZwWIRVgGQETbAPC9z/DsADEIiwAmk8lH7/2PvsP3AhCKMA+AiLYA4LFE+N4AQhBmARDRJgD8LBW+V4BlCN773+2g3vsNRPxVMnzvAIsQukFnfY/p6kLGm/U/0c1QykTzushFY5UIX6QC/oWMQSgVvihA6OVQMnxxgGUIpcNXAZiHUCN8NYAWwlrzt3NuGvoML2URXvSbIncB7oPmHE8AODVXcSypgFU8a5zHLBXAqbmKYw2+Al4BLW++UEV5gMUAAAAASUVORK5CYII="}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,l){if(!o){var i=1/0;for(s=0;s<e.length;s++){o=e[s][0],a=e[s][1],l=e[s][2];for(var r=!0,c=0;c<o.length;c++)(!1&l||i>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(r=!1,l<i&&(i=l));if(r){e.splice(s--,1);var u=a();void 0!==u&&(t=u)}}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[o,a,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="linmo:";n.l=function(o,a,l,i){if(e[o])e[o].push(a);else{var r,c;if(void 0!==l)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+l){r=f;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+l),r.src=o),e[o]=[a];var d=function(t,n){r.onerror=r.onload=null,clearTimeout(v);var a=e[o];if(delete e[o],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(e){return e(n)})),t)return t(n)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=d.bind(null,r.onerror),r.onload=d.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/linmo/dist/"}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var l=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=l);var i=n.p+n.u(t),r=new Error,c=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var l=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;r.message="Loading chunk "+t+" failed.\n("+l+": "+i+")",r.name="ChunkLoadError",r.type=l,r.request=i,a[1](r)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,l,i=o[0],r=o[1],c=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(c)var s=c(n)}for(t&&t(o);u<i.length;u++)l=i[u],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(s)},o=self["webpackChunklinmo"]=self["webpackChunklinmo"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8150)}));o=n.O(o)})();
//# sourceMappingURL=app.js.map