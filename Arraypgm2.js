//Find 2nd largest number of array

const arr1=[200,10,250,300,30,330,700,699,300,200,10,30,110];
arr1Len=arr1.length;

function arrSort(){
    for(let i=0;i<arr1Len-1;i++){
        for(let j=i+1;j<arr1Len;j++){
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
var res=arrSort();
var arrNew=[];

let k = 0; 
for (let i = 0; i < res.length; i++) {
    if (i === 0 || res[i] != res[i - 1]) {
        arrNew[k] = res[i];
        k++;
    }
}
console.log("Largest 2nd largest number of array is ",arrNew[arrNew.length-2]);

