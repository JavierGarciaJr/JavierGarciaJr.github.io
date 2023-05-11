
function makeHuge(){
  
    document.getElementById("inputText-1").style.fontSize = "24pt";
    alert("Hello, world!");
}

function makeMoo(){
    const text = document.getElementById("inputText-1").value;
    const sentence = text.split(".");
    document.getElementById("inputText-1").value = sentence.join("-Moo");
    const bigText = document.getElementById("inputText-1");
    bigText.value = bigText.value.toUpperCase();
}

function makeFancy(){
    const text = document.getElementById("inputText-1");
    text.style.fontWeight = "bold";
    text.style.color = "blue";
    text.style.textDecoration = 'underline';
}

function makeBoring(){
    const text = document.getElementById("inputText-1");
    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration = 'none';

}
