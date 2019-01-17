function importYahooReport() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName("Ads_pre");
  var LastRow_first = Number(sh.getLastRow()+1);//記入の起点
  
  var folder = DriveApp.getFolderById("1UVE3663FlKKxJtqDltB_rQ4wrKreCpYM");
  var fileIT = folder.getFiles();//Iteratorのままだと操作できない。
  
  while(fileIT.hasNext()){　//hasNext = 未処理のファイルがあるか判別//未処理のファイルがある間
    var serchFile = fileIT.next(); //next 最初のファイル、二番目のファイル、と動的に変化する。
    var serchFileFileName = serchFile.getName();
    var serchFileFileId = serchFile.getId();
    
    
    var today = Moment.moment().format("YYYYMMDD");//momentは破壊的オブジェクトのため
    if (serchFileFileName == today + "_フレッツ光_Daily") {
      var ID = serchFileFileId;
      Logger.log(ID);
    }
  }
  var dailyReport = SpreadsheetApp.openById(ID).getActiveSheet();
  var foo = dailyReport.getDataRange().getValues();
  Logger.log(foo);
  sh.getRange(LastRow_first,1,foo.length,4).setValues(foo);
  

  sh.getRange(LastRow_first,5,foo.length,1).setValue("Search Network");
  sh.getRange(LastRow_first,6,foo.length,1).setValue("Yahoo");
  sh.deleteRow(LastRow_first);//最終行を削除
  
  var LastRow_second = Number(dailyReport.getLastRow());
  Logger.log(LastRow_second + LastRow_first -2);
  sh.deleteRow(LastRow_second + LastRow_first -2);//最終行を削除
  
  //sh.sort(1, true);//指定シート内2行目(日付)を昇順でソート//falseで降順
  

}
