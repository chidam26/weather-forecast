//Complete the Weather API Backend part using openweathermap api
var apikey ='a00c002b6d483539261519a0b067563e';
var msg = document.getElementById("msg");

function getdata(){
    var input =document.getElementById("city").value;
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data=> {
        console.log(data);
        document.getElementById("p1").innerHTML="Temp: " + data.main.temp;
        document.getElementById("p2").innerHTML="Temp :" +data.name;
        var icon ="https://openweathermap.org/img/w/"+data.weather[0].icon+".png";
        document.getElementById("icon").src=icon;
        document.getElementById("msg").style.display="none";
    })
    .catch(()=> {
        msg.textContent="please search for a valid city";
    });

}