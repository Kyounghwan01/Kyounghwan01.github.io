(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{397:function(e,t,r){"use strict";r.r(t);var a=r(25),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"window-yarn-fullyqualifiederrorid-unauthorizedaccess-오류"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#window-yarn-fullyqualifiederrorid-unauthorizedaccess-오류"}},[e._v("#")]),e._v(" window - yarn FullyQualifiedErrorId :UnauthorizedAccess 오류")]),e._v(" "),r("p",[e._v("window에서 npm 설치 이후 yarn을 설치하고, 파워쉘 또는 cmd에서 "),r("code",[e._v("yarn")]),e._v(" 명령어를 쳤을 떄 나오는 에러를 해결해봅니다.")]),e._v(" "),r("p",[e._v("애러는 아래와 같습니다")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("yarn : 이 시스템에서 스크립트를 실행할 수 없으므로 C:\\xxx/xxx/xx\\yarn.ps1 파일을 로드할 수 없습니다. 자세한 내용은 about_Execution_Policies(https://go.microsoft.com/fwlink/?LinkID=135170)를 참조하십시오. 위치 줄:1 문자:1 + yarn -v + ~~~~ + CategoryInfo : 보안 오류: (:) [], PSSecurityException + FullyQualifiedErrorId : UnauthorizedAccess\n")])])]),r("h2",{attrs:{id:"fix"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fix"}},[e._v("#")]),e._v(" fix")]),e._v(" "),r("ol",[r("li",[e._v("권리자 권한으로 파워쉘 실행합니다.")]),e._v(" "),r("li",[e._v("파워쉘에 "),r("code",[e._v("ExecutionPolicy")]),e._v(" 명령어를 쳐봅니다.")]),e._v(" "),r("li",[r("code",[e._v("Restricted")]),e._v("라고 뜬다면 보안 정책 위번으로 "),r("code",[e._v("yarn")]),e._v(" 뿐만 아니라 다른 글로벌 명령어도 모두 같은 에러로 실행이 되지 않습니다.")]),e._v(" "),r("li",[e._v("해결하기 위해 파워쉘에 "),r("code",[e._v("Set-ExecutionPolicy Unrestricted")]),e._v("를 실행합니다.")]),e._v(" "),r("li",[r("code",[e._v("Unrestricted")]),e._v("라 콘솔에 찍혔다면 파워쉘을 끄고, 다시 켠 후 "),r("code",[e._v("yarn")]),e._v("을 실행합니다.")])]),e._v(" "),r("TagLinks"),e._v(" "),r("Comment")],1)}),[],!1,null,null,null);t.default=i.exports}}]);