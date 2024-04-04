"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[6351],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},l="fleet.yaml",s={unversionedId:"ref-fleet-yaml",id:"version-0.7/ref-fleet-yaml",title:"fleet.yaml",description:"The fleet.yaml file adds options to a bundle. Any directory with a fleet.yaml is automatically turned into bundle.",source:"@site/versioned_docs/version-0.7/ref-fleet-yaml.md",sourceDirName:".",slug:"/ref-fleet-yaml",permalink:"/0.7/ref-fleet-yaml",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.7/ref-fleet-yaml.md",tags:[],version:"0.7",lastUpdatedAt:1712238829,formattedLastUpdatedAt:"Apr 4, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Custom Resources Spec",permalink:"/0.7/ref-crds"},next:{title:"GitRepo Resource",permalink:"/0.7/ref-gitrepo"}},i={},u=[{value:"Reference",id:"reference",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fleetyaml"},"fleet.yaml"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet.yaml")," file adds options to a bundle. Any directory with a ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet.yaml")," is automatically turned into bundle."),(0,r.kt)("p",null,"For more information on how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet.yaml")," to customize bundles see ",(0,r.kt)("a",{parentName:"p",href:"/0.7/gitrepo-content"},"Git Repository Contents"),"."),(0,r.kt)("p",null,"The content of the fleet.yaml corresponds to the struct at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/fleet/blob/b501b7e7864d37e310dfcdb109c73e5aec4240bb/pkg/bundlereader/read.go#L132-L139"},"pkg/bundlereader/read.go"),", which contains the ",(0,r.kt)("a",{parentName:"p",href:"./ref-crds#bundlespec"},"BundleSpec"),"."),(0,r.kt)("h3",{id:"reference"},"Reference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="fleet.yaml"',title:'"fleet.yaml"'},'# The default namespace to be applied to resources. This field is not used to\n# enforce or lock down the deployment to a specific namespace, but instead\n# provide the default value of the namespace field if one is not specified\n# in the manifests.\n# Default: default\ndefaultNamespace: default\n\n# All resources will be assigned to this namespace and if any cluster scoped\n# resource exists the deployment will fail.\n# Default: ""\nnamespace: default\n\n# Optional map of labels, that are set at the bundle and can be used in a\n# dependsOn.selector\nlabels:\n  key: value\n\nkustomize:\n  # Use a custom folder for kustomize resources. This folder must contain\n  # a kustomization.yaml file.\n  dir: ./kustomize\n\nhelm:\n  # Use a custom location for the Helm chart. This can refer to any go-getter URL or\n  # OCI registry based helm chart URL e.g. "oci://ghcr.io/fleetrepoci/guestbook".\n  # This allows one to download charts from most any location.  Also know that\n  # go-getter URL supports adding a digest to validate the download. If repo\n  # is set below this field is the name of the chart to lookup\n  chart: ./chart\n  # A https URL to a Helm repo to download the chart from. It\'s typically easier\n  # to just use `chart` field and refer to a tgz file.  If repo is used the\n  # value of `chart` will be used as the chart name to lookup in the Helm repository.\n  repo: https://charts.rancher.io\n  # A custom release name to deploy the chart as. If not specified a release name\n  # will be generated by combining the invoking GitRepo.name + GitRepo.path.\n  releaseName: my-release\n  # Makes helm skip the check for its own annotations\n  takeOwnership: false\n  # The version of the chart or semver constraint of the chart to find. If a constraint\n  # is specified it is evaluated each time git changes.\n  # The version also determines which chart to download from OCI registries.\n  version: 0.1.0\n  # Any values that should be placed in the `values.yaml` and passed to helm during\n  # install.\n  values:\n    any-custom: value\n  # All labels on Rancher clusters are available using global.fleet.clusterLabels.LABELNAME\n  # These can now be accessed directly as variables\n  # The variable\'s value will be an empty string if the referenced cluster label does not\n  # exist on the targeted cluster\n    variableName: global.fleet.clusterLabels.LABELNAME\n  # It is possible to specify the keys and values as go template strings for\n  # advanced templating needs. Most of the functions from the sprig templating\n  # library are available. Note, if the functions output changes with every\n  # call, e.g. `uuidv4`, the bundle will get redeployed.\n  # The template context has following keys.\n  # `.ClusterValues` are retrieved from target cluster\'s `spec.templateValues`\n  # `.ClusterLabels` and `.ClusterAnnotations` are the labels and annoations in the cluster resource.\n  # `.ClusterName` as the fleet\'s cluster resource name.\n  # `.ClusterNamespace` as the namespace in which the cluster resource exists.\n  # Note: The fleet.yaml must be valid yaml. Templating uses ${ } as delims,\n  #       unlike helm which uses {{ }}.\n    templatedLabel: "${ .ClusterLabels.LABELNAME }-foo"\n    valueFromEnv:\n      "${ .ClusterLabels.ENV }": ${ .ClusterValues.someValue | upper | quote }\n  # Path to any values files that need to be passed to helm during install\n  valuesFiles:\n    - values1.yaml\n    - values2.yaml\n  # Allow to use values files from configmaps or secrets defined in the downstream clusters\n  valuesFrom:\n  - configMapKeyRef:\n      name: configmap-values\n      # default to namespace of bundle\n      namespace: default\n      key: values.yaml\n  - secretKeyRef:\n      name: secret-values\n      namespace: default\n      key: values.yaml\n  # Override immutable resources. This could be dangerous.\n  force: false\n  # Set the Helm --atomic flag when upgrading\n  atomic: false\n  # Disable go template pre-processing on the fleet values\n  disablePreProcess: false\n  # if set and timeoutSeconds provided, will wait until all Jobs have been completed before marking the GitRepo as ready.\n  # It will wait for as long as timeoutSeconds\n  waitForJobs: true\n\n# A paused bundle will not update downstream clusters but instead mark the bundle\n# as OutOfSync. One can then manually confirm that a bundle should be deployed to\n# the downstream clusters.\n# Default: false\npaused: false\n\nrolloutStrategy:\n    # A number or percentage of clusters that can be unavailable during an update\n    # of a bundle. This follows the same basic approach as a deployment rollout\n    # strategy. Once the number of clusters meets unavailable state update will be\n    # paused. Default value is 100% which doesn\'t take effect on update.\n    # default: 100%\n    maxUnavailable: 15%\n    # A number or percentage of cluster partitions that can be unavailable during\n    # an update of a bundle.\n    # default: 0\n    maxUnavailablePartitions: 20%\n    # A number of percentage of how to automatically partition clusters if not\n    # specific partitioning strategy is configured.\n    # default: 25%\n    autoPartitionSize: 10%\n    # A list of definitions of partitions.  If any target clusters do not match\n    # the configuration they are added to partitions at the end following the\n    # autoPartitionSize.\n    partitions:\n      # A user friend name given to the partition used for Display (optional).\n      # default: ""\n    - name: canary\n      # A number or percentage of clusters that can be unavailable in this\n      # partition before this partition is treated as done.\n      # default: 10%\n      maxUnavailable: 10%\n      # Selector matching cluster labels to include in this partition\n      clusterSelector:\n        matchLabels:\n          env: prod\n      # A cluster group name to include in this partition\n      clusterGroup: agroup\n      # Selector matching cluster group labels to include in this partition\n      clusterGroupSelector:\n        clusterSelector:\n          matchLabels:\n            env: prod\n\n# Target customization are used to determine how resources should be modified per target\n# Targets are evaluated in order and the first one to match a cluster is used for that cluster.\ntargetCustomizations:\n# The name of target. If not specified a default name of the format "target000"\n# will be used. This value is mostly for display\n- name: prod\n  # Custom namespace value overriding the value at the root\n  namespace: newvalue\n  # Custom defaultNamespace value overriding the value at the root\n  defaultNamespace: newdefaultvalue\n  # Custom kustomize options overriding the options at the root\n  kustomize: {}\n  # Custom Helm options override the options at the root\n  helm: {}\n  # If using raw YAML these are names that map to overlays/{name} that will be used\n  # to replace or patch a resource. If you wish to customize the file ./subdir/resource.yaml\n  # then a file ./overlays/myoverlay/subdir/resource.yaml will replace the base file.\n  # A file named ./overlays/myoverlay/subdir/resource_patch.yaml will patch the base file.\n  # A patch can in JSON Patch or JSON Merge format or a strategic merge patch for builtin\n  # Kubernetes types. Refer to "Raw YAML Resource Customization" below for more information.\n  yaml:\n    overlays:\n    - custom2\n    - custom3\n  # A selector used to match clusters.  The structure is the standard\n  # metav1.LabelSelector format. If clusterGroupSelector or clusterGroup is specified,\n  # clusterSelector will be used only to further refine the selection after\n  # clusterGroupSelector and clusterGroup is evaluated.\n  clusterSelector:\n    matchLabels:\n      env: prod\n  # A selector used to match a specific cluster by name.\n  clusterName: dev-cluster\n  # A selector used to match cluster groups.\n  clusterGroupSelector:\n    matchLabels:\n      region: us-east\n  # A specific clusterGroup by name that will be selected\n  clusterGroup: group1\n\n# dependsOn allows you to configure dependencies to other bundles. The current bundle\n# will only be deployed, after all dependencies are deployed and in a Ready state.\ndependsOn:\n  # Format: <GITREPO-NAME>-<BUNDLE_PATH> with all path separators replaced by "-"\n  # Example: GitRepo name "one", Bundle path "/multi-cluster/hello-world" => "one-multi-cluster-hello-world"\n  - name: one-multi-cluster-hello-world\n  # Select bundles to depend on based on their label.\n  - selector:\n      matchLabels:\n        app: weak-monkey\n\n# Ignore fields when monitoring a Bundle. This can be used when Fleet thinks some conditions in Custom Resources\n# makes the Bundle to be in an error state when it shouldn\'t.\nignore:\n  # Conditions to be ignored\n  conditions:\n  # In this example a condition will be ignored if it contains {"type": "Active", "status", "False"}\n  - type: Active\n    status: "False"\n')))}d.isMDXComponent=!0}}]);