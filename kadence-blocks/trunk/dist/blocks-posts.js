(()=>{var e,t={7646:(e,t,a)=>{"use strict";a.r(t);const l=window.kadence.icons,n=window.React;var o=a(4184),c=a.n(o);function r(e,t){const{postType:a,taxType:l,offsetQuery:n,postTax:o,excludeTax:c,allowSticky:r,categories:s,tags:i,postsToShow:d,orderBy:m,order:g,postIds:b}=e;let u=0;if(wp.data.select("core/editor")){const{getCurrentPostId:e}=wp.data.select("core/editor");u=e()}null===u&&(u=0);const p={query:t,per_page:d,type:a,offset:n||0,allow_sticky:!!r,exclude:c||"include",post_tax:!!o,tax_type:l||"",post_id:u};if(s&&s.length){const e=s.map((({value:e})=>e));p.category=e.join(",")}if(i&&i.length){const e=i.map((({value:e})=>e));p.tags=e.join(",")}return m&&(p.order_by=m),"query"===t&&g&&(p.order=g),"individual"===t&&b&&b.length&&(p.include=b,p.per_page=b.length),p}const s=window.lodash,i=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"title":"Posts","name":"kadence/posts","category":"kadence-blocks","attributes":{"uniqueID":{"type":"string"},"columns":{"type":"number","default":3},"postsToShow":{"type":"number","default":6},"offsetQuery":{"type":"number","default":0},"allowSticky":{"type":"boolean","default":false},"postType":{"type":"string","default":"post"},"postTax":{"type":"boolean","default":false},"taxType":{"type":"string","default":""},"order":{"type":"string","default":"desc"},"orderBy":{"type":"string","default":"date"},"excludeTax":{"type":"string","default":"include"},"categories":{"type":"array","default":[]},"tags":{"type":"array","default":[]},"alignImage":{"type":"string","default":"beside"},"image":{"type":"boolean","default":true},"imageSize":{"type":"string","default":"medium_large"},"imageRatio":{"type":"string","default":"2-3"},"aboveCategories":{"type":"boolean","default":true},"categoriesDivider":{"type":"string","default":"vline"},"categoriesStyle":{"type":"string","default":"normal"},"meta":{"type":"boolean","default":true},"metaDivider":{"type":"string","default":"dot"},"author":{"type":"boolean","default":true},"authorImage":{"type":"boolean","default":false},"authorLink":{"type":"boolean","default":false},"authorImageSize":{"type":"number","default":25},"authorEnabledLabel":{"type":"boolean","default":true},"authorLabel":{"type":"string","default":""},"date":{"type":"boolean","default":true},"dateEnabledLabel":{"type":"boolean","default":false},"dateLabel":{"type":"string","default":""},"dateUpdated":{"type":"boolean","default":false},"dateUpdatedEnabledLabel":{"type":"boolean","default":false},"dateUpdatedLabel":{"type":"string","default":""},"metaCategories":{"type":"boolean","default":false},"metaCategoriesEnabledLabel":{"type":"boolean","default":false},"metaCategoriesLabel":{"type":"string","default":""},"comments":{"type":"boolean","default":false},"excerpt":{"type":"boolean","default":true},"excerptCustomLength":{"type":"boolean","default":false},"excerptLength":{"type":"number","default":40},"readmore":{"type":"boolean","default":true},"readmoreLabel":{"type":"string","default":""},"loopStyle":{"type":"string","default":"boxed"},"titleFont":{"type":"array","default":[{"level":2,"size":["","",""],"sizeType":"px","lineHeight":["","",""],"lineType":"px","letterSpacing":["","",""],"letterType":"px","textTransform":""}]},"tabletColumns":{"type":"number"},"mobileColumns":{"type":"number"},"showUnique":{"type":"boolean","default":false}},"supports":{"html":false,"kbMetadata":true}}'),d=window.kadence.helpers,m=window.wp.i18n,g=window.wp.data,b=window.kadence.components,u=window.wp.date,p=window.wp.element,k=window.wp.blockEditor,_=window.wp.components,h=window.wp.apiFetch;var y=a.n(h);const v=window.wp.url,f=window.wp.htmlEntities,{postTypes:E,taxonomies:C,postQueryEndpoint:x}=kadence_blocks_params,T=(0,g.withSelect)(((e,t)=>({getPreviewDevice:e("kadenceblocks/data").getPreviewDeviceType()})))((function(e){const{attributes:t,className:a,setAttributes:l,getPreviewDevice:o,clientId:h}=e,{uniqueID:C,order:T,columns:S,tabletColumns:w,mobileColumns:L,orderBy:N,categories:I,tags:P,postsToShow:z,alignImage:F,postType:O,taxType:B,offsetQuery:D,postTax:A,excludeTax:U,showUnique:q,allowSticky:H,image:M,imageRatio:R,imageSize:j,author:K,authorLink:$,authorEnabledLabel:Q,authorLabel:W,authorImage:Z,authorImageSize:G,comments:J,metaCategories:V,metaCategoriesEnabledLabel:X,metaCategoriesLabel:Y,date:ee,dateUpdated:te,dateEnabledLabel:ae,dateLabel:le,dateUpdatedEnabledLabel:ne,dateUpdatedLabel:oe,meta:ce,metaDivider:re,categoriesDivider:se,aboveCategories:ie,categoriesStyle:de,excerpt:me,readmore:ge,readmoreLabel:be,loopStyle:ue,titleFont:pe,excerptCustomLength:ke,excerptLength:_e}=t,[he,ye]=(0,p.useState)({}),[ve,fe]=(0,p.useState)(!1),[Ee,Ce]=(0,p.useState)("content"),{addUniqueID:xe}=(0,g.useDispatch)("kadenceblocks/data"),{isUniqueID:Te,isUniqueBlock:Se,previewDevice:we,parentData:Le}=(0,g.useSelect)((e=>({isUniqueID:t=>e("kadenceblocks/data").isUniqueID(t),isUniqueBlock:(t,a)=>e("kadenceblocks/data").isUniqueBlock(t,a),previewDevice:e("kadenceblocks/data").getPreviewDeviceType(),parentData:{rootBlock:e("core/block-editor").getBlock(e("core/block-editor").getBlockHierarchyRootClientId(h)),postId:e("core/editor")?.getCurrentPostId()?e("core/editor")?.getCurrentPostId():"",reusableParent:e("core/block-editor").getBlockAttributes(e("core/block-editor").getBlockParentsByBlockName(h,"core/block").slice(-1)[0]),editedPostId:!!e("core/edit-site")&&e("core/edit-site").getEditedPostId()}})),[h]),Ne=()=>{fe(!1),y()({path:(0,v.addQueryArgs)(x,r(t,"query"))}).then((e=>{ye(e),fe(!0)})).catch((()=>{ye([]),fe(!0)}))},Ie=e=>{if(e&&void 0===window.kadence_blocks_params.taxonomies[e]&&!window.kadence_blocks_params.taxonomies[e]){const t={source:e,page:1,per_page:50};y()({path:(0,v.addQueryArgs)(window.kadence_blocks_params.termEndpoint,t)}).then((t=>{window.kadence_blocks_params.taxonomies[e]=t||[]})).catch((()=>{window.kadence_blocks_params.taxonomies[e]=[]}))}},Pe=(0,s.debounce)(Ie,200);(0,p.useEffect)((()=>{const a=(0,d.getPostOrFseId)(e,Le);let n=(0,d.getUniqueId)(C,h,Te,Se,a);n!==C?(t.uniqueID=n,l({uniqueID:n}),xe(n,h)):xe(C,h),Ne(),B&&Ie(B)}),[]),(0,p.useEffect)((()=>{fe(!1),Ne()}),[O,B,D,A,U,H,N,T,I,P,z]),(0,p.useEffect)((()=>{Pe(t.taxType)}),[B,I]);const ze=(0,k.useBlockProps)();let Fe,Oe;Fe="dash"===se?(0,n.createElement)(p.Fragment,null,"‐"):"slash"===se?(0,n.createElement)(p.Fragment,null,"/"):"dot"===se?(0,n.createElement)(p.Fragment,null,"·"):(0,n.createElement)(p.Fragment,null,"|"),Oe=1===S?"grid-xs-col-1 grid-sm-col-1 grid-lg-col-1":2===S?void 0!==w&&1===w?"grid-xs-col-1 grid-sm-col-1 grid-lg-col-2":"grid-xs-col-1 grid-sm-col-2 grid-lg-col-2":void 0!==w&&1===w?"grid-xs-col-1 grid-sm-col-1 grid-lg-col-3":void 0!==w&&3===w?"grid-xs-col-1 grid-sm-col-3 grid-lg-col-3":"grid-xs-col-1 grid-sm-col-2 grid-lg-col-3";const Be=(0,d.getPreviewSize)(o,void 0!==pe&&void 0!==pe[0]&&void 0!==pe[0].size&&void 0!==pe[0].size[0]?pe[0].size[0]:"",void 0!==pe&&void 0!==pe[0]&&void 0!==pe[0].size&&void 0!==pe[0].size[1]?pe[0].size[1]:"",void 0!==pe&&void 0!==pe[0]&&void 0!==pe[0].size&&void 0!==pe[0].size[2]?pe[0].size[2]:""),De=(0,d.getPreviewSize)(o,void 0!==pe&&void 0!==pe[0]&&void 0!==pe[0].lineHeight&&void 0!==pe[0].lineHeight[0]?pe[0].lineHeight[0]:"",void 0!==pe&&void 0!==pe[0]&&void 0!==pe[0].lineHeight&&void 0!==pe[0].lineHeight[1]?pe[0].lineHeight[1]:"",void 0!==pe&&void 0!==pe[0]&&void 0!==pe[0].lineHeight&&void 0!==pe[0].lineHeight[2]?pe[0].lineHeight[2]:""),Ae=(0,d.getPreviewSize)(o,void 0!==pe&&void 0!==pe[0]&&void 0!==pe[0].letterSpacing&&void 0!==pe[0].letterSpacing[0]?pe[0].letterSpacing[0]:"",void 0!==pe&&void 0!==pe[0]&&void 0!==pe[0].letterSpacing&&void 0!==pe[0].letterSpacing[1]?pe[0].letterSpacing[1]:"",void 0!==pe&&void 0!==pe[0]&&void 0!==pe[0].letterSpacing&&void 0!==pe[0].letterSpacing[2]?pe[0].letterSpacing[2]:""),Ue=Array.isArray(he)&&he.length,qe=e=>{const t=pe.map(((t,a)=>(0===a&&(t={...t,...e}),t)));l({titleFont:t})},He="h"+(void 0!==pe&&void 0!==pe[0]&&void 0!==pe[0].level?pe[0].level:"2"),Me=(0,u.getSettings)().formats.date,Re=(0,n.createElement)(p.Fragment,null,(0,n.createElement)(k.BlockControls,null,(0,n.createElement)(b.CopyPasteAttributes,{attributes:t,defaultAttributes:i.attributes,blockSlug:i.name,onPaste:e=>l(e)})),(0,n.createElement)(b.KadenceInspectorControls,{blockSlug:"kadence/posts"},(0,n.createElement)(b.InspectorControlTabs,{panelName:"posts",setActiveTab:e=>Ce(e),activeTab:Ee}),"general"===Ee&&(0,n.createElement)(p.Fragment,null,(0,n.createElement)(b.KadencePanelBody,{panelName:"kb-posts-settings"},(0,n.createElement)(_.SelectControl,{label:(0,m.__)("Select Posts Type:","kadence-blocks"),options:E,value:O,onChange:e=>{l({postType:e}),l({taxType:""}),l({categories:[]})}}),(0,n.createElement)(_.SelectControl,{label:(0,m.__)("Order by","kadence-blocks"),options:[{label:(0,m.__)("Newest to Oldest","kadence-blocks"),value:"date/desc"},{label:(0,m.__)("Oldest to Newest","kadence-blocks"),value:"date/asc"},{label:(0,m.__)("Modified Ascending","kadence-blocks"),value:"modified/asc"},{label:(0,m.__)("Modified Decending","kadence-blocks"),value:"modified/desc"},{
/* translators: label for ordering posts by title in ascending order */
label:(0,m.__)("A → Z","kadence-blocks"),value:"title/asc"},{
/* translators: label for ordering posts by title in descending order */
label:(0,m.__)("Z → A","kadence-blocks"),value:"title/desc"},{
/* translators: label for ordering posts by title in descending order */
label:(0,m.__)("Menu Order","kadence-blocks"),value:"menu_order/asc"},{
/* translators: label for ordering posts by title in descending order */
label:(0,m.__)("Random","kadence-blocks"),value:"rand/desc"}],value:`${N}/${T}`,onChange:e=>{const[t,a]=e.split("/");a!==T&&l({order:a}),t!==N&&l({orderBy:t})}}),(0,n.createElement)(b.RangeControl,{key:"query-controls-range-control",label:(0,m.__)("Number of items","kadence-blocks"),value:z,onChange:e=>l({postsToShow:e}),min:1,max:300}),(0,n.createElement)(b.RangeControl,{key:"query-controls-range-control",label:(0,m.__)("Offset Starting Post","kadence-blocks"),value:D,onChange:e=>l({offsetQuery:e}),min:0,max:100}),(O&&"post"!==O||A)&&(0,n.createElement)(p.Fragment,null,(0,n.createElement)(p.Fragment,null,(0,n.createElement)("div",{className:"term-select-form-row"},(0,n.createElement)(b.TaxonomySelect,{label:(0,m.__)("Select Taxonomy","kadence-blocks-pro"),value:(()=>{let e=[];return e=I.map((e=>({value:B+"|"+e.value,label:e.label}))),e})(),source:O,termIsMulti:!0,termIsOptional:!1,onChange:e=>{(e=>{if(e&&"object"==typeof e){let t="",a=[];e.forEach((e=>{let l=[];[t,l]=e.value.split("|");let n={value:l,label:e.label};a.push(n)})),l({taxType:t}),l({categories:a})}else e&&"string"==typeof e?(l({taxType:e}),l({categories:[]})):(l({taxType:""}),l({categories:[]}))})(e)}}))),(0,n.createElement)(p.Fragment,null,(0,n.createElement)(_.RadioControl,{help:(0,m.__)("Whether to include or exclude items from selected terms.","kadence-blocks"),selected:void 0!==U?U:"include",options:[{label:(0,m.__)("Include","kadence-blocks"),value:"include"},{label:(0,m.__)("Exclude","kadence-blocks"),value:"exclude"}],onChange:e=>l({excludeTax:e})})),(!O||"post"===O)&&(0,n.createElement)(_.ToggleControl,{label:(0,m.__)("Select the post Taxonomy","kadence-blocks"),checked:A,onChange:e=>l({postTax:e})})),(!O||"post"===O&&!A)&&(0,n.createElement)(p.Fragment,null,(0,n.createElement)(b.KadenceSelectTerms,{placeholder:(0,m.__)("Filter by Category","kadence-blocks"),restBase:"wp/v2/categories",fieldId:"tax-select-category",value:I,onChange:e=>{l({categories:e||[]})}}),(0,n.createElement)(b.KadenceSelectTerms,{placeholder:(0,m.__)("Filter by Tag","kadence-blocks"),restBase:"wp/v2/tags",fieldId:"tax-select-tags",value:P,onChange:e=>{l({tags:e||[]})}}),(0,n.createElement)(_.RadioControl,{help:(0,m.__)("Whether to include or exclude items from selected terms.","kadence-blocks"),selected:void 0!==U?U:"include",options:[{label:(0,m.__)("Include","kadence-blocks"),value:"include"},{label:(0,m.__)("Exclude","kadence-blocks"),value:"exclude"}],onChange:e=>l({excludeTax:e})}),(0,n.createElement)(_.ToggleControl,{label:(0,m.__)("Select the post Taxonomy","kadence-blocks"),checked:A,onChange:e=>l({postTax:e})})),(0,n.createElement)(_.ToggleControl,{label:(0,m.__)("Show Unique","kadence-blocks"),help:(0,m.__)("Exclude posts in this block from showing in others on the same page.","kadence-blocks"),checked:q,onChange:e=>l({showUnique:e})}),(0,n.createElement)(_.ToggleControl,{label:(0,m.__)("Allow Sticky Posts?","kadence-blocks"),checked:H,onChange:e=>l({allowSticky:e})})),(0,n.createElement)(b.KadencePanelBody,{title:(0,m.__)("Layout Settings","kadence-blocks"),initialOpen:!1,panelName:"layoutSettings",blockSlug:"kadence/posts"},(0,n.createElement)(b.RangeControl,{label:(0,m.__)("Columns","kadence-blocks"),value:S,onChange:e=>l({columns:e}),min:1,max:3}),1!==S&&(0,n.createElement)(b.RangeControl,{label:(0,m.__)("Tablet Columns","kadence-blocks"),value:w,onChange:e=>l({tabletColumns:e}),min:1,max:S}),1===S&&M&&(0,n.createElement)(_.SelectControl,{label:(0,m.__)("Align Image","kadence-blocks"),options:[{label:(0,m.__)("Top","kadence-blocks"),value:"above"},{label:(0,m.__)("Left","kadence-blocks"),value:"beside"}],value:F,onChange:e=>l({alignImage:e})}),(0,n.createElement)(_.SelectControl,{label:(0,m.__)("Style","kadence-blocks"),options:[{label:(0,m.__)("Boxed","kadence-blocks"),value:"boxed"},{label:(0,m.__)("Unboxed","kadence-blocks"),value:"unboxed"}],value:ue,onChange:e=>l({loopStyle:e})}))),"style"===Ee&&(0,n.createElement)(p.Fragment,null,(0,n.createElement)(b.KadencePanelBody,{title:(0,m.__)("Title Size","kadence-blocks"),panelName:"titleSettings",blockSlug:"kadence/posts"},(0,n.createElement)(b.TypographyControls,{fontGroup:"heading",tagLevel:pe[0].level,tagLowLevel:2,tagHighLevel:7,onTagLevel:e=>qe({level:e}),fontSize:pe[0].size,onFontSize:e=>qe({size:e}),fontSizeType:pe[0].sizeType,onFontSizeType:e=>qe({sizeType:e}),lineHeight:pe[0].lineHeight,onLineHeight:e=>qe({lineHeight:e}),lineHeightType:pe[0].lineType,onLineHeightType:e=>qe({lineType:e}),reLetterSpacing:pe[0].letterSpacing,onLetterSpacing:e=>qe({letterSpacing:e}),letterSpacingType:pe[0].letterType,onLetterSpacingType:e=>qe({letterType:e}),textTransform:pe[0].textTransform,onTextTransform:e=>qe({textTransform:e})})),(0,n.createElement)(b.KadencePanelBody,{title:(0,m.__)("Image Settings","kadence-blocks"),initialOpen:!1,panelName:"imageSettings",blockSlug:"kadence/posts"},(0,n.createElement)(_.ToggleControl,{label:(0,m.__)("Enable Image","kadence-blocks"),checked:M,onChange:e=>l({image:e})}),M&&(0,n.createElement)(p.Fragment,null,(0,n.createElement)(_.SelectControl,{label:(0,m.__)("Image Ratio","kadence-blocks"),options:[{label:(0,m.__)("Inherit","kadence-blocks"),value:"inherit"},{label:(0,m.__)("1:1","kadence-blocks"),value:"1-1"},{label:(0,m.__)("4:3","kadence-blocks"),value:"3-4"},{label:(0,m.__)("3:2","kadence-blocks"),value:"2-3"},{label:(0,m.__)("16:9","kadence-blocks"),value:"9-16"},{label:(0,m.__)("2:1","kadence-blocks"),value:"1-2"},{label:(0,m.__)("4:5","kadence-blocks"),value:"5-4"},{label:(0,m.__)("3:4","kadence-blocks"),value:"4-3"},{label:(0,m.__)("2:3","kadence-blocks"),value:"3-2"}],value:R,onChange:e=>l({imageRatio:e})}),(0,n.createElement)(_.SelectControl,{label:(0,m.__)("Image Size","kadence-blocks"),options:[{label:(0,m.__)("Thumbnail","kadence-blocks"),value:"thumbnail"},{label:(0,m.__)("Medium","kadence-blocks"),value:"medium"},{label:(0,m.__)("Medium Large","kadence-blocks"),value:"medium_large"},{label:(0,m.__)("Large","kadence-blocks"),value:"large"},{label:(0,m.__)("Full","kadence-blocks"),value:"full"}],value:j,onChange:e=>l({imageSize:e})}))),(!O||"post"===O)&&(0,n.createElement)(b.KadencePanelBody,{title:(0,m.__)("Category Settings","kadence-blocks"),initialOpen:!1,panelName:"categorySettings",blockSlug:"kadence/posts"},(0,n.createElement)(_.ToggleControl,{label:(0,m.__)("Enable Above Title Category","kadence-blocks"),checked:ie,onChange:e=>l({aboveCategories:e})}),ie&&(0,n.createElement)(p.Fragment,null,(0,n.createElement)(_.SelectControl,{label:(0,m.__)("Category Style","kadence-blocks"),options:[{label:(0,m.__)("Normal","kadence-blocks"),value:"normal"},{label:(0,m.__)("Pill","kadence-blocks"),value:"pill"}],value:de,onChange:e=>l({categoriesStyle:e})}),"normal"===de&&(0,n.createElement)(_.SelectControl,{label:(0,m.__)("Category Divider","kadence-blocks"),options:[{label:"|",value:"vline"},{label:"-",value:"dash"},{label:"\\",value:"slash"},{label:"·",value:"dot"}],value:se,onChange:e=>l({categoriesDivider:e})})))),"advanced"===Ee&&(0,n.createElement)(p.Fragment,null,(0,n.createElement)(b.KadencePanelBody,{title:(0,m.__)("Meta Settings","kadence-blocks"),panelName:"metaSettings",blockSlug:"kadence/posts"},(0,n.createElement)(_.ToggleControl,{label:(0,m.__)("Enable Meta Info","kadence-blocks"),checked:ce,onChange:e=>l({meta:e})}),ce&&(0,n.createElement)(p.Fragment,null,(0,n.createElement)(_.ToggleControl,{label:(0,m.__)("Enable Author","kadence-blocks"),checked:K,onChange:e=>l({author:e})}),K&&(0,n.createElement)(p.Fragment,null,(0,n.createElement)(_.ToggleControl,{label:(0,m.__)("Enable Author Image","kadence-blocks"),checked:Z,onChange:e=>l({authorImage:e})}),Z&&(0,n.createElement)(b.RangeControl,{label:(0,m.__)("Author Image Size"),value:G,onChange:e=>l({authorImageSize:e}),min:5,max:100}),(0,n.createElement)(_.ToggleControl,{label:(0,m.__)("Enable Author Link","kadence-blocks"),checked:$,onChange:e=>l({authorLink:e})}),(0,n.createElement)(_.ToggleControl,{label:(0,m.__)("Enable Author Label","kadence-blocks"),checked:Q,onChange:e=>l({authorEnabledLabel:e})}),Q&&(0,n.createElement)(_.TextControl,{label:(0,m.__)("Author Label"),value:W||(0,m.__)("By","kadence-blocks"),onChange:e=>l({authorLabel:e})})),(0,n.createElement)(_.ToggleControl,{label:(0,m.__)("Enable Date","kadence-blocks"),checked:ee,onChange:e=>l({date:e})}),ee&&(0,n.createElement)(p.Fragment,null,(0,n.createElement)(_.ToggleControl,{label:(0,m.__)("Enable Date Label","kadence-blocks"),checked:ae,onChange:e=>l({dateEnabledLabel:e})}),ae&&(0,n.createElement)(_.TextControl,{label:(0,m.__)("Date Label"),value:le||(0,m.__)("Posted On","kadence-blocks"),onChange:e=>l({dateLabel:e})})),(0,n.createElement)(_.ToggleControl,{label:(0,m.__)("Enable Modified Date","kadence-blocks"),checked:te,onChange:e=>l({dateUpdated:e})}),te&&(0,n.createElement)(p.Fragment,null,(0,n.createElement)(_.ToggleControl,{label:(0,m.__)("Enable Modified Date Label","kadence-blocks"),checked:ne,onChange:e=>l({dateUpdatedEnabledLabel:e})}),ne&&(0,n.createElement)(_.TextControl,{label:(0,m.__)("Modified Date Label"),value:oe||(0,m.__)("Updated On","kadence-blocks"),onChange:e=>l({dateUpdatedLabel:e})})),(!O||"post"===O)&&(0,n.createElement)(p.Fragment,null,(0,n.createElement)(_.ToggleControl,{label:(0,m.__)("Enable Categories","kadence-blocks"),checked:V,onChange:e=>l({metaCategories:e})}),V&&(0,n.createElement)(p.Fragment,null,(0,n.createElement)(_.ToggleControl,{label:(0,m.__)("Enable Categories Label","kadence-blocks"),checked:X,onChange:e=>l({metaCategoriesEnabledLabel:e})}),X&&(0,n.createElement)(_.TextControl,{label:(0,m.__)("Categories Label"),value:Y||(0,m.__)("Posted In","kadence-blocks"),onChange:e=>l({metaCategoriesLabel:e})})),(0,n.createElement)(_.ToggleControl,{label:(0,m.__)("Enable Comments","kadence-blocks"),checked:J,onChange:e=>l({comments:e})})))),(0,n.createElement)(b.KadencePanelBody,{title:(0,m.__)("Content Settings","kadence-blocks"),initialOpen:!1,panelName:"contentSettings",blockSlug:"kadence/posts"},(0,n.createElement)(_.ToggleControl,{label:(0,m.__)("Enable Excerpt","kadence-blocks"),checked:me,onChange:e=>l({excerpt:e})}),(0,n.createElement)(_.ToggleControl,{label:(0,m.__)("Enable Custom Excerpt Length","kadence-blocks"),checked:ke,onChange:e=>l({excerptCustomLength:e})}),ke&&(0,n.createElement)(b.RangeControl,{label:(0,m.__)("Max number of words in excerpt","kadence-blocks"),value:_e,onChange:e=>l({excerptLength:e}),min:10,max:100}),(0,n.createElement)(_.ToggleControl,{label:(0,m.__)("Enable Read More","kadence-blocks"),checked:ge,onChange:e=>l({readmore:e})}),ge&&(0,n.createElement)(_.TextControl,{label:(0,m.__)("Read More","kadence-blocks"),value:be,onChange:e=>l({readmoreLabel:e})})),(0,n.createElement)(b.KadenceBlockDefaults,{attributes:t,defaultAttributes:i.attributes,blockSlug:i.name}))));if(!ve)return(0,n.createElement)("div",{...ze},Re,(0,n.createElement)(_.Placeholder,{icon:"admin-post",label:(0,m.__)("Posts","kadence-blocks")},(0,n.createElement)(_.Spinner,null)));if(!Ue)return(0,n.createElement)("div",{...ze},Re,(0,n.createElement)(_.Placeholder,{icon:"admin-post",label:(0,m.__)("Posts","kadence-blocks")},Array.isArray(he)?(0,m.__)("No posts found.","kadence-blocks"):(0,n.createElement)(_.Spinner,null)));const je=he.length>z?he.slice(0,z):he;return(0,n.createElement)("div",{...ze},Re,(0,n.createElement)("div",{className:`${a} kb-posts kb-posts-id-${C} ${Oe} grid-cols content-wrap kb-posts-style-${ue||"boxed"} item-image-style-${1===S?F:"above"}`},je.map(((e,t)=>((e,t)=>{let a=void 0!==e.excerpt&&e.excerpt&&void 0!==e.excerpt.rendered?e.excerpt.rendered:"";const l=document.createElement("div");l.innerHTML=a,a=l.textContent||l.innerText||"";let o="";return o=ke&&a&&_e<a.trim().split(" ").length&&""===e.excerpt.raw?(0,n.createElement)(p.Fragment,null,a.trim().split(" ",_e).join(" ")):a,(0,n.createElement)("article",{key:t,className:c()(e.featured_image_src_large&&e.featured_image_src_large[0]&&M?"has-post-thumbnail":"kb-no-thumb")+" entry content-bg entry content-bg loop-entry components-disabled"},M&&e.featured_image_src_large&&void 0!==e.featured_image_src_large[0]&&(0,n.createElement)("a",{href:"#",className:`post-thumbnail kadence-thumbnail-ratio-${R}`},(0,n.createElement)("div",{className:"post-thumbnail-inner"},(0,n.createElement)("img",{src:e.featured_image_src_large[0],alt:(0,f.decodeEntities)(e.title.rendered.trim())||(0,m.__)("(Untitled)","kadence-blocks")}))),(0,n.createElement)("div",{className:"entry-content-wrap"},(0,n.createElement)("header",{className:"entry-header"},"post"===O&&ie&&e.category_info&&(0,n.createElement)("div",{className:"entry-taxonomies"},(0,n.createElement)("span",{className:`category-links term-links category-style-${de}`},e.category_info.map(((e,t,a)=>a.length-1===t||"pill"===de?(0,n.createElement)("a",{key:e.id,className:"kb-posts-block-category-link",href:"#category"},e.name):(0,n.createElement)(p.Fragment,{key:e.id},(0,n.createElement)("a",{key:e.id,className:"kb-posts-block-category-link",href:"#category"},e.name),(0,n.createElement)("span",null," ",Fe," ")))))),(0,n.createElement)(He,{className:"entry-title",style:{fontSize:Be?(0,d.getFontSizeOptionOutput)(Be,pe[0].sizeType):void 0,lineHeight:De?De+pe[0].lineType:void 0,letterSpacing:Ae?Ae+pe[0].letterType:void 0,textTransform:pe[0].textTransform?pe[0].textTransform:void 0}},(0,n.createElement)("a",{href:"#",dangerouslySetInnerHTML:{__html:e.title.rendered.trim()||(0,m.__)("(Untitled)")}})),ce&&(0,n.createElement)("div",{className:`entry-meta entry-meta-divider-${re}`},K&&e.author_info&&e.author_info.display_name&&(0,n.createElement)("span",{className:"posted-by"},Z&&e.author_info.author_image&&(0,n.createElement)("span",{className:"author-avatar",style:{width:G?G+"px":void 0,height:G?G+"px":void 0}},(0,n.createElement)("span",{className:"author-image"},(0,n.createElement)("img",{src:e.author_info.author_image,style:{width:G?G+"px":void 0,height:G?G+"px":void 0}}))),Q&&(0,n.createElement)("span",{className:"meta-label"},W||(0,m.__)("By","kadence-blocks")),(0,n.createElement)("span",{className:"author vcard"},$?(0,n.createElement)("a",{className:"url fn n",href:"#"},e.author_info.display_name):(0,n.createElement)("span",{className:"fn n"},e.author_info.display_name))),ee&&e.date_gmt&&(0,n.createElement)("span",{className:"posted-on"},ae&&(0,n.createElement)("span",{className:"meta-label"},le||(0,m.__)("Posted On","kadence-blocks")),(0,n.createElement)("time",{dateTime:(0,u.format)("c",e.date_gmt),className:"entry-date published"},(0,u.dateI18n)(Me,e.date_gmt))),te&&e.modified_gmt&&(0,n.createElement)("span",{className:"updated-on"},ne&&(0,n.createElement)("span",{className:"meta-label"},oe||(0,m.__)("Updated On","kadence-blocks")),(0,n.createElement)("time",{dateTime:(0,u.format)("c",e.modified_gmt),className:"updated entry-date published"},(0,u.dateI18n)(Me,e.modified_gmt))),V&&e.category_info&&(0,n.createElement)("span",{className:"category-links"},X&&(0,n.createElement)("span",{className:"meta-label"},Y||(0,m.__)("Posted In","kadence-blocks")),(0,n.createElement)("span",{className:"category-link-items"},e.category_info.map(((e,t,a)=>a.length-1===t?(0,n.createElement)("a",{key:e.id,className:"kb-posts-block-category-link",href:"#category"},e.name):(0,n.createElement)(p.Fragment,{key:e.id},(0,n.createElement)("a",{key:e.id,className:"kb-posts-block-category-link",href:"#category"},e.name),(0,n.createElement)("span",null,", ")))))),J&&0!==e.comment_info&&(0,n.createElement)("span",{className:"meta-comments"},(0,n.createElement)("a",{className:"meta-comments-link anchor-scroll",href:"#comments"},1===e.comment_info&&e.comment_info+" "+(0,m.__)("Comment","kadence-blocks"),1!==e.comment_info&&e.comment_info+" "+(0,m.__)("Comments","kadence-blocks"))))),me&&e.excerpt&&e.excerpt.rendered&&(0,n.createElement)("div",{className:"entry-summary"},o),(0,n.createElement)("footer",{className:"entry-footer"},ge&&(0,n.createElement)("div",{className:"entry-actions"},(0,n.createElement)("p",{className:"more-link-wrap"},(0,n.createElement)("a",{href:"#",className:"post-more-link"},be||(0,m.__)("Read More","kadence-blocks")))))))})(e,t)))))}));(0,window.wp.blocks.registerBlockType)("kadence/posts",{...i,title:(0,m.__)("Posts","kadence-blocks"),keywords:[(0,m.__)("posts","kadence-blocks"),(0,m.__)("latest posts","kadence-blocks"),(0,m.__)("blog","kadence-blocks"),"KB"],icon:{src:l.postsIcon},edit:T,save:()=>null,example:{attributes:{columns:1,postsToShow:2}}})},4184:(e,t)=>{var a;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var c=n.apply(null,a);c&&e.push(c)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var r in a)l.call(a,r)&&a[r]&&e.push(r);else e.push(a.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()}},a={};function l(e){var n=a[e];if(void 0!==n)return n.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,l),o.exports}l.m=t,e=[],l.O=(t,a,n,o)=>{if(!a){var c=1/0;for(d=0;d<e.length;d++){for(var[a,n,o]=e[d],r=!0,s=0;s<a.length;s++)(!1&o||c>=o)&&Object.keys(l.O).every((e=>l.O[e](a[s])))?a.splice(s--,1):(r=!1,o<c&&(c=o));if(r){e.splice(d--,1);var i=n();void 0!==i&&(t=i)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,n,o]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={5384:0,9746:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var n,o,[c,r,s]=a,i=0;if(c.some((t=>0!==e[t]))){for(n in r)l.o(r,n)&&(l.m[n]=r[n]);if(s)var d=s(l)}for(t&&t(a);i<c.length;i++)o=c[i],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(d)},a=globalThis.webpackChunkkadence=globalThis.webpackChunkkadence||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=l.O(void 0,[9746],(()=>l(7646)));n=l.O(n),(this.kadence=this.kadence||{})["blocks-posts"]=n})();