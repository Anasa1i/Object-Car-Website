
var cars = {
    honda: {
        civic: {
            name: "Honda Civic",
            model: "2024",
            fuelType: "Petrol",
            engine: "6000 rpm",
            seatCapacity: "5 seater",
            fuelTankCapacity: "40 L",
            image: "https://th.bing.com/th/id/OIP.5xMnBWoLP9cnctghhacWHAAAAA?rs=1&pid=ImgDetMain"
        },
        city: {
            name: "Honda City",
            model: "2024",
            fuelType: "Petrol",
            engine: "6000 rpm",
            seatCapacity: "5 seater",
            fuelTankCapacity: "40 L",
            image: "https://th.bing.com/th/id/OIP.iFCqW3TccKsHs0BBfhj2BwHaEb?rs=1&pid=ImgDetMain"
        },
        accord: {
            name: "Honda Accord",
            model: "2024",
            fuelType: "Petrol",
            engine: "6000 rpm",
            seatCapacity: "5 seater",
            fuelTankCapacity: "40 L",
            image: "https://th.bing.com/th/id/OIP.R0ftZjxmjZc3Td14GPkN1QHaEu?rs=1&pid=ImgDetMain"
        }
    },

    suzuki:{
        alto:{
            name:"Suzuki Alto",
            model:"2024",
            fuelType: "Cng",
            engine: "600 rpm",
            seatCapacity: "5 seater",
            fuelTankCapacity: "40 L",
            image: "https://th.bing.com/th/id/OIP.f-aj0LZKuCXZJwDMvhqeGAAAAA?rs=1&pid=ImgDetMain"
        },
        cultus:{
            name:"Suzuki Cultus",
            model:"2024",
            fuelType: "Cng",
            engine: "600 rpm",
            seatCapacity: "5 seater",
            fuelTankCapacity: "40 L",
            image: "https://th.bing.com/th/id/R.1581ecbf1570c43985515c43b264c903?rik=NT7AI8SjJxQsQQ&pid=ImgRaw&r=0"
        },
        mehran:{
            name:"Suzuki Mehran",
            model:"2024",
            fuelType: "Cng",
            engine: "600 rpm",
            seatCapacity: "5 seater",
            fuelTankCapacity: "40 L",
            image: "https://th.bing.com/th/id/OIP.2VOyaPD3xMJShqojXr7OHQHaE8?rs=1&pid=ImgDetMain"
        }
    },
    toyota:{
        camry:{
            name:"Toyota camry",
            model:"2024",
            fuelType: "Cng",
            engine: "600 rpm",
            seatCapacity: "5 seater",
            fuelTankCapacity: "40 L",
            image: "https://th.bing.com/th/id/OIP.yGWpcF3A79YBiCFEjtp7cgHaDl?rs=1&pid=ImgDetMain"
        },
        corolla:{
            name:"Toyota Corolla",
            model:"2024",
            fuelType: "Cng",
            engine: "600 rpm",
            seatCapacity: "5 seater",
            fuelTankCapacity: "40 L",
            image: "https://th.bing.com/th/id/OIP.e3ciBl3rz4RUEKSn3VvwMQAAAA?rs=1&pid=ImgDetMain"
        },
        prius:{
            name:"Toyota Priusn",
            model:"2024",
            fuelType: "Cng",
            engine: "600 rpm",
            seatCapacity: "5 seater",
            fuelTankCapacity: "40 L",
            image: "https://th.bing.com/th/id/OIP.U29OfyjR9MR8fUVf6fNTKQHaE5?rs=1&pid=ImgDetMain"
        }
    }
}

// console.log(cars.suzuki.cultus)

var model = document.getElementById("model");
var company = document.getElementById("company");

for (var key in cars) {
    company.innerHTML += `<option value='${key}'>${key}</option>`;
}

function selectCompany() {
    model.innerHTML = `<option value="">Select Model</option>`;

    for (var keytwo in cars[company.value]) {
        model.innerHTML += `<option value='${keytwo}'> ${keytwo} </option>`;
    }

    // var selectedModel = model.value;
    // var selectedCompany = company.value;

    // console.log(cars[selectedCompany][selectedModel].name);

}

function searchBtn() {
    // console.log(cars)

    var lastDiv = document.getElementById("lastdiv");

    // lastDiv.innerHTML="";

    lastDiv.innerHTML=
    `<div class="main-card">

        <div class="one-main img-main" >
             <img src="${cars[company.value][model.value].image} alt="">
         </div>

         <div >
        

            <div class="right main-inner" ><span>
                <div><span class="main-inner" >${cars[company.value][model.value].name}</span></div>
                <div><span class="main-inner" >${cars[company.value][model.value].model}</span></div>
                <div><span class="main-inner" >${cars[company.value][model.value].seatCapacity}</span></div>
                <div><span class="main-inner" >${cars[company.value][model.value].fuelTankCapacity}</span></div>
                <div><span class="main-inner" >${cars[company.value][model.value].fuelType}</span></div>
                <div><span class="main-inner" >${cars[company.value][model.value].engine}</span></div>
            </div>
            
        </div>
        </div>
  
    </div>

    </div>`;

    // console.log(cars[company.value][model.value])
}

// name:"Suzuki Alto",
// model:"2024",
// fuelType: "Cng",
// engine: "600 rpm",
// seatCapacity: "5 seater",
// fuelTankCapacity: "40 L",
// image