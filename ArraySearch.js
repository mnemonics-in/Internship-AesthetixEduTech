//Array Search pgm
const arr1 =[10,100,100,200,500,50,400,300];
function ArrSch(arrVal){
    for(let i=0;i<arr1.length;i++){

        if(arr1[i]==arrVal){
            console.log("Entered item exist at postion ",Number(i)+1);
            break;
        }
    }
}
ArrSch(300);