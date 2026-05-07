let data, info;

async function init(){   
  let link = "ABC.json"; //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    build += `<div class="fitted card">
                 <h3>${crash.crash_date}</h3>
                 <hr>
                 <p>${crash.on_street_name}</p>
                 <p>${crash.off_street_name}</p>
                 <p>${crash.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p>${crash.number_of_persons_injured}&nbsp;injured</p>
                 <p>${crash.number_of_persons_killed}&nbsp;killed</p>
                 <hr>
                 <p>${crash.collision_id}</p>
              </div>`    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterBystreet(){
  let output = document.getElementById("output");
  let street = document.getElementById("street").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.on_street_name == street){
      build += `<div class="fitted card">
                 <h3>${crash.crash_date}</h3>
                 <hr>
                 <p>${crash.on_street_name}</p>
                 <p>${crash.off_street_name}</p>
                 <p>${crash.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p>${crash.number_of_persons_injured}&nbsp;injured</p>
                 <p>${crash.number_of_persons_killed}&nbsp;killed</p>
                 <hr>
                 <p>${crash.collision_id}</p>
              </div>` 
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
