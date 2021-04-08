//now build the calculate the build the function
function calculateTip() {
    var billAmount = document.getElementById('billAmount').value;
    var serviceQuality = document.getElementById('serviceQuality').value;
    var totalPeople = document.getElementById('totalPeople').value;

    //quick validation

    if (billAmount==="" || serviceQuality == 0) {
        return window.alert("Please enter the data");
    }

    // check of people input is one or empty
    if (totalPeople == "" || totalPeople<= 1) {
        totalPeople = 1;
        document.getElementById('each').style.display ='none';
    }else{
        document.getElementById('each').style.display = 'block';
    }

    //Do some math
    var total = (billAmount*serviceQuality) / totalPeople;
    total = Math.round(total*100) / 100;
    total = total.toFixed(2)
    //window.alert(total);

    //Display tip
    document.getElementById('totalTip').style.display = 'block';
    document.getElementById('tip').innerHTML = total;
}


//hise the tip amount on load
document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display = 'none';

//CLick the button and calls our custom functions

document.getElementById('calculate').onclick = function () {
    calculateTip();
}



