function almostIncreasingSequence(sequence) {
  var count = 0;
  for(var i = 0; i <= sequence.length; i++ ){
      if(sequence[i] <= sequence[i-1]){
          count++;
          if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]){
              return false;
          }
      }
  }
      
return count <=1;
}


/*
const array  = [1, 2, 3, 4 ,5 ,6, 3]
console.log(array.length)
console.log(...array.sort())*/

//const array  = [1, 2, 3, 4 ,5 ,6, 3]

const array = [1, 2, 3, 4, 5, 3, 5, 6]

console.log(almostIncreasingSequence(array))


