let color = prompt("Color")
while(color.toLowerCase() != "v" &&
    color.toLowerCase() != "a" &&
    color.toLowerCase() != "r"
){
    color = prompt("Color")
}

if(color.toLowerCase() == "v"){
    document.body.style.backgroundColor = '#008000'
}else if(color.toLowerCase() == "a"){
    document.body.style.backgroundColor = '#0000FF'
}else if(color.toLowerCase() == "r"){
    document.body.style.backgroundColor = '#FF0000'
}