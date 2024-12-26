const string = "This is my string";
const browserType = "mozilla";
browserType.length;



if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}


if (browserType.startsWith("zilla")) {
    console.log("Found zilla!");
  } else {
    console.log("No zilla here!");
  }

  if (browserType.endsWith("zilla")) {
    console.log("Found zilla!");
  } else {
    console.log("No zilla here!");
  }

  const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20


const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35

console.log(browserType.slice(1, 4)); // "ozi"
browserType.slice(2); // "zilla"


const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"


const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
console.log(fruits);

fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined


fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
console.log(fruits);