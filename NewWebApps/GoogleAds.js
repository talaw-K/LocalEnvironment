function main() {

  //出力先指定
  var ss = SpreadsheetApp.openById("1DtnRy13kRAZhqmj8u_aS-bh9Pn-2qz1o5eiKl0QBx04");//出力先のスプレッドシートを開く
  var sh = ss.getSheetByName("Ads_pre");//出力先のシート名を指定

  //日時
  var date = new Date();
  var today = Utilities.formatDate(date, "JST", "yyyy/MM/dd");
  var yesterdayRaw = new Date(date.getTime() - 24 * 60 * 60 * 1000);
  var yesterday = Utilities.formatDate(yesterdayRaw, "JST", "yyyyMMdd");

  //出力
  var report = AdWordsApp.report("SELECT Date, Impressions, Clicks, Cost, AdNetworkType1 " +
    "FROM ACCOUNT_PERFORMANCE_REPORT " +
    "WHERE Impressions > 0 " +
    "DURING  20180101," + yesterday);


  report.exportToSheet(sh);//選択した項目をスプレッドシートへ出力

  var lastRow = sh.getLastRow();//最終行を取得

  sh.getRange(1, 6, 1, 1).setValue("Source").setFontWeight("bold");//A列の識別用の媒体列を追加
  sh.getRange(2, 6, lastRow - 1, 1).setValue("Google");//A列の識別用の媒体列を追加

  Logger.log("完了");
}
