var submitBut = document.querySelector("#submit");
var tipField = document.querySelector("#tip-amount");
var totalField = document.querySelector("#new-total");
var billAmount = document.querySelector("#bill-total");
var tipPercent = document.querySelector("#tip-percent");

function checkTip(event) {
    event.preventDefault();
    console.log(event);
    
    if(isNaN(billAmount.value) || isNaN(tipPercent.value)){
        alert("please enter numbers...");
        console.log(billAmount.value);
        billAmount.value = "bill amount";
        console.log(tipPercent.value);
        tipPercent.value = "tip percent";
    }
    if(!isNaN(billAmount.value) && !isNaN(tipPercent.value)){
        var totalTip = parseFloat(parseFloat(billAmount.value) * (parseFloat(tipPercent.value) / 100)).toFixed(2);
        console.log(totalTip);
        var totalBill = parseFloat(parseFloat(billAmount.value) + parseFloat(totalTip)).toFixed(2);
        console.log(tipField.textContent);
        tipField.textContent = totalTip;
        totalField.textContent = totalBill;
    }

}
submitBut.addEventListener("click", checkTip);
// submitBut.addEventListener("click", function(event) {
//     event.preventDefault();
//     console.log(event);
    
//     if(isNaN(billAmount.value) || isNaN(tipPercent.value)){
//         alert("please enter numbers...");
//         console.log(billAmount.value);
//         billAmount.value = "bill amount";
//         console.log(tipPercent.value);
//         tipPercent.value = "tip percent";
//     }
//     if(!isNaN(billAmount.value) && !isNaN(tipPercent.value)){
//         var totalTip = parseFloat(parseFloat(billAmount.value) * (parseFloat(tipPercent.value) / 100)).toFixed(2);
//         console.log(totalTip);
//         var totalBill = parseFloat(parseFloat(billAmount.value) + parseFloat(totalTip)).toFixed(2);
//         console.log(tipField.textContent);
//         tipField.textContent = totalTip;
//         totalField.textContent = totalBill;
//     }

// });