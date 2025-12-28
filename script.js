const players = [
  { name: "James Trafford", position: "GK", number: 1, nation: "England", img: "https://i.namu.wiki/i/a6fI3pYtVN-MoetQnaRm0e8mMHA-dK8v2D1i5kJsrzeMsacerdzkyajWTK7EbiNHalblWXWXidZk2HsIqu7WoebiVTo-KG1EBlvijSWvKLKNeuTwvFo_18OmuzVx9D_iLbeZIOLFccDyrmGArB3-WXUOS9lbBSnlY0vEVlFbwBQ.webp" },
  { name: "Marcus Bettinelli", position: "GK", number: 13, nation: "England", img: "https://i.namu.wiki/i/a6fI3pYtVN-MoetQnaRm0YESZ2DbtgYKjKzj8i36fjfj5FzJVkz8zqdcIu7I6tPslrNn9VFOKf7ceD98z38HYp7Jfe7WELuZ2HZPCyiXlHp9ftWh4Vcb9QO2sqS2aNQFEPudfXT2cZDX9QvqvCJeRKJhNF5RiXF1hX0LRWS1lbs.webp" },
  { name: "Stefan Ortega", position: "GK", number: 18, nation: "Germany", img: "https://i.namu.wiki/i/a6fI3pYtVN-MoetQnaRm0coX2ep4yK7VPN6hdHHVOW2dLIqyqWij2R21O80J4txribFxPcxPU5b03piK2ACUUrA8DA-42qZYq_KYNbmbVpYoyGtSY_gZ1GDb_9UrE50AhW6DM-bskbZxn3GAGbQq-IwFeOsjGYXJJkg_ah1V9xk.webp" },
  { name: "Gianluigi Donnarumma", position: "GK", number: 25, nation: "Italy", img: "https://i.namu.wiki/i/a6fI3pYtVN-MoetQnaRm0TA0avX2_JKcfacG1CmmUXbQNaWODh62amO1qvRDeDGdH9oEaQn8Em0a9Geg60p-PMSx5hJS2MWg9yeMX3VdifAqsQCUVEQ59xT6b-3IT2QKpHVDrF6Vq4OqV-VZdlfVBqef_KiIjSKfgEP2iIEEmWI.webp" },

  { name: "Ruben Dias", position: "DF", number: 3, nation: "Portugal", captain: "VC", img: "https://i.namu.wiki/i/a6fI3pYtVN-MoetQnaRm0Uq55T5I8TU0AA89b2pPGttRKr1x-95ZshWdX-OLMIgkgf7hR2RhDmVZt5L9AfmtUNf3JenfIxSZBkUDn9VfcSNrVBsyjTWV0vdzGD2YPPyddKMA5YBXEvxTMny3cE77zAGdp23b8t_uOpbebgzl_nA.webp" },
  { name: "John Stones", position: "DF", number: 5, nation: "England", img: "https://i.namu.wiki/i/a6fI3pYtVN-MoetQnaRm0VNMtflVmNugTEgKOuMrh5c35yhP60EJnE3eEfP-m579DtYmuW4pdv3nlQGWmByA_Lun_07avOGaQ5LmVHyLmrUHKS0ABx0sR2Z2h2qsMXZEC0qZ_mlhkva6JaMjnADlZvVoMLxuKcYxQ1jlnowS20c.webp" },
  { name: "Nathan Ake", position: "DF", number: 6, nation: "Netherlands", img: "https://i.namu.wiki/i/a6fI3pYtVN-MoetQnaRm0bXCNVxvQfzfMgCl7KPeeuCEdAn3FFI_7Vsc1DtbC-DoZtPO_c48glvAqgf2H17AMzg-ZbBqYT5vIFsCkzKXPhm15kbCgJFOyZg_jzWpy7jnTZZhcD0ImdWfZglxQ3U6EYTI7MA_SbR63Di5gPZppLQ.webp" },
  { name: "Rayan Ait Nouri", position: "DF", number: 21, nation: "Algeria", img: "https://i.namu.wiki/i/a6fI3pYtVN-MoetQnaRm0bdroCNH7Asar0Sk0_FxX8mGSoCL3dszUR2tjhV41smLh5yJn5Df-P87OAs8VbiPc3DT7Y_WeWS5qoh9gQgo37D2MokKxxd5QoQgdMPq0fCjBLTOwVzWotUl8NzrXZBP_oHDON1GE2Ry23C92uvvTkw.webp" },
  { name: "Josko Gvardiol", position: "DF", number: 24, nation: "Croatia", img: "https://i.namu.wiki/i/a6fI3pYtVN-MoetQnaRm0TZpAr2dAxKdGwnpmTNqyGASmc5mrg0O4Y5-W69gRRlCQi9g402aFn5O-e4TnwnoIX23MOQHYMYYATgJeza07e1Dx1x5VJw6tGTvmmQ56iCUNc_kAbfzCEQkqJP3kpzbgD7Oy-LOzeNQ-D_K9s_W9RI.webp" },

  { name: "Tijjani Reijnders", position: "MF", number: 4, nation: "Netherlands", img: "https://i.namu.wiki/i/a6fI3pYtVN-MoetQnaRm0WR-AnX9a-Ub1NoIvfnhXvNDdsY1u6HQKe_hUq29oHGOzvzGJ3aj77r_ccihWlwfBFnB7oDOEXTpJ8UtWB20zlBK-463JEyp_qS6Bfo3Rww9H1Bfc589DCfXfXaeXWVEsEaQeQDwOOcorbgZse6Ejsg.webp" },
  { name: "Mateo Kovacic", position: "MF", number: 8, nation: "Croatia", img: "https://i.namu.wiki/i/a6fI3pYtVN-MoetQnaRm0Zf9j_N0hhwYT6ANo7QC4WhKVYTbxnYq7cTjMfgGCtazZaeTpE3qGQLhLIAp7_Ft54VLT4DRfyOskl3NYgYiGcM-BK52NsK1iWyD4MwzP7ckC_k9bCY6PShN1Yw2m61W_BLeKRTxMr9QZAPgxmV6zvw.webp" },
  { name: "Rodri", position: "MF", number: 16, nation: "Spain", captain: "3C", img: "https://i.namu.wiki/i/a6fI3pYtVN-MoetQnaRm0dv7Oyd6ErMnugpCAyM1IWUBNmVyq1XUiVWAT5kz0NAyBKEVQ8Hy-RFCzQOsTlciTy-WtBobrEPRbS9dkQrkg3Y1mLPZEZ5HXWNYqRBVwjA8JE3ERXMiq6LM7O779GYpTn0vbHnABF8zyC4Dma-zPW0.webp" },
  { name: "Bernardo Silva", position: "MF", number: 20, nation: "Portugal", captain: "C", img: "https://i.namu.wiki/i/a6fI3pYtVN-MoetQnaRm0dzjfZpWK7lf9zEII1yAexTxq3YiLEBI3ALBO_P_yQqcZqrXnzKKcE2bhV7-G-FBG5edL2mN72XS7lnRv-Um6sLj5QdbrRtsXTeozDVUe54z1gNiDzNLaudkFyaJxgao3bHj3hanuJZzUsjdsxcLBdA.webp" },

  { name: "Omar Marmoush", position: "FW", number: 7, nation: "Egypt", img: "https://i.namu.wiki/i/a6fI3pYtVN-MoetQnaRm0d5VPB31izArtbFcGUGIiIifk_HHCmT4g4EdncH3wWIWvghUf6SDNTNCmOPMSCBGgLHaEJc9hzwWMqgPNnrSjQv-aoha1cSkvOQwtT8Wx9neKy6wMuCHO6duIOUIoboc0MUI3u_WL2ZuKIlwo2u6AoM.webp" },
  { name: "Erling Haaland", position: "FW", number: 9, nation: "Norway", captain: "4C", img: "https://i.namu.wiki/i/a6fI3pYtVN-MoetQnaRm0ezQFek0LTOVTVQRX26ohTdYc0Tiagu37zZ6qXgwYrggmJ31p9K41a0iGf2ZIhHmXmO_wHwWJGRHzJkjqNdQeDEV6h2wUODD9g4qqA7Vz1KZ94B4DyED92p2Hq-SUFjnCtay3fB2aSZB7YRUWKekOdU.webp" }
];

const container = document.getElementById("player-container");
const modal = document.getElementById("modal");
const searchInput = document.getElementById("searchInput");
const closeBtn = document.getElementById("close");

let currentFilter = "ALL";

function displayPlayers(filter = "ALL", keyword = "") {
  container.innerHTML = "";

  players
    .filter(p =>
      (filter === "ALL" || p.position === filter) &&
      p.name.toLowerCase().includes(keyword.toLowerCase())
    )
    .sort((a, b) => a.number - b.number)
    .forEach(player => {
      const badge = player.captain
        ? `<span style="color:#6cbde9;font-weight:bold;">${player.captain}</span>`
        : "";

      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${player.img}">
        <div class="info">
          <h3>${player.name} ${badge}</h3>
          <p>#${player.number} | ${player.position}</p>
        </div>
      `;
      card.onclick = () => openModal(player);
      container.appendChild(card);
    });
}

function openModal(player) {
  document.getElementById("modal-img").src = player.img;
  document.getElementById("modal-name").innerText =
    player.name + (player.captain ? ` (${player.captain})` : "");
  document.getElementById("modal-info").innerText =
    `Position: ${player.position}\nNation: ${player.nation}\nNumber: ${player.number}`;

  modal.classList.add("active");
}

closeBtn.onclick = () => modal.classList.remove("active");

searchInput.oninput = () => displayPlayers(currentFilter, searchInput.value);

document.querySelectorAll("nav button").forEach(btn => {
  btn.onclick = () => {
    currentFilter = btn.dataset.position;
    displayPlayers(currentFilter, searchInput.value);
  };
});

displayPlayers();
