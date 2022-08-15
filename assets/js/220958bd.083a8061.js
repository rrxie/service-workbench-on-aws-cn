"use strict";(self.webpackChunkservice_workbench_docusaurus=self.webpackChunkservice_workbench_docusaurus||[]).push([[1940],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,b=d["".concat(u,".").concat(f)]||d[f]||s[f]||c;return t?n.createElement(b,i(i({ref:r},p),{},{components:t})):n.createElement(b,i({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=d;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5134:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=t(7462),o=t(3366),c=(t(7294),t(3905)),i=["components"],a={id:"introduction",title:"\u7b80\u4ecb",sidebar_label:"\u7b80\u4ecb"},u=void 0,l={unversionedId:"zh/introduction",id:"zh/introduction",isDocsHomePage:!1,title:"\u7b80\u4ecb",description:"Service Workbench on AWS \u662f\u4e00\u4e2a\u57fa\u4e8e\u4e91\u8ba1\u7b97\u7684\u81ea\u670d\u52a1\u5f0f\u5f00\u6e90\u5e73\u53f0\uff0c\u4fbf\u4e8eIT\u56e2\u961f\u4e3a\u7814\u7a76\u4eba\u5458\u63d0\u4f9b\u534f\u4f5c\u7814\u7a76\u7684\u89e3\u51b3\u65b9\u6848\u3002",source:"@site/docs/zh/introduction.md",sourceDirName:"zh",slug:"/zh/introduction",permalink:"/service-workbench-on-aws-cn/zh/introduction",editUrl:"https://github.com/awslabs/go-research-on-aws/website/docs/zh/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"\u7b80\u4ecb",sidebar_label:"\u7b80\u4ecb"},sidebar:"serviceWorkbenchSidebar",previous:{title:"Introduction",permalink:"/service-workbench-on-aws-cn/development/introduction"},next:{title:"Service Workbench \u6982\u8ff0",permalink:"/service-workbench-on-aws-cn/zh/installation_guide/overview"}},p=[],s={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Service Workbench on AWS \u662f\u4e00\u4e2a\u57fa\u4e8e\u4e91\u8ba1\u7b97\u7684\u81ea\u670d\u52a1\u5f0f\u5f00\u6e90\u5e73\u53f0\uff0c\u4fbf\u4e8eIT\u56e2\u961f\u4e3a\u7814\u7a76\u4eba\u5458\u63d0\u4f9b\u534f\u4f5c\u7814\u7a76\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u5b83\u96c6\u6210\u4e86\u591a\u4e2aAWS \u670d\u52a1\uff0c\u4f8b\u5982 Amazon CloudFront\u3001AWS Lambda\u3001AWS Step Functions \u7b49\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 Service Workbench \u521b\u5efa\u81ea\u5b9a\u4e49\u7684\u7814\u7a76\u73af\u5883\u6a21\u677f\u5e76\u4e0e\u5176\u4ed6\u7ec4\u7ec7\u5171\u4eab\u8fd9\u4e9b\u6a21\u677f\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u540c\u65f6\uff0c\u4e3a\u4e86\u63a7\u5236\u7814\u7a76\u6210\u672c\uff0cService Workbench \u5df2\u4e0e AWS Cost Explorer\u3001AWS Budgets \u548c AWS Organizations \u96c6\u6210\u3002\u60a8\u53ef\u4ee5\u5feb\u901f\u8bbf\u95ee\u4eea\u8868\u677f\uff08dashboard)\uff0c\u53c2\u7167\u9884\u7b97\u67e5\u770b\u60a8\u5f53\u524d AWS \u670d\u52a1\u7684\u4f7f\u7528\u6210\u672c\u3002 "),(0,c.kt)("li",{parentName:"ul"},"Service Workbench \u5df2\u4e0e\u7b2c\u4e09\u65b9\u670d\u52a1\u63d0\u4f9b\u5546\u96c6\u6210\uff0c\u4ee5\u4fbf\u5728\u9700\u8981\u65f6\u542f\u7528\u3002"),(0,c.kt)("li",{parentName:"ul"},"Service Workbench \u8fd8\u53ef\u4ee5\u6a21\u62df\u672c\u5730\u73af\u5883\u4e2d\u7528\u6237\u5df2\u77e5\u7684\u6982\u5ff5\uff0c\u4ece\u800c\u66f4\u8f7b\u677e\u5730\u5207\u6362\u5230\u4e91\u6280\u672f\u3002")),(0,c.kt)("p",null,"\u7ec4\u7ec7\u4e2d\u7684\u7814\u7a76\u4eba\u5458\u901a\u8fc7\u8bbf\u95ee\u7528\u6237\u754c\u9762\uff0c\u80fd\u5feb\u901f\u627e\u5230\u611f\u5174\u8da3\u7684\u6570\u636e\uff0c\u7136\u540e\u4ec5\u9700\u7b80\u5355\u64cd\u4f5c\u5c31\u53ef\u4ee5\u4f7f\u7528\u673a\u5668\u5b66\u4e60\u670d\u52a1\u5206\u6790\u6570\u636e\uff0c\u4f8b\u5982\u4f7f\u7528 ",(0,c.kt)("a",{parentName:"p",href:"https://aws.amazon.com/sagemaker/"},"Amazon SageMaker")," \u63d0\u4f9b\u7684Jupyter\u7b14\u8bb0\u672c\u3002\u7814\u7a76\u4eba\u5458\u751a\u81f3\u53ef\u4ee5\u7ba1\u7406\u548c\u534f\u52a9\u8fdc\u7a0b\u865a\u62df\u8bfe\u5802\u3002"),(0,c.kt)("p",null,"\u5728\u63a7\u5236\u6210\u672c\u65b9\u9762\uff0c\u4eea\u8868\u677f\u63d0\u4f9b\u57fa\u4e8e\u5de5\u4f5c\u533a\u6216\u9879\u76ee\u7684\u5df2\u7d2f\u79ef\u6210\u672c\u6982\u89c8\uff0c\u4ece\u800c\u5e2e\u52a9\u60a8\u4fdd\u6301\u5728\u9884\u7b97\u8303\u56f4\u5185\u5e76\u8ddf\u8e2a\u53ef\u80fd\u4f1a\u5360\u7528\u8fc7\u591a\u8d44\u6e90\u7684\u5de5\u4f5c\u533a\u3002\u4eea\u8868\u677f\u663e\u793a\u8fc7\u53bb 30 \u5929\u7684\u7d22\u5f15\u548c\u5de5\u4f5c\u533a\u6210\u672c\u4ee5\u53ca\u6628\u5929\u7684\u5de5\u4f5c\u533a\u6210\u672c\u3002Service Workbench \u901a\u8fc7 AWS \u8d26\u6237\u6765\u7ba1\u7406\u8ba1\u7b97\u5de5\u4f5c\u533a\uff08compute workspace)\u7684\u542f\u52a8\u548c\u7ba1\u7406\uff0c\u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u4e3a\u4e0d\u540c\u7684\u9879\u76ee\u3001\u6210\u672c\u4e2d\u5fc3\u6216\u5176\u4ed6\u76ee\u7684\u4f7f\u7528\u4e0d\u540c\u7684\u8d26\u6237\uff0c\u5e76\u7ba1\u7406\u6210\u672c\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,c.kt)("p",null,"Service Workbench \u63d0\u4f9b\u4e09\u79cd\u7c7b\u578b\u7684\u6570\u636e\u96c6\uff08Studies\uff09\uff1a\u6211\u7684\u6570\u636e\u96c6\u3001\u7ec4\u7ec7\u6570\u636e\u96c6\u3001\u548c\u5f00\u653e\u6570\u636e\u3002\u60a8\u53ef\u4ee5\u5728\u521b\u5efa\u6570\u636e\u96c6\u4e4b\u540e\u4e0a\u4f20\u6587\u4ef6\u3002\u7ec4\u7ec7\u7684\u6570\u636e\u96c6\u53ef\u4ee5\u4e0e\u7ec4\u7ec7\u4e2d\u5176\u4ed6\u6210\u5458\u5171\u4eab\u3002\u6570\u636e\u96c6\u7684\u6240\u6709\u8005\u53ef\u4ee5\u4fee\u6539\u6570\u636e\u96c6\u7684\u6743\u9650\uff0c\u5e76\u6388\u4e88\u5176\u4ed6\u7528\u6237\u8bbf\u95ee\u6743\u9650\u3002\u5f53\u627e\u5230\u611f\u5174\u8da3\u7684\u6570\u636e\u96c6\u540e\uff0c\u60a8\u53ef\u4ee5\u90e8\u7f72\u5de5\u4f5c\u533a\u5e76\u52a0\u8f7d\u6570\u636e\u8fdb\u884c\u7814\u7a76\u3002"))}d.isMDXComponent=!0}}]);