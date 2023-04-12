"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[7203],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(6010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(7462),n=a(7294),r=a(6010),s=a(2466),o=a(6550),u=a(1980),i=a(7392),c=a(12);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:l,default:n}}=e;return{value:t,label:a,attributes:l,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const l=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:l}=e,r=p(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=a.find((e=>e.default))??a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[u,i]=m({queryString:a,groupId:l}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,c.Nk)(a);return[l,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:l}),b=(()=>{const e=u??d;return h({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),i(e),f(e)}),[i,f,r]),tabValues:r}}var b=a(2389);const g="tabList__CuJ",k="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),l=i[a].value;l!==o&&(d(t),u(l))},h=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},s,{className:(0,r.Z)("tabs__item",k,null==s?void 0:s.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:l}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",g)},n.createElement(v,(0,l.Z)({},e,t)),n.createElement(y,(0,l.Z)({},e,t)))}function E(e){const t=(0,b.Z)();return n.createElement(w,(0,l.Z)({key:String(t)},e))}},6828:(e,t,a)=>{a.d(t,{d:()=>l});const l={"v0.5":{fleet:"https://github.com/rancher/fleet/releases/download/v0.5.3/fleet-0.5.3.tgz",fleetAgent:"https://github.com/rancher/fleet/releases/download/v0.5.3/fleet-agent-0.5.3.tgz",fleetCRD:"https://github.com/rancher/fleet/releases/download/v0.5.3/fleet-crd-0.5.3.tgz"},"v0.6":{fleet:"https://github.com/rancher/fleet/releases/download/v0.6.0/fleet-0.6.0.tgz",fleetAgent:"https://github.com/rancher/fleet/releases/download/v0.6.0/fleet-agent-0.6.0.tgz",fleetCRD:"https://github.com/rancher/fleet/releases/download/v0.6.0/fleet-crd-0.6.0.tgz"},next:{fleet:"https://github.com/rancher/fleet/releases/download/v0.7.0-AGENT-rc.1/fleet-0.7.0-AGENT-rc.1.tgz",fleetAgent:"https://github.com/rancher/fleet/releases/download/v0.7.0-AGENT-rc.1/fleet-agent-0.7.0-AGENT-rc.1.tgz",fleetCRD:"https://github.com/rancher/fleet/releases/download/v0.7.0-AGENT-rc.1/fleet-crd-0.7.0-AGENT-rc.1.tgz",kubernetes:"1.20.5"}}},820:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var l=a(7462),n=(a(7294),a(3905)),r=a(6828),s=a(814),o=a(4866),u=a(5162);const i={},c="Quick Start",d={unversionedId:"quickstart",id:"version-0.6/quickstart",title:"Quick Start",description:"Who needs documentation, lets just run this thing!",source:"@site/versioned_docs/version-0.6/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/0.6/quickstart",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.6/quickstart.md",tags:[],version:"0.6",lastUpdatedAt:1681293801,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/0.6/"},next:{title:"Creating a Deployment",permalink:"/0.6/tut-deployment"}},p={},h=[{value:"Install",id:"install",level:2},{value:"Add a Git Repo to Watch",id:"add-a-git-repo-to-watch",level:2},{value:"Get Status",id:"get-status",level:2}],m={toc:h};function f(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,l.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"quick-start"},"Quick Start"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(1313).Z,width:"520",height:"279"})),(0,n.kt)("p",null,"Who needs documentation, lets just run this thing!"),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)("p",null,"Get helm if you don't have it.  Helm 3 is just a CLI and won't do bad insecure\nthings to your cluster."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"linux",label:"Linux/Mac",default:!0,mdxType:"TabItem"},(0,n.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"brew install helm")),(0,n.kt)(u.Z,{value:"windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,n.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"choco install kubernetes-helm"))),(0,n.kt)("p",null,"Install the Fleet Helm charts (there's two because we separate out CRDs for ultimate flexibility.)"),(0,n.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"helm -n cattle-fleet-system install --create-namespace --wait \\\n    fleet-crd"," ",r.d.next.fleetCRD,"\nhelm -n cattle-fleet-system install --create-namespace --wait \\\n    fleet"," ",r.d.next.fleet),(0,n.kt)("h2",{id:"add-a-git-repo-to-watch"},"Add a Git Repo to Watch"),(0,n.kt)("p",null,"Change ",(0,n.kt)("inlineCode",{parentName:"p"},"spec.repo")," to your git repo of choice.  Kubernetes manifest files that should\nbe deployed should be in ",(0,n.kt)("inlineCode",{parentName:"p"},"/manifests")," in your repo."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'cat > example.yaml << "EOF"\napiVersion: fleet.cattle.io/v1alpha1\nkind: GitRepo\nmetadata:\n  name: sample\n  # This namespace is special and auto-wired to deploy to the local cluster\n  namespace: fleet-local\nspec:\n  # Everything from this repo will be ran in this cluster. You trust me right?\n  repo: "https://github.com/rancher/fleet-examples"\n  paths:\n  - simple\nEOF\n\nkubectl apply -f example.yaml\n')),(0,n.kt)("h2",{id:"get-status"},"Get Status"),(0,n.kt)("p",null,"Get status of what fleet is doing"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n fleet-local get fleet\n")),(0,n.kt)("p",null,"You should see something like this get created in your cluster."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get deploy frontend\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"NAME       READY   UP-TO-DATE   AVAILABLE   AGE\nfrontend   3/3     3            3           116m\n")),(0,n.kt)("p",null,"Enjoy and read the ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.github.io/fleet"},"docs"),"."))}f.isMDXComponent=!0},1313:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/single-cluster-72ee1a61547953f123dd741c02cd2017.png"}}]);