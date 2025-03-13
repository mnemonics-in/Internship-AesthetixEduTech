// Find largest number of Array
const arr1=[200,10,250,300,30,330,700,699,110];
arr1Len=arr1.length;
var temp;
function ArrSort(){
    for(let i=0;i<arr1Len-1;i++){
        for(let j=i+1;j<arr1Len;j++){
            if(arr1[i]>arr1[j]){
                temp=arr1[i];
                arr1[i]=arr1[j];
                arr1[j]=temp;
            }
        }
    }
    
    return arr1;
}

var res=ArrSort();
console.log("Largest number of array is ",res[arr1Len-1]);