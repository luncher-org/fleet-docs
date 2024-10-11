"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[8523],{5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var r=a(6540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),u=l,g=d["".concat(s,".").concat(u)]||d[u]||h[u]||n;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5501:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=a(8168),l=(a(6540),a(5680));const n={title:"v0.8.3",date:"2024-03-19 10:04:05 +0000 UTC"},o=void 0,i={unversionedId:"changelogs/changelogs/v0.8.3",id:"version-0.8/changelogs/changelogs/v0.8.3",title:"v0.8.3",description:"(rancherio-gh-m) released this 2024-03-19 1005 +0000 UTC",source:"@site/versioned_docs/version-0.8/changelogs/changelogs/v0.8.3.md",sourceDirName:"changelogs/changelogs",slug:"/changelogs/changelogs/v0.8.3",permalink:"/0.8/changelogs/changelogs/v0.8.3",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.8/changelogs/changelogs/v0.8.3.md",tags:[],version:"0.8",lastUpdatedAt:1728640327,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{title:"v0.8.3",date:"2024-03-19 10:04:05 +0000 UTC"},sidebar:"docs",previous:{title:"v0.8.2",permalink:"/0.8/changelogs/changelogs/v0.8.2"},next:{title:"",permalink:"/0.8/changelogs/changelogs/v0.8.4"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Download",id:"download",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...a}=e;return(0,l.yg)(d,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"(rancherio-gh-m) released this 2024-03-19 10:04:05 +0000 UTC*")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("h2",null,"Bugfixes"),(0,l.yg)("ul",null,(0,l.yg)("li",null,"Add support for Azure DevOps Webhook for gitRepos using SSH URL by ",(0,l.yg)("a",{class:"user-mention notranslate","data-hovercard-type":"user","data-hovercard-url":"/users/p-se/hovercard","data-octo-click":"hovercard-link-click","data-octo-dimensions":"link_type:self",href:"https://github.com/p-se"},"@p-se")," in ",(0,l.yg)("a",{class:"issue-link js-issue-link","data-error-text":"Failed to load title","data-id":"2186666693","data-permission-text":"Title is private","data-url":"https://github.com/rancher/gitjob/issues/453","data-hovercard-type":"pull_request","data-hovercard-url":"/rancher/gitjob/pull/453/hovercard",href:"https://github.com/rancher/gitjob/pull/453"},"rancher/gitjob#453")),(0,l.yg)("li",null,"Bump google.golang.org/protobuf from 1.31.0 to 1.33.0 by ",(0,l.yg)("a",{class:"user-mention notranslate","data-hovercard-type":"user","data-hovercard-url":"/users/thardeck/hovercard","data-octo-click":"hovercard-link-click","data-octo-dimensions":"link_type:self",href:"https://github.com/thardeck"},"@thardeck")," in ",(0,l.yg)("a",{class:"issue-link js-issue-link","data-error-text":"Failed to load title","data-id":"2188388938","data-permission-text":"Title is private","data-url":"https://github.com/rancher/fleet/issues/2228","data-hovercard-type":"pull_request","data-hovercard-url":"/rancher/fleet/pull/2228/hovercard",href:"https://github.com/rancher/fleet/pull/2228"},"#2228")),(0,l.yg)("li",null,"Convert TestAzureDevopsWebhookWithSSHURL to support Wrangler v1.1.1 by ",(0,l.yg)("a",{class:"user-mention notranslate","data-hovercard-type":"user","data-hovercard-url":"/users/thardeck/hovercard","data-octo-click":"hovercard-link-click","data-octo-dimensions":"link_type:self",href:"https://github.com/thardeck"},"@thardeck")," in ",(0,l.yg)("a",{class:"issue-link js-issue-link","data-error-text":"Failed to load title","data-id":"2188388938","data-permission-text":"Title is private","data-url":"https://github.com/rancher/fleet/issues/2228","data-hovercard-type":"pull_request","data-hovercard-url":"/rancher/fleet/pull/2228/hovercard",href:"https://github.com/rancher/fleet/pull/2228"},"#2228"))),(0,l.yg)("h2",null,"What's Changed"),(0,l.yg)("ul",null,(0,l.yg)("li",null,"Bump Gitjob to ",(0,l.yg)("a",{href:"https://github.com/rancher/gitjob/releases/tag/v0.8.3"},"v0.8.3"),"  by ",(0,l.yg)("a",{class:"user-mention notranslate","data-hovercard-type":"user","data-hovercard-url":"/users/thardeck/hovercard","data-octo-click":"hovercard-link-click","data-octo-dimensions":"link_type:self",href:"https://github.com/thardeck"},"@thardeck")," in ",(0,l.yg)("a",{class:"issue-link js-issue-link","data-error-text":"Failed to load title","data-id":"2188388938","data-permission-text":"Title is private","data-url":"https://github.com/rancher/fleet/issues/2228","data-hovercard-type":"pull_request","data-hovercard-url":"/rancher/fleet/pull/2228/hovercard",href:"https://github.com/rancher/fleet/pull/2228"},"#2228"))),(0,l.yg)("p",null,(0,l.yg)("strong",null,"Full Changelog"),": ",(0,l.yg)("a",{class:"commit-link",href:"https://github.com/rancher/fleet/compare/v0.8.2...v0.8.3"},(0,l.yg)("tt",null,"v0.8.2...v0.8.3"))),(0,l.yg)("h2",{id:"download"},"Download"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.8.3/sha256sum-amd64.txt"},"sha256sum-amd64.txt"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.8.3/fleetcontroller-windows-amd64.exe"},"fleetcontroller-windows-amd64.exe"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.8.3/fleetcontroller-linux-amd64"},"fleetcontroller-linux-amd64"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.8.3/fleetagent-windows-amd64.exe"},"fleetagent-windows-amd64.exe"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.8.3/fleetagent-linux-amd64"},"fleetagent-linux-amd64"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.8.3/fleet-windows-amd64.exe"},"fleet-windows-amd64.exe"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.8.3/fleet-linux-amd64"},"fleet-linux-amd64"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.8.3/fleet-crd-0.8.3.tgz"},"fleet-crd-0.8.3.tgz"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.8.3/fleet-agent-0.8.3.tgz"},"fleet-agent-0.8.3.tgz"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.8.3/fleet-0.8.3.tgz"},"fleet-0.8.3.tgz"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.8.3/sha256sum-arm64.txt"},"sha256sum-arm64.txt"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.8.3/fleetcontroller-linux-arm64"},"fleetcontroller-linux-arm64"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.8.3/fleetagent-linux-arm64"},"fleetagent-linux-arm64"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.8.3/fleet-linux-arm64"},"fleet-linux-arm64")))),(0,l.yg)("p",null,(0,l.yg)("em",{parentName:"p"},"Information retrieved from ",(0,l.yg)("a",{parentName:"em",href:"https://github.com/rancher/fleet/releases/tag/v0.8.3"},"here"))))}h.isMDXComponent=!0}}]);