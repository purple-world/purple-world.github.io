(this["webpackJsonppurple-world"]=this["webpackJsonppurple-world"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/logo.e66818ef.svg"},23:function(e,t,a){e.exports=a(44)},33:function(e,t,a){e.exports=a.p+"static/media/phase-1.782e05e9.png"},34:function(e,t,a){e.exports=a.p+"static/media/phase-2.75edd59c.png"},35:function(e,t,a){e.exports=a.p+"static/media/phase-3.2e8ce942.png"},36:function(e,t,a){e.exports=a.p+"static/media/map.b52cb8a5.png"},37:function(e,t,a){e.exports=a.p+"static/media/map2.4f69865a.png"},38:function(e,t,a){e.exports=a.p+"static/media/Immigrant.7477d26b.png"},39:function(e,t,a){e.exports=a.p+"static/media/farmer.0376e513.png"},40:function(e,t,a){e.exports=a.p+"static/media/bureaucrat.b20f6c47.png"},41:function(e,t,a){e.exports=a.p+"static/media/coastguard.5794b8d5.png"},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(21),o=a.n(n),l=a(5),s=a(9),c=a(2),m=["component","layout"],d=function(e){var t=e.component,a=e.layout,r=Object(c.a)(e,m);return a=void 0===a?function(e){return i.a.createElement(i.a.Fragment,null,e.children)}:a,i.a.createElement(l.a,Object.assign({},r,{render:function(e){return i.a.createElement(a,null,i.a.createElement(t,e))}}))},u=a(6),v=a(4),b=a.n(v),p=a(15),h=i.a.forwardRef((function(e,t){var a=Object(r.useState)(window.innerHeight),n=Object(u.a)(a,2),o=n[0],l=n[1],s=Object(r.useState)([]),c=Object(u.a)(s,2),m=c[0],d=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},b=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),r=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=o-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,r)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(r.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(r.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),b())}),[m]);var h=function(){v()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(p.throttle)((function(){h(),b()}),30),E=Object(p.throttle)((function(){l(window.innerHeight)}),30);return Object(r.useEffect)((function(){h(),b()}),[o]),i.a.createElement(i.a.Fragment,null,e.children())}));h.propTypes={children:b.a.func.isRequired};var f=h,E=a(13),g=a(1),N=a.n(g),O=a(8),w=["className","src","width","height","alt"],j=function(e){var t=e.className,a=e.src,n=e.width,o=e.height,l=e.alt,s=Object(c.a)(e,w),m=Object(r.useState)(!1),d=Object(u.a)(m,2),v=d[0],b=d[1],p=Object(r.useRef)(null);Object(r.useEffect)((function(){h(p.current)}),[]);var h=function(e){var t,a,r=document.createElement("img");v||(e.style.display="none",e.before(r),r.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),r.width=e.getAttribute("width"),r.height=e.getAttribute("height"),r.style.opacity="0",e.className&&r.classList.add(e.className),r.remove(),e.style.display="")};return i.a.createElement("img",Object.assign({},s,{ref:p,className:t,src:a,width:n,height:o,alt:l,onLoad:function(){b(!0)}}))};j.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var D=j,y=["className"],C=function(e){var t=e.className,r=Object(c.a)(e,y),n=N()("brand",t);return i.a.createElement("div",Object.assign({},r,{className:n}),i.a.createElement("h1",{className:"m-0"},i.a.createElement(O.a,{to:"/"},i.a.createElement(D,{src:a(20),alt:"Open",width:32,height:32}))))},x=["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"],k=function(e){var t=e.className,a=e.navPosition,n=e.hideNav,o=e.hideSignin,l=e.bottomOuterDivider,s=e.bottomDivider,m=Object(c.a)(e,x),d=Object(r.useState)(!1),v=Object(u.a)(d,2),b=v[0],p=v[1],h=Object(r.useRef)(null),f=Object(r.useRef)(null);Object(r.useEffect)((function(){return b&&E(),document.addEventListener("keydown",w),document.addEventListener("click",j),function(){document.removeEventListener("keydown",w),document.removeEventListener("click",j),g()}}));var E=function(){document.body.classList.add("off-nav-is-active"),h.current.style.maxHeight=h.current.scrollHeight+"px",p(!0)},g=function(){document.body.classList.remove("off-nav-is-active"),h.current&&(h.current.style.maxHeight=null),p(!1)},w=function(e){b&&27===e.keyCode&&g()},j=function(e){h.current&&b&&!h.current.contains(e.target)&&e.target!==f.current&&g()},D=N()("site-header",l&&"has-bottom-divider",t);return i.a.createElement("header",Object.assign({},m,{className:D}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:N()("site-header-inner",s&&"has-bottom-divider")},i.a.createElement(C,null),!n&&i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{ref:f,className:"header-nav-toggle",onClick:b?g:E},i.a.createElement("span",{className:"screen-reader"},"Menu"),i.a.createElement("span",{className:"hamburger"},i.a.createElement("span",{className:"hamburger-inner"}))),i.a.createElement("nav",{ref:h,className:N()("header-nav",b&&"is-active")},i.a.createElement("div",{className:"header-nav-inner"},i.a.createElement("ul",{className:N()("list-reset text-xs",a&&"header-nav-".concat(a))},i.a.createElement("li",null,i.a.createElement(O.a,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(O.a,{to:"/rules"},"Rules")),i.a.createElement("li",null,i.a.createElement(O.a,{to:"/occupations"},"Occupations")),i.a.createElement("li",null,i.a.createElement(O.a,{to:"/wiki"},"Wiki"))),!o&&i.a.createElement("ul",{className:"list-reset header-nav-right"},i.a.createElement("li",null,i.a.createElement(O.a,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:g},"Sign in")))))))))};k.defaultProps={navPosition:"",hideNav:!1,hideSignin:!0,bottomOuterDivider:!1,bottomDivider:!1};var S=k,P=["className","topOuterDivider","topDivider"],F=function(e){var t=e.className,a=e.topOuterDivider,r=e.topDivider,n=Object(c.a)(e,P),o=N()("site-footer center-content-mobile",a&&"has-top-divider",t);return i.a.createElement("footer",Object.assign({},n,{className:o}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:N()("site-footer-inner",r&&"has-top-divider")},i.a.createElement("div",{className:"footer-top space-between text-xxs"},i.a.createElement(C,null)),i.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},i.a.createElement("div",{className:"footer-copyright"},i.a.createElement("a",{href:"https://development.house"},"\xa9 2022 development.house")," All right reserved")))))};F.defaultProps={topOuterDivider:!1,topDivider:!1};var L=F,T=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(S,{navPosition:"right",className:"reveal-from-bottom"}),i.a.createElement("main",{className:"site-content"},t),i.a.createElement(L,null))},B=a(3),A={types:{topOuterDivider:b.a.bool,bottomOuterDivider:b.a.bool,topDivider:b.a.bool,bottomDivider:b.a.bool,hasBgColor:b.a.bool,invertColor:b.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},R={types:Object(B.a)({},A.types),defaults:Object(B.a)({},A.defaults)},H={types:Object(B.a)(Object(B.a)({},A.types),{},{invertMobile:b.a.bool,invertDesktop:b.a.bool,alignTop:b.a.bool,imageFill:b.a.bool}),defaults:Object(B.a)(Object(B.a)({},A.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},_={types:Object(B.a)(Object(B.a)({},A.types),{},{pushLeft:b.a.bool}),defaults:Object(B.a)(Object(B.a)({},A.defaults),{},{pushLeft:!1})},M=["className"],W=function(e){var t=e.className,a=Object(c.a)(e,M),r=N()("button-group",t);return i.a.createElement("div",Object.assign({},a,{className:r}))},z=["className","tag","href","target","color","size","loading","wide","wideMobile","disabled"],I=function(e){var t=e.className,a=e.tag,r=e.href,n=e.target,o=e.color,l=e.size,s=e.loading,m=e.wide,d=e.wideMobile,u=e.disabled,v=Object(c.a)(e,z),b=N()("button",o&&"button-".concat(o),l&&"button-".concat(l),s&&"is-loading",m&&"button-block",d&&"button-wide-mobile",t),p=a;return i.a.createElement(p,Object.assign({},v,{href:r,target:n,className:b,disabled:u}))};I.defaultProps={tag:"button",href:"#",target:"_blank",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var q=I,U=["className","children","handleClose","innerContent","show","closeHidden","video","videoTag"],J=function(e){var t=e.className,a=(e.children,e.handleClose),n=e.innerContent,o=e.show,l=e.closeHidden,s=e.video,m=e.videoTag,d=Object(c.a)(e,U);Object(r.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",b),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",b)}})),Object(r.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&a(e)},b=function(e){e.stopPropagation()},p=N()("modal",o&&"is-active",s&&"modal-video",t);return i.a.createElement(i.a.Fragment,null,o&&i.a.createElement("div",Object.assign({},d,{className:p,onClick:a}),i.a.createElement("div",{className:"modal-inner",onClick:b},s?i.a.createElement("div",{className:"responsive-video"},"iframe"===m?i.a.createElement("iframe",{title:"video",src:s,frameBorder:"0",allowFullScreen:!0}):i.a.createElement("video",{"v-else":!0,controls:!0,src:s})):i.a.createElement(i.a.Fragment,null,!l&&i.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:a})),n)))};J.defaultProps={children:null,show:!1,closeHidden:!1,video:"",content:"",videoTag:"iframe"};var G=J,K=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"],Q=Object(B.a)({},R.defaults),V=function(e){var t=e.className,n=e.topOuterDivider,o=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,m=e.hasBgColor,d=e.invertColor,v=Object(c.a)(e,K),b=Object(r.useState)(!1),p=Object(u.a)(b,2),h=(p[0],p[1],Object(r.useState)(!1)),f=Object(u.a)(h,2),E=(f[0],f[1],Object(r.useState)(!1)),g=Object(u.a)(E,2),O=g[0],w=g[1],j=Object(r.useState)(!1),y=Object(u.a)(j,2),C=y[0],x=y[1],k=N()("hero section center-content",n&&"has-top-divider",o&&"has-bottom-divider",m&&"has-bg-color",d&&"invert-color",t),S=N()("hero-inner section-inner",l&&"has-top-divider",s&&"has-bottom-divider");return i.a.createElement("section",Object.assign({id:"Home"},v,{className:k}),i.a.createElement("div",{className:"container-sm"},i.a.createElement("div",{className:S},i.a.createElement("div",{className:"hero-content"},i.a.createElement(D,{className:"mb-24",src:a(20),alt:"Hero",width:225,height:225})),i.a.createElement("div",{className:"hero-content"},i.a.createElement("h1",{className:"mt-10 mb-8 logo-text"},"Purple World:"),i.a.createElement("h1",{className:"mt-0 mb-16 logo-text"},"Once Upon a Time in Cayo"),i.a.createElement("div",{className:"container-xs"},i.a.createElement("p",{className:"m-0 mb-32"}),i.a.createElement("div",null,i.a.createElement(W,null,i.a.createElement(q,{tag:"a",className:"main-button",color:"black",onClick:function(e){e.preventDefault(),w(!0)},wideMobile:!0,href:"https://cruip.com/"},"Apply Now"))))),i.a.createElement(G,{id:"lore-modal",show:O,handleClose:function(e){e.preventDefault(),w(!1)},innerContent:i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"mt-24 mb-24 modal-p button-grid"},i.a.createElement(q,{tag:"a",href:"https://discord.gg/QZSbkCF39w",className:"button-middle"},"Join our discord and apply")))}),i.a.createElement(G,{id:"packages-modal",show:C,handleClose:function(e){e.preventDefault(),x(!1)},innerContent:i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"mb-32 modal-p"}))}))))};V.defaultProps=Q;var Y=V,Z=["className","data","children","tag"],$=function(e){var t=e.className,a=e.data,r=e.children,n=e.tag,o=Object(c.a)(e,Z),l=N()("section-header",t),s=n;return i.a.createElement(i.a.Fragment,null,(a.title||a.paragraph)&&i.a.createElement("div",Object.assign({},o,{className:l}),i.a.createElement("div",{className:"container-xs"},r,a.title&&i.a.createElement(s,{className:N()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&i.a.createElement("p",{className:"m-0"},a.paragraph))))};$.defaultProps={children:null,tag:"h2"};var X=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"],ee=Object(B.a)({},H.defaults),te=function(e){var t=e.className,r=e.topOuterDivider,n=e.bottomOuterDivider,o=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,b=e.imageFill,p=Object(c.a)(e,X),h=N()("features-split section",r&&"has-top-divider",n&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),f=N()("features-split-inner section-inner",o&&"has-top-divider",l&&"has-bottom-divider"),E=N()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return i.a.createElement("section",Object.assign({id:"Features"},p,{className:h}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:f},i.a.createElement("div",{className:"center-content reveal-from-bottom","data-reveal-delay":"400"},"Purple World is a seasonal, story-based RP community."),i.a.createElement("div",{className:"center-content reveal-from-bottom","data-reveal-delay":"400"},"Through our traditional campaign style aproach to roleplay, players"),i.a.createElement("div",{className:"center-content reveal-from-bottom","data-reveal-delay":"400"},"and staff have the ability to create a genuinely unique experience."),i.a.createElement("div",{className:E},i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("h3",{className:"mt-0 mb-12"},"Initial Draft"),i.a.createElement("p",{className:"m-0"},"Recruitment is underway to gather the right people to complete the final draft of season one. This includes world ideation, faction building, and gameplay development.")),i.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",b&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(D,{src:a(33),alt:"Features split 01",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},i.a.createElement("h3",{className:"mt-0 mb-12"},"Testing"),i.a.createElement("p",{className:"m-0"},"A limited testing group will be established when the majority of gameplay development is complete.")),i.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",b&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(D,{src:a(34),alt:"Features split 02",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("h3",{className:"mt-0 mb-12"},"Season One Release"),i.a.createElement("p",{className:"m-0"},"The server will open every weekend Friday-Sunday starting Friday at 6pm EST."),i.a.createElement("p",{className:"m-0"},"Players will be able to select from available factions to create their character. New factions will become available as the seasons progress.")),i.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",b&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(D,{src:a(35),alt:"Features split 01",width:528,height:396})))))))};te.defaultProps=ee;var ae=te,re=["className","children","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"],ie=Object(B.a)({children:null},R.defaults),ne=function(e){var t=e.className,r=e.children,n=e.topOuterDivider,o=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,m=e.hasBgColor,d=e.invertColor,u=Object(c.a)(e,re),v=N()("section",n&&"has-top-divider",o&&"has-bottom-divider",m&&"has-bg-color",d&&"invert-color",t),b=N()("section-inner",l&&"has-top-divider",s&&"has-bottom-divider");return i.a.createElement("section",Object.assign({},u,{className:v}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:b},i.a.createElement("p",{className:"mt-32 mb-32 modal-p"},"Set in an archipelago off the coast of Panama, a small island with a robust heritage has initiated a repopulation edict intended to bolster its boatmaking, sugar, and tobacco industries."),i.a.createElement(D,{src:a(36)}),i.a.createElement("p",{className:"mt-32 mb-32 modal-p"},"The island known as Cayo Perico, formerly a military dictatorship steming from remenents of the Panama Defense Force, now looks to thrive as an internationally recognized republic."),i.a.createElement(D,{width:450,className:"image-center",src:a(37)}),i.a.createElement("p",{className:"mt-32 mb-32 modal-p"},"Just to the north of Cayo Perico is San Andreas, a trading and military partner with the United States. Due to recent increased illegal drug activity and threats of terrorism the United States has dispatched Its 12th fleet to aid in enforcing maritime law in accordance with the San Andreas Maritime Delimitation Treaty."),r)))};ne.defaultProps=ie;var oe=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],le=Object(B.a)({},_.defaults),se=function(e){var t=e.className,r=e.topOuterDivider,n=e.bottomOuterDivider,o=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(c.a)(e,oe),v=N()("features-tiles section",r&&"has-top-divider",n&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),b=N()("features-tiles-inner section-inner pt-0",o&&"has-top-divider",l&&"has-bottom-divider"),p=N()("tiles-wrap center-content",d&&"push-left");return i.a.createElement("section",Object.assign({id:"Features"},u,{className:v}),i.a.createElement("div",{className:"center-content mb-16"},i.a.createElement("div",null),i.a.createElement("div",null)),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:b},i.a.createElement("div",{className:p},i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"mb-16"},i.a.createElement(D,{src:a(38),alt:"Features tile icon 01",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Immigrant"),i.a.createElement("p",{className:"m-0 text-sm"},"You are an immigrant to the newfound Republic of Cayo Perico.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"mb-16"},i.a.createElement(D,{src:a(39),alt:"Features tile icon 02",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Farmer"),i.a.createElement("p",{className:"m-0 text-sm"},"The future of Cayo Perico depends on your tobacco and sugar cane crops.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"mb-16"},i.a.createElement(D,{src:a(40),alt:"Features tile icon 04",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Bureaucrat"),i.a.createElement("p",{className:"m-0 text-sm"},"Bureaucrats do all the day-to-day work that keeps a government running.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"mb-16"},i.a.createElement(D,{src:a(41),alt:"Features tile icon 03",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Coast Guard"),i.a.createElement("p",{className:"m-0 text-sm"},"As a member of the Coast Guard you are sworn to enforce maritime law."))))))))};se.defaultProps=le;var ce=se,me=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Y,{className:"illustration-section-01"}),i.a.createElement(ae,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}))},de=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"],ue=Object(B.a)({},R.defaults),ve=function(e){var t=e.className,a=e.topOuterDivider,n=e.bottomOuterDivider,o=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=Object(c.a)(e,de),v=Object(r.useState)(!1),b=Object(u.a)(v,2),p=(b[0],b[1],Object(r.useState)(!1)),h=Object(u.a)(p,2),f=h[0],E=h[1],g=N()("hero section center-content",a&&"has-top-divider",n&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),O=N()("hero-inner section-inner",o&&"has-top-divider",l&&"has-bottom-divider");return i.a.createElement("section",Object.assign({id:"Home"},d,{className:g}),i.a.createElement("div",{className:"container-sm"},i.a.createElement("div",{className:O},i.a.createElement("div",{className:"hero-content"},i.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom logo-text","data-reveal-delay":"200"},"Rules"),i.a.createElement("div",{className:"container-xs"},i.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Community rules are a code of conduct all members must abide by in order to remain in good standing."),i.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Roleplay rules serve as a guide to help players understand the expectations of RP."),i.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"}))),i.a.createElement(G,{id:"roadmap-modal",show:f,handleClose:function(e){e.preventDefault(),E(!1)}}))))};ve.defaultProps=ue;var be=ve,pe=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(be,{className:"illustration-section-01"}))},he=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"],fe=Object(B.a)({},R.defaults),Ee=function(e){var t=e.className,a=e.topOuterDivider,n=e.bottomOuterDivider,o=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=Object(c.a)(e,he),v=Object(r.useState)(!1),b=Object(u.a)(v,2),p=(b[0],b[1],Object(r.useState)(!1)),h=Object(u.a)(p,2),f=(h[0],h[1],N()("hero section center-content",a&&"has-top-divider",n&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t)),E=N()("hero-inner section-inner",o&&"has-top-divider",l&&"has-bottom-divider");return i.a.createElement("section",Object.assign({id:"Home"},d,{className:f}),i.a.createElement("div",{className:"container-sm"},i.a.createElement("div",{className:E},i.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom logo-text","data-reveal-delay":"200"},"Occupations"))))};Ee.defaultProps=fe;var ge=Ee,Ne=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(ge,{className:"illustration-section-01"}),i.a.createElement(ce,null))},Oe=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"],we=Object(B.a)({},R.defaults),je=function(e){var t=e.className,a=e.topOuterDivider,n=e.bottomOuterDivider,o=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=Object(c.a)(e,Oe),v=Object(r.useState)(!1),b=Object(u.a)(v,2),p=(b[0],b[1],Object(r.useState)(!1)),h=Object(u.a)(p,2),f=h[0],E=h[1],g=N()("hero section center-content",a&&"has-top-divider",n&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),O=N()("hero-inner section-inner",o&&"has-top-divider",l&&"has-bottom-divider");return i.a.createElement("section",Object.assign({id:"Home"},d,{className:g}),i.a.createElement("div",{className:"container-sm"},i.a.createElement("div",{className:O},i.a.createElement("div",{className:"hero-content"},i.a.createElement("div",{className:"container-xs"},i.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Coming Soon."),i.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"}))),i.a.createElement(G,{id:"roadmap-modal",show:f,handleClose:function(e){e.preventDefault(),E(!1)}}))))};je.defaultProps=we;var De=je,ye=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(De,{className:"illustration-section-01"}))};E.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"https://purpleworld.gg",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var Ce=function(){var e=Object(r.useRef)(),t=Object(l.f)();return Object(r.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){E.a.set({page:e}),E.a.pageview(e)}(a)}),[t]),i.a.createElement(f,{ref:e,children:function(){return i.a.createElement(l.c,null,i.a.createElement(d,{exact:!0,path:"/",component:me,layout:T}),i.a.createElement(d,{exact:!0,path:"/rules",component:pe,layout:T}),i.a.createElement(d,{exact:!0,path:"/occupations",component:Ne,layout:T}),i.a.createElement(d,{exact:!0,path:"/wiki",component:ye,layout:T}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(42),a(43);var xe=Object(s.a)();o.a.render(i.a.createElement(l.b,{history:xe},i.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.947d60be.chunk.js.map