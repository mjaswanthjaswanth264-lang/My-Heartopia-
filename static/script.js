const exploreBtn = document.getElementById("exploreBtn");
const message = document.getElementById("message");

exploreBtn.addEventListener("click", function () {

    message.classList.toggle("show");

    if (message.classList.contains("show")) {
        exploreBtn.textContent = "Hide surprise 💗";
    } else {
        exploreBtn.textContent = "Explore the magic ✨";
    }

});

// Create floating hearts

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "♥";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.color = "#f28ab9";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "10";
    heart.style.transition = "transform 4s linear, opacity 4s";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {
        heart.style.transform =
            `translateY(-${window.innerHeight + 60}px) rotate(360deg)`;
        heart.style.opacity = "0";
    });

    setTimeout(() => {
        heart.remove();
    }, 4100);
}

setInterval(createHeart, 1200);
function gardenClick(type) {
    if (type === "flower") {
        alert("🌸 Welcome to Flower World!");
    } else if (type === "butterfly") {
        alert("🦋 Let your dreams fly high!");
    } else if (type === "magic") {
        alert("✨ You are full of magic!");
    }
}

function chooseMood(mood) {
    const messages = {
        happy: "😊 Keep smiling!",
        sad: "💗 Better days are coming!",
        calm: "🌸 Enjoy your peaceful moment!",
        dreamy: "✨ Never stop dreaming!"
    };

    document.getElementById("mood-message").innerText = messages[mood];
}
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.className = "floating-heart";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = "4s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createHeart, 800);
const quotes = [
    "You are stronger than you think! ❤️",
    "Every day is a fresh beginning! 🌸",
    "Keep smiling, beautiful things are coming! ✨",
    "Believe in your dreams! 🦋",
    "You deserve happiness! 💗"
];

function newQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById("daily-quote").innerText = quotes[random];
}
function toggleMusic() {
    const music = document.getElementById("garden-music");
    const button = document.getElementById("music-btn");

    if (music.paused) {
        music.play();
        button.innerText = "⏸ Pause Music";
    } else {
        music.pause();
        button.innerText = "▶ Play Music";
    }
}
function bloomFlower(flower) {
    flower.style.transform = "scale(1.6)";
    flower.style.transition = "0.4s";

    document.getElementById("flower-message").innerText =
        "A little flower, a little happiness! 🌸💗";

    setTimeout(() => {
        flower.style.transform = "scale(1)";
    }, 1000);
}

function showSecret() {
    document.getElementById("secret-message").innerText =
        "You are someone's sunshine. Never forget how special you are! 💖✨";
}
function addWish() {
    const input = document.getElementById("wish-input");
    const wishList = document.getElementById("wish-list");
    const wish = input.value.trim();

    if (wish === "") {
        alert("Please write a wish first! 💗");
        return;
    }

    const wishes = JSON.parse(
        localStorage.getItem("heartopiaWishes") || "[]"
    );

    wishes.push(wish);
    localStorage.setItem("heartopiaWishes", JSON.stringify(wishes));

    input.value = "";
    loadWishes();

    alert("Your wish has been saved! 💌");
}

function loadWishes() {
    const wishList = document.getElementById("wish-list");
    if (!wishList) return;

    const wishes = JSON.parse(
        localStorage.getItem("heartopiaWishes") || "[]"
    );

    wishList.innerHTML = "";
const wishCount = document.getElementById("wish-count");

if (wishCount) {
    wishCount.innerText = "💗 " + wishes.length + " Wishes in Your Garden";
}
    wishes.forEach((wish, index) => {
        const card = document.createElement("div");
        card.className = "wish-card";

        const text = document.createElement("span");
        text.innerText = "✨ " + wish + " 💗";
const editBtn = document.createElement("button");
editBtn.innerText = "✏️ Edit";

editBtn.onclick = function() {
    editWish(index);
};
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "🗑️ Delete";

        deleteBtn.onclick = function() {
            deleteWish(index);
        };

       card.appendChild(text);
card.appendChild(editBtn);
card.appendChild(deleteBtn);
wishList.appendChild(card);
});
}

function deleteWish(index) {
    const wishes = JSON.parse(
        localStorage.getItem("heartopiaWishes") || "[]"
    );

    wishes.splice(index, 1);

    localStorage.setItem("heartopiaWishes", JSON.stringify(wishes));

    loadWishes();
}
function editWish(index) {
    const wishes = JSON.parse(
        localStorage.getItem("heartopiaWishes") || "[]"
    );

    const updatedWish = prompt("Edit your wish:", wishes[index]);

    if (updatedWish === null) return;

    if (updatedWish.trim() === "") {
        alert("Wish cannot be empty! 💗");
        return;
    }

    wishes[index] = updatedWish.trim();

    localStorage.setItem(
        "heartopiaWishes",
        JSON.stringify(wishes)
    );

    loadWishes();

    alert("Your wish has been updated! ✨");
}
function clearAllWishes() {
    const confirmClear = confirm(
        "Are you sure you want to delete all your wishes? 💗"
    );

    if (!confirmClear) return;

    localStorage.removeItem("heartopiaWishes");

    loadWishes();

    alert("All wishes have been cleared! ✨");
}
document.addEventListener("DOMContentLoaded", loadWishes);
let galleryImages = [];
let currentImageIndex = 0;

function openImage(imageSrc) {
    galleryImages = Array.from(
        document.querySelectorAll(".gallery-card img")
    ).map(img => img.src);

    currentImageIndex = galleryImages.indexOf(imageSrc);

    document.getElementById("viewer-image").src = imageSrc;
    document.getElementById("image-viewer").classList.add("show");
}

function changeImage(direction) {
    if (galleryImages.length === 0) return;

    currentImageIndex =
        (currentImageIndex + direction + galleryImages.length)
        % galleryImages.length;

    document.getElementById("viewer-image").src =
        galleryImages[currentImageIndex];
}
function closeImage() {
    document.getElementById("image-viewer").classList.remove("show");
}
