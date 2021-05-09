const axios = require('axios');
const tele_func = require('./add_tele')

const func = async () => {
    var currentDate = new Date()
    var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()
const date = day + "-" + month + "-" + year
console.log("INSIDE "+currentDate.toLocaleTimeString())

try{
    const response = await axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=571&date='+date,{
        headers : {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}
    })

    for(i=0;i<response.data.centers.length;i++){
        const name = response.data.centers[i].name
            for(j=0;j<response.data.centers[i].sessions.length;j++){
                if(response.data.centers[i].sessions[j].min_age_limit < 45 && response.data.centers[i].sessions[j].available_capacity >1){
                    tele_func(name,response.data.centers[i].sessions[j].date,response.data.centers[i].sessions[j].available_capacity)
                }
            }
        
    }
}
catch(error){
    console.log(error)
}

}
// func()
setInterval(func, 150000);

