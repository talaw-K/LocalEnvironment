function IncludeFee() {
  
  //**確認**注意**確認**注意****確認**注意**
  var feeRate = 0.82;
  //**確認**注意**確認**注意****確認**注意**
  
  /* シート情報 */
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName("Ads_pre");
  var allDate = sh.getDataRange().getValues();//全てのデータを取得-二次元配列
  var _ = Underscore.load();
  var arrTrans = _.zip.apply(_, allDate);
  
  var LastRow = sh.getLastRow();//最終行を取得
  
  for (var i = 1; i < LastRow; i++){
    var boo = arrTrans[3][i]/feeRate;
    sh.getRange(i+1,4).setNumberFormat("¥#,##0").setValue(boo);
  }
  sh.sort(1, true);//指定シート内2行目(日付)を昇順でソート//falseで降順
}
