let form = document.getElementById("form");

form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    // Get the values of the email and password fields
    let loginemail = form.elements.email.value;
    let loginpassword = form.elements.password.value;

    // Retrieve signup data from Local Storage
    let singupData = JSON.parse(localStorage.getItem("singup")) || [];

    // Check if there's a user with the provided email and matching password
    let user = singupData.find((userData) => {
        return userData.email === loginemail && userData.password === loginpassword;
    });

    if (user) {
        alert("Login successful");
        form.reset();
        window.location.href = "home.html";
    } else {
        alert("Login failed. Please try again.");
    }
});