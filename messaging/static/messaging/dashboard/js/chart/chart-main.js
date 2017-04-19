(function() {
var parkingBarChartData = {
    labels: ["BOC Entrance", "P1 Parking", "P1 South Escalator", "P1 South", "P1 ATM", "Marketplace Entrance", "P1 North", "P1 CR", "Disabled", "Office", "P1 Hallway", "Edades Entrance" ],
    datasets: [{
        label: 'Connected Users',
        backgroundColor: "rgba(22,161,133,0.8)",
        fill: false,
        data: [
            23,
            288,
            113,
            192,
            25, 
            237,
            162,
            430,
            164,
            112,
            41,
            112
        ]
    }]
};
  
var level1BarChartData = {
    labels: ["North Court", "R1 Hallway", "North Court", "Lopez Drive South", "Lopez Drive", "Lopez Drive North", "Lopez Drive Entrance", "R1 Hallway", "R1 Hallway", "North Entrance", "R1 North Escalator"],
    datasets: [{
        label: 'Connected Users',
        backgroundColor: "rgba(22,161,133,0.8)",
        fill: false,
        data: [
            13,
            58,
            63,
            12,
            15, 
            37,
            12,
            50,
            24,
            42,
            21
        ]
    }]
};
  
var level2BarChartData = {
    labels: ["R2 South", "R2 Hallway", "R2 South", "R2 Hallway", "R2 CR", "R2 North", "R2 Hallway"],
    datasets: [{
        label: 'Connected Users',
        backgroundColor: "rgba(22,161,133,0.8)",
        fill: false,
        data: [
            23,
            18,
            33,
            12,
            35, 
            17,
            2
        ]
    }]
};
  
var level3BarChartData = {
    labels: ["Kids Zone Entrance", "Kids Zone", "R3 CR", "Chapel", "Cinema 6", "Cinema 5", "Cinema Snackbar", "Cinema Ticketbooth", "R3 North Escalator", "R3 North", "R3 Hallway"],
    datasets: [{
        label: 'Connected Users',
        backgroundColor: "rgba(22,161,133,0.8)",
        fill: false,
        data: [
            53,
            68,
            73,
            82,
            95, 
            67,
            72,
            83,
            63,
            93,
            73
        ]
    }]
};
  
  

window.onload = function() {
    var ctx = document.getElementById("parking-canvas").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: parkingBarChartData,
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Parking Zones'
            }
        }
    });
  
    var ctx = document.getElementById("level1-canvas").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: level1BarChartData,
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },  
            title: {
                display: true,
                text: 'Level 1 Zones'
            }
        }
    });
  
    var ctx = document.getElementById("level2-canvas").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: level2BarChartData,
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Level 2 Zones'
            }
        }
    });
  
    var ctx = document.getElementById("level3-canvas").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: level3BarChartData,
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Level 3 Zones'
            }
        }
    });
}; 
})();