require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([12],{64:function(e,t,s){"use strict";var a=n(s(1)),i=n(s(65));function n(e){return e&&e.__esModule?e:{default:e}}new a.default(i.default).$mount()},65:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(67),i=s.n(a),n=s(68);var c=function(e){s(66)},o=s(0)(i.a,n.a,c,null,null);t.default=o.exports},66:function(e,t){},67:function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=s(3);t.default={data:function(){return{process:0,animationDataProcess:"",animationDataPerson:"",showNote:!0,schedule:{title:"",type:2,time:{start:10,now:9,end:5},unit:"",note:""}}},onLoad:function(){var e=sessionStorage.getItem("ID"),t=(0,a.getOneSchedule)(e);this.id=e,this.schedule=t,this.process=this.schedule.status.status},onReady:function(){var t=e.createAnimation({delay:300,duration:500,timingFunction:"ease"});this.animationDataProcess=t.translateX(1.4*this.process).scaleX(2.8*this.process).step().export(),t=e.createAnimation({delay:300,duration:500,timingFunction:"ease"}),this.animationDataPerson=t.translateX(2.8*this.process).step().export()},onUnload:function(){var e=(0,a.changeSchedule)(this.id,this.schedule);console.log(JSON.stringify(e))},methods:{editProgress:function(){var e=this.schedule.time;e.end>e.start&&e.now<e.end?e.now=parseInt(e.now)+parseInt(1):e.end<e.start&&e.now>e.end&&(e.now=e.now-1)},navBack:function(){e.showModal({title:"提示",content:"您还未保存，确定要退出吗？",success:function(t){t.confirm?e.navigateBack():t.cancel}})},backToIndex:function(){(0,a.changeSchedule)(this.id,this.schedule);e.navigateBack(),this.$bus.$emit("change"),e.showToast({title:"保存成功",duration:1500})},deleteSchedule:function(){var t=this;e.showModal({title:"提示",content:"确定删除此任务吗？",success:function(s){if(s.confirm){var i=(0,a.deleteSchedule)(t.id);console.log(JSON.stringify(i)),e.navigateTo({url:"/pages/index/index"})}else s.cancel}})}}}}).call(t,s(2).default)},68:function(e,t,s){"use strict";var a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"newProgress"},[s("view",{staticClass:"nav-bar-userset"},[s("image",{staticClass:"nav-bar-userset-back",attrs:{src:"/static/back-arrow.png",eventid:"Zxm-0"},on:{tap:e.navBack}}),s("image",{staticClass:"nav-bar-userset-sublogo",attrs:{src:"/static/sub-logo.png"}}),s("image",{staticClass:"nav-bar-userset-tick",attrs:{src:"/static/tick.png",eventid:"w1t-1"},on:{tap:e.backToIndex}})]),s("view",{staticClass:"time-process-block"},[s("view",{staticClass:"top-line"},[s("view",{staticClass:"title-line"},[s("input",{staticClass:"red-point"}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.schedule.title,expression:"schedule.title"}],staticClass:"title",attrs:{maxlength:"6",eventid:"ORO-2"},domProps:{value:e.schedule.title},on:{input:function(t){t.target.composing||(e.schedule.title=t.target.value)}}})]),s("view",{staticClass:"time-name"},[e._v(e._s(e.title))]),s("view",{staticClass:"precess-percent"},[e._v(e._s(e.process)+"%")])]),s("view",{staticClass:"all-process"},[s("view",{staticClass:"little-person",attrs:{animation:e.animationDataPerson}},[s("view",{staticClass:"chat-frame"},[s("view",{staticClass:".chat-frame-content"},[e._v(e._s(e.schedule.status.toEnd))]),s("image",{staticClass:"chat-frame-image",attrs:{src:"../../static/chat-gray.png"}})]),s("image",{staticClass:"little-person-image",attrs:{src:"/static/little-person.png"}})]),s("view",{staticClass:"process-bar"},[s("view",{staticClass:"blank-bar"}),s("view",{staticClass:"finish-bar",attrs:{animation:e.animationDataProcess}})])])]),s("view",{staticClass:"inputProgress"},[s("view",{staticClass:"sectionInfo"},[s("view",{staticClass:"sectionTag"},[e._v("开始于")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.schedule.time.start,expression:"schedule.time.start"}],staticClass:"time",attrs:{type:"number",placeholder:"开始","placeholder-class":"placeHolder",eventid:"qQ6-3"},domProps:{value:e.schedule.time.start},on:{input:function(t){t.target.composing||(e.schedule.time.start=t.target.value)}}}),s("view",{staticClass:"unitTag"},[e._v(e._s(e.schedule.unit))])]),s("view",{staticClass:"sectionInfo"},[s("view",{staticClass:"sectionTag"},[e._v("现处于")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.schedule.time.now,expression:"schedule.time.now"}],staticClass:"time",attrs:{type:"number",placeholder:"现在","placeholder-class":"placeHolder",eventid:"Jlg-4"},domProps:{value:e.schedule.time.now},on:{input:function(t){t.target.composing||(e.schedule.time.now=t.target.value)}}}),s("view",{staticClass:"unitTag"},[e._v(e._s(e.schedule.unit))])]),s("view",{staticClass:"sectionInfo"},[s("view",{staticClass:"sectionTag"},[e._v("目标为")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.schedule.time.end,expression:"schedule.time.end"}],staticClass:"time",attrs:{type:"number",placeholder:"结束","placeholder-class":"placeHolder",eventid:"LWQ-5"},domProps:{value:e.schedule.time.end},on:{input:function(t){t.target.composing||(e.schedule.time.end=t.target.value)}}}),s("view",{staticClass:"unitTag"},[e._v(e._s(e.schedule.unit))])])]),s("view",{staticClass:"editProgress"},[s("button",{staticClass:"editProgressButton",attrs:{eventid:"CEf-6"},on:{click:e.editProgress}},[e._v("\n\t\t\t打卡\n\t\t")])],1),s("view",{staticClass:"addNotes"},[s("view",[e.showNote?s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.schedule.note,expression:"schedule.note"}],staticClass:"Note",attrs:{placeholder:"此处输入备注",eventid:"8zP-7"},domProps:{value:e.schedule.note},on:{input:function(t){t.target.composing||(e.schedule.note=t.target.value)}}}):e._e()])]),s("view",{staticClass:"deleteView"},[s("button",{staticClass:"deleteButton",attrs:{eventid:"w1J-8"},on:{click:e.deleteSchedule}},[e._v("删除任务")]),s("view",{staticClass:"bottomView"})],1)])},staticRenderFns:[]};t.a=a}},[64]);