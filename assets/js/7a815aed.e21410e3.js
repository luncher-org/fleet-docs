"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[2055],{5680:(e,t,o)=>{o.d(t,{xA:()=>u,yg:()=>h});var n=o(6540);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(o),g=r,h=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return o?n.createElement(h,i(i({ref:t},u),{},{components:o})):n.createElement(h,i({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},1051:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(8168),r=(o(6540),o(5680));const a={},i="Using Webhooks Instead of Polling",l={unversionedId:"webhook",id:"version-0.6/webhook",title:"Using Webhooks Instead of Polling",description:"By default, Fleet utilizes polling (default: 15 seconds) to pull from a Git repo.However, this can be configured to utilize a webhook instead.Fleet currently supports Github,",source:"@site/versioned_docs/version-0.6/webhook.md",sourceDirName:".",slug:"/webhook",permalink:"/0.6/webhook",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.6/webhook.md",tags:[],version:"0.6",lastUpdatedAt:1728640327,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Generating Diffs to Ignore Modified GitRepos",permalink:"/0.6/bundle-diffs"},next:{title:"Using Image Scan to Update Container Image References",permalink:"/0.6/imagescan"}},s={},c=[{value:"1. Configure the webhook service. Fleet uses a gitjob service to handle webhook requests. Create an ingress that points to the gitjob service.",id:"1-configure-the-webhook-service-fleet-uses-a-gitjob-service-to-handle-webhook-requests-create-an-ingress-that-points-to-the-gitjob-service",level:3},{value:"2. Go to your webhook provider and configure the webhook callback url. Here is a Github example.",id:"2-go-to-your-webhook-provider-and-configure-the-webhook-callback-url-here-is-a-github-example",level:3},{value:"3. (Optional) Configure webhook secret. The secret is for validating webhook payload. Make sure to put it in a k8s secret called <code>gitjob-webhook</code> in <code>cattle-fleet-system</code>.",id:"3-optional-configure-webhook-secret-the-secret-is-for-validating-webhook-payload-make-sure-to-put-it-in-a-k8s-secret-called-gitjob-webhook-in-cattle-fleet-system",level:3},{value:"4. Go to your git provider and test the connection. You should get a HTTP response code.",id:"4-go-to-your-git-provider-and-test-the-connection-you-should-get-a-http-response-code",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"using-webhooks-instead-of-polling"},"Using Webhooks Instead of Polling"),(0,r.yg)("p",null,"By default, Fleet utilizes polling (default: 15 seconds) to pull from a Git repo.However, this can be configured to utilize a webhook instead.Fleet currently supports Github,\nGitLab, Bitbucket, Bitbucket Server and Gogs."),(0,r.yg)("h3",{id:"1-configure-the-webhook-service-fleet-uses-a-gitjob-service-to-handle-webhook-requests-create-an-ingress-that-points-to-the-gitjob-service"},"1. Configure the webhook service. Fleet uses a gitjob service to handle webhook requests. Create an ingress that points to the gitjob service."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: webhook-ingress\n  namespace: cattle-fleet-system\nspec:\n  rules:\n  - host: your.domain.com\n    http:\n      paths:\n        - path: /\n          pathType: Prefix\n          backend:\n            service:\n              name: gitjob\n              port:\n                number: 80\n")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"You can configure ",(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/#tls"},"TLS")," on ingress.")),(0,r.yg)("h3",{id:"2-go-to-your-webhook-provider-and-configure-the-webhook-callback-url-here-is-a-github-example"},"2. Go to your webhook provider and configure the webhook callback url. Here is a Github example."),(0,r.yg)("p",null,(0,r.yg)("img",{src:o(4068).A,width:"1830",height:"1563"})),(0,r.yg)("p",null,"Configuring a secret is optional. This is used to validate the webhook payload as the payload should not be trusted by default.\nIf your webhook server is publicly accessible to the Internet, then it is recommended to configure the secret. If you do configure the\nsecret, follow step 3."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"only application/json is supported due to the limitation of webhook library.")),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"If you configured the webhook the polling interval will be automatically adjusted to 1 hour.")),(0,r.yg)("h3",{id:"3-optional-configure-webhook-secret-the-secret-is-for-validating-webhook-payload-make-sure-to-put-it-in-a-k8s-secret-called-gitjob-webhook-in-cattle-fleet-system"},"3. (Optional) Configure webhook secret. The secret is for validating webhook payload. Make sure to put it in a k8s secret called ",(0,r.yg)("inlineCode",{parentName:"h3"},"gitjob-webhook")," in ",(0,r.yg)("inlineCode",{parentName:"h3"},"cattle-fleet-system"),"."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Provider"),(0,r.yg)("th",{parentName:"tr",align:null},"K8s Secret Key"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GitHub"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"github"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GitLab"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"gitlab"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BitBucket"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bitbucket"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BitBucketServer"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bitbucket-server"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Gogs"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"gogs"))))),(0,r.yg)("p",null,"For example, to create a secret containing a GitHub secret to validate the webhook payload, run:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl create secret generic gitjob-webhook -n cattle-fleet-system --from-literal=github=webhooksecretvalue\n")),(0,r.yg)("h3",{id:"4-go-to-your-git-provider-and-test-the-connection-you-should-get-a-http-response-code"},"4. Go to your git provider and test the connection. You should get a HTTP response code."))}d.isMDXComponent=!0},4068:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/webhook-9c042ab211f1b5438bf70372e92ecdf7.png"}}]);