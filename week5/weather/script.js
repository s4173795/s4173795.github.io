function checkWeather() {
  const myTemp = document.querySelector("#myTemp");
  console.log(myTemp.value);
  const body = document.querySelector("body");
  const outer = document.querySelector(".outer");
  let temp = myTemp.value;

  if (temp < 10) {
    console.log("It's quite cold today!");
    body.style.backgroundColor = "lightblue";
    outer.style.backgroundColor = "blue";
  } else if (temp >= 10 && temp < 20) {
    console.log("It's a bit chilly today!");
    outer.style.backgroundColor = "green";
    body.style.backgroundColor = "lightgreen";
  } else if (temp >= 20 && temp < 30) {
    console.log("It's warm today!");
    outer.style.backgroundColor = "yellow";
    body.style.backgroundColor = "lightyellow";
  } else if (temp >= 30 && temp <= 50) {
    console.log("It's quite hot today!");
    body.style.backgroundColor = "red";
    outer.style.backgroundColor = "darkred";
  }
}
