// var zip = document.getElementById("userInput");
// var key = "&APPID=9521de32c9a40758378a329b2e45b936";
// var api = `https://api.openweathermap.org/data/2.5/weather?id=${key}&zip=${zip}`;
// var data = null;
import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';


function weatherapp() {

    const [cityName, setCityName] = useState();
    const [tempK, setTempK] = useState();
    const [tempF, setTempF] = useState();
    const [tempC, setTempC] = useState();

    let city = document.getElementById("cityName");
    let tempK = document.getElementById("kelvin");
    let tempF = document.getElementById("fahrenheit");
    let tempC = document.getElementById("celcius");
    let iconJS = document.getElementById("iconHTML")



    return (
        <>
            <Container>
                <Row className="container boarder">
                    <h4 class="text-center pt-4 pb-4 text-white">BI11-M3CH</h4>
                </Row>
            </Container>
            <hr />
            <Container>
                <Row className="input-group mb-4">
                <input id="userInput" type="text" class="form-control" placeholder="Enter Zip Code " aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <Col className="input-group-append">
                    <button id ="zipBttn" class="btn btn-outline-secondary" type="button">Weather or Not</button>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default weatherapp

// document.getElementById("magic").style.visibility = "hidden"

var btn = document.getElementById("zipBttn");
btn.addEventListener("click", callWeatherAPI, true);

document.getElementById("userInput")
document.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        callWeatherAPI();
    }
});

async function callWeatherAPI() {
    var zip = document.getElementById("userInput").value;
    console.log(zip)
    var key = "&APPID=9521de32c9a40758378a329b2e45b936";
    var api = `https://api.openweathermap.org/data/2.5/weather?id=${key}&zip=${zip}`;

    const response = await fetch(api).then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json);
        data = json;

        city.innerHTML = data.name;
        tempK.innerHTML = (Math.floor(data.main.temp) + " " + "K");
        tempF.innerHTML = (Math.floor((data.main.temp - 273.15) * 9 / 5 + 32) + " " + "F");
        tempC.innerHTML = (Math.floor(data.main.temp - 273.15) + " " + "C");
        // condition.innerHTML = data.weather[0].description;
        var img = document.createElement("img");
        let str = data.weather[0].icon;
        console.log(str);

        img.src = "http://openweathermap.org/img/wn/" + str + "@2x.png";
        // document.getElementById("magic").style.visibility = 'visible'
        // gets and displays image
        var imgHolder = document.getElementById("iconHTML");
        imgHolder.innerHTML = ""
        imgHolder.appendChild(img)
        // https://api.openweathermap.org/data/2.5/weather?id=${key}&zip=${zip}https://api.openweathermap.org/data/2.5/weather?id=${key}&zip=${zip}
    }).catch(function (err) {
        // alert("Fetch problem:" + err.message);
        alert(zip + " is not a vaild zip code");
    });
    console.log(response);
}
// }

