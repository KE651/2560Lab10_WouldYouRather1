(function(){"use strict";var e={3760:function(e,n,r){var o=r(9242),t=r(3396),a=r(7139);const u={id:"app"},i=(0,t._)("h1",null,"Would you rather...",-1);function c(e,n,r,o,c,s){const l=(0,t.up)("would-you-rather");return(0,t.wg)(),(0,t.iD)("div",u,[i,(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)(' v-bind:question="wyrQuestion" v-bind:answer1="wyrAnswer1" v-bind:answer2="wyrAnswer2" v-on:answer-changed="answerChanged"> ')])),_:1}),(0,t._)("p",null,(0,a.zw)(c.userSelectionMessage),1)])}const s=e=>((0,t.dD)("data-v-63f5c1c6"),e=e(),(0,t.Cn)(),e),l={class:"wyr"},h=s((()=>(0,t._)("h2",null,"Please make your choice!",-1))),d=["value"],f=["value"];function w(e,n,r,u,i,c){return(0,t.wg)(),(0,t.iD)("div",l,[h,(0,t._)("h3",null,(0,a.zw)(r.question),1),(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":n[0]||(n[0]=e=>i.choice=e),value:r.answer1,onChange:n[1]||(n[1]=(...e)=>c.choiceMade&&c.choiceMade(...e))},null,40,d),[[o.G2,i.choice]]),(0,t._)("label",null,(0,a.zw)(r.answer1),1),(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":n[2]||(n[2]=e=>i.choice=e),value:r.answer2,onChange:n[3]||(n[3]=(...e)=>c.choiceMade&&c.choiceMade(...e))},null,40,f),[[o.G2,i.choice]]),(0,t._)("label",null,(0,a.zw)(r.answer2),1)])}var v={name:"WouldYouRather",props:{question:String,answer1:String,answer2:String},data(){return{choice:""}},methods:{choiceMade(){this.$emit("answer-changed",this.choice)}}},p=r(89);const y=(0,p.Z)(v,[["render",w],["__scopeId","data-v-63f5c1c6"]]);var b=y,g={name:"WouldYouRather",components:{WouldYouRather:b},data(){return{wyrQuestion:"Would you rather be able to see things that are very far away, like binoculars, or be able to see things very close up, like a microscope?",wyrAnswer1:"binocular eyes!",wyrAnswer2:"microscope eyes!",userSelectionMessage:""}},methods:{answerChanged(e){this.userSelectionMessage=`Thanks!  You chose ${e}.`}}};const m=(0,p.Z)(g,[["render",c]]);var _=m;(0,o.ri)(_).mount("#app")}},n={};function r(o){var t=n[o];if(void 0!==t)return t.exports;var a=n[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(n,o,t,a){if(!o){var u=1/0;for(l=0;l<e.length;l++){o=e[l][0],t=e[l][1],a=e[l][2];for(var i=!0,c=0;c<o.length;c++)(!1&a||u>=a)&&Object.keys(r.O).every((function(e){return r.O[e](o[c])}))?o.splice(c--,1):(i=!1,a<u&&(u=a));if(i){e.splice(l--,1);var s=t();void 0!==s&&(n=s)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,t,a]}}(),function(){r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,{a:n}),n}}(),function(){r.d=function(e,n){for(var o in n)r.o(n,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};r.O.j=function(n){return 0===e[n]};var n=function(n,o){var t,a,u=o[0],i=o[1],c=o[2],s=0;if(u.some((function(n){return 0!==e[n]}))){for(t in i)r.o(i,t)&&(r.m[t]=i[t]);if(c)var l=c(r)}for(n&&n(o);s<u.length;s++)a=u[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},o=self["webpackChunkwouldyourather"]=self["webpackChunkwouldyourather"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(3760)}));o=r.O(o)})();
//# sourceMappingURL=app.305063dc.js.map