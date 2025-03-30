function openSite(url, message) {
    alert(message);
    window.open(url, "_blank");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
