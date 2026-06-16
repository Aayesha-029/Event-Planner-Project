document.addEventListener("DOMContentLoaded", function() {
    console.log('Login page loaded');

    const form = document.getElementById("loginForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const phone = document.getElementById("phone");
    const role = document.getElementById("role");

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const phoneError = document.getElementById("phoneError");
    const roleError = document.getElementById("roleError");

    // Fixed admin credentials
    const ADMIN_EMAIL = "admin@gmail.com";
    const ADMIN_PASSWORD = "admin123";

    // Check if we need to open calendar after login
    const openCalendarAfterLogin = localStorage.getItem('openCalendarAfterLogin');
    console.log('openCalendarAfterLogin on login page:', openCalendarAfterLogin);

    // ================= EMAIL VALIDATION =================
    function validateEmail() {
        const pattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (!pattern.test(email.value.trim())) {
            emailError.textContent = "Email must end with @gmail.com";
            emailError.style.display = "block";
            return false;
        }
        emailError.style.display = "none";
        return true;
    }

    // ================= PASSWORD VALIDATION =================
    function validatePassword() {
        const roleValue = role.value;
        
        if (roleValue === "admin") {
            if (password.value !== ADMIN_PASSWORD) {
                passwordError.textContent = "Invalid admin password";
                passwordError.style.display = "block";
                return false;
            }
        } else if (roleValue === "user") {
            if (password.value.length < 6) {
                passwordError.textContent = "Password must be at least 6 characters";
                passwordError.style.display = "block";
                return false;
            }
        }
        
        passwordError.style.display = "none";
        return true;
    }

    // ================= PHONE VALIDATION =================
    function validatePhone() {
        phone.value = phone.value.replace(/\D/g, ""); // digits only

        if (phone.value.length !== 10) {
            phoneError.textContent = "Phone number must be exactly 10 digits";
            phoneError.style.display = "block";
            return false;
        }
        phoneError.style.display = "none";
        return true;
    }

    // ================= ROLE VALIDATION =================
    function validateRole() {
        if (role.value === "") {
            roleError.textContent = "Please select a role";
            roleError.style.display = "block";
            return false;
        }
        roleError.style.display = "none";
        return true;
    }

    // ================= ADMIN EMAIL VALIDATION =================
    function validateAdminEmail() {
        if (role.value === "admin") {
            if (email.value.trim() !== ADMIN_EMAIL) {
                emailError.textContent = "Admin email is not matched";
                emailError.style.display = "block";
                return false;
            }
        }
        return true;
    }

    // ================= REAL-TIME VALIDATION =================
    email.addEventListener("input", function() {
        validateEmail();
        if (role.value === "admin") {
            validateAdminEmail();
        }
    });
    
    password.addEventListener("input", function() {
        validatePassword();
    });
    
    phone.addEventListener("input", validatePhone);
    
    role.addEventListener("change", function() {
        validateRole();
        password.value = "";
        passwordError.style.display = "none";
        
        if (role.value === "admin") {
            validateAdminEmail();
        }
    });

    // ================= FORM SUBMIT =================
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        console.log('Login form submitted');

        if (!validateRole()) return;
        
        let isValid = validateEmail() && validatePhone();
        
        if (role.value === "admin") {
            isValid = isValid && validateAdminEmail() && validatePassword();
        } else {
            isValid = isValid && validatePassword();
        }

        if (!isValid) {
            console.log('Validation failed');
            return;
        }

        // Store login state
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", role.value);
        localStorage.setItem("userEmail", email.value.trim());

        // Show success message
        if (role.value === "admin") {
            alert("Admin logged in successfully");
        } else {
            alert("User logged in successfully");
        }

        // Check if we need to open calendar after login
        const shouldOpenCalendar = localStorage.getItem('openCalendarAfterLogin');
        console.log('Should open calendar:', shouldOpenCalendar);
        
        if (shouldOpenCalendar === 'true') {
            // Keep the flag and redirect to home page
            console.log('Redirecting to home page with calendar flag');
            window.location.href = "project.html";
        } else {
            // Normal redirect to home page
            console.log('Normal redirect to home page');
            window.location.href = "project.html";
        }
    });
});