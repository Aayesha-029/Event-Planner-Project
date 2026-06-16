document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("signupForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  // ================= EMAIL =================
  function validateEmail() {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!regex.test(email.value.trim())) {
      emailError.textContent = "Email must end with @gmail.com";
      return false;
    }
    emailError.textContent = "";
    return true;
  }

  // ================= PASSWORD =================
  function validatePassword() {
    if (password.value.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters";
      return false;
    }
    passwordError.textContent = "";
    return true;
  }

  // ================= CONFIRM PASSWORD =================
  function validateConfirmPassword() {
    if (password.value !== confirmPassword.value) {
      confirmPasswordError.textContent = "Passwords do not match";
      return false;
    }
    confirmPasswordError.textContent = "";
    return true;
  }

  // ================= REAL TIME VALIDATION =================
  email.addEventListener("input", validateEmail);
  password.addEventListener("input", validatePassword);
  confirmPassword.addEventListener("input", validateConfirmPassword);

  // ================= SUBMIT =================
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const isValid =
      validateEmail() &&
      validatePassword() &&
      validateConfirmPassword();

    if (isValid) {

      // Save signup status
      localStorage.setItem("isLoggedIn", "true");

      alert("Account created successfully!");

      // Redirect to home page
      window.location.href = "project.html";
    }
  });

});