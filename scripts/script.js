cardNum = document.getElementById('cardNum');
mounthYear = document.getElementById('mounthYear');
cardName = document.getElementById('cardName');

eCardNum = document.getElementById('eCardNum');
eMounthYear = document.getElementById('eMounthYear');
gender = document.getElementById('gender');
eCardName = document.getElementById('eCardName');

gender.addEventListener('change' , function(){
    var genderCard = gender.value ;
    let theName = genderCard + eCardName.value.toUpperCase();
    cardName.value = theName ;
})

eCardNum.addEventListener('change' , function(){
    let theNum = ""
    for(let i =0 ; i < eCardNum.value.length ; i ++){
        let caracter = eCardNum.value[i];
        if(i === 4 || i === 8 || i === 12){
            caracter = " "+caracter ;
        }
        theNum += caracter ;
    }
    console.log(theNum)
    cardNum.value = theNum
})

eCardNum.addEventListener("input", function () {
    // Remove non-numeric characters
    eCardNum.value = eCardNum.value.replace(/\D/g, '');
})

eCardName.addEventListener('change' , function(){
    let theName = ""
    theName = gender.value + eCardName.value.toUpperCase() ;
    cardName.value = theName ;
})


eMounthYear.addEventListener('change' , function(){
    let date = eMounthYear.value.split("-");
    let mouthYearVar = `${date[1]}/${date[0].substring(2)}`
    mounthYear.value = mouthYearVar ;
})
