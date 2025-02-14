// Checked = property that determines the checked state of an HTML checkbox or radio button element

const isSub = document.getElementById("myCheckbox")

const checkVisa = document.getElementById("visaBtn")

const checkMasterCard = document.getElementById("masterCardBtn")

const checkPayPal = document.getElementById("payPalBtn")

const submitButton = document.getElementById("myBtn")

const subResult = document.getElementById("subResult")

const paymentResult = document.getElementById("paymentResult")

submitButton.onclick = function(){


    if(isSub.checked){
        subResult.textContent = `You are Subscribed!`
    }
    else{
        subResult.textContent = `You are NOT subscribed!`   
    }

    if(checkVisa.checked){
        paymentResult.textContent = `You are paying with Visa.`;
    }
    else if(checkMasterCard.checked){
        paymentResult.textContent = `You are paying with MasterCard.`;
    }
    else if(checkPayPal.checked) {
        paymentResult.textContent = `You are paying with PayPal.`;
    }
    else{
        paymentResult.textContent = `You have not choosen any payment method.`
    }

}