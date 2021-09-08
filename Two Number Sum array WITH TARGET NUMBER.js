/*Two Number Sum
array = [2,4,1,6,8]
targetSum = 10 */


//TIME COMPLEXITY 0(N^2) // SPACE COMPLEXITY 0(1)
function twoNumberSum(array, targetSum) {
  // Write your code here.


		for (let i = 0; i < array.length -1; i++) {
			const firstNum = array[i];
			for (let j = i + 1; j < array.length; j++) {
				const secondNum = array[j];
				if (firstNum + secondNum === targetSum ){
					return [firstNum , secondNum];
			}
		}
	}
		
}

array = [2,4,1,6,8]
targetSum = 10
console.log(twoNumberSum(array, targetSum))