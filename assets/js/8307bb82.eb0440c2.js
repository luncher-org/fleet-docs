"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[7161],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||h[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const o={},i="Architecture",s={unversionedId:"architecture",id:"version-0.6/architecture",title:"Architecture",description:"Fleet has two primary components.  The Fleet manager and the cluster agents.  These",source:"@site/versioned_docs/version-0.6/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/0.6/architecture",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.6/architecture.md",tags:[],version:"0.6",lastUpdatedAt:1728640327,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Uninstall",permalink:"/0.6/uninstall"},next:{title:"Core Concepts",permalink:"/0.6/concepts"}},l={},c=[{value:"Fleet Manager",id:"fleet-manager",level:2},{value:"Cluster Agents",id:"cluster-agents",level:2},{value:"Security",id:"security",level:2},{value:"Component Overview",id:"component-overview",level:2}],u={toc:c},p="wrapper";function h(e){let{components:t,...o}=e;return(0,a.yg)(p,(0,r.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"architecture"},"Architecture"),(0,a.yg)("p",null,"Fleet has two primary components.  The Fleet manager and the cluster agents.  These\ncomponents work in a two-stage pull model.  The Fleet manager will pull from git and the\ncluster agents will pull from the Fleet manager."),(0,a.yg)("h2",{id:"fleet-manager"},"Fleet Manager"),(0,a.yg)("p",null,"The Fleet manager is a set of Kubernetes controllers running in any standard Kubernetes\ncluster.  The only API exposed by the Fleet manager is the Kubernetes API, there is no\ncustom API for the fleet controller."),(0,a.yg)("h2",{id:"cluster-agents"},"Cluster Agents"),(0,a.yg)("p",null,"One cluster agent runs in each cluster and is responsible for talking to the Fleet manager.\nThe only communication from cluster to Fleet manager is by this agent and all communication\ngoes from the managed cluster to the Fleet manager. The fleet manager does not initiate\nconnections to downstream clusters. This means managed clusters can run in private networks and behind\nNATs. The only requirement is the cluster agent needs to be able to communicate with the\nKubernetes API of the cluster running the Fleet manager. The one exception to this is if you use\nthe ",(0,a.yg)("a",{parentName:"p",href:"/0.6/cluster-registration#manager-initiated"},"manager initiated")," cluster registration flow.  This is not required, but\nan optional pattern."),(0,a.yg)("p",null,'The cluster agents are not assumed to have an "always on" connection.  They will resume operation as\nsoon as they can connect. Future enhancements will probably add the ability to schedule times of when\nthe agent checks in, as it stands right now they will always attempt to connect.'),(0,a.yg)("h2",{id:"security"},"Security"),(0,a.yg)("p",null,'The Fleet manager dynamically creates service accounts, manages their RBAC and then gives the\ntokens to the downstream clusters. Clusters are registered by optionally expiring cluster registration tokens.\nThe cluster registration token is used only during the registration process to generate a credential specific\nto that cluster. After the cluster credential is established the cluster "forgets" the cluster registration\ntoken.'),(0,a.yg)("p",null,"The service accounts given to the clusters only have privileges to list ",(0,a.yg)("inlineCode",{parentName:"p"},"BundleDeployment")," in the namespace created\nspecifically for that cluster. It can also update the ",(0,a.yg)("inlineCode",{parentName:"p"},"status")," subresource of ",(0,a.yg)("inlineCode",{parentName:"p"},"BundleDeployment")," and the ",(0,a.yg)("inlineCode",{parentName:"p"},"status"),"\nsubresource of it's ",(0,a.yg)("inlineCode",{parentName:"p"},"Cluster")," resource."),(0,a.yg)("h2",{id:"component-overview"},"Component Overview"),(0,a.yg)("p",null,"An overview of the components and how they interact on a high level."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Components",src:n(8120).A,width:"1319",height:"1281"})))}h.isMDXComponent=!0},8120:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/FleetComponents-2746fa09558c69f438948ab9bc659edb.svg"}}]);