(self.webpackChunkpragmalingu_github_io=self.webpackChunkpragmalingu_github_io||[]).push([[89],{6165:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var n=a(9756),r=a(7294),l=a(6010),i=a(261),s=a(6742),c="sidebar_2ahu",o="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",d="sidebarItem_2UVv",u="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",v=a(4973);function p(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:d},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))}))))}var E=a(571);var h=function(e){var t=e.sidebar,a=e.toc,s=e.children,c=(0,n.Z)(e,["sidebar","toc","children"]),o=t&&t.items.length>0;return r.createElement(i.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},o&&r.createElement("aside",{className:"col col--3"},r.createElement(p,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o})},s),a&&r.createElement("div",{className:"col col--2"},r.createElement(E.Z,{toc:a})))))}},4428:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var n=a(7294),r=a(2263),l=a(6165),i=a(3146),s=a(6742),c=a(4973);var o=function(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(s.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=a(3018);var d=function(e){var t=e.metadata,a=e.items,s=e.sidebar,c=(0,r.Z)().siteConfig.title,d=t.blogDescription,u=t.blogTitle,g="/"===t.permalink?c:u;return n.createElement(l.Z,{title:g,description:d,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:s},a.map((function(e){var t=e.content;return n.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(o,{metadata:t}))}},3146:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n=a(7294),r=a(6010),l=a(3905),i=a(4973),s=a(6742),c=a(3018),o=a(3263),m=a(1217),d=a(6146),u="blogPostTitle_GeHD",g="blogPostData_291c",v="blogPostDetailsFull_3kfx";var p=function(e){var t,a,p,E=(a=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),h=e.children,b=e.frontMatter,f=e.metadata,_=e.truncated,N=e.isBlogPostPage,Z=void 0!==N&&N,k=f.date,T=f.formattedDate,L=f.permalink,w=f.tags,C=f.readingTime,I=f.title,x=f.editUrl,y=b.author,M=b.image,P=b.keywords,R=b.author_url||b.authorURL,A=b.author_title||b.authorTitle,B=b.author_image_url||b.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(m.Z,{keywords:P,image:M}),n.createElement("article",{className:Z?void 0:"margin-bottom--xl"},(p=Z?"h1":"h2",n.createElement("header",null,n.createElement(p,{className:u},Z?I:n.createElement(s.Z,{to:L},I)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:k},T),C&&n.createElement(n.Fragment,null," \xb7 ",E(C))),n.createElement("div",{className:"avatar margin-vert--md"},B&&n.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:R},n.createElement("img",{src:B,alt:y})),n.createElement("div",{className:"avatar__intro"},y&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(s.Z,{href:R},y)),n.createElement("small",{className:"avatar__subtitle"},A)))))),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:o.Z},h)),(w.length>0||_)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(t={},t[v]=Z,t))},w.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),w.map((function(e){var t=e.label,a=e.permalink;return n.createElement(s.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),Z&&x&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:x})),!Z&&_&&n.createElement("div",{className:"col text--right"},n.createElement(s.Z,{to:f.permalink,"aria-label":"Read more about "+I},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},6146:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var n=a(7294),r=a(4973),l=a(2122),i=a(9756),s=a(6010),c="iconEdit_2_ui",o=function(e){var t=e.className,a=(0,i.Z)(e,["className"]);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function m(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(o,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){"use strict";a.d(t,{r:function(){return c},Z:function(){return o}});var n=a(7294),r=a(6010);var l=function(e,t,a){var r=(0,n.useState)(void 0),l=r[0],i=r[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,s=!1,c=document.getElementsByClassName(e);r<c.length&&!s;){var o=c[r],m=o.href,d=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===d&&(l&&l.classList.remove(t),o.classList.add(t),i(o),s=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_35-E",s="table-of-contents__link";function c(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(c,{isChild:!0,toc:e.children}))}))):null}var o=function(e){var t=e.toc;return l(s,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement(c,{toc:t}))}}}]);