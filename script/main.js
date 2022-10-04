$(function () {

})

window.addEventListener("DOMContentLoaded", function () {

	const SEARCHBTN = document.querySelector("#searchBtn")
	const FIRST = document.querySelector(".first");
	const SECOND = document.querySelector(".second");
	const THIRD = document.querySelector(".third");
	const EVENTS = document.querySelector(".events");
	let count = 0;

	const AUTO = setInterval(autoSlide, 4000);
	function autoSlide() {
		count++;
		if(count>=3){
			count=0;
		}
		EVENTS.style.marginLeft = count * (-1190) + "px";
		if (count == 0) {
			FIRST.classList.add("pagerblack");
			SECOND.classList.remove("pagerblack");
			THIRD.classList.remove("pagerblack");
		}
		else if (count == 1) {
			FIRST.classList.remove("pagerblack");
			SECOND.classList.add("pagerblack");
			THIRD.classList.remove("pagerblack");
		} else if (count == 2) {
			FIRST.classList.remove("pagerblack");
			SECOND.classList.remove("pagerblack");
			THIRD.classList.add("pagerblack");
		} 
	
	}

	FIRST.addEventListener("click", function (e) {
		console.dir(e);
		EVENTS.style.marginLeft = "0px";
		FIRST.classList.add("pagerblack");
		SECOND.classList.remove("pagerblack");
		THIRD.classList.remove("pagerblack");
		count = 0;
	})
	SECOND.addEventListener("click", function (e) {
		EVENTS.style.marginLeft = "-1190px";
		FIRST.classList.remove("pagerblack");
		SECOND.classList.add("pagerblack");
		THIRD.classList.remove("pagerblack");
		count = 1;
	})
	THIRD.addEventListener("click", function (e) {
		EVENTS.style.marginLeft = "-2380px";
		FIRST.classList.remove("pagerblack");
		SECOND.classList.remove("pagerblack");
		THIRD.classList.add("pagerblack");
		count = 2;
	})

	SEARCHBTN.addEventListener("click",function(){
		alert("기능 구현 중입니다.");
	})


})