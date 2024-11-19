import{i as Jt,e as kt,p as Qt,a as w,s as te,m as ee,b as g,c as Z,f as y,g as ie,h as se,j as bt,k as wt,l as ne,n as oe,F as Ut,o as Q,q as re,r as tt,t as Ft,u as It,v as ae,S as le,w as he,x as B,y as C,z as N,A as et,B as ce,C as ue,D as de,E as V,d as fe}from"./features-animation-7b2a34c9.js";import{f as L,c as O,d as v,e as Ot,i as G,p as H,n as M,P as me,g as Nt,h as pe,L as ye,S as ge,j as ve,s as W,r as _,k as it}from"./motion-minimal-b8fc2ac8.js";import{r as U,R as Gt}from"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const st=(t,e)=>Math.abs(t-e);function xe(t,e){const i=st(t.x,e.x),n=st(t.y,e.y);return Math.sqrt(i**2+n**2)}class $t{constructor(e,i,{transformPagePoint:n}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const a=Y(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,c=xe(a.offset,{x:0,y:0})>=3;if(!h&&!c)return;const{point:d}=a,{timestamp:f}=v;this.history.push({...d,timestamp:f});const{onStart:p,onMove:m}=this.handlers;h||(p&&p(this.lastMoveEvent,a),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,a)},this.handlePointerMove=(a,h)=>{this.lastMoveEvent=a,this.lastMoveEventInfo=X(h,this.transformPagePoint),L.update(this.updatePoint,!0)},this.handlePointerUp=(a,h)=>{if(this.end(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const{onEnd:c,onSessionEnd:d}=this.handlers,f=Y(a.type==="pointercancel"?this.lastMoveEventInfo:X(h,this.transformPagePoint),this.history);this.startEvent&&c&&c(a,f),d&&d(a,f)},!Jt(e))return;this.handlers=i,this.transformPagePoint=n;const l=kt(e),u=X(l,this.transformPagePoint),{point:s}=u,{timestamp:o}=v;this.history=[{...s,timestamp:o}];const{onSessionStart:r}=i;r&&r(e,Y(u,this.history)),this.removeListeners=Qt(w(window,"pointermove",this.handlePointerMove),w(window,"pointerup",this.handlePointerUp),w(window,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),O(this.updatePoint)}}function X(t,e){return e?{point:e(t.point)}:t}function nt(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Y({point:t},e){return{point:t,delta:nt(t,zt(e)),offset:nt(t,Pe(e)),velocity:Te(e,.1)}}function Pe(t){return t[0]}function zt(t){return t[t.length-1]}function Te(t,e){if(t.length<2)return{x:0,y:0};let i=t.length-1,n=null;const l=zt(t);for(;i>=0&&(n=t[i],!(l.timestamp-n.timestamp>te(e)));)i--;if(!n)return{x:0,y:0};const u=ee(l.timestamp-n.timestamp);if(u===0)return{x:0,y:0};const s={x:(l.x-n.x)/u,y:(l.y-n.y)/u};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function x(t){return t.max-t.min}function K(t,e=0,i=.01){return Math.abs(t-e)<=i}function ot(t,e,i,n=.5){t.origin=n,t.originPoint=g(e.min,e.max,t.origin),t.scale=x(i)/x(e),(K(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=g(i.min,i.max,t.origin)-t.originPoint,(K(t.translate)||isNaN(t.translate))&&(t.translate=0)}function F(t,e,i,n){ot(t.x,e.x,i.x,n?n.originX:void 0),ot(t.y,e.y,i.y,n?n.originY:void 0)}function rt(t,e,i){t.min=i.min+e.min,t.max=t.min+x(e)}function De(t,e,i){rt(t.x,e.x,i.x),rt(t.y,e.y,i.y)}function at(t,e,i){t.min=e.min-i.min,t.max=t.min+x(e)}function I(t,e,i){at(t.x,e.x,i.x),at(t.y,e.y,i.y)}function Se(t,{min:e,max:i},n){return e!==void 0&&t<e?t=n?g(e,t,n.min):Math.max(t,e):i!==void 0&&t>i&&(t=n?g(i,t,n.max):Math.min(t,i)),t}function lt(t,e,i){return{min:e!==void 0?t.min+e:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function Ee(t,{top:e,left:i,bottom:n,right:l}){return{x:lt(t.x,i,l),y:lt(t.y,e,n)}}function ht(t,e){let i=e.min-t.min,n=e.max-t.max;return e.max-e.min<t.max-t.min&&([i,n]=[n,i]),{min:i,max:n}}function Le(t,e){return{x:ht(t.x,e.x),y:ht(t.y,e.y)}}function Re(t,e){let i=.5;const n=x(t),l=x(e);return l>n?i=Z(e.min,e.max-n,t.min):n>l&&(i=Z(t.min,t.max-l,e.min)),Ot(0,1,i)}function je(t,e){const i={};return e.min!==void 0&&(i.min=e.min-t.min),e.max!==void 0&&(i.max=e.max-t.min),i}const J=.35;function Ae(t=J){return t===!1?t=0:t===!0&&(t=J),{x:ct(t,"left","right"),y:ct(t,"top","bottom")}}function ct(t,e,i){return{min:ut(t,e),max:ut(t,i)}}function ut(t,e){return typeof t=="number"?t:t[e]||0}function E(t){return[t("x"),t("y")]}const Be=new WeakMap;class Ce{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=y(),this.visualElement=e}start(e,{snapToCursor:i=!1}={}){const{presenceContext:n}=this.visualElement;if(n&&n.isPresent===!1)return;const l=r=>{this.stopAnimation(),i&&this.snapToCursor(kt(r,"page").point)},u=(r,a)=>{const{drag:h,dragPropagation:c,onDragStart:d}=this.getProps();if(h&&!c&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=ne(h),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),E(p=>{let m=this.getAxisMotionValue(p).get()||0;if(H.test(m)){const{projection:D}=this.visualElement;if(D&&D.layout){const T=D.layout.layoutBox[p];T&&(m=x(T)*(parseFloat(m)/100))}}this.originPoint[p]=m}),d&&L.update(()=>d(r,a),!1,!0);const{animationState:f}=this.visualElement;f&&f.setActive("whileDrag",!0)},s=(r,a)=>{const{dragPropagation:h,dragDirectionLock:c,onDirectionLock:d,onDrag:f}=this.getProps();if(!h&&!this.openGlobalLock)return;const{offset:p}=a;if(c&&this.currentDirection===null){this.currentDirection=Ve(p),this.currentDirection!==null&&d&&d(this.currentDirection);return}this.updateAxis("x",a.point,p),this.updateAxis("y",a.point,p),this.visualElement.render(),f&&f(r,a)},o=(r,a)=>this.stop(r,a);this.panSession=new $t(e,{onSessionStart:l,onStart:u,onMove:s,onSessionEnd:o},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(e,i){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:l}=i;this.startAnimation(l);const{onDragEnd:u}=this.getProps();u&&L.update(()=>u(e,i))}cancel(){this.isDragging=!1;const{projection:e,animationState:i}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(e,i,n){const{drag:l}=this.getProps();if(!n||!$(e,l,this.currentDirection))return;const u=this.getAxisMotionValue(e);let s=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(s=Se(s,this.constraints[e],this.elastic[e])),u.set(s)}resolveConstraints(){const{dragConstraints:e,dragElastic:i}=this.getProps(),{layout:n}=this.visualElement.projection||{},l=this.constraints;e&&G(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&n?this.constraints=Ee(n.layoutBox,e):this.constraints=!1,this.elastic=Ae(i),l!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&E(u=>{this.getAxisMotionValue(u)&&(this.constraints[u]=je(n.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:i}=this.getProps();if(!e||!G(e))return!1;const n=e.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const u=ie(n,l.root,this.visualElement.getTransformPagePoint());let s=Le(l.layout.layoutBox,u);if(i){const o=i(se(s));this.hasMutatedConstraints=!!o,o&&(s=oe(o))}return s}startAnimation(e){const{drag:i,dragMomentum:n,dragElastic:l,dragTransition:u,dragSnapToOrigin:s,onDragTransitionEnd:o}=this.getProps(),r=this.constraints||{},a=E(h=>{if(!$(h,i,this.currentDirection))return;let c=r&&r[h]||{};s&&(c={min:0,max:0});const d=l?200:1e6,f=l?40:1e7,p={type:"inertia",velocity:n?e[h]:0,bounceStiffness:d,bounceDamping:f,timeConstant:750,restDelta:1,restSpeed:10,...u,...c};return this.startAxisValueAnimation(h,p)});return Promise.all(a).then(o)}startAxisValueAnimation(e,i){const n=this.getAxisMotionValue(e);return n.start(bt(e,n,0,i))}stopAnimation(){E(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const i="_drag"+e.toUpperCase(),n=this.visualElement.getProps(),l=n[i];return l||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){E(i=>{const{drag:n}=this.getProps();if(!$(i,n,this.currentDirection))return;const{projection:l}=this.visualElement,u=this.getAxisMotionValue(i);if(l&&l.layout){const{min:s,max:o}=l.layout.layoutBox[i];u.set(e[i]-g(s,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:i}=this.getProps(),{projection:n}=this.visualElement;if(!G(i)||!n||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};E(s=>{const o=this.getAxisMotionValue(s);if(o){const r=o.get();l[s]=Re({min:r,max:r},this.constraints[s])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),E(s=>{if(!$(s,e,null))return;const o=this.getAxisMotionValue(s),{min:r,max:a}=this.constraints[s];o.set(g(r,a,l[s]))})}addListeners(){if(!this.visualElement.current)return;Be.set(this.visualElement,this);const e=this.visualElement.current,i=w(e,"pointerdown",r=>{const{drag:a,dragListener:h=!0}=this.getProps();a&&h&&this.start(r)}),n=()=>{const{dragConstraints:r}=this.getProps();G(r)&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,u=l.addEventListener("measure",n);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),n();const s=wt(window,"resize",()=>this.scalePositionWithinConstraints()),o=l.addEventListener("didUpdate",({delta:r,hasLayoutChanged:a})=>{this.isDragging&&a&&(E(h=>{const c=this.getAxisMotionValue(h);c&&(this.originPoint[h]+=r[h].translate,c.set(c.get()+r[h].translate))}),this.visualElement.render())});return()=>{s(),i(),u(),o&&o()}}getProps(){const e=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:n=!1,dragPropagation:l=!1,dragConstraints:u=!1,dragElastic:s=J,dragMomentum:o=!0}=e;return{...e,drag:i,dragDirectionLock:n,dragPropagation:l,dragConstraints:u,dragElastic:s,dragMomentum:o}}}function $(t,e,i){return(e===!0||e===t)&&(i===null||i===t)}function Ve(t,e=10){let i=null;return Math.abs(t.y)>e?i="y":Math.abs(t.x)>e&&(i="x"),i}class Me extends Ut{constructor(e){super(e),this.removeGroupControls=M,this.removeListeners=M,this.controls=new Ce(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||M}unmount(){this.removeGroupControls(),this.removeListeners()}}const dt=t=>(e,i)=>{t&&L.update(()=>t(e,i))};class ke extends Ut{constructor(){super(...arguments),this.removePointerDownListener=M}onPointerDown(e){this.session=new $t(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint()})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:i,onPan:n,onPanEnd:l}=this.node.getProps();return{onSessionStart:dt(e),onStart:dt(i),onMove:n,onEnd:(u,s)=>{delete this.session,l&&L.update(()=>l(u,s))}}}mount(){this.removePointerDownListener=w(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function be(){const t=U.useContext(me);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:i,register:n}=t,l=U.useId();return U.useEffect(()=>n(l),[]),!e&&i?[!1,()=>i&&i(l)]:[!0]}const z={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function ft(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const b={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Nt.test(t))t=parseFloat(t);else return t;const i=ft(t,e.target.x),n=ft(t,e.target.y);return`${i}% ${n}%`}},we={correct:(t,{treeScale:e,projectionDelta:i})=>{const n=t,l=Q.parse(t);if(l.length>5)return n;const u=Q.createTransformer(t),s=typeof l[0]!="number"?1:0,o=i.x.scale*e.x,r=i.y.scale*e.y;l[0+s]/=o,l[1+s]/=r;const a=g(o,r,.5);return typeof l[2+s]=="number"&&(l[2+s]/=a),typeof l[3+s]=="number"&&(l[3+s]/=a),u(l)}};class Ue extends Gt.Component{componentDidMount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:n,layoutId:l}=this.props,{projection:u}=e;pe(Fe),u&&(i.group&&i.group.add(u),n&&n.register&&l&&n.register(u),u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),z.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:i,visualElement:n,drag:l,isPresent:u}=this.props,s=n.projection;return s&&(s.isPresent=u,l||e.layoutDependency!==i||i===void 0?s.willUpdate():this.safeToRemove(),e.isPresent!==u&&(u?s.promote():s.relegate()||L.postRender(()=>{const o=s.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:n}=this.props,{projection:l}=e;l&&(l.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(l),n&&n.deregister&&n.deregister(l))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Ht(t){const[e,i]=be(),n=U.useContext(ye);return Gt.createElement(Ue,{...t,layoutGroup:n,switchLayoutGroup:U.useContext(ge),isPresent:e,safeToRemove:i})}const Fe={borderRadius:{...b,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:b,borderTopRightRadius:b,borderBottomLeftRadius:b,borderBottomRightRadius:b,boxShadow:we},Wt=["TopLeft","TopRight","BottomLeft","BottomRight"],Ie=Wt.length,mt=t=>typeof t=="string"?parseFloat(t):t,pt=t=>typeof t=="number"||Nt.test(t);function Oe(t,e,i,n,l,u){l?(t.opacity=g(0,i.opacity!==void 0?i.opacity:1,Ne(n)),t.opacityExit=g(e.opacity!==void 0?e.opacity:1,0,Ge(n))):u&&(t.opacity=g(e.opacity!==void 0?e.opacity:1,i.opacity!==void 0?i.opacity:1,n));for(let s=0;s<Ie;s++){const o=`border${Wt[s]}Radius`;let r=yt(e,o),a=yt(i,o);if(r===void 0&&a===void 0)continue;r||(r=0),a||(a=0),r===0||a===0||pt(r)===pt(a)?(t[o]=Math.max(g(mt(r),mt(a),n),0),(H.test(a)||H.test(r))&&(t[o]+="%")):t[o]=a}(e.rotate||i.rotate)&&(t.rotate=g(e.rotate||0,i.rotate||0,n))}function yt(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const Ne=_t(0,.5,re),Ge=_t(.5,.95,M);function _t(t,e,i){return n=>n<t?0:n>e?1:i(Z(t,e,n))}function gt(t,e){t.min=e.min,t.max=e.max}function P(t,e){gt(t.x,e.x),gt(t.y,e.y)}function vt(t,e,i,n,l){return t-=e,t=tt(t,1/i,n),l!==void 0&&(t=tt(t,1/l,n)),t}function $e(t,e=0,i=1,n=.5,l,u=t,s=t){if(H.test(e)&&(e=parseFloat(e),e=g(s.min,s.max,e/100)-s.min),typeof e!="number")return;let o=g(u.min,u.max,n);t===u&&(o-=e),t.min=vt(t.min,e,i,o,l),t.max=vt(t.max,e,i,o,l)}function xt(t,e,[i,n,l],u,s){$e(t,e[i],e[n],e[l],e.scale,u,s)}const ze=["x","scaleX","originX"],He=["y","scaleY","originY"];function Pt(t,e,i,n){xt(t.x,e,ze,i?i.x:void 0,n?n.x:void 0),xt(t.y,e,He,i?i.y:void 0,n?n.y:void 0)}function Tt(t){return t.translate===0&&t.scale===1}function Xt(t){return Tt(t.x)&&Tt(t.y)}function We(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function Yt(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function Dt(t){return x(t.x)/x(t.y)}class _e{constructor(){this.members=[]}add(e){Ft(this.members,e),e.scheduleRender()}remove(e){if(It(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(e){const i=this.members.findIndex(l=>e===l);if(i===0)return!1;let n;for(let l=i;l>=0;l--){const u=this.members[l];if(u.isPresent!==!1){n=u;break}}return n?(this.promote(n),!0):!1}promote(e,i){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,i&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:l}=e.options;l===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:i,resumingFrom:n}=e;i.onExitComplete&&i.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function St(t,e,i){let n="";const l=t.x.translate/e.x,u=t.y.translate/e.y;if((l||u)&&(n=`translate3d(${l}px, ${u}px, 0) `),(e.x!==1||e.y!==1)&&(n+=`scale(${1/e.x}, ${1/e.y}) `),i){const{rotate:r,rotateX:a,rotateY:h}=i;r&&(n+=`rotate(${r}deg) `),a&&(n+=`rotateX(${a}deg) `),h&&(n+=`rotateY(${h}deg) `)}const s=t.x.scale*e.x,o=t.y.scale*e.y;return(s!==1||o!==1)&&(n+=`scale(${s}, ${o})`),n||"none"}const Xe=(t,e)=>t.depth-e.depth;class Ye{constructor(){this.children=[],this.isDirty=!1}add(e){Ft(this.children,e),this.isDirty=!0}remove(e){It(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Xe),this.isDirty=!1,this.children.forEach(e)}}function qe(t,e){const i=performance.now(),n=({timestamp:l})=>{const u=l-i;u>=e&&(O(n),t(u-e))};return L.read(n,!0),()=>O(n)}function Ze(t){window.MotionDebug&&window.MotionDebug.record(t)}function Ke(t){return t instanceof SVGElement&&t.tagName!=="svg"}function Je(t,e,i){const n=ve(t)?t:ae(t);return n.start(bt("",n,e,i)),n.animation}const Et=["","X","Y","Z"],Lt=1e3;let Qe=0;const A={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function qt({attachResizeListener:t,defaultParent:e,measureScroll:i,checkIsScrollRoot:n,resetTransform:l}){return class{constructor(s={},o=e==null?void 0:e()){this.id=Qe++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{A.totalNodes=A.resolvedTargetDeltas=A.recalculatedProjection=0,this.nodes.forEach(ii),this.nodes.forEach(ai),this.nodes.forEach(li),this.nodes.forEach(si),Ze(A)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let r=0;r<this.path.length;r++)this.path[r].shouldResetTransform=!0;this.root===this&&(this.nodes=new Ye)}addEventListener(s,o){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new le),this.eventHandlers.get(s).add(o)}notifyListeners(s,...o){const r=this.eventHandlers.get(s);r&&r.notify(...o)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,o=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Ke(s),this.instance=s;const{layoutId:r,layout:a,visualElement:h}=this.options;if(h&&!h.current&&h.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),o&&(a||r)&&(this.isLayoutDirty=!0),t){let c;const d=()=>this.root.updateBlockedByResize=!1;t(s,()=>{this.root.updateBlockedByResize=!0,c&&c(),c=qe(d,250),z.hasAnimatedSinceResize&&(z.hasAnimatedSinceResize=!1,this.nodes.forEach(jt))})}r&&this.root.registerSharedNode(r,this),this.options.animate!==!1&&h&&(r||a)&&this.addEventListener("didUpdate",({delta:c,hasLayoutChanged:d,hasRelativeTargetChanged:f,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||h.getDefaultTransition()||fi,{onLayoutAnimationStart:D,onLayoutAnimationComplete:T}=h.getProps(),j=!this.targetLayout||!Yt(this.targetLayout,p)||f,S=!d&&f;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||S||d&&(j||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(c,S);const R={...he(m,"layout"),onPlay:D,onComplete:T};(h.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R)}else d||jt(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,O(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(hi),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let h=0;h<this.path.length;h++){const c=this.path[h];c.shouldResetTransform=!0,c.updateScroll("snapshot"),c.options.layoutRoot&&c.willUpdate(!1)}const{layoutId:o,layout:r}=this.options;if(o===void 0&&!r)return;const a=this.getTransformTemplate();this.prevTransformTemplateValue=a?a(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Rt);return}this.isUpdating||this.nodes.forEach(oi),this.isUpdating=!1,this.nodes.forEach(ri),this.nodes.forEach(ti),this.nodes.forEach(ei),this.clearAllSnapshots();const o=performance.now();v.delta=Ot(0,1e3/60,o-v.timestamp),v.timestamp=o,v.isProcessing=!0,W.update.process(v),W.preRender.process(v),W.render.process(v),v.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(ni),this.sharedNodes.forEach(ci)}scheduleUpdateProjection(){L.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){L.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let r=0;r<this.path.length;r++)this.path[r].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=y(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let o=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(o=!1),o&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:n(this.instance),offset:i(this.instance)})}resetTransform(){if(!l)return;const s=this.isLayoutDirty||this.shouldResetTransform,o=this.projectionDelta&&!Xt(this.projectionDelta),r=this.getTransformTemplate(),a=r?r(this.latestValues,""):void 0,h=a!==this.prevTransformTemplateValue;s&&(o||B(this.latestValues)||h)&&(l(this.instance,a),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const o=this.measurePageBox();let r=this.removeElementScroll(o);return s&&(r=this.removeTransform(r)),mi(r),{animationId:this.root.animationId,measuredBox:o,layoutBox:r,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return y();const o=s.measureViewportBox(),{scroll:r}=this.root;return r&&(C(o.x,r.offset.x),C(o.y,r.offset.y)),o}removeElementScroll(s){const o=y();P(o,s);for(let r=0;r<this.path.length;r++){const a=this.path[r],{scroll:h,options:c}=a;if(a!==this.root&&h&&c.layoutScroll){if(h.isRoot){P(o,s);const{scroll:d}=this.root;d&&(C(o.x,-d.offset.x),C(o.y,-d.offset.y))}C(o.x,h.offset.x),C(o.y,h.offset.y)}}return o}applyTransform(s,o=!1){const r=y();P(r,s);for(let a=0;a<this.path.length;a++){const h=this.path[a];!o&&h.options.layoutScroll&&h.scroll&&h!==h.root&&N(r,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),B(h.latestValues)&&N(r,h.latestValues)}return B(this.latestValues)&&N(r,this.latestValues),r}removeTransform(s){const o=y();P(o,s);for(let r=0;r<this.path.length;r++){const a=this.path[r];if(!a.instance||!B(a.latestValues))continue;et(a.latestValues)&&a.updateSnapshot();const h=y(),c=a.measurePageBox();P(h,c),Pt(o,a.latestValues,a.snapshot?a.snapshot.layoutBox:void 0,h)}return B(this.latestValues)&&Pt(o,this.latestValues),o}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==v.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var o;const r=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=r.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=r.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=r.isSharedProjectionDirty);const a=!!this.resumingFrom||this!==r;if(!(s||a&&this.isSharedProjectionDirty||this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:c,layoutId:d}=this.options;if(!(!this.layout||!(c||d))){if(this.resolvedRelativeTargetAt=v.timestamp,!this.targetDelta&&!this.relativeTarget){const f=this.getClosestProjectingParent();f&&f.layout&&this.animationProgress!==1?(this.relativeParent=f,this.forceRelativeParentToResolveTarget(),this.relativeTarget=y(),this.relativeTargetOrigin=y(),I(this.relativeTargetOrigin,this.layout.layoutBox,f.layout.layoutBox),P(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=y(),this.targetWithTransforms=y()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),De(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):P(this.target,this.layout.layoutBox),ce(this.target,this.targetDelta)):P(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const f=this.getClosestProjectingParent();f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?(this.relativeParent=f,this.forceRelativeParentToResolveTarget(),this.relativeTarget=y(),this.relativeTargetOrigin=y(),I(this.relativeTargetOrigin,this.target,f.target),P(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}A.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||et(this.parent.latestValues)||ue(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const o=this.getLead(),r=!!this.resumingFrom||this!==o;let a=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(a=!1),r&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(a=!1),this.resolvedRelativeTargetAt===v.timestamp&&(a=!1),a)return;const{layout:h,layoutId:c}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||c))return;P(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,f=this.treeScale.y;de(this.layoutCorrected,this.treeScale,this.path,r),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox);const{target:p}=o;if(!p){this.projectionTransform&&(this.projectionDelta=V(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=V(),this.projectionDeltaWithTransform=V());const m=this.projectionTransform;F(this.projectionDelta,this.layoutCorrected,p,this.latestValues),this.projectionTransform=St(this.projectionDelta,this.treeScale),(this.projectionTransform!==m||this.treeScale.x!==d||this.treeScale.y!==f)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p)),A.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const o=this.getStack();o&&o.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,o=!1){const r=this.snapshot,a=r?r.latestValues:{},h={...this.latestValues},c=V();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const d=y(),f=r?r.source:void 0,p=this.layout?this.layout.source:void 0,m=f!==p,D=this.getStack(),T=!D||D.members.length<=1,j=!!(m&&!T&&this.options.crossfade===!0&&!this.path.some(di));this.animationProgress=0;let S;this.mixTargetDelta=R=>{const k=R/1e3;At(c.x,s.x,k),At(c.y,s.y,k),this.setTargetDelta(c),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(I(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),ui(this.relativeTarget,this.relativeTargetOrigin,d,k),S&&We(this.relativeTarget,S)&&(this.isProjectionDirty=!1),S||(S=y()),P(S,this.relativeTarget)),m&&(this.animationValues=h,Oe(h,a,this.latestValues,k,j,T)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(O(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=L.update(()=>{z.hasAnimatedSinceResize=!0,this.currentAnimation=Je(0,Lt,{...s,onUpdate:o=>{this.mixTargetDelta(o),s.onUpdate&&s.onUpdate(o)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Lt),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:o,target:r,layout:a,latestValues:h}=s;if(!(!o||!r||!a)){if(this!==s&&this.layout&&a&&Zt(this.options.animationType,this.layout.layoutBox,a.layoutBox)){r=this.target||y();const c=x(this.layout.layoutBox.x);r.x.min=s.target.x.min,r.x.max=r.x.min+c;const d=x(this.layout.layoutBox.y);r.y.min=s.target.y.min,r.y.max=r.y.min+d}P(o,r),N(o,h),F(this.projectionDeltaWithTransform,this.layoutCorrected,o,h)}}registerSharedNode(s,o){this.sharedNodes.has(s)||this.sharedNodes.set(s,new _e),this.sharedNodes.get(s).add(o);const a=o.options.initialPromotionConfig;o.promote({transition:a?a.transition:void 0,preserveFollowOpacity:a&&a.shouldPreserveFollowOpacity?a.shouldPreserveFollowOpacity(o):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:o}=this.options;return o?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:o}=this.options;return o?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:o,preserveFollowOpacity:r}={}){const a=this.getStack();a&&a.promote(this,r),s&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let o=!1;const{latestValues:r}=s;if((r.rotate||r.rotateX||r.rotateY||r.rotateZ)&&(o=!0),!o)return;const a={};for(let h=0;h<Et.length;h++){const c="rotate"+Et[h];r[c]&&(a[c]=r[c],s.setStaticValue(c,0))}s.render();for(const h in a)s.setStaticValue(h,a[h]);s.scheduleRender()}getProjectionStyles(s={}){var o,r;const a={};if(!this.instance||this.isSVG)return a;if(this.isVisible)a.visibility="";else return{visibility:"hidden"};const h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,a.opacity="",a.pointerEvents=_(s.pointerEvents)||"",a.transform=h?h(this.latestValues,""):"none",a;const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){const m={};return this.options.layoutId&&(m.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,m.pointerEvents=_(s.pointerEvents)||""),this.hasProjected&&!B(this.latestValues)&&(m.transform=h?h({},""):"none",this.hasProjected=!1),m}const d=c.animationValues||c.latestValues;this.applyTransformsToTarget(),a.transform=St(this.projectionDeltaWithTransform,this.treeScale,d),h&&(a.transform=h(d,a.transform));const{x:f,y:p}=this.projectionDelta;a.transformOrigin=`${f.origin*100}% ${p.origin*100}% 0`,c.animationValues?a.opacity=c===this?(r=(o=d.opacity)!==null&&o!==void 0?o:this.latestValues.opacity)!==null&&r!==void 0?r:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:a.opacity=c===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const m in it){if(d[m]===void 0)continue;const{correct:D,applyTo:T}=it[m],j=a.transform==="none"?d[m]:D(d[m],c);if(T){const S=T.length;for(let R=0;R<S;R++)a[T[R]]=j}else a[m]=j}return this.options.layoutId&&(a.pointerEvents=c===this?_(s.pointerEvents)||"":"none"),a}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var o;return(o=s.currentAnimation)===null||o===void 0?void 0:o.stop()}),this.root.nodes.forEach(Rt),this.root.sharedNodes.clear()}}}function ti(t){t.updateLayout()}function ei(t){var e;const i=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&i&&t.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:l}=t.layout,{animationType:u}=t.options,s=i.source!==t.layout.source;u==="size"?E(c=>{const d=s?i.measuredBox[c]:i.layoutBox[c],f=x(d);d.min=n[c].min,d.max=d.min+f}):Zt(u,i.layoutBox,n)&&E(c=>{const d=s?i.measuredBox[c]:i.layoutBox[c],f=x(n[c]);d.max=d.min+f,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[c].max=t.relativeTarget[c].min+f)});const o=V();F(o,n,i.layoutBox);const r=V();s?F(r,t.applyTransform(l,!0),i.measuredBox):F(r,n,i.layoutBox);const a=!Xt(o);let h=!1;if(!t.resumeFrom){const c=t.getClosestProjectingParent();if(c&&!c.resumeFrom){const{snapshot:d,layout:f}=c;if(d&&f){const p=y();I(p,i.layoutBox,d.layoutBox);const m=y();I(m,n,f.layoutBox),Yt(p,m)||(h=!0),c.options.layoutRoot&&(t.relativeTarget=m,t.relativeTargetOrigin=p,t.relativeParent=c)}}}t.notifyListeners("didUpdate",{layout:n,snapshot:i,delta:r,layoutDelta:o,hasLayoutChanged:a,hasRelativeTargetChanged:h})}else if(t.isLead()){const{onExitComplete:n}=t.options;n&&n()}t.options.transition=void 0}function ii(t){A.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function si(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function ni(t){t.clearSnapshot()}function Rt(t){t.clearMeasurements()}function oi(t){t.isLayoutDirty=!1}function ri(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function jt(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function ai(t){t.resolveTargetDelta()}function li(t){t.calcProjection()}function hi(t){t.resetRotation()}function ci(t){t.removeLeadSnapshot()}function At(t,e,i){t.translate=g(e.translate,0,i),t.scale=g(e.scale,1,i),t.origin=e.origin,t.originPoint=e.originPoint}function Bt(t,e,i,n){t.min=g(e.min,i.min,n),t.max=g(e.max,i.max,n)}function ui(t,e,i,n){Bt(t.x,e.x,i.x,n),Bt(t.y,e.y,i.y,n)}function di(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const fi={duration:.45,ease:[.4,0,.1,1]},Ct=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),Vt=Ct("applewebkit/")&&!Ct("chrome/")?Math.round:M;function Mt(t){t.min=Vt(t.min),t.max=Vt(t.max)}function mi(t){Mt(t.x),Mt(t.y)}function Zt(t,e,i){return t==="position"||t==="preserve-aspect"&&!K(Dt(e),Dt(i),.2)}const pi=qt({attachResizeListener:(t,e)=>wt(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),q={current:void 0},Kt=qt({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!q.current){const t=new pi({});t.mount(window),t.setOptions({layoutScroll:!0}),q.current=t}return q.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),yi={pan:{Feature:ke},drag:{Feature:Me,ProjectionNode:Kt,MeasureLayout:Ht}},gi={layout:{ProjectionNode:Kt,MeasureLayout:Ht}},Si={...fe,...yi,...gi};export{Si as default};
