////Callback Function Question
function displayCar(){
    console.log("THIS IS A CAR");
}
function displayTruck(){
    console.log("THIS IS A TRUCK");
}
function displayBike(){
    console.log("THIS IS A BIKE");
}
///HIGHER ORDER FUNCTION
function vehicleInfo(vehicleCategory,callbackFn){
    console.log("Vehicle Category", vehicleCategory);
    callbackFn();
}

vehicleInfo("Car",displayCar);
vehicleInfo("Truck",displayTruck);
vehicleInfo("Bike",displayBike)