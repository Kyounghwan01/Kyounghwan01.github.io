(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{477:function(t,a,s){"use strict";s.r(a);var e=s(25),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git-squash로-여러-커밋-한줄로-줄이기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-squash로-여러-커밋-한줄로-줄이기"}},[t._v("#")]),t._v(" git squash로 여러 커밋 한줄로 줄이기")]),t._v(" "),s("p",[t._v("오늘은 git squash로 여러 커밋 한줄로 줄이는 방법에 대해서 알아보겠습니다!")]),t._v(" "),s("h2",{attrs:{id:"이-작업을-하는-이유"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이-작업을-하는-이유"}},[t._v("#")]),t._v(" 이 작업을 하는 이유")]),t._v(" "),s("p",[t._v("개발자들이 개발을 할 task를 할당 받으면 "),s("code",[t._v("master")]),t._v(" 브랜치에서 "),s("code",[t._v("feature")]),t._v(" 브랜치를 분리하고, 그곳에서 작업을 한 이후 "),s("code",[t._v("master")]),t._v("로 "),s("code",[t._v("merge")]),t._v("합니다.")]),t._v(" "),s("p",[t._v("이때 "),s("code",[t._v("feature")]),t._v("브랜치에 여러 커밋이 있다면 커밋 수면큼 "),s("code",[t._v("master")]),t._v("에 커밋이 늘어나게 되죠.")]),t._v(" "),s("p",[t._v("하나의 이슈에 하나의 커밋메세지만 있는게 맞자고 생각이 들기 때문에 "),s("code",[t._v("feature")]),t._v("브랜치에 하나의 커밋만 넣으려고 하면 꼭 놓치는 부분이 생기거나 추가 작업이 생기면서 커밋 수가 어쩔 수 없이 늘어가기도 합니다.")]),t._v(" "),s("p",[t._v("이럴 때, 지금 알려드리는 squash 기능을 이용하면 여러 커밋을 하나로 압축하여 merge하는 브랜치에 하나의 커밋으로 남길 수 있습니다.")]),t._v(" "),s("h2",{attrs:{id:"예시"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예시"}},[t._v("#")]),t._v(" 예시")]),t._v(" "),s("ol",[s("li",[t._v("master브랜치에서 feature 브랜치를 만듭니다")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git checkout -b feature/20201213/squash-test\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("feature 브랜치에 내부 값을 바꾸면서 여러 커밋을 남깁니다.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('// 현재 브랜치: feature/20201213/squash-test\n\ngit commit -m "commit 1"\ngit commit -m "commit 2"\ngit commit -m "commit 3"\n')])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("master 브랜치로 checkout")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git checout master\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("master 브랜치에서 feature 브랜치를 merge 함과 동시에 squash 실행")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 현재 브랜치: master\n\ngit merge --squash feature/20201213/squash-test\n")])])]),s("ul",[s("li",[t._v("이 작업을 하면 여러 커밋들이 하나로 뭉치면서 master에 커밋 하나로 들어갑니다.")])]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("squash 한 결과 commit")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('// 현재 브랜치: master\ngit commit -m "~"\n')])])]),s("p",[t._v("위 방법을 통해 깔끔한 커밋 메세지 관리 하시면 좋을 것 같습니다~~")]),t._v(" "),s("TagLinks"),t._v(" "),s("Comment")],1)}),[],!1,null,null,null);a.default=r.exports}}]);