function array([...arr]){
    arr[2]=10;
    console.log(arr);
}

const arr=[1,2,3,4];
const arr2=[...arr];
array(arr2);
console.log(arr2);