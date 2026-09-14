// فتح وإغلاق قائمة الجوال
const menuButton = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

// إغلاق القائمة عند اختيار أي قسم
document.querySelectorAll(".nav nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});
