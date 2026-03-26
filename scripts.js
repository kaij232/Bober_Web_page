
var hearts = 3;
auplay = 0;

function startAudio(){
	if(auplay==0){
	var au = new Audio("templace/Pesnya_polnaya_versiya_-_Sidim_s_bobrom_za_stolom_vdvoem_na_uzhin_gotovim_poleno_78892357.mp3");
	au.play();
	auplay = 1;
	}
}
function toporAction(){
	if(document.getElementById("poleno").name == "0"){
	document.getElementById("poleno").src="templace/poleno1.png";
	document.getElementById("poleno").name="1";
	document.getElementById("obser").innerHTML = "Замечательно!";
	}else{
		document.getElementById("heart" + hearts).style.visibility = "hidden";
		hearts = hearts-1;
		if(hearts == 0){
			document.getElementById("dead").style.visibility = "Visible";
		}else if(hearts == 2){
			document.getElementById("obser").innerHTML = "Ты готовить вообще умеешь?";
		}else if(hearts == 1){
			document.getElementById("obser").innerHTML = "Отравить меня удумал?";
		}
	}
}
function flomaster(){
	if(document.getElementById("poleno").name == "1"){
	document.getElementById("poleno").src="templace/poleno2.jpg";
	document.getElementById("poleno").name="2";
	document.getElementById("obser").innerHTML = "Отлично!";
	}else{
		document.getElementById("heart" + hearts).style.visibility = "hidden";
		hearts = hearts-1;
		if(hearts == 0){
			document.getElementById("dead").style.visibility = "Visible";
		}else if(hearts == 2){
			document.getElementById("obser").innerHTML = "Ты готовить вообще умеешь?";
		}else if(hearts == 1){
			document.getElementById("obser").innerHTML = "Отравить меня удумал?";
		}
	}
}
function pech(){
	if(document.getElementById("poleno").name == "2"){
	document.getElementById("poleno").src="templace/poleno3.webp";
	document.getElementById("poleno").name="3";
	document.getElementById("obser").innerHTML = "Пахнет восхетельно!";
	
	document.getElementById("complete").style.visibility = "Visible";
	}else{
		document.getElementById("heart" + hearts).style.visibility = "hidden";
		hearts = hearts-1;
		if(hearts == 0){
			document.getElementById("dead").style.visibility = "Visible";
		}else if(hearts == 2){
			document.getElementById("obser").innerHTML = "Ты готовить вообще умеешь?";
		}else if(hearts == 1){
			document.getElementById("obser").innerHTML = "Отравить меня удумал?";
		}
	}
}