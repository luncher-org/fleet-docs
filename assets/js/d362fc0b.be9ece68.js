"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[3795],{5680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>g});var r=a(6540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=c(a),p=l,g=h["".concat(i,".").concat(p)]||h[p]||u[p]||n;return a?r.createElement(g,s(s({ref:t},d),{},{components:a})):r.createElement(g,s({ref:t},d))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,s=new Array(n);s[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[h]="string"==typeof e?e:l,s[1]=o;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2432:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=a(8168),l=(a(6540),a(5680));const n={title:"v0.5.2",date:"2023-02-23 08:01:03 +0000 UTC"},s=void 0,o={unversionedId:"changelogs/changelogs/v0.5.2",id:"version-0.5/changelogs/changelogs/v0.5.2",title:"v0.5.2",description:"(rancherio-gh-m) released this 2023-02-23 0803 +0000 UTC",source:"@site/versioned_docs/version-0.5/changelogs/changelogs/v0.5.2.md",sourceDirName:"changelogs/changelogs",slug:"/changelogs/changelogs/v0.5.2",permalink:"/0.5/changelogs/changelogs/v0.5.2",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.5/changelogs/changelogs/v0.5.2.md",tags:[],version:"0.5",lastUpdatedAt:1728640327,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{title:"v0.5.2",date:"2023-02-23 08:01:03 +0000 UTC"},sidebar:"docs",previous:{title:"v0.5.1",permalink:"/0.5/changelogs/changelogs/v0.5.1"},next:{title:"v0.5.3",permalink:"/0.5/changelogs/changelogs/v0.5.3"}},i={},c=[{value:"Description",id:"description",level:2},{value:"Download",id:"download",level:2}],d={toc:c},h="wrapper";function u(e){let{components:t,...a}=e;return(0,l.yg)(h,(0,r.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"(rancherio-gh-m) released this 2023-02-23 08:01:03 +0000 UTC*")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("h2",null,"What's Changed"),(0,l.yg)("ul",null,(0,l.yg)("li",null,"Disable Gitops Feature Breaks Fleet Controller Deployment by ",(0,l.yg)("a",{class:"user-mention notranslate","data-hovercard-type":"user","data-hovercard-url":"/users/thardeck/hovercard","data-octo-click":"hovercard-link-click","data-octo-dimensions":"link_type:self",href:"https://github.com/thardeck"},"@thardeck")," in ",(0,l.yg)("a",{class:"issue-link js-issue-link","data-error-text":"Failed to load title","data-id":"1502700385","data-permission-text":"Title is private","data-url":"https://github.com/rancher/fleet/issues/1195","data-hovercard-type":"pull_request","data-hovercard-url":"/rancher/fleet/pull/1195/hovercard",href:"https://github.com/rancher/fleet/pull/1195"},"#1195")),(0,l.yg)("li",null,"Add emptyDir volume to Fleet controller for /tmp by ",(0,l.yg)("a",{class:"user-mention notranslate","data-hovercard-type":"user","data-hovercard-url":"/users/thardeck/hovercard","data-octo-click":"hovercard-link-click","data-octo-dimensions":"link_type:self",href:"https://github.com/thardeck"},"@thardeck")," in ",(0,l.yg)("a",{class:"issue-link js-issue-link","data-error-text":"Failed to load title","data-id":"1504797073","data-permission-text":"Title is private","data-url":"https://github.com/rancher/fleet/issues/1202","data-hovercard-type":"pull_request","data-hovercard-url":"/rancher/fleet/pull/1202/hovercard",href:"https://github.com/rancher/fleet/pull/1202"},"#1202")),(0,l.yg)("li",null,"Bump bci images in release/v0.5 branch by ",(0,l.yg)("a",{class:"user-mention notranslate","data-hovercard-type":"user","data-hovercard-url":"/users/thardeck/hovercard","data-octo-click":"hovercard-link-click","data-octo-dimensions":"link_type:self",href:"https://github.com/thardeck"},"@thardeck")," in ",(0,l.yg)("a",{class:"issue-link js-issue-link","data-error-text":"Failed to load title","data-id":"1530498191","data-permission-text":"Title is private","data-url":"https://github.com/rancher/fleet/issues/1241","data-hovercard-type":"pull_request","data-hovercard-url":"/rancher/fleet/pull/1241/hovercard",href:"https://github.com/rancher/fleet/pull/1241"},"#1241")),(0,l.yg)("li",null,"Go dependencies and SLE-BCI bumps by ",(0,l.yg)("a",{class:"user-mention notranslate","data-hovercard-type":"user","data-hovercard-url":"/users/macedogm/hovercard","data-octo-click":"hovercard-link-click","data-octo-dimensions":"link_type:self",href:"https://github.com/macedogm"},"@macedogm")," in ",(0,l.yg)("a",{class:"issue-link js-issue-link","data-error-text":"Failed to load title","data-id":"1535699592","data-permission-text":"Title is private","data-url":"https://github.com/rancher/fleet/issues/1255","data-hovercard-type":"pull_request","data-hovercard-url":"/rancher/fleet/pull/1255/hovercard",href:"https://github.com/rancher/fleet/pull/1255"},"#1255")),(0,l.yg)("li",null,"Do not fail on missing labels by ",(0,l.yg)("a",{class:"user-mention notranslate","data-hovercard-type":"user","data-hovercard-url":"/users/thardeck/hovercard","data-octo-click":"hovercard-link-click","data-octo-dimensions":"link_type:self",href:"https://github.com/thardeck"},"@thardeck")," in ",(0,l.yg)("a",{class:"issue-link js-issue-link","data-error-text":"Failed to load title","data-id":"1548776358","data-permission-text":"Title is private","data-url":"https://github.com/rancher/fleet/issues/1261","data-hovercard-type":"pull_request","data-hovercard-url":"/rancher/fleet/pull/1261/hovercard",href:"https://github.com/rancher/fleet/pull/1261"},"#1261")),(0,l.yg)("li",null,"Fix Rancher upgrade by ",(0,l.yg)("a",{class:"user-mention notranslate","data-hovercard-type":"user","data-hovercard-url":"/users/manno/hovercard","data-octo-click":"hovercard-link-click","data-octo-dimensions":"link_type:self",href:"https://github.com/manno"},"@manno")," in ",(0,l.yg)("a",{class:"issue-link js-issue-link","data-error-text":"Failed to load title","data-id":"1556869984","data-permission-text":"Title is private","data-url":"https://github.com/rancher/fleet/issues/1275","data-hovercard-type":"pull_request","data-hovercard-url":"/rancher/fleet/pull/1275/hovercard",href:"https://github.com/rancher/fleet/pull/1275"},"#1275")),(0,l.yg)("li",null,"Bump gitjob to 0.1.36 by ",(0,l.yg)("a",{class:"user-mention notranslate","data-hovercard-type":"user","data-hovercard-url":"/users/manno/hovercard","data-octo-click":"hovercard-link-click","data-octo-dimensions":"link_type:self",href:"https://github.com/manno"},"@manno")," in ",(0,l.yg)("a",{class:"issue-link js-issue-link","data-error-text":"Failed to load title","data-id":"1557022079","data-permission-text":"Title is private","data-url":"https://github.com/rancher/fleet/issues/1276","data-hovercard-type":"pull_request","data-hovercard-url":"/rancher/fleet/pull/1276/hovercard",href:"https://github.com/rancher/fleet/pull/1276"},"#1276")),(0,l.yg)("li",null,"Long release names shorten once by ",(0,l.yg)("a",{class:"user-mention notranslate","data-hovercard-type":"user","data-hovercard-url":"/users/manno/hovercard","data-octo-click":"hovercard-link-click","data-octo-dimensions":"link_type:self",href:"https://github.com/manno"},"@manno")," in ",(0,l.yg)("a",{class:"issue-link js-issue-link","data-error-text":"Failed to load title","data-id":"1557863677","data-permission-text":"Title is private","data-url":"https://github.com/rancher/fleet/issues/1279","data-hovercard-type":"pull_request","data-hovercard-url":"/rancher/fleet/pull/1279/hovercard",href:"https://github.com/rancher/fleet/pull/1279"},"#1279")),(0,l.yg)("li",null,'Backport "Reading contents&secrets uses specific service account" by ',(0,l.yg)("a",{class:"user-mention notranslate","data-hovercard-type":"user","data-hovercard-url":"/users/thardeck/hovercard","data-octo-click":"hovercard-link-click","data-octo-dimensions":"link_type:self",href:"https://github.com/thardeck"},"@thardeck")," in ",(0,l.yg)("a",{class:"issue-link js-issue-link","data-error-text":"Failed to load title","data-id":"1566163652","data-permission-text":"Title is private","data-url":"https://github.com/rancher/fleet/issues/1298","data-hovercard-type":"pull_request","data-hovercard-url":"/rancher/fleet/pull/1298/hovercard",href:"https://github.com/rancher/fleet/pull/1298"},"#1298")),(0,l.yg)("li",null,"Fix agent not starting in fleet-system namespace by ",(0,l.yg)("a",{class:"user-mention notranslate","data-hovercard-type":"user","data-hovercard-url":"/users/raulcabello/hovercard","data-octo-click":"hovercard-link-click","data-octo-dimensions":"link_type:self",href:"https://github.com/raulcabello"},"@raulcabello")," in ",(0,l.yg)("a",{class:"issue-link js-issue-link","data-error-text":"Failed to load title","data-id":"1585833920","data-permission-text":"Title is private","data-url":"https://github.com/rancher/fleet/issues/1322","data-hovercard-type":"pull_request","data-hovercard-url":"/rancher/fleet/pull/1322/hovercard",href:"https://github.com/rancher/fleet/pull/1322"},"#1322"))),(0,l.yg)("p",null,(0,l.yg)("strong",null,"Full Changelog"),": ",(0,l.yg)("a",{class:"commit-link",href:"https://github.com/rancher/fleet/compare/v0.5.0...v0.5.2"},(0,l.yg)("tt",null,"v0.5.0...v0.5.2"))),(0,l.yg)("h2",{id:"download"},"Download"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.5.2/sha256sum-amd64.txt"},"sha256sum-amd64.txt"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.5.2/fleetcontroller-windows-amd64.exe"},"fleetcontroller-windows-amd64.exe"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.5.2/fleetcontroller-linux-amd64"},"fleetcontroller-linux-amd64"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.5.2/fleetagent-windows-amd64.exe"},"fleetagent-windows-amd64.exe"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.5.2/fleetagent-linux-amd64"},"fleetagent-linux-amd64"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.5.2/fleet-windows-amd64.exe"},"fleet-windows-amd64.exe"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.5.2/fleet-linux-amd64"},"fleet-linux-amd64"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.5.2/fleet-crd-0.5.2.tgz"},"fleet-crd-0.5.2.tgz"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.5.2/fleet-agent-0.5.2.tgz"},"fleet-agent-0.5.2.tgz"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.5.2/fleet-0.5.2.tgz"},"fleet-0.5.2.tgz"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.5.2/sha256sum-arm64.txt"},"sha256sum-arm64.txt"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.5.2/fleetcontroller-linux-arm64"},"fleetcontroller-linux-arm64"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.5.2/fleetagent-linux-arm64"},"fleetagent-linux-arm64"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.5.2/fleet-linux-arm64"},"fleet-linux-arm64"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.5.2/sha256sum-s390x.txt"},"sha256sum-s390x.txt"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.5.2/fleetcontroller-linux-s390x"},"fleetcontroller-linux-s390x"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.5.2/fleetagent-linux-s390x"},"fleetagent-linux-s390x"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.5.2/fleet-linux-s390x"},"fleet-linux-s390x")))),(0,l.yg)("p",null,(0,l.yg)("em",{parentName:"p"},"Information retrieved from ",(0,l.yg)("a",{parentName:"em",href:"https://github.com/rancher/fleet/releases/tag/v0.5.2"},"here"))))}u.isMDXComponent=!0}}]);