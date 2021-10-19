// (function main(){
  

// }

//Assigned document from id to variable
let gridValue = document.getElementById("grid")

fetch("https://swapi.dev/api/people")
.then(val => val.json())
.then(data => {
let dataArray = data["results"];
for (let i = 0; i < dataArray.length; i++) {
  gridValue.innerHTML += `
    <div class="col-md-4"><br>
      <div class="card" style="width: 18rem;">
          <img src="./image/img${i}.jpeg" class="card-img-top img responsive" alt="starwars_characters">
          <div class="card-body">
              <h4 class="card-title">${dataArray[i].name}</h4>
              <p class="card-text">Clone Wars</p>
              <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">Features</a>
          </div>
      </div>
    </div>
    `

}
});

//module.exports = {main}