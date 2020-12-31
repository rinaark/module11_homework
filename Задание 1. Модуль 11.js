let array = [];
let countEven = 0;
let countOdd = 0;
let countZero = 0;

function counter (newArray, countEven, countOdd, countZero){
for(let i = 0; i < newArray.length; i++){
		if((typeof(newArray[i]) === 'number') && (newArray[i] !== 0)){
			if(newArray[i] % 2 === 0){
					countEven++;
				}
			else{
				countOdd++;
			}
		}
		if((typeof(newArray[i]) === 'number') && (newArray[i] === 0)){
				countZero++;
		}
	}
console.log(`Кол-во чётных: ${countEven}, кол-во нечётных: ${countOdd}, кол-во нулей: ${countZero}`);
}
if (array.length >= 1){
	counter(array, countEven, countOdd, countZero);
}	
else{
	console.log(`Кол-во чётных: ${countEven}, кол-во нечётных: ${countOdd}, кол-во нулей: ${countZero}`);
}
