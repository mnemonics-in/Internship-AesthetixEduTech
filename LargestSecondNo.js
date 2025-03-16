//Find largest 2nd no of array
const arr1 = [1000,500,2000,800,300,50,100,900,700,250,250,100];
arr1Len=arr1.length;
console.log("Array values are ",arr1);
function FunSort(ArrVal){

    for(let i=0;i<arr1Len-1;i++){
        for(let j=i+1;j<arr1Len;j++){
            if(ArrVal[i]>ArrVal[j]){
                var temp;
                temp=ArrVal[i];
                ArrVal[i]=ArrVal[j];
                ArrVal[j]=temp;
            }
        }
    }

    return ArrVal;
}

const SorArray=FunSort(arr1);
console.log("Array after sorting",SorArray);

var arrNew=[];

let k = 0; 
for (let i = 0; i < SorArray.length; i++) {
    if (i === 0 || SorArray[i] != SorArray[i - 1]) {
        arrNew[k] = SorArray[i];
        k++;
    }
}
console.log("Largest 2nd largest number of array is ",arrNew[arrNew.length-2]);