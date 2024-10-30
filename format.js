function displayCurrentDate() {
    const dateElement = document.getElementById("currentDate");
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.innerHTML = new Date().toLocaleDateString(undefined, options);
}
