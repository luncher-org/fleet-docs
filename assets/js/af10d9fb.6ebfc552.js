"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[3632],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=l,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},598:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),l=(r(7294),r(3905));const a={title:"",sidebar_label:"fleet apply"},o=void 0,i={unversionedId:"cli/fleet-cli/fleet_apply",id:"cli/fleet-cli/fleet_apply",title:"",description:"fleet apply",source:"@site/docs/cli/fleet-cli/fleet_apply.md",sourceDirName:"cli/fleet-cli",slug:"/cli/fleet-cli/fleet_apply",permalink:"/cli/fleet-cli/fleet_apply",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/docs/cli/fleet-cli/fleet_apply.md",tags:[],version:"current",lastUpdatedAt:1712238829,formattedLastUpdatedAt:"Apr 4, 2024",frontMatter:{title:"",sidebar_label:"fleet apply"},sidebar:"docs",previous:{title:"fleet",permalink:"/cli/fleet-cli/fleet"},next:{title:"fleet cleanup",permalink:"/cli/fleet-cli/fleet_cleanup"}},c={},s=[{value:"fleet apply",id:"fleet-apply",level:2},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:s};function f(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"fleet-apply"},"fleet apply"),(0,l.kt)("p",null,"Render a bundle into a Kubernetes resource and apply it in the Fleet Manager"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"fleet apply [flags] BUNDLE_NAME PATH...\n")),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  -b, --bundle-file string                     Location of the raw Bundle resource yaml\n      --cacerts-file string                    Path of custom cacerts for helm repo\n      --commit string                          Commit to assign to the bundle\n  -c, --compress                               Force all resources to be compress\n      --context string                         kubeconfig context for authentication\n      --correct-drift                          Rollback any change made from outside of Fleet\n      --correct-drift-force                    Use --force when correcting drift. Resources can be deleted and recreated\n      --correct-drift-keep-fail-history        Keep helm history for failed rollbacks\n      --debug                                  Turn on debug logging\n      --debug-level int                        If debugging is enabled, set klog -v=X\n  -f, --file string                            Location of the fleet.yaml\n      --helm-credentials-by-path-file string   Path of file containing helm credentials for paths\n      --helm-repo-url-regex string             Helm credentials will be used if the helm repo matches this regex. Credentials will always be used if this is empty or not provided\n  -h, --help                                   help for apply\n      --keep-resources                         Keep resources created after the GitRepo or Bundle is deleted\n  -k, --kubeconfig string                      kubeconfig for authentication\n  -l, --label strings                          Labels to apply to created bundles\n  -n, --namespace string                       namespace (default "fleet-local")\n  -o, --output string                          Output contents to file or - for stdout\n      --password-file string                   Path of file containing basic auth password for helm repo\n      --paused                                 Create bundles in a paused state\n  -a, --service-account string                 Service account to assign to bundle created\n      --ssh-privatekey-file string             Path of ssh-private-key for helm repo\n      --sync-generation int                    Generation number used to force sync the deployment\n      --target-namespace string                Ensure this bundle goes to this target namespace\n      --targets-file string                    Addition source of targets and restrictions to be append\n      --username string                        Basic auth username for helm repo\n')),(0,l.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./fleet"},"fleet"),"\t -")))}f.isMDXComponent=!0}}]);