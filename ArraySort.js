//Array Sort pgm using functon

function ArrSort(arr1){

    for(let i=0;i<arr1.length-1;i++){
        for(let j=i+1;j<arr1.length;j++){
            if(arr1[i]>arr1[j]){
                var temp;
                temp=arr1[i];
                arr1[i]=arr1[j];
                arr1[j]=temp;

            }
        }

    }
    return arr1;
}

const arr2=ArrSort([1000,1000,20,30,70,15]);
console.log("After sorting ....",arr2);