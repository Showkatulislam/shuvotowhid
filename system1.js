function Bank(text,amount){
    var total=50000;
    if(text=='withdraw'){
        total=total-amount;
    }else if(text=='deposit'){
        total=total+amount
    }
    else{
        console.log('mama tomi bul rastai aiso')
    }
    console.log(total)
}



Bank('deposit',1000)
