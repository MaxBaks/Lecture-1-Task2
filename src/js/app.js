
const showBalance = (strings, value) => {  
    const balance = strings[0];
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
    
    return `${balance}${value} ${balanceType}`;
}

const test = [523, 6000, 5001, 5013];
for (let item of test){
    let value = item;
    const answer = showBalance`Ваш баланс: ${value}`;
    console.log(answer);
}

