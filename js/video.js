var video;
var playbutton;
var pausebutton;
var slowdown;
var speedup;
var skip;
var mute;
var slider;
var volume;
var vid_speed
var og;
var os;
var class_list;

window.onload = function () {
	video = document.getElementById("player1");
	loading();
	playbutton = document.getElementById("play");
	pausebutton = document.getElementById("pause");
	slowdown = document.getElementById("slower");
	speedup = document.getElementById("faster");
	skip = document.getElementById("skip");
	mute = document.getElementById("mute");
	slider = document.getElementById("slider");
	volume = document.getElementById("volume");
	os = document.getElementById("vintage");
	og = document.getElementById("orig");
	class_list = video.classList;
	og.addEventListener("click", function () {

		class_list.remove("oldSchool");
	});
	os.addEventListener("click", function () {
		class_list.add("oldSchool");
	});

	slider.addEventListener("change", function () {
		var volume = document.getElementById("slider").value;
		document.getElementById("volume").innerHTML = volume + "%";
		video.volume = volume / 100;
		console.log(video.volume)
	});
	playbutton.addEventListener("click", function () {
		console.log("Play the video");

		video.play();


	});
	pausebutton.addEventListener("click", function () {
		console.log("Pause the video");
		video.pause();
		var volume = document.getElementById("slider").value;
		document.getElementById("volume").innerHTML = volume + "%";

	});
	slowdown.addEventListener("click", function () {
		vid_speed = video.playbackRate;
		vid_speed = vid_speed - 0.1;
		video.playbackRate = vid_speed;
		console.log("Slowed down video speed to", video.playbackRate);


	});
	speedup.addEventListener("click", function () {
		vid_speed = video.playbackRate;
		vid_speed = vid_speed + 0.1;
		video.playbackRate = vid_speed;
		console.log("Sped up video speed to", video.playbackRate);


	});

	skip.addEventListener("click", function () {

		console.log(video.currentTime)

		var newtime = video.currentTime + 10;
		if (newtime >= video.duration) {
			video.currentTime = 0
		}
		else {
			video.currentTime = newtime;
		}
		console.log("Skipped ahead in the video to", video.currentTime)
	});

	mute.addEventListener("click", function () {

		if (video.muted) {
			video.muted = false;
			console.log("Video unmuted")
		}
		else {
			video.muted = true;
			console.log("Video muted")
		}




	});

}
function loading() {
	console.log("Good job opening the window");
	video.autoPlay = false;
	video.loop = false;

}



// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });


