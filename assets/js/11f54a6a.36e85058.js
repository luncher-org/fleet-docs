"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[7301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o="Adding a GitRepo",s={unversionedId:"gitrepo-add",id:"version-0.5/gitrepo-add",title:"Adding a GitRepo",description:"Proper namespace",source:"@site/versioned_docs/version-0.5/gitrepo-add.md",sourceDirName:".",slug:"/gitrepo-add",permalink:"/0.5/gitrepo-add",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.5/gitrepo-add.md",tags:[],version:"0.5",lastUpdatedAt:1689002039,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Namespaces",permalink:"/0.5/namespaces"},next:{title:"Expected Repo Structure",permalink:"/0.5/gitrepo-structure"}},l={},p=[{value:"Proper namespace",id:"proper-namespace",level:2},{value:"Create GitRepo instance",id:"create-gitrepo-instance",level:2},{value:"Adding Private Git Repository",id:"adding-private-git-repository",level:2},{value:"Using HTTP Auth",id:"using-http-auth",level:3},{value:"Using Private Helm Repositories",id:"using-private-helm-repositories",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adding-a-gitrepo"},"Adding a GitRepo"),(0,r.kt)("h2",{id:"proper-namespace"},"Proper namespace"),(0,r.kt)("p",null,"Git repos are added to the Fleet manager using the ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," custom resource type. The ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," type is namespaced. By default, Rancher will create two Fleet workspaces: ",(0,r.kt)("strong",{parentName:"p"},"fleet-default")," and ",(0,r.kt)("strong",{parentName:"p"},"fleet-local"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Fleet-default")," will contain all the downstream clusters that are already registered through Rancher."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Fleet-local")," will contain the local cluster by default.")),(0,r.kt)("p",null,"If you are using Fleet in a ",(0,r.kt)("a",{parentName:"p",href:"/0.5/concepts"},"single cluster")," style, the namespace will always be ",(0,r.kt)("strong",{parentName:"p"},"fleet-local"),". Check ",(0,r.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/namespaces/#fleet-local"},"here")," for more on the ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet-local")," namespace."),(0,r.kt)("p",null,"For a ",(0,r.kt)("a",{parentName:"p",href:"/0.5/concepts"},"multi-cluster")," style, please ensure you use the correct repo that will map to the right target clusters."),(0,r.kt)("h2",{id:"create-gitrepo-instance"},"Create GitRepo instance"),(0,r.kt)("p",null,"Git repositories are register by creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," following the below YAML sample.  Refer\nto the inline comments as the means of each field"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: GitRepo\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  # Any name can be used here\n  name: my-repo\n  # For single cluster use fleet-local, otherwise use the namespace of\n  # your choosing\n  namespace: fleet-local\nspec:\n  # This can be a HTTPS or git URL.  If you are using a git URL then\n  # clientSecretName will probably need to be set to supply a credential.\n  # repo is the only required parameter for a repo to be monitored.\n  #\n  repo: https://github.com/rancher/fleet-examples\n\n  # Enforce all resources go to this target namespace. If a cluster scoped\n  # resource is found the deployment will fail.\n  #\n  # targetNamespace: app1\n\n  # Any branch can be watched, this field is optional. If not specified the\n  # branch is assumed to be master\n  #\n  # branch: master\n\n  # A specific commit or tag can also be watched.\n  #\n  # revision: v0.3.0\n\n  # For a private registry you must supply a clientSecretName. A default\n  # secret can be set at the namespace level using the GitRepoRestriction\n  # type. Secrets must be of the type "kubernetes.io/ssh-auth" or\n  # "kubernetes.io/basic-auth". The secret is assumed to be in the\n  # same namespace as the GitRepo\n  #\n  # clientSecretName: my-ssh-key\n  #\n  # If fleet.yaml contains a private Helm repo that requires authentication,\n  # provide the credentials in a K8s secret and specify them here.\n  # Danger: the credentials will be sent to all repositories referenced from\n  # this gitrepo. See section below for more information.\n  #\n  # helmSecretName: my-helm-secret\n  #\n  # To add additional ca-bundle for self-signed certs, caBundle can be\n  # filled with base64 encoded pem data. For example:\n  # `cat /path/to/ca.pem | base64 -w 0`\n  #\n  # caBundle: my-ca-bundle\n  #\n  # Disable SSL verification for git repo\n  #\n  # insecureSkipTLSVerify: true\n  #\n  # A git repo can read multiple paths in a repo at once.\n  # The below field is expected to be an array of paths and\n  # supports path globbing (ex: some/*/path)\n  #\n  # Example:\n  # paths:\n  # - single-path\n  # - multiple-paths/*\n  paths:\n  - simple\n\n  # PollingInterval configures how often fleet checks the git repo. The default\n  # is 15 seconds.\n  # Setting this to zero does not disable polling. It results in a 15s\n  # interval, too.\n  # As checking a git repo incurs a CPU cost, raising this value can help\n  # lowering fleetcontroller\'s CPU usage if tens of git repos are used or more\n  #\n  # pollingInterval: 15s\n\n  # Paused  causes changes in Git to not be propagated down to the clusters but\n  # instead mark resources as OutOfSync\n  #\n  # paused: false\n\n  # Increment this number to force a redeployment of contents from Git\n  #\n  # forceSyncGeneration: 0\n\n  # The service account that will be used to perform this deployment.\n  # This is the name of the service account that exists in the\n  # downstream cluster in the cattle-fleet-system namespace. It is assumed\n  # this service account already exists so it should be create before\n  # hand, most likely coming from another git repo registered with\n  # the Fleet manager.\n  #\n  # serviceAccount: moreSecureAccountThanClusterAdmin\n\n  # Target clusters to deploy to if running Fleet in a multi-cluster\n  # style. Refer to the "Mapping to Downstream Clusters" docs for\n  # more information.\n  #\n  # targets: ...\n')),(0,r.kt)("h2",{id:"adding-private-git-repository"},"Adding Private Git Repository"),(0,r.kt)("p",null,"Fleet supports both http and ssh auth key for private repository. To use this you have to create a secret in the same namespace."),(0,r.kt)("p",null,"For example, to generate a private ssh key"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'ssh-keygen -t rsa -b 4096 -m pem -C "user@email.com"\n')),(0,r.kt)("p",null,"Note: The private key format has to be in ",(0,r.kt)("inlineCode",{parentName:"p"},"EC PRIVATE KEY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RSA PRIVATE KEY")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"PRIVATE KEY")," and should not contain a passphase."),(0,r.kt)("p",null,"Put your private key into secret, use the namespace the GitRepo is in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"kubectl create secret generic ssh-key -n fleet-default --from-file=ssh-privatekey=/file/to/private/key  --type=kubernetes.io/ssh-auth\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Private key with passphrase is not supported.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The key has to be in PEM format.")),(0,r.kt)("p",null,"Fleet supports putting ",(0,r.kt)("inlineCode",{parentName:"p"},"known_hosts")," into ssh secret. Here is an example of how to add it:"),(0,r.kt)("p",null,"Fetch the public key hash(take github as an example)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"ssh-keyscan -H github.com\n")),(0,r.kt)("p",null,"And add it into secret:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: ssh-key\ntype: kubernetes.io/ssh-auth\nstringData:\n  ssh-privatekey: <private-key>\n  known_hosts: |-\n    |1|YJr1VZoi6dM0oE+zkM0do3Z04TQ=|7MclCn1fLROZG+BgR4m1r8TLwWc= ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==\n")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you don't add it any server's public key will be trusted and added. (",(0,r.kt)("inlineCode",{parentName:"p"},"ssh -o stricthostkeychecking=accept-new")," will be used)")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you are using openssh format for the private key and you are creating it in the UI, make sure a carriage return is appended in the end of the private key.")),(0,r.kt)("h3",{id:"using-http-auth"},"Using HTTP Auth"),(0,r.kt)("p",null,"Create a secret containing username and password. You can replace the password with a personal access token if necessary. Also see ",(0,r.kt)("a",{parentName:"p",href:"./troubleshooting#http-secrets-in-github"},"HTTP secrets in Github"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl create secret generic basic-auth-secret -n fleet-default --type=kubernetes.io/basic-auth --from-literal=username=$user --from-literal=password=$pat\n")),(0,r.kt)("p",null,"Just like with SSH, reference the secret in your GitRepo resource via ",(0,r.kt)("inlineCode",{parentName:"p"},"clientSecretName"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spec:\n  repo: https://github.com/fleetrepoci/gitjob-private.git\n  branch: main\n  clientSecretName: basic-auth-secret\n")),(0,r.kt)("h2",{id:"using-private-helm-repositories"},"Using Private Helm Repositories"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The credentials will be used unconditionally for all Helm repositories referenced by the gitrepo resource.\nMake sure you don't leak credentials by mixing public and private repositories. As a workaround, split them into different gitrepos.")),(0,r.kt)("p",null,"For a private Helm repo, users can reference a secret with the following keys:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," for basic http auth if the Helm HTTP repo is behind basic auth.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cacerts")," for custom CA bundle if the Helm repo is using a custom CA.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ssh-privatekey")," for ssh private key if repo is using ssh protocol. Private key with passphase is not supported currently."))),(0,r.kt)("p",null,"For example, to add a secret in kubectl, run"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kubectl create secret -n $namespace generic helm --from-literal=username=foo --from-literal=password=bar --from-file=cacerts=/path/to/cacerts --from-file=ssh-privatekey=/path/to/privatekey.pem")),(0,r.kt)("p",null,"After secret is created, specify the secret to ",(0,r.kt)("inlineCode",{parentName:"p"},"gitRepo.spec.helmSecretName"),". Make sure secret is created under the same namespace with gitrepo."),(0,r.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"See Fleet Troubleshooting section ",(0,r.kt)("a",{parentName:"p",href:"/0.5/troubleshooting"},"here"),"."))}u.isMDXComponent=!0}}]);