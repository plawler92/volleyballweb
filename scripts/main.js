function changePlayer(playerName){
	var x = document.getElementById("portrait");
	switch(playerName){
		case "john":
			x.src = "images/john-action-main.png"
			changeStats(1,1,1,1);
			break;
		case "mex":
			x.src = "images/mex-head2.jpg"
			changeStats(2,2,2,2);
			break;
		case "steph":
			x.src = "";
			changeStats(1,1,1,1);
			break;
		case "maria":
			x.src = "";
			changeStats(1,1,1,1);
			break;
		case "lily":
			x.src = "";
			changeStats(1,1,1,1);
			break;
		case "josh":
			x.src = "";
			changeStats(1,1,1,1);
			break;
		case "eli":
			x.src = "";
			changeStats(1,1,1,1);
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