/*
==================================================
Dream Ladders ERP Router
Version : 1.0.0
==================================================
*/

"use strict";

async function loadModule(moduleName) {

    const content = document.getElementById("content");

    try {

        const response = await fetch(
            `modules/${moduleName}/${moduleName}.html`
        );

        if (!response.ok) {

            throw new Error("Module not found");

        }

        const html = await response.text();

        content.innerHTML = html;

    }

    catch (error) {

        content.innerHTML = `
            <h2>Module Error</h2>
            <p>${error.message}</p>
        `;

        console.error(error);

    }

}
