/*
==========================================================
Dream Ladders ERP
File        : auth.js
Module      : Authentication
Version     : 1.0.0
Description : Login Page JavaScript
==========================================================
*/

"use strict";

/* ==========================================================
   DOM Elements
========================================================== */

const loginForm = document.getElementById("loginForm");

const usernameInput = document.getElementById("username");

const passwordInput = document.getElementById("password");

const togglePasswordButton = document.getElementById("togglePassword");

const rememberMeCheckbox = document.getElementById("rememberMe");


/* ==========================================================
   Initialize Page
========================================================== */

document.addEventListener("DOMContentLoaded", initializePage);

function initializePage() {

    loadRememberedUsername();

    registerEvents();

}


/* ==========================================================
   Register Events
========================================================== */

function registerEvents() {

    loginForm.addEventListener("submit", handleLogin);

    togglePasswordButton.addEventListener("click", togglePasswordVisibility);

}


/* ==========================================================
   Password Toggle
========================================================== */

function togglePasswordVisibility() {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePasswordButton.textContent = "Hide";

    } else {

        passwordInput.type = "password";

        togglePasswordButton.textContent = "Show";

    }

}


/* ==========================================================
   Remember Username
========================================================== */

function loadRememberedUsername() {

    const savedUsername = localStorage.getItem("dlbs_username");

    if (savedUsername) {

        usernameInput.value = savedUsername;

        rememberMeCheckbox.checked = true;

    }

}



/* ==========================================================
   Login Handler
========================================================== */

function handleLogin(event) {

    event.preventDefault();

    const username = usernameInput.value.trim();

    const password = passwordInput.value.trim();

    if (!validateLogin(username, password)) {

        return;

    }

    saveRememberedUsername(username);

    /*
      Temporary Login

      This is ONLY for frontend development.

      In Module 2, this section will call the
      Google Apps Script API to verify users.
    */

    
      if (username === "admin" && password === "admin123") {

    setLoginButtonLoading(true);

    createSession(username);

    setTimeout(function () {

        window.location.href = "dashboard.html";

    }, 800);

} 



       
    
    else {

        alert("Invalid username or password.");

    }

}


/* ==========================================================
   Validation
========================================================== */

function validateLogin(username, password) {

    if (username === "") {

        alert("Please enter your username or email.");

        usernameInput.focus();

        return false;

    }

    if (password === "") {

        alert("Please enter your password.");

        passwordInput.focus();

        return false;

    }

    return true;

}


/* ==========================================================
   Remember Me
========================================================== */

function saveRememberedUsername(username) {

    if (rememberMeCheckbox.checked) {

        localStorage.setItem("dlbs_username", username);

    } else {

        localStorage.removeItem("dlbs_username");

    }

}

/* ==========================================================
   Session Management (Temporary)
========================================================== */

function createSession(username) {

    const session = {

        username: username,

        loginTime: new Date().toISOString(),

        authenticated: true

    };

    sessionStorage.setItem(
        "dlbs_session",
        JSON.stringify(session)
    );

}


/* ==========================================================
   Loading Button
========================================================== */

function setLoginButtonLoading(isLoading) {

    const loginButton = document.getElementById("loginButton");

    if (isLoading) {

        loginButton.disabled = true;

        loginButton.textContent = "Signing In...";

    } else {

        loginButton.disabled = false;

        loginButton.textContent = "Login";

    }

}


/* ==========================================================
   Check Existing Session
========================================================== */

function checkExistingSession() {

    const session = sessionStorage.getItem("dlbs_session");

    if (!session) {

        return;

    }

    /*
      In future modules,
      authenticated users
      will automatically
      go to dashboard.
    */

}


/* ==========================================================
   Update initializePage()
   ==========================================================

   IMPORTANT:

   Modify initializePage() so it becomes:

   function initializePage() {

       checkExistingSession();

       loadRememberedUsername();

       registerEvents();

   }

========================================================== */
