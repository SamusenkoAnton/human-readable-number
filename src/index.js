module.exports = function toReadable(number){
    const NUMBERS = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "one hundred"
    }
    if (number <= 20 || number == 100){
        number = NUMBERS[number];
    }
    if (number > 20 && number <= 99){
        number = number.toString().split("");
        if(number[1] == 0){
            number[0] = Number(number[0])*10;
            number = NUMBERS[number[0]];
        } else {
            number[0] = Number(number[0])*10;
            number[1] = Number(number[1]);
            number = NUMBERS[number[0]]+" "+NUMBERS[number[1]];
        }
    }
    if (number > 100){
        number = number.toString().split("");
        if (number[1] == 0 && number[2] == 0){
            number = NUMBERS[number[0]]+" "+"hundred";
        } else if(number[1] == 0){
            number = NUMBERS[number[0]]+" "+"hundred " + NUMBERS[number[2]];
        } else if (Number(number[1]+number[2]) >= 10 && Number(number[1]+number[2]) <= 19){
            number = NUMBERS[number[0]]+" "+"hundred " + NUMBERS[number[1]+number[2]];
        } else if (number[2] == 0){
            number[1] = Number(number[1])*10;
            number = NUMBERS[number[0]]+" "+"hundred " + NUMBERS[number[1]];
        } else {
            number[1] = Number(number[1])*10;
            number = NUMBERS[number[0]]+" "+"hundred " + NUMBERS[number[1]]+ " " +  NUMBERS[number[2]];
        }
        console.log(number);
    }
    console.log(number);
    return number;
}
