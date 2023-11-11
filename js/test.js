// Check local storage if page is reloaded! 
window.onload = function () {
    let savedBgTask = sessionStorage.getItem('SavedBgTask');
    if (savedBgTask) {
      const bgtask = document.getElementById('backg1');
      bgtask.innerHTML = savedBgTask; // Change bg text with task on local storage
      bgtask.style.overflow = 'visible'; bgtask.style.overflowWrap = 'break-word'; // reformat text from session storage
      document.getElementById('backg2').innerHTML = ""; // Set that to empty
      document.getElementById('backg3').innerHTML = ""; // Set that to empty
    }
}

// THIS WILL CHANGE BACKGROUND TEXT IF USER PRESS 'SHIFT + E' or 'SHIFT + e'
document.addEventListener('keydown', (event) => {
    if (event.shiftKey && event.key === 'E' || event.shiftKey && event.key === 'e') {

        let userBgTask = prompt("Change Background Task: ");
        if (userBgTask !== null) {
            const bgtask = document.getElementById("backg1")
            bgtask.innerHTML = userBgTask; // Change text on background
            bgtask.style.overflow = 'visible'; bgtask.style.overflowWrap = 'break-word'; // reformat text for live page
            sessionStorage.setItem('SavedBgTask', userBgTask); // Add task to session storage
            document.getElementById('backg2').innerHTML = ""; // Set that to empty
            document.getElementById('backg3').innerHTML = ""; // Set that to empty
        } 
        else {console.log("Prompt canceled!");}
    }
});
     