function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./Assets/flags/icon=${player1}.svg" alt="Qatar Flag" />usb c hub
      <strong>${hour}</strong>hdmi to ucb chdmi to ucb c adapter
      <img src="./Assets/flags/icon=${player2}.svg" alt="Ecuador Flag" />
    </li>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
     <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>

        <ul>
          ${games}
        </ul>
      </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(`11/20`, `Sunday`, createGame("qatar", "8:00", "ecuador")) +
  createCard(
    `11/21`,
    `Monday`,
    createGame("england", "5:00", "iran") +
      createGame("senegal", "8:00", "netherlands") +
      createGame("usa", "11:00", "wales")
  ) +
  createCard(
    `11/22`,
    `Tuesday`,
    createGame("argentina", "2:00", "saudi arabia") +
      createGame("denmark", "5:00", "tunisia") +
      createGame("mexico", "8:00", "poland") +
      createGame("france", "11:00", "australia")
  )
