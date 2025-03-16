//Find largest number of array using function

const arrVal=[100,500,50,10,400,300,1000,20,700,450,];
console.log("Array Values are",arrVal);

function funSort(arr1){

    for(let i=0;i<arr1.length-1;i++){
        for(let j=i+1; j<arr1.length;j++){

            var temp;
            if(arr1[i]>arr1[j]){
                temp=arr1[i];
                arr1[i]=arr1[j];
                arr1[j]=temp;
            }
        }
    }

    return arr1
}

const SorArray=funSort(arrVal);

console.log("After Sorting Array ",SorArray);

console.log("Largest No Of Array Is ",SorArray[SorArray.length-1]);