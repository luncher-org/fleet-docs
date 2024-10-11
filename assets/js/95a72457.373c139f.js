"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[1599],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(8168),r=(n(6540),n(5680));const s={},l="Setup Multi User",o={unversionedId:"multi-user",id:"multi-user",title:"Setup Multi User",description:"Fleet uses Kubernetes RBAC where possible.",source:"@site/docs/multi-user.md",sourceDirName:".",slug:"/multi-user",permalink:"/multi-user",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/docs/multi-user.md",tags:[],version:"current",lastUpdatedAt:1728640327,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Create Cluster Groups",permalink:"/cluster-group"},next:{title:"Create a GitRepo Resource",permalink:"/gitrepo-add"}},i={},c=[{value:"Example Fleet Standalone",id:"example-fleet-standalone",level:2},{value:"Example Fleet in Rancher",id:"example-fleet-in-rancher",level:2},{value:"Allow Access to Clusters",id:"allow-access-to-clusters",level:2},{value:"Restricting Access to Downstream Clusters",id:"restricting-access-to-downstream-clusters",level:2},{value:"An Example GitRepo Resource",id:"an-example-gitrepo-resource",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...s}=e;return(0,r.yg)(u,(0,a.A)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"setup-multi-user"},"Setup Multi User"),(0,r.yg)("p",null,"Fleet uses Kubernetes RBAC where possible."),(0,r.yg)("p",null,"One addition on top of RBAC is the ",(0,r.yg)("a",{parentName:"p",href:"/namespaces#restricting-gitrepos"},(0,r.yg)("inlineCode",{parentName:"a"},"GitRepoRestriction"))," resource, which can be used to control GitRepo resources in a namespace."),(0,r.yg)("p",null,"A multi-user fleet setup looks like this:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"tenants don't share namespaces, each tenant has one or more namespaces on the\nupstream cluster, where they can create GitRepo resources"),(0,r.yg)("li",{parentName:"ul"},"tenants can't deploy cluster wide resources and are limited to a set of\nnamespaces on downstream clusters"),(0,r.yg)("li",{parentName:"ul"},"clusters are in a separate namespace")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Shared Clusters",src:n(4394).A,width:"2488",height:"1769"})),(0,r.yg)("admonition",{title:"important information",type:"warning"},(0,r.yg)("p",{parentName:"admonition"},"The isolation of tenants is not complete and relies on Kubernetes RBAC to be\nset up correctly. Without manual setup from an operator tenants can still\ndeploy cluster wide resources. Even with the available Fleet restrictions,\nusers are only restricted to namespaces, but namespaces don't provide much\nisolation on their own. E.g. they can still consume as many resources as they\nlike."),(0,r.yg)("p",{parentName:"admonition"},"However, the existing Fleet restrictions allow users to share clusters, and\ndeploy resources without conflicts.")),(0,r.yg)("h2",{id:"example-fleet-standalone"},"Example Fleet Standalone"),(0,r.yg)("p",null,"This would create a user 'fleetuser', who can only manage GitRepo resources in the 'project1' namespace."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"kubectl create serviceaccount fleetuser\nkubectl create namespace project1\nkubectl create -n project1 role fleetuser --verb=get --verb=list --verb=create --verb=delete --resource=gitrepos.fleet.cattle.io\nkubectl create -n project1 rolebinding fleetuser --serviceaccount=default:fleetuser --role=fleetuser\n")),(0,r.yg)("p",null,"If we want to give access to multiple namespaces, we can use a single cluster role with two role bindings:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"kubectl create clusterrole fleetuser --verb=get --verb=list --verb=create --verb=delete --resource=gitrepos.fleet.cattle.io\nkubectl create -n project1 rolebinding fleetuser --serviceaccount=default:fleetuser --clusterrole=fleetuser\nkubectl create -n project2 rolebinding fleetuser --serviceaccount=default:fleetuser --clusterrole=fleetuser\n")),(0,r.yg)("p",null,"This makes sure, tenants can't interfere with GitRepo resources from other tenants, since they don't have access to their namespaces."),(0,r.yg)("h2",{id:"example-fleet-in-rancher"},"Example Fleet in Rancher"),(0,r.yg)("p",null,"When a new fleet workspace is created, a corresponding namespace with an identical name is automatically generated within the Rancher local cluster.\nFor a user to see and deploy fleet resources in a specific workspace, they need at least the following permissions:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"list/get the ",(0,r.yg)("inlineCode",{parentName:"li"},"fleetworkspace")," cluster-wide resource in the local cluster"),(0,r.yg)("li",{parentName:"ul"},"Permissions to create fleet resources (such as ",(0,r.yg)("inlineCode",{parentName:"li"},"bundles"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"gitrepos"),", ...) in the backing namespace for the workspace in the local cluster. ")),(0,r.yg)("p",null,"Let's grant permissions to deploy fleet resources in the ",(0,r.yg)("inlineCode",{parentName:"p"},"project1")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"project2")," fleet workspaces:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"To create the ",(0,r.yg)("inlineCode",{parentName:"li"},"project1")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"project2")," fleet workspaces, you can either do it in the ",(0,r.yg)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/integrations-in-rancher/fleet/overview#accessing-fleet-in-the-rancher-ui"},"Rancher UI")," or use the following YAML resources:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"apiVersion: management.cattle.io/v3\nkind: FleetWorkspace\nmetadata:\n  name: project1\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"apiVersion: management.cattle.io/v3\nkind: FleetWorkspace\nmetadata:\n  name: project2\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Create a ",(0,r.yg)("inlineCode",{parentName:"li"},"GlobalRole")," that grants permission to deploy fleet resources in the ",(0,r.yg)("inlineCode",{parentName:"li"},"project1")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"project2")," fleet workspaces:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"apiVersion: management.cattle.io/v3\nkind: GlobalRole\nmetadata:\n  name: fleet-projects1and2\nnamespacedRules:\n  project1:\n    - apiGroups:\n        - fleet.cattle.io\n      resources:\n        - gitrepos\n        - bundles\n        - clusterregistrationtokens\n        - gitreporestrictions\n        - clusters\n        - clustergroups\n      verbs:\n        - '*'\n  project2:\n    - apiGroups:\n        - fleet.cattle.io\n      resources:\n        - gitrepos\n        - bundles\n        - clusterregistrationtokens\n        - gitreporestrictions\n        - clusters\n        - clustergroups\n      verbs:\n        - '*'\nrules:\n  - apiGroups:\n      - management.cattle.io\n    resourceNames:\n      - project1\n      - project2\n    resources:\n      - fleetworkspaces\n    verbs:\n      - '*'\n")),(0,r.yg)("p",null,"Assign the ",(0,r.yg)("inlineCode",{parentName:"p"},"GlobalRole")," to users or groups, more info can be found in the ",(0,r.yg)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#configuring-global-permissions-for-individual-users"},"Rancher docs")),(0,r.yg)("p",null,"The user now has access to the ",(0,r.yg)("inlineCode",{parentName:"p"},"Continuous Delivery")," tab in Rancher and can deploy resources to both the ",(0,r.yg)("inlineCode",{parentName:"p"},"project1")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"project2")," workspaces."),(0,r.yg)("h2",{id:"allow-access-to-clusters"},"Allow Access to Clusters"),(0,r.yg)("p",null,"This assumes all GitRepos created by 'fleetuser' have the ",(0,r.yg)("inlineCode",{parentName:"p"},"team: one")," label. Different labels could be used, to select different cluster namespaces."),(0,r.yg)("p",null,"In each of the user's namespaces, as an admin create a ",(0,r.yg)("a",{parentName:"p",href:"/namespaces#cross-namespace-deployments"},(0,r.yg)("inlineCode",{parentName:"a"},"BundleNamespaceMapping")),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"kind: BundleNamespaceMapping\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: mapping\n  namespace: project1\n\n# Bundles to match by label.\n# The labels are defined in the fleet.yaml # labels field or from the\n# GitRepo metadata.labels field\nbundleSelector:\n  matchLabels:\n    team: one\n    # or target one repo\n    #fleet.cattle.io/repo-name: simpleapp\n\n# Namespaces, containing clusters, to match by label\nnamespaceSelector:\n  matchLabels:\n    kubernetes.io/metadata.name: fleet-default\n    # the label is on the namespace\n    #workspace: prod\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"/gitrepo-targets"},(0,r.yg)("inlineCode",{parentName:"a"},"target")," section")," in the GitRepo resource can be used to deploy only to a subset of the matched clusters."),(0,r.yg)("h2",{id:"restricting-access-to-downstream-clusters"},"Restricting Access to Downstream Clusters"),(0,r.yg)("p",null,"Admins can further restrict tenants by creating a ",(0,r.yg)("inlineCode",{parentName:"p"},"GitRepoRestriction")," in each of their namespaces."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"kind: GitRepoRestriction\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: restriction\n  namespace: project1\n\nallowedTargetNamespaces:\n  - project1simpleapp\n")),(0,r.yg)("p",null,"This will deny the creation of cluster wide resources, which may interfere with other tenants and limit the deployment to the 'project1simpleapp' namespace."),(0,r.yg)("h2",{id:"an-example-gitrepo-resource"},"An Example GitRepo Resource"),(0,r.yg)("p",null,"A GitRepo resource created by a tenant, without admin access could look like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"kind: GitRepo\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: simpleapp\n  namespace: project1\n  labels:\n    team: one\n\nspec:\n  repo: https://github.com/rancher/fleet-examples\n  paths:\n  - bundle-diffs\n\n  targetNamespace: project1simpleapp\n\n  # do not match the upstream/local cluster, won't work\n  targets:\n  - name: dev\n    clusterSelector:\n      matchLabels:\n        env: dev\n")),(0,r.yg)("p",null,"This includes the ",(0,r.yg)("inlineCode",{parentName:"p"},"team: one")," label and and the required ",(0,r.yg)("inlineCode",{parentName:"p"},"targetNamespace"),"."),(0,r.yg)("p",null,"Together with the previous ",(0,r.yg)("inlineCode",{parentName:"p"},"BundleNamespaceMapping")," it would target all clusters with a ",(0,r.yg)("inlineCode",{parentName:"p"},"env: dev")," label in the 'fleet-default' namespace."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"BundleNamespaceMappings")," do not work with local clusters, so make sure not to target them.")))}m.isMDXComponent=!0},4394:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/FleetSharedClusters-b68f6c53b43cbb795e4d81cda9ebc2bc.svg"}}]);