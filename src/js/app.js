window.addEventListener("DOMContentLoaded", () => {
	const mobileMenuToggler = document.querySelector(".mobile-menu-toggle");
	const navElement = document.querySelector("header > nav");
	mobileMenuToggler.addEventListener("click", () => {
		navElement.classList.toggle("mobile-menu-open");
	});
});
