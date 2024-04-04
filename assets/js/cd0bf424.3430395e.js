"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[208],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>m});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function s(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?s(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):s(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)l=s[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)l=s[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(l),m=r,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return l?n.createElement(h,a(a({ref:t},u),{},{components:l})):n.createElement(h,a({ref:t},u))}));function m(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=l.length,a=new Array(s);a[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var c=2;c<s;c++)a[c]=l[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},9941:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=l(7462),r=(l(7294),l(3905));const s={},a="Single Cluster Install",o={unversionedId:"single-cluster-install",id:"version-0.4/single-cluster-install",title:"Single Cluster Install",description:"In this use case you have only one cluster.  The cluster will run both the Fleet",source:"@site/versioned_docs/version-0.4/single-cluster-install.md",sourceDirName:".",slug:"/single-cluster-install",permalink:"/0.4/single-cluster-install",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.4/single-cluster-install.md",tags:[],version:"0.4",lastUpdatedAt:1712238829,formattedLastUpdatedAt:"Apr 4, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Installation",permalink:"/0.4/installation"},next:{title:"Multi-cluster Install",permalink:"/0.4/multi-cluster-install"}},i={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Helm 3",id:"helm-3",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Install",id:"install",level:2}],u={toc:c};function p(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"single-cluster-install"},"Single Cluster Install"),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(1313).Z,width:"520",height:"279"})),(0,r.kt)("p",null,"In this use case you have only one cluster.  The cluster will run both the Fleet\nmanager and the Fleet agent. The cluster will communicate with Git server to\ndeploy resources to this local cluster. This is the simplest setup and very\nuseful for dev/test and small scale setups.  This use case is supported as a valid\nuse case for production."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"helm-3"},"Helm 3"),(0,r.kt)("p",null,"Fleet is distributed as a Helm chart. Helm 3 is a CLI, has no server side component, and is\nfairly straight forward. To install the Helm 3 CLI follow the\n",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"official install instructions"),". The TL;DR is"),(0,r.kt)("p",null,"macOS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install helm\n")),(0,r.kt)("p",null,"Windows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"choco install kubernetes-helm\n")),(0,r.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,r.kt)("p",null,"Fleet is a controller running on a Kubernetes cluster so an existing cluster is required. For the\nsingle cluster use case you will install Fleet to the cluster which you intend to manage with GitOps.\nAny Kubernetes community supported version of Kubernetes will work, in practice this means 1.15 or greater."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"Install the following two Helm charts."),(0,r.kt)("p",null,"First install the Fleet CustomResourcesDefintions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm -n cattle-fleet-system install --create-namespace --wait \\\n    fleet-crd https://github.com/rancher/fleet/releases/download/v0.4.1/fleet-crd-0.4.1.tgz\n")),(0,r.kt)("p",null,"Second install the Fleet controllers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm -n cattle-fleet-system install --create-namespace --wait \\\n    fleet https://github.com/rancher/fleet/releases/download/v0.4.1/fleet-0.4.1.tgz\n")),(0,r.kt)("p",null,"Fleet should be ready to use now for single cluster. You can check the status of the Fleet controller pods by\nrunning the below commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n cattle-fleet-system logs -l app=fleet-controller\nkubectl -n cattle-fleet-system get pods -l app=fleet-controller\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                                READY   STATUS    RESTARTS   AGE\nfleet-controller-64f49d756b-n57wq   1/1     Running   0          3m21s\n")),(0,r.kt)("p",null,"You can now ",(0,r.kt)("a",{parentName:"p",href:"/0.4/gitrepo-add"},"register some git repos")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet-local")," namespace to start deploying Kubernetes resources."))}p.isMDXComponent=!0},1313:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/single-cluster-72ee1a61547953f123dd741c02cd2017.png"}}]);