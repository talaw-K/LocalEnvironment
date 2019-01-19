<?php
//print でも echo でも同じ挙動
print('hello World').'<br>';
echo('hello World').'<br>';

echo(PHP_INT_MAX).'<br>';
echo(PHP_INT_MAX+1).'<br>';

$name = "厳島";
echo '私は'.$name.'です'.'<br>';

//mktime という関数

$blog = mktime(15,30,0,2,10,2014);

if($blog>=time()-86400){
echo 'New!';
}else if($blog==time()-86400){
echo'soon';
}else{
echo'yet';
}

for ($i = 1;$i<=10;$i++){
echo $i."<br>";
}

$i = 1;
while ($i <= 10){
echo $i.'<br>';
$i++;
}

$i=0
switch($1){
case 0:
echo 'A';
break;
case 1:
echo 'B';
break;
case 2:
echo 'C'
break;
}


?>
