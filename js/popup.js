//Popups
let popup_link = document.querySelectorAll("._popup-link");
let popup = document.querySelectorAll(".popup");

popup_link.forEach((link, idx) => {
	link.addEventListener("click", () => {
		popup[idx].setAttribute("open", true);
		document.body.classList.add("page__lock");
	});
});

popup.forEach((pop) => {
	pop.addEventListener("click", (e) => {
		if (e.target.closest(".popup__overlay") != null) {
			e.target.closest(".popup").removeAttribute("open");
		}
	});
});
document.addEventListener("keydown", function (e) {
	if (e.code === "Escape") {
		popup_close();
	}
});
