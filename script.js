const randomNumber = (num) => {
  return Math.floor(Math.random() * num);
};

// Collection of animes, seasons and episodes
const animeEpisode = {
  anime: ["Demon Slayer", "Jujutsu Kaisen", "GTO", "Naruto"],
  season: [1, 2, 3],
  episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
};

// Store the anime episode in an array
let personalAnime = [];

// Iterate over the object
for (let prop in animeEpisode) {
  const optionIdx = randomNumber(animeEpisode[prop].length);

  switch (prop) {
    case "anime":
      personalAnime.push(`You should watch ${animeEpisode[prop][optionIdx]}`);
      break;
    case "season":
      personalAnime.push(`Season: ${animeEpisode[prop][optionIdx]}`);
      break;
    case "episode":
      personalAnime.push(`Episode: ${animeEpisode[prop][optionIdx]}`);
      break;
    default:
      personalAnime.push("There is not enough info");
      break;
  }
}

const formatAnime = (anime) => {
  const formatted = personalAnime.join("\n");
  console.log(formatted);
};

formatAnime(personalAnime);
