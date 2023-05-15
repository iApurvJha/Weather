var btn = document.querySelector(".btn-get")
btn.addEventListener("click",Weather)


var btninput=document.querySelector(".input")
var temp=document.querySelector(".tempreature")
var city = document.querySelector(".city")

btninput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      btn.click()
      
    }
  });

function urlGen(){
    var city = btninput.value
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a6f937d847ee0e10618ccd4ddfd2d374&units=metric`
}
function errorHandler(error){
    console.log("error",error)
    alert("some error occured try again after some time")
}

function Weather(){
    var url = urlGen()
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(json => {
        var text1=json.main.temp
        var text2=json.name
        temp.innerHTML=text1+"°C"
        city.innerHTML=text2

        
    })
    .catch(errorHandler)
}