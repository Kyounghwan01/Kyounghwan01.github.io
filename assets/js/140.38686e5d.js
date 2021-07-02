(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{572:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-사용법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-사용법"}},[t._v("#")]),t._v(" vuePress plugin 사용법")]),t._v(" "),a("h2",{attrs:{id:"시작하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시작하기"}},[t._v("#")]),t._v(" 시작하기")]),t._v(" "),a("p",[t._v("vuepress 0.x버전과 1.x 버전의 가장 큰 차이는 "),a("strong",[t._v("플러그인을 지원하는가")]),t._v("입니다."),a("br"),t._v("\n플러그인을 지원하게 됨으로, seo라든지 sitemap, 댓글기능 등등 많은 npm라이브러리를 사용할 수 있게 되어 우리의 블로그에 더 많은 기능을 추가 할 수 있게 되었습니다."),a("br"),t._v("\n그래서 오늘은 제가 사용하고 있는 vuepress 플러그인 및 플러그인 사용법에 대해서 살펴보겠습니다.")]),t._v(" "),a("h2",{attrs:{id:"플러그인-추가-전-필요"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#플러그인-추가-전-필요"}},[t._v("#")]),t._v(" 플러그인 추가 전 필요")]),t._v(" "),a("p",[t._v("플러그인 추가 전에 본인의 vuepress 파일의 package.json에서 하나 확인하실 것이 있습니다."),a("br"),t._v("\ndevDependencies에 vuepress가 설치되어 있는 지 꼭 확인합니다."),a("br"),t._v("\n저의 경우 vuepress가 설치 안되어 있었는데, 플러그인을 설치하니까 빌드 중에, 플러그인 인식 에러가 뜨더라구요. 꼭 설치 하시고 시작 하여야합니다. 버전은 상관 없습니다.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vuepress"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^1.5.2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"plugin-back-to-top"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-back-to-top"}},[t._v("#")]),t._v(" plugin-back-to-top")]),t._v(" "),a("p",[t._v("첫번째 플러그인은 vuepress에서 공식 추천한 플러그인 입니다."),a("br"),t._v("\n블로그 글을 읽고 스크롤이 바닥에 위치하면 맨위로 올려주는 버튼이 만들어지는 플러그인입니다.")]),t._v(" "),a("ol",[a("li",[t._v("설치")])]),t._v(" "),a("ul",[a("li",[t._v("yarn add -D @vuepress/plugin-back-to-top")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("사용")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("export "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vuepress/back-to-top"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("끝입니다. 정말 쉽게 플러그인을 사용하도록 만들었습니다.")]),t._v(" "),a("h2",{attrs:{id:"구글-애널리틱스"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#구글-애널리틱스"}},[t._v("#")]),t._v(" 구글 애널리틱스")]),t._v(" "),a("p",[t._v("두번째 플러그인은 구글 애널리틱스입니다. 블로그에 어떤 글이 인기가 많은지, 어느날, 특정 시간때에 유입량이 많은지 데이터로 보여주는 기능입니다.")]),t._v(" "),a("ol",[a("li",[t._v("설치")])]),t._v(" "),a("ul",[a("li",[t._v("yarn add -D @vuepress/plugin-google-analytics")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("사용")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("export "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nplugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vuepress/google-analytics"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ga"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// UA-00000000-0")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vuepress/back-to-top"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("ga 등록")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://analytics.google.com/analytics",target:"_blank",rel:"noopener noreferrer"}},[t._v("구글 애널리틱스"),a("OutboundLink")],1),t._v(" 여기 들어가셔서 블로그 사이트 등록하시면 위와 같이 "),a("code",[t._v("UA-00000000-0")]),t._v(" 같은 키가 나옵니다. 그 값을 "),a("code",[t._v('["@vuepress/google-analytics", {ga: xxxx}]')]),t._v("여기에 넣어주시면 됩니다.")])]),t._v(" "),a("h2",{attrs:{id:"sitemap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sitemap"}},[t._v("#")]),t._v(" sitemap")]),t._v(" "),a("p",[t._v("이 기능은 구글 서치콘솔에서 seo 작업을 할때, sitemap이 필요한 경우 html을 xml로 바꿔주는 기능입니다.")]),t._v(" "),a("ol",[a("li",[t._v("설치")])]),t._v(" "),a("ul",[a("li",[t._v("yarn add -D vuepress-plugin-sitemap")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("사용")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("export "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nplugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vuepress/google-analytics"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ga"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// UA-00000000-0")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vuepress/back-to-top"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sitemap"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hostname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://kyounghwan01.github.io/blog/"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("hostname에 블로그 사이트 url을 넣어주시면 됩니다.")]),t._v(" "),a("li",[t._v("배포 이후, 구글 서치 콘솔 가셔서 sitemap을 "),a("code",[t._v("https://kyounghwan01.github.io/blog/sitemap.xml")]),t._v("로 등록하시면 됩니다.")])]),t._v(" "),a("h2",{attrs:{id:"last-updated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#last-updated"}},[t._v("#")]),t._v(" last-updated")]),t._v(" "),a("p",[t._v("추가시 게시글의 맨 밑에 게시글의 마지막 수정일이 기재됩니다.")]),t._v(" "),a("ol",[a("li",[t._v("설치")])]),t._v(" "),a("ul",[a("li",[t._v("yarn add -D @vuepress/plugin-last-updated")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("사용")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("export "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nplugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vuepress/google-analytics"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ga"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// UA-00000000-0")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vuepress/back-to-top"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sitemap"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hostname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://kyounghwan01.github.io/blog/"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vuepress/last-updated"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("TagLinks"),t._v(" "),a("Comment")],1)}),[],!1,null,null,null);s.default=e.exports}}]);