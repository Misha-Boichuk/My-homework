     // ДЗ 9. Масив
// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку

let srg = [];

 for(let i = 0; i < 10; i++)
    srg.push(prompt("Enter a value"));

 let arr = srg  

 for( let j = 0; j < arr.length; j++) {
	for( let i = 0; i < arr.length -1; i++){
		if (arr[i] > arr[i + 1]) {            
			let temp = arr[i]                   
			arr[i]= arr[i + 1]                  
			arr[i + 1]= temp 
			
		}
	}                          
 } 
 let af = arr.splice(1,3)

document.write(arr);
