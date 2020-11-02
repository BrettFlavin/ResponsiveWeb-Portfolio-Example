const headline = document.querySelectorAll("#animated-headline path");

// helper function simply gets length of each headline letter's path - needed
// to animate each letter with CSS 'stroke-dashArray' property
for (let i = 0; i < headline.length; i++) {
  console.log("Letter " + i + " is " + headline[i].getTotalLength());
}
