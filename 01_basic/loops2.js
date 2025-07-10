//For In loop
//used to iterate objects
const lang={
    cpp: "c++",
    js:"javascript",
    rb:"rubby",
    swift:"swift"
}

for (const key in lang) {
   console.log(`${key} is shortcut for ${lang[key]}`);
   
}