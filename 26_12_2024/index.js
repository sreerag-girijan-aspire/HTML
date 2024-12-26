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
