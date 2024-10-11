"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[1529],{5680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>h});var r=a(6540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),c=p(a),u=l,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||n;return a?r.createElement(h,o(o({ref:t},g),{},{components:a})):r.createElement(h,o({ref:t},g))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8655:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=a(8168),l=(a(6540),a(5680));const n={title:"Fleet v0.4.1",date:"2022-11-18 13:27:55 +0000 UTC"},o=void 0,i={unversionedId:"changelogs/changelogs/v0.4.1",id:"version-0.4/changelogs/changelogs/v0.4.1",title:"Fleet v0.4.1",description:"(rancherio-gh-m) released this 2022-11-18 1355 +0000 UTC",source:"@site/versioned_docs/version-0.4/changelogs/changelogs/v0.4.1.md",sourceDirName:"changelogs/changelogs",slug:"/changelogs/changelogs/v0.4.1",permalink:"/0.4/changelogs/changelogs/v0.4.1",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.4/changelogs/changelogs/v0.4.1.md",tags:[],version:"0.4",lastUpdatedAt:1728640327,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{title:"Fleet v0.4.1",date:"2022-11-18 13:27:55 +0000 UTC"},sidebar:"docs",previous:{title:"Fleet v0.4.0",permalink:"/0.4/changelogs/changelogs/v0.4.0"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Download",id:"download",level:2}],g={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,l.yg)(c,(0,r.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"(rancherio-gh-m) released this 2022-11-18 13:27:55 +0000 UTC*")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("h2",null,"Bug Fixes"),(0,l.yg)("ul",null,(0,l.yg)("li",null,"Fix parameter generation when using Helm secrets in ",(0,l.yg)("a",{class:"issue-link js-issue-link","data-error-text":"Failed to load title","data-id":"1451303982","data-permission-text":"Title is private","data-url":"https://github.com/rancher/fleet/issues/1098","data-hovercard-type":"pull_request","data-hovercard-url":"/rancher/fleet/pull/1098/hovercard",href:"https://github.com/rancher/fleet/pull/1098"},"#1098")),(0,l.yg)("li",null,"Fix token expiry bug by in ",(0,l.yg)("a",{class:"issue-link js-issue-link","data-error-text":"Failed to load title","data-id":"1451556578","data-permission-text":"Title is private","data-url":"https://github.com/rancher/fleet/issues/1099","data-hovercard-type":"pull_request","data-hovercard-url":"/rancher/fleet/pull/1099/hovercard",href:"https://github.com/rancher/fleet/pull/1099"},"#1099"))),(0,l.yg)("p",null,(0,l.yg)("strong",null,"Full Changelog"),": ",(0,l.yg)("a",{class:"commit-link",href:"https://github.com/rancher/fleet/compare/v0.4.0...v0.4.1"},(0,l.yg)("tt",null,"v0.4.0...v0.4.1"))),(0,l.yg)("h2",{id:"download"},"Download"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.4.1/sha256sum-amd64.txt"},"sha256sum-amd64.txt"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.4.1/fleetcontroller-windows-amd64.exe"},"fleetcontroller-windows-amd64.exe"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.4.1/fleetcontroller-linux-amd64"},"fleetcontroller-linux-amd64"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.4.1/fleetagent-windows-amd64.exe"},"fleetagent-windows-amd64.exe"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.4.1/fleetagent-linux-amd64"},"fleetagent-linux-amd64"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.4.1/fleet-windows-amd64.exe"},"fleet-windows-amd64.exe"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.4.1/fleet-linux-amd64"},"fleet-linux-amd64"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.4.1/fleet-crd-0.4.1.tgz"},"fleet-crd-0.4.1.tgz"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.4.1/fleet-agent-0.4.1.tgz"},"fleet-agent-0.4.1.tgz"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.4.1/fleet-0.4.1.tgz"},"fleet-0.4.1.tgz"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.4.1/sha256sum-arm64.txt"},"sha256sum-arm64.txt"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.4.1/fleetcontroller-linux-arm64"},"fleetcontroller-linux-arm64"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.4.1/fleetagent-linux-arm64"},"fleetagent-linux-arm64"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.4.1/fleet-linux-arm64"},"fleet-linux-arm64"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.4.1/sha256sum-s390x.txt"},"sha256sum-s390x.txt"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.4.1/fleetcontroller-linux-s390x"},"fleetcontroller-linux-s390x"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.4.1/fleetagent-linux-s390x"},"fleetagent-linux-s390x"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.4.1/fleet-linux-s390x"},"fleet-linux-s390x")))),(0,l.yg)("p",null,(0,l.yg)("em",{parentName:"p"},"Information retrieved from ",(0,l.yg)("a",{parentName:"em",href:"https://github.com/rancher/fleet/releases/tag/v0.4.1"},"here"))))}m.isMDXComponent=!0}}]);