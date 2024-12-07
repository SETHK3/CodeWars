// This function displays a star rating as descriptive strings
function StarRating(str) {
  let rating = Math.round(parseFloat(str) * 2) / 2;

  let stars = [];

  while (rating >= 1) {
    stars.push("full");
    rating -= 1;
  }

  if (rating === 0.5) {
    stars.push("half");
  }

  while (stars.length < 5) {
    stars.push("empty");
  }

  return stars.join(" ");
}

console.log(StarRating("0.38"));
console.log(StarRating("4.5"));
