"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[8805],{9365:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(6540),n=a(53);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,s),hidden:a},t)}},1470:(e,t,a)=>{a.d(t,{A:()=>T});var l=a(8168),n=a(6540),r=a(53),s=a(3104),o=a(6347),i=a(7485),u=a(1682),m=a(9466);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:l,default:n}}=e;return{value:t,label:a,attributes:l,default:n}}))}function c(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const l=(0,o.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:l}=e,r=c(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=a.find((e=>e.default))??a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[i,u]=d({queryString:a,groupId:l}),[p,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,m.Dv)(a);return[l,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:l}),g=(()=>{const e=i??p;return h({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),y(e)}),[u,y,r]),tabValues:r}}var g=a(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.a_)(),c=e=>{const t=e.currentTarget,a=m.indexOf(t),l=u[a].value;l!==o&&(p(t),i(l))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,l.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>m.push(e),onKeyDown:h,onClick:c},s,{className:(0,r.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:l}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function w(e){const t=y(e);return n.createElement("div",{className:(0,r.A)("tabs-container",f.tabList)},n.createElement(b,(0,l.A)({},e,t)),n.createElement(v,(0,l.A)({},e,t)))}function T(e){const t=(0,g.A)();return n.createElement(w,(0,l.A)({key:String(t)},e))}},9713:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>y,frontMatter:()=>i,metadata:()=>m,toc:()=>c});var l=a(8168),n=(a(6540),a(5680)),r=a(2355),s=a(1470),o=a(9365);const i={},u="Creating a Deployment",m={unversionedId:"tut-deployment",id:"version-0.8/tut-deployment",title:"Creating a Deployment",description:"To deploy workloads onto downstream clusters, first create a Git repo, then create a GitRepo resource and apply it.",source:"@site/versioned_docs/version-0.8/tut-deployment.md",sourceDirName:".",slug:"/tut-deployment",permalink:"/0.8/tut-deployment",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.8/tut-deployment.md",tags:[],version:"0.8",lastUpdatedAt:1728640327,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Quick Start",permalink:"/0.8/quickstart"},next:{title:"Uninstall",permalink:"/0.8/uninstall"}},p={},c=[{value:"Single-Cluster Examples",id:"single-cluster-examples",level:2},{value:"Multi-Cluster Examples",id:"multi-cluster-examples",level:2}],h={toc:c},d="wrapper";function y(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,l.A)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"creating-a-deployment"},"Creating a Deployment"),(0,n.yg)("p",null,"To deploy workloads onto downstream clusters, first create a Git repo, then create a GitRepo resource and apply it."),(0,n.yg)("p",null,"This tutorial uses the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet-examples"},"fleet-examples")," repository."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"For more details on how to structure the repository and configure the deployment of each bundle see ",(0,n.yg)("a",{parentName:"p",href:"/0.8/gitrepo-content"},"GitRepo Contents"),".\nFor more details on the options that are available per Git repository see ",(0,n.yg)("a",{parentName:"p",href:"/0.8/gitrepo-add"},"Adding a GitRepo"),".")),(0,n.yg)("h2",{id:"single-cluster-examples"},"Single-Cluster Examples"),(0,n.yg)("p",null,"All examples will deploy content to clusters with no per-cluster customizations. This is a good starting point to understand the basics of structuring Git repos for Fleet."),(0,n.yg)(s.A,{groupId:"examples",mdxType:"Tabs"},(0,n.yg)(o.A,{value:"helm",label:"Helm",default:!0,mdxType:"TabItem"},(0,n.yg)("p",null,"An example using Helm. We are deploying the ",(0,n.yg)("a",{href:"https://github.com/rancher/fleet-examples/tree/master/single-cluster/helm"},"helm example")," to the local cluster."),(0,n.yg)("p",null,"The repository contains a helm chart and an optional ",(0,n.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," to configure the deployment:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="fleet.yaml"',title:'"fleet.yaml"'},'namespace: fleet-helm-example\n\n# Custom helm options\nhelm:\n  # The release name to use. If empty a generated release name will be used\n  releaseName: guestbook\n\n  # The directory of the chart in the repo.  Also any valid go-getter supported\n  # URL can be used there is specify where to download the chart from.\n  # If repo below is set this value if the chart name in the repo\n  chart: ""\n\n  # An https to a valid Helm repository to download the chart from\n  repo: ""\n\n  # Used if repo is set to look up the version of the chart\n  version: ""\n\n  # Force recreate resource that can not be updated\n  force: false\n\n  # How long for helm to wait for the release to be active. If the value\n  # is less that or equal to zero, we will not wait in Helm\n  timeoutSeconds: 0\n\n  # Custom values that will be passed as values.yaml to the installation\n  values:\n    replicas: 2\n')),(0,n.yg)("p",null,"To create the deployment, we apply the custom resource to the upstream cluster. The ",(0,n.yg)("inlineCode",{parentName:"p"},"fleet-local")," namespace contains the local cluster resource. The local fleet-agent will create the deployment in the ",(0,n.yg)("inlineCode",{parentName:"p"},"fleet-helm-example")," namespace."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -n fleet-local -f - <<EOF\nkind: GitRepo\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: helm\nspec:\n  repo: https://github.com/rancher/fleet-examples\n  paths:\n  - single-cluster/helm\nEOF\n"))),(0,n.yg)(o.A,{value:"helm-multi-chart",label:"Helm Multi Chart",default:!0,mdxType:"TabItem"},(0,n.yg)("p",null,"An ",(0,n.yg)("a",{href:"https://github.com/rancher/fleet-examples/blob/master/single-cluster/helm-multi-chart"},"example deploying multiple charts")," from a single repo. This is similar to the previous example, but will deploy three helm charts from the sub folders, each configured by its own ",(0,n.yg)("inlineCode",{parentName:"p"},"fleet.yaml"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -n fleet-local -f - <<EOF\nkind: GitRepo\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: helm\nspec:\n  repo: https://github.com/rancher/fleet-examples\n  paths:\n  - single-cluster/helm-multi-chart\nEOF\n"))),(0,n.yg)(o.A,{value:"helm-kustomize",label:"Helm & Kustomize",default:!0,mdxType:"TabItem"},(0,n.yg)("p",null,"An example using ",(0,n.yg)("a",{href:"https://github.com/rancher/fleet-examples/blob/master/single-cluster/helm-kustomize"},"Kustomize to modify a third party Helm chart"),".\nIt will deploy the Kubernetes sample guestbook application as packaged as a Helm chart downloaded from a third party source and will modify the helm chart using Kustomize. The app will be deployed into the fleet-helm-kustomize-example namespace."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -n fleet-local -f - <<EOF\nkind: GitRepo\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: helm\nspec:\n  repo: https://github.com/rancher/fleet-examples\n  paths:\n  - single-cluster/helm-kustomize\nEOF\n"))),(0,n.yg)(o.A,{value:"kustomize",label:"Kustomize",default:!0,mdxType:"TabItem"},(0,n.yg)("p",null,"An ",(0,n.yg)("a",{href:"https://github.com/rancher/fleet-examples/blob/master/single-cluster/kustomize"},"example using Kustomize"),"."),(0,n.yg)("p",null,"Note that the ",(0,n.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," has a ",(0,n.yg)("inlineCode",{parentName:"p"},"kustomize:")," key to specify the path to the required ",(0,n.yg)("inlineCode",{parentName:"p"},"kustomization.yaml"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="fleet.yaml"',title:'"fleet.yaml"'},'kustomize:\n  # To use a kustomization.yaml different from the one in the root folder\n  dir: ""\n')),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -n fleet-local -f - <<EOF\nkind: GitRepo\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: helm\nspec:\n  repo: https://github.com/rancher/fleet-examples\n  paths:\n  - single-cluster/kustomize\nEOF\n"))),(0,n.yg)(o.A,{value:"manifests",label:"Manifests",default:!0,mdxType:"TabItem"},(0,n.yg)("p",null,"An ",(0,n.yg)("a",{href:"https://github.com/rancher/fleet-examples/tree/master/single-cluster/manifests"},"example using raw Kubernetes YAML"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -n fleet-local -f - <<EOF\nkind: GitRepo\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: helm\nspec:\n  repo: https://github.com/rancher/fleet-examples\n  paths:\n  - single-cluster/manifests\nEOF\n")))),(0,n.yg)("h2",{id:"multi-cluster-examples"},"Multi-Cluster Examples"),(0,n.yg)("p",null,"The examples below will deploy a multi git repo to multiple clusters at once and configure the app differently for each target."),(0,n.yg)(s.A,{groupId:"examples",mdxType:"Tabs"},(0,n.yg)(o.A,{value:"helm",label:"Helm",default:!0,mdxType:"TabItem"},(0,n.yg)("p",null,"An example using Helm. We are deploying the ",(0,n.yg)("a",{href:"https://github.com/rancher/fleet-examples/tree/master/multi-cluster/helm"},"helm example")," and customizing it per target cluster"),(0,n.yg)("p",null,"The repository contains a helm chart and an optional ",(0,n.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," to configure the deployment. The ",(0,n.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," is used to configure different deployment options, depending on the cluster's labels:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="fleet.yaml"',title:'"fleet.yaml"'},"namespace: fleet-mc-helm-example\ntargetCustomizations:\n- name: dev\n  helm:\n    values:\n      replication: false\n  clusterSelector:\n    matchLabels:\n      env: dev\n\n- name: test\n  helm:\n    values:\n      replicas: 3\n  clusterSelector:\n    matchLabels:\n      env: test\n\n- name: prod\n  helm:\n    values:\n      serviceType: LoadBalancer\n      replicas: 3\n  clusterSelector:\n    matchLabels:\n      env: prod\n")),(0,n.yg)("p",null,"To create the deployment, we apply the custom resource to the upstream cluster. The ",(0,n.yg)("inlineCode",{parentName:"p"},"fleet-default")," namespace, by default, contains the downstream cluster resources. The chart will be deployed to all clusters in the fleet-default namespace, which have a labeled cluster resources that matches any entry under ",(0,n.yg)("inlineCode",{parentName:"p"},"targets:"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="gitrepo.yaml"',title:'"gitrepo.yaml"'},"kind: GitRepo\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: helm\n  namespace: fleet-default\nspec:\n  repo: https://github.com/rancher/fleet-examples\n  paths:\n  - multi-cluster/helm\n  targets:\n  - name: dev\n    clusterSelector:\n      matchLabels:\n        env: dev\n\n  - name: test\n    clusterSelector:\n      matchLabels:\n        env: test\n\n  - name: prod\n    clusterSelector:\n      matchLabels:\n        env: prod\n")),(0,n.yg)("p",null,"By applying the gitrepo resource to the upstream cluster, fleet will start to monitor the repository and create deployments:"),(0,n.yg)(r.A,{language:"bash",mdxType:"CodeBlock"},"kubectl apply -n fleet-default -f gitrepo.yaml")),(0,n.yg)(o.A,{value:"helm-external",label:"Helm External",default:!0,mdxType:"TabItem"},(0,n.yg)("p",null,"An ",(0,n.yg)("a",{href:"https://github.com/rancher/fleet-examples/blob/master/multi-cluster/helm-external"},"example using a Helm chart that is downloaded from a third party source and customizing it per target cluster"),". The customization is similar to the previous example."),(0,n.yg)("p",null,"To create the deployment, we apply the custom resource to the upstream cluster. The ",(0,n.yg)("inlineCode",{parentName:"p"},"fleet-default")," namespace, by default, contains the downstream cluster resources. The chart will be deployed to all clusters in the fleet-default namespace, which have a labeled cluster resources that matches any entry under ",(0,n.yg)("inlineCode",{parentName:"p"},"targets:"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="gitrepo.yaml"',title:'"gitrepo.yaml"'},"kind: GitRepo\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: helm-external\n  namespace: fleet-default\nspec:\n  repo: https://github.com/rancher/fleet-examples\n  paths:\n  - multi-cluster/helm-external\n  targets:\n  - name: dev\n    clusterSelector:\n      matchLabels:\n        env: dev\n\n  - name: test\n    clusterSelector:\n      matchLabels:\n        env: test\n\n  - name: prod\n    clusterSelector:\n      matchLabels:\n        env: prod\n")),(0,n.yg)("p",null,"By applying the gitrepo resource to the upstream cluster, fleet will start to monitor the repository and create deployments:"),(0,n.yg)(r.A,{language:"bash",mdxType:"CodeBlock"},"kubectl apply -n fleet-default -f gitrepo.yaml")),(0,n.yg)(o.A,{value:"helm-kustomize",label:"Helm & Kustomize",default:!0,mdxType:"TabItem"},(0,n.yg)("p",null,"An example using ",(0,n.yg)("a",{href:"https://github.com/rancher/fleet-examples/blob/master/multi-cluster/helm-kustomize"},"kustomize to modify a third party Helm chart"),".\nIt will deploy the Kubernetes sample guestbook application as packaged as a Helm chart downloaded from a third party source and will modify the helm chart using Kustomize. The app will be deployed into the fleet-helm-kustomize-example namespace."),(0,n.yg)("p",null,"The application will be customized as follows per environment:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Dev clusters: Only the redis leader is deployed and not the followers."),(0,n.yg)("li",{parentName:"ul"},"Test clusters: Scale the front deployment to 3"),(0,n.yg)("li",{parentName:"ul"},"Prod clusters: Scale the front deployment to 3 and set the service type to LoadBalancer")),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," is used to control which overlays are used, depending on the cluster's labels:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="fleet.yaml"',title:'"fleet.yaml"'},"namespace: fleet-mc-kustomize-example\ntargetCustomizations:\n- name: dev\n  clusterSelector:\n    matchLabels:\n      env: dev\n  kustomize:\n    dir: overlays/dev\n\n- name: test\n  clusterSelector:\n    matchLabels:\n      env: test\n  kustomize:\n    dir: overlays/test\n\n- name: prod\n  clusterSelector:\n    matchLabels:\n      env: prod\n  kustomize:\n    dir: overlays/prod\n")),(0,n.yg)("p",null,"To create the deployment, we apply the custom resource to the upstream cluster. The ",(0,n.yg)("inlineCode",{parentName:"p"},"fleet-default")," namespace, by default, contains the downstream cluster resources. The chart will be deployed to all clusters in the fleet-default namespace, which have a labeled cluster resources that matches any entry under ",(0,n.yg)("inlineCode",{parentName:"p"},"targets:"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="gitrepo.yaml"',title:'"gitrepo.yaml"'},"kind: GitRepo\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: helm-kustomize\n  namespace: fleet-default\nspec:\n  repo: https://github.com/rancher/fleet-examples\n  paths:\n  - multi-cluster/helm-kustomize\n  targets:\n  - name: dev\n    clusterSelector:\n      matchLabels:\n        env: dev\n\n  - name: test\n    clusterSelector:\n      matchLabels:\n        env: test\n\n  - name: prod\n    clusterSelector:\n      matchLabels:\n        env: prod\n")),(0,n.yg)("p",null,"By applying the gitrepo resource to the upstream cluster, fleet will start to monitor the repository and create deployments:"),(0,n.yg)(r.A,{language:"bash",mdxType:"CodeBlock"},"kubectl apply -n fleet-default -f gitrepo.yaml")),(0,n.yg)(o.A,{value:"kustomize",label:"Kustomize",default:!0,mdxType:"TabItem"},(0,n.yg)("p",null,"An ",(0,n.yg)("a",{href:"https://github.com/rancher/fleet-examples/blob/master/multi-cluster/kustomize"},"example using Kustomize")," and customizing it per target cluster."),(0,n.yg)("p",null,"The customization in ",(0,n.yg)("inlineCode",{parentName:"p"},"fleet.yaml"),' is identical to the "Helm & Kustomize" example.'),(0,n.yg)("p",null,"To create the deployment, we apply the custom resource to the upstream cluster. The ",(0,n.yg)("inlineCode",{parentName:"p"},"fleet-default")," namespace, by default, contains the downstream cluster resources. The chart will be deployed to all clusters in the fleet-default namespace, which have a labeled cluster resources that matches any entry under ",(0,n.yg)("inlineCode",{parentName:"p"},"targets:"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -n fleet-default -f - <<EOF\nkind: GitRepo\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: kustomize\n  namespace: fleet-default\nspec:\n  repo: https://github.com/rancher/fleet-examples\n  paths:\n  - multi-cluster/kustomize\n  targets:\n  - name: dev\n    clusterSelector:\n      matchLabels:\n        env: dev\n\n  - name: test\n    clusterSelector:\n      matchLabels:\n        env: test\n\n  - name: prod\n    clusterSelector:\n      matchLabels:\n        env: prod\nEOF\n")),(0,n.yg)("p",null,"By applying the gitrepo resource to the upstream cluster, fleet will start to monitor the repository and create deployments:")),(0,n.yg)(o.A,{value:"manifests",label:"Manifests",default:!0,mdxType:"TabItem"},(0,n.yg)("p",null,"An ",(0,n.yg)("a",{href:"https://github.com/rancher/fleet-examples/tree/master/multi-cluster/manifests"},"example using raw Kubernetes YAML and customizing it per target cluster"),".\nThe application will be customized as follows per environment:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Dev clusters: Only the redis leader is deployed and not the followers."),(0,n.yg)("li",{parentName:"ul"},"Test clusters: Scale the front deployment to 3"),(0,n.yg)("li",{parentName:"ul"},"Prod clusters: Scale the front deployment to 3 and set the service type to LoadBalancer")),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," is used to control which 'yaml' overlays are used, depending on the cluster's labels:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="fleet.yaml"',title:'"fleet.yaml"'},"namespace: fleet-mc-manifest-example\ntargetCustomizations:\n- name: dev\n  clusterSelector:\n    matchLabels:\n      env: dev\n  yaml:\n    overlays:\n    # Refers to overlays/noreplication folder\n    - noreplication\n\n- name: test\n  clusterSelector:\n    matchLabels:\n      env: test\n  yaml:\n    overlays:\n    # Refers to overlays/scale3 folder\n    - scale3\n\n- name: prod\n  clusterSelector:\n    matchLabels:\n      env: prod\n  yaml:\n    # Refers to overlays/servicelb, scale3 folders\n    overlays:\n    - servicelb\n    - scale3\n")),(0,n.yg)("p",null,"To create the deployment, we apply the custom resource to the upstream cluster. The ",(0,n.yg)("inlineCode",{parentName:"p"},"fleet-default")," namespace, by default, contains the downstream cluster resources. The chart will be deployed to all clusters in the fleet-default namespace, which have a labeled cluster resources that matches any entry under ",(0,n.yg)("inlineCode",{parentName:"p"},"targets:"),"."),(0,n.yg)("p",null,"To create the deployment, we apply the custom resource to the upstream cluster. The ",(0,n.yg)("inlineCode",{parentName:"p"},"fleet-default")," namespace, by default, contains the downstream cluster resources. The chart will be deployed to all clusters in the fleet-default namespace, which have a labeled cluster resources that matches any entry under ",(0,n.yg)("inlineCode",{parentName:"p"},"targets:"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="gitrepo.yaml"',title:'"gitrepo.yaml"'},"kind: GitRepo\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: manifests\n  namespace: fleet-default\nspec:\n  repo: https://github.com/rancher/fleet-examples\n  paths:\n  - multi-cluster/manifests\n  targets:\n  - name: dev\n    clusterSelector:\n      matchLabels:\n        env: dev\n\n  - name: test\n    clusterSelector:\n      matchLabels:\n        env: test\n\n  - name: prod\n    clusterSelector:\n      matchLabels:\n        env: prod\n")),(0,n.yg)(r.A,{language:"bash",mdxType:"CodeBlock"},"kubectl apply -n fleet-default -f gitrepo.yaml"))))}y.isMDXComponent=!0}}]);