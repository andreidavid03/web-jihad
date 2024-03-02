function createHero(tag,text){
var element=document.createElement(tag);
element.innerText=text;
return element;
}

function deleteHero(deletee){
var element=document.getElementById("roaster");
element.removeChild(element.childNodes[deletee]);

}