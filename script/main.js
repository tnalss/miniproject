$(function () {

})

window.addEventListener("DOMContentLoaded", function () {

	const SEARCHBTN = document.querySelector("#searchBtn")
	const FIRST = document.querySelector(".first");
	const SECOND = document.querySelector(".second");
	const THIRD = document.querySelector(".third");
	const EVENTS = document.querySelector(".events");
	const SEEMORE1 = document.querySelector(".seeMore1");
	const SEEMORE2 = document.querySelector(".seeMore2");
	const CONTAINER1 = document.querySelector(".productheight1")
	const CONTAINER2 = document.querySelector(".productheight2")
	const CHOICE = document.querySelector(".greyoverlay")

	let count = 0;
	let on1 = 0;
	let on2 = 0;

	const AUTO = setInterval(autoSlide, 4000);
	function autoSlide() {
		count++;
		if (count >= 3) {
			count = 0;
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
		//console.dir(e);
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

	SEARCHBTN.addEventListener("click", function () {
		alert("기능 구현 중입니다.");
	})
	SEEMORE1.addEventListener("click", function (e) {
		e.preventDefault();
		CONTAINER1.classList.toggle("height6");
		if (on1 == 0)
			SEEMORE1.textContent = "닫기";
		if (on1 == 1)
			SEEMORE1.textContent = "더보기";
		on2 = !on2;
	})
	SEEMORE2.addEventListener("click", function (e) {
		e.preventDefault();
		CONTAINER2.classList.toggle("height6");
		if (on2 == 0)
			SEEMORE2.textContent = "닫기";
		if (on2 == 1)
			SEEMORE2.textContent = "더보기";
		on2 = !on2;

	})
	CHOICE.addEventListener("click", function (e) {
		e.preventDefault();
	})
	// CHOO.addEventListener("click",function(){
	// 	DROPMENUCHOO.classList.toggle("d-none");
	// })
})