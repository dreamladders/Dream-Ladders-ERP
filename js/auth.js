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
