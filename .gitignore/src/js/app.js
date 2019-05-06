"use strict";

const showBalance = (value) => {     
    let balanceType;
    switch(value) {
        case 523: 
            balanceType = "балла";
            break;
        case 5001: 
            balanceType = "балл";
            break;
        default: 
            balanceType = "баллов";
            break;
    }
    $('#finalText').html(`Ваш баланс: ${value} ${balanceType}`);
}