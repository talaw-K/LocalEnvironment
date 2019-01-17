function deleteToday() {
 
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName("Ads_pre");
  var LastRow = Number(sh.getLastRow());//記入の起点
  
  var today = Moment.moment().format("YYYY/MM/DD");//momentは破壊的オブジェクトのため

  for (var i = LastRow ; i >= LastRow-30; i--){
    Logger.log(i);
    var checkDate = sh.getRange(i,1,1,1).getValue();
    var serchToday = Utilities.formatDate(checkDate,"JST","yyyy/MM/dd");
    
    if(serchToday == today ){
      sh.deleteRow(i);   
    }
  }
};
