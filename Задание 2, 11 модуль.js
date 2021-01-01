
let numToCheck = 3;
let flag  = "";
function primeNumber(numToCheck, flag){
	for (let i = 2; i <= numToCheck - 1; i++){
		if (((numToCheck % i) === 0) && (numToCheck !== i)){
		flag = "Не является простым";
		break;
		}
		else{
			flag = "Является простым";
		}
	}	
	console.log(`${numToCheck} ${flag}`);
};

if ((numToCheck < 1000) && (numToCheck >= 1)){
	if(numToCheck === 1){
		console.log("Нейтральный элемент");
	}
	if(numToCheck === 2){
	console.log("2 Является простым");
	}
	else{
		primeNumber(numToCheck, flag);
	}
}
else{
console.log("Данные неверны");
}
