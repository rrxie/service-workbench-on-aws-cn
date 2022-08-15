"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[9507],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?i.createElement(g,a(a({ref:n},u),{},{components:t})):i.createElement(g,a({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3692:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var i=t(7462),r=t(3366),o=(t(7294),t(3905)),a=["components"],l={id:"commandline",title:"Upgrade process for command-line installations",sidebar_label:"Upgrade process for command line installations"},s=void 0,c={unversionedId:"installation_guide/upgrading/commandline",id:"installation_guide/upgrading/commandline",isDocsHomePage:!1,title:"Upgrade process for command-line installations",description:"You can upgrade Service Workbench deployments that were installed from the command line using downloaded source code.",source:"@site/docs/installation_guide/upgrading/commandline.md",sourceDirName:"installation_guide/upgrading",slug:"/installation_guide/upgrading/commandline",permalink:"/service-workbench-on-aws-cn/installation_guide/upgrading/commandline",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/installation_guide/upgrading/commandline.md",tags:[],version:"current",frontMatter:{id:"commandline",title:"Upgrade process for command-line installations",sidebar_label:"Upgrade process for command line installations"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Setting up RStudio ALB workspace",permalink:"/service-workbench-on-aws-cn/installation_guide/installation/rstudio"},next:{title:"Upgrading AWS solution installation",permalink:"/service-workbench-on-aws-cn/installation_guide/upgrading/solutions"}},u=[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Accessing the account",id:"accessing-the-account",children:[],level:3},{value:"Downloading source code",id:"downloading-source-code",children:[],level:3},{value:"Setting the configuration",id:"setting-the-configuration",children:[],level:3}],d={toc:u};function p(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can upgrade Service Workbench deployments that were installed from the command line using downloaded source code. "),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access to the account where Service Workbench is installed."),(0,o.kt)("li",{parentName:"ul"},"An EC2 deployment instance to be used in this account."),(0,o.kt)("li",{parentName:"ul"},"The latest source code."),(0,o.kt)("li",{parentName:"ul"},"Configuration files matching those used in the original deployment.")),(0,o.kt)("h3",{id:"accessing-the-account"},"Accessing the account"),(0,o.kt)("p",null,"Similarly to an initial installation, it is easy to perform an upgrade from an EC2 instance. To do this, use an instance role giving access to the Service Workbench account.  To set up an instance and install the prerequisite software, see pre-installation steps."),(0,o.kt)("p",null,"Log in to the instance and test access to the account by listing the S3 buckets:\n",(0,o.kt)("inlineCode",{parentName:"p"},"aws s3 ls"),"\nSeven buckets with similar name stems are displayed.  The name stem includes several values needed later in the configuration files. They have the following format:\n",(0,o.kt)("inlineCode",{parentName:"p"},"<account>-<stage>-<region>-<solution>-<purpose>"),(0,o.kt)("br",{parentName:"p"}),"\n","For example, the bucket ",(0,o.kt)("inlineCode",{parentName:"p"},"012345678901-demo-va-sw-studydata")," is in account ",(0,o.kt)("inlineCode",{parentName:"p"},"012345678901"),", stage name ",(0,o.kt)("inlineCode",{parentName:"p"},"demo"),", Region code ",(0,o.kt)("inlineCode",{parentName:"p"},"va (us-east-1)"),", solution name ",(0,o.kt)("inlineCode",{parentName:"p"},"sw"),", and it hosts the study data."),(0,o.kt)("h3",{id:"downloading-source-code"},"Downloading source code"),(0,o.kt)("p",null,"On the deployment instance, verify if there is a directory named ",(0,o.kt)("inlineCode",{parentName:"p"},"service-workbench-on-aws"),", from the initial deployment.  If yes, either rename it or move it into a subdirectory before downloading the source code. This prevents name duplication."),(0,o.kt)("p",null,"Download the latest source code from GitHub using git clone, as described in Installing Service Workbench. "),(0,o.kt)("p",null,"When upgrading Service Workbench, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/awslabs/service-workbench-on-aws/blob/mainline/CHANGELOG.md"},"CHANGELOG")," for additional steps that might be required for the upgraded version."),(0,o.kt)("h3",{id:"setting-the-configuration"},"Setting the configuration"),(0,o.kt)("p",null,"Follow the steps in Configuration settings, where the name of the file comes from the stage name in the bucket name stem.  In the configuration file, configure the settings:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"awsRegion"),": Refer to the ",(0,o.kt)("a",{parentName:"li",href:"/installation_guide/uninstall"},"Regional code mapping")," section to verify the full region name for the region code. For example, set awsRegion: us-east-1 for the region code va."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"solutionName"),": Use the solution name from the bucket name stem (for example: solutionName: sw)\nUpgrading Service Workbench")),(0,o.kt)("p",null,"After creating the configuration file, run the main deployment script as described in Installing Service Workbench."),(0,o.kt)("p",null,"In the main Service Workbench directory,"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./scripts/environment-deploy.sh ${STAGE_NAME}")),(0,o.kt)("p",null,"After the upgrade, update each account in Service Workbench as described in the ",(0,o.kt)("a",{parentName:"p",href:"/installation_guide/postupgrade"},"Post upgrade")," section."))}p.isMDXComponent=!0}}]);