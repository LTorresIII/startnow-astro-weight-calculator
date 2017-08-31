var planets =[
    ["Pluto", 0.06],
    ["Neptune", 1.148],
    ["Uranus", 0.917],
    ["Saturn", 1.139],
    ["Jupiter", 2.640],
    ["Mars", 0.3895],
    ["Moon", 0.1655],
    ["Earth", 1],
    ["Venus", 0.9032],
    ["Mercury", 0.377],
    ["Sun", 27.9]
];

planets.forEach(function(planetName){
   $("#planets").append("<option>"+ planetName[0] +"</option>");
});

function calculateWeight(weight, selectedPlanetName){
    var i = 0;
    
    for( i; i < planets.length; i++) {
        var planetsWeight = planets[i][1]; 
        if(selectedPlanetName === planets[i][0]){
           return weight * planetsWeight;
        } 
    };
};

function handleClickEvent(){
    var selectedPlanetName =  $("#planets").find(":selected").text();
    var userWeight = $("#userWeight").val();
    var newWeight = calculateWeight(userWeight, selectedPlanetName);
    $("#output").text("If you were on "+selectedPlanetName+", you would weigh "+ newWeight);
};

var button = document.getElementById("calculateWeight");
button.onclick = handleClickEvent;
    