// This is the main JavaScript brain of the game/website. Feel free to use any of it for your own projects, most of it was found online easily.
// Please note the first few versions was made in a day when I was really sick, so I didn't put much care in the code at the time.

//Current Version
var emotever = "0.14.0";

//Change the footer info
var verNo1 = "version <b>" + emotever + "-alpha";
var verNo2 = "2018 <a href='http://littlebolt.me' target='_blank'>Little Bolt</a> | Not affiliated with <a href='https://pony.town' target='_blank'>Pony.Town</a><br><a href='https://pony.town' target='_blank'>Pony.Town</a> is &copy; <a href='https://twitter.com/Agamnentzar' target='_blank'>Agamnentzar</a>";

//Var all the stuff (To change the default for when index loads look for the resetLoader function near the bottom)
var aboutPage = 0;
var blush = "";
var cry = "";
var mouth = "";
var lefteye = "";
var righteye = "";
var brows = "";
var eyes = "";
var typeSwitcher = "typeSwitchAuto";

// 'stand' or 'sit' for the default position
var position = "stand";

var orient = 0;
var orlan = 0;

var blushtext = "";
var crytext = "";
var teartext = "";

var lefttext = "6";
var mouthtext = "w";
var righttext = "6";

var portblushtext = "";
var browstext = "";
var eyestext = ":";
var mouthporttext = ")";

var resetEyes = 0;
var selectedMode = 1;
var permEnabled = 0;
var iMoved = 0;

var randomOC = Math.floor((Math.random() * 2) + 1);
if (randomOC == 1){
	randomOC = "bolt";
}else{
	randomOC = "pizza";
}

//Load the index page and all the images on it.
function loadIndexPage(){	
	document.getElementById('theWebpage').innerHTML = "<center> <div id='topBar' class='topBar'> 	<img id='topLogo' class='topLogo' src='images/logo.png'> 	<div id='topHome' class='topHome' style='color: #ffffff;border-top: 4px solid white;padding-top: 16px;' onclick=''>Home</div> 	<div id='topAbout' class='topAbout' style='' onclick='loadAboutPage();history.pushState(null, null, \"about\");'>About</div> </div> </center>  <center> <div class='container'> <div class='app'>  <div id='MainBox1' class='MainBox1' style='float:left;'> 	<center> 	<div class='textBox' id='textBox'> 		<input type='text' name='emote' id='emote' onclick='clickEmoteBox();' readonly> 		<div id='OCBtn' class='OCBtn' onclick='ocList();'></div> 		<div id='resetBtn' class='resetBtn' onmouseover='resetMsgPopup(\"on\")' onmouseout='resetMsgPopup(\"off\")' onclick='doReset(\"all\");'></div> 		<div id='resetMsg' class='resetMsg' style='display:none;'></div> 		<div id='ocListScreen' class='ocListScreen' style='display:none;'> 			<div id='ocListBolt' class='ocListName' onclick='ocListClick(\"bolt\");'>Little Bolt</div> 			<div id='ocListPizza' class='ocListName' onclick='ocListClick(\"pizza\");'>PizzaPone</div> 		</div> 	</div> 	<br><br><br> 	<div class='ocBox' id='ocBox'> 	<div class='ocName' id='ocName'></div> 	<div class='ocPic' id='ocPic'> 	<div id='ocShadow' class='ocShadow'> 	<div id='ocBody' class='ocBody'> 		<div id='ocBlush' class='ocBlush' style='display:none;'></div> 		<div id='ocBothEye' class='ocBothEye' style='display:none;'></div> 		<div id='ocLeftEye' class='ocLeftEye' style=''></div> 		<div id='ocRightEye' class='ocRightEye' style=''></div> 		<div id='ocCry' class='ocCry' style='display:none;'></div> 		<div id='ocTear' class='ocTear' style='display:none;'></div> 		<div id='ocMouth' class='ocMouth' style=''></div> 	</div> 	</div> 	</div> 	</div> 	 	<div class='whiteButtonBox' id='whiteButtonBox'> 		<div class='whiteButton' id='ranButton' onclick='randomizeFace();'></div> 		<div class='whiteButton' id='revertButton' onclick='doReset(\"face\");'></div> 		<div class='whiteButton' id='saveButton' onclick='saveButton();'></div> 	</div> 	<div class='greenButton' id='greenButton' onclick='clickGreenButton();'></div> 	<div class='redButton' id='redButton' style='display:none;'></div> 	<div class='blueMsg' id='blueMsg' style='display:none;'></div> 	<div class='redMsg' id='redMsg' style='display:none;'></div> 	 	</center> </div>  <div id='MainBox2' class='MainBox2' style='float:left;'>  <div class='buttonContainer'> 	<div class='typeSwitch' id='typeSwitchAuto' onclick='typeSwitch(\"typeSwitchAuto\");'>Auto</div> 	<div class='typeSwitch' id='typeSwitchLan' onclick='typeSwitch(\"typeSwitchLan\");'>O_o</div> 	<div class='typeSwitch' id='typeSwitchPort' onclick='typeSwitch(\"typeSwitchPort\");'>:D</div> </div>  <div id='container2' class='container2'> <div class='perBox' id='perBox'> 	<p class='boxName'>Permanent</p> 	<div style='' class='CheckButton' id='PermButton' onclick='permButton()'></div> 	<div style='' class='PermText'><b>adds /e or equivalent</b></div> </div> <div class='aniBox' id='aniBox'> 	<p class='boxName'>Position</p> 	<div style='' class='aniButtonLeft' id='standButton' onclick='aniButton(\"stand\")'>stand</div> 	<div style='' class='aniButtonRight' id='sitButton' onclick='aniButton(\"sit\")'>sit</div> 	<div style='' class='posText'><b>does not affect game</b></div> </div> <p class='boxName'>Mouth</p> <div class='MouthBox' id='MouthBox'> 	<div style='' class='AButton' id='mouth1' onmouseover='MouthButtonOn(\"mouth1\")' onmouseout='MouthButtonOff(\"mouth1\")' onclick='MouthButton(\"mouth1\")'></div> 	<div style='' class='AButton' id='mouth2' onmouseover='MouthButtonOn(\"mouth2\")' onmouseout='MouthButtonOff(\"mouth2\")' onclick='MouthButton(\"mouth2\")'></div> 	<div style='' class='AButton' id='mouth3' onmouseover='MouthButtonOn(\"mouth3\")' onmouseout='MouthButtonOff(\"mouth3\")' onclick='MouthButton(\"mouth3\")'></div> 	<div style='' class='AButton' id='mouth4' onmouseover='MouthButtonOn(\"mouth4\")' onmouseout='MouthButtonOff(\"mouth4\")' onclick='MouthButton(\"mouth4\")'></div> 	<div style='' class='AButton' id='mouth5' onmouseover='MouthButtonOn(\"mouth5\")' onmouseout='MouthButtonOff(\"mouth5\")' onclick='MouthButton(\"mouth5\")'></div> 	<div style='' class='AButton' id='mouth6' onmouseover='MouthButtonOn(\"mouth6\")' onmouseout='MouthButtonOff(\"mouth6\")' onclick='MouthButton(\"mouth6\")'></div> 	<div style='' class='AButton' id='mouth7' onmouseover='MouthButtonOn(\"mouth7\")' onmouseout='MouthButtonOff(\"mouth7\")' onclick='MouthButton(\"mouth7\")'></div> 	<div style='' class='AButton' id='mouth8' onmouseover='MouthButtonOn(\"mouth8\")' onmouseout='MouthButtonOff(\"mouth8\")' onclick='MouthButton(\"mouth8\")'></div> 	<div style='' class='AButton' id='mouth9' onmouseover='MouthButtonOn(\"mouth9\")' onmouseout='MouthButtonOff(\"mouth9\")' onclick='MouthButton(\"mouth9\")'></div> 	<div style='' class='AButton' id='mouth10' onmouseover='MouthButtonOn(\"mouth10\")' onmouseout='MouthButtonOff(\"mouth10\")' onclick='MouthButton(\"mouth10\")'></div> 	<div style='' class='AButton' id='mouth11' onmouseover='MouthButtonOn(\"mouth11\")' onmouseout='MouthButtonOff(\"mouth11\")' onclick='MouthButton(\"mouth11\")'></div> 	<div style='' class='AButton' id='mouth12' onmouseover='MouthButtonOn(\"mouth12\")' onmouseout='MouthButtonOff(\"mouth12\")' onclick='MouthButton(\"mouth12\")'></div> 	<div style='' class='AButton' id='mouth13' onmouseover='MouthButtonOn(\"mouth13\")' onmouseout='MouthButtonOff(\"mouth13\")' onclick='MouthButton(\"mouth13\")'></div> 	<div style='' class='AButton' id='mouth15' onmouseover='MouthButtonOn(\"mouth15\")' onmouseout='MouthButtonOff(\"mouth15\")' onclick='MouthButton(\"mouth15\")'></div> 	<div style='' class='AButton' id='mouth16' onmouseover='MouthButtonOn(\"mouth16\")' onmouseout='MouthButtonOff(\"mouth16\")' onclick='MouthButton(\"mouth16\")'></div> 	<div style='' class='AButton' id='mouth17' onmouseover='MouthButtonOn(\"mouth17\")' onmouseout='MouthButtonOff(\"mouth17\")' onclick='MouthButton(\"mouth17\")'></div> 	<div style='' class='AButton' id='mouth18' onmouseover='MouthButtonOn(\"mouth18\")' onmouseout='MouthButtonOff(\"mouth18\")' onclick='MouthButton(\"mouth18\")'></div> 	<div style='' class='AButton' id='mouth19' onmouseover='MouthButtonOn(\"mouth19\")' onmouseout='MouthButtonOff(\"mouth19\")' onclick='MouthButton(\"mouth19\")'></div> 	<div style='' class='AButton' id='mouth20' onmouseover='MouthButtonOn(\"mouth20\")' onmouseout='MouthButtonOff(\"mouth20\")' onclick='MouthButton(\"mouth20\")'></div> 	<div style='' class='AButton' id='mouth21' onmouseover='MouthButtonOn(\"mouth21\")' onmouseout='MouthButtonOff(\"mouth21\")' onclick='MouthButton(\"mouth21\")'></div> 	<div style='' class='AButton' id='mouth22' onmouseover='MouthButtonOn(\"mouth22\")' onmouseout='MouthButtonOff(\"mouth22\")' onclick='MouthButton(\"mouth22\")'></div> 	<div style='' class='AButton' id='mouth23' onmouseover='MouthButtonOn(\"mouth23\")' onmouseout='MouthButtonOff(\"mouth23\")' onclick='MouthButton(\"mouth23\")'></div> </div> <br> <p class='boxName'>Blush</p> <div class='BlushBox' id='BlushBox'> 	<div style='' class='AButton' id='blushoff' onmouseover='BlushButtonOn(\"blushoff\")' onmouseout='BlushButtonOff(\"blushoff\")' onclick='BlushButton(\"blushoff\")'></div> 	<div style='' class='AButton' id='blushon' onmouseover='BlushButtonOn(\"blushon\")' onmouseout='BlushButtonOff(\"blushon\")' onclick='BlushButton(\"blushon\")'></div> </div> <br> <p id='cryBoxName' class='boxName'>Cry</p> <div class='CryBox' id='CryBox'> 	<div style='' class='AButton' id='cryoff' onmouseover='CryButtonOn(\"cryoff\")' onmouseout='CryButtonOff(\"cryoff\")' onclick='CryButton(\"cryoff\")'></div> 	<div style='' class='AButton' id='cryon' onmouseover='CryButtonOn(\"cryon\")' onmouseout='CryButtonOff(\"cryon\")' onclick='CryButton(\"cryon\")'></div> 	<div style='display:none;' class='AButton' id='crytear' onmouseover='CryButtonOn(\"crytear\")' onmouseout='CryButtonOff(\"crytear\")' onclick='CryButton(\"crytear\")'></div> </div>  <div id='hori'> <br> <p class='boxName'>Left Eye</p> <div class='LeftEyeBox' id=''> 	<div style='' class='AButton' id='lefteye1' onmouseover='LeftEyeButtonOn(\"lefteye1\")' onmouseout='LeftEyeButtonOff(\"lefteye1\")' onclick='LeftEyeButton(\"lefteye1\")'></div> 	<div style='' class='AButton' id='lefteye2' onmouseover='LeftEyeButtonOn(\"lefteye2\")' onmouseout='LeftEyeButtonOff(\"lefteye2\")' onclick='LeftEyeButton(\"lefteye2\")'></div> 	<div style='' class='AButton' id='lefteye3' onmouseover='LeftEyeButtonOn(\"lefteye3\")' onmouseout='LeftEyeButtonOff(\"lefteye3\")' onclick='LeftEyeButton(\"lefteye3\")'></div> 	<div style='' class='AButton' id='lefteye4' onmouseover='LeftEyeButtonOn(\"lefteye4\")' onmouseout='LeftEyeButtonOff(\"lefteye4\")' onclick='LeftEyeButton(\"lefteye4\")'></div> 	<div style='' class='AButton' id='lefteye5' onmouseover='LeftEyeButtonOn(\"lefteye5\")' onmouseout='LeftEyeButtonOff(\"lefteye5\")' onclick='LeftEyeButton(\"lefteye5\")'></div> 	<div style='' class='AButton' id='lefteye6' onmouseover='LeftEyeButtonOn(\"lefteye6\")' onmouseout='LeftEyeButtonOff(\"lefteye6\")' onclick='LeftEyeButton(\"lefteye6\")'></div> 	<div style='' class='AButton' id='lefteye7' onmouseover='LeftEyeButtonOn(\"lefteye7\")' onmouseout='LeftEyeButtonOff(\"lefteye7\")' onclick='LeftEyeButton(\"lefteye7\")'></div> 	<div style='' class='AButton' id='lefteye8' onmouseover='LeftEyeButtonOn(\"lefteye8\")' onmouseout='LeftEyeButtonOff(\"lefteye8\")' onclick='LeftEyeButton(\"lefteye8\")'></div> 	<div style='' class='AButton' id='lefteye9' onmouseover='LeftEyeButtonOn(\"lefteye9\")' onmouseout='LeftEyeButtonOff(\"lefteye9\")' onclick='LeftEyeButton(\"lefteye9\")'></div> 	<div style='' class='AButton' id='lefteye11' onmouseover='LeftEyeButtonOn(\"lefteye11\")' onmouseout='LeftEyeButtonOff(\"lefteye11\")' onclick='LeftEyeButton(\"lefteye11\")'></div> 	<div style='' class='AButton' id='lefteye12' onmouseover='LeftEyeButtonOn(\"lefteye12\")' onmouseout='LeftEyeButtonOff(\"lefteye12\")' onclick='LeftEyeButton(\"lefteye12\")'></div> 	<div style='' class='AButton' id='lefteye13' onmouseover='LeftEyeButtonOn(\"lefteye13\")' onmouseout='LeftEyeButtonOff(\"lefteye13\")' onclick='LeftEyeButton(\"lefteye13\")'></div> 	<div style='' class='AButton' id='lefteye14' onmouseover='LeftEyeButtonOn(\"lefteye14\")' onmouseout='LeftEyeButtonOff(\"lefteye14\")' onclick='LeftEyeButton(\"lefteye14\")'></div> 	<!--<div style='' class='AButton' id='lefteye15' onmouseover='LeftEyeButtonOn(\"lefteye15\")' onmouseout='LeftEyeButtonOff(\"lefteye15\")' onclick='LeftEyeButton(\"lefteye15\")'></div>--> 	<div style='' class='AButton' id='lefteye16' onmouseover='LeftEyeButtonOn(\"lefteye16\")' onmouseout='LeftEyeButtonOff(\"lefteye16\")' onclick='LeftEyeButton(\"lefteye16\")'></div> 	<div style='' class='AButton' id='lefteye17' onmouseover='LeftEyeButtonOn(\"lefteye17\")' onmouseout='LeftEyeButtonOff(\"lefteye17\")' onclick='LeftEyeButton(\"lefteye17\")'></div> 	<div style='' class='AButton' id='lefteye18' onmouseover='LeftEyeButtonOn(\"lefteye18\")' onmouseout='LeftEyeButtonOff(\"lefteye18\")' onclick='LeftEyeButton(\"lefteye18\")'></div> 	<div style='' class='AButton' id='lefteye19' onmouseover='LeftEyeButtonOn(\"lefteye19\")' onmouseout='LeftEyeButtonOff(\"lefteye19\")' onclick='LeftEyeButton(\"lefteye19\")'></div> 	<div style='' class='AButton' id='lefteye20' onmouseover='LeftEyeButtonOn(\"lefteye20\")' onmouseout='LeftEyeButtonOff(\"lefteye20\")' onclick='LeftEyeButton(\"lefteye20\")'></div> </div> <br> <p class='boxName'>Right Eye</p> <div class='RightEyeBox' id=''> 	<div style='' class='AButton' id='righteye1' onmouseover='RightEyeButtonOn(\"righteye1\")' onmouseout='RightEyeButtonOff(\"righteye1\")' onclick='RightEyeButton(\"righteye1\")'></div> 	<div style='' class='AButton' id='righteye2' onmouseover='RightEyeButtonOn(\"righteye2\")' onmouseout='RightEyeButtonOff(\"righteye2\")' onclick='RightEyeButton(\"righteye2\")'></div> 	<div style='' class='AButton' id='righteye3' onmouseover='RightEyeButtonOn(\"righteye3\")' onmouseout='RightEyeButtonOff(\"righteye3\")' onclick='RightEyeButton(\"righteye3\")'></div> 	<div style='' class='AButton' id='righteye4' onmouseover='RightEyeButtonOn(\"righteye4\")' onmouseout='RightEyeButtonOff(\"righteye4\")' onclick='RightEyeButton(\"righteye4\")'></div> 	<div style='' class='AButton' id='righteye5' onmouseover='RightEyeButtonOn(\"righteye5\")' onmouseout='RightEyeButtonOff(\"righteye5\")' onclick='RightEyeButton(\"righteye5\")'></div> 	<div style='' class='AButton' id='righteye6' onmouseover='RightEyeButtonOn(\"righteye6\")' onmouseout='RightEyeButtonOff(\"righteye6\")' onclick='RightEyeButton(\"righteye6\")'></div> 	<div style='' class='AButton' id='righteye7' onmouseover='RightEyeButtonOn(\"righteye7\")' onmouseout='RightEyeButtonOff(\"righteye7\")' onclick='RightEyeButton(\"righteye7\")'></div> 	<div style='' class='AButton' id='righteye8' onmouseover='RightEyeButtonOn(\"righteye8\")' onmouseout='RightEyeButtonOff(\"righteye8\")' onclick='RightEyeButton(\"righteye8\")'></div> 	<div style='' class='AButton' id='righteye9' onmouseover='RightEyeButtonOn(\"righteye9\")' onmouseout='RightEyeButtonOff(\"righteye9\")' onclick='RightEyeButton(\"righteye9\")'></div> 	<div style='' class='AButton' id='righteye11' onmouseover='RightEyeButtonOn(\"righteye11\")' onmouseout='RightEyeButtonOff(\"righteye11\")' onclick='RightEyeButton(\"righteye11\")'></div> 	<div style='' class='AButton' id='righteye12' onmouseover='RightEyeButtonOn(\"righteye12\")' onmouseout='RightEyeButtonOff(\"righteye12\")' onclick='RightEyeButton(\"righteye12\")'></div> 	<div style='' class='AButton' id='righteye13' onmouseover='RightEyeButtonOn(\"righteye13\")' onmouseout='RightEyeButtonOff(\"righteye13\")' onclick='RightEyeButton(\"righteye13\")'></div> 	<div style='' class='AButton' id='righteye14' onmouseover='RightEyeButtonOn(\"righteye14\")' onmouseout='RightEyeButtonOff(\"righteye14\")' onclick='RightEyeButton(\"righteye14\")'></div> 	<!--<div style='' class='AButton' id='righteye15' onmouseover='RightEyeButtonOn(\"righteye15\")' onmouseout='RightEyeButtonOff(\"righteye15\")' onclick='RightEyeButton(\"righteye15\")'></div>--> 	<div style='' class='AButton' id='righteye16' onmouseover='RightEyeButtonOn(\"righteye16\")' onmouseout='RightEyeButtonOff(\"righteye16\")' onclick='RightEyeButton(\"righteye16\")'></div> 	<div style='' class='AButton' id='righteye17' onmouseover='RightEyeButtonOn(\"righteye17\")' onmouseout='RightEyeButtonOff(\"righteye17\")' onclick='RightEyeButton(\"righteye17\")'></div> 	<div style='' class='AButton' id='righteye18' onmouseover='RightEyeButtonOn(\"righteye18\")' onmouseout='RightEyeButtonOff(\"righteye18\")' onclick='RightEyeButton(\"righteye18\")'></div> 	<div style='' class='AButton' id='righteye19' onmouseover='RightEyeButtonOn(\"righteye19\")' onmouseout='RightEyeButtonOff(\"righteye19\")' onclick='RightEyeButton(\"righteye19\")'></div> 	<div style='' class='AButton' id='righteye20' onmouseover='RightEyeButtonOn(\"righteye20\")' onmouseout='RightEyeButtonOff(\"righteye20\")' onclick='RightEyeButton(\"righteye20\")'></div> </div> </div>  <div id='port' style='display:none;'> <br> <p class='boxName'>Brows</p> <div class='BrowsBox' id='BrowsBox'> 	<div style='' class='AButton' id='browsoff' onmouseover='BrowsButtonOn(\"browsoff\")' onmouseout='BrowsButtonOff(\"browsoff\")' onclick='BrowsButton(\"browsoff\")'></div> 	<div style='' class='AButton' id='browsangry' onmouseover='BrowsButtonOn(\"browsangry\")' onmouseout='BrowsButtonOff(\"browsangry\")' onclick='BrowsButton(\"browsangry\")'></div> 	<div style='' class='AButton' id='browssad' onmouseover='BrowsButtonOn(\"browssad\")' onmouseout='BrowsButtonOff(\"browssad\")' onclick='BrowsButton(\"browssad\")'></div> 	<div style='' class='AButton' id='browsunhappy' onmouseover='BrowsButtonOn(\"browsunhappy\")' onmouseout='BrowsButtonOff(\"browsunhappy\")' onclick='BrowsButton(\"browsunhappy\")'></div> </div> <br> <p class='boxName'>Eyes</p> <div class='EyesBox' id='EyesBox'> 	<div style='' class='AButton' id='eyes1' onmouseover='EyesButtonOn(\"eyes1\")' onmouseout='EyesButtonOff(\"eyes1\")' onclick='EyesButton(\"eyes1\")'></div> 	<div style='' class='AButton' id='eyes2' onmouseover='EyesButtonOn(\"eyes2\")' onmouseout='EyesButtonOff(\"eyes2\")' onclick='EyesButton(\"eyes2\")'></div> 	<div style='' class='AButton' id='eyes3' onmouseover='EyesButtonOn(\"eyes3\")' onmouseout='EyesButtonOff(\"eyes3\")' onclick='EyesButton(\"eyes3\")'></div> 	<div style='' class='AButton' id='eyes4' onmouseover='EyesButtonOn(\"eyes4\")' onmouseout='EyesButtonOff(\"eyes4\")' onclick='EyesButton(\"eyes4\")'></div> 	<div style='' class='AButton' id='eyes5' onmouseover='EyesButtonOn(\"eyes5\")' onmouseout='EyesButtonOff(\"eyes5\")' onclick='EyesButton(\"eyes5\")'></div> 	<div style='' class='AButton' id='eyes7' onmouseover='EyesButtonOn(\"eyes7\")' onmouseout='EyesButtonOff(\"eyes7\")' onclick='EyesButton(\"eyes7\")'></div> 	<div style='' class='AButton' id='eyes8' onmouseover='EyesButtonOn(\"eyes8\")' onmouseout='EyesButtonOff(\"eyes8\")' onclick='EyesButton(\"eyes8\")'></div> </div> </div> </div> </div> </div> </div> </center>  <center><table id='footer' class='footer'><tr><td valign='top'> 	<font size='2'><br><div class='verNo1' id='verNo1'>Loading...</div></font> </td><td valign='top'> 	<font size='2'><br><div class='verNo2' id='verNo2'>Loading...</div></font> </td></tr></table></center> <br>";
	aboutPage = 0;
	permEnabled = 0;
	
	document.getElementById('verNo1').innerHTML = verNo1;
	document.getElementById('verNo2').innerHTML = verNo2;
	document.getElementById('greenButton').innerHTML = "<b>Copy to ClipBoard</b>";
	document.getElementById('ranButton').innerHTML = "Randomize";
	document.getElementById('revertButton').innerHTML = "Revert";
	document.getElementById('saveButton').innerHTML = "Save Pic";
	
	setInterval(function(){
	if(window.innerWidth < 1100){
		document.getElementById('MainBox1').style.float="";
		document.getElementById('MainBox2').style.float="";
		document.getElementById('topHome').style.left="120px";
		document.getElementById('topAbout').style.left="200px";
		document.getElementById('ocListScreen').style.left = "198px";
		//document.getElementById('ocBox').style.height="300px";
		//document.getElementById('ocBox').style.width="300px";
	}else{
		document.getElementById('MainBox1').style.float="left";
		document.getElementById('MainBox2').style.float="left";
		document.getElementById('topHome').style.left="420px";
		document.getElementById('topAbout').style.left="500px";
		document.getElementById('ocListScreen').style.left = "382px";
		//document.getElementById('ocBox').style.height="400px";
		//document.getElementById('ocBox').style.width="400px";
	}},300);
	
	document.getElementById('typeSwitchLan').style.left = "68px";
	document.getElementById('typeSwitchPort').style.left = "133px";
	document.getElementById('ocListScreen').style.left = "382px";
	
	document.getElementById('resetBtn').innerHTML = "<img style='pointer-events: none;' src='images/bin.png'>";
	document.getElementById('OCBtn').innerHTML = "<img style='pointer-events: none;' src='images/down.png'>";
	
	document.getElementById('PermButton').style.backgroundImage = "url('images/checkoff.png')";
	
	document.getElementById('blushoff').style.top = "0px";
	document.getElementById('blushoff').style.left = "0px";
	
	document.getElementById('blushon').style.top = "0px";
	document.getElementById('blushon').style.left = "50px";
	
	document.getElementById('cryoff').style.top = "0px";
	document.getElementById('cryoff').style.left = "0px";
	
	document.getElementById('cryon').style.top = "0px";
	document.getElementById('cryon').style.left = "50px";
	
	document.getElementById('crytear').style.top = "0px";
	document.getElementById('crytear').style.left = "100px";
	
	//document.getElementById('mouth1').style.backgroundPosition = "0px 0px";
	
	document.getElementById('mouth1').style.top = "0px";
	document.getElementById('mouth1').style.left = "0px";
	
	document.getElementById('mouth2').style.top = "0px";
	document.getElementById('mouth2').style.left = "50px";
	
	document.getElementById('mouth3').style.top = "0px";
	document.getElementById('mouth3').style.left = "100px";
	
	document.getElementById('mouth4').style.top = "0px";
	document.getElementById('mouth4').style.left = "150px";
	
	document.getElementById('mouth5').style.top = "0px";
	document.getElementById('mouth5').style.left = "200px";
	
	document.getElementById('mouth6').style.top = "0px";
	document.getElementById('mouth6').style.left = "250px";
	
	document.getElementById('mouth7').style.top = "0px";
	document.getElementById('mouth7').style.left = "300px";
	
	document.getElementById('mouth8').style.top = "0px";
	document.getElementById('mouth8').style.left = "350px";
	
	document.getElementById('mouth9').style.top = "0px";
	document.getElementById('mouth9').style.left = "400px";
	
	document.getElementById('mouth10').style.top = "0px";
	document.getElementById('mouth10').style.left = "450px";
	
	document.getElementById('mouth11').style.top = "50px";
	document.getElementById('mouth11').style.left = "0px";
	
	document.getElementById('mouth12').style.top = "50px";
	document.getElementById('mouth12').style.left = "50px";
	
	document.getElementById('mouth13').style.top = "50px";
	document.getElementById('mouth13').style.left = "100px";
	
	document.getElementById('mouth15').style.top = "50px";
	document.getElementById('mouth15').style.left = "150px";
	
	document.getElementById('mouth16').style.top = "50px";
	document.getElementById('mouth16').style.left = "200px";
	
	document.getElementById('mouth17').style.top = "50px";
	document.getElementById('mouth17').style.left = "250px";
	
	document.getElementById('mouth18').style.top = "50px";
	document.getElementById('mouth18').style.left = "300px";
	
	document.getElementById('mouth19').style.top = "50px";
	document.getElementById('mouth19').style.left = "350px";
	
	document.getElementById('mouth20').style.top = "50px";
	document.getElementById('mouth20').style.left = "400px";
	
	document.getElementById('mouth21').style.top = "50px";
	document.getElementById('mouth21').style.left = "450px";

	document.getElementById('mouth22').style.top = "100px";
	document.getElementById('mouth22').style.left = "0px";
	
	document.getElementById('mouth23').style.top = "100px";
	document.getElementById('mouth23').style.left = "50px";

	document.getElementById('lefteye1').style.top = "0px";
	document.getElementById('lefteye1').style.left = "0px";
	
	document.getElementById('lefteye2').style.top = "0px";
	document.getElementById('lefteye2').style.left = "50px";
	
	document.getElementById('lefteye3').style.top = "0px";
	document.getElementById('lefteye3').style.left = "100px";
	
	document.getElementById('lefteye4').style.top = "0px";
	document.getElementById('lefteye4').style.left = "150px";
	
	document.getElementById('lefteye5').style.top = "0px";
	document.getElementById('lefteye5').style.left = "200px";
	
	document.getElementById('lefteye6').style.top = "0px";
	document.getElementById('lefteye6').style.left = "250px";
	
	document.getElementById('lefteye7').style.top = "0px";
	document.getElementById('lefteye7').style.left = "300px";
	
	document.getElementById('lefteye8').style.top = "0px";
	document.getElementById('lefteye8').style.left = "350px";
	
	document.getElementById('lefteye9').style.top = "0px";
	document.getElementById('lefteye9').style.left = "400px";
	
	document.getElementById('lefteye11').style.top = "0px";
	document.getElementById('lefteye11').style.left = "450px";
	
	document.getElementById('lefteye12').style.top = "50px";
	document.getElementById('lefteye12').style.left = "0px";
	
	document.getElementById('lefteye13').style.top = "50px";
	document.getElementById('lefteye13').style.left = "50px";
	
	document.getElementById('lefteye14').style.top = "50px";
	document.getElementById('lefteye14').style.left = "100px";
	
	document.getElementById('lefteye16').style.top = "50px";
	document.getElementById('lefteye16').style.left = "200px";
	
	document.getElementById('lefteye17').style.top = "50px";
	document.getElementById('lefteye17').style.left = "150px";
	
	document.getElementById('lefteye18').style.top = "50px";
	document.getElementById('lefteye18').style.left = "250px";
	
	document.getElementById('lefteye19').style.top = "50px";
	document.getElementById('lefteye19').style.left = "300px";
	
	document.getElementById('lefteye20').style.top = "50px";
	document.getElementById('lefteye20').style.left = "350px";
	
	document.getElementById('righteye1').style.top = "0px";
	document.getElementById('righteye1').style.left = "0px";

	document.getElementById('righteye2').style.top = "0px";
	document.getElementById('righteye2').style.left = "50px";
	
	document.getElementById('righteye3').style.top = "0px";
	document.getElementById('righteye3').style.left = "100px";
	
	document.getElementById('righteye4').style.top = "0px";
	document.getElementById('righteye4').style.left = "150px";
	
	document.getElementById('righteye5').style.top = "0px";
	document.getElementById('righteye5').style.left = "200px";
	
	document.getElementById('righteye6').style.top = "0px";
	document.getElementById('righteye6').style.left = "250px";
	
	document.getElementById('righteye7').style.top = "0px";
	document.getElementById('righteye7').style.left = "300px";
	
	document.getElementById('righteye8').style.top = "0px";
	document.getElementById('righteye8').style.left = "350px";
	
	document.getElementById('righteye9').style.top = "0px";
	document.getElementById('righteye9').style.left = "400px";
	
	document.getElementById('righteye11').style.top = "0px";
	document.getElementById('righteye11').style.left = "450px";
	
	document.getElementById('righteye12').style.top = "50px";
	document.getElementById('righteye12').style.left = "0px";
	
	document.getElementById('righteye13').style.top = "50px";
	document.getElementById('righteye13').style.left = "50px";
	
	document.getElementById('righteye14').style.top = "50px";
	document.getElementById('righteye14').style.left = "100px";
	
	document.getElementById('righteye16').style.top = "50px";
	document.getElementById('righteye16').style.left = "200px";
	
	document.getElementById('righteye17').style.top = "50px";
	document.getElementById('righteye17').style.left = "150px";
	
	document.getElementById('righteye18').style.top = "50px";
	document.getElementById('righteye18').style.left = "250px";
	
	document.getElementById('righteye19').style.top = "50px";
	document.getElementById('righteye19').style.left = "300px";
	
	document.getElementById('righteye20').style.top = "50px";
	document.getElementById('righteye20').style.left = "350px";
	
	document.getElementById('browsoff').style.top = "0px";
	document.getElementById('browsoff').style.left = "0px";
	
	document.getElementById('browsangry').style.top = "0px";
	document.getElementById('browsangry').style.left = "50px";
	
	document.getElementById('browssad').style.top = "0px";
	document.getElementById('browssad').style.left = "100px";
	
	document.getElementById('browsunhappy').style.top = "0px";
	document.getElementById('browsunhappy').style.left = "150px";
	
	document.getElementById('eyes1').style.top = "0px";
	document.getElementById('eyes1').style.left = "0px";
	
	document.getElementById('eyes2').style.top = "0px";
	document.getElementById('eyes2').style.left = "50px";
	
	document.getElementById('eyes3').style.top = "0px";
	document.getElementById('eyes3').style.left = "100px";
	
	document.getElementById('eyes4').style.top = "0px";
	document.getElementById('eyes4').style.left = "150px";
	
	document.getElementById('eyes5').style.top = "0px";
	document.getElementById('eyes5').style.left = "200px";
	
	document.getElementById('eyes7').style.top = "0px";
	document.getElementById('eyes7').style.left = "250px";
	
	document.getElementById('eyes8').style.top = "0px";
	document.getElementById('eyes8').style.left = "300px";
	
	document.getElementById('ocName').style.backgroundImage = "url('images/" + randomOC + "name.png')";
	
	if (randomOC == "bolt"){
		document.getElementById('ocListBolt').classList.add("ocListSelected");
	}else if (randomOC == "pizza"){
		document.getElementById('ocListPizza').classList.add("ocListSelected");
	}
	
	loadPos();
	loadBtns();
	window.setInterval(compat, 100);
	doReset("loaded");
}

//Load the about page
function loadAboutPage(){
	document.getElementById('theWebpage').innerHTML = "<center> <div id='topBar' class='topBar'> 	<img id='topLogo' class='topLogo' style='cursor: pointer;' src='images/logo.png' onclick='loadIndexPage();history.pushState(null, null, \"home\");'> 	<div id='topHome' class='topHome' style='' onclick='loadIndexPage();history.pushState(null, null, \"home\");'>Home</div> 	<div id='topAbout' class='topAbout' style='color: #ffffff;border-top: 4px solid white;padding-top: 16px;' onclick=''>About</div> </div> </center>  <center> <div class='container'> <div class='app'> <div id='MainBox3' class='MainBox3' style='float:left;'>  <p class='aboutTitle'>About</p> The idea behind this generator was people in <a href='https://pony.town' target='_blank'>Pony.Town</a> asking others how you do certain emotes, instead of trying to remember all the emotes I built this. I designed it base heavily off of PonyTown's character creation screen. This gives this generator a familiar feel for those who play <a href='https://pony.town' target='_blank'>Pony.Town</a><br><br>The PonyTown Unofficial Emote Generator is not affiliated with <a href='https://pony.town' target='_blank'>Pony.Town</a> or its creators, <a href='https://pony.town' target='_blank'>Pony.Town</a> is &copy; <a href='https://twitter.com/Agamnentzar' target='_blank'>Agamnentzar</a>.  <p class='aboutTitle'>Technology</p> This generator is written mostly in Javascript and a very little amount of PHP, made using Notepad++ and is being run on my home server, which is a Asustor Nas.  <p class='aboutTitle'>Contributors / Specal Thanks</p> <div class='theTeam'> <div id='littlebolt' class='teamProfile'> 	<img class='teamPic' src='images/team/bolt.png'> 	<div class='teamName'>Little Bolt</div> 	<div class='teamLink'><a href='http://littlebolt.me' target='_blank'>website</a> | <a href='https://twitter.com/littleboltpony' target='_blank'>twitter</a></div> 	<div class='teamInfo'>Creator / Programmer</div> </div> <div id='aggie' class='teamProfile'> 	<img class='teamPic' src='images/team/aggie.png'> 	<div class='teamName'>Agamnentzar</div> 	<div class='teamLink'><a href='http://agamnentzar.deviantart.com/' target='_blank'>deviantart</a> | <a href='http://agamnentzar.tumblr.com/' target='_blank'>tumblr</a></div> 	<div class='teamInfo'>Created PonyTown</div> </div> <div id='T57' class='teamProfile'> 	<img class='teamPic' src='images/team/t57.png'> 	<div class='teamName'>T57_DuM1</div> 	<div class='teamLink'><a href='https://twitter.com/T57_DuM1' target='_blank'>twitter</a> | <a href='https://docs.google.com/spreadsheets/d/11Z-os4xltQyIELuVhYFH4NoFfCbTz76CBdH7y9oFttA/htmlview' target='_blank'>emote guide</a></div> 	<div class='teamInfo'>Support / Ideas</div> </div> <div id='bytewave' class='teamProfile'> 	<img class='teamPic' src='images/team/bytewave.png'> 	<div class='teamName'>Bytewave</div> 	<div class='teamLink'><a href='https://bytewave.antigravities.net/' target='_blank'>website</a> | <a href='https://twitter.com/BytewaveMLP' target='_blank'>twitter</a></div> 	<div class='teamInfo'>Support / Programming</div> </div> </div>  <p class='aboutTitle'>Help / FAQ</p> <p class='aboutQ'>Something looks a little glitchy or broken?</p> <p class='aboutA'>Try clearing your cache, if that doesn't work try a different browser or device. (Note some animations are broken in IE, Edge and Firefox, I know.)</p> <p class='aboutQ'>What does the 'Auto' / 'O_o' / ':D' buttons mean?</p> <p class='aboutA'>These buttons allow you to choose how you want the emote generator to work. There are two types of emotes. Vertical Emotes (O_o) and Horizontal Emotes (:D). Auto allows you too choose any mouth/eye/ect and the generator will adapted based around if PonyTown supports that emote in Vertical or Horizontal (Horizontal Prefered). Pressing 'O_o' will change the generator to only show vertical emotes and pressing ':D' will only show horizontal emotes.</p> <p class='aboutQ'>Why does the Permanent button changed from a white check-mark to a Red one or a Red Cross?</p> <p class='aboutA'>The white check-mark means permanent is enabled, a Red one means that its disabled but has been forced on by the selected face. The Red Cross means that its enabled but has been forced off by the selected face.</p> <p class='aboutQ'>Why do some things disappear when I click something else (eg if I blush I can't cry)?</p> <p class='aboutA'>This is because 1 of 2 reasons.<br>&nbsp;1. I don't currently support both of the options so one is removed.<br>&nbsp;2. PonyTown doesn't support both of the options so again one is removed.<br>The same goes with any that change to a red X.</p> <p class='aboutQ'>When I click on the 'Copy to Clipboard' Button it goes red and says 'Auto copy is not compatible on this device', why?</p> <p class='aboutA'>This is because 1 of 2 reasons.<br>&nbsp;1. Your browser or OS is too old to support auto copy.<br>&nbsp;2. Your browser or OS does not allow auto copy.<br>For example Apple's iOS does not allow auto copy and forces you to only use the devices built in copy and paste function.</p> <p class='aboutQ'>I click on the 'Save Pic' button and the screen is just blank?</p> <p class='aboutA'>Your browser doesn't support this feature, sorry.</p> <p class='aboutQ'>I click on the image created but nothing happens or it closes instantly?</p> <p class='aboutA'>Your adblocker is closing the tab/window, disable it for this site or white-list this site should fix that.</p> <p class='aboutQ'>Why does it look so much like PonyTown?</p> <p class='aboutA'>User friendlyness. Most people who use this are players of PonyTown, so making this look like PonyTown allows the generator to feel familiar and a part of PonyTown.</p> <p class='aboutQ'>Do you have Emote Guide to help me instead?</p> <p class='aboutA'>No sorry I don't, but T57-DuM1 does and I recommend it: <a href='https://docs.google.com/spreadsheets/d/11Z-os4xltQyIELuVhYFH4NoFfCbTz76CBdH7y9oFttA/htmlview' target='_blank'>Emote Guide</a></p> <p class='aboutQ'>Will you open source this?</p> <p class='aboutA'>Maybe.</p> <p class='aboutQ'>Can I contribute to this?</p> <p class='aboutA'>Feel free to send me any feedback or advice (including bugs). You can do so on my Twitter or better my Discord/Discord Server.</p> <p class='aboutQ'>How can I contact you?</p> <p class='aboutA'>Email '<b>littleboltpony@icloud.com</b>', you can Tweet me but I don't always see it.</p>  </div> <div id='MainBox4' class='MainBox4' style='float:left;'>  <p class='aboutTitle'>Changelog?</p> I won't be updating this for every update. <br>I may also forget what I added and when I added it :p  <p class='aboutQ'>v0.14.0</p> <p class='aboutA'>Added character name preview.</p> <p class='aboutA'>Added highlight for current pony name on pony selection list.</p> <p class='aboutQ'>v0.13.5</p> <p class='aboutA'>Fixed blush and tear on oc not showing when selected.</p> <p class='aboutQ'>v0.13.1</p> <p class='aboutA'>Fixed somethings in the sit pics, you may need to clear your cache to see them.</p> <p class='aboutQ'>v0.13.0</p> <p class='aboutA'>Secret Unleashed. You can now choose between standing and sitting.</p> <p class='aboutQ'>v0.12.0</p> <p class='aboutA'>Secret, Hmmmmm</p> <p class='aboutQ'>v0.11.6</p> <p class='aboutA'>Fixed some bugs with some of the faces.</p> <p class='aboutQ'>v0.11.5</p> <p class='aboutA'>Added 'Revert' button, its like the reset button. Fixed blur in 'Save Pic'. Added message when forced to use permanent or when permanent is forced off.</p> <p class='aboutQ'>v0.11.1</p> <p class='aboutA'>Fixed PizzaPones right eye when you save picture. Also added a warning message when /blush and /e are both turned on.</p> <p class='aboutQ'>v0.11.0</p> <p class='aboutA'>Added a 'Save Pic' button, creates a picture of the OC and their current face.</p> <p class='aboutQ'>v0.10.0</p> <p class='aboutA'>You can now choose between Little Bolt and PizzaPone, it will randomly choose one to begin with but you can change it</p> <p class='aboutQ'>v0.9.0</p> <p class='aboutA'>Added Permanent button (/e) and added a Randomize button for a random face</p> <p class='aboutQ'>v0.8.10</p> <p class='aboutA'>Changed the selection buttons to be PizzaPone not Little Bolt, to match the OC</p> <p class='aboutQ'>v0.8.8</p> <p class='aboutA'>Combined the home page with the about page</p> <p class='aboutQ'>v0.8.7</p> <p class='aboutA'>Added eyes I didn't know existed (Thanks T57_Dum1)</p> <p class='aboutQ'>v0.8.6</p> <p class='aboutA'>Added this about page</p> <p class='aboutQ'>v0.8.5</p> <p class='aboutA'>Animated the crying emote</p> <p class='aboutQ'>v0.8.3</p> <p class='aboutA'>PizzaPone will scroll with you if the page is too big</p> <p class='aboutQ'>v0.8.0</p> <p class='aboutA'>Added new eyes, fixed certain eyes crying</p> <p class='aboutQ'>v0.7.5</p> <p class='aboutA'>Added the 'Reset' button</p> <p class='aboutQ'>v0.7.0</p> <p class='aboutA'>Added the manual selection of Auto/Veritcal/Horizontal Emotes</p> <p class='aboutQ'>v0.6.0</p> <p class='aboutA'>Added the PizzaPone OC display, added more eyes, added crying and tears</p> <p class='aboutQ'>v0.5.0</p> <p class='aboutA'>Added the 'Auto Copy' button</p> <p class='aboutQ'>v???</p> <p class='aboutA'>Can't remember V0.3.0 or V0.4.0</p> <p class='aboutQ'>v0.2.0</p> <p class='aboutA'>Added more faces</p> <p class='aboutQ'>v0.1.0</p> <p class='aboutA'>Here it is</p>  </div> </div> </div> </center>  <center><table id='footer' class='footer'><tr><td valign='top'> 	<font size='2'><br><div class='verNo1' id='verNo1'>Loading...</div></font> </td><td valign='top'> 	<font size='2'><br><div class='verNo2' id='verNo2'>Loading...</div></font> </td></tr></table></center> <br>";
	aboutPage = 1;
	
	document.getElementById('verNo1').innerHTML = verNo1;
	document.getElementById('verNo2').innerHTML = verNo2;
	
	document.getElementById('littlebolt').style.top = "0px";
	document.getElementById('littlebolt').style.left = "0px";
	
	document.getElementById('aggie').style.top = "0px";
	document.getElementById('aggie').style.left = "300px";
	
	document.getElementById('T57').style.top = "115px";
	document.getElementById('T57').style.left = "0px";
	
	document.getElementById('bytewave').style.top = "115px";
	document.getElementById('bytewave').style.left = "300px";
	
	setInterval(function(){
	if(window.innerWidth < 1100){
		document.getElementById('MainBox3').style.float="";
		document.getElementById('MainBox4').style.float="";
		document.getElementById('MainBox4').style.width="600px";
		document.getElementById('topHome').style.left="120px";
		document.getElementById('topAbout').style.left="200px";
	}else{
		document.getElementById('MainBox3').style.float="left";
		document.getElementById('MainBox4').style.float="left";
		document.getElementById('MainBox4').style.width="413px";
		document.getElementById('topHome').style.left="420px";
		document.getElementById('topAbout').style.left="500px";
	}},300);
}

//Loads the face selection buttons images based on which oc is active
function loadBtns(){
	document.getElementById('blushoff').style.backgroundImage = "url('images/off.png')";
	document.getElementById('blushon').style.backgroundImage = "url('images/" + randomOC + "/blush/2.png')";
	document.getElementById('cryoff').style.backgroundImage = "url('images/off.png')";
	document.getElementById('cryon').style.backgroundImage = "url('images/" + randomOC + "/blush/3.png')";
	document.getElementById('crytear').style.backgroundImage = "url('images/" + randomOC + "/blush/4.png')";
	
	//document.getElementById('mouth1').style.backgroundImage = "url('images/pizzabtn.png')";
	
	document.getElementById('mouth1').style.backgroundImage = "url('images/" + randomOC + "/mouth/1.png')";
	document.getElementById('mouth2').style.backgroundImage = "url('images/" + randomOC + "/mouth/2.png')";
	document.getElementById('mouth3').style.backgroundImage = "url('images/" + randomOC + "/mouth/3.png')";
	document.getElementById('mouth4').style.backgroundImage = "url('images/" + randomOC + "/mouth/4.png')";
	document.getElementById('mouth5').style.backgroundImage = "url('images/" + randomOC + "/mouth/5.png')";
	document.getElementById('mouth6').style.backgroundImage = "url('images/" + randomOC + "/mouth/6.png')";
	document.getElementById('mouth7').style.backgroundImage = "url('images/" + randomOC + "/mouth/7.png')";
	document.getElementById('mouth8').style.backgroundImage = "url('images/" + randomOC + "/mouth/8.png')";
	document.getElementById('mouth9').style.backgroundImage = "url('images/" + randomOC + "/mouth/9.png')";
	document.getElementById('mouth10').style.backgroundImage = "url('images/" + randomOC + "/mouth/24.png')";
	document.getElementById('mouth11').style.backgroundImage = "url('images/" + randomOC + "/mouth/11.png')";
	document.getElementById('mouth12').style.backgroundImage = "url('images/" + randomOC + "/mouth/12.png')";
	document.getElementById('mouth13').style.backgroundImage = "url('images/" + randomOC + "/mouth/13.png')";
	document.getElementById('mouth15').style.backgroundImage = "url('images/" + randomOC + "/mouth/15.png')";
	document.getElementById('mouth16').style.backgroundImage = "url('images/" + randomOC + "/mouth/16.png')";
	document.getElementById('mouth17').style.backgroundImage = "url('images/" + randomOC + "/mouth/18.png')";
	document.getElementById('mouth18').style.backgroundImage = "url('images/" + randomOC + "/mouth/19.png')";
	document.getElementById('mouth19').style.backgroundImage = "url('images/" + randomOC + "/mouth/20.png')";
	document.getElementById('mouth20').style.backgroundImage = "url('images/" + randomOC + "/mouth/21.png')";
	document.getElementById('mouth21').style.backgroundImage = "url('images/" + randomOC + "/mouth/22.png')";
	document.getElementById('mouth22').style.backgroundImage = "url('images/" + randomOC + "/mouth/23.png')";
	document.getElementById('mouth23').style.backgroundImage = "url('images/" + randomOC + "/mouth/25.png')";
	document.getElementById('lefteye1').style.backgroundImage = "url('images/" + randomOC + "/lefteye/1.png')";
	document.getElementById('lefteye2').style.backgroundImage = "url('images/" + randomOC + "/lefteye/2.png')";
	document.getElementById('lefteye3').style.backgroundImage = "url('images/" + randomOC + "/lefteye/3.png')";
	document.getElementById('lefteye4').style.backgroundImage = "url('images/" + randomOC + "/lefteye/4.png')";
	document.getElementById('lefteye5').style.backgroundImage = "url('images/" + randomOC + "/lefteye/5.png')";
	document.getElementById('lefteye6').style.backgroundImage = "url('images/" + randomOC + "/lefteye/6.png')";
	document.getElementById('lefteye7').style.backgroundImage = "url('images/" + randomOC + "/lefteye/7.png')";
	document.getElementById('lefteye8').style.backgroundImage = "url('images/" + randomOC + "/lefteye/8.png')";
	document.getElementById('lefteye9').style.backgroundImage = "url('images/" + randomOC + "/lefteye/9.png')";
	document.getElementById('lefteye11').style.backgroundImage = "url('images/" + randomOC + "/lefteye/11.png')";
	document.getElementById('lefteye12').style.backgroundImage = "url('images/" + randomOC + "/lefteye/12.png')";
	document.getElementById('lefteye13').style.backgroundImage = "url('images/" + randomOC + "/lefteye/13.png')";
	document.getElementById('lefteye14').style.backgroundImage = "url('images/" + randomOC + "/lefteye/14.png')";
	document.getElementById('lefteye16').style.backgroundImage = "url('images/" + randomOC + "/lefteye/16.png')";
	document.getElementById('lefteye17').style.backgroundImage = "url('images/" + randomOC + "/lefteye/17.png')";
	document.getElementById('lefteye18').style.backgroundImage = "url('images/" + randomOC + "/lefteye/18.png')";
	document.getElementById('lefteye19').style.backgroundImage = "url('images/" + randomOC + "/lefteye/19.png')";
	document.getElementById('lefteye20').style.backgroundImage = "url('images/" + randomOC + "/lefteye/20.png')";
	document.getElementById('righteye1').style.backgroundImage = "url('images/" + randomOC + "/righteye/1.png')";
	document.getElementById('righteye2').style.backgroundImage = "url('images/" + randomOC + "/righteye/2.png')";
	document.getElementById('righteye3').style.backgroundImage = "url('images/" + randomOC + "/righteye/3.png')";
	document.getElementById('righteye4').style.backgroundImage = "url('images/" + randomOC + "/righteye/4.png')";
	document.getElementById('righteye5').style.backgroundImage = "url('images/" + randomOC + "/righteye/5.png')";
	document.getElementById('righteye6').style.backgroundImage = "url('images/" + randomOC + "/righteye/6.png')";
	document.getElementById('righteye7').style.backgroundImage = "url('images/" + randomOC + "/righteye/7.png')";
	document.getElementById('righteye8').style.backgroundImage = "url('images/" + randomOC + "/righteye/8.png')";
	document.getElementById('righteye9').style.backgroundImage = "url('images/" + randomOC + "/righteye/9.png')";
	document.getElementById('righteye11').style.backgroundImage = "url('images/" + randomOC + "/righteye/11.png')";
	document.getElementById('righteye12').style.backgroundImage = "url('images/" + randomOC + "/righteye/12.png')";
	document.getElementById('righteye13').style.backgroundImage = "url('images/" + randomOC + "/righteye/13.png')";
	document.getElementById('righteye14').style.backgroundImage = "url('images/" + randomOC + "/righteye/14.png')";
	document.getElementById('righteye16').style.backgroundImage = "url('images/" + randomOC + "/righteye/16.png')";
	document.getElementById('righteye17').style.backgroundImage = "url('images/" + randomOC + "/righteye/17.png')";
	document.getElementById('righteye18').style.backgroundImage = "url('images/" + randomOC + "/righteye/18.png')";
	document.getElementById('righteye19').style.backgroundImage = "url('images/" + randomOC + "/righteye/19.png')";
	document.getElementById('righteye20').style.backgroundImage = "url('images/" + randomOC + "/righteye/20.png')";
	document.getElementById('browsoff').style.backgroundImage = "url('images/off.png')";
	document.getElementById('browsangry').style.backgroundImage = "url('images/" + randomOC + "/eyes/9.png')";
	document.getElementById('browssad').style.backgroundImage = "url('images/" + randomOC + "/eyes/10.png')";
	document.getElementById('browsunhappy').style.backgroundImage = "url('images/" + randomOC + "/eyes/11.png')";
	document.getElementById('eyes1').style.backgroundImage = "url('images/" + randomOC + "/eyes/1.png')";
	document.getElementById('eyes2').style.backgroundImage = "url('images/" + randomOC + "/eyes/2.png')";
	document.getElementById('eyes3').style.backgroundImage = "url('images/" + randomOC + "/eyes/3.png')";
	document.getElementById('eyes4').style.backgroundImage = "url('images/" + randomOC + "/eyes/4.png')";
	document.getElementById('eyes5').style.backgroundImage = "url('images/" + randomOC + "/eyes/5.png')";
	document.getElementById('eyes7').style.backgroundImage = "url('images/" + randomOC + "/eyes/7.png')";
	document.getElementById('eyes8').style.backgroundImage = "url('images/" + randomOC + "/eyes/8.png')";
}

//Loads which body position and shadow position based on which position is active
function loadPos(){
	document.getElementById('standButton').className = "aniButtonLeft";
	document.getElementById('sitButton').className = "aniButtonRight";
	if (position == "stand"){
		document.getElementById('standButton').className = "aniButtonLeftActive";
		document.getElementById('ocBody').style.backgroundImage = "url('images/" + randomOC + "/oc/body.png')";
		if (iMoved == 0){
			document.getElementById('ocShadow').style.backgroundImage = "url('images/" + randomOC + "/oc/bshadow.png')";
		}else{
			document.getElementById('ocShadow').style.backgroundImage = "url('images/" + randomOC + "/oc/bmove.png')";
		}
	}else if(position == "sit"){
		document.getElementById('sitButton').className = "aniButtonRightActive";
		document.getElementById('ocBody').style.backgroundImage = "url('images/" + randomOC + "/oc/bodysit.png')";
		if (iMoved == 0){
			document.getElementById('ocShadow').style.backgroundImage = "url('images/" + randomOC + "/oc/bshadowsit.png')";
		}else{
			document.getElementById('ocShadow').style.backgroundImage = "url('images/" + randomOC + "/oc/bmovesit.png')";
		}
	}
}

//If someone uses the back and foward button in browser
$(window).on('popstate', function(){
	console.log(location.pathname);
	if (location.pathname == "/ponytown-beta/home" || location.pathname == "/ponytown/home"){
		loadIndexPage();
	}else if (location.pathname == "/ponytown-beta/about" || location.pathname == "/ponytown/about"){
		loadAboutPage();
	}
});

//Checks the browser scroll amount and adjusts the oc to say on screen
$(window).scroll(function() {
	var scrollTop = $(this).scrollTop();
	if (scrollTop > 280){
		var bodyHeight = document.getElementById('ocPic').style.top;
		var newHeight = scrollTop - 180;
		iMoved = 1;
		loadPos();
		document.getElementById('ocPic').style.top = newHeight + "px";
	}else{
		iMoved = 0;
		loadPos();
		document.getElementById('ocPic').style.top = "100px";
	}
});

//What to do when the position buttons are pressed
function aniButton(data){
	if (data == "stand"){
		position = "stand";
		loadPos();
	}else if(data == "sit"){
		position = "sit";
		loadPos();
	}
}

// Old save pic function (new window)
function oldsaveButton(){
	var isFirefox = typeof InstallTrigger !== 'undefined';
	var isEdge = !isIE && !!window.StyleMedia;
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	
	if (!isFirefox && !isEdge && !isIE){
		var myWindow = window.open('');
	}
	
	document.getElementById('ocShadow').style.backgroundImage = "url('')";
	
	html2canvas($("#ocPic"), {
		onrendered: function(canvas) {
			var dataUri = canvas.toDataURL("img/png");
			var blob = dataURItoBlob(dataUri);
			var blobUri = URL.createObjectURL(blob);
			
			if (isFirefox || isEdge || isIE){
				window.open(blobUri);
			}else{
				myWindow.location = blobUri;
			}	
		},
	});
	loadPos();
}

// When save pic button is pressed, creates image
function saveButton(){
	document.getElementById('ocShadow').style.backgroundImage = "url('')";
	
	html2canvas($("#ocPic"), {
		onrendered: function(canvas) {
			var dataUri = canvas.toDataURL("img/png");
			var blob = dataURItoBlob(dataUri);
			var blobUri = URL.createObjectURL(blob);
			document.getElementById('savePicBox').style.display = "";
			document.getElementById('savePicBox').innerHTML = "<table style='width:100%; height:100%;'><tr><td align='center'><div class='saveImgBox'><div id='closePic' class='closePic' onclick='closePic();'></div><a href='" + blobUri + "' target='blank'><img src='" + blobUri + "' style='background-color:white;'></a></div></td></tr></table>";
		},
	});
	loadPos();
}

// Converts base64 to blob, thanks Bytewave :D
function dataURItoBlob(dataURI) {
		// convert base64 to raw binary data held in a string
		// doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
		var byteString = atob(dataURI.split(',')[1]);
		
		// separate out the mime component
		var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
		
		// write the bytes of the string to an ArrayBuffer
		var ab = new ArrayBuffer(byteString.length);

		// create a view into the buffer
		var ia = new Uint8Array(ab);
		
		// set the bytes of the buffer to the correct values
		for (var i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}

	// write the ArrayBuffer to a blob, and you're done
	var blob = new Blob([ab], {type: mimeString});
	return blob;
}

// Closes picture overlay
function closePic(){
	document.getElementById('savePicBox').style.display = "none";
	document.getElementById('savePicBox').innerHTML = "";
}

// Saves sreenshot, not in use just for fun
function saveScreen(){
	var isFirefox = typeof InstallTrigger !== 'undefined';
	var isEdge = !isIE && !!window.StyleMedia;
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	
	if (!isFirefox && !isEdge && !isIE){
		var myWindow = window.open('');
	}
	
	html2canvas($("#theWebpage"), {
		onrendered: function(canvas) {
			var myImage = canvas.toDataURL("img/png");
			
			if (isFirefox || isEdge || isIE){
				window.open(myImage);
			}else{
				myWindow.location = myImage;
			}
		},
		background: '#333333',
	});
}

var input = document.getElementById('myTextInput');

// When user clicks the oc dropdown menu
function ocList(){
	if (document.getElementById('ocListScreen').style.display == ""){
		document.getElementById('ocListScreen').style.display = "none"
	}else{
		document.getElementById('ocListScreen').style.display = "";
		document.getElementById('ocListBolt').style.top = "5px";
		document.getElementById('ocListPizza').style.top = "35px";
	}
}

// When user clicks an oc to change too
function ocListClick(data){
	if (data == "bolt"){
		randomOC = "bolt";
		document.getElementById('ocName').style.backgroundImage = "url('images/" + randomOC + "name.png')";
		document.getElementById('ocListBolt').classList.add("ocListSelected");
		document.getElementById('ocListPizza').classList.remove("ocListSelected");
		loadPos();
		loadBtns();
		updateAll();
	}else{
		randomOC = "pizza";
		document.getElementById('ocName').style.backgroundImage = "url('images/" + randomOC + "name.png')";
		document.getElementById('ocListBolt').classList.remove("ocListSelected");
		document.getElementById('ocListPizza').classList.add("ocListSelected");
		loadPos();
		loadBtns();
		updateAll();
	}
}

// When user clicks on screen
window.onclick = function(event) {
	if (!event.target.matches('.OCBtn')) {
		document.getElementById('ocListScreen').style.display = "none"
	}
}

//What happens when you click the randomize button
function randomizeFace(){
	doReset("buttons");
	var ranMouth = Math.floor((Math.random() * 22) + 1);
	var ranLeftEye = Math.floor((Math.random() * 19) + 1);
	var ranRightEye = Math.floor((Math.random() * 19) + 1);
	var ranEyes = Math.floor((Math.random() * 7) + 1);
	var ranBrows = Math.floor((Math.random() * 4) + 1);
	var ranBlush = Math.floor((Math.random() * 2) + 1);
	var ranCry = Math.floor((Math.random() * 3) + 1);
	
	console.log(ranMouth + " / " + ranLeftEye + " / " + ranRightEye + " / " + ranEyes + " / " + ranBrows + " / " + ranBlush + " / " + ranCry);
	
	if (ranMouth >=14){
		ranMouth++
	}
	if (ranLeftEye >=10){
		ranLeftEye++
	}
	if (ranRightEye >=10){
		ranRightEye++
	}
	if (ranEyes >=6){
		ranEyes++
	}
	
	if (ranBrows == 1){
		brows = "browsoff";
	}else if (ranBrows == 2){
		brows = "browsangry";
	}else if (ranBrows == 3){
		brows = "browssad";
	}else if (ranBrows == 4){
		brows = "browsunhappy";
	}
	
	if (ranBlush == 1){
		blush = "blushoff";
	}else if (ranBlush == 2){
		blush = "blushon";
	}
	
	if (ranCry == 1){
		cry = "cryoff";
	}else if (ranCry == 2){
		cry = "cryon";
	}else if (ranCry == 3){
		cry = "crytear";
	}
	
	ranMouth = "mouth" + ranMouth
	ranLeftEye = "lefteye" + ranLeftEye
	ranRightEye = "righteye" + ranRightEye
	ranEyes = "eyes" + ranEyes
	
	mouth = ranMouth;
	lefteye = ranLeftEye;
	righteye = ranRightEye;
	eyes = ranEyes;
	
	LeftEyeButton(lefteye);
	RightEyeButton(righteye);
}

//What happens when you click the textbox
function clickEmoteBox(){
	document.getElementById('emote').select();
	document.getElementById('emote').setSelectionRange(0, 9999);
}

//what happens when you click the green button/auto copy
function clickGreenButton(){
	document.getElementById('emote').select();
	if(document.queryCommandEnabled("copy")){
		document.execCommand("copy")
		document.getElementById('greenButton').innerHTML = "<img src='images/check.png'> <b>Copied</b>";
		setTimeout(function(){
			document.getElementById('greenButton').innerHTML = "<b>Copy to ClipBoard</b>";
		}, 4000);
	}else{
		document.getElementById('redButton').innerHTML = "Auto copy is not compatible on this device.";
		document.getElementById('redButton').style.display = "";
		document.getElementById('greenButton').style.display = "none";	
	}
	document.getElementById('emote').blur();
}

//What happens when you click the emote switcher (auto O_o :D)
function typeSwitch(no){
	document.getElementById('typeSwitchAuto').style.backgroundColor = "";
	document.getElementById('typeSwitchAuto').style.color = "#ca7e4e";
	document.getElementById('typeSwitchLan').style.backgroundColor = "";
	document.getElementById('typeSwitchLan').style.color = "#ca7e4e";
	document.getElementById('typeSwitchPort').style.backgroundColor = "";
	document.getElementById('typeSwitchPort').style.color = "#ca7e4e";
	
	typeSwitcher == no;
	
	if (no == "typeSwitchAuto"){
		selectedMode = 1;
		orient = 0;
		orlan = 0;
		document.getElementById('mouth12').style.top = "50px";
		document.getElementById('mouth12').style.left = "50px";
		document.getElementById('mouth13').style.top = "50px";
		document.getElementById('mouth13').style.left = "100px";
		document.getElementById('mouth22').style.top = "100px";
		document.getElementById('mouth22').style.left = "0px";
		document.getElementById('mouth21').style.top = "50px";
		document.getElementById('mouth21').style.left = "450px";
		document.getElementById('mouth23').style.top = "100px";
		document.getElementById('mouth23').style.left = "50px";
		document.getElementById('MouthBox').style.height = "150px";
		document.getElementById('mouth3').style.display = "";
		document.getElementById('mouth5').style.display = "";
		document.getElementById('mouth6').style.display = "";
		document.getElementById('mouth7').style.display = "";
		document.getElementById('mouth10').style.display = "";
		document.getElementById('mouth11').style.display = "";
		document.getElementById('mouth15').style.display = "";
		document.getElementById('mouth16').style.display = "";
		document.getElementById('mouth17').style.display = "";
		document.getElementById('mouth18').style.display = "";
		document.getElementById('mouth19').style.display = "";
		document.getElementById('mouth20').style.display = "";
		document.getElementById('mouth23').style.display = "";
	}else if(no == "typeSwitchLan"){
		selectedMode = 2;
		orient = 0;
		orlan = 1;
		document.getElementById('mouth12').style.top = "0px";
		document.getElementById('mouth12').style.left = "200px";
		document.getElementById('mouth13').style.top = "0px";
		document.getElementById('mouth13').style.left = "250px";
		document.getElementById('mouth22').style.top = "0px";
		document.getElementById('mouth22').style.left = "300px";
		document.getElementById('mouth21').style.top = "0px";
		document.getElementById('mouth21').style.left = "450px";
		document.getElementById('MouthBox').style.height = "50px";
		document.getElementById('mouth3').style.display = "";
		document.getElementById('mouth5').style.display = "none";
		document.getElementById('mouth6').style.display = "none";
		document.getElementById('mouth7').style.display = "none";
		document.getElementById('mouth10').style.display = "none";
		document.getElementById('mouth11').style.display = "none";
		document.getElementById('mouth15').style.display = "none";
		document.getElementById('mouth16').style.display = "none";
		document.getElementById('mouth17').style.display = "none";
		document.getElementById('mouth18').style.display = "none";
		document.getElementById('mouth19').style.display = "none";
		document.getElementById('mouth20').style.display = "none";
		document.getElementById('mouth23').style.display = "none";
	}else if(no == "typeSwitchPort"){
		selectedMode = 3;
		orient = 3;
		orlan = 0;
		document.getElementById('mouth12').style.top = "50px";
		document.getElementById('mouth12').style.left = "50px";
		document.getElementById('mouth13').style.top = "50px";
		document.getElementById('mouth13').style.left = "100px";
		document.getElementById('mouth22').style.top = "100px";
		document.getElementById('mouth22').style.left = "0px";
		document.getElementById('mouth23').style.top = "0px";
		document.getElementById('mouth23').style.left = "100px";
		document.getElementById('mouth21').style.top = "50px";
		document.getElementById('mouth21').style.left = "450px";
		document.getElementById('MouthBox').style.height = "150px";
		document.getElementById('mouth3').style.display = "none";
		document.getElementById('mouth5').style.display = "";
		document.getElementById('mouth6').style.display = "";
		document.getElementById('mouth7').style.display = "";
		document.getElementById('mouth10').style.display = "";
		document.getElementById('mouth11').style.display = "";
		document.getElementById('mouth15').style.display = "";
		document.getElementById('mouth16').style.display = "";
		document.getElementById('mouth17').style.display = "";
		document.getElementById('mouth18').style.display = "";
		document.getElementById('mouth19').style.display = "";
		document.getElementById('mouth20').style.display = "";
		document.getElementById('mouth23').style.display = "";
	}
	updateAll();
}

//Permanted button
function permButton(){
	if (permEnabled == 0){
		permEnabled = 1;
	}else{
		permEnabled = 0;
	}
	updateAll();
}

//Mouse over blush buttons
function BlushButtonOn(no){
	if (blush == no){
	}else{
		document.getElementById(no).style.backgroundColor = "#444444";
	}
}
//Mouse off blush buttons
function BlushButtonOff(no){
	if (blush == no){
	}else{
		document.getElementById(no).style.backgroundColor = "#212121";
	}
}

//Mouse over cry buttons
function CryButtonOn(no){
	if (cry == no){
	}else{
		document.getElementById(no).style.backgroundColor = "#444444";
	}
}
//Mouse off cry buttons
function CryButtonOff(no){
	if (cry == no){
	}else{
		document.getElementById(no).style.backgroundColor = "#212121";
	}
}

//Mouse over mouth buttons
function MouthButtonOn(no){
	if (mouth == no){
	}else{
		document.getElementById(no).style.backgroundColor = "#444444";
	}
}
//Mouse off mouth buttons
function MouthButtonOff(no){
	if (mouth == no){
	}else{
		document.getElementById(no).style.backgroundColor = "#212121";
	}
}

//Mouse over left eye buttons
function LeftEyeButtonOn(no){
	if (lefteye == no){
	}else{
		document.getElementById(no).style.backgroundColor = "#444444";
	}
}
//Mouse off left eye buttons
function LeftEyeButtonOff(no){
	if (lefteye == no){
	}else{
		document.getElementById(no).style.backgroundColor = "#212121";
	}
}

//Mouse over right eye buttons
function RightEyeButtonOn(no){
	if (righteye == no){
	}else{
		document.getElementById(no).style.backgroundColor = "#444444";
	}
}
//Mouse off right eye buttons
function RightEyeButtonOff(no){
	if (righteye == no){
	}else{
		document.getElementById(no).style.backgroundColor = "#212121";
	}
}

//Click the blush buttons
function BlushButton(no){
	document.getElementById('blushoff').style.backgroundColor = "#212121";
	document.getElementById('blushon').style.backgroundColor = "#212121";
	blush = no;
	updateAll();
}

//Click the cry buttons
function CryButton(no){
	document.getElementById('cryoff').style.backgroundColor = "#212121";
	document.getElementById('cryon').style.backgroundColor = "#212121";
	document.getElementById('crytear').style.backgroundColor = "#212121";
	cry = no;
	updateAll();
}

//Click the mouth buttons
function MouthButton(no){
	document.getElementById('mouth1').style.backgroundColor = "#212121";
	document.getElementById('mouth2').style.backgroundColor = "#212121";
	document.getElementById('mouth3').style.backgroundColor = "#212121";
	document.getElementById('mouth4').style.backgroundColor = "#212121";
	document.getElementById('mouth5').style.backgroundColor = "#212121";
	document.getElementById('mouth6').style.backgroundColor = "#212121";
	document.getElementById('mouth7').style.backgroundColor = "#212121";
	document.getElementById('mouth8').style.backgroundColor = "#212121";
	document.getElementById('mouth9').style.backgroundColor = "#212121";
	document.getElementById('mouth10').style.backgroundColor = "#212121";
	document.getElementById('mouth11').style.backgroundColor = "#212121";
	document.getElementById('mouth12').style.backgroundColor = "#212121";
	document.getElementById('mouth13').style.backgroundColor = "#212121";
	document.getElementById('mouth15').style.backgroundColor = "#212121";
	document.getElementById('mouth16').style.backgroundColor = "#212121";
	document.getElementById('mouth17').style.backgroundColor = "#212121";
	document.getElementById('mouth18').style.backgroundColor = "#212121";
	document.getElementById('mouth19').style.backgroundColor = "#212121";
	document.getElementById('mouth20').style.backgroundColor = "#212121";
	document.getElementById('mouth21').style.backgroundColor = "#212121";
	document.getElementById('mouth22').style.backgroundColor = "#212121";
	document.getElementById('mouth23').style.backgroundColor = "#212121";
	mouth = no;
	updateAll();
}

//Click the left eye buttons
function LeftEyeButton(no){
	document.getElementById('lefteye1').style.backgroundColor = "#212121";
	document.getElementById('lefteye2').style.backgroundColor = "#212121";
	document.getElementById('lefteye3').style.backgroundColor = "#212121";
	document.getElementById('lefteye4').style.backgroundColor = "#212121";
	document.getElementById('lefteye5').style.backgroundColor = "#212121";
	document.getElementById('lefteye6').style.backgroundColor = "#212121";
	document.getElementById('lefteye7').style.backgroundColor = "#212121";
	document.getElementById('lefteye8').style.backgroundColor = "#212121";
	document.getElementById('lefteye9').style.backgroundColor = "#212121";
	document.getElementById('lefteye11').style.backgroundColor = "#212121";
	document.getElementById('lefteye12').style.backgroundColor = "#212121";
	document.getElementById('lefteye13').style.backgroundColor = "#212121";
	document.getElementById('lefteye14').style.backgroundColor = "#212121";
	//document.getElementById('lefteye15').style.backgroundColor = "#212121";
	document.getElementById('lefteye16').style.backgroundColor = "#212121";
	document.getElementById('lefteye17').style.backgroundColor = "#212121";
	document.getElementById('lefteye18').style.backgroundColor = "#212121";
	document.getElementById('lefteye19').style.backgroundColor = "#212121";
	document.getElementById('lefteye20').style.backgroundColor = "#212121";
	lefteye = no;
	
	if (resetEyes == 1){
		document.getElementById('righteye1').style.backgroundColor = "#212121";
		document.getElementById('righteye2').style.backgroundColor = "#212121";
		document.getElementById('righteye3').style.backgroundColor = "#212121";
		document.getElementById('righteye4').style.backgroundColor = "#212121";
		document.getElementById('righteye5').style.backgroundColor = "#212121";
		document.getElementById('righteye6').style.backgroundColor = "#212121";
		document.getElementById('righteye7').style.backgroundColor = "#212121";
		document.getElementById('righteye8').style.backgroundColor = "#212121";
		document.getElementById('righteye9').style.backgroundColor = "#212121";
		document.getElementById('righteye11').style.backgroundColor = "#212121";
		document.getElementById('righteye12').style.backgroundColor = "#212121";
		document.getElementById('righteye13').style.backgroundColor = "#212121";
		document.getElementById('righteye14').style.backgroundColor = "#212121";
		//document.getElementById('righteye15').style.backgroundColor = "#212121";
		document.getElementById('righteye16').style.backgroundColor = "#212121";
		document.getElementById('righteye17').style.backgroundColor = "#212121";
		document.getElementById('righteye18').style.backgroundColor = "#212121";
		document.getElementById('righteye19').style.backgroundColor = "#212121";
		document.getElementById('righteye20').style.backgroundColor = "#212121";
		document.getElementById('ocRightEye').style.backgroundImage = "url('images/oc/righteye/15.png')";
		resetEyes = 0;
		righttext = "6";
		righteye = "righteye1";
	}
	if (no == "lefteye16"){
		document.getElementById('righteye1').style.backgroundColor = "#212121";
		document.getElementById('righteye2').style.backgroundColor = "#212121";
		document.getElementById('righteye3').style.backgroundColor = "#212121";
		document.getElementById('righteye4').style.backgroundColor = "#212121";
		document.getElementById('righteye5').style.backgroundColor = "#212121";
		document.getElementById('righteye6').style.backgroundColor = "#212121";
		document.getElementById('righteye7').style.backgroundColor = "#212121";
		document.getElementById('righteye8').style.backgroundColor = "#212121";
		document.getElementById('righteye9').style.backgroundColor = "#212121";
		document.getElementById('righteye11').style.backgroundColor = "#212121";
		document.getElementById('righteye12').style.backgroundColor = "#212121";
		document.getElementById('righteye13').style.backgroundColor = "#212121";
		document.getElementById('righteye14').style.backgroundColor = "#212121";
		//document.getElementById('righteye15').style.backgroundColor = "#212121";
		document.getElementById('righteye16').style.backgroundColor = "#212121";
		document.getElementById('righteye17').style.backgroundColor = "#212121";
		document.getElementById('righteye18').style.backgroundColor = "#212121";
		document.getElementById('righteye19').style.backgroundColor = "#212121";
		document.getElementById('righteye20').style.backgroundColor = "#212121";
		lefttext = "O";
		righttext = "O";
		righteye = "righteye16";
	}else if (no == "lefteye18"){
		document.getElementById('righteye1').style.backgroundColor = "#212121";
		document.getElementById('righteye2').style.backgroundColor = "#212121";
		document.getElementById('righteye3').style.backgroundColor = "#212121";
		document.getElementById('righteye4').style.backgroundColor = "#212121";
		document.getElementById('righteye5').style.backgroundColor = "#212121";
		document.getElementById('righteye6').style.backgroundColor = "#212121";
		document.getElementById('righteye7').style.backgroundColor = "#212121";
		document.getElementById('righteye8').style.backgroundColor = "#212121";
		document.getElementById('righteye9').style.backgroundColor = "#212121";
		document.getElementById('righteye11').style.backgroundColor = "#212121";
		document.getElementById('righteye12').style.backgroundColor = "#212121";
		document.getElementById('righteye13').style.backgroundColor = "#212121";
		document.getElementById('righteye14').style.backgroundColor = "#212121";
		//document.getElementById('righteye15').style.backgroundColor = "#212121";
		document.getElementById('righteye16').style.backgroundColor = "#212121";
		document.getElementById('righteye17').style.backgroundColor = "#212121";
		document.getElementById('righteye18').style.backgroundColor = "#212121";
		document.getElementById('righteye19').style.backgroundColor = "#212121";
		document.getElementById('righteye20').style.backgroundColor = "#212121";
		lefttext = "Ò";
		righttext = "Ó";
		righteye = "righteye18";
	}else if (no == "lefteye19"){
		document.getElementById('righteye1').style.backgroundColor = "#212121";
		document.getElementById('righteye2').style.backgroundColor = "#212121";
		document.getElementById('righteye3').style.backgroundColor = "#212121";
		document.getElementById('righteye4').style.backgroundColor = "#212121";
		document.getElementById('righteye5').style.backgroundColor = "#212121";
		document.getElementById('righteye6').style.backgroundColor = "#212121";
		document.getElementById('righteye7').style.backgroundColor = "#212121";
		document.getElementById('righteye8').style.backgroundColor = "#212121";
		document.getElementById('righteye9').style.backgroundColor = "#212121";
		document.getElementById('righteye11').style.backgroundColor = "#212121";
		document.getElementById('righteye12').style.backgroundColor = "#212121";
		document.getElementById('righteye13').style.backgroundColor = "#212121";
		document.getElementById('righteye14').style.backgroundColor = "#212121";
		//document.getElementById('righteye15').style.backgroundColor = "#212121";
		document.getElementById('righteye16').style.backgroundColor = "#212121";
		document.getElementById('righteye17').style.backgroundColor = "#212121";
		document.getElementById('righteye18').style.backgroundColor = "#212121";
		document.getElementById('righteye19').style.backgroundColor = "#212121";
		document.getElementById('righteye20').style.backgroundColor = "#212121";
		lefttext = "Ó";
		righttext = "Ò";
		righteye = "righteye19";
	}else if (no == "lefteye20"){
		document.getElementById('righteye1').style.backgroundColor = "#212121";
		document.getElementById('righteye2').style.backgroundColor = "#212121";
		document.getElementById('righteye3').style.backgroundColor = "#212121";
		document.getElementById('righteye4').style.backgroundColor = "#212121";
		document.getElementById('righteye5').style.backgroundColor = "#212121";
		document.getElementById('righteye6').style.backgroundColor = "#212121";
		document.getElementById('righteye7').style.backgroundColor = "#212121";
		document.getElementById('righteye8').style.backgroundColor = "#212121";
		document.getElementById('righteye9').style.backgroundColor = "#212121";
		document.getElementById('righteye11').style.backgroundColor = "#212121";
		document.getElementById('righteye12').style.backgroundColor = "#212121";
		document.getElementById('righteye13').style.backgroundColor = "#212121";
		document.getElementById('righteye14').style.backgroundColor = "#212121";
		//document.getElementById('righteye15').style.backgroundColor = "#212121";
		document.getElementById('righteye16').style.backgroundColor = "#212121";
		document.getElementById('righteye17').style.backgroundColor = "#212121";
		document.getElementById('righteye18').style.backgroundColor = "#212121";
		document.getElementById('righteye19').style.backgroundColor = "#212121";
		document.getElementById('righteye20').style.backgroundColor = "#212121";
		lefttext = "Ô";
		righttext = "Ô";
		righteye = "righteye20";
	}
	
	updateAll();
}

//Click the right eye buttons
function RightEyeButton(no){
	document.getElementById('righteye1').style.backgroundColor = "#212121";
	document.getElementById('righteye2').style.backgroundColor = "#212121";
	document.getElementById('righteye3').style.backgroundColor = "#212121";
	document.getElementById('righteye4').style.backgroundColor = "#212121";
	document.getElementById('righteye5').style.backgroundColor = "#212121";
	document.getElementById('righteye6').style.backgroundColor = "#212121";
	document.getElementById('righteye7').style.backgroundColor = "#212121";
	document.getElementById('righteye8').style.backgroundColor = "#212121";
	document.getElementById('righteye9').style.backgroundColor = "#212121";
	document.getElementById('righteye11').style.backgroundColor = "#212121";
	document.getElementById('righteye12').style.backgroundColor = "#212121";
	document.getElementById('righteye13').style.backgroundColor = "#212121";
	document.getElementById('righteye14').style.backgroundColor = "#212121";
	//document.getElementById('righteye15').style.backgroundColor = "#212121";
	document.getElementById('righteye16').style.backgroundColor = "#212121";
	document.getElementById('righteye17').style.backgroundColor = "#212121";
	document.getElementById('righteye18').style.backgroundColor = "#212121";
	document.getElementById('righteye19').style.backgroundColor = "#212121";
	document.getElementById('righteye20').style.backgroundColor = "#212121";
	righteye = no;
	
	if (resetEyes == 1){
		document.getElementById('lefteye1').style.backgroundColor = "#212121";
		document.getElementById('lefteye2').style.backgroundColor = "#212121";
		document.getElementById('lefteye3').style.backgroundColor = "#212121";
		document.getElementById('lefteye4').style.backgroundColor = "#212121";
		document.getElementById('lefteye5').style.backgroundColor = "#212121";
		document.getElementById('lefteye6').style.backgroundColor = "#212121";
		document.getElementById('lefteye7').style.backgroundColor = "#212121";
		document.getElementById('lefteye8').style.backgroundColor = "#212121";
		document.getElementById('lefteye9').style.backgroundColor = "#212121";
		document.getElementById('lefteye11').style.backgroundColor = "#212121";
		document.getElementById('lefteye12').style.backgroundColor = "#212121";
		document.getElementById('lefteye13').style.backgroundColor = "#212121";
		document.getElementById('lefteye14').style.backgroundColor = "#212121";
		//document.getElementById('lefteye15').style.backgroundColor = "#212121";
		document.getElementById('lefteye16').style.backgroundColor = "#212121";
		document.getElementById('lefteye17').style.backgroundColor = "#212121";
		document.getElementById('lefteye18').style.backgroundColor = "#212121";
		document.getElementById('lefteye19').style.backgroundColor = "#212121";
		document.getElementById('lefteye20').style.backgroundColor = "#212121";
		resetEyes = 0;
		lefttext = "6";
		lefteye = "lefteye1";
	}
	
	if (no == "righteye16"){
		document.getElementById('lefteye1').style.backgroundColor = "#212121";
		document.getElementById('lefteye2').style.backgroundColor = "#212121";
		document.getElementById('lefteye3').style.backgroundColor = "#212121";
		document.getElementById('lefteye4').style.backgroundColor = "#212121";
		document.getElementById('lefteye5').style.backgroundColor = "#212121";
		document.getElementById('lefteye6').style.backgroundColor = "#212121";
		document.getElementById('lefteye7').style.backgroundColor = "#212121";
		document.getElementById('lefteye8').style.backgroundColor = "#212121";
		document.getElementById('lefteye9').style.backgroundColor = "#212121";
		document.getElementById('lefteye11').style.backgroundColor = "#212121";
		document.getElementById('lefteye12').style.backgroundColor = "#212121";
		document.getElementById('lefteye13').style.backgroundColor = "#212121";
		document.getElementById('lefteye14').style.backgroundColor = "#212121";
		//document.getElementById('lefteye15').style.backgroundColor = "#212121";
		document.getElementById('lefteye16').style.backgroundColor = "#212121";
		document.getElementById('lefteye17').style.backgroundColor = "#212121";
		document.getElementById('lefteye18').style.backgroundColor = "#212121";
		document.getElementById('lefteye19').style.backgroundColor = "#212121";
		document.getElementById('lefteye20').style.backgroundColor = "#212121";
		lefttext = "O";
		righttext = "O";
		lefteye = "lefteye16";
	}else if(no == "righteye18"){
		document.getElementById('lefteye1').style.backgroundColor = "#212121";
		document.getElementById('lefteye2').style.backgroundColor = "#212121";
		document.getElementById('lefteye3').style.backgroundColor = "#212121";
		document.getElementById('lefteye4').style.backgroundColor = "#212121";
		document.getElementById('lefteye5').style.backgroundColor = "#212121";
		document.getElementById('lefteye6').style.backgroundColor = "#212121";
		document.getElementById('lefteye7').style.backgroundColor = "#212121";
		document.getElementById('lefteye8').style.backgroundColor = "#212121";
		document.getElementById('lefteye9').style.backgroundColor = "#212121";
		document.getElementById('lefteye11').style.backgroundColor = "#212121";
		document.getElementById('lefteye12').style.backgroundColor = "#212121";
		document.getElementById('lefteye13').style.backgroundColor = "#212121";
		document.getElementById('lefteye14').style.backgroundColor = "#212121";
		//document.getElementById('lefteye15').style.backgroundColor = "#212121";
		document.getElementById('lefteye16').style.backgroundColor = "#212121";
		document.getElementById('lefteye17').style.backgroundColor = "#212121";
		document.getElementById('lefteye18').style.backgroundColor = "#212121";
		document.getElementById('lefteye19').style.backgroundColor = "#212121";
		document.getElementById('lefteye20').style.backgroundColor = "#212121";
		lefttext = "Ò";
		righttext = "Ó";
		lefteye = "lefteye18";
	}else if(no == "righteye19"){
		document.getElementById('lefteye1').style.backgroundColor = "#212121";
		document.getElementById('lefteye2').style.backgroundColor = "#212121";
		document.getElementById('lefteye3').style.backgroundColor = "#212121";
		document.getElementById('lefteye4').style.backgroundColor = "#212121";
		document.getElementById('lefteye5').style.backgroundColor = "#212121";
		document.getElementById('lefteye6').style.backgroundColor = "#212121";
		document.getElementById('lefteye7').style.backgroundColor = "#212121";
		document.getElementById('lefteye8').style.backgroundColor = "#212121";
		document.getElementById('lefteye9').style.backgroundColor = "#212121";
		document.getElementById('lefteye11').style.backgroundColor = "#212121";
		document.getElementById('lefteye12').style.backgroundColor = "#212121";
		document.getElementById('lefteye13').style.backgroundColor = "#212121";
		document.getElementById('lefteye14').style.backgroundColor = "#212121";
		//document.getElementById('lefteye15').style.backgroundColor = "#212121";
		document.getElementById('lefteye16').style.backgroundColor = "#212121";
		document.getElementById('lefteye17').style.backgroundColor = "#212121";
		document.getElementById('lefteye18').style.backgroundColor = "#212121";
		document.getElementById('lefteye19').style.backgroundColor = "#212121";
		document.getElementById('lefteye20').style.backgroundColor = "#212121";
		lefttext = "Ó";
		righttext = "Ò";
		lefteye = "lefteye19";
	}else if(no == "righteye20"){
		document.getElementById('lefteye1').style.backgroundColor = "#212121";
		document.getElementById('lefteye2').style.backgroundColor = "#212121";
		document.getElementById('lefteye3').style.backgroundColor = "#212121";
		document.getElementById('lefteye4').style.backgroundColor = "#212121";
		document.getElementById('lefteye5').style.backgroundColor = "#212121";
		document.getElementById('lefteye6').style.backgroundColor = "#212121";
		document.getElementById('lefteye7').style.backgroundColor = "#212121";
		document.getElementById('lefteye8').style.backgroundColor = "#212121";
		document.getElementById('lefteye9').style.backgroundColor = "#212121";
		document.getElementById('lefteye11').style.backgroundColor = "#212121";
		document.getElementById('lefteye12').style.backgroundColor = "#212121";
		document.getElementById('lefteye13').style.backgroundColor = "#212121";
		document.getElementById('lefteye14').style.backgroundColor = "#212121";
		//document.getElementById('lefteye15').style.backgroundColor = "#212121";
		document.getElementById('lefteye16').style.backgroundColor = "#212121";
		document.getElementById('lefteye17').style.backgroundColor = "#212121";
		document.getElementById('lefteye18').style.backgroundColor = "#212121";
		document.getElementById('lefteye19').style.backgroundColor = "#212121";
		document.getElementById('lefteye20').style.backgroundColor = "#212121";
		lefttext = "Ô";
		righttext = "Ô";
		lefteye = "lefteye20";
	}
	
	
	
	updateAll();
}

//Mouse over brow buttons
function BrowsButtonOn(no){
	if (brows == no){
	}else{
		document.getElementById(no).style.backgroundColor = "#444444";
	}
}

//Mouse off brow buttons
function BrowsButtonOff(no){
	if (brows == no){
	}else{
		document.getElementById(no).style.backgroundColor = "#212121";
	}
}

//Mouse over eyes buttons
function EyesButtonOn(no){
	if (eyes == no){
	}else{
		document.getElementById(no).style.backgroundColor = "#444444";
	}
}
//Mouse off eyes buttons
function EyesButtonOff(no){
	if (eyes == no){
	}else{
		document.getElementById(no).style.backgroundColor = "#212121";
	}
}

//Click the brow buttons
function BrowsButton(no){
	document.getElementById('browsoff').style.backgroundColor = "#212121";
	document.getElementById('browsangry').style.backgroundColor = "#212121";
	document.getElementById('browssad').style.backgroundColor = "#212121";
	document.getElementById('browsunhappy').style.backgroundColor = "#212121";
	brows = no;
	
	updateAll();
}

//Click the eyes buttons
function EyesButton(no){
	document.getElementById('eyes1').style.backgroundColor = "#212121";
	document.getElementById('eyes2').style.backgroundColor = "#212121";
	document.getElementById('eyes3').style.backgroundColor = "#212121";
	document.getElementById('eyes4').style.backgroundColor = "#212121";
	document.getElementById('eyes5').style.backgroundColor = "#212121";
	document.getElementById('eyes7').style.backgroundColor = "#212121";
	document.getElementById('eyes8').style.backgroundColor = "#212121";
	eyes = no;
	
	updateAll();
}

//Updates the buttons and oc face to match correctly
function updateAll(){
	if (selectedMode == 1){
		document.getElementById('typeSwitchAuto').style.backgroundColor = "#ca7e4e";
		document.getElementById('typeSwitchAuto').style.color = "#e1def3";
	}else if (selectedMode == 2){
		document.getElementById('typeSwitchLan').style.backgroundColor = "#ca7e4e";
		document.getElementById('typeSwitchLan').style.color = "#e1def3";
	}else if (selectedMode == 3){
		document.getElementById('typeSwitchPort').style.backgroundColor = "#ca7e4e";
		document.getElementById('typeSwitchPort').style.color = "#e1def3";
	}
	
	document.getElementById('ocMouth').style.top = "116px";
	document.getElementById('browsoff').style.display = "";
	document.getElementById('browsangry').style.display = "";
	document.getElementById('browssad').style.display = "";
	document.getElementById('browsunhappy').style.display = "";
	document.getElementById('cryoff').style.display = "";
	document.getElementById('browsangry').style.left = "50px";
	document.getElementById('browssad').style.left = "100px";
	document.getElementById('browsunhappy').style.left = "150px";
	document.getElementById('cryon').style.left = "50px";
	document.getElementById('crytear').style.left = "100px";
	
	document.getElementById('browsoff').style.backgroundColor = "#212121";
	document.getElementById('browsangry').style.backgroundColor = "#212121";
	document.getElementById('browssad').style.backgroundColor = "#212121";
	document.getElementById('browsunhappy').style.backgroundColor = "#212121";
	document.getElementById('cryoff').style.backgroundColor = "#212121";
	document.getElementById('cryon').style.backgroundColor = "#212121";
	document.getElementById('crytear').style.backgroundColor = "#212121";
	
	if (mouth == "mouth1"){
		mouthtext = "w";
		mouthporttext = ")";
		if (orient != 3 && orient != 4){orient = 0;}
		if (orient == 4){orient = 3;}
		document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/1.png')";
	}else if (mouth == "mouth2"){
		mouthtext = "m";
		mouthporttext = "(";
		if (orient != 3 && orient != 4){orient = 0;}
		if (orient == 4){orient = 3;}
		document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/2.png')";
	}else if (mouth == "mouth3"){
		mouthtext = "-";
		if (orient != 3 && orient != 4){orient = 0;}
		if (orient == 4){orient = 3;}
		document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/3.png')";
		if (orient == 3){
			mouthtext = "w";
			mouthporttext = ")";
			mouth = 'mouth1';
			document.getElementById('mouth3').style.backgroundColor = "#212121";
			document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/1.png')";
		}
	}else if (mouth == "mouth4"){
		mouthtext = "_";
		mouthporttext = "i";
		if (orient != 3 && orient != 4){orient = 0;}
		if (orient == 4){orient = 3;}
		document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/4.png')";
	}else if (mouth == "mouth5"){
		mouthtext = "T";
		mouthporttext = "T";
		if (orient != 3 && orient != 4){orient = 1;}
		if (orient == 4){orient = 3;}
		document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/5.png')";
		if (orlan == 1){
			orient = 0;
			mouthtext = "w";
			mouthporttext = ")";
			mouth = 'mouth1';
			document.getElementById('mouth5').style.backgroundColor = "#212121";
			document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/1.png')";
		}
	}else if (mouth == "mouth6"){
		mouthtext = "P";
		mouthporttext = "P";
		if (orient != 3 && orient != 4){orient = 1;}
		if (orient == 4){orient = 3;}
		document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/6.png')";
		if (orlan == 1){
			orient = 0;
			mouthtext = "w";
			mouthporttext = ")";
			mouth = 'mouth1';
			document.getElementById('mouth6').style.backgroundColor = "#212121";
			document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/1.png')";
		}
	}else if (mouth == "mouth7"){
		mouthtext = "D";
		mouthporttext = "D";
		if (orient != 3 && orient != 4){orient = 1;}
		if (orient == 4){orient = 3;}
		document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/7.png')";
		if (orlan == 1){
			orient = 0;
			mouthtext = "w";
			mouthporttext = ")";
			mouth = 'mouth1';
			document.getElementById('mouth7').style.backgroundColor = "#212121";
			document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/1.png')";
		}
	}else if (mouth == "mouth8"){
		mouthtext = "~";
		mouthporttext = "s";
		if (orient != 3 && orient != 4){orient = 0;}
		if (orient == 4){orient = 3;}
		document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/8.png')";
	}else if (mouth == "mouth9"){
		mouthtext = "o";
		mouthporttext = "v";
		if (orient != 3 && orient != 4){orient = 0;}
		if (orient == 4){orient = 3;}
		document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/9.png')";
	}else if (mouth == "mouth10"){
		mouthtext = "o";
		mouthporttext = "o";
		if (orient != 3 && orient != 4){orient = 1;}
		if (orient == 4){orient = 3;}
		document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/10.png')";
		if (orlan == 1){
			orient = 0;
			mouthtext = "w";
			mouthporttext = ")";
			mouth = 'mouth1';
			document.getElementById('mouth10').style.backgroundColor = "#212121";
			document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/1.png')";
		}
	}else if (mouth == "mouth11"){
		mouthtext = "u";
		mouthporttext = "u";
		if (orient != 3 && orient != 4){orient = 1;}
		if (orient == 4){orient = 3;}
		document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/11.png')";
		if (orlan == 1){
			orient = 0;
			mouthtext = "w";
			mouthporttext = ")";
			mouth = 'mouth1';
			document.getElementById('mouth11').style.backgroundColor = "#212121";
			document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/1.png')";
		}
	}else if (mouth == "mouth12"){
		mouthtext = "A";
		mouthporttext = "O";
		if (orient != 3 && orient != 4){orient = 0;}
		if (orient == 4){orient = 3;}
		document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/12.png')";
		document.getElementById('browsoff').style.backgroundColor = "#212121";
		document.getElementById('browsunhappy').style.backgroundColor = "#212121";
		document.getElementById('cryoff').style.backgroundColor = "#212121";
		if (cry == "cryoff" && eyes == "eyes5" && orient != 0 ){
			cry = "crytear";
		}
		if (brows == "browsoff" && eyes == "eyes5" || brows == "browsunhappy" && eyes == "eyes5"){
			brows = "browssad";
		}
	}else if (mouth == "mouth13"){
		mouthtext = ".";
		mouthporttext = "*";
		if (orient != 3 && orient != 4){orient = 0;}
		if (orient == 4){orient = 3;}
		document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/13.png')";
	}else if (mouth == "mouth15"){
		mouthtext = "U";
		mouthporttext = "U";
		if (orient != 3 && orient != 4){orient = 1;}
		if (orient == 4){orient = 3;}
		document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/14.png')";
		if (orlan == 1){
			orient = 0;
			mouthtext = "w";
			mouthporttext = ")";
			mouth = 'mouth1';
			document.getElementById('mouth15').style.backgroundColor = "#212121";
			document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/1.png')";
		}
	}else if (mouth == "mouth16"){
		mouthtext = "DD";
		mouthporttext = "DD";
		if (orient != 3 && orient != 4){orient = 2;}
		if (orient == 3){orient = 4;}
		if (selectedMode != 2){document.getElementById('ocMouth').style.top = "113px";}
		document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/15.png')";
		document.getElementById('browsoff').style.backgroundColor = "#212121";
		document.getElementById('browsunhappy').style.backgroundColor = "#212121";
		document.getElementById('cryoff').style.backgroundColor = "#212121";
		if (cry == "cryoff" && eyes == "eyes5" ){
			cry = "crytear";
		}
		if (brows == "browsoff" && eyes == "eyes5" || brows == "browsunhappy" && eyes == "eyes5"){
			brows = "browssad";
		}
		if (orlan == 1){
			orient = 0;
			mouthtext = "w";
			mouthporttext = ")";
			mouth = 'mouth1';
			document.getElementById('mouth16').style.backgroundColor = "#212121";
			document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/1.png')";
		}
	}else if (mouth == "mouth17"){
		mouthtext = ">>";
		mouthporttext = ">>";
		if (orient != 3 && orient != 4){orient = 1;}
		if (orient == 4){orient = 3;}
		document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/16.png')";
		if (orlan == 1){
			orient = 0;
			mouthtext = "w";
			mouthporttext = ")";
			mouth = 'mouth1';
			document.getElementById('mouth17').style.backgroundColor = "#212121";
			document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/1.png')";
		}
	}else if (mouth == "mouth18"){
		mouthtext = "<<";
		mouthporttext = "<<";
		if (orient != 3 && orient != 4){orient = 1;}
		if (orient == 4){orient = 3;}
		document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/17.png')";
		if (orlan == 1){
			orient = 0;
			mouthtext = "w";
			mouthporttext = ")";
			mouth = 'mouth1';
			document.getElementById('mouth18').style.backgroundColor = "#212121";
			document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/1.png')";
		}
	}else if (mouth == "mouth19"){
		mouthtext = "ii";
		mouthporttext = "ii";
		if (orient != 3 && orient != 4){orient = 1;}
		if (orient == 4){orient = 3;}
		document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/18.png')";
		if (orlan == 1){
			orient = 0;
			mouthtext = "w";
			mouthporttext = ")";
			mouth = 'mouth1';
			document.getElementById('mouth19').style.backgroundColor = "#212121";
			document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/1.png')";
		}
	}else if (mouth == "mouth20"){
		mouthtext = "ss";
		mouthporttext = "ss";
		if (orient != 3 && orient != 4){orient = 1;}
		if (orient == 4){orient = 3;}
		document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/19.png')";
		if (orlan == 1){
			orient = 0;
			mouthtext = "w";
			mouthporttext = ")";
			mouth = 'mouth1';
			document.getElementById('mouth20').style.backgroundColor = "#212121";
			document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/1.png')";
		}
	}else if (mouth == "mouth21"){
		mouthtext = "P";
		mouthporttext = "Q";
		if (orient != 3 && orient != 4){orient = 0;}
		if (orient == 4){orient = 3;}
		document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/20.png')";
	}else if (mouth == "mouth22"){
		mouthtext = "p";
		mouthporttext = "L";
		if (orient != 3 && orient != 4){orient = 0;}
		if (orient == 4){orient = 3;}
		document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/21.png')";
	}else if (mouth == "mouth23"){
		mouthtext = "V";
		mouthporttext = "V";
		if (orient != 3 && orient != 4){orient = 1;}
		if (orient == 4){orient = 3;}
		document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/22.png')";
		document.getElementById('browsoff').style.backgroundColor = "#212121";
		document.getElementById('browsunhappy').style.backgroundColor = "#212121";
		document.getElementById('cryoff').style.backgroundColor = "#212121";
		if (cry == "cryoff" && eyes == "eyes5" ){
			cry = "crytear";
		}
		if (brows == "browsoff" && eyes == "eyes5" || brows == "browsunhappy" && eyes == "eyes5"){
			brows = "browssad";
		}
		if (orlan == 1){
			orient = 0;
			mouthtext = "w";
			mouthporttext = ")";
			mouth = 'mouth1';
			document.getElementById('mouth23').style.backgroundColor = "#212121";
			document.getElementById('ocMouth').style.backgroundImage = "url('images/" + randomOC + "/oc/mouth/1.png')";
		}
	}
	
	if (blush == "blushoff"){
		blushtext = "";
		portblushtext = "";
		document.getElementById('cryon').style.display = "";
		document.getElementById('ocBlush').style.display = "none";
		document.getElementById('crytear').style.left = "100px";
	}else if (blush == "blushon"){
		blushtext = "//";
		portblushtext = "/blush ";
		document.getElementById('cryon').style.display = "none";
		document.getElementById('ocBlush').style.display = "";
		document.getElementById('crytear').style.left = "50px";
	}
	
	if (cry == "cryoff"){
		crytext = "";
		teartext = "";
		document.getElementById('blushon').style.display = "";
		document.getElementById('blushon').style.backgroundColor = "#212121";
		document.getElementById('ocCry').style.display = "none";
		document.getElementById('ocTear').style.display = "none";
	}else if (cry == "cryon"){
		blush = "blushoff";
		crytext = "/cry ";
		teartext = "";
		blushtext = "";
		portblushtext = "";
		document.getElementById('blushon').style.display = "none";
		document.getElementById('blushon').style.backgroundColor = "#212121";
		document.getElementById('ocBlush').style.display = "none";
		document.getElementById('ocCry').style.display = "";
		document.getElementById('ocTear').style.display = "none";
	}else if (cry == "crytear"){
		crytext = "";
		teartext = "'";
		document.getElementById('blushon').style.display = "";
		document.getElementById('blushon').style.backgroundColor = "#212121";
		document.getElementById('ocCry').style.display = "none";
		document.getElementById('ocTear').style.display = "";
	}
	
	if (lefteye == "lefteye1"){
		lefttext = "6";
		document.getElementById('ocLeftEye').style.backgroundImage = "url('images/" + randomOC + "/oc/lefteye/1.png')";
	}else if (lefteye == "lefteye2"){
		lefttext = "e";
		document.getElementById('ocLeftEye').style.backgroundImage = "url('images/" + randomOC + "/oc/lefteye/2.png')";
	}else if (lefteye == "lefteye3"){
		lefttext = "g";
		document.getElementById('ocLeftEye').style.backgroundImage = "url('images/" + randomOC + "/oc/lefteye/3.png')";
	}else if (lefteye == "lefteye4"){
		lefttext = "d";
		document.getElementById('ocLeftEye').style.backgroundImage = "url('images/" + randomOC + "/oc/lefteye/4.png')";
	}else if (lefteye == "lefteye5"){
		lefttext = ">";
		if (righteye == "righteye6"){
			document.getElementById('ocLeftEye').style.backgroundImage = "url('images/" + randomOC + "/oc/lefteye/5.png')";
		}else{
			document.getElementById('ocLeftEye').style.backgroundImage = "url('images/" + randomOC + "/oc/lefteye/14.png')";
		}
	}else if (lefteye == "lefteye6"){
		lefttext = "<";
		document.getElementById('ocLeftEye').style.backgroundImage = "url('images/" + randomOC + "/oc/lefteye/6.png')";
	}else if (lefteye == "lefteye7"){
		lefttext = "=";
		document.getElementById('ocLeftEye').style.backgroundImage = "url('images/" + randomOC + "/oc/lefteye/7.png')";
	}else if (lefteye == "lefteye8"){
		lefttext = "u";
		document.getElementById('ocLeftEye').style.backgroundImage = "url('images/" + randomOC + "/oc/lefteye/8.png')";
	}else if (lefteye == "lefteye9"){
		lefttext = "a";
		document.getElementById('ocLeftEye').style.backgroundImage = "url('images/" + randomOC + "/oc/lefteye/9.png')";
	}else if (lefteye == "lefteye11"){
		lefttext = "^";
		document.getElementById('ocLeftEye').style.backgroundImage = "url('images/" + randomOC + "/oc/lefteye/10.png')";
	}else if (lefteye == "lefteye12"){
		lefttext = "ó";
		// q = cry
		document.getElementById('ocLeftEye').style.backgroundImage = "url('images/" + randomOC + "/oc/lefteye/11.png')";
	}else if (lefteye == "lefteye13"){
		lefttext = "ò";
		document.getElementById('ocLeftEye').style.backgroundImage = "url('images/" + randomOC + "/oc/lefteye/12.png')";
	}else if (lefteye == "lefteye14"){
		lefttext = "t";
		document.getElementById('ocLeftEye').style.backgroundImage = "url('images/" + randomOC + "/oc/lefteye/13.png')";
	}else if (lefteye == "lefteye15"){
		lefttext = ">";
		document.getElementById('ocLeftEye').style.backgroundImage = "url('images/" + randomOC + "/oc/lefteye/14.png')";
	}else if (lefteye == "lefteye16"){
		resetEyes = 1;
		document.getElementById('ocLeftEye').style.backgroundImage = "url('images/" + randomOC + "/oc/lefteye/15.png')";
	}else if (lefteye == "lefteye17"){
		lefttext = "ô";
		document.getElementById('ocLeftEye').style.backgroundImage = "url('images/" + randomOC + "/oc/lefteye/16.png')";
	}else if (lefteye == "lefteye18"){
		resetEyes = 1;
		document.getElementById('ocLeftEye').style.backgroundImage = "url('images/" + randomOC + "/oc/lefteye/17.png')";
	}else if (lefteye == "lefteye19"){
		resetEyes = 1;
		document.getElementById('ocLeftEye').style.backgroundImage = "url('images/" + randomOC + "/oc/lefteye/18.png')";
	}else if (lefteye == "lefteye20"){
		resetEyes = 1;
		document.getElementById('ocLeftEye').style.backgroundImage = "url('images/" + randomOC + "/oc/lefteye/19.png')";
	}
	
	if (righteye == "righteye1"){
		righttext = "6";
		document.getElementById('ocRightEye').style.backgroundImage = "url('images/" + randomOC + "/oc/righteye/1.png')";
	}else if (righteye == "righteye2"){
		righttext = "g";
		document.getElementById('ocRightEye').style.backgroundImage = "url('images/" + randomOC + "/oc/righteye/2.png')";
	}else if (righteye == "righteye3"){
		righttext = "e";
		document.getElementById('ocRightEye').style.backgroundImage = "url('images/" + randomOC + "/oc/righteye/3.png')";
	}else if (righteye == "righteye4"){
		righttext = "b";
		document.getElementById('ocRightEye').style.backgroundImage = "url('images/" + randomOC + "/oc/righteye/4.png')";
	}else if (righteye == "righteye5"){
		righttext = "<";
		if (lefteye == "lefteye6"){
			document.getElementById('ocRightEye').style.backgroundImage = "url('images/" + randomOC + "/oc/righteye/5.png')";
		}else{
			document.getElementById('ocRightEye').style.backgroundImage = "url('images/" + randomOC + "/oc/righteye/14.png')";
		}	
	}else if (righteye == "righteye6"){
		righttext = ">";
		document.getElementById('ocRightEye').style.backgroundImage = "url('images/" + randomOC + "/oc/righteye/6.png')";
	}else if (righteye == "righteye7"){
		righttext = "=";
		document.getElementById('ocRightEye').style.backgroundImage = "url('images/" + randomOC + "/oc/righteye/7.png')";
	}else if (righteye == "righteye8"){
		righttext = "u";
		document.getElementById('ocRightEye').style.backgroundImage = "url('images/" + randomOC + "/oc/righteye/8.png')";
	}else if (righteye == "righteye9"){
		righttext = "a";
		document.getElementById('ocRightEye').style.backgroundImage = "url('images/" + randomOC + "/oc/righteye/9.png')";
	}else if (righteye == "righteye11"){
		righttext = "^";
		document.getElementById('ocRightEye').style.backgroundImage = "url('images/" + randomOC + "/oc/righteye/10.png')";
	}else if (righteye == "righteye12"){
		righttext = "ò";
		// p = cry
		document.getElementById('ocRightEye').style.backgroundImage = "url('images/" + randomOC + "/oc/righteye/11.png')";
	}else if (righteye == "righteye13"){
		righttext = "ó";
		document.getElementById('ocRightEye').style.backgroundImage = "url('images/" + randomOC + "/oc/righteye/12.png')";
	}else if (righteye == "righteye14"){
		righttext = "t";
		document.getElementById('ocRightEye').style.backgroundImage = "url('images/" + randomOC + "/oc/righteye/13.png')";
	}else if (righteye == "righteye15"){
		righttext = "<";
		document.getElementById('ocRightEye').style.backgroundImage = "url('images/" + randomOC + "/oc/righteye/14.png')";
	}else if (righteye == "righteye16"){
		resetEyes = 1;
		document.getElementById('ocRightEye').style.backgroundImage = "url('images/" + randomOC + "/oc/righteye/15.png')";
	}else if (righteye == "righteye17"){
		righttext = "ô";
		document.getElementById('ocRightEye').style.backgroundImage = "url('images/" + randomOC + "/oc/righteye/16.png')";
	}else if (righteye == "righteye18"){
		resetEyes = 1;
		document.getElementById('ocRightEye').style.backgroundImage = "url('images/" + randomOC + "/oc/righteye/17.png')";
	}else if (righteye == "righteye19"){
		resetEyes = 1;
		document.getElementById('ocRightEye').style.backgroundImage = "url('images/" + randomOC + "/oc/righteye/18.png')";
	}else if (righteye == "righteye20"){
		resetEyes = 1;
		document.getElementById('ocRightEye').style.backgroundImage = "url('images/" + randomOC + "/oc/righteye/19.png')";
	}
	
	if (brows == "browsoff"){
		browstext = "";
	}else if (brows == "browsangry"){
		if (orient == 1){
			browstext = ">";
		}else if (orient == 2){
			browstext = "<";
		}else if (orient == 3){
			browstext = ">";
		}else if (orient == 4){
			browstext = "<";
		}
	}else if (brows == "browssad"){
		if (orient == 1){
			browstext = "<";
		}else if (orient == 2){
			browstext = ">";
		}else if (orient == 3){
			browstext = "<";
		}else if (orient == 4){
			browstext = ">";
		}
	}else if (brows == "browsunhappy"){
			browstext = "|";
	}
	
	if (eyes == "eyes1"){
		eyestext = ":";
		if (mouth == "mouth16"){
			document.getElementById('browsoff').style.display = "";
			document.getElementById('browsangry').style.left = "50px";
			document.getElementById('browssad').style.left = "100px";
			document.getElementById('browsunhappy').style.left = "150px";
		}
		if (brows == "browsoff"){
			document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/1.png')";
		}else if (brows == "browsangry"){
			document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/8.png')";
		}else if (brows == "browssad"){
			document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/13.png')";
		}else if (brows == "browsunhappy"){
			document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/18.png')";
		}
	}else if (eyes == "eyes2"){
		eyestext = "%";
		if (mouth == "mouth16"){
			document.getElementById('browsoff').style.display = "none";
			document.getElementById('browsangry').style.left = "0px";
			document.getElementById('browssad').style.left = "50px";
			document.getElementById('browsunhappy').style.left = "100px";
		}
		if (brows == "browsoff"){
			document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/2.png')";
		}else if (brows == "browsangry"){
			document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/9.png')";
		}else if (brows == "browssad"){
			document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/14.png')";
		}else if (brows == "browsunhappy"){
			document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/19.png')";
		}
	}else if (eyes == "eyes3"){
		if (mouth == "mouth16"){
			document.getElementById('browsoff').style.display = "";
			document.getElementById('browsoff').style.backgroundColor = "#cccccc";
			document.getElementById('browsangry').style.display = "none";
			document.getElementById('browssad').style.display = "none";
			document.getElementById('browsunhappy').style.display = "none";
			document.getElementById('browsangry').style.backgroundColor = "#212121";
			document.getElementById('browssad').style.backgroundColor = "#212121";
			document.getElementById('browsunhappy').style.backgroundColor = "#212121";
			document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/3.png')";
			brows = "browsoff";
			browstext = "";
			eyestext = "B";
		}else{
			eyestext = "B";
			document.getElementById('browsoff').style.display = "";
			document.getElementById('browsangry').style.display = "";
			document.getElementById('browssad').style.display = "";
			document.getElementById('browsunhappy').style.display = "";
			document.getElementById('browsangry').style.left = "50px";
			document.getElementById('browssad').style.left = "100px";
			document.getElementById('browsunhappy').style.left = "150px";
			if (mouth == "mouth16"){
				document.getElementById('browsoff').style.display = "none";
				document.getElementById('browsangry').style.left = "0px";
				document.getElementById('browssad').style.left = "50px";
				document.getElementById('browsunhappy').style.left = "100px";
			}
			if (brows == "browsoff"){
				document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/3.png')";
			}else if (brows == "browsangry"){
				document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/10.png')";
			}else if (brows == "browssad"){
				document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/15.png')";
			}else if (brows == "browsunhappy"){
				document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/20.png')";
			}
		}
	}else if (eyes == "eyes4"){
		eyestext = "8";
		if (mouth == "mouth16"){
			document.getElementById('browsoff').style.display = "";
			document.getElementById('browsangry').style.left = "50px";
			document.getElementById('browssad').style.left = "100px";
			document.getElementById('browsunhappy').style.left = "150px";
		}
		if (brows == "browsoff"){
			document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/4.png')";
		}else if (brows == "browsangry"){
			document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/11.png')";
		}else if (brows == "browssad"){
			document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/16.png')";
		}else if (brows == "browsunhappy"){
			document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/21.png')";
		}
	}else if (eyes == "eyes5"){
		eyestext = ";";
		if (mouth == "mouth12" && orient != 0 || mouth == "mouth16" && orient != 0 || mouth == "mouth23" && orient != 0 ){
			document.getElementById('browsoff').style.display = "none";
			document.getElementById('browsunhappy').style.display = "none";
			document.getElementById('cryoff').style.display = "none";
			document.getElementById('browsangry').style.left = "0px";
			document.getElementById('browssad').style.left = "50px";
			document.getElementById('cryon').style.left = "0px";
			if (blush == "blushon"){
				document.getElementById('crytear').style.left = "0px";
			}else{
				document.getElementById('crytear').style.left = "50px";
			}
		}
		if (brows == "browsoff"){
			document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/5.png')";
		}else if (brows == "browsangry"){
			if (mouth == "mouth12" || mouth == "mouth16" || mouth == "mouth23"){
				document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/8.png')";
			}else{
				document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/12.png')";
			}
		}else if (brows == "browssad"){
			if (mouth == "mouth12" || mouth == "mouth16" || mouth == "mouth23"){
				document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/13.png')";
			}else{
				document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/17.png')";
			}
		}else if (brows == "browsunhappy"){
			document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/22.png')";
		}
	}else if (eyes == "eyes6"){
		//Not in use
		eyestext = ";";
		if (mouth == "mouth16"){
			document.getElementById('browsoff').style.display = "none";
			document.getElementById('browsangry').style.left = "0px";
			document.getElementById('browssad').style.left = "50px";
			document.getElementById('browsunhappy').style.left = "100px";
		}
		if (brows == "browsoff"){
			document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/5.png')";
		}else if (brows == "browsangry"){
			document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes12.png')";
		}else if (brows == "browssad"){
			document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/17.png')";
		}else if (brows == "browsunhappy"){
			document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/22.png')";
		}
	}else if (eyes == "eyes7"){
		document.getElementById('browsoff').style.backgroundColor = "#cccccc";
		document.getElementById('browsangry').style.display = "none";
		document.getElementById('browssad').style.display = "none";
		document.getElementById('browsunhappy').style.display = "none";
		document.getElementById('browsangry').style.backgroundColor = "#212121";
		document.getElementById('browssad').style.backgroundColor = "#212121";
		document.getElementById('browsunhappy').style.backgroundColor = "#212121";
		if (mouth == "mouth16"){
			document.getElementById('browsoff').style.display = "";
		}
		document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/6.png')";
		brows = "browsoff";
		browstext = "";
		eyestext = "X";
	}else if (eyes == "eyes8"){
		document.getElementById('browsoff').style.backgroundColor = "#cccccc";
		document.getElementById('browsangry').style.display = "none";
		document.getElementById('browssad').style.display = "none";
		document.getElementById('browsunhappy').style.display = "none";
		document.getElementById('browsangry').style.backgroundColor = "#212121";
		document.getElementById('browssad').style.backgroundColor = "#212121";
		document.getElementById('browsunhappy').style.backgroundColor = "#212121";
		document.getElementById('ocBothEye').style.backgroundImage = "url('images/" + randomOC + "/oc/botheyes/7.png')";
		if (mouth == "mouth16"){
			document.getElementById('browsoff').style.display = "";
		}
		brows = "browsoff";
		browstext = "";
		eyestext = "|";
	}
	
	if (permEnabled == 1){
		if (orient == 0 && crytext == ""){
			document.getElementById('PermButton').style.backgroundImage = "url('images/checkon.png')";
			crytext = "/e ";
		}else if (portblushtext == "" && crytext == ""){
			document.getElementById('PermButton').style.backgroundImage = "url('images/checkon.png')";
			crytext = "/e ";
		}else if (crytext != ""){
			document.getElementById('PermButton').style.backgroundImage = "url('images/checkon.png')";
		}else if (portblushtext == "/blush "){
			document.getElementById('PermButton').style.backgroundImage = "url('images/checkno.png')";
		}else{
			document.getElementById('PermButton').style.backgroundImage = "url('images/checkonred.png')";
		}
	}else{
		if (crytext != ""){
			document.getElementById('PermButton').style.backgroundImage = "url('images/checkonred.png')";
		}else{
			document.getElementById('PermButton').style.backgroundImage = "url('images/checkoff.png')";
		}
	}
	
	if (mouth == "mouth16" && eyes == "eyes1" && brows=="browsoff"){
		document.getElementById('emote').value = crytext + portblushtext + "aaaaa";
		if (cry == "crytear"){
			cry = "cryoff";
			crytext = "";
			teartext = "";
			document.getElementById('blushon').style.display = "";
			document.getElementById('blushon').style.backgroundColor = "#212121";
			document.getElementById('ocCry').style.display = "none";
			document.getElementById('ocTear').style.display = "none";
		}
	}else if (mouth == "mouth16" && eyes == "eyes4" && brows=="browsoff"){
		document.getElementById('emote').value = crytext + portblushtext + "AAAAA";
		if (cry == "crytear"){
			cry = "cryoff";
			crytext = "";
			teartext = "";
			document.getElementById('blushon').style.display = "";
			document.getElementById('blushon').style.backgroundColor = "#212121";
			document.getElementById('ocCry').style.display = "none";
			document.getElementById('ocTear').style.display = "none";
		}
	}else if (orient == 0){
		document.getElementById('emote').value = crytext + lefttext + blushtext + mouthtext + blushtext + righttext;
	}else if (orient == 1){
		document.getElementById('emote').value = crytext + portblushtext + browstext + eyestext + teartext + mouthtext;
	}else if (orient == 2){
		document.getElementById('emote').value = crytext + portblushtext + mouthtext + teartext + eyestext + browstext;
	}else if (orient == 3){
		document.getElementById('emote').value = crytext + portblushtext + browstext + eyestext + teartext + mouthporttext;
	}else if (orient == 4){
		document.getElementById('emote').value = crytext + portblushtext + mouthporttext + teartext + eyestext + browstext;
	}
	
	document.getElementById(blush).style.backgroundColor = "#cccccc";
	document.getElementById(cry).style.backgroundColor = "#cccccc";
	document.getElementById(mouth).style.backgroundColor = "#cccccc";
	document.getElementById(lefteye).style.backgroundColor = "#cccccc";
	document.getElementById(righteye).style.backgroundColor = "#cccccc";
	document.getElementById(brows).style.backgroundColor = "#cccccc";
	document.getElementById(eyes).style.backgroundColor = "#cccccc";
}

//Check which page your on and what orientation the emotes are and what type selection
function compat(){
	if (aboutPage == 1) return;
	if (orient != 0){
		if (portblushtext == "/blush " && permEnabled == 1){
			document.getElementById('blueMsg').innerHTML = "Permanent does not work with blush on this face";
			document.getElementById('blueMsg').style.display = "";
		}else if (crytext != "" && permEnabled == 0){
			document.getElementById('blueMsg').innerHTML = "Permanent is being forced on by the crying";
			document.getElementById('blueMsg').style.display = "";
		}else{
			document.getElementById('blueMsg').style.display = "none";
			document.getElementById('blueMsg').innerHTML = "";
		}
	}else if (crytext != "" && permEnabled == 0){
		document.getElementById('blueMsg').innerHTML = "Permanent is being forced on by the crying";
		document.getElementById('blueMsg').style.display = "";
	}else{
		document.getElementById('blueMsg').style.display = "none";
		document.getElementById('blueMsg').innerHTML = "";
	}
	
	if (orient == 0){
		if (teartext == "'"){
			cry = "cryoff";
			crytext = "";
			teartext = "";
			document.getElementById('cryoff').style.backgroundColor = "#cccccc";
			document.getElementById('crytear').style.backgroundColor = "#212121";
			document.getElementById('ocCry').style.display = "none";
			document.getElementById('ocTear').style.display = "none";
		}
		document.getElementById('cryBoxName').innerHTML = "Cry";
		document.getElementById("hori").style.display = "";
		document.getElementById("port").style.display = "none";
		document.getElementById('crytear').style.display = "none";
		document.getElementById('ocBothEye').style.display = "none";
		document.getElementById('ocLeftEye').style.display = "";
		document.getElementById('ocRightEye').style.display = "";
	}else if(orient == 1){
		document.getElementById('cryBoxName').innerHTML = "Cry & Tear";
		document.getElementById("hori").style.display = "none";
		document.getElementById("port").style.display = "";
		document.getElementById('crytear').style.display = "";
		document.getElementById('ocBothEye').style.display = "";
		document.getElementById('ocLeftEye').style.display = "none";
		document.getElementById('ocRightEye').style.display = "none";
		if (mouth == "mouth16" && eyes == "eyes1" && brows=="browsoff"){
			document.getElementById('crytear').style.display = "none";
		}else if (mouth == "mouth16" && eyes == "eyes4" && brows=="browsoff"){
			document.getElementById('crytear').style.display = "none";
		}
	}else if(orient == 2){
		document.getElementById('cryBoxName').innerHTML = "Cry & Tear";
		document.getElementById("hori").style.display = "none";
		document.getElementById("port").style.display = "";
		document.getElementById('crytear').style.display = "";
		document.getElementById('ocBothEye').style.display = "";
		document.getElementById('ocLeftEye').style.display = "none";
		document.getElementById('ocRightEye').style.display = "none";
		if (mouth == "mouth16" && eyes == "eyes1" && brows=="browsoff"){
			document.getElementById('crytear').style.display = "none";
		}else if (mouth == "mouth16" && eyes == "eyes4" && brows=="browsoff"){
			document.getElementById('crytear').style.display = "none";
		}
	}else if(orient == 3){
		document.getElementById('cryBoxName').innerHTML = "Cry & Tear";
		document.getElementById("hori").style.display = "none";
		document.getElementById("port").style.display = "";
		document.getElementById('crytear').style.display = "";
		document.getElementById('ocBothEye').style.display = "";
		document.getElementById('ocLeftEye').style.display = "none";
		document.getElementById('ocRightEye').style.display = "none";
		if (mouth == "mouth16" && eyes == "eyes1" && brows=="browsoff"){
			document.getElementById('crytear').style.display = "none";
		}else if (mouth == "mouth16" && eyes == "eyes4" && brows=="browsoff"){
			document.getElementById('crytear').style.display = "none";
		}
	}else if(orient == 4){
		document.getElementById('cryBoxName').innerHTML = "Cry & Tear";
		document.getElementById("hori").style.display = "none";
		document.getElementById("port").style.display = "";
		document.getElementById('crytear').style.display = "";
		document.getElementById('ocBothEye').style.display = "";
		document.getElementById('ocLeftEye').style.display = "none";
		document.getElementById('ocRightEye').style.display = "none";
		if (mouth == "mouth16" && eyes == "eyes1" && brows=="browsoff"){
			document.getElementById('crytear').style.display = "none";
		}else if (mouth == "mouth16" && eyes == "eyes4" && brows=="browsoff"){
			document.getElementById('crytear').style.display = "none";
		}
	}
}

//Shows the reset message popup above the reset button when mouse over
function resetMsgPopup(data){
	if (data == "on"){
		document.getElementById("resetMsg").style.display = "";
	}else{
		document.getElementById("resetMsg").style.display = "none";
	}
}

function doReset(data){
	if (data == "all"){
		resetButtons();
		resetFace();
		resetAll();
		permEnabled = 0;
		updateAll();
	}else if(data == "loaded"){
		resetButtons();
		resetFace();
		resetAll();
		permEnabled = 0;
		resetLoaded();
		updateAll();
	}else if (data == "face"){
		resetButtons();
		resetAll();
		updateAll();
	}else if (data == "buttons"){
		resetButtons();
		resetFace();
	}
}

//Triggers the resetEverything function without reseting everything but the buttons/oc
function resetButtons(){
	document.getElementById('mouth1').style.backgroundColor = "#212121";
	document.getElementById('mouth2').style.backgroundColor = "#212121";
	document.getElementById('mouth3').style.backgroundColor = "#212121";
	document.getElementById('mouth4').style.backgroundColor = "#212121";
	document.getElementById('mouth5').style.backgroundColor = "#212121";
	document.getElementById('mouth6').style.backgroundColor = "#212121";
	document.getElementById('mouth7').style.backgroundColor = "#212121";
	document.getElementById('mouth8').style.backgroundColor = "#212121";
	document.getElementById('mouth9').style.backgroundColor = "#212121";
	document.getElementById('mouth10').style.backgroundColor = "#212121";
	document.getElementById('mouth11').style.backgroundColor = "#212121";
	document.getElementById('mouth12').style.backgroundColor = "#212121";
	document.getElementById('mouth13').style.backgroundColor = "#212121";
	document.getElementById('mouth15').style.backgroundColor = "#212121";
	document.getElementById('mouth16').style.backgroundColor = "#212121";
	document.getElementById('mouth17').style.backgroundColor = "#212121";
	document.getElementById('mouth18').style.backgroundColor = "#212121";
	document.getElementById('mouth19').style.backgroundColor = "#212121";
	document.getElementById('mouth20').style.backgroundColor = "#212121";
	document.getElementById('mouth21').style.backgroundColor = "#212121";
	document.getElementById('mouth22').style.backgroundColor = "#212121";
	document.getElementById('mouth23').style.backgroundColor = "#212121";
	document.getElementById('lefteye1').style.backgroundColor = "#212121";
	document.getElementById('lefteye2').style.backgroundColor = "#212121";
	document.getElementById('lefteye3').style.backgroundColor = "#212121";
	document.getElementById('lefteye4').style.backgroundColor = "#212121";
	document.getElementById('lefteye5').style.backgroundColor = "#212121";
	document.getElementById('lefteye6').style.backgroundColor = "#212121";
	document.getElementById('lefteye7').style.backgroundColor = "#212121";
	document.getElementById('lefteye8').style.backgroundColor = "#212121";
	document.getElementById('lefteye9').style.backgroundColor = "#212121";
	document.getElementById('lefteye11').style.backgroundColor = "#212121";
	document.getElementById('lefteye12').style.backgroundColor = "#212121";
	document.getElementById('lefteye13').style.backgroundColor = "#212121";
	document.getElementById('lefteye14').style.backgroundColor = "#212121";
	//document.getElementById('lefteye15').style.backgroundColor = "#212121";
	document.getElementById('lefteye16').style.backgroundColor = "#212121";
	document.getElementById('lefteye17').style.backgroundColor = "#212121";
	document.getElementById('lefteye18').style.backgroundColor = "#212121";
	document.getElementById('lefteye19').style.backgroundColor = "#212121";
	document.getElementById('lefteye20').style.backgroundColor = "#212121";
	document.getElementById('righteye1').style.backgroundColor = "#212121";
	document.getElementById('righteye2').style.backgroundColor = "#212121";
	document.getElementById('righteye3').style.backgroundColor = "#212121";
	document.getElementById('righteye4').style.backgroundColor = "#212121";
	document.getElementById('righteye5').style.backgroundColor = "#212121";
	document.getElementById('righteye6').style.backgroundColor = "#212121";
	document.getElementById('righteye7').style.backgroundColor = "#212121";
	document.getElementById('righteye8').style.backgroundColor = "#212121";
	document.getElementById('righteye9').style.backgroundColor = "#212121";
	document.getElementById('righteye11').style.backgroundColor = "#212121";
	document.getElementById('righteye12').style.backgroundColor = "#212121";
	document.getElementById('righteye13').style.backgroundColor = "#212121";
	document.getElementById('righteye14').style.backgroundColor = "#212121";
	//document.getElementById('righteye15').style.backgroundColor = "#212121";
	document.getElementById('righteye16').style.backgroundColor = "#212121";
	document.getElementById('righteye17').style.backgroundColor = "#212121";
	document.getElementById('righteye18').style.backgroundColor = "#212121";
	document.getElementById('righteye19').style.backgroundColor = "#212121";
	document.getElementById('righteye20').style.backgroundColor = "#212121";
	document.getElementById('browsoff').style.backgroundColor = "#212121";
	document.getElementById('browsangry').style.backgroundColor = "#212121";
	document.getElementById('browssad').style.backgroundColor = "#212121";
	document.getElementById('browsunhappy').style.backgroundColor = "#212121";
	document.getElementById('eyes1').style.backgroundColor = "#212121";
	document.getElementById('eyes2').style.backgroundColor = "#212121";
	document.getElementById('eyes3').style.backgroundColor = "#212121";
	document.getElementById('eyes4').style.backgroundColor = "#212121";
	document.getElementById('eyes5').style.backgroundColor = "#212121";
	document.getElementById('eyes7').style.backgroundColor = "#212121";
	document.getElementById('eyes8').style.backgroundColor = "#212121";
	document.getElementById('cryoff').style.backgroundColor = "#212121";
	document.getElementById('cryon').style.backgroundColor = "#212121";
	document.getElementById('crytear').style.backgroundColor = "#212121";
	document.getElementById('blushoff').style.backgroundColor = "#212121";
	document.getElementById('blushon').style.backgroundColor = "#212121";
	document.getElementById('blushon').style.display = "";
	document.getElementById('cryon').style.display = "";
	document.getElementById('browsangry').style.display = "";
	document.getElementById('browsangry').style.display = "";
	document.getElementById('browsangry').style.display = "";
	document.getElementById('browssad').style.display = "";
	document.getElementById('browsunhappy').style.display = "";
	document.getElementById('crytear').style.left = "100px";
	document.getElementById('browsoff').style.display = "";
	document.getElementById('browsangry').style.display = "";
	document.getElementById('browssad').style.display = "";
	document.getElementById('browsunhappy').style.display = "";
	document.getElementById('browsangry').style.left = "50px";
	document.getElementById('browssad').style.left = "100px";
	document.getElementById('browsunhappy').style.left = "150px";
	document.getElementById('cryBoxName').innerHTML = "Cry";
}

function resetFace(){
	selectedMode = 1;
	orient = 0;
	orlan = 0;
	document.getElementById('mouth12').style.top = "50px";
	document.getElementById('mouth12').style.left = "50px";
	document.getElementById('mouth13').style.top = "50px";
	document.getElementById('mouth13').style.left = "100px";
	document.getElementById('mouth22').style.top = "100px";
	document.getElementById('mouth22').style.left = "0px";
	document.getElementById('mouth21').style.top = "50px";
	document.getElementById('mouth21').style.left = "450px";
	document.getElementById('mouth23').style.top = "100px";
	document.getElementById('mouth23').style.left = "50px";
	document.getElementById('MouthBox').style.height = "150px";
	document.getElementById('mouth3').style.display = "";
	document.getElementById('mouth5').style.display = "";
	document.getElementById('mouth6').style.display = "";
	document.getElementById('mouth7').style.display = "";
	document.getElementById('mouth10').style.display = "";
	document.getElementById('mouth11').style.display = "";
	document.getElementById('mouth15').style.display = "";
	document.getElementById('mouth16').style.display = "";
	document.getElementById('mouth17').style.display = "";
	document.getElementById('mouth18').style.display = "";
	document.getElementById('mouth19').style.display = "";
	document.getElementById('mouth20').style.display = "";
	document.getElementById('mouth23').style.display = "";
	document.getElementById('typeSwitchAuto').style.backgroundColor = "#ca7e4e";
	document.getElementById('typeSwitchAuto').style.color = "#e1def3";
	document.getElementById('typeSwitchLan').style.backgroundColor = "";
	document.getElementById('typeSwitchLan').style.color = "#ca7e4e";
	document.getElementById('typeSwitchPort').style.backgroundColor = "";
	document.getElementById('typeSwitchPort').style.color = "#ca7e4e";
}

function resetAll(){
	eyes = 'eyes1';
	brows = 'browsoff';
	righteye = 'righteye1';
	lefteye = 'lefteye1';
	cry = 'cryoff';
	blush = 'blushoff';
	mouth = 'mouth1';
}

function resetLoaded(){
	blush = "blushoff";
	cry = "cryoff";
	mouth = "mouth1";
	lefteye = "lefteye1";
	righteye = "righteye1";
	brows = "browsoff";
	eyes = "eyes1";
}

// This is what triggers the update notification.
function doNotif(notifMSG){
	if (notifMSG == 1){
		setTimeout(function(){
			window.parent.document.getElementById('notifMSG').innerHTML = "UPDATE AVAILABLE<br>Refresh to update.";
			window.parent.document.getElementById('notificaTion').style.display = "";
		}, 300);
	}else if(notifMSG == "c"){
		setTimeout(function(){
			updateAlert = 0;
			window.parent.document.getElementById('notificaTion').style.display = "none";
			window.parent.document.getElementById('notifMSG').innerHTML = "";
		}, 100);
	}else{
	}
}