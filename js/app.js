/*
==========================================================
Dream Ladders ERP

File        : app.js
Module      : Application Shell
Version     : 1.0.0

Description :
Initializes the ERP application and controls
navigation, sessions and module loading.

==========================================================
*/

"use strict";

/* ==========================================================
   DOM Elements
========================================================== */

const content = document.getElementById("content");

const pageTitle = document.querySelector(".topbar h1");

const menuItems = document.querySelectorAll(".sidebar nav ul li");


/* ==========================================================
   Application Starts Here
========================================================== */

document.addEventListener("DOMContentLoaded", initializeApplication);


/* ==========================================================
   Initialize Application
========================================================== */

function initializeApplication() {

    checkSession();

    registerNavigation();

    loadDashboard();

}


/* ==========================================================
   Session Validation
========================================================== */

function checkSession() {

    const session = sessionStorage.getItem("dlbs_session");

    if (!session) {

        window.location.href = "login.html";

        return;

    }

}
