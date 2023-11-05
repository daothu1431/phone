document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".input-search");
    const messageElement = document.getElementById("message");

    searchInput.addEventListener("input", function () {
        const inputValue = searchInput.value.trim();
        const minLength = 6;

        if (inputValue.length >= minLength) {
            messageElement.textContent = "";
        } else {
            messageElement.textContent = "Tối thiểu 6 ký tự !!!";
        }
    });
});
