'use strict';
//CODING CHALLENGE 1
/*
const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2*avgKoalas) {
        console.log(`Dolphin win (${avgDolphins} vs. ${avgKoalas})`);        
    }
    else if(avgKoalas >= 2*avgDolphins ){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);                
    }
    else {
        console.log('No one wins😏');
        
    }
}

checkWinner(avgDolphins, avgKoalas)
console.log(avgDolphins, avgKoalas);
//CODING CHALLENGE 2
const calTip = function (bill) {
    const percent = (bill >= 50 && bill <= 300) ? 15 : 20;
    return bill * percent / 100;
}

const bill = [125, 555, 44];
const tip = [calTip(bill[0]), calTip(bill[1]), calTip(bill[2])];
const total = [bill[0] + tip[0],bill[1] + tip[1],bill[2] + tip[2]];

console.log(bill);
console.log(tip);
console.log(total);
*/

//CODING CHALLENGE 3
const mark = {
    fullName : 'Mark Miller',
    height: 1.69,
    mass: 78,
    calBMI: function () {
        return this.mass / this.height ** 2;
    }
};
const john = {
    fullName: 'John Smith',
    height: 1.95,
    mass: 92,
    calBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
console.log(john);

// John's BMI (28.3) is higher than Mark's (23.9)!
if (mark.calBMI() > john.calBMI())
    console.log(`Mark's BMI (${mark.calBMI()}) is higher than John's (${john.calBMI()})`);
else
    console.log(`John's BMI (${john.calBMI()}) is higher than Mark's (${mark.calBMI()})`);
    
