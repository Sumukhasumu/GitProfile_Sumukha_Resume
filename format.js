// Function to display the current date
function displayCurrentDate() {
    const dateElement = document.getElementById("currentDate");
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.innerHTML = new Date().toLocaleDateString(undefined, options);
}

// Function to force download the resume
function downloadResume(event) {
    event.preventDefault(); // Prevent default link behavior
    const link = document.createElement('a');
    link.href = event.target.href;
    link.setAttribute('download', 'Sumukha_S_Resume.pdf'); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Attach event listener when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    const resumeButton = document.getElementById("resumeDownload");
    if (resumeButton) {
        resumeButton.addEventListener("click", downloadResume);
    }
    
    displayCurrentDate(); // Call function to display date on page load
});
