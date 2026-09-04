// ========================================
// NER SMART LOGISTICS
// FRONTEND JAVASCRIPT
// ========================================


// ----------------------------------------
// 1. NOTIFICATION BUTTON
// ----------------------------------------

const notificationButton =
    document.querySelector(".notification-btn");

notificationButton.addEventListener("click", function () {

    // Check if notification panel already exists
    let panel = document.querySelector(".notification-panel");

    // If panel exists, remove it
    if (panel) {
        panel.remove();
        return;
    }

    // Create notification panel
    panel = document.createElement("div");

    panel.className = "notification-panel";

    panel.innerHTML = `
        <div class="notification-header">
            <strong>Notifications</strong>
            <span>3 new</span>
        </div>

        <div class="notification-item critical-notification">
            <strong>🚧 Road obstruction reported</strong>
            <small>Route condition requires attention</small>
            <span>5 minutes ago</span>
        </div>

        <div class="notification-item weather-notification">
            <strong>🌧️ Heavy rainfall warning</strong>
            <small>Weather risk detected</small>
            <span>12 minutes ago</span>
        </div>

        <div class="notification-item vehicle-notification">
            <strong>🚚 Vehicle delay detected</strong>
            <small>Delivery ETA has increased</small>
            <span>20 minutes ago</span>
        </div>
    `;

    document.body.appendChild(panel);

});


// ----------------------------------------
// 2. SEARCH FUNCTION
// ----------------------------------------

const searchInput =
    document.querySelector(".search-box input");

const alertRows =
    document.querySelectorAll(".alert-row");

searchInput.addEventListener("input", function () {

    const searchText =
        searchInput.value.toLowerCase();

    alertRows.forEach(function (alert) {

        const alertText =
            alert.innerText.toLowerCase();

        if (alertText.includes(searchText)) {

            alert.style.display = "flex";

        } else {

            alert.style.display = "none";

        }

    });

});


// ----------------------------------------
// 3. VIEW MAP BUTTON
// ----------------------------------------

const viewMapButton =
    document.querySelector(".regional-panel .view-btn");

viewMapButton.addEventListener("click", function () {

    alert(
        "Live Map module will be connected in the next frontend step."
    );

});


// ----------------------------------------
// 4. VIEW ALL ALERTS BUTTON
// ----------------------------------------

const viewAllButton =
    document.querySelector(".alerts-panel .view-btn");

viewAllButton.addEventListener("click", function () {

    alert(
        "Alerts page will be created in the next frontend step."
    );

});


// ----------------------------------------
// 5. QUICK ACTIONS
// ----------------------------------------

const quickActions =
    document.querySelectorAll(".quick-action");

quickActions.forEach(function (button) {

    button.addEventListener("click", function () {

        const action =
            button.innerText.trim();

        console.log("Selected action:", action);

    });

});


// ----------------------------------------
// 6. PAGE LOADED MESSAGE
// ----------------------------------------

console.log("NER Smart Logistics frontend loaded successfully.");