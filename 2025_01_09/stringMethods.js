 text = "Hello";
console.log(text.charAt(1)); // Output: "e"


 text = "Hello";
console.log(text.charCodeAt(1)); // Output: 101


 text1 = "Hello";
 text2 = "World";
console.log(text1.concat(" ", text2)); // Output: "Hello World"
console.log(text1);
console.log(text2);


 text = "Hello World";
console.log(text.includes("World")); // Output: true


 text = "Hello World";
console.log(text.indexOf("World")); // Output: 6


 text = "Hello World World";
console.log(text.lastIndexOf("World")); // Output: 12


 text = "Hello World";
console.log(text.match(/World/)); // Output: ["World"]
console.log(text.match('o+'));


 text = "Hello World World";
console.log(text.replace("World", "JavaScript")); // Output: "Hello JavaScript"
console.log(text.replaceAll("World", "JavaScript"));


 text = "Hello World";
console.log(text.search("World")); // Output: 6


 text = "Hello World";
console.log(text.slice(0, 5)); // Output: "Hello"


 text = "Hello World";
console.log(text.split(" ")); // Output: ["Hello", "World"]


 text = "Hello World";
console.log(text.substring(0, 5)); // Output: "Hello"


 text = "Hello World";
console.log(text.toLowerCase()); // Output: "hello world"


 text = "Hello World";
console.log(text.toUpperCase()); // Output: "HELLO WORLD"


 text = "  Hello World  ";
console.log(text.trim()); // Output: "Hello World"


 text = "Hello World";
console.log(text.length); // Output: 11

