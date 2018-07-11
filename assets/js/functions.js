let left = document.querySelector(".left");
let right = document.querySelector(".right");
let contentBelt = document.querySelector(".content-belt");
let counter = 0;
let contentNav = document.querySelector(".content-nav");
let link = document.querySelectorAll(".link");

left.addEventListener("click" , leftClick);
right.addEventListener("click" , rightClick);
contentNav.addEventListener("click" , navigate);
document.addEventListener("keydown" , rightClick);
document.addEventListener("keydown" , leftClick);

if(counter == 0){
	left.style.visibility = "hidden";
}

// LEFTCLICK LEFTCLICK LEFTCLICK
// LEFTCLICK LEFTCLICK LEFTCLICK

function leftClick(x){
	if(x.target.className == "left" || x.key == "ArrowLeft"){
		counter--

		if(counter >= 0){
			contentBelt.style.marginLeft = "" + -740*counter + "px";
		}else{
			counter = 0;
		}

		if(counter == 0){
			left.style.visibility = "hidden";
			right.style.visibility = "visible";
		}else{
			right.style.visibility = "visible";
		}

		navReset();
		contentNav.children[counter].style.color = "#FF4136";
	}

	//console.log(x);
}

// RIGHTCLICK RIGHTCLICK RIGHTCLICK
// RIGHTCLICK RIGHTCLICK RIGHTCLICK

function rightClick(x){
	if(x.target.className == "right" || x.key == "ArrowRight"){
		counter++

		if(counter < link.length){
			contentBelt.style.marginLeft = "" + -740*counter + "px";
		}else{
			counter = link.length - 1;
		}

		if(counter == 3){
			right.style.visibility = "hidden";
		}else{
			left.style.visibility = "visible";
		}

		navReset();
		contentNav.children[counter].style.color = "#FF4136";
	}

	//console.log(link.length);
}

// NAVIGATION NAVIGATION NAVIGATION
// NAVIGATION NAVIGATION NAVIGATION

function navigate(x){
	if(x.target.classList.contains("link")){
		for(let i = 0; i < link.length; i++){
			if(contentNav.children[i] == x.target){
				counter = i;

				contentBelt.style.marginLeft = "" + -740*counter + "px";

				if(counter == 3){
					left.style.visibility = "visible";
					right.style.visibility = "hidden";
				}else if(counter == 0){
					left.style.visibility = "hidden";
					right.style.visibility = "visible";
				}else{
					right.style.visibility = "visible";
					left.style.visibility = "visible";
				}

				navReset();
				contentNav.children[i].style.color = "#FF4136";
			}
		}
	}
}

navStart();

function navStart(){
	navReset();
	contentNav.children[0].style.color = "#FF4136";		
}

function navReset(){
	for(let i = 0; i < link.length; i++){
		contentNav.children[i].style.color = "#666";
	}

	contentNav.lastElementChild.style.color = "#0074D9";
}

// MODAL MODAL MODAL MODAL MODAL
// MODAL MODAL MODAL MODAL MODAL

let exWeb = document.querySelector(".examples-web");
let webModal = document.querySelector(".web-modal");
let modalClose = document.querySelector(".modal-close");
let modalContent = document.querySelector(".modal-content");
let modalFooter = document.querySelector(".modal-footer");

exWeb.addEventListener("click" , openModal);
webModal.addEventListener("click" , closeModal);

function resetModal(){
	for(let i = 0; i < 3; i++){
		webModal.children[i].style.display = "none";
	}
}

function openModal(x){
	if(x.target.className == "web-unit"){
		webModal.style.display = "flex";

		console.log();

		for(let i = 0; i < 3; i++){
			if(x.target == exWeb.children[i]){

				webModal.children[i].style.display = "block";
				
				setTimeout(function(){
					webModal.children[i].children[0].style.opacity = "1";

					setTimeout(function(){
						webModal.children[i].children[1].style.height = "45px";

						setTimeout(function(){
							webModal.children[i].children[1].style.opacity = "1";
						} , 200)
					} , 400)
				} , 200)

			}
		}

	}
}

function closeModal(x){
	if(x.target.className == "modal-close" || x.target.tagName == "SPAN" || x.target.className == "web-modal"){
		resetModal();

		webModal.style.display = "none";

		for(let i = 0; i < 3; i++){
			webModal.children[i].style.display = "none";
			webModal.children[i].children[0].style.opacity = "0";
			webModal.children[i].children[1].style.height = "0px";
			webModal.children[i].children[1].style.opacity = "0";
		}
	}
}



