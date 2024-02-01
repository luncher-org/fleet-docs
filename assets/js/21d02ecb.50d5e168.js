"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[6985],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(r),g=a,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||i;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6938:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},s="Cluster Registration Internals",o={unversionedId:"ref-registration",id:"version-0.8/ref-registration",title:"Cluster Registration Internals",description:"How does cluster registration work?",source:"@site/versioned_docs/version-0.8/ref-registration.md",sourceDirName:".",slug:"/ref-registration",permalink:"/0.8/ref-registration",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.8/ref-registration.md",tags:[],version:"0.8",lastUpdatedAt:1706787586,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Cluster and Bundle State",permalink:"/0.8/cluster-bundles-state"},next:{title:"Configuration",permalink:"/0.8/ref-configuration"}},l={},c=[{value:"How does cluster registration work?",id:"how-does-cluster-registration-work",level:2},{value:"Cluster first",id:"cluster-first",level:4},{value:"Cluster -&gt; ClusterRegistrationToken + Import Account",id:"cluster---clusterregistrationtoken--import-account",level:4},{value:"Fleet-Agent -&gt; ClusterRegistration",id:"fleet-agent---clusterregistration",level:4},{value:"Notes",id:"notes",level:3},{value:"Diagram",id:"diagram",level:2},{value:"Process",id:"process",level:3},{value:"Secrets",id:"secrets",level:3}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cluster-registration-internals"},"Cluster Registration Internals"),(0,a.kt)("h2",{id:"how-does-cluster-registration-work"},"How does cluster registration work?"),(0,a.kt)("p",null,"This text describes cluster registration with more technical details. The text ignores agent initiated registration, as it\u2019s not commonly used.\n",(0,a.kt)("a",{parentName:"p",href:"/0.8/cluster-registration#agent-initiated"},"Agent initiated registration")," is ",(0,a.kt)("a",{parentName:"p",href:"/0.8/cluster-registration#create-cluster-registration-tokens"},'"',(0,a.kt)("inlineCode",{parentName:"a"},"ClusterRegistrationToken"),' first"'),", which means pre-creating a cluster is optional."),(0,a.kt)("p",null,'See "',(0,a.kt)("a",{parentName:"p",href:"/0.8/cluster-registration"},"Register Downstream Clusters"),'" to learn how to register clusters.'),(0,a.kt)("h4",{id:"cluster-first"},"Cluster first"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fleet-controller"),' starts up and may "bootstrap" the local cluster resource. In Rancher creating the local cluster resource is handlded by the fleetcluster controller instead, but otherwise the process is identical.'),(0,a.kt)("p",null,"For manager initiated registration the process is identical for the local cluster or any downstream cluster. It starts by  creating a cluster resource, which refers to a kubeconfig secret."),(0,a.kt)("h4",{id:"cluster---clusterregistrationtoken--import-account"},"Cluster -> ClusterRegistrationToken + Import Account"),(0,a.kt)("p",null,"Now that a cluster resource exists, ",(0,a.kt)("inlineCode",{parentName:"p"},"fleet-controller")," triggers and runs ",(0,a.kt)("inlineCode",{parentName:"p"},"import.go")," to create the fleet-agent deployment.\u2028",(0,a.kt)("inlineCode",{parentName:"p"},"fleet-controller")," also creates a ",(0,a.kt)("a",{parentName:"p",href:"/0.8/architecture#security"},(0,a.kt)("inlineCode",{parentName:"a"},"clusterregistrationtoken"))," and waits for it to be complete. The ",(0,a.kt)("inlineCode",{parentName:"p"},"clusterregistationtoken")," triggers the creation of the import service account, which can create ",(0,a.kt)("inlineCode",{parentName:"p"},"clusterregistrations"),' and read any secret in the system registration namespace (eg "cattle-fleet-clusters-system").\nThe ',(0,a.kt)("inlineCode",{parentName:"p"},"import.go")," will enqueue itself until the import service account exists, because that\u2019s needed to create the ",(0,a.kt)("inlineCode",{parentName:"p"},"fleet-agent-bootstrap")," secret.\nNow, the ",(0,a.kt)("inlineCode",{parentName:"p"},"fleet-agent")," and the bootstrap secret are present on the downstream cluster"),(0,a.kt)("h4",{id:"fleet-agent---clusterregistration"},"Fleet-Agent -> ClusterRegistration"),(0,a.kt)("p",null,"Immediately the ",(0,a.kt)("inlineCode",{parentName:"p"},"fleet-agent")," checks for a ",(0,a.kt)("inlineCode",{parentName:"p"},"fleet-agent-bootstrap")," secret (which contains the import kubeconfig) and starts registering if present. Then ",(0,a.kt)("inlineCode",{parentName:"p"},"fleet-agent")," creates a clusterregistration resource in fleet-default on the management cluster, with a random number. The random number will be used for the registration secret\u2019s name."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fleet-controller")," triggers and tries to grant the clusterregistration request to create ",(0,a.kt)("inlineCode",{parentName:"p"},"fleet-agent"),"\u2019s serviceaccount and create the ",(0,a.kt)("inlineCode",{parentName:"p"},"\u2018c-*\u2019")," registration secret with the clients new kubeconfig.\nThe registration secret name is ",(0,a.kt)("inlineCode",{parentName:"p"},'hash("clientID-clientRandom")'),'. The new kubeconfig uses the "request" account. The request account can access the cluster status, ',(0,a.kt)("inlineCode",{parentName:"p"},"bundledeployments")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"contents"),"."),(0,a.kt)("h3",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The registration starts with the "import" account and pivots to the "request" account.'),(0,a.kt)("li",{parentName:"ul"},"The fleet-default namespace has all the cluster registrations, the import account uses a separate namespace."),(0,a.kt)("li",{parentName:"ul"},"Once the agent is registered, ",(0,a.kt)("inlineCode",{parentName:"li"},"fleet-controller")," will trigger on a cluster/namespace change and call manageagent to create a bundle. The agent will update itself to the bundle and since the generation env var changes it will restart."),(0,a.kt)("li",{parentName:"ul"},"If no bootstrap secret exists, the agent will not re-register.")),(0,a.kt)("h2",{id:"diagram"},"Diagram"),(0,a.kt)("h3",{id:"process"},"Process"),(0,a.kt)("p",null,"Detailed analysis of the registration process for clusters. This shows the interaction of controllers, resources and service accounts during the registration of a new downstream cluster or the local cluster.\nIt's important to note that there are multiple ways to start this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Creating a bootstrap config. Fleet does this for the local agent."),(0,a.kt)("li",{parentName:"ul"},"Creating a ",(0,a.kt)("inlineCode",{parentName:"li"},"Cluster")," resource with a kubeconfig. Rancher does this for downstream clusters. See ",(0,a.kt)("a",{parentName:"li",href:"/0.8/cluster-registration#manager-initiated"},"manager-initiated registration"),"."),(0,a.kt)("li",{parentName:"ul"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"ClusterRegistrationToken")," resource, optionally create a ",(0,a.kt)("inlineCode",{parentName:"li"},"Cluster")," resource for a pre-defined (",(0,a.kt)("inlineCode",{parentName:"li"},"clientID"),") cluster. See ",(0,a.kt)("a",{parentName:"li",href:"/0.8/cluster-registration#agent-initiated"},"agent-initiated registration"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Registration",src:r(2364).Z,width:"3700",height:"2492"})),(0,a.kt)("h3",{id:"secrets"},"Secrets"),(0,a.kt)("p",null,"This diagram shows the resources created during registration and focuses on the k8s API server configuration."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Registration Secrets",src:r(4408).Z,width:"1581",height:"4162"})))}p.isMDXComponent=!0},2364:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/FleetRegistration-e49565723b02880b6dd7fa0ddc1fdbe2.svg"},4408:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/FleetRegistrationSecrets-deae20b127f82ebcf32a5c593b53b912.svg"}}]);