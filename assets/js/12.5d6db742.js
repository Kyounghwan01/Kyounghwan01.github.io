(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{404:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ajax-실행-단계"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ajax-실행-단계"}},[t._v("#")]),t._v(" Ajax 실행 단계")]),t._v(" "),a("p",[t._v("아래 순서대로 설명하겠습니다")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("XMLHttpRequest (요청) 객체 생성")]),t._v(" "),a("li",[t._v("처리 결과를 받을 이벤트 리스너 등록")]),t._v(" "),a("li",[t._v("서버로 보낼 데이터 생성")]),t._v(" "),a("li",[t._v("클라이언트와 서버 간의 연결 요청 준비 ("),a("code",[t._v("open()")]),t._v(" 메서드 사용)\n"),a("ol",[a("li",[t._v("서버로 보낼 데이터 전송방식 설정 (GET, POST)")]),t._v(" "),a("li",[t._v("서버 응답 방식 설정 (동기, 비동기)")])])]),t._v(" "),a("li",[t._v("실제 데이터 전송")]),t._v(" "),a("li",[t._v("응답 처리")]),t._v(" "),a("li",[t._v("데이터 처리")])])]),t._v(" "),a("h2",{attrs:{id:"_1-xmlhttprequest란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-xmlhttprequest란"}},[t._v("#")]),t._v(" 1. XMLHttpRequest란?")]),t._v(" "),a("blockquote",[a("p",[t._v("XMLHttpRequest 객체는 서버와 클라이언트 간 통신을 담당하는 객체입니다.\nAjax를 통해 서버통신을 할 때 가장 먼저 생성해야 할 객체입니다.")])]),t._v(" "),a("p",[t._v("아래는 XMLHttpRequest 객체를 생성하는 코드입니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xmlHttp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createXMLHTTPObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 브라우저에 따른 XMLHttpRequest 생성")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createXMLHTTPObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xhr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XMLHttpRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IE7+, 크롬, 사파리, 파폭, 오페라는 XMLHttpRequest 객체를 제공합니다.")]),t._v("\n    xhr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IE5,6 버전")]),t._v("\n    xhr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ActiveXObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Microsoft.XMLHTTP"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("위 코드는 mdn에도 나와 있는 초기 객체 생성의 공식같은 내용입니다.")]),t._v(" "),a("h3",{attrs:{id:"_1-1-xmlhttprequest의-주요-메서드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-xmlhttprequest의-주요-메서드"}},[t._v("#")]),t._v(" 1.1 XMLHttpRequest의 주요 메서드")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("open(method , url , async)")]),t._v(": return 없음\n두번째 매개변수 url이 요청 대상 url 입니다.\n첫번째 매개변수는 get,post로 나뉘며 get의 경우 두번째 url으로 부터 정보를 받습니다. post는 두번째 매개변수 url로 정보를 보냅니다.\n세번째 매개변수는 요청에 대한 응답을 기다리는 방식으로 true : 비동기 (기본값), false 동기 입니다.")]),t._v(" "),a("li",[a("code",[t._v("send(data)")]),t._v(": return 없음\nhttp 요청을 실제로 실행하는 메소드 (data : POST방식으로 보낼 데이터)\n이 메소드가 실행돼야 요청이 서버로 전달됩니다.")])]),t._v(" "),a("h3",{attrs:{id:"_1-2-xmlhttprequest의-주요-프로퍼티"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-xmlhttprequest의-주요-프로퍼티"}},[t._v("#")]),t._v(" 1.2 XMLHttpRequest의 주요 프로퍼티")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("readyState")]),t._v(":\n요청 상태를 나타내며, 이 프로퍼티를 이용하면 클라이언트와 서버간 데이터 통신이 현재 어디까지 진행됬는지 확인 가능합니다.\n0 : 초기화 되지 않은 상태\n1 : 로드되지 않은 상태 (즉, send() 메소드가 호출되지 않은 상태)\n2 : 로드된 상태, 헤더와 상태는 받았으나 아직 응답을 받지 못한 상태\n3 : 상호 작용 상태. 데이터의 일부분만 받은 상태\n4 : 완료 상태")]),t._v(" "),a("li",[a("code",[t._v("onreadystatechange")]),t._v(" :\n요청 상태가 변경될 때 발생하는 이벤트 입니다.")]),t._v(" "),a("li",[a("code",[t._v("responseText")]),t._v(" :\n서버 응답에 반환된 본문 콘텐츠 입니다")]),t._v(" "),a("li",[a("code",[t._v("responseXML")]),t._v(" :\n서버 응답이 xml이면 xml 본문 콘텐츠로 채워집니다.")]),t._v(" "),a("li",[a("code",[t._v("state")]),t._v(":\n서버 응답상태\n200 = 성공\n404 = 페이지를 찾을 수 없음")]),t._v(" "),a("li",[a("code",[t._v("statusText")]),t._v(" :\n응답으로 반환된 상태 메세지 입니다.")])]),t._v(" "),a("h2",{attrs:{id:"_2-처리-결과를-받을-이벤트-리스너-등록"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-처리-결과를-받을-이벤트-리스너-등록"}},[t._v("#")]),t._v(" 2. 처리 결과를 받을 이벤트 리스너 등록")]),t._v(" "),a("p",[t._v("위에 쓰인 "),a("code",[t._v("onreadystatechange")]),t._v(" 이벤트는 클라이언트와 서버 간의 데이터 전송 상태가 바뀔 때마다 발생하는 이벤트 입니다.\n즉, "),a("strong",[t._v("서버가 클라이언트에서 요청한 응답으로 보내는 데이터를 얻으려면 이 이벤트")]),t._v("를 사용해야한다는 것입니다. 이를 위해서는 먼저 실제 데이터 전송이 이뤄지기 전 이벤트 리스너를 등록해야 합니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("xmlHttp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onreadystatechange "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" on_ReadyStateChange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("이후 "),a("code",[t._v("open()")]),t._v(" 메소드 ( 연결 요청 준비 단계 )와 "),a("code",[t._v("send()")]),t._v(" 메소드 ( 실제 데이터 전송 )가 이루어지면 앞의 코드와 이벤트 리스너로 등록한 "),a("code",[t._v("on_ReadyStateChange()")]),t._v("리스너 함수가 실행되고 데이터를 주고 받는 과정에서 통신이 정상적으로 이루어 졌다면 그 통신의 시점만 알아내면 됩니다.")]),t._v(" "),a("p",[t._v("통신 시점의 상태 알아내는 코드")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 응답 처리")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on_ReadyStateChange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 0 = 초기화 전\n   * 1 = 로딩 중\n   * 2 = 로딩 됨\n   * 3 = 대화 상태\n   * 4 = 데이터 전송완료\n   */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4 = 데이터 전송완료")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xmlHttp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 200 = 통신 성공, 404 = 페이지가 존재하지 않음")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xmlHttp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n       * ----------------------------------\n       * 이 영역에서 서버에서 보낸 데이터를\n       * 타입(XML, JSON, CSV) 에 따라 처리\n       * ----------------------------------\n       */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error!."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("정상적으로 통신이 이루어졌다면 이때 서버에서 보내온 데이터가 담긴 responseText와 responseXML프로퍼티를 이용하면 됩니다.")]),t._v(" "),a("TagLinks"),t._v(" "),a("Comment")],1)}),[],!1,null,null,null);s.default=e.exports}}]);