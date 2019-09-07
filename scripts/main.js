function changePlayer(playerName){
	var x = document.getElementById("portrait");
	var video = document.getElementById('play-vid');
	switch(playerName){
		case "john":
			x.src = "images/john-action-main.png"
			video.src = "videos/JohnBest.mov";
			changeStats(42,1,1,16);
			break;
		case "mex":
			x.src = "images/mex-action.png"
			video.src = "videos/MexBest.mov";
			changeStats(26,2,2,7);
			break;
		case "steph":
			x.src = "images/steph-action.png";
			video.src = "videos/StephBest.mov";
			changeStats(41,1,1,29);
			break;
		case "maria":
			x.src = "images/maria-action.png";
			video.src = "videos/MariaBest.mov";
			changeStats(17,1,1,11);
			break;
		case "lily":
			x.src = "images/lily-action.png";
			video.src = "videos/LilyBest.mov";
			changeStats(13,1,1,4);
			break;
		case "josh":
			x.src = "images/josh-action.png";
			video.src = "videos/JoshBest.mov";
			changeStats(33,1,1,17);
			break;
		case "eli":
			x.src = "images/eli-action.png";
			video.src = "videos/EliBest.mov";
			changeStats(25,1,1,8);
			break;
	}
	console.log('hello world');
}

function changeStats(kills, assists, digs, aces){
	document.getElementById("kill").innerHTML = `KILLS: ${kills}`;
	document.getElementById("assist").innerHTML = `ASSISTS: ${assists}`;
	document.getElementById("dig").innerHTML = `DIGS: ${digs}`;
	document.getElementById("ace").innerHTML = `ACES: ${aces}`;
}

function firstload(){
	changePlayer("john");
}