// Project filtering function
function filterProjects(category) {
  const projects = document.querySelectorAll(".project");
  projects.forEach(project => {
    if (category === 'all' || project.getAttribute("data-category") === category) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}

// Form validation function
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
  if (!name || !email || !message) {
    alert("All fields are required!");
    return false;
  }
  
  // Email pattern for basic validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address!");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}