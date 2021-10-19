(function main(){
  let gridValue = document.getElementById("grid")

  fetch("https://swapi.dev/api/people")
  .then(val => val.json())

}();
//module.exports = {main}