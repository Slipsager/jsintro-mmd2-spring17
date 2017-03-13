//Ex. 1 String methods, Loop, if

//a. Make a HTML document with JavaScript that stores the
//  text "This is some text with the letter t" in the variable myText

var myText = "This is some text with the letter t";

//b. Output the value of myText and the length of value.
alert( myText + " :: has length = " + myText.length );

console.log(myText + " :: has length = " + myText.length );




//b. Make js loop that writes the characters in the text string with a document.write() metode
//  by using the String method charAt().

for (var i = 0; i < myText.length; i++) {
  document.write(myText.charAt(i) + "</br >");
}

//c. Count how many times the character t is used in myText.
var count = 0;
for (var i = 0; i < myText.length; i++) {
  if (myText.charAt(i) === "t" ){
    document.write("*");
    count ++;
  }
}

document.write( myText + ":: contains " + count + " t");
