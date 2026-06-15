const repos = [
  { repo: "A", stars: 100 },
  { repo: "B", stars: 200 }
];

const totalStars = repos.reduce((total, repo) => total + repo.stars, 0);

console.log(totalStars);