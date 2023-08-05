function calculate(){
    quantity = document.querySelector('.amount').value;
    finalQuantity = document.querySelector('.quantity');
    finalQuantity.innerText = quantity;
    finalPrice = document.querySelector('.finalprice');
    finalPrice.innerText = "$" + quantity * 850000;

    color = document.querySelector('#laptopcolor');
    circle = document.querySelector('.circle');

    if(color.value == "darkblue"){
        circle.style.color = "darkblue";
    }if(color.value == "darkred"){
        circle.style.color = "darkred";
    }if(color.value == "black"){
        circle.style.color = "black";
    }if(color.value == "lightgray"){
        circle.style.color = "lightgray";
    }
}