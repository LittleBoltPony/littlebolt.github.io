<?php
$theTime=time();

$myFile1 = "data/msg.txt";
$lines1 = file($myFile1);
$nofiNo = preg_replace( "/\r|\n/", "",  $lines1[0] );
$nofiMsg = $lines1[1];

$myFile2 = "data/error.txt";
$lines2 = file($myFile2);
$errorNo = preg_replace( "/\r|\n/", "",  $lines2[0] );
$errorMsg = $lines2[1];

?>

<script type="text/javascript" data-cfasync="true" src="main.js?v=<?php echo $theTime; ?>"></script>
<script>
var nofiNo = "<?php echo $nofiNo;?>";
var nofiMsg = "<?php echo $nofiMsg;?>";
var errorNo = "<?php echo $errorNo;?>";
var errorMsg = "<?php echo $errorMsg;?>";

var nofiDis = window.parent.document.getElementById('NotifClose').value;
var updateDis = window.parent.document.getElementById('UpdateClose').value;
var gameVer = window.parent.document.getElementById('gameVerTXT').value;

if (nofiMsg == "" || nofiNo == 0 || nofiDis == nofiNo){
	if (nofiNo == 0){
		window.parent.document.getElementById('NotifClose').value = "0";
	}
}else{
	window.parent.document.getElementById('NotifClose').value = nofiNo;
	window.parent.document.getElementById('notificaTion').style.display = '';
	window.parent.document.getElementById('notifMSG').innerHTML = nofiMsg;
}

if (errorNo == 1 && window.parent.document.getElementById('redMsg') != null){
	window.parent.document.getElementById('redMsg').style.display = '';
	window.parent.document.getElementById('redMsg').innerHTML = errorMsg;
}

if (gameVer == emotever || updateDis == 1){
}else{
	window.parent.document.getElementById('UpdateClose').value = "1";
	doNotif("1");
	window.parent.document.title = "(UPDATE) PonyTown Unofficial Emote Generator";
}

setTimeout(function(){
   window.location.reload(1);
}, 6000);

</script>