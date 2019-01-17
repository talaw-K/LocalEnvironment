function sendMail(){
  /*コンテナバインド専用*/
  /* スタンドアロンにするとバグるので注意 */
  
  /* 計測開始 */
  var startTime = Moment.moment();
  
  /* 日付情報 */
  var time = Moment.moment();//時間取得
  var today = time.format('YYYY/MM/DD');//本日
  var yesterday = time.add('days', -1).format('YYYY/MM/DD');//昨日
  
  /* シート情報 */
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ssId = ss.getId();//スプレッドシートID
  var report = ss.getSheetByName("Report");//合計シート
  var mailList = ss.getSheetByName("MailList");//送信メアドリスト
  
  /* メール情報 */
  var accountName = report.getRange(2,1,1,1).getValue();//アカウント名
  var mailTitle = "【" + accountName + "】" + yesterday;//タイトル
  var mailSender = "株式会社ジーン"; //メール署名
  var mailFrom = "kamimura@jeane.jp"; //発信者
  
  /* メール本文 */
  var lastRow = mailList.getDataRange().getLastRow(); //シートの使用範囲のうち最終行を取得
  Logger.log(lastRow);
  for(var i=2;i<=lastRow;i++){
    
    //ここにIFを仕込んでD列にアドレスがなかったらスキップする処理を書く。
    
    var strTo= mailList.getRange(i,4).getValue(); //メールアドレス
    var companyName = mailList.getRange(i,1).getValue(); //社名
    var lastName = mailList.getRange(i,2).getValue();　//姓
    var firstName = mailList.getRange(i,3).getValue();　//名
    
    var getDay =  42 + report.getRange(2,4,1,1).getValue();//当日数値を取得(45行目+α行)  
    
    //リードセット
    var leads = report.getRange(getDay,9,1,1).getDisplayValue();//昨日
    var totalLeads = report.getRange(23,9,1,1).getDisplayValue();//今月合算
    var forcastLead = report.getRange(5,9,1,1).getDisplayValue();//着地見込み
    var lastMonthLead = report.getRange(22,9,1,1).getDisplayValue();//先月数値
    
    //受注セット
    var get = report.getRange(getDay,12,1,1).getDisplayValue();//昨日
    var totalGet = report.getRange(23,12,1,1).getDisplayValue();//今月合算
    var forcastGet = report.getRange(5,12,1,1).getDisplayValue();//着地見込み
    var lastMonthGet = report.getRange(22,12,1,1).getDisplayValue();//先月数値
    
    //受注率セット
    var getRate = report.getRange(getDay,13,1,1).getDisplayValue();//昨日
    var totalGetRate = report.getRange(23,13,1,1).getDisplayValue();//今月合算
    var lastMonthGetRate = report.getRange(22,13,1,1).getDisplayValue();//先月数値
    
    //受注単価セット
    var getCost = report.getRange(getDay,14,1,1).getDisplayValue();//昨日
    var totalGetCost = report.getRange(23,14,1,1).getDisplayValue();//今月合算
    var lastMonthGetCost = report.getRange(22,14,1,1).getDisplayValue();//先月数値
    
    //広告費セット
    var cost = report.getRange(getDay,6,1,1).getDisplayValue();//昨日
    var totalCost = report.getRange(23,6,1,1).getDisplayValue();//今月合算
    var forcastCost = report.getRange(5,6,1,1).getDisplayValue();;//着地見込み
    var lastMonthCost = report.getRange(22,6,1,1).getDisplayValue();//先月数値
  
  
  
  
  /* Googleドキュメント情報 */
  var docId = "1JcZxIO7-75RWXQ8CgiYv_y-GlLJ4taMnb2pIQ-Z5wcc";//マスタードキュメントのIDを取得
  var document　=　DocumentApp.openById(docId); //ドキュメントをIDで取得
  var docText　=　document.getBody().getText(); //ドキュメントの内容を取得
  var mailBody =　docText
  .replace(/{companyName}/,companyName)
  .replace(/{lastName}/,lastName)
  .replace(/{firstName}/,firstName)
  .replace(/{leads}/,leads)
  .replace(/{totalLeads}/,totalLeads)
  .replace(/{forcastLead}/,forcastLead)
  .replace(/{lastMonthLead}/,lastMonthLead)
  .replace(/{get}/,get)
  .replace(/{totalGet}/,totalGet)
  .replace(/{forcastGet}/,forcastGet)
  .replace(/{lastMonthGet}/,lastMonthGet)
  .replace(/{getRate}/,getRate)
  .replace(/{totalGetRate}/,totalGetRate)
  .replace(/{lastMonthGetRate}/,lastMonthGetRate)
  .replace(/{getCost}/,getCost)
  .replace(/{totalGetCost}/,totalGetCost)
  .replace(/{lastMonthGetCost}/,lastMonthGetCost)
  .replace(/{cost}/,cost)
  .replace(/{totalCost}/,totalCost)
  .replace(/{forcastCost}/,forcastCost)
  .replace(/{lastMonthCost}/,lastMonthCost)
  .replace(/{ssId}/,ssId);
  
  /* メール送信プログラムコア */
  GmailApp.sendEmail(
    strTo,                        //宛先
    mailTitle,                    //件名
    mailBody,{                    //本文
      from: mailFrom,             //送信者名
      name: mailSender,           //メール署名
    }
  );
}

/* 計測終了 */
var endTime = Moment.moment();//時間計測終了
var span_sec = (endTime - startTime)/1000;
Logger.log("処理時間は " + span_sec + " 秒でした" );

}
