const amount = document.getElementById("input-amount")

const convert = document.getElementById("convert")
convert.addEventListener("click",()=>{

    async function currencies() {
        const response = await fetch("https://open.er-api.com/v6/latest/GBP");
        const rate = await response.json();

       document.querySelector(".conversion").innerHTML= 
       amount.value * rate.rates[document.getElementById("c-to").value]

      }
    
      currencies()


})

// const selectfrom = document.getElementById("c-from")
// selectfrom.addEventListener("change",(e)=>{

// console.log(e.target.value)

// })






//   async function currencies() {
//     const response = await fetch("https://www.visualcrossing.com/weather/weather-data-services/london?v=api");
//     const movies = await response;
//     console.log(movies);
//   }

//   currencies()


//   fetch('https://www.visualcrossing.com/weather/weather-data-services/london?v=api')
//   .then(function(response) {
//     return response.text();
//   }).then(function(data) {
//     console.log(data); // this will be a string
//   });


//let curr = 

var ops =
[
    "AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN",
    "BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD",
    "CAD","CDF","CHF","CLP","CNY","COP","CRC","CUP","CVE","CZK",
    "DJF","DKK","DOP","DZD",
    "EGP","ERN","ETB","EUR",
    "FJD","FKP","FOK",
    "GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD",
    "HKD","HNL","HRK","HTG","HUF",
    "IDR","ILS","IMP","INR","IQD","IRR","ISK",
    "JEP","JMD","JOD","JPY",
    "KES","KGS","KHR","KID","KMF","KRW","KWD","KYD","KZT",
    "LAK","LBP","LKR","LRD","LSL","LYD",
    "MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MYR","MZN",
    "NAD","NGN","NIO","NOK","NPR","NZD",
    "OMR",
    "PAB","PEN","PGK","PHP","PKR","PLN","PYG",
    "QAR",
    "RON","RSD","RUB","RWF",
    "SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLE","SLL","SOS","SRD","SSP","STN","SYP","SZL",
    "THB","TJS","TMT","TND","TOP","TRY","TTD","TVD","TWD","TZS",
    "UAH","UGX","USD","UYU","UZS",
    "VES","VND","VUV",
    "WST",
    "XAF","XCD","XDR","XOF","XPF",
    "YER",
    "ZAR","ZMW","ZWL"
]

function populateOptions(){
    var x = document.getElementById("c-from");
for (let i = 0; i < ops.length; i++) {
    
    let option = document.createElement("option");

    option.value = ops[i];
    option.text = ops[i];

    x.add(option);
    
}


var x = document.getElementById("c-to");
for (let i = 0; i < ops.length; i++) {
    
    let option = document.createElement("option");

    option.value = ops[i];
    option.text = ops[i];

    x.add(option);
    
}
}

populateOptions()