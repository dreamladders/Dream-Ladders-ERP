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

/* ==========================================================
   Register Navigation
========================================================== */

function registerNavigation() {

    menuItems.forEach(function (item) {

        item.addEventListener("click", function () {

            const menuName = item.textContent.trim();

            setActiveMenu(item);

            handleNavigation(menuName);

        });

    });

}


/* ==========================================================
   Active Menu
========================================================== */

function setActiveMenu(selectedItem) {

    menuItems.forEach(function (item) {

        item.classList.remove("active");

    });

    selectedItem.classList.add("active");

}


/* ==========================================================
   Handle Navigation
========================================================== */

function handleNavigation(menuName) {

    switch (menuName) {

        case "🏠 Dashboard":
            loadDashboard();
            break;

        case "👥 Employees":
            loadEmployees();
            break;

        case "🕒 Attendance":
            loadAttendance();
            break;

        case "📦 Inventory":
            loadInventory();
            break;

        case "🚚 Suppliers":
            loadSuppliers();
            break;

        case "🛒 Purchases":
            loadPurchases();
            break;

        case "📊 Reports":
            loadReports();
            break;

        case "⚙ Settings":
            loadSettings();
            break;

        case "🚪 Logout":
            logout();
            break;
    }

}
