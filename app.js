document.getElementById('gb8-memory').addEventListener('click', function(){
    let gb8Price= document.getElementById('gb8-memory').Value;
    gb8Price=0;
    const extraMemory=document.getElementById('extra-memory-cost');
    extraMemory.innerText=gb8Price;


    addintionTotal();
})


document.getElementById('gb16-memory').addEventListener('click', function(){
    let gb16Price= document.getElementById('gb16-memory').Value;
    gb16Price=180;
    const extraMemory=document.getElementById('extra-memory-cost');
    extraMemory.innerText=gb16Price;


    addintionTotal();
})

/*  memory section ses  */



document.getElementById('GB256-SSd-storage').addEventListener('click',function(){
    let gb256SSD=document.getElementById('GB256-SSd-storage').value;
    gb256SSD=0;
    const extraStorage=document.getElementById('extra-storage-cost');
    extraStorage.innerText=gb256SSD;


    addintionTotal();
})

document.getElementById('GB512-SSD-storage').addEventListener('click',function(){
    let gb512SSD=document.getElementById('GB512-SSD-storage').value;
    gb512SSD=100;
    const extraStorage=document.getElementById('extra-storage-cost');
    extraStorage.innerText=gb512SSD;


    addintionTotal();
})

document.getElementById('TB1-storage').addEventListener('click', function(){
    let tb1SSD=document.getElementById('TB1-storage').value;
    tb1SSD=180
    const extraStorage=document.getElementById('extra-storage-cost');
    extraStorage.innerText=tb1SSD;


    addintionTotal();
})


/* storage section ses */

document.getElementById('free-delivery').addEventListener('click', function(){
    let freeDelivery= document.getElementById('free-delivery').value;
    freeDelivery= 0;
    const deliveryCost=document.getElementById('delivery-cost');
    deliveryCost.innerText=freeDelivery;
    


    addintionTotal();
})


document.getElementById('delivery-with-charge').addEventListener('click', function(){
    let deliveryWithCharge=document.getElementById('delivery-with-charge').value;
    deliveryWithCharge=20;
    const deliveryCost=document.getElementById('delivery-cost');
    deliveryCost.innerText=deliveryWithCharge;


    addintionTotal();

})


/* delivery section ses */


function addintionTotal(){
    const minimumPriceText = document.getElementById('minimum-price').innerText;
const minimumPrice= parseInt(minimumPriceText);


const memoryCostText=document.getElementById('extra-memory-cost').innerText;
const memoryCost= parseInt(memoryCostText);


const storageCostText= document.getElementById('extra-storage-cost').innerText;
const storageCost=parseInt(storageCostText);



const deliveryChargeText=document.getElementById('delivery-cost').innerText;
const deliveryCharge= parseInt(deliveryChargeText);



const totalCost=minimumPrice +memoryCost+storageCost+deliveryCharge;

const totalCharge=document.getElementById('total-cost');
totalCharge.innerText=totalCost;

const totalPromo=document.getElementById('total-with-promo');
totalPromo.innerText=totalCost;

}

document.getElementById('apply-offer').addEventListener('click', function(){
    const promoFeild=document.getElementById('offer-code').value;
    if (promoFeild =="stevekaku") {
        const totalPromoText=document.getElementById('total-with-promo').innerText;
        const totalPromo =parseInt(totalPromoText); 
        const totalWithPromo=(totalPromo)-(totalPromo*20/100);
        console.log(totalWithPromo);
        document.getElementById('total-with-promo').innerText=totalWithPromo;
    }
    document.getElementById("total-with-promo").disabled = true;
})



