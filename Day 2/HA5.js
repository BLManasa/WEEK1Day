var genderType = "female";
function printGender(genderType){
    let color = "brown";
    if(genderType == "female"){
        var age=30
        let color ="pink";
        console.log("color", color);
    }
    else{
        console.log("nothing");
    }
    console.log("age", age);
    console.log("color", color);

}
printGender("female");
console.log(genderType)
