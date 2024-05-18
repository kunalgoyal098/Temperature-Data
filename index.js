
console.log("hello")
const URL = "https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2023-04-10&end_date=2023-04-15&daily=temperature_2m_max&timezone=GMT";
const dateTemperature = document.getElementById("dateTemp")
const extend =  document.querySelector('.myclass');

var OriginalContent =extend.innerHTML

dateTemperature.addEventListener('input',function(event){ 
   let  date_selected = event.target.value
   

    fetch(URL)
  .then(response=>{
    if(response.ok){
        return response.json()
    }
    else{
        throw new Error("somethng went wrong!!!")
    }

  })
  .then(ObjectData=>{
    console.log(ObjectData)

    const Data = new Map();
    Data.set(ObjectData.daily.time[0],ObjectData.daily.temperature_2m_max[0])
    Data.set(ObjectData.daily.time[1],ObjectData.daily.temperature_2m_max[1])
    Data.set(ObjectData.daily.time[2],ObjectData.daily.temperature_2m_max[2])
    Data.set(ObjectData.daily.time[3],ObjectData.daily.temperature_2m_max[3])
    Data.set(ObjectData.daily.time[4],ObjectData.daily.temperature_2m_max[4])
    Data.set(ObjectData.daily.time[5],ObjectData.daily.temperature_2m_max[5])
    console.log(Data)
    // console.log(ObjectData.daily.time[0] == date_selected)
    for (let [key,value] of Data.entries()) {
        
        if(key == date_selected ){
        console.log("runs inside the if ")
        var updateHtml= `<label for="dateTemp" class="Temp" id="dateTemp "> Maximum Temperature of date :${key} is : ${value}</label><br>`;
        break;
        }
        
    }
    extend.innerHTML = updateHtml
    

    
    
    
  })
  .catch(error=>{
    console.log(error)
  })
})

