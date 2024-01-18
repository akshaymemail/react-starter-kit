import{a as x,c as m}from"./index-Zs2S5IeP.js";function k(a,s){if(a==null)return{};var o={},i=Object.keys(a),e,t;for(t=0;t<i.length;t++)e=i[t],!(s.indexOf(e)>=0)&&(o[e]=a[e]);return o}function T(a,s){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,e){return i.__proto__=e,i},T(a,s)}function y(a,s){a.prototype=Object.create(s.prototype),a.prototype.constructor=a,T(a,s)}const S={disabled:!1},N=x.createContext(null);var C=function(s){return s.scrollTop},v="unmounted",l="exited",f="entering",h="entered",b="exiting",p=function(a){y(s,a);function s(i,e){var t;t=a.call(this,i,e)||this;var n=e,r=n&&!n.isMounting?i.enter:i.appear,u;return t.appearStatus=null,i.in?r?(u=l,t.appearStatus=f):u=h:i.unmountOnExit||i.mountOnEnter?u=v:u=l,t.state={status:u},t.nextCallback=null,t}s.getDerivedStateFromProps=function(e,t){var n=e.in;return n&&t.status===v?{status:l}:null};var o=s.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==h&&(t=f):(n===f||n===h)&&(t=b)}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e=this.props.timeout,t,n,r;return t=n=r=e,e!=null&&typeof e!="number"&&(t=e.exit,n=e.enter,r=e.appear!==void 0?e.appear:n),{exit:t,enter:n,appear:r}},o.updateStatus=function(e,t){if(e===void 0&&(e=!1),t!==null)if(this.cancelNextCallback(),t===f){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:m.findDOMNode(this);n&&C(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===l&&this.setState({status:v})},o.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,u=this.props.nodeRef?[r]:[m.findDOMNode(this),r],c=u[0],E=u[1],O=this.getTimeouts(),g=r?O.appear:O.enter;if(!e&&!n||S.disabled){this.safeSetState({status:h},function(){t.props.onEntered(c)});return}this.props.onEnter(c,E),this.safeSetState({status:f},function(){t.props.onEntering(c,E),t.onTransitionEnd(g,function(){t.safeSetState({status:h},function(){t.props.onEntered(c,E)})})})},o.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:m.findDOMNode(this);if(!t||S.disabled){this.safeSetState({status:l},function(){e.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:b},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:l},function(){e.props.onExited(r)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},o.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},o.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:m.findDOMNode(this),r=e==null&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],c=u[0],E=u[1];this.props.addEndListener(c,E)}e!=null&&setTimeout(this.nextCallback,e)},o.render=function(){var e=this.state.status;if(e===v)return null;var t=this.props,n=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var r=k(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return x.createElement(N.Provider,{value:null},typeof n=="function"?n(e,r):x.cloneElement(x.Children.only(n),r))},s}(x.Component);p.contextType=N;p.propTypes={};function d(){}p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:d,onEntering:d,onEntered:d,onExit:d,onExiting:d,onExited:d};p.UNMOUNTED=v;p.EXITED=l;p.ENTERING=f;p.ENTERED=h;p.EXITING=b;export{p as T};
