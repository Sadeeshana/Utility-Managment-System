document.getElementById("updateForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const newPass = document.getElementById("newPassword").value;
  const confirmPass = document.getElementById("confirmPassword").value;
  const message = document.getElementById("message");

  if (newPass === confirmPass) {
    message.style.display = "block";
    message.style.color = "#16a34a";
  } else {
    message.style.display = "block";
    message.style.color = "red";
    message.textContent = "❌ Passwords do not match!";
  }
});

function goToLogin() {
  window.location.href = "LoginScreen.html";
}
