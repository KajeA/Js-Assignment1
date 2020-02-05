const green = 'rgba(118,174, 170, 1)'
const black = 'rgba(23,35, 50, 1)'
const brown = 'rgba(205,164, 133, 1)'
const greenblue = 'rgba(62,171, 201, 1)'
const pink = 'rgba(254,156, 161, 1)'
const blue = 'rgba(98,189, 254, 1)'

const data = [
    {
        topic: 'Food',
        title: 'Wake Up and Smell the Coffee',
        price: '$0.90',
        color: green
    },
    {
        topic: 'Architecture',
        title: 'The Brand New NASA Office',
        price: '$0.19',
        color: black
    },
    {
        topic: 'Travel',
        title: 'Experience the Saharan Sands',
        price: '$2.29',
        color: brown
    },
    {
        topic: 'Interior',
        title: '9 Air-Cleaning Plants Your Home Needs',
        price: '$0.09',
        color: greenblue
    },
    {
        topic: 'Foods',
        title: 'One Month Sugar Detox',
        price: '$0.99',
        color: pink
    },
    {
        topic: 'Photography',
        title: 'Shooting Minimal Instagram Photos',
        price: '$0.29',
        color: blue
    }
]

// Instructions
// Take the data above and display it as tiles on the page

document.body.onload = makeCards;


// function to make cards

function makeCards () { 
  var i = 0;
  
  do {   // loop that goes for each set of data

    // Create the cards

  var cards = document.createElement("div"); 
  cards.setAttribute("class", "card1");
  cards.setAttribute("id", data[i].topic);
  document.getElementById("content").appendChild(cards);

    // Add Text to cards

  var heading = document.createElement("H2");
  var text1 = document.createTextNode(data[i].topic);
  heading.appendChild(text1);
  document.getElementById(data[i].topic).appendChild(heading);
  
    // Add title to cards

  var title = document.createElement("H3");
  var text2 = document.createTextNode(data[i].title);
  title.appendChild(text2);
  document.getElementById(data[i].topic).appendChild(title);

    // add button

  var btn = document.createElement("BUTTON");   
  btn.innerHTML = ("Read for ") + data[i].price;                   
  document.getElementById(data[i].topic).appendChild(btn);   

   //set background to data[i].color

  document.getElementById(data[i].topic).style.background = data[i].color;
  

   // increases each loop
  i++;
}

  while (i <= data.length);
}