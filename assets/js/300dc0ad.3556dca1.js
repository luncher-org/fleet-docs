"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[1292],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(6540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=c(n),f=l,m=g["".concat(s,".").concat(f)]||g[f]||p[f]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(8168),l=(n(6540),n(5680));const r={},i="Configuration",o={unversionedId:"ref-configuration",id:"version-0.9/ref-configuration",title:"Configuration",description:"A reference list of, mostly internal, configuration options.",source:"@site/versioned_docs/version-0.9/ref-configuration.md",sourceDirName:".",slug:"/ref-configuration",permalink:"/0.9/ref-configuration",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.9/ref-configuration.md",tags:[],version:"0.9",lastUpdatedAt:1728640327,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Cluster Registration Internals",permalink:"/0.9/ref-registration"},next:{title:"List of Deployed Resources",permalink:"/0.9/ref-resources"}},s={},c=[{value:"Helm Charts",id:"helm-charts",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Configuration",id:"configuration-1",level:2},{value:"Labels",id:"labels",level:2},{value:"Annotations",id:"annotations",level:2},{value:"Fleet agent configuration",id:"fleet-agent-configuration",level:2}],u={toc:c},g="wrapper";function p(e){let{components:t,...n}=e;return(0,l.yg)(g,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"configuration"},"Configuration"),(0,l.yg)("p",null,"A reference list of, mostly internal, configuration options."),(0,l.yg)("h2",{id:"helm-charts"},"Helm Charts"),(0,l.yg)("p",null,"The Helm charts accept, at least, the options as shown with their default in ",(0,l.yg)("inlineCode",{parentName:"p"},"values.yaml"),":"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/rancher/fleet/blob/main/charts/fleet/values.yaml"},"https://github.com/rancher/fleet/blob/main/charts/fleet/values.yaml")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/rancher/fleet/blob/main/charts/fleet-crds/values.yaml"},"https://github.com/rancher/fleet/blob/main/charts/fleet-crds/values.yaml")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/rancher/fleet/blob/main/charts/fleet-agent/values.yaml"},"https://github.com/rancher/fleet/blob/main/charts/fleet-agent/values.yaml"))),(0,l.yg)("h2",{id:"environment-variables"},"Environment Variables"),(0,l.yg)("p",null,"The controllers can be started with these environment variables:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"CATTLE_DEV_MODE")," - used to debug wrangler, not usable"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"FLEET_CLUSTER_ENQUEUE_DELAY")," - tune how often non-ready clusters are checked"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"FLEET_CPU_PPROF_PERIOD")," - used to turn on ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/rancher/fleet/blob/main/docs/performance.md"},"performance profiling"))),(0,l.yg)("h2",{id:"configuration-1"},"Configuration"),(0,l.yg)("p",null,"In cluster configuration for the agent and fleet manager. Changing these can lead to full re-deployments."),(0,l.yg)("p",null,"The config ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/blob/main/pkg/config/config.go#L40-L52"},"struct")," is used in both config maps:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"cattle-fleet-system/fleet-agent"),(0,l.yg)("li",{parentName:"ul"},"cattle-fleet-system/fleet-controller")),(0,l.yg)("h2",{id:"labels"},"Labels"),(0,l.yg)("p",null,"Labels used by fleet:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/agent=true")," - NodeSelector label for agent's deployment affinity setting"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/non-managed-agent")," - managed agent bundle won't target Clusters with this label"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/repo-name")," - used on Bundle to reference the git repo resource"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/bundle-namespace")," - used on BundleDeployment to reference the Bundle resource"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/bundle-name")," - used on BundleDeployment to reference the Bundle resource"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/managed=true")," - cluster namespaces with this label will be cleaned up. Other resources will be cleaned up if it is in a label. Used in Rancher to identify fleet namespaces."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/bootstrap-token")," - unused")),(0,l.yg)("h2",{id:"annotations"},"Annotations"),(0,l.yg)("p",null,"Annotations used by fleet:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/agent-namespace")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/bundle-id")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/cluster"),", ",(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/cluster-namespace")," - used on a cluster namespace to reference the cluster registration namespace and cluster name"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/cluster-group")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/cluster-registration-namespace")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/cluster-registration")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/commit")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/managed")," - appears unused"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/service-account"))),(0,l.yg)("h2",{id:"fleet-agent-configuration"},"Fleet agent configuration"),(0,l.yg)("p",null,"Tolerations, affinity and resources can be customized for the Fleet agent. These fields can be provided when creating a\n",(0,l.yg)("a",{parentName:"p",href:"https://fleet.rancher.io/ref-crds#clusterspec"},"Cluster"),", see ",(0,l.yg)("a",{parentName:"p",href:"https://fleet.rancher.io/cluster-registration"},"Registering Downstream Cluster")," for more info on how to create\nClusters. Default configuration will be used if these fields are not provided."),(0,l.yg)("p",null,"If you change the resources limits, make sure the limits allow the fleet-agent to work normally."),(0,l.yg)("p",null,"Keep in mind that if you downgrade Fleet to a previous version than v0.7.0 Fleet will fallback to the built-in defaults.\nAgents will redeploy if they had custom affinity. If Fleet version number does not change, redeployment might not be immediate."))}p.isMDXComponent=!0}}]);