function Tax(tk){
    var total;
    if(tk<=100){
        total=tk+10;
    }
    else{
        total=tk+12;
    }
    console.log(total)
}

Tax(110)
Tax(444)