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

function AlphabetSoup(str) {
  return str.split("").sort().join("");
}

console.log(AlphabetSoup("coderbyte"));
console.log(AlphabetSoup("hooplah"));

function CountingAnagrams(str) {
  const words = str.split(" ");
  let countAnagrams = 0;

  for (let i = 0; i < words.length - 1; i++) {
    const currentWord = words[i].split("").sort().join("");

    for (let j = i + 1; j < words.length; j++) {
      const nextWord = words[j].split("").sort().join("");

      if (currentWord === nextWord && words[i] !== words[j]) {
        countAnagrams++;
        break;
      }
    }
  }

  return countAnagrams;
}

console.log(CountingAnagrams("aa aa odg dog gdo"));
console.log(CountingAnagrams("a c b c run urn urn"));
console.log(CountingAnagrams("dog cat tac"));
console.log(CountingAnagrams("dog dog tac"));
