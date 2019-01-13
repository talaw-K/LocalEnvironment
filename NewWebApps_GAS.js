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

/*
<!-- スクリプトタグは最後の方に -->
<!-- JS　記載場所 -->
<!-- ここから -->
<script>
function changeMessage() {
document.getElementById('hello').textContent = 'Hello JavaScript!';
}
</script>
<!-- Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>


<!-- ここまで -->

<!-- 外部ファイル -->
<!-- 
<link rel="styleshee" href="CSSファイルのURL">
<script src="JavaScriptファイルのURL"></script>
 -->
 
 <!--
 Content Delivery Network=ネット上で公開されている
 コンテンツやライブラリを効率よく配布するための仕組み
 HTML内にリンク情報などをコピペするだけで
 配布物を使用できる
-->
*/