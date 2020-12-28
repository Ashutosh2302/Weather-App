const searchbtn=document.getElementById('searchbtn')
const cityname=document.getElementById('cityname')
const city_name=document.getElementById('city_name')
const temp_value=document.getElementById('temp_value')
const symbol=document.getElementById('symbol')

const datahide = document.querySelector('.middle_layer')

const getInfo = async(event) =>{
    event.preventDefault()
    let cityVal=cityname.value
    if(cityVal===""){
        city_name.innerText="Empty search"
        datahide.classList.add('data_hide')
    }else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&APPID=3e2d927d4f28b456c6bc662f34350957`
            const response = await fetch(url)
            const data = await response.json()
            city_name.innerText=`${data.name}, ${data.sys.country}`
            temp_value.innerText=data.main.temp
            const status=data.weather[0].main
            
            if(status=="Clear")
            {
                symbol.innerHTML="<i class='fas fa-sun' style='color:yellow'></i>"
            }else if(status=="Clouds"){
                symbol.innerHTML="<i class='fas fa-cloud' style='color:white'></i>"
            }else if(status=="Mist"){
                symbol.innerHTML="<i class='fas fa-tint' style='color:white'></i>  <i class='fas fa-tint' style='color:white'></i>"
            }else{
                symbol.innerHTML="<i class='fas fa-cloud'></i>"
            }
            datahide.classList.remove('data_hide')
        }
        catch{
            city_name.innerText="Unable to fetch data"
            datahide.classList.add('data_hide')
        }
    }
}
searchbtn.addEventListener('click',getInfo)


