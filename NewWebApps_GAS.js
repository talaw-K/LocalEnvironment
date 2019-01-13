//アシスト機能
//Ctrl + space

function doGet() {
return HtmlService.createHtmlOutputFromFile('index');
}

/*
doGet関数
⇒　公開したウェブアプリケーションのURLにリクエスト(GET)があったときに起動する

HtmlService
⇒　GASでHTMLファイルを操作する機能を提供するサービス

createHtmlOutputFromFile
⇒指定したHTMLファイルからHtmlOutputオブジェクトを作成する

HtmlOutputオブジェクト
⇒サニタイズされたHTML
※サニタイズ　⇒　無害化


*/
