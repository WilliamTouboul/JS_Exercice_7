function doTheMath() {
    var shoeSize = document.getElementById("shoeSize").value;
    var yearOfBirth = document.getElementById("yearOfBirth").value;

    var tempNumber = (shoeSize*2)+5;
    tempNumber *= 50;
    tempNumber -= yearOfBirth;
    var result = tempNumber + 1766;

    alert('Le resultat est : ' + result);


}