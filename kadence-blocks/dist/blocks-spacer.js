(()=>{var e,t={8264:(e,t,i)=>{"use strict";i.r(t),i.d(t,{metadata:()=>s,name:()=>f});const a=window.wp.blocks,r=window.React,{Component:l}=wp.element,n=class extends l{render(){const{uniqueID:e="a",color:t="#eeeeee",rotate:i=40,strokeWidth:a=9,strokeGap:l=9,opacity:n=1}=this.props,d=a/2+l;return(0,r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",className:"kb-pattern-svg-divider kb-stripes-svg"},(0,r.createElement)("defs",null,(0,r.createElement)("pattern",{id:"pat"+e,width:d,height:d,patternTransform:"rotate("+i+")",patternUnits:"userSpaceOnUse"},(0,r.createElement)("line",{x1:"0",y:"0",x2:"0",y2:d,stroke:t,"stroke-width":a}))),(0,r.createElement)("rect",{width:"100%",height:"100%",fill:"url(#pat"+e+")",opacity:n/100}))}},d=window.kadence.helpers,o=window.kadence.components,s=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"kadence/spacer","title":"Spacer / Divider","category":"kadence-blocks","attributes":{"blockAlignment":{"type":"string","default":"center"},"hAlign":{"type":"string","default":"center"},"spacerHeight":{"type":"number","default":60},"spacerHeightUnits":{"type":"string","default":"px"},"tabletSpacerHeight":{"type":"number","default":""},"mobileSpacerHeight":{"type":"number","default":""},"dividerEnable":{"type":"boolean","default":true},"dividerStyle":{"type":"string","default":"solid"},"dividerOpacity":{"type":"number","default":100},"dividerColor":{"type":"string","default":"#eee"},"dividerWidth":{"type":"number","default":80},"dividerWidthUnits":{"type":"string","default":"%"},"tabletDividerWidth":{"type":"number"},"mobileDividerWidth":{"type":"number"},"dividerHeight":{"type":"number","default":1},"tabletDividerHeight":{"type":"number"},"mobileDividerHeight":{"type":"number"},"uniqueID":{"type":"string","default":""},"rotate":{"type":"number","default":40},"strokeWidth":{"type":"number","default":4},"strokeGap":{"type":"number","default":5},"tabletHAlign":{"type":"string","default":""},"mobileHAlign":{"type":"string","default":""},"vsdesk":{"type":"boolean","default":false},"vstablet":{"type":"boolean","default":false},"vsmobile":{"type":"boolean","default":false}},"supports":{"anchor":true,"kbMetadata":true}}'),c=window.wp.i18n,p=window.wp.blockEditor,u=window.wp.components,b=window.wp.data,g=window.wp.element;var m=i(2084),h=i.n(m);const k={from:[{type:"block",blocks:["core/spacer"],transform:({height:e})=>(0,a.createBlock)("kadence/spacer",{spacerHeight:e,divider:!1})},{type:"block",blocks:["core/separator"],transform:()=>(0,a.createBlock)("kadence/spacer",{spacerHeight:30,divider:!0})}],to:[{type:"block",blocks:["core/spacer"],transform:({spacerHeight:e})=>(0,a.createBlock)("core/spacer",{height:e})},{type:"block",blocks:["core/separator"],transform:()=>(0,a.createBlock)("core/separator")}]},v=[{attributes:{blockAlignment:{type:"string",default:"none"},hAlign:{type:"string",default:"center"},spacerHeight:{type:"number",default:60},spacerHeightUnits:{type:"string",default:"px"},tabletSpacerHeight:{type:"number",default:""},mobileSpacerHeight:{type:"number",default:""},dividerEnable:{type:"boolean",default:!0},dividerStyle:{type:"string",default:"solid"},dividerOpacity:{type:"number",default:100},dividerColor:{type:"string",default:"#eee"},dividerWidth:{type:"number",default:80},dividerHeight:{type:"number",default:1},uniqueID:{type:"string",default:""},rotate:{type:"number",default:40},strokeWidth:{type:"number",default:4},strokeGap:{type:"number",default:5},tabletHAlign:{type:"string",default:""},mobileHAlign:{type:"string",default:""},vsdesk:{type:"boolean",default:!1},vstablet:{type:"boolean",default:!1},vsmobile:{type:"boolean",default:!1}},save:e=>{const{attributes:t}=e,{className:i,blockAlignment:a,dividerEnable:l,dividerStyle:o,hAlign:s,dividerColor:c,dividerOpacity:u,uniqueID:b,rotate:m,strokeWidth:k,strokeGap:v,tabletHAlign:y,mobileHAlign:f,vsdesk:E,vstablet:H,vsmobile:C}=t,S=h()({"kt-block-spacer":!0,[`kt-block-spacer-halign-${s}`]:s,[`kt-block-spacer-thalign-${y}`]:y,[`kt-block-spacer-malign-${f}`]:f}),w=p.useBlockProps.save({className:h()({[`align${a||"none"}`]:!0,[`kt-block-spacer-${b}`]:b,"kvs-lg-false":"undefined"!==E&&E,"kvs-md-false":"undefined"!==H&&H,"kvs-sm-false":"undefined"!==C&&C},i)});return(0,r.createElement)("div",{...w},(0,r.createElement)("div",{className:S},l&&(0,r.createElement)(g.Fragment,null,"stripe"===o&&(0,r.createElement)("span",{className:"kt-divider-stripe"},(0,r.createElement)(n,{uniqueID:b,color:(0,d.KadenceColorOutput)(c),opacity:u,rotate:m,strokeWidth:k,strokeGap:v})),"stripe"!==o&&(0,r.createElement)("hr",{className:"kt-divider"}))))}},{attributes:{blockAlignment:{type:"string",default:"center"},hAlign:{type:"string",default:"center"},spacerHeight:{type:"number",default:60},spacerHeightUnits:{type:"string",default:"px"},tabletSpacerHeight:{type:"number",default:""},mobileSpacerHeight:{type:"number",default:""},dividerEnable:{type:"boolean",default:!0},dividerStyle:{type:"string",default:"solid"},dividerOpacity:{type:"number",default:100},dividerColor:{type:"string",default:"#eee"},dividerWidth:{type:"number",default:80},dividerHeight:{type:"number",default:1},uniqueID:{type:"string",default:""},rotate:{type:"number",default:40},strokeWidth:{type:"number",default:4},strokeGap:{type:"number",default:5},tabletHAlign:{type:"string",default:""},mobileHAlign:{type:"string",default:""},vsdesk:{type:"boolean",default:!1},vstablet:{type:"boolean",default:!1},vsmobile:{type:"boolean",default:!1}},save:({attributes:e})=>{const{blockAlignment:t,spacerHeight:i,dividerEnable:a,dividerStyle:l,hAlign:o,dividerColor:s,dividerOpacity:c,dividerHeight:p,dividerWidth:u,uniqueID:b,spacerHeightUnits:m,rotate:k,strokeWidth:v,strokeGap:y,tabletHAlign:f,mobileHAlign:E,vsdesk:H,vstablet:C,vsmobile:S}=e;let w;w=c<10?"0.0"+c:c>=100?"1":"0."+c;const A=s?(0,d.KadenceColorOutput)(s,w):(0,d.KadenceColorOutput)("#eeeeee",w),D=h()({[`align${t||"none"}`]:!0,[`kt-block-spacer-${b}`]:b,"kvs-lg-false":"undefined"!==H&&H,"kvs-md-false":"undefined"!==C&&C,"kvs-sm-false":"undefined"!==S&&S}),_=h()({"kt-block-spacer":!0,[`kt-block-spacer-halign-${o}`]:o,[`kt-block-spacer-thalign-${f}`]:f,[`kt-block-spacer-malign-${E}`]:E});return(0,r.createElement)("div",{className:D},(0,r.createElement)("div",{className:_,style:{height:i+(m||"px")}},a&&(0,r.createElement)(g.Fragment,null,"stripe"===l&&(0,r.createElement)("span",{className:"kt-divider-stripe",style:{height:(p<10?10:p)+"px",width:u+"%"}},(0,r.createElement)(n,{uniqueID:b,color:(0,d.KadenceColorOutput)(s),opacity:c,rotate:k,strokeWidth:v,strokeGap:y})),"stripe"!==l&&(0,r.createElement)("hr",{className:"kt-divider",style:{borderTopColor:A,borderTopWidth:p+"px",width:u+"%",borderTopStyle:l}}))))}},{attributes:{blockAlignment:{type:"string",default:"center"},hAlign:{type:"string",default:"center"},spacerHeight:{type:"number",default:60},spacerHeightUnits:{type:"string",default:"px"},tabletSpacerHeight:{type:"number",default:""},mobileSpacerHeight:{type:"number",default:""},dividerEnable:{type:"boolean",default:!0},dividerStyle:{type:"string",default:"solid"},dividerOpacity:{type:"number",default:100},dividerColor:{type:"string",default:"#eee"},dividerWidth:{type:"number",default:80},dividerHeight:{type:"number",default:1},uniqueID:{type:"string",default:""},rotate:{type:"number",default:40},strokeWidth:{type:"number",default:4},strokeGap:{type:"number",default:5},tabletHAlign:{type:"string",default:""},mobileHAlign:{type:"string",default:""},vsdesk:{type:"boolean",default:!1},vstablet:{type:"boolean",default:!1},vsmobile:{type:"boolean",default:!1}},save:({attributes:e})=>{const{blockAlignment:t,spacerHeight:i,dividerEnable:a,dividerStyle:l,hAlign:o,dividerColor:s,dividerOpacity:c,dividerHeight:p,dividerWidth:u,uniqueID:b,spacerHeightUnits:m,rotate:k,strokeWidth:v,strokeGap:y,tabletHAlign:f,mobileHAlign:E,vsdesk:H,vstablet:C,vsmobile:S}=e;let w;w=c<10?"0.0"+c:c>=100?"1":"0."+c;const A=s?(0,d.DeprecatedKadenceColorOutput)(s,w):(0,d.DeprecatedKadenceColorOutput)("#eeeeee",w),D=h()({[`align${t||"none"}`]:!0,[`kt-block-spacer-${b}`]:b,"kvs-lg-false":"undefined"!==H&&H,"kvs-md-false":"undefined"!==C&&C,"kvs-sm-false":"undefined"!==S&&S}),_=h()({"kt-block-spacer":!0,[`kt-block-spacer-halign-${o}`]:o,[`kt-block-spacer-thalign-${f}`]:f,[`kt-block-spacer-malign-${E}`]:E});return(0,r.createElement)("div",{className:D},(0,r.createElement)("div",{className:_,style:{height:i+(m||"px")}},a&&(0,r.createElement)(g.Fragment,null,"stripe"===l&&(0,r.createElement)("span",{className:"kt-divider-stripe",style:{height:(p<10?10:p)+"px",width:u+"%"}},(0,r.createElement)(n,{uniqueID:b,color:(0,d.DeprecatedKadenceColorOutput)(s),opacity:c,rotate:k,strokeWidth:v,strokeGap:y})),"stripe"!==l&&(0,r.createElement)("hr",{className:"kt-divider",style:{borderTopColor:A,borderTopWidth:p+"px",width:u+"%",borderTopStyle:l}}))))}},{attributes:{blockAlignment:{type:"string",default:"center"},hAlign:{type:"string",default:"center"},spacerHeight:{type:"number",default:60},spacerHeightUnits:{type:"string",default:"px"},tabletSpacerHeight:{type:"number",default:""},mobileSpacerHeight:{type:"number",default:""},dividerEnable:{type:"boolean",default:!0},dividerStyle:{type:"string",default:"solid"},dividerOpacity:{type:"number",default:100},dividerColor:{type:"string",default:"#eee"},dividerWidth:{type:"number",default:80},dividerHeight:{type:"number",default:1},uniqueID:{type:"string",default:""}},save:({attributes:e})=>{const{blockAlignment:t,spacerHeight:i,dividerEnable:a,dividerStyle:l,hAlign:n,dividerHeight:d,dividerWidth:o,uniqueID:s,spacerHeightUnits:c}=e;return(0,r.createElement)("div",{className:`align${t||"none"} kt-block-spacer-${s}`},(0,r.createElement)("div",{className:`kt-block-spacer kt-block-spacer-halign-${n}`,style:{height:i+(c||"px")}},a&&(0,r.createElement)("hr",{className:"kt-divider",style:{borderTopWidth:d+"px",width:o+"%",borderTopStyle:l}})))}},{attributes:{blockAlignment:{type:"string",default:"center"},hAlign:{type:"string",default:"center"},spacerHeight:{type:"number",default:"60"},dividerEnable:{type:"boolean",default:!0},dividerStyle:{type:"string",default:"solid"},dividerOpacity:{type:"number",default:"100"},dividerColor:{type:"string",default:"#eee"},dividerWidth:{type:"number",default:"80"},dividerHeight:{type:"number",default:"1"},uniqueID:{type:"string",default:""}},save:({attributes:e})=>{const{blockAlignment:t,spacerHeight:i,dividerEnable:a,dividerStyle:l,hAlign:n,dividerColor:o,dividerOpacity:s,dividerHeight:c,dividerWidth:p}=e,u=o?(0,d.DeprecatedKadenceColorOutput)(o,s):(0,d.DeprecatedKadenceColorOutput)("#eeeeee",s);return(0,r.createElement)("div",{className:`align${t}`},(0,r.createElement)("div",{className:`kt-block-spacer kt-block-spacer-halign-${n}`,style:{height:i+"px"}},a&&(0,r.createElement)("hr",{className:"kt-divider",style:{borderTopColor:u,borderTopWidth:c+"px",width:p+"%",borderTopStyle:l}})))}},{attributes:{blockAlignment:{type:"string",default:"center"},hAlign:{type:"string",default:"center"},spacerHeight:{type:"number",default:"60"},dividerEnable:{type:"boolean",default:!0},dividerStyle:{type:"string",default:"solid"},dividerOpacity:{type:"number",default:"100"},dividerColor:{type:"string",default:"#eee"},dividerWidth:{type:"number",default:"80"},dividerHeight:{type:"number",default:"1"}},save:({attributes:e})=>{const{blockAlignment:t,spacerHeight:i,dividerEnable:a,dividerStyle:l,dividerColor:n,dividerOpacity:o,dividerHeight:s,dividerWidth:c}=e,p=n?(0,d.DeprecatedKadenceColorOutput)(n,o):(0,d.DeprecatedKadenceColorOutput)("#eee",o);return(0,r.createElement)("div",{className:`align${t}`},(0,r.createElement)("div",{className:"kt-block-spacer",style:{height:i+"px"}},a&&(0,r.createElement)("hr",{className:"kt-divider",style:{borderTopColor:p,borderTopWidth:s+"px",width:c+"%",borderTopStyle:l}})))}}],y=window.kadence.icons,{name:f}=s;(0,a.registerBlockType)("kadence/spacer",{getEditWrapperProps({blockAlignment:e}){if("full"===e||"wide"===e||"center"===e)return{"data-align":e}},...s,title:(0,c._x)("Spacer / Divider","block title","kadence-blocks"),keywords:[(0,c.__)("spacer","kadence-blocks"),(0,c.__)("divider","kadence-blocks"),(0,c.__)("separator","kadence-blocks"),"KB"],icon:{src:y.spacerIcon},transforms:k,deprecated:v,edit:function(e){const{attributes:t,clientId:i,setAttributes:a,toggleSelection:l}=e,{className:m,blockAlignment:h,spacerHeight:k,tabletSpacerHeight:v,mobileSpacerHeight:y,dividerEnable:f,dividerStyle:E,dividerColor:H,dividerOpacity:C,dividerHeight:S,dividerWidth:w,hAlign:A,uniqueID:D,spacerHeightUnits:_,rotate:O,strokeWidth:x,strokeGap:W,mobileHAlign:N,tabletHAlign:T,dividerWidthUnits:I,tabletDividerWidth:$,mobileDividerWidth:q,tabletDividerHeight:B,mobileDividerHeight:P,vsdesk:U,vstablet:K,vsmobile:R}=t,{addUniqueID:G}=(0,b.useDispatch)("kadenceblocks/data"),{isUniqueID:z,isUniqueBlock:F,previewDevice:M,parentData:V}=(0,b.useSelect)((e=>({isUniqueID:t=>e("kadenceblocks/data").isUniqueID(t),isUniqueBlock:(t,i)=>e("kadenceblocks/data").isUniqueBlock(t,i),previewDevice:e("kadenceblocks/data").getPreviewDeviceType(),parentData:{rootBlock:e("core/block-editor").getBlock(e("core/block-editor").getBlockHierarchyRootClientId(i)),postId:e("core/editor")?.getCurrentPostId()?e("core/editor")?.getCurrentPostId():"",reusableParent:e("core/block-editor").getBlockAttributes(e("core/block-editor").getBlockParentsByBlockName(i,"core/block").slice(-1)[0]),editedPostId:!!e("core/edit-site")&&e("core/edit-site").getEditedPostId()}})),[i]);(0,g.useEffect)((()=>{(0,d.setBlockDefaults)("kadence/spacer",t);const r=(0,d.getPostOrFseId)(e,V);let l=(0,d.getUniqueId)(D,i,z,F,r);l!==D?(t.uniqueID=l,a({uniqueID:l}),G(l,i)):G(D,i)}),[]);const[j,L]=(0,g.useState)("general"),J=(0,p.useBlockProps)({className:m});let Q;Q=C<10?"0.0"+C:C>=100?"1":"0."+C;const X=document.querySelector('iframe[name="editor-canvas"]')?.contentWindow.document||document,Y=H?(0,d.KadenceColorOutput)(H,Q):(0,d.KadenceColorOutput)("#eeeeee",Q),Z=(0,d.getPreviewSize)(M,""!==k?k:60,""!==v?v:"",""!==y?y:""),ee=(0,d.getPreviewSize)(M,""!==A?A:"",""!==T?T:"",""!==N?N:""),te="stripe"!==E?1:10,ie="stripe"!==E?400:60,ae=(0,d.getPreviewSize)(M,""!==S?S:1,""!==B?B:"",""!==P?P:""),re=(0,d.getPreviewSize)(M,""!==w?w:1,""!==$?$:"",""!==q?q:"");return(0,r.createElement)("div",{...J},(0,d.showSettings)("spacerDivider","kadence/spacer")&&(0,r.createElement)(g.Fragment,null,(0,r.createElement)(p.BlockControls,{key:"controls"},(0,r.createElement)(p.BlockAlignmentToolbar,{value:h,controls:["center","wide","full"],onChange:e=>a({blockAlignment:e})}),(0,r.createElement)(p.AlignmentToolbar,{value:A,onChange:e=>a({hAlign:e})}),(0,r.createElement)(o.CopyPasteAttributes,{attributes:t,defaultAttributes:s.attributes,blockSlug:s.name,onPaste:e=>a(e)})),(0,r.createElement)(p.InspectorControls,null,(0,r.createElement)(o.InspectorControlTabs,{panelName:"spacer",allowedTabs:["general","advanced"],setActiveTab:e=>L(e),activeTab:j}),"general"===j&&(0,r.createElement)(g.Fragment,null,(0,r.createElement)(o.KadencePanelBody,{title:(0,c.__)("Spacer Settings","kadence-blocks"),initialOpen:!0,panelName:"kb-spacer-settings"},(0,d.showSettings)("spacerHeight","kadence/spacer")&&(0,r.createElement)(o.ResponsiveRangeControls,{label:(0,c.__)("Height","kadence-blocks"),value:k,onChange:e=>a({spacerHeight:e}),tabletValue:v||"",onChangeTablet:e=>a({tabletSpacerHeight:e}),mobileValue:y||"",onChangeMobile:e=>a({mobileSpacerHeight:e}),min:6,max:600,step:1,unit:_,onUnit:!!(0,d.showSettings)("spacerHeightUnits","kadence/spacer")&&(e=>a({spacerHeightUnits:e})),units:["px","vh"]})),(0,r.createElement)(o.KadencePanelBody,{title:(0,c.__)("Divider Settings","kadence-blocks"),initialOpen:!0,panelName:"kb-divider-settings"},(0,d.showSettings)("dividerToggle","kadence/spacer")&&(0,r.createElement)(u.ToggleControl,{label:(0,c.__)("Enable Divider","kadence-blocks"),checked:f,onChange:e=>a({dividerEnable:e})}),f&&(0,d.showSettings)("dividerStyles","kadence/spacer")&&(0,r.createElement)(g.Fragment,null,(0,r.createElement)(o.ResponsiveAlignControls,{label:(0,c.__)("Alignment","kadence-blocks"),value:A||"",mobileValue:N||"",tabletValue:T||"",onChange:e=>a({hAlign:e}),onChangeTablet:e=>a({tabletHAlign:e}),onChangeMobile:e=>a({mobileHAlign:e})}),(0,r.createElement)(u.SelectControl,{label:(0,c.__)("Divider Style","kadence-blocks"),value:E,options:[{value:"solid",label:(0,c.__)("Solid","kadence-blocks")},{value:"dashed",label:(0,c.__)("Dashed","kadence-blocks")},{value:"dotted",label:(0,c.__)("Dotted","kadence-blocks")},{value:"stripe",label:(0,c.__)("Stripe","kadence-blocks")}],onChange:e=>a({dividerStyle:e})}),(0,r.createElement)(o.PopColorControl,{label:(0,c.__)("Divider Color","kadence-blocks"),value:H||"",default:"",opacityValue:C,onChange:e=>a({dividerColor:e}),onOpacityChange:e=>a({dividerOpacity:e}),opacityUnit:100}),"stripe"===E&&(0,r.createElement)(g.Fragment,null,(0,r.createElement)(u.RangeControl,{label:(0,c.__)("Stripe Angle","kadence-blocks"),value:O,onChange:e=>a({rotate:e}),min:0,max:135}),(0,r.createElement)(u.RangeControl,{label:(0,c.__)("Stripe Width","kadence-blocks"),value:x,onChange:e=>a({strokeWidth:e}),min:1,max:30}),(0,r.createElement)(u.RangeControl,{label:(0,c.__)("Stripe Gap","kadence-blocks"),value:W,onChange:e=>a({strokeGap:e}),min:1,max:30})),(0,r.createElement)(o.ResponsiveRangeControls,{label:(0,c.__)("Divider Height","kadence-blocks"),value:S,onChange:e=>a({dividerHeight:e}),tabletValue:B||"",onChangeTablet:e=>a({tabletDividerHeight:e}),mobileValue:P||"",onChangeMobile:e=>a({mobileDividerHeight:e}),min:te,max:ie,step:1,unit:"px"}),(0,r.createElement)(o.ResponsiveRangeControls,{label:(0,c.__)("Divider Width","kadence-blocks"),value:w,onChange:e=>a({dividerWidth:e}),tabletValue:$||"",onChangeTablet:e=>a({tabletDividerWidth:e}),mobileValue:q||"",onChangeMobile:e=>a({mobileDividerWidth:e}),min:0,max:"px"==I?3e3:100,step:1,unit:I,onUnit:e=>a({dividerWidthUnits:e}),units:["px","%"]})))),"advanced"===j&&(0,r.createElement)(g.Fragment,null,(0,r.createElement)(o.KadencePanelBody,{title:(0,c.__)("Visibility Settings","kadence-blocks"),panelName:"kb-visibility-settings"},(0,r.createElement)(u.ToggleControl,{label:(0,c.__)("Hide on Desktop","kadence-blocks"),checked:void 0!==U&&U,onChange:e=>a({vsdesk:e})}),(0,r.createElement)(u.ToggleControl,{label:(0,c.__)("Hide on Tablet","kadence-blocks"),checked:void 0!==K&&K,onChange:e=>a({vstablet:e})}),(0,r.createElement)(u.ToggleControl,{label:(0,c.__)("Hide on Mobile","kadence-blocks"),checked:void 0!==R&&R,onChange:e=>a({vsmobile:e})})),(0,r.createElement)(o.KadenceBlockDefaults,{attributes:t,defaultAttributes:s.attributes,blockSlug:s.name})))),(0,r.createElement)("div",{className:`kt-block-spacer kt-block-spacer-halign-${ee}`},f&&(0,r.createElement)(g.Fragment,null,"stripe"===E&&(0,r.createElement)("span",{className:"kt-divider-stripe",style:{height:(ae<10?10:ae)+"px",width:re+(I||"%")}},(0,r.createElement)(n,{uniqueID:D,color:(0,d.KadenceColorOutput)(H),opacity:C,rotate:O,strokeWidth:x,strokeGap:W})),"stripe"!==E&&(0,r.createElement)("hr",{className:"kt-divider",style:{borderTopColor:Y,borderTopWidth:ae+"px",width:re+(I||"%"),borderTopStyle:E}})),_&&"vh"===_&&(0,r.createElement)("div",{className:"kt-spacer-height-preview",style:{height:k+(_||"px")}},(0,r.createElement)("span",{id:`spacing-height-${D}`},k+(_||"px"))),"vh"!==_&&(0,d.showSettings)("spacerDivider","kadence/spacer")&&(0,d.showSettings)("spacerHeight","kadence/spacer")&&(0,r.createElement)(u.ResizableBox,{size:{height:Z},minHeight:"20",handleClasses:{top:"kadence-spacer__resize-handler-top",bottom:"kadence-spacer__resize-handler-bottom"},enable:{top:!1,right:!1,bottom:!0,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},onResize:(e,t,i,a)=>{X.getElementById("spacing-height-"+(D||"no-unique")).innerHTML=parseInt(Z+a.height,10)+(_||"px")},onResizeStop:(e,t,i,r)=>{l(!0),a("Mobile"===M?{mobileSpacerHeight:parseInt(Z+r.height,10)}:"Tablet"===M?{tabletSpacerHeight:parseInt(Z+r.height,10)}:{spacerHeight:parseInt(Z+r.height,10)})},onResizeStart:()=>{l(!1)}},D&&(0,r.createElement)("div",{className:"kt-spacer-height-preview"},(0,r.createElement)("span",{id:`spacing-height-${D}`},Z+(_||"px")))),"vh"!==_&&(!(0,d.showSettings)("spacerDivider","kadence/spacer")||!(0,d.showSettings)("spacerHeight","kadence/spacer"))&&(0,r.createElement)("div",{className:"kt-spacer-height-preview",style:{height:Z+(_||"px")}},(0,r.createElement)("span",{id:`spacing-height-${D}`},Z+(_||"px")))))},save:function({attributes:e}){const{className:t,blockAlignment:i,dividerEnable:a,dividerStyle:l,hAlign:o,dividerColor:s,dividerOpacity:c,uniqueID:u,rotate:b,strokeWidth:g,strokeGap:m,tabletHAlign:k,mobileHAlign:v,vsdesk:y,vstablet:f,vsmobile:E}=e,H=h()({"kt-block-spacer":!0,[`kt-block-spacer-halign-${o}`]:o,[`kt-block-spacer-thalign-${k}`]:k,[`kt-block-spacer-malign-${v}`]:v}),C=p.useBlockProps.save({className:h()({[`align${i||"none"}`]:!0,[`kt-block-spacer-${u}`]:u,"kvs-lg-false":"undefined"!==y&&y,"kvs-md-false":"undefined"!==f&&f,"kvs-sm-false":"undefined"!==E&&E},t)});return(0,r.createElement)("div",{...C},(0,r.createElement)("div",{className:H},a&&(0,r.createElement)(r.Fragment,null,"stripe"===l&&(0,r.createElement)("span",{className:"kt-divider-stripe"},(0,r.createElement)(n,{uniqueID:u,color:(0,d.KadenceColorOutput)(s),opacity:c,rotate:b,strokeWidth:g,strokeGap:m})),"stripe"!==l&&(0,r.createElement)("hr",{className:"kt-divider"}))))},example:{attributes:{spacerHeight:4,dividerColor:"#2B6CB0"}}})},2084:(e,t)=>{var i;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var i=arguments[t];i&&(e=n(e,l(i)))}return e}function l(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var i in e)a.call(e,i)&&e[i]&&(t=n(t,i));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()}},i={};function a(e){var r=i[e];if(void 0!==r)return r.exports;var l=i[e]={exports:{}};return t[e](l,l.exports,a),l.exports}a.m=t,e=[],a.O=(t,i,r,l)=>{if(!i){var n=1/0;for(c=0;c<e.length;c++){for(var[i,r,l]=e[c],d=!0,o=0;o<i.length;o++)(!1&l||n>=l)&&Object.keys(a.O).every((e=>a.O[e](i[o])))?i.splice(o--,1):(d=!1,l<n&&(n=l));if(d){e.splice(c--,1);var s=r();void 0!==s&&(t=s)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[i,r,l]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={4376:0,9420:0};a.O.j=t=>0===e[t];var t=(t,i)=>{var r,l,[n,d,o]=i,s=0;if(n.some((t=>0!==e[t]))){for(r in d)a.o(d,r)&&(a.m[r]=d[r]);if(o)var c=o(a)}for(t&&t(i);s<n.length;s++)l=n[s],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},i=globalThis.webpackChunkkadence=globalThis.webpackChunkkadence||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var r=a.O(void 0,[9420],(()=>a(8264)));r=a.O(r),(this.kadence=this.kadence||{})["blocks-spacer"]=r})();