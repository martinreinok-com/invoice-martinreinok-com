(this["webpackJsonpinvoice-generator"]=this["webpackJsonpinvoice-generator"]||[]).push([[0],{289:function(e,a,t){e.exports=t(681)},297:function(e,a){},299:function(e,a){},329:function(e,a){},330:function(e,a){},423:function(e,a){},680:function(e,a,t){},681:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),r=t(19),l=t.n(r),c=t(288),i=t(24),d=t(48),s={description:"",quantity:"1",rate:"0.00"},u={logo:"",logoWidth:100,title:"Arve",companyName:"",name:"",companyAddress:"",companyAddress2:"",companyCountry:"",billTo:"Arve saaja",clientName:"",clientAddress:"",clientAddress2:"",clientCountry:"",invoiceTitleLabel:"Arve nr",invoiceTitle:"",invoiceDateLabel:"Arve kuup\xe4ev",invoiceDate:"",invoiceDueDateLabel:"Makset\xe4htaeg",invoiceDueDate:"",productLineDescription:"Toode/Teenus",productLineQuantity:"Kogus",productLineQuantityRate:"Summa",productLineQuantityAmount:"Kokku",productLines:[{description:"Toode/Teenus",quantity:"1",rate:"100.00"}],subTotalLabel:"Summa KM-ta 20%",taxLabel:"KM (20%)",totalLabel:"Arve kokku",currency:"\u20ac",notesLabel:"",notes:"",term:"",termLabel:"",bank1:"",bank1IBAN:"",bank1SWIFT:"",bank2:"",bank2IBAN:"",bank2SWIFT:"",bank3:"",bank3IBAN:"",bank3SWIFT:"",firmaLisainfo:""},m=t(16),f={dark:{color:"#222"},white:{color:"#fff"},"bg-dark":{backgroundColor:"#666"},"bg-gray":{backgroundColor:"#e3e3e3"},flex:{display:"flex",flexDirection:"row",flexWrap:"nowrap"},"flex-container":{display:"flex-container",flexDirection:"row"},"invoice-footer":{position:"absolute",bottom:"0px",left:"0px",right:"0px",marginLeft:"0px",marginRight:"0px",backgroundColor:"#e3e3e3"},"ml-35":{marginLeft:"35px"},"mr-35":{marginRight:"35px"},"w-auto":{flex:1,paddingRight:"8px"},"ml-30":{flex:1},"w-100":{width:"100%"},"w-90":{width:"90%"},"w-80":{width:"80%"},"w-70":{width:"70%"},"w-60":{width:"60%"},"w-55":{width:"55%"},"w-50":{width:"50%"},"w-48":{width:"48%"},"w-45":{width:"45%"},"w-40":{width:"40%"},"w-35":{width:"35%"},"w-30":{width:"30%"},"w-25":{width:"25%"},"w-17":{width:"17%"},"w-18":{width:"18%"},"w-20":{width:"20%"},"w-15":{width:"15%"},row:{borderBottom:"1px solid ".concat("#e3e3e3")},divider:{borderTop:"2px solid ".concat("#e3e3e3")},"mt-60":{marginTop:"60px"},"mt-40":{marginTop:"40px"},"mt-30":{marginTop:"30px"},"mt-20":{marginTop:"20px"},"mt-18":{marginTop:"18px"},"mt-15":{marginTop:"15px"},"mt-10":{marginTop:"10px"},"mt-5":{marginTop:"5px"},"mb-5":{marginBottom:"5px"},"mb-10":{marginBottom:"10px"},"p-4-8":{padding:"4px 8px"},"p-5":{padding:"5px"},"pb-10":{paddingBottom:"10px"},right:{textAlign:"right"},center:{textAlign:"center"},bold:{fontWeight:"bold"},"fs-10":{fontSize:"10px"},"fs-15":{fontSize:"15px"},"fs-20":{fontSize:"20px"},"fs-30":{fontSize:"30px"},"fs-35":{fontSize:"35px"},"fs-38":{fontSize:"38px"},"fs-40":{fontSize:"40px"},"fs-45":{fontSize:"45px"},page:{fontFamily:"Nunito",fontSize:"13px",color:"#555",paddingTop:"40px",paddingLeft:"35px",paddingRight:"35px",paddingBottom:"30px"},span:{padding:"4px 12px 4px 0"},logo:{display:"block"}},p=function(e){var a={};return e.replace(/\s+/g," ").split(" ").forEach((function(e){void 0!==typeof f[e]&&Object.assign(a,f[e])})),a},g=function(e){var a=e.className,t=e.placeholder,n=e.value,r=e.onChange,l=e.pdfMode,c=e.autoChangeSize;return void 0!==c&&c&&(a=n&&n.length>8?"fs-30 right bold":a),o.a.createElement(o.a.Fragment,null,l?o.a.createElement(m.Text,{style:p("span "+(a||""))},n):o.a.createElement("input",{type:"text",className:"input "+(a||""),placeholder:t||"",value:n||"",onChange:r?function(e){return r(e.target.value)}:void 0}))},v=t(287),h=function(e){var a=e.className,t=e.placeholder,n=e.value,r=e.onChange,l=e.pdfMode,c=e.rows;return o.a.createElement(o.a.Fragment,null,l?o.a.createElement(m.Text,{style:p("span "+(a||""))},n):o.a.createElement(v.a,{minRows:c||1,maxRows:c||1,className:"input "+(a||""),placeholder:t||"",value:n||"",onChange:r?function(e){return r(e.target.value)}:void 0}))},b=t(281),E=t.n(b),w=(t(594),function(e){var a=e.className,t=e.value,n=e.selected,r=e.onChange,l=e.pdfMode;return o.a.createElement(o.a.Fragment,null,l?o.a.createElement(m.Text,{style:p("span "+(a||""))},t):o.a.createElement(E.a,{className:"input "+(a||""),selected:n,onChange:r?function(e){return r(e)}:function(e){return null},dateFormat:"MMM dd, yyyy"}))}),N=t(286);var M=function(e,a){Object(n.useEffect)((function(){var t=function(t){var n=null===e||void 0===e?void 0:e.current;n&&!n.contains(t.target)&&a(t)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),function(){document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}}),[e,a])},y=(t(679),function(e){var a=e.className,t=e.placeholder,r=e.value,l=e.width,c=e.onChangeImage,s=e.onChangeWidth,u=e.pdfMode,f=Object(n.useRef)(null),g=Object(n.useRef)(null),v=Object(n.useState)(!1),h=Object(d.a)(v,2),b=h[0],E=h[1];M(g,(function(){b&&E(!1)}));var w=function(){var e;null===f||void 0===f||null===(e=f.current)||void 0===e||e.click()};return u?r?o.a.createElement(m.Image,{style:Object(i.a)(Object(i.a)({},p("image ".concat(a||""))),{},{maxWidth:l}),src:r}):o.a.createElement(o.a.Fragment,null):o.a.createElement("div",{className:"image ".concat(r?"mb-5":""," ").concat(a||"")},r?o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:r,className:"image__img",alt:t,style:{maxWidth:l||100}}),o.a.createElement("button",{type:"button",className:"image__change",onClick:w},"Change Image"),o.a.createElement("button",{type:"button",className:"image__edit",onClick:function(){E(!b)}},"Resize Image"),o.a.createElement("button",{type:"button",className:"image__remove",onClick:function(){"function"===typeof c&&c("")}},"Remove"),b&&o.a.createElement("div",{ref:g,className:"image__width-wrapper"},o.a.createElement(N.a,{min:100,max:250,marks:{100:"100px",150:"150px",200:"200px",250:"250px"},included:!1,step:1,onChange:function(e){"function"===typeof s&&s(e)},defaultValue:l||100}))):o.a.createElement("button",{type:"button",className:"image__upload",onClick:w},t),o.a.createElement("input",{ref:f,tabIndex:-1,type:"file",accept:"image/*",className:"image__file",onChange:function(){var e;if(null===f||void 0===f||null===(e=f.current)||void 0===e?void 0:e.files){var a=f.current.files;if(a.length>0&&"function"===typeof c){var t=new FileReader;t.addEventListener("load",(function(){"string"===typeof t.result&&c(t.result)})),t.readAsDataURL(a[0])}}}}))}),k=function(e){var a=e.pdfMode,t=e.children;return o.a.createElement(o.a.Fragment,null,a?o.a.createElement(m.Document,null,t):o.a.createElement(o.a.Fragment,null,t))},x=function(e){var a=e.className,t=e.pdfMode,n=e.children;return o.a.createElement(o.a.Fragment,null,t?o.a.createElement(m.Page,{size:"A4",style:p("page "+(a||""))},n):o.a.createElement("div",{className:"page "+(a||"")},n))},C=function(e){var a=e.className,t=e.pdfMode,n=e.children;return o.a.createElement(o.a.Fragment,null,t?o.a.createElement(m.View,{style:p("view "+(a||""))},n):o.a.createElement("div",{className:"view "+(a||"")},n))},L=function(e){var a=e.className,t=e.pdfMode,n=e.children;return o.a.createElement(o.a.Fragment,null,t?o.a.createElement(m.Text,{style:p("span "+(a||""))},n):o.a.createElement("span",{className:"span "+(a||"")},n))},T=function(e){var a=e.data,t=Object(n.useState)(!1),r=Object(d.a)(t,2),l=r[0],c=r[1];return Object(n.useEffect)((function(){c(!1);var e=setTimeout((function(){c(!0)}),500);return function(){return clearTimeout(e)}}),[a]),o.a.createElement("div",{className:"download-pdf "+(l?"":"loading"),title:"Download PDF"},l&&o.a.createElement(m.PDFDownloadLink,{document:o.a.createElement(S,{pdfMode:!0,data:a}),fileName:"".concat(a.invoiceTitle?a.invoiceTitle.toLowerCase():"invoice",".pdf"),"aria-label":"Download PDF"}))},j=t(78),A=function(e){var a=e.buttonClass,t=e.buttonName,n=e.hoverTitle,r=e.onButtonClick;return o.a.createElement("button",{onClick:function(){console.log("Button click :)"),"function"===typeof r?r():console.log("onButtonClick is not a function")},className:a,title:n},o.a.createElement("span",null,t))};function D(){window.localStorage.removeItem("invoiceData"),window.location.reload()}function O(e){!function(e,a){try{var t=JSON.stringify(e),n=new Blob([t],{type:"application/json"}),o=URL.createObjectURL(n),r=document.createElement("a");r.href=o,r.download=a,r.click(),URL.revokeObjectURL(o)}catch(l){return console.error("Error downloading data:",l),!1}}(e,e.title)}m.Font.register({family:"Nunito",fonts:[{src:"https://fonts.gstatic.com/s/nunito/v12/XRXV3I6Li01BKofINeaE.ttf"},{src:"https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofA6sKUYevN.ttf",fontWeight:600}]});var S=function(e){var a=e.data,t=e.pdfMode,r=e.onChange,l=Object(n.useState)(a?Object(i.a)({},a):Object(i.a)({},u)),m=Object(d.a)(l,2),f=m[0],p=m[1],v=Object(n.useState)(),b=Object(d.a)(v,2),E=b[0],N=b[1],M=Object(n.useState)(),S=Object(d.a)(M,2),F=S[0],I=S[1],R=Object(n.useRef)(null),W=""!==f.invoiceDate?new Date(f.invoiceDate):new Date,B=""!==f.invoiceDueDate?new Date(f.invoiceDueDate):new Date(W.valueOf());""===f.invoiceDueDate&&B.setDate(B.getDate()+14);var _=function(e,a){if("productLines"!==e){var t=Object(i.a)({},f);("logoWidth"===e&&"number"===typeof a||"logoWidth"!==e&&"string"===typeof a)&&(t[e]=a),p(t)}},z=function(e,a,t){var n=f.productLines.map((function(n,o){if(o===e){var r=Object(i.a)({},n);if("description"===a)r[a]=t;else if("."===t[t.length-1]||"0"===t[t.length-1]&&t.includes("."))r[a]=t;else{var l=parseFloat(t);r[a]=(l||0).toString()}return r}return Object(i.a)({},n)}));p(Object(i.a)(Object(i.a)({},f),{},{productLines:n}))};return Object(n.useEffect)((function(){var e=0;f.productLines.forEach((function(a){var t=parseFloat(a.quantity),n=parseFloat(a.rate);e+=t&&n?t*n:0})),N(e)}),[f.productLines]),Object(n.useEffect)((function(){var e=f.taxLabel.match(/(\d+)%/),a=e?parseFloat(e[1]):0;I(E?E*a/100:0)}),[E,f.taxLabel]),Object(n.useEffect)((function(){r&&r(f)}),[r,f]),o.a.createElement(o.a.Fragment,null,o.a.createElement(A,{buttonClass:"button-reset-invoice",buttonName:"Reset Invoice",hoverTitle:"Reset to Default",onButtonClick:function(){!0===window.confirm("This will reset the form, press OK to confirm.")&&D()}}),o.a.createElement(A,{buttonClass:"button-save-invoice",buttonName:"Save Invoice",hoverTitle:"Save Invoice to file",onButtonClick:function(){return O(f)}}),o.a.createElement("input",{type:"file",id:"file",accept:".json",ref:R,onChange:function(e){var a,t=null===(a=e.target.files)||void 0===a?void 0:a[0];if(t){var n=new FileReader;n.onload=function(e){if(e.target){var a=e.target.result;try{var t=JSON.parse(a);console.log("Parsed Data:",t),p(t)}catch(n){console.error("Error parsing file:",n)}}},n.readAsText(t)}},style:{display:"none"}}),o.a.createElement(A,{buttonClass:"button-load-invoice",buttonName:"Load Invoice",hoverTitle:"Load invoice from file",onButtonClick:function(){var e;null===(e=R.current)||void 0===e||e.click()}}),o.a.createElement(k,{pdfMode:t},o.a.createElement(x,{className:"invoice-wrapper",pdfMode:t},!t&&o.a.createElement(T,{data:f}),o.a.createElement(C,{className:"flex",pdfMode:t},o.a.createElement(C,{className:"w-50",pdfMode:t},o.a.createElement(y,{className:"logo",placeholder:"Firma logo",value:f.logo,width:f.logoWidth,pdfMode:t,onChangeImage:function(e){return _("logo",e)},onChangeWidth:function(e){return _("logoWidth",e)}}),o.a.createElement(g,{className:"fs-20 bold",placeholder:"Firma nimi",value:f.companyName,onChange:function(e){return _("companyName",e)},pdfMode:t}),o.a.createElement(h,{placeholder:"Aadress, ZIP Maakond Linn",value:f.name,onChange:function(e){return _("name",e)},pdfMode:t,rows:2}),o.a.createElement(g,{placeholder:"Registrikood",value:f.companyAddress,onChange:function(e){return _("companyAddress",e)},pdfMode:t}),o.a.createElement(g,{placeholder:"VAT",value:f.companyAddress2,onChange:function(e){return _("companyAddress2",e)},pdfMode:t}),o.a.createElement(g,{placeholder:"Lisainfo (vajdusel)",value:f.companyCountry,onChange:function(e){return _("companyCountry",e)},pdfMode:t})),o.a.createElement(C,{className:"w-50",pdfMode:t},o.a.createElement(g,{className:"fs-45 right bold",placeholder:"Arve",value:f.title,onChange:function(e){return _("title",e)},pdfMode:t,autoChangeSize:!0}))),o.a.createElement(C,{className:"flex mt-40",pdfMode:t},o.a.createElement(C,{className:"w-60",pdfMode:t},o.a.createElement(g,{className:"bold dark mb-5",value:f.billTo,onChange:function(e){return _("billTo",e)},pdfMode:t}),o.a.createElement(g,{placeholder:"Kliendi nimi",value:f.clientName,onChange:function(e){return _("clientName",e)},pdfMode:t}),o.a.createElement(h,{placeholder:"Kliendi aadress",value:f.clientAddress,onChange:function(e){return _("clientAddress",e)},pdfMode:t,rows:2}),o.a.createElement(g,{placeholder:"ZIP Maakond Vald",value:f.clientAddress2,onChange:function(e){return _("clientAddress2",e)},pdfMode:t}),o.a.createElement(g,{placeholder:"Registrikood",value:f.clientCountry,onChange:function(e){return _("clientCountry",e)},pdfMode:t})),o.a.createElement(C,{className:"w-40",pdfMode:t},o.a.createElement(C,{className:"flex mb-5",pdfMode:t},o.a.createElement(C,{className:"w-50",pdfMode:t},o.a.createElement(g,{className:"bold",value:f.invoiceTitleLabel,onChange:function(e){return _("invoiceTitleLabel",e)},pdfMode:t})),o.a.createElement(C,{className:"w-50",pdfMode:t},o.a.createElement(g,{placeholder:"Arve number",value:f.invoiceTitle,onChange:function(e){return _("invoiceTitle",e)},pdfMode:t}))),o.a.createElement(C,{className:"flex mb-5",pdfMode:t},o.a.createElement(C,{className:"w-50",pdfMode:t},o.a.createElement(g,{className:"bold",value:f.invoiceDateLabel,onChange:function(e){return _("invoiceDateLabel",e)},pdfMode:t})),o.a.createElement(C,{className:"w-50",pdfMode:t},o.a.createElement(w,{value:Object(j.default)(W,"MMM dd, yyyy"),selected:W,onChange:function(e){return _("invoiceDate",e&&!Array.isArray(e)?Object(j.default)(e,"MMM dd, yyyy"):"")},pdfMode:t}))),o.a.createElement(C,{className:"flex mb-5",pdfMode:t},o.a.createElement(C,{className:"w-50",pdfMode:t},o.a.createElement(g,{className:"bold",value:f.invoiceDueDateLabel,onChange:function(e){return _("invoiceDueDateLabel",e)},pdfMode:t})),o.a.createElement(C,{className:"w-50",pdfMode:t},o.a.createElement(w,{value:Object(j.default)(B,"MMM dd, yyyy"),selected:B,onChange:function(e){return _("invoiceDueDate",e&&!Array.isArray(e)?Object(j.default)(e,"MMM dd, yyyy"):"")},pdfMode:t}))))),o.a.createElement(C,{className:"mt-30 bg-dark flex",pdfMode:t},o.a.createElement(C,{className:"w-48 p-4-8",pdfMode:t},o.a.createElement(g,{className:"white bold",value:f.productLineDescription,onChange:function(e){return _("productLineDescription",e)},pdfMode:t})),o.a.createElement(C,{className:"w-17 p-4-8",pdfMode:t},o.a.createElement(g,{className:"white bold right",value:f.productLineQuantity,onChange:function(e){return _("productLineQuantity",e)},pdfMode:t})),o.a.createElement(C,{className:"w-17 p-4-8",pdfMode:t},o.a.createElement(g,{className:"white bold right",value:f.productLineQuantityRate,onChange:function(e){return _("productLineQuantityRate",e)},pdfMode:t})),o.a.createElement(C,{className:"w-18 p-4-8",pdfMode:t},o.a.createElement(g,{className:"white bold right",value:f.productLineQuantityAmount,onChange:function(e){return _("productLineQuantityAmount",e)},pdfMode:t}))),f.productLines.map((function(e,a){return t&&""===e.description?o.a.createElement(L,{key:a}):o.a.createElement(C,{key:a,className:"row flex",pdfMode:t},o.a.createElement(C,{className:"w-48 p-4-8 pb-0",pdfMode:t},o.a.createElement(h,{className:"dark",rows:2,placeholder:"Toote/Teenuse nimi/kirjeldus",value:e.description,onChange:function(e){return z(a,"description",e)},pdfMode:t})),o.a.createElement(C,{className:"w-17 p-4-8 pb-0",pdfMode:t},o.a.createElement(g,{className:"dark right",value:e.quantity,onChange:function(e){return z(a,"quantity",e)},pdfMode:t})),o.a.createElement(C,{className:"w-17 p-4-8 pb-0",pdfMode:t},o.a.createElement(g,{className:"dark right",value:e.rate,onChange:function(e){return z(a,"rate",e)},pdfMode:t})),o.a.createElement(C,{className:"w-18 p-4-8 pb-0",pdfMode:t},o.a.createElement(L,{className:"dark right",pdfMode:t},function(e,a){var t=parseFloat(e),n=parseFloat(a);return(t&&n?t*n:0).toFixed(2)}(e.quantity,e.rate))),!t&&o.a.createElement("button",{className:"link row__remove","aria-label":"Remove Row",title:"Remove Row",onClick:function(){return function(e){var a=f.productLines.filter((function(a,t){return t!==e}));p(Object(i.a)(Object(i.a)({},f),{},{productLines:a}))}(a)}},o.a.createElement("span",{className:"icon icon-remove bg-red"})))})),o.a.createElement(C,{className:"flex",pdfMode:t},o.a.createElement(C,{className:"w-50 mt-10",pdfMode:t},!t&&o.a.createElement("button",{className:"link",onClick:function(){var e=[].concat(Object(c.a)(f.productLines),[Object(i.a)({},s)]);p(Object(i.a)(Object(i.a)({},f),{},{productLines:e}))}},o.a.createElement("span",{className:"icon icon-add bg-green mr-10"}),"Lisa rida")),o.a.createElement(C,{className:"w-50 mt-20",pdfMode:t},o.a.createElement(C,{className:"flex",pdfMode:t},o.a.createElement(C,{className:"w-60 p-5",pdfMode:t},o.a.createElement(g,{placeholder:"Summa KM-ta",value:f.subTotalLabel,onChange:function(e){return _("subTotalLabel",e)},pdfMode:t})),o.a.createElement(C,{className:"w-50 p-5",pdfMode:t},o.a.createElement(L,{className:"right bold dark",pdfMode:t},null===E||void 0===E?void 0:E.toFixed(2)))),o.a.createElement(C,{className:"flex",pdfMode:t},o.a.createElement(C,{className:"w-50 p-5",pdfMode:t},o.a.createElement(g,{placeholder:"KM (20%)",value:f.taxLabel,onChange:function(e){return _("taxLabel",e)},pdfMode:t})),o.a.createElement(C,{className:"w-50 p-5",pdfMode:t},o.a.createElement(L,{className:"right bold dark",pdfMode:t},null===F||void 0===F?void 0:F.toFixed(2)))),o.a.createElement(C,{className:"flex bg-gray p-5",pdfMode:t},o.a.createElement(C,{className:"w-50 p-5",pdfMode:t},o.a.createElement(g,{placeholder:"Arve kokku",className:"bold",value:f.totalLabel,onChange:function(e){return _("totalLabel",e)},pdfMode:t})),o.a.createElement(C,{className:"w-50 p-5 flex",pdfMode:t},o.a.createElement(g,{className:"dark bold right ml-30",value:f.currency,onChange:function(e){return _("currency",e)},pdfMode:t}),o.a.createElement(L,{className:"right bold dark w-auto",pdfMode:t},("undefined"!==typeof E&&"undefined"!==typeof F?E+F:0).toFixed(2)))))),o.a.createElement(C,{className:"mt-20",pdfMode:t},o.a.createElement(g,{className:"bold w-100",placeholder:"Lisainfo pealkiri (vajadusel)",value:f.notesLabel,onChange:function(e){return _("notesLabel",e)},pdfMode:t}),o.a.createElement(h,{className:"w-100 fake-mb-100",rows:2,placeholder:"Lisainfo (vajadusel)",value:f.notes,onChange:function(e){return _("notes",e)},pdfMode:t})),o.a.createElement(C,{className:"flex-container mt-30 invoice-footer",pdfMode:t},o.a.createElement(C,{className:"w-15 ml-35 mt-20",pdfMode:t},o.a.createElement(C,{className:"flex",pdfMode:t},o.a.createElement(g,{placeholder:"Panga nimi",value:f.bank1,onChange:function(e){return _("bank1",e)},pdfMode:t})),o.a.createElement(g,{placeholder:"Panga nimi",value:f.bank2,onChange:function(e){return _("bank2",e)},pdfMode:t})),o.a.createElement(C,{className:"w-30 mt-20",pdfMode:t},o.a.createElement(C,{className:"flex",pdfMode:t},o.a.createElement(g,{placeholder:"IBAN",value:f.bank1IBAN,onChange:function(e){return _("bank1IBAN",e)},pdfMode:t})),o.a.createElement(g,{placeholder:"IBAN",value:f.bank2IBAN,onChange:function(e){return _("bank2IBAN",e)},pdfMode:t})),o.a.createElement(C,{className:"w-15 mt-20",pdfMode:t},o.a.createElement(C,{className:"flex",pdfMode:t},o.a.createElement(g,{placeholder:"(SWIFT)",value:f.bank1SWIFT,onChange:function(e){return _("bank1SWIFT",e)},pdfMode:t})),o.a.createElement(g,{placeholder:"(SWIFT)",value:f.bank2SWIFT,onChange:function(e){return _("bank2SWIFT",e)},pdfMode:t})),o.a.createElement(C,{className:"w-30  mr-35 mt-5",pdfMode:t},o.a.createElement(h,{className:"w-100 center mb-10",rows:4,placeholder:"Firma lisainfo, kontakt, epost, tel, www (\xf5igeks formaadiks 4 rida teksti v\xf5i vastavalt t\xfchikuid)",value:f.firmaLisainfo,onChange:function(e){return _("firmaLisainfo",e)},pdfMode:t}))))))};var F=function(){var e=window.localStorage.getItem("invoiceData"),a=null;try{e&&(a=JSON.parse(e))}catch(t){}return o.a.createElement("div",{className:"app"},o.a.createElement(S,{data:a,onChange:function(e){window.localStorage.setItem("invoiceData",JSON.stringify(e))}}))},I=(t(680),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function R(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(F,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");I?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(a,e)}))}}()}},[[289,1,2]]]);
//# sourceMappingURL=main.0b0b423a.chunk.js.map