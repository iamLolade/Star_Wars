(function main(){
  //Assigned document from id to variable
  let gridValue = document.getElementById("grid");

  let errorHandle = document.getElementById("redFlag")

  fetch("https://swapi.dev/api/people")
  .then(val => val.json())
  .then(data => {
  let dataArray = data["results"];
  for (let i = 0; i < dataArray.length; i++) {
    gridValue.innerHTML += `
      <!--Card_Template-->
      <div class="col-md-4 col-sm-12"><br>
        <div class="card" style="width: 18rem;">
            <img src="./image/img${i}.jpeg" class="card-img-top img responsive" alt="starwars_characters">
            <div class="card-body">
                <h4 class="card-title">${dataArray[i].name}</h4>
                <p class="card-text">Clone Wars</p>
                <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">Features</a>
            </div>
        </div>
      </div>


      <!-- Modal(PopUp)-->
      <div class="my-3 modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel"><h4 class="card-title">I'm ${dataArray[i].name}</h4></h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h5 class="modal-title" id="exampleModalLabel"><h5 class="card-title">Gender: ${dataArray[i].gender.toUpperCase()}</h5></h5>
              <h5 class="modal-title" id="exampleModalLabel"><h5 class="card-title">Height: ${dataArray[i].height}</h5></h5>
              <img src="./image/img${i}.jpeg" class="modal-img img responsive" alt="starwars_characters">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      `

    }
  }).catch(err => {
    errorHandle.style.visibility = "visible";
  })

})()
//module.exports = {main}