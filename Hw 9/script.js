// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку

let arr = [];

let input = prompt("Add fucken you need");
arr.push(input);


//let arr = prompt("Enter your numbers")
//arr = [7,3,1,5,2,4,8,6];

 for( let j = 0; j < arr.length; j++) {
	for( let i = 0; i < arr.length -1; i++){
		if (arr[i] > arr[i + 1]) {            
			let temp = arr[i]                   
			arr[i]= arr[i + 1]                  
			arr[i + 1]= temp 
           
		}
	}                             
}
console.log(arr.slice(1,3));
     



 
    


