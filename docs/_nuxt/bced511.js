(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{262:function(e,t,r){var content=r(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(106).default)("dd9906da",content,!0,{sourceMap:!1})},269:function(e,t,r){"use strict";r(262)},270:function(e,t,r){var n=r(105)((function(i){return i[1]}));n.push([e.i,'.my-skills[data-v-b9ab951e]{background:#fff;border-radius:8px;box-shadow:0 19px 38px rgba(0,0,0,.1),0 15px 12px rgba(0,0,0,.1);margin:20px 0;position:relative;transition-duration:.3s;width:100%}.my-skills-bar[data-v-b9ab951e]{padding:25px 30px}.my-skills-bar .bar[data-v-b9ab951e]{margin:25px 0}.my-skills-bar .bar .info span[data-v-b9ab951e]{font-size:1rem;font-weight:500}.my-skills-bar .bar .info[data-v-b9ab951e]{color:#07374a;margin-bottom:8px}.my-skills-bar .bar .progress-line[data-v-b9ab951e]{animation:animate-b9ab951e 1s cubic-bezier(1,0,.5,1) forwards;background:#f0f0f0;height:10px;position:relative;width:100%}.bar .progress-line span[data-v-b9ab951e],.my-skills-bar .bar .progress-line[data-v-b9ab951e]{border-radius:10px;transform:scaleX(0);transform-origin:left}.bar .progress-line span[data-v-b9ab951e]{animation:animate-b9ab951e 1s cubic-bezier(1,0,.5,1) 1s forwards;background:#09f;height:100%;position:absolute}@keyframes animate-b9ab951e{to{transform:scaleX(1)}}.progress-line .language[data-v-b9ab951e]{width:var(--skill-level)}.bar .progress-line span[data-v-b9ab951e]:before{border-color:#07374a transparent transparent;border-style:none solid solid;border-width:7px 0 0 7px;content:"";height:0;position:absolute;right:0;top:-14px;width:0}.bar .progress-line span[data-v-b9ab951e]:after{background:#07374a;border-radius:3px;color:#f0f0f0;font-size:12px;font-weight:700;padding:1px 8px;position:absolute;right:0;top:-28px}.progress-line .language[data-v-b9ab951e]:after{content:attr(skill-content)}@media(max-width:700px){.my-skills-bar .bar .progress-line[data-v-b9ab951e]{width:100%}.skill-categories .h4[data-v-b9ab951e]{font-size:19px!important}}.big-circle[data-v-b9ab951e],.loader[data-v-b9ab951e]{align-items:center;display:flex;justify-content:center}.big-circle[data-v-b9ab951e]{animation:bigcircle-b9ab951e 1.2s linear infinite;border:5px solid #09f;border-radius:50%;border-right-color:transparent;height:8rem;position:relative;width:8rem}.small-circle[data-v-b9ab951e]{border:5px solid;border-color:#09f #09f transparent;border-radius:50%;height:5rem;position:relative;width:5rem}@keyframes bigcircle-b9ab951e{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""]),n.locals={},e.exports=n},286:function(e,t,r){"use strict";r.r(t);r(58),r(76),r(43),r(19);var n={data:function(){return{loading:!1,category:"frontent",skills:[],skillsList:[{language:"html",category:"frontend",percent:"100"},{language:"css",category:"frontend",percent:"95"},{language:"javascript",category:"frontend",percent:"90"},{language:"vue.js",category:"frontend",percent:"85"},{language:"bootstrap",category:"frontend",percent:"100"},{language:"react.js",category:"frontend",percent:"75"},{language:"less",category:"frontend",percent:"65"},{language:"sass",category:"frontend",percent:"70"},{language:"jquery",category:"frontend",percent:"90"},{language:"react-native",category:"frontend",percent:"55"},{language:"python",category:"backend",percent:"90"},{language:"django",category:"backend",percent:"85"},{language:"flask",category:"backend",percent:"85"},{language:"java",category:"backend",percent:"60"},{language:"postgresql",category:"backend",percent:"70"},{language:"groovy",category:"backend",percent:"60"},{language:"mysql",category:"backend",percent:"85"},{language:"c/c++",category:"backend",percent:"55"},{language:"moqui",category:"backend",percent:"80"},{language:"sqlite3",category:"backend",percent:"90"},{language:"git",category:"other",percent:"90"},{language:"linux server",category:"other",percent:"70"},{language:"xml",category:"other",percent:"80"},{language:"ms office",category:"other",percent:"100"},{language:"pygame",category:"other",percent:"95"},{language:"tensorflow",category:"other",percent:"60"},{language:"agile/scrum",category:"other",percent:"85"},{language:"opencv",category:"other",percent:"55"},{language:"oop",category:"other",percent:"90"},{language:"googling",category:"other",percent:"100"}]}},created:function(){this.changeCategory("frontend")},methods:{changeCategory:function(e){var t=this;this.loading=!0,setTimeout((function(){t.loading=!1,t.category=e,t.skills=t.skillsList.filter((function(t){return t.category==e}))}),500)}}},o=(r(269),r(42)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",[e._m(0),e._v(" "),t("div",{staticClass:"text-center skill-categories"},[t("span",{staticClass:"border-bottom text-3xl px-2 cursor-pointer border-b-2",class:{"border-blue-500 text-blue-500 border-b-4":"frontend"===e.category},on:{click:function(t){return e.changeCategory("frontend")}}},[e._v("Front-end")]),e._v(" "),t("span",{staticClass:"border-bottom text-3xl px-2 cursor-pointer border-b-2",class:{"border-blue-500 text-blue-500 border-b-4":"backend"===e.category},on:{click:function(t){return e.changeCategory("backend")}}},[e._v("Back-end")]),e._v(" "),t("span",{staticClass:"border-bottom text-3xl px-2 cursor-pointer border-b-2",class:{"border-blue-500 text-blue-500 border-b-4":"other"===e.category},on:{click:function(t){return e.changeCategory("other")}}},[e._v("Other")])]),e._v(" "),t("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 gap-[15px]"},[t("div",{staticClass:"pr-0"},[t("div",{staticClass:"my-skills"},[t("div",{staticClass:"my-skills-bar"},[e.loading?t("div",{staticClass:"loader"},[e._m(1)]):e._l(e.skills.slice(0,e.skills.length/2),(function(r){return t("div",{key:"skill".concat(r),staticClass:"bar"},[t("div",{staticClass:"info"},[t("span",{staticClass:"text-uppercase"},[e._v(e._s(r.language))])]),e._v(" "),t("div",{staticClass:"progress-line"},[t("span",{staticClass:"language",style:"--skill-level:"+r.percent+"%",attrs:{"skill-content":r.percent+"%"}})])])}))],2)])]),e._v(" "),t("div",{staticClass:"pr-0"},[t("div",{staticClass:"my-skills"},[t("div",{staticClass:"my-skills-bar"},[e.loading?t("div",{staticClass:"loader"},[e._m(2)]):e._l(e.skills.slice(e.skills.length/2,e.skills.length),(function(r){return t("div",{key:r,staticClass:"bar"},[t("div",{staticClass:"info"},[t("span",{staticClass:"text-uppercase"},[e._v(e._s(r.language))])]),e._v(" "),t("div",{staticClass:"progress-line"},[t("span",{staticClass:"language",style:"--skill-level:"+r.percent+"%",attrs:{"skill-content":r.percent+"%"}})])])}))],2)])])])])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"section-title mt-10"},[t("h1",[e._v("Skills")]),e._v(" "),t("p",[e._v("These are my main skills as a full-stack software developer.")])])},function(){var e=this._self._c;return e("div",{staticClass:"big-circle"},[e("div",{staticClass:"small-circle"})])},function(){var e=this._self._c;return e("div",{staticClass:"big-circle"},[e("div",{staticClass:"small-circle"})])}],!1,null,"b9ab951e",null);t.default=component.exports}}]);