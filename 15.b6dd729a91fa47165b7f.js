(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{JLuJ:function(n,l,u){"use strict";u.r(l);var e=u("CcnG"),o=function(){return function(){}}(),t=u("pMnS"),i=u("oBZk"),r=u("ZZ/e"),b=u("gIcY"),a=u("Ip0R"),s=function(){function n(){this.n=null,this.A=[],this.x=[]}return n.prototype.ngOnInit=function(){},n.prototype.gerarInputs=function(){for(var n=[],l=0;l<parseInt(this.n,10)+parseInt("1",10);l++)n.push(void 0);for(l=0;l<parseInt(this.n,10);l++)this.A.push([]),this.A[l].push(n);this.x=[this.n],this.nArr=Array(parseInt(this.n,10)).fill(0).map(function(n,l){return l}),this.nArrPlusOne=Array(parseInt(this.n,10)+parseInt("1",10)).fill(0).map(function(n,l){return l}),this.read=!0,this.finished=!1},n.prototype.surpriseMe=function(){var n,l,u,e,o,t;for(u=0;u<Number(this.n)-Number(1);u++)for(n=Number(u)+Number(1);n<Number(this.n);n++)for(t=this.A[n][u]/this.A[u][u]*-1,l=0;l<Number(this.n)+Number(1);l++)this.A[n][l]=Number(this.A[u][l])*t+Number(this.A[n][l]);for(n=0;n<Number(this.n);n++){for(o=0,l=e=Number(this.n)-Number(n);l<Number(this.n);l++)o=Number(o)+Number(this.x[l])*Number(this.A[Number(e)-Number(1)][l]);this.x[Number(e)-Number(1)]=Number(Number(this.A[Number(e)-Number(1)][Number(this.n)]-Number(o))/Number(this.A[Number(e)-Number(1)][Number(e)-Number(1)]))}this.finished=!0,this.read=!1},n}(),c=e.mb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}"]],data:{}});function d(n){return e.Cb(0,[(n()(),e.ob(0,0,null,null,11,"ion-item",[],null,null,null,i.v,i.h)),e.nb(1,49152,null,0,r.E,[e.h,e.k],null,null),(n()(),e.ob(2,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.w,i.i)),e.nb(3,49152,null,0,r.K,[e.h,e.k],{position:[0,"position"]},null),(n()(),e.Bb(4,0,["Valor de A(",", ",")"])),(n()(),e.ob(5,0,null,0,6,"ion-input",[["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var o=!0,t=n.component;return"ionBlur"===l&&(o=!1!==e.xb(n,7)._handleBlurEvent()&&o),"ionChange"===l&&(o=!1!==e.xb(n,7)._handleIonChange(u.target.value)&&o),"ngModelChange"===l&&(o=!1!==(t.A[n.parent.context.index][n.context.index]=u)&&o),o},i.u,i.g)),e.nb(6,49152,null,0,r.D,[e.h,e.k],{type:[0,"type"]},null),e.nb(7,16384,null,0,r.Eb,[e.k],null,null),e.yb(1024,null,b.b,function(n){return[n]},[r.Eb]),e.nb(9,671744,null,0,b.e,[[8,null],[8,null],[8,null],[6,b.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.yb(2048,null,b.c,null,[b.e]),e.nb(11,16384,null,0,b.d,[[4,b.c]],null,null)],function(n,l){var u=l.component;n(l,3,0,"floating"),n(l,6,0,"number"),n(l,9,0,u.A[l.parent.context.index][l.context.index])},function(n,l){n(l,4,0,l.parent.context.index+1,l.context.index+1),n(l,5,0,e.xb(l,11).ngClassUntouched,e.xb(l,11).ngClassTouched,e.xb(l,11).ngClassPristine,e.xb(l,11).ngClassDirty,e.xb(l,11).ngClassValid,e.xb(l,11).ngClassInvalid,e.xb(l,11).ngClassPending)})}function h(n){return e.Cb(0,[(n()(),e.ob(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.fb(16777216,null,null,1,null,d)),e.nb(2,278528,null,0,a.h,[e.N,e.K,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.nArrPlusOne)},null)}function g(n){return e.Cb(0,[(n()(),e.ob(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.fb(16777216,null,null,1,null,h)),e.nb(2,278528,null,0,a.h,[e.N,e.K,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.nArr)},null)}function p(n){return e.Cb(0,[(n()(),e.ob(0,0,null,null,7,"ion-item",[["lines","none"]],null,null,null,i.v,i.h)),e.nb(1,49152,null,0,r.E,[e.h,e.k],{lines:[0,"lines"]},null),(n()(),e.ob(2,0,null,0,2,"ion-badge",[["color","dark"],["slot","start"]],null,null,null,i.p,i.b)),e.nb(3,49152,null,0,r.g,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.Bb(4,0,["x",""])),(n()(),e.ob(5,0,null,0,2,"ion-label",[["text-wrap",""]],null,null,null,i.w,i.i)),e.nb(6,49152,null,0,r.K,[e.h,e.k],null,null),(n()(),e.Bb(7,0,["",""]))],function(n,l){n(l,1,0,"none"),n(l,3,0,"dark")},function(n,l){n(l,4,0,l.context.index+1),n(l,7,0,l.context.$implicit)})}function f(n){return e.Cb(0,[(n()(),e.ob(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.fb(16777216,null,null,1,null,p)),e.nb(2,278528,null,0,a.h,[e.N,e.K,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.x)},null)}function m(n){return e.Cb(0,[(n()(),e.ob(0,0,null,null,6,"ion-header",[],null,null,null,i.s,i.e)),e.nb(1,49152,null,0,r.y,[e.h,e.k],null,null),(n()(),e.ob(2,0,null,0,4,"ion-toolbar",[],null,null,null,i.B,i.n)),e.nb(3,49152,null,0,r.yb,[e.h,e.k],null,null),(n()(),e.ob(4,0,null,0,2,"ion-title",[],null,null,null,i.A,i.m)),e.nb(5,49152,null,0,r.wb,[e.h,e.k],null,null),(n()(),e.Bb(-1,0,[" Elimina\xe7\xe3o Gaussiana "])),(n()(),e.ob(7,0,null,null,23,"ion-content",[["padding",""]],null,null,null,i.r,i.d)),e.nb(8,49152,null,0,r.r,[e.h,e.k],null,null),(n()(),e.ob(9,0,null,0,11,"ion-item",[],null,null,null,i.v,i.h)),e.nb(10,49152,null,0,r.E,[e.h,e.k],null,null),(n()(),e.ob(11,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.w,i.i)),e.nb(12,49152,null,0,r.K,[e.h,e.k],{position:[0,"position"]},null),(n()(),e.Bb(-1,0,["Digite o n\xfamero de vari\xe1veis do sistema"])),(n()(),e.ob(14,0,null,0,6,"ion-input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var o=!0,t=n.component;return"ionBlur"===l&&(o=!1!==e.xb(n,16)._handleBlurEvent()&&o),"ionChange"===l&&(o=!1!==e.xb(n,16)._handleInputEvent(u.target.value)&&o),"ngModelChange"===l&&(o=!1!==(t.n=u)&&o),o},i.u,i.g)),e.nb(15,49152,null,0,r.D,[e.h,e.k],null,null),e.nb(16,16384,null,0,r.Hb,[e.k],null,null),e.yb(1024,null,b.b,function(n){return[n]},[r.Hb]),e.nb(18,671744,null,0,b.e,[[8,null],[8,null],[8,null],[6,b.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.yb(2048,null,b.c,null,[b.e]),e.nb(20,16384,null,0,b.d,[[4,b.c]],null,null),(n()(),e.ob(21,0,null,0,2,"ion-button",[["color","secondary"],["expand","block"]],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.gerarInputs()&&e),e},i.q,i.c)),e.nb(22,49152,null,0,r.h,[e.h,e.k],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(n()(),e.Bb(-1,0,["Gerar"])),(n()(),e.fb(16777216,null,0,1,null,g)),e.nb(25,16384,null,0,a.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.ob(26,0,null,0,2,"ion-button",[["color","secondary"],["expand","block"]],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.surpriseMe()&&e),e},i.q,i.c)),e.nb(27,49152,null,0,r.h,[e.h,e.k],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(n()(),e.Bb(-1,0,["Elimina\xe7\xe3o Gaussiana"])),(n()(),e.fb(16777216,null,0,1,null,f)),e.nb(30,16384,null,0,a.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component;n(l,12,0,"floating"),n(l,18,0,u.n),n(l,22,0,"secondary",!u.n,"block"),n(l,25,0,u.read),n(l,27,0,"secondary",!u.read,"block"),n(l,30,0,u.finished)},function(n,l){n(l,14,0,e.xb(l,20).ngClassUntouched,e.xb(l,20).ngClassTouched,e.xb(l,20).ngClassPristine,e.xb(l,20).ngClassDirty,e.xb(l,20).ngClassValid,e.xb(l,20).ngClassInvalid,e.xb(l,20).ngClassPending)})}function x(n){return e.Cb(0,[(n()(),e.ob(0,0,null,null,1,"app-tab1",[],null,null,null,m,c)),e.nb(1,114688,null,0,s,[],null,null)],function(n,l){n(l,1,0)},null)}var v=e.kb("app-tab1",s,x,{},{},[]),C=u("ZYCi");u.d(l,"Tab1PageModuleNgFactory",function(){return N});var N=e.lb(o,[],function(n){return e.ub([e.vb(512,e.j,e.ab,[[8,[t.a,v]],[3,e.j],e.x]),e.vb(4608,a.k,a.j,[e.u,[2,a.q]]),e.vb(4608,r.a,r.a,[e.z,e.g]),e.vb(4608,r.Cb,r.Cb,[r.a,e.j,e.q,a.c]),e.vb(4608,r.Gb,r.Gb,[r.a,e.j,e.q,a.c]),e.vb(4608,b.g,b.g,[]),e.vb(1073742336,a.b,a.b,[]),e.vb(1073742336,r.Ab,r.Ab,[]),e.vb(1073742336,b.f,b.f,[]),e.vb(1073742336,b.a,b.a,[]),e.vb(1073742336,C.n,C.n,[[2,C.t],[2,C.m]]),e.vb(1073742336,o,o,[]),e.vb(1024,C.k,function(){return[[{path:"",component:s}]]},[])])})}}]);