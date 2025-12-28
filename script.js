const players = [
  { name: "James Trafford", position: "GK", number: 1, nation: "England", img: "https://via.placeholder.com/300x400?text=Trafford" },
  { name: "Marcus Bettinelli", position: "GK", number: 13, nation: "England", img: "https://via.placeholder.com/300x400?text=Bettinelli" },
  { name: "Stefan Ortega", position: "GK", number: 18, nation: "Germany", img: "https://via.placeholder.com/300x400?text=Ortega" },
  { name: "Gianluigi Donnarumma", position: "GK", number: 25, nation: "Italy", img: "https://via.placeholder.com/300x400?text=Donnarumma" },

  { name: "Ruben Dias", position: "DF", number: 3, nation: "Portugal", img: "https://via.placeholder.com/300x400?text=Dias" },
  { name: "John Stones", position: "DF", number: 5, nation: "England", img: "https://via.placeholder.com/300x400?text=Stones" },
  { name: "Nathan Ake", position: "DF", number: 6, nation: "Netherlands", img: "https://via.placeholder.com/300x400?text=Ake" },
  { name: "Rayan Ait Nouri", position: "DF", number: 21, nation: "Algeria", img: "https://via.placeholder.com/300x400?text=Ait+Nouri" },
  { name: "Josko Gvardiol", position: "DF", number: 24, nation: "Croatia", img: "https://via.placeholder.com/300x400?text=Gvardiol" },
  { name: "Matheus Nunes", position: "DF", number: 27, nation: "Portugal", img: "https://via.placeholder.com/300x400?text=Nunes" },
  { name: "Nico O'Reilly", position: "DF", number: 33, nation: "England", img: "https://via.placeholder.com/300x400?text=OReilly" },
  { name: "Abdukodir Khusanov", position: "DF", number: 45, nation: "Uzbekistan", img: "https://via.placeholder.com/300x400?text=Khusanov" },
  { name: "Rico Lewis", position: "DF", number: 82, nation: "England", img: "https://via.placeholder.com/300x400?text=Rico+Lewis" },

  { name: "Tijjani Reijnders", position: "MF", number: 4, nation: "Netherlands", img: "https://via.placeholder.com/300x400?text=Reijnders" },
  { name: "Mateo Kovacic", position: "MF", number: 8, nation: "Croatia", img: "https://via.placeholder.com/300x400?text=Kovacic" },
  { name: "Nico Gonzalez", position: "MF", number: 14, nation: "Spain", img: "https://via.placeholder.com/300x400?text=Nico+Gonzalez" },
  { name: "Rodri", position: "MF", number: 16, nation: "Spain", img: "https://via.placeholder.com/300x400?text=Rodri" },
  { name: "Bernardo Silva", position: "MF", number: 20, nation: "Portugal", img: "https://via.placeholder.com/300x400?text=Bernardo" },
  { name: "Kalvin Phillips", position: "MF", number: 44, nation: "England", img: "https://via.placeholder.com/300x400?text=Phillips" },
  { name: "Phil Foden", position: "MF", number: 47, nation: "England", img: "https://via.placeholder.com/300x400?text=Foden" },
  { name: "Divine Mukasa", position: "MF", number: 63, nation: "England", img: "https://via.placeholder.com/300x400?text=Mukasa" },

  { name: "Omar Marmoush", position: "FW", number: 7, nation: "Egypt", img: "https://via.placeholder.com/300x400?text=Marmoush" },
  { name: "Erling Haaland", position: "FW", number: 9, nation: "Norway", img: "https://via.placeholder.com/300x400?text=Haaland" },
  { name: "Rayan Cherki", position: "FW", number: 10, nation: "France", img: "https://via.placeholder.com/300x400?text=Cherki" },
  { name: "Jeremy Doku", position: "FW", number: 11, nation: "Belgium", img: "https://via.placeholder.com/300x400?text=Doku" },
  { name: "Savinho", position: "FW", number: 26, nation: "Brazil", img: "https://via.placeholder.com/300x400?text=Savinho" },
  { name: "Oscar Bobb", position: "FW", number: 52, nation: "Norway", img: "https://via.placeholder.com/300x400?text=Bobb" }
];

const container = document.getElementById("player-container");
const modal = document.getElementById("modal");
const searchInput = document.getElementById("searchInput");
const closeBtn = document.getElementById("close");

let currentFilter = "ALL";

// ⭐ 처음 로드시 모달 강제 숨김
modal.classList.remove("active");

function displayPlayers(filter = "ALL", keyword = "") {
  container.innerHTML = "";

  players
    .filter(p =>
      (filter === "ALL" || p.position === filter) &&
      p.name.toLowerCase().includes(keyword.toLowerCase())
    )
    .forEach(player => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${player.img}">
        <div class="info">
          <h3>${player.name}</h3>
          <p>#${player.number} | ${player.position}</p>
        </div>
      `;

      card.addEventListener("click", () => openModal(player));
      container.appendChild(card);
    });
}

function openModal(player) {
  document.getElementById("modal-img").src = player.img;
  document.getElementById("modal-name").innerText = player.name;
  document.getElementById("modal-info").innerText =
    `Position: ${player.position}\nNation: ${player.nation}\nNumber: ${player.number}`;

  modal.classList.add("active");
}

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

searchInput.addEventListener("input", () => {
  displayPlayers(currentFilter, searchInput.value);
});

document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.position;
    displayPlayers(currentFilter, searchInput.value);
  });
});

displayPlayers();
