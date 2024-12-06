(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var i in r)e.o(r,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:r[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{ConvertColor:()=>I,DeprecatedKadenceColorOutput:()=>M,FONT_SIZES_MAP:()=>E,GAP_SIZES_MAP:()=>F,KadenceBlocksCSS:()=>fe,KadenceColorOutput:()=>a,SPACING_SIZES_MAP:()=>C,SafeParseJSON:()=>D,advancedGetPreviewSize:()=>S,allowOneBlockOfType:()=>ge,arrayStringToInt:()=>ce,blockExists:()=>he,capitalizeFirstLetter:()=>X,clearNonMatchingValues:()=>ne,compareVersions:()=>pe,fetchJson:()=>j,getBorderColor:()=>m,getBorderStyle:()=>f,getBorderWidth:()=>w,getFontSizeOptionOutput:()=>G,getGapSizeOptionOutput:()=>ae,getInQueryBlock:()=>K,getPostOrFseId:()=>de,getPostOrWidgetId:()=>le,getPreviewSize:()=>i,getSpacingNameFromSize:()=>re,getSpacingOptionName:()=>$,getSpacingOptionOutput:()=>ee,getSpacingOptionSize:()=>te,getSpacingValueFromSize:()=>ie,getTransferableAttributes:()=>R,getUniqueId:()=>W,getUnitIcon:()=>P,hashString:()=>ue,hexToRGBA:()=>n,isRTL:()=>H,linkedOrIndividual:()=>U,mouseOverVisualizer:()=>Y,objectSameFill:()=>oe,setBlockDefaults:()=>V,setDynamicState:()=>Q,showSettings:()=>N,tryParseJSON:()=>O,typographyStyle:()=>J,useEditorElement:()=>_e,useElementHeight:()=>be});const r=window.wp.element,i=(e,t,i,n,a=!1)=>a?o(e,t,i,n):(0,r.useMemo)((()=>o(e,t,i,n)),[e,t,i,n]);function o(e,t,r,i){if("Mobile"===e){if(void 0!==i&&""!==i&&null!==i)return i;if(void 0!==r&&""!==r&&null!==r)return r}else if("Tablet"===e&&void 0!==r&&""!==r&&null!==r)return r;return void 0!==t?t:""}const n=(e,t)=>null===e?"":(e.indexOf("var(")>-1&&(e=window.getComputedStyle(document.documentElement).getPropertyValue(e.replace("var(","").replace(")",""))||"#fff"),e=e.replace("#",""),"rgba("+parseInt(3===e.length?e.slice(0,1).repeat(2):e.slice(0,2),16)+", "+parseInt(3===e.length?e.slice(1,2).repeat(2):e.slice(2,4),16)+", "+parseInt(3===e.length?e.slice(2,3).repeat(2):e.slice(4,6),16)+", "+t+")");function a(e,t=null){return e&&e.startsWith("palette")?e="var(--global-"+e+")":null===t||isNaN(t)||1===Number(t)||void 0===e||""===e||(e=n(e,t)),e}function s(e,t,r){return l(e,t,void 0!==r?.[0]?r?.[0]:[],void 0!==r?.[1]?r?.[1]:[],void 0!==r?.[2]?r?.[2]:[])}function l(e,t="top",r,i,o,n=!1){if("Mobile"===e){if(void 0!==o?.[0]?.[t]?.[0]&&""!==o?.[0]?.[t]?.[0])return a(o?.[0]?.[t]?.[0]);if(""!==i?.[0]?.[t]?.[0])return a(i?.[0]?.[t]?.[0]);if(n&&s(e,t,n))return s(e,t,n)}else if("Tablet"===e){if(void 0!==i?.[0]?.[t]?.[0]&&""!==i?.[0]?.[t]?.[0])return a(i?.[0]?.[t]?.[0]);if(n&&s(e,t,n))return s(e,t,n)}return void 0!==r?.[0]?.[t]?.[0]&&""!==r?.[0]?.[t]?.[0]?a(r?.[0]?.[t]?.[0]):n&&s(e,t,n)?s(e,t,n):""}function u(e,t,r){return d(e,t,void 0!==r?.[0]?r?.[0]:[],void 0!==r?.[1]?r?.[1]:[],void 0!==r?.[2]?r?.[2]:[])}function d(e,t="top",r,i,o,n=!1){if("Mobile"===e){if(void 0!==o?.[0]?.[t]?.[1]&&""!==o?.[0]?.[t]?.[1])return o?.[0]?.[t]?.[1];if(""!==i?.[0]?.[t]?.[1])return i?.[0]?.[t]?.[1];if(n&&u(e,t,n))return u(e,t,n)}else if("Tablet"===e){if(void 0!==i?.[0]?.[t]?.[1]&&""!==i?.[0]?.[t]?.[1])return i?.[0]?.[t]?.[1];if(n&&u(e,t,n))return u(e,t,n)}return void 0!==r?.[0]?.[t]?.[1]&&""!==r?.[0]?.[t]?.[1]?r?.[0]?.[t]?.[1]:n&&u(e,t,n)?u(e,t,n):""}function c(e,t,r){return p(e,t,void 0!==r?.[0]?r?.[0]:[],void 0!==r?.[1]?r?.[1]:[],void 0!==r?.[2]?r?.[2]:[])}function p(e,t="top",r,i,o,n=!1){if("Mobile"===e){if(void 0!==o?.[0]?.[t]?.[2]&&""!==o?.[0]?.[t]?.[2])return o?.[0]?.[t]?.[2]+b(e,r,i,o,n);if(""!==i?.[0]?.[t]?.[2])return i?.[0]?.[t]?.[2]+b(e,r,i,o,n);if(n&&c(e,t,n))return c(e,t,n)}else if("Tablet"===e){if(void 0!==i?.[0]?.[t]?.[2]&&""!==i?.[0]?.[t]?.[2])return i?.[0]?.[t]?.[2]+b(e,r,i,o,n);if(n&&c(e,t,n))return c(e,t,n)}return void 0!==r?.[0]?.[t]?.[2]&&""!==r?.[0]?.[t]?.[2]?r?.[0]?.[t]?.[2]+b(e,r,i,o,n):n&&c(e,t,n)?c(e,t,n):""}function _(e,t){return b(e,void 0!==t?.[0]?t?.[0]:[],void 0!==t?.[1]?t?.[1]:[],void 0!==t?.[2]?t?.[2]:[])}function b(e,t,r,i,o=!1){if("Mobile"===e){if(void 0!==i?.[0]?.unit&&""!==i?.[0]?.unit)return i[0].unit;if(void 0!==r?.[0]?.unit&&""!==r?.[0]?.unit)return r[0].unit;if(o&&_(e,o))return _(e,o)}else if("Tablet"===e){if(void 0!==r?.[0]?.unit&&""!==r?.[0]?.unit)return r[0].unit;if(o&&_(e,o))return _(e,o)}return void 0!==t?.[0]?.unit&&""!==t?.[0]?.unit?t[0].unit:o&&_(e,o)?_(e,o):"px"}const f=(e,t="top",i,o,n,a=!1,s=!1)=>s?h(e,t,i,o,n,a):(0,r.useMemo)((()=>h(e,t,i,o,n,a)),[e,t,i,o,n,a]);function h(e,t="top",r,i,o,n=!1){const a=p(e,t,r,i,o,n);if(!a)return"";let s=l(e,t,r,i,o,n);s||(s="transparent");let u=d(e,t,r,i,o,n);return u||(u="solid"),a+" "+u+" "+s}function v(e,t,r){return g(e,t,void 0!==r?.[0]?r?.[0]:[],void 0!==r?.[1]?r?.[1]:[],void 0!==r?.[2]?r?.[2]:[])}function g(e,t="top",r,i,o,n=!1){if("Mobile"===e){if(""!==o?.[0]?.[t]?.[0])return a(o?.[0]?.[t]?.[0]);if(""!==i?.[0]?.[t]?.[0])return a(i?.[0]?.[t]?.[0]);if(n&&v(e,t,n))return v(e,t,n)}else if("Tablet"===e){if(""!==i?.[0]?.[t]?.[0])return a(i?.[0]?.[t]?.[0]);if(n&&v(e,t,n))return v(e,t,n)}return""!==r?.[0]?.[t]?.[0]?a(r?.[0]?.[t]?.[0]):n&&v(e,t,n)?v(e,t,n):""}const m=(e,t="top",i,o,n,a=!1)=>(0,r.useMemo)((()=>g(e,t,i,o,n,a)||""),[e,t,i,o,n,a]);function k(e,t,r){return y(e,t,void 0!==r?.[0]?r?.[0]:[],void 0!==r?.[1]?r?.[1]:[],void 0!==r?.[2]?r?.[2]:[])}function y(e,t="top",r,i,o,n=!1){if("Mobile"===e){if(void 0!==o?.[0]?.[t]?.[2]&&""!==o?.[0]?.[t]?.[2])return o?.[0]?.[t]?.[2]+z(e,r,i,o,n);if(""!==i?.[0]?.[t]?.[2])return i?.[0]?.[t]?.[2]+z(e,r,i,o,n);if(n&&k(e,t,n))return k(e,t,n)}else if("Tablet"===e){if(void 0!==i?.[0]?.[t]?.[2]&&""!==i?.[0]?.[t]?.[2])return i?.[0]?.[t]?.[2]+z(e,r,i,o,n);if(n&&k(e,t,n))return k(e,t,n)}return void 0!==r?.[0]?.[t]?.[2]&&""!==r?.[0]?.[t]?.[2]?r?.[0]?.[t]?.[2]+z(e,r,i,o,n):n&&k(e,t,n)?k(e,t,n):""}function x(e,t){return z(e,void 0!==t?.[0]?t?.[0]:[],void 0!==t?.[1]?t?.[1]:[],void 0!==t?.[2]?t?.[2]:[])}function z(e,t,r,i,o=!1){if("Mobile"===e){if(void 0!==i?.[0]?.unit&&""!==i?.[0]?.unit)return i[0].unit;if(void 0!==r?.[0]?.unit&&""!==r?.[0]?.unit)return r[0].unit;if(o&&x(e,o))return x(e,o)}else if("Tablet"===e){if(void 0!==r?.[0]?.unit&&""!==r?.[0]?.unit)return r[0].unit;if(o&&x(e,o))return x(e,o)}return void 0!==t?.[0]?.unit&&""!==t?.[0]?.unit?t[0].unit:o&&x(e,o)?x(e,o):"px"}const w=(e,t="top",i,o,n,a=!1)=>(0,r.useMemo)((()=>y(e,t,i,o,n,a)||""),[e,t,i,o,n,a]),S=(e,t,r,i,o)=>{const n=void 0!==r[t]?r[t]:"",a=void 0!==i[t]?i[t]:"",s=void 0!==o[t]?o[t]:"";if("Mobile"===e){if(void 0!==s&&""!==s&&null!==s)return s;if(void 0!==a&&""!==a&&null!==a)return a}else if("Tablet"===e&&void 0!==a&&""!==a&&null!==a)return a;return n},N=(e,t,r=!0)=>{const i=kadence_blocks_params.settings?JSON.parse(kadence_blocks_params.settings):{};let o={};void 0!==i[t]&&"object"==typeof i[t]&&(o=i[t]);const n=kadence_blocks_params.userrole?kadence_blocks_params.userrole:"admin";return void 0===o[e]?r:"all"===o[e]||"contributor"===o[e]&&("contributor"===n||"author"===n||"editor"===n||"admin"===n)||"author"===o[e]&&("author"===n||"editor"===n||"admin"===n)||"editor"===o[e]&&("editor"===n||"admin"===n)||"admin"===o[e]&&"admin"===n};function O(e,t=!0){try{var r=JSON.parse(e);if(r&&"object"==typeof r)return r}catch(e){}return e&&"object"==typeof e?e:!!t&&{}}function I(e,t=null){return e&&e.startsWith("palette")||null===t||isNaN(t)||1===Number(t)||void 0===e||""===e||(e=n(e,t)),e}function M(e,t=null){return e&&e.startsWith("palette")?e="var(--global-"+e+")":null===t||isNaN(t)||1===Number(t)||void 0===e||""===e||(e=n(e,t)),e}const B=window.lodash,T=window.wp.apiFetch;var L=e.n(T);const j=(e,t=["x-wp-totalpages"])=>new Promise((r=>{L()({...e,parse:!1}).then((e=>Promise.all([e.json?e.json():[],(0,B.zipObject)(t,t.map((t=>e.headers.get(t))))]))).then((e=>r(e))).catch((()=>{}))})),X=e=>e.charAt(0).toUpperCase()+e.slice(1),D=(e,t=!0)=>{try{var r=JSON.parse(e);if(r&&"object"==typeof r)return r}catch(e){}return e&&"object"==typeof e?e:!!t&&{}},q=window.kadence.icons,P=e=>{let t=e.toLowerCase();return"%"===t?q.percentIcon:"em"===t?q.emIcon:"vh"===t?q.vhIcon:"vw"===t?q.vwIcon:"rem"===t?q.remIcon:q.pxIcon},A=window.wp.i18n,C=[{value:"ss-auto",output:"var(--global-kb-spacing-auto, auto)",label:(0,A.__)("Auto","kadence-blocks"),size:0,name:(0,A.__)("Auto","kadence-blocks")},{value:"0",output:"0",label:(0,A.__)("None","kadence-blocks"),size:0,name:(0,A.__)("None","kadence-blocks")},{value:"xxs",output:"var(--global-kb-spacing-xxs, 0.5rem)",size:8,label:(0,A.__)("XXS","kadence-blocks"),name:(0,A.__)("2X Small","kadence-blocks")},{value:"xs",output:"var(--global-kb-spacing-xs, 1rem)",size:16,label:(0,A.__)("XS","kadence-blocks"),name:(0,A.__)("X Small","kadence-blocks")},{value:"sm",output:"var(--global-kb-spacing-sm, 1.5rem)",size:24,label:(0,A.__)("SM","kadence-blocks"),name:(0,A.__)("Small","kadence-blocks")},{value:"md",output:"var(--global-kb-spacing-md, 2rem)",size:32,label:(0,A.__)("MD","kadence-blocks"),name:(0,A.__)("Medium","kadence-blocks")},{value:"lg",output:"var(--global-kb-spacing-lg, 3rem)",size:48,label:(0,A.__)("LG","kadence-blocks"),name:(0,A.__)("Large","kadence-blocks")},{value:"xl",output:"var(--global-kb-spacing-xl, 4rem)",size:64,label:(0,A.__)("XL","kadence-blocks"),name:(0,A.__)("X Large","kadence-blocks")},{value:"xxl",output:"var(--global-kb-spacing-xxl, 5rem)",size:80,label:(0,A.__)("XXL","kadence-blocks"),name:(0,A.__)("2X Large","kadence-blocks")},{value:"3xl",output:"var(--global-kb-spacing-3xl, 6.5rem)",size:104,label:(0,A.__)("3XL","kadence-blocks"),name:(0,A.__)("3X Large","kadence-blocks")},{value:"4xl",output:"var(--global-kb-spacing-4xl, 8rem)",size:128,label:(0,A.__)("4XL","kadence-blocks"),name:(0,A.__)("4X Large","kadence-blocks")},{value:"5xl",output:"var(--global-kb-spacing-5xl, 10rem)",size:160,label:(0,A.__)("5XL","kadence-blocks"),name:(0,A.__)("5X Large","kadence-blocks")}],E=[{value:"sm",output:"var(--global-kb-font-size-sm, 0.9rem)",size:14,label:(0,A.__)("SM","kadence-blocks"),name:(0,A.__)("Small","kadence-blocks")},{value:"md",output:"var(--global-kb-font-size-md, 1.25rem)",size:20,label:(0,A.__)("MD","kadence-blocks"),name:(0,A.__)("Medium","kadence-blocks")},{value:"lg",output:"var(--global-kb-font-size-lg, 2rem)",size:32,label:(0,A.__)("LG","kadence-blocks"),name:(0,A.__)("Large","kadence-blocks")},{value:"xl",output:"var(--global-kb-font-size-xl, 3rem)",size:48,label:(0,A.__)("XL","kadence-blocks"),name:(0,A.__)("X Large","kadence-blocks")},{value:"xxl",output:"var(--global-kb-font-size-xxl, 4rem)",size:64,label:(0,A.__)("2XL","kadence-blocks"),name:(0,A.__)("2X Large","kadence-blocks")},{value:"3xl",output:"var(--global-kb-font-size-xxxl, 5rem)",size:80,label:(0,A.__)("3XL","kadence-blocks"),name:(0,A.__)("3X Large","kadence-blocks")}],F=[{value:"none",output:"var(--global-kb-gap-none, 0px)",size:0,label:(0,A.__)("None","kadence-blocks"),name:(0,A.__)("None","kadence-blocks")},{value:"xs",output:"var(--global-kb-gap-xs, 0.5rem)",size:8,label:(0,A.__)("XS","kadence-blocks"),name:(0,A.__)("X Small","kadence-blocks")},{value:"sm",output:"var(--global-kb-gap-sm, 1rem)",size:16,label:(0,A.__)("SM","kadence-blocks"),name:(0,A.__)("Small","kadence-blocks")},{value:"md",output:"var(--global-kb-gap-md, 2rem)",size:32,label:(0,A.__)("MD","kadence-blocks"),name:(0,A.__)("Medium","kadence-blocks")},{value:"lg",output:"var(--global-kb-gap-lg, 4rem)",size:64,label:(0,A.__)("LG","kadence-blocks"),name:(0,A.__)("Large","kadence-blocks")}],H=document.body&&document.body.classList.contains("rtl");function G(e,t,r=E){if(!e)return"";if(!r)return e;if("0"===e)return"0";const i=r.find((t=>t.value===e));return i?i.output:e+t}const J=(e,t,r,o=!0)=>{let n="";if(void 0!==e&&void 0!==e[0]){const t=i(r,void 0!==e&&void 0!==e[0]&&void 0!==e[0].size&&void 0!==e[0].size[0]?e[0].size[0]:"",void 0!==e&&void 0!==e[0]&&void 0!==e[0].size&&void 0!==e[0].size[1]?e[0].size[1]:"",void 0!==e&&void 0!==e[0]&&void 0!==e[0].size&&void 0!==e[0].size[2]?e[0].size[2]:"");t&&(n=n+"font-size:"+G(t,void 0!==e[0].sizeType?e[0].sizeType:"px")+";");const o=i(r,void 0!==e&&void 0!==e[0]&&void 0!==e[0].lineHeight&&void 0!==e[0].lineHeight[0]?e[0].lineHeight[0]:"",void 0!==e&&void 0!==e[0]&&void 0!==e[0].lineHeight&&void 0!==e[0].lineHeight[1]?e[0].lineHeight[1]:"",void 0!==e&&void 0!==e[0]&&void 0!==e[0].lineHeight&&void 0!==e[0].lineHeight[2]?e[0].lineHeight[2]:"");o&&(n=n+"line-height:"+o+(void 0!==e[0].lineType?e[0].lineType:"")+";");const a=i(r,void 0!==e&&void 0!==e[0]&&void 0!==e[0].letterSpacing&&void 0!==e[0].letterSpacing[0]?e[0].letterSpacing[0]:"",void 0!==e&&void 0!==e[0]&&void 0!==e[0].letterSpacing&&void 0!==e[0].letterSpacing[1]?e[0].letterSpacing[1]:"",void 0!==e&&void 0!==e[0]&&void 0!==e[0].letterSpacing&&void 0!==e[0].letterSpacing[2]?e[0].letterSpacing[2]:"");a&&(n=n+"letter-spacing:"+a+(void 0!==e[0].letterSpacingType?e[0].letterSpacingType:"px")+";"),void 0!==e[0].weight&&""!==e[0].weight&&(n=n+"font-weight:"+e[0].weight+";"),void 0!==e[0].style&&""!==e[0].style&&(n=n+"font-style:"+e[0].style+";"),void 0!==e[0].textTransform&&""!==e[0].textTransform&&(n=n+"text-transform:"+e[0].textTransform+";"),void 0!==e[0].family&&""!==e[0].family&&(n=n+"font-family:"+e[0].family+";"),void 0!==e[0].color&&""!==e[0].color&&(n=n+"color:"+e[0].color+";")}return n?(o?t+"{":"")+n+(o?"}":""):""},U=(e,t)=>{let r=(0,B.get)(e,[t,0]),i=(0,B.get)(e,[t,1]),o=(0,B.get)(e,[t,2]),n=(0,B.get)(e,[t,3]);return r===i&&r===o&&r===n?"linked":"individual"},V=(e,t)=>{if(!(t.uniqueID||void 0!==t.noCustomDefaults&&t.noCustomDefaults)){const r=kadence_blocks_params.config&&kadence_blocks_params.config[e]?kadence_blocks_params.config[e]:void 0,i=kadence_blocks_params.configuration?JSON.parse(kadence_blocks_params.configuration):[];void 0!==i[e]&&"object"==typeof i[e]?("kadence/iconlist"===e&&void 0!==i[e]?.items?.[0]?.icon&&i[e]?.items?.[0]?.icon&&!i[e]?.icon&&(t.icon=i[e]?.items?.[0]?.icon),Object.keys(i[e]).map((r=>{t[r]=i[e][r]}))):void 0!==r&&"object"==typeof r&&Object.keys(r).map((e=>{t[e]=r[e]}))}return t};function W(e,t,r,i,o="",n=!1){const a=e&&2===e.split("_").length,s=(o?o+"_":"")+t.substr(2,9);return!e||a&&e.split("_")[0]!==o.toString()?r(s)?s:(0,B.uniqueId)(s):r(e)||i(e,t)?e:n?(0,B.uniqueId)(s):s}function R(e,t={},r=[],i=[]){let o={};const n=["uniqueID","inQueryBlock","anchor","noCustomDefaults","metadata"].concat(r);return o=(0,B.omit)(e,n),i!==[]&&i.forEach((e=>{o[e]=[(0,B.head)(o[e])]})),Object.keys(o).map(((e,r)=>{void 0!==t[e]&&void 0!==t[e].default&&(0,B.isEqual)(o[e],t[e].default)&&delete o[e]})),o}function K(e,t){const r=Boolean(e&&(e.queryId||Number.isFinite(e.queryId))&&e.postId),i=Boolean(e&&void 0!==e["kadence/dynamicSource"]&&e["kadence/dynamicSource"]);return!(!r&&!i)}const Z=window.wp.hooks;function Q(e,t,r,i,o,n,a,s=!1){r.kadenceDynamic&&r.kadenceDynamic[i]&&r.kadenceDynamic[i].enable&&(0,Z.applyFilters)(e,t,r,i,o,n,a,s)}function Y(){const[e,t]=(0,r.useState)(!1);return{isMouseOver:e,onMouseOver:()=>t(!0),onMouseOut:()=>t(!1)}}function $(e,t,r=C){if(!e)return(0,A.__)("None","kadence-blocks");if(!r)return(0,A.__)("Unset","kadence-blocks");if("0"===e)return(0,A.__)("None","kadence-blocks");const i=r.find((t=>t.value===e));return i?i.name:e+t}function ee(e,t,r=C){if(void 0===e)return"";if(""===e)return"";if(null===e)return"";if(""===e)return"0"+t;if(!r)return e;if("0"===e)return"0"+t;if(0===e)return"0"+t;const i=r.find((t=>t.value===e));return i?i.output:e+t}function te(e,t=C){if(!e)return 0;if(!t)return e;if("0"===e)return 0;const r=t.find((t=>t.value===e));return r?r.size:e}function re(e,t=C){if(!e)return(0,A.__)("Unset","kadence-blocks");if(!t)return(0,A.__)("Unset","kadence-blocks");if("0"===e)return(0,A.__)("None","kadence-blocks");const r=t.find((t=>t.size===e));return r?r.name:e+"px"}function ie(e,t=C){if(!e)return"";if(!t)return"";if("0"===e)return"0";const r=t.find((t=>t.size===e));return r?r.value:e}function oe(e,t){if("object"!=typeof e||"object"!=typeof t)return!1;if(e.length!=t.length)return!1;for(let r=0;r<e.length;r++){const i=e[r],o=t[r];if(i&&!o||!i&&o)return!1}return!0}function ne(e,t){if("object"!=typeof e||"object"!=typeof t)return t;if(e.length!=t.length)return t;let r=null;for(let i=0;i<e.length;i++){const o=e[i],n=t[i];o!==n&&(r=n)}return r?t.map((e=>typeof e==typeof r?e:"")):t}function ae(e,t,r=F){if(void 0===e)return"";if(!r)return e;if("0"===e)return"0"+t;if(0===e)return"0"+t;const i=r.find((t=>t.value===e));return i?i.output:e+t}const se=window.wp.widgets;function le(e,t,r,i="block-unknown"){return(0,B.has)(r,"ref")?r.ref:(0,B.has)(r,"id")?r.id:t?t="string"==typeof t?t.replace(/\//g,"_"):t:(0,se.getWidgetIdFromBlock)(e)?(0,se.getWidgetIdFromBlock)(e):i}function ue(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}function de(e,t){const{postId:r,reusableParent:i,rootBlock:o,editedPostId:n}=t,a=le(e,r,i,0);if(0===a){if("core/template-part"===(0,B.get)(o,"name")&&(0,B.has)(o,["attributes","slug"]))return ue(o.attributes.slug)%1e6;if(n)return ue(n)%1e6}return a}const ce=e=>e.map((function(e){let t=parseInt(e);return isNaN(t)?e:t})),pe=(e,t)=>{var r=e.split(".").map((e=>isNaN(parseInt(e))?e:parseInt(e))).filter((e=>!isNaN(e))),i=t.split(".").map((e=>isNaN(parseInt(e))?e:parseInt(e))).filter((e=>!isNaN(e)));for(let e=0;e<Math.max(r.length,i.length);e++){if(e>=r.length){if(0===i[e])continue;return-1}if(e>=i.length){if(0===r[e])continue;return 1}if(r[e]>i[e])return 1;if(r[e]<i[e])return-1}return 0};function _e(e,t,i="editor-styles-wrapper"){const[o,n]=(0,r.useState)();function a(){e?.current?.ownerDocument&&n(e.current.ownerDocument.querySelector("."+i))}return(0,r.useEffect)(a,t),(0,r.useEffect)((()=>{if(e?.current?.ownerDocument){const{defaultView:t}=e.current.ownerDocument;return t.addEventListener("resize",a),()=>{t.removeEventListener("resize",a)}}}),[]),o}function be(e,t,i=""){const[o,n]=(0,r.useState)();return(0,r.useEffect)((function(){i&&e?.current?.ownerDocument?n(e.current.ownerDocument.querySelector(i)?.clientHeight):e?.current&&n(e.current?.clientHeight)}),t),o}class fe{_css="";_output="";_special_properties_list=["border-top-left-radius","border-top-right-radius","border-bottom-left-radius","border-bottom-right-radius","transition","transition-delay","transition-duration","transition-property","transition-timing-function","background-image","content","line-height"];_selector="";_selector_output="";_selector_states=[];_media_query=null;_media_query_output="";spacing_sizes={"ss-auto":"var(--global-kb-spacing-auto, auto)",xxs:"var(--global-kb-spacing-xxs, 0.5rem)",xs:"var(--global-kb-spacing-xs, 1rem)",sm:"var(--global-kb-spacing-sm, 1.5rem)",md:"var(--global-kb-spacing-md, 2rem)",lg:"var(--global-kb-spacing-lg, 3rem)",xl:"var(--global-kb-spacing-xl, 4rem)",xxl:"var(--global-kb-spacing-xxl, 5rem)","3xl":"var(--global-kb-spacing-3xl, 6.5rem)","4xl":"var(--global-kb-spacing-4xl, 8rem)","5xl":"var(--global-kb-spacing-5xl, 10rem)"};font_sizes={sm:"var(--global-kb-font-size-sm, 0.9rem)",md:"var(--global-kb-font-size-md, 1.25rem)",lg:"var(--global-kb-font-size-lg, 2rem)",xl:"var(--global-kb-font-size-xl, 3rem)",xxl:"var(--global-kb-font-size-xxl, 4rem)","3xl":"var(--global-kb-font-size-xxxl, 5rem)"};gap_sizes={none:"var(--global-kb-gap-none, 0rem )",skinny:"var(--global-kb-gap-sm, 1rem)",narrow:"20px",wide:"40px",widest:"80px",default:"var(--global-kb-gap-md, 2rem)",wider:"var(--global-kb-gap-lg, 4rem)",xs:"var(--global-kb-gap-xs, 0.5rem )",sm:"var(--global-kb-gap-sm, 1rem)",md:"var(--global-kb-gap-md, 2rem)",lg:"var(--global-kb-gap-lg, 4rem)"};constructor(){}set_selector(e=""){return""!==this._selector&&this.add_selector_rules_to_output(),this._selector=e,this}add_selector_rules_to_output(){if(!this.empty(this._css)){this.prepare_selector_output();var e=this._selector_output+"{"+this._css+"}";this.has_media_query()?(this._media_query_output+=e,this.reset_css()):this._output+=e,this.reset_css()}return this}get_media_query(){return this._media_query}has_media_query(){return!this.empty(this.get_media_query())}prepare_selector_output(){if(this.empty(this._selector_states))this._selector_output=this._selector;else{var e="";for(let t=0;t<this._selector_states.length;t++){this._selector_states[t];const r=this._selector_states.length===t+1?"":",";e+=this._selector+state+r}this._selector_output=e}return this}add_property(e,t=null,r=null){return null===t||null!==r&&this.empty(r)||(this._special_properties_list.includes(e)?this.add_special_rules(e,t):this.add_rule(e,t)),this}add_rule(e,t,r=null){const i=null===r?"":r;return t&&!this.empty(t)&&(this._css+=i+e+":"+t+";"),this}add_raw_styles(e){return e&&(this._output+=e),this}add_special_rules(e,t){switch(e){case"border-top-left-radius":this.add_rule(e,t),this.add_rule(e,t,"-webkit-"),this.add_rule("border-radius-topleft",t,"-moz-");break;case"border-top-right-radius":this.add_rule(e,t),this.add_rule(e,t,"-webkit-"),this.add_rule("border-radius-topright",t,"-moz-");break;case"border-bottom-left-radius":this.add_rule(e,t),this.add_rule(e,t,"-webkit-"),this.add_rule("border-radius-bottomleft",t,"-moz-");break;case"border-bottom-right-radius":this.add_rule(e,t),this.add_rule(e,t,"-webkit-"),this.add_rule("border-radius-bottomright",t,"-moz-");break;case"background-image":"var("===t.substring(0,4)?this.add_rule(e,t):this.add_rule(e,"url('"+t+"')");break;case"content":this.add_rule(e,'"'+t+'"');break;case"line-height":!isNaN(parseFloat(t))&&isFinite(t)&&0==t&&(t="0px"),this.add_rule(e,t);break;default:this.add_rule(e,t),this.add_rule(e,t,"-webkit-"),this.add_rule(e,t,"-moz-")}return this}render_half_size(e,t=null){return(!this.empty(e)||0===e||"0"==e)&&"calc("+(e||"0")+(t||"em")+" / 2)"}render_size(e,t=null){return!this.empty(e)&&(this.empty(e)?"0":e)+(this.empty(t)?"em":t)}render_color(e,t=null){return a(e,t)}render_font(e,t){return this._css+=J(e,"",t,!1),this}render_border(e,t=null,r=null,i=null,o="top",n=!1,a=!1){return f(i,o,e,t,r,n,a)}render_measure_output(e,t=null,r=null,o=null,n="padding",a="px",s={},l=!1,u=!1){const d=i(o,e,t,r,l);var c={};switch(n){case"border-width":c={first_prop:"border-top-width",second_prop:"border-right-width",third_prop:"border-bottom-width",fourth_prop:"border-left-width"};break;case"border-radius":c={first_prop:"border-top-left-radius",second_prop:"border-top-right-radius",third_prop:"border-bottom-right-radius",fourth_prop:"border-bottom-left-radius"};break;case"position":c={first_prop:"top",second_prop:"right",third_prop:"bottom",fourth_prop:"left"};break;default:c={first_prop:n+"-top",second_prop:n+"-right",third_prop:n+"-bottom",fourth_prop:n+"-left"}}if(s={first_prop:c.first_prop,second_prop:c.second_prop,third_prop:c.third_prop,fourth_prop:c.fourth_prop,...s},d&&Array.isArray(d)){const e=!u||"0"!=d[0]||0!=d[0];this.isNumeric(d[0])&&e?this.add_property(s.first_prop,d[0]+a):"position"!==n||this.empty(d[0])?!this.empty(d[0])&&this.is_variable_value(d[0])&&this.add_property(s.first_prop,this.get_variable_value(d[0])):this.add_property(s.first_prop,d[0]),this.isNumeric(d[1])&&e?this.add_property(s.second_prop,d[1]+a):"position"!==n||this.empty(d[1])?!this.empty(d[1])&&this.is_variable_value(d[1])&&this.add_property(s.second_prop,this.get_variable_value(d[1])):this.add_property(s.second_prop,d[1]),this.isNumeric(d[2])&&e?this.add_property(s.third_prop,d[2]+a):"position"!==n||this.empty(d[2])?!this.empty(d[2])&&this.is_variable_value(d[2])&&this.add_property(s.third_prop,this.get_variable_value(d[2])):this.add_property(s.third_prop,d[2]),this.isNumeric(d[3])&&e?this.add_property(s.fourth_prop,d[3]+a):"position"!==n||this.empty(d[3])?!this.empty(d[3])&&this.is_variable_value(d[3])&&this.add_property(s.fourth_prop,this.get_variable_value(d[3])):this.add_property(s.fourth_prop,d[3])}}render_button_styles_with_states(e,t,r,o=!1){const{colorBase:n,backgroundBase:a,backgroundTypeBase:s,backgroundGradientBase:l,borderBase:u,borderRadiusBase:d,borderRadiusUnitBase:c,shadowBase:p,selector:_,selectorHover:b,selectorActive:f,renderAsVars:h,varBase:v}=e,g=h?v:"";["","Hover","Active"].forEach((_=>{if(e["selector"+_]||h){const b=e["selector"+_],f=h&&_?"-"+_.toLowerCase():"",v=h&&_?_.toLowerCase()+"-":"",m=t[n+_],k=t[n+_+"Tablet"],y=t[n+_+"Mobile"],x=t[a+_],z=t[a+_+"Tablet"],w=t[a+_+"Mobile"],S=t[s+_],N=t[l+_],O=t[u+_],I=t[u+_+"Tablet"],M=t[u+_+"Mobile"],B=t[d+_],T=t[d+_+"Tablet"],L=t[d+_+"Mobile"],j=t[c+_],X=t[p+_],D=i(r,m,k,y,o),q=i(r,x,z,w,o),P=this.render_border(O,I,M,r,"top",!1,o),A=this.render_border(O,I,M,r,"right",!1,o),C=this.render_border(O,I,M,r,"bottom",!1,o),E=this.render_border(O,I,M,r,"left",!1,o);let F;F=void 0!==S&&"gradient"===S?N:"transparent"===q||void 0===q?void 0:this.render_color(q),h||this.set_selector(b),this.add_property(g+"color"+f,this.render_color(D)),this.add_property(g+"background"+f,F),this.add_property(g+v+"border-top",P),this.add_property(g+v+"border-right",A),this.add_property(g+v+"border-bottom",C),this.add_property(g+v+"border-left",E);const H=h?{first_prop:g+v+"border-top-left-radius",second_prop:g+v+"border-top-right-radius",third_prop:g+v+"border-bottom-right-radius",fourth_prop:g+v+"border-bottom-left-radius"}:{};this.render_measure_output(B,T,L,r,"border-radius",j||"px",H,o),X?.[0]?.enable&&this.add_property(g+"box-shadow"+f,this.render_shadow(X[0]))}}))}get_gap_size(e,t){return this.is_variable_gap_value(e)?this.get_variable_gap_value(e):e+t}is_variable_gap_value(e){return this.gap_sizes?.[e]}get_variable_gap_value(e){return!!this.is_variable_gap_value(e)&&this.gap_sizes[e]}is_variable_font_size_value(e){return"string"==typeof e&&this.font_sizes?.[e]}get_variable_font_size_value(e){return!!this.is_variable_font_size_value(e)&&this.font_sizes[e]}is_variable_value(e){return"string"==typeof e&&this.spacing_sizes?.[e]}get_variable_value(e){return this.is_variable_value(e)?this.spacing_sizes[e]:0}render_shadow(e){if(this.empty(e,!0))return!1;if("object"!=typeof e)return!1;if(!("color"in e))return!1;if(!("hOffset"in e))return!1;if(!("vOffset"in e))return!1;if(!("blur"in e))return!1;if(!("spread"in e))return!1;if(!("inset"in e))return!1;var t=null;return"opacity"in e&&(t="opacity"in e&&!this.empty(e?.opacity)?e?.opacity:0),e.inset?"inset "+(this.empty(e.hOffset)?"0":e.hOffset)+"px "+(this.empty(e.vOffset)?"0":e.vOffset)+"px "+(this.empty(e.blur)?"0":e.blur)+"px "+(this.empty(e.spread)?"0":e.spread)+"px "+(this.empty(e.color)?"rgba(0,0,0,0.0)":this.render_color(e.color,t)):(this.empty(e.hOffset)?"0":e.hOffset)+"px "+(this.empty(e.vOffset)?"0":e.vOffset)+"px "+(this.empty(e.blur)?"0":e.blur)+"px "+(this.empty(e.spread)?"0":e.spread)+"px "+(this.empty(e.color)?"rgba(0,0,0,0.0)":this.render_color(e.color,t))}reset_css(){this._css=""}css_output(){return this.add_selector_rules_to_output(),this._output}empty(e){return!!(void 0===e||""===e||null===e||Array.isArray(e)&&!e.length||"object"==typeof e&&0===Object.keys(e).length)}isNumeric(e){return!isNaN(parseFloat(e))&&isFinite(e)}}function he(e,t,r=50,i=0){for(const o of e){if(o.name===t)return!0;if(o.innerBlocks&&o.innerBlocks.length>0&&i<r&&he(o.innerBlocks,t,r,i+1))return!0}return!1}const ve=window.wp.data,ge=()=>{const[e,t]=(0,r.useState)({});return function(r=[],i,o){const n=r=>r.map((r=>{if(r.name===i)if((0,B.has)(e,i)){if(e[i]!=r.attributes.uniqueID)return(0,ve.dispatch)("core/block-editor").removeBlock(r.clientId),(0,ve.dispatch)("core/notices").createNotice("warning",(0,A.sprintf)((0,A.__)("Only one %s block is allowed.","kadence-blocks"),o),{type:"snackbar",isDismissible:!0}),null}else t({...e,[i]:r.attributes.uniqueID});return r.innerBlocks&&r.innerBlocks.length>0&&(r.innerBlocks=n(r.innerBlocks)),r})).filter(Boolean);return n(r)}};(this.kadence=this.kadence||{}).helpers=t})();