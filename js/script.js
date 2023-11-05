const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	},
};

//========================================================================================================================================================

const observer = new IntersectionObserver(
	(entries, observer) => {
		entries.map((entry) => {
			if (entry.isIntersecting) {
				const id = entry.target.id;

				const target = document.querySelector(`[href='#${id}']`);
				changeMenuSlider(target.offsetLeft, target.offsetWidth);
			}
		});
	},
	{
		threshold: 0.7,
	},
);

document.querySelectorAll("section").forEach((section) => {
	observer.observe(section);
});

//========================================================================================================================================================

const gotoSection = () => {
	const links = document.querySelectorAll("[data-goto-section]");

	links.forEach((link) => {
		link.addEventListener("click", (e) => {
			const header = document.querySelector(".fixed");
			if (link.dataset.gotoSection) {
				e.preventDefault();
				const section = document.getElementById(e.target.dataset.gotoSection);
				const sectionTop = header
					? section.getBoundingClientRect().top - header.offsetHeight
					: section.getBoundingClientRect().top;

				document.body.classList.remove("page__body--lock");
				const iconMenu = document
					.querySelector(".menu__icon")
					.classList.remove("menu__icon--active");
				const menuBody = document
					.querySelector(".menu__body")
					.classList.remove("menu__body--active");

				window.scrollBy({
					top: sectionTop,
					behavior: "smooth",
				});
			}
		});
	});
};
gotoSection();

//========================================================================================================================================================

if (isMobile.any()) {
	document.body.classList.add("page__body--touch");

	const menuArrow = document.querySelectorAll(".menu__arrow");

	menuArrow.forEach((arrow) => {
		arrow.addEventListener("click", () => {
			arrow.parentElement.classList.toggle("menu__item--active");
		});
	});
} else {
	document.body.classList.add("page__body--pc");
}

const iconMenu = document.querySelector(".menu__icon");
if (iconMenu != null) {
	const menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", () => {
		document.body.classList.toggle("page__body--lock");
		iconMenu.classList.toggle("menu__icon--active");
		menuBody.classList.toggle("menu__body--active");
	});
}

let body = document.body,
	html = document.documentElement;

let height = Math.max(
	body.scrollHeight,
	body.offsetHeight,
	html.clientHeight,
	html.scrollHeight,
	html.offsetHeight,
);

const header = document.querySelector(".header");
if (header) {
	if (height > 1500) {
		window.addEventListener("scroll", (e) => {
			if (window.pageYOffset > 200) {
				header.classList.add("fixed");
				document.body.style.paddingTop = `${header.offsetHeight}px`;
			} else {
				header.classList.remove("fixed");
				document.body.style.paddingTop = `0px`;
			}
		});
	}
}

//========================================================================================================================================================

const menuSlider = document.querySelector(".menu__slider");
const links = document.querySelectorAll("[data-goto-section]");

const changeMenuSlider = (left = 0, width = 100) => {
	menuSlider.style.left = `${left}px`;
	menuSlider.style.width = `${width}px`;
};

// links.forEach((link) => {
// 	link.addEventListener("click", (e) => {
// 		const target = e.target;
// 		changeMenuSlider(target.offsetLeft, target.clientWidth);
// 	});
// });

changeMenuSlider(links[0].offsetLeft, links[0].clientWidth);

//========================================================================================================================================================

new WOW().init();
//========================================================================================================================================================

document.querySelectorAll(".paral").forEach((scene) => {
	new Parallax(scene);
});
