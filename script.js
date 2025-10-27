let clicks = 0;
let clickValue = 1;
let autoClickValue = 1;
let autoRunning = false;

// Upgrade costs
let upgradeCost = 10;
let autoCost = 50;

// Load click sound
const clickSound = new Audio("sounds/click.mp3");
clickSound.volume = 0.5;

// ===== DOM Elements =====
const clicksLabel = document.getElementById("clicks");
const clickMultiplierText = document.getElementById("clickMultiplier");
const autoMultiplierText = document.getElementById("autoMultiplier");
const clickButton = document.getElementById("clickButton");
const shopButton = document.getElementById("shopButton");
const shopModal = document.getElementById("shopModal");
const closeShop = document.getElementById("closeShop");
const upgradeButton = document.getElementById("upgradeButton");
const autoButton = document.getElementById("autoButton");
const upgradePrice = document.getElementById("upgradePrice");
const autoPrice = document.getElementById("autoPrice");

// ===== Main Menu =====
const mainMenu = document.getElementById("mainMenu");
const gameScreen = document.getElementById("gameScreen");
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {
    mainMenu.style.display = "none";
    gameScreen.style.display = "block";
    playClickSound();
});

// ===== Utility: play sound function =====
function playClickSound() {
    clickSound.currentTime = 0; // reset to start
    clickSound.play();
}

// ===== Update display =====
function updateClicks() {
    clicksLabel.textContent = `Clicks: ${clicks}`;
    upgradePrice.textContent = `Cost: ${upgradeCost} clicks`;
    autoPrice.textContent = `Cost: ${autoCost} clicks`;
    clickMultiplierText.textContent = `Click Multiplier: ${clickValue}`;
    autoMultiplierText.textContent = `Auto Multiplier: ${autoClickValue}/sec`;
}

// ===== Click Me! button =====
clickButton.addEventListener("click", () => {
    clicks += clickValue;
    updateClicks();
    playClickSound();
});

// ===== Shop modal open/close =====
shopButton.addEventListener("click", () => {
    shopModal.style.display = "block";
    playClickSound();
});

closeShop.addEventListener("click", () => {
    shopModal.style.display = "none";
    playClickSound();
});

window.addEventListener("click", (event) => {
    if (event.target === shopModal) {
        shopModal.style.display = "none";
    }
});

// ===== Shop upgrades =====
upgradeButton.addEventListener("click", () => {
    if (clicks >= upgradeCost) {
        clicks -= upgradeCost;
        clickValue += 1;
        upgradeCost = Math.floor(upgradeCost * 1.5);
        updateClicks();
        playClickSound();
    }
});

autoButton.addEventListener("click", () => {
    if (clicks >= autoCost) {
        clicks -= autoCost;
        autoClickValue += 1;
        autoCost = Math.floor(autoCost * 1.5);
        if (!autoRunning) startAutoClick();
        updateClicks();
        playClickSound();
    }
});

// ===== Auto-clicker =====
function startAutoClick() {
    autoRunning = true;
    setInterval(() => {
        clicks += autoClickValue;
        updateClicks();
    }, 1000);
}

// ===== Initialize =====
updateClicks();
