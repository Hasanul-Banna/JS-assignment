// feetToMile conversion Start
function feetToMile(feet) {
    const Mile = feet / 5280;
    if ( feet < 0 ){ 
        return "length can't be negative ";
    }
    else {
        return Mile;
    }
}
let result = feetToMile(52800);
console.log(result);
// feetToMile Conversion End


// woodCalculator Start
function woodCalculator(C,T,B) {
    const chair = C*1;
    const table = T*3;
    const bed = B*5;
    let total = chair + table + bed;
    if (C<0 || T<0 || B<0) {
        return "invalid. Please, make sure every input is positive"
    }
    else {
    return total;
    }
}
let result2 = woodCalculator(1,3,2);
console.log("Total quantity of wood is:" + " " + result2+ " " + "cubicFeet");
// woodCalculator End 


// brickCalculator Start
function brickCalculator(n) {
     if (n>=1 && n<=10) {
       let bricks = 1000*15*n ;
        return bricks;
    }
    else if (n>=11 && n<=20) {
       let bricks = 1000*12*(n-10) +(1000*15*10) ;
        return bricks;
    }
    else if (n>=21 && n<=Infinity) {
        let bricks = 1000*10*(n-20) +(1000*15*10) + (1000*12*10) ;
         return bricks;
     }
     else {
         return 0;
     }
}
let result3 = brickCalculator(19) ;
console.log("Total quantity of brick is:" + " " + result3 + " " + "piece");
// brickCalculator End


// tinyFriend Start
let Friends = ["Rafid", "Farhanul", "Abir", "Mostafa"];
function tinyFriend(arry) {
	return arry.reduce(function(prevName,currName) {
		if (currName.length < prevName.length) {
            return currName;
        		}
		else 
			return prevName;
	})
}
let result4 = tinyFriend(Friends);
console.log("tiniest name of my friend is: " + result4);
// tinyFriend End