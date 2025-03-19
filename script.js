/* script.js */
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let priority = document.getElementById("priority").value;
    let message = document.getElementById("message").value;
    
    let feedbackItem = `<li class='list-group-item'><strong>${name}</strong> (${category}, ${priority}) - ${message}</li>`;
    document.getElementById("feedbackList").innerHTML += feedbackItem;
    
    document.getElementById("feedbackForm").reset();
});
