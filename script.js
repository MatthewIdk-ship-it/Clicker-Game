let clicks = 0;
let clickValue = 1;
let autoClickValue = 1;
let autoRunning = false;

const clicksLabel = document.getElementById("clicks");
const clickButton = document.getElementById("clickButton");
const shopButton = document.getElementById("shopButton");
const shopModal = document.getElementById("shopModal");
const closeShop = document.getElementById("closeShop");
const upgradeButton = document.getElementById("upgradeButton");
const autoButton = document.getElementById("autoButton");

// Update the clicks display
function updateClicks() {
    clicksLabel.textContent = `Clicks: ${clicks}`;
}

// Click Me! button
clickButton.addEventListener("click", () => {
    clicks += clickValue;
    updateClicks();
});

// Shop modal open/close
shopButton.addEventListener("click", () => shopModal.style.display = "block");
closeShop.addEventListener("click", () => shopModal.style.display = "none");
window.addEventListener("click", (event) => {
    if (event.target == shopModal) shopModal.style.display = "none";
});

// Shop upgrades
upgradeButton.addEventListener("click", () => {
    if (clicks >= 10) { 
        clicks -= 10;
        clickValue += 1;
        updateClicks();
    }
});

autoButton.addEventListener("click", () => {
    if (clicks >= 50) { 
        clicks -= 50;
        autoClickValue += 1;
        if (!autoRunning) startAutoClick();
        updateClicks();
    }
});

// Auto-clicker function
function startAutoClick() {
    autoRunning = true;
    setInterval(() => {
        clicks += autoClickValue;
        updateClicks();
    }, 1000);
}
