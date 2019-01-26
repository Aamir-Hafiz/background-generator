//*********************************challenge completed by Aamir One Method
const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
//const array = [2,4,591,392,391,2,5,10,2,20,20];
const answer = (array1) => {

j=array1.length;
for (j=0;j<array1.length;j++) {
  a=array1[j];
  b=j;
  for ( i = j; i <array1.length; i++) {
    if (a>array1[i]) {
      a=array1[i];
      b=i;      
    };
  };
  temp=array1[j];
  array1[j]=array1[b];
  array1[b]=temp;
  
};
  console.log(array1);
a=array1[0];

const newArray=[];
var arraytopush=[];
i=0;
//debugger;
for (j=0;j<array1.length;j++) {
    if (array1[j]!==a){      
      
      if(arraytopush.length===1){
          newArray.push(arraytopush[0]);

      } else {
        newArray.push(arraytopush);
      };      
      
      arraytopush=[];
      arraytopush.push(array1[j]);
      a=array1[j];            
    } else {
      arraytopush.push(a);         
    };
    if(j===array1.length-1){        
          if(arraytopush.length===1){
            newArray.push(arraytopush[0]);
        } else {
          newArray.push(arraytopush);
        };
      };
};

console.log(newArray);
};

answer(array);

//*********************************challenge completed by Aamir One Method




//*********************************challenge completed by Aamir Second Method
const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
//const array = [2,4,591,392,391,2,5,10,2,20,20];
const answer = (array1) => {

j=array1.length;
for (j=0;j<array1.length;j++) {
  a=array1[j];
  b=j;
  for ( i = j; i <array1.length; i++) {
    if (a>array1[i]) {
      a=array1[i];
      b=i;      
    };
  };
  temp=array1[j];
  array1[j]=array1[b];
  array1[b]=temp;
  //newArray.push(a);

};
  console.log(array1);
a=array1[0];
//newArray=[];
const newArray=[];
itemtopush="[";
i=0;
for (j=0;j<array1.length;j++) {
    if (array1[j]!==a){      
      itemtopush=itemtopush+"]";
      newArray.push(itemtopush);
      a=array1[j];      
      itemtopush="[";

//****************
    if (j+1<array1.length){       
      if(array1[j+1]===a){
        itemtopush=itemtopush+array1[j]+",";
      } else {
        itemtopush=itemtopush+array1[j];
      };
    } else {
        itemtopush=itemtopush+array1[j];
    };    
//*****************
      //itemtopush="[";
    } else {
      if (j+1<array1.length){       
      if(array1[j+1]===a){
        itemtopush=itemtopush+array1[j]+",";
      } else {
        itemtopush=itemtopush+array1[j];
      };
    } else {
        itemtopush=itemtopush+array1[j];
    };  
      
    };
};

console.log(newArray);
};

answer(array);

//*********************************challenge completed by Aamir

const swap(a, b)
{
    temp = a;
    a = b;
    b =temp;
}

//****************** Quick Sort
const quicksort(array, int l, int r)
{
    // Base case: No need to sort arrays of length <= 1
    if (l >= r)
    {
        return;
    }
    
    // Choose pivot to be the last element in the subarray
    int pivot = arr[r];

    // Index indicating the "split" between elements smaller than pivot and 
    // elements greater than pivot
    int cnt = l;

    // Traverse through array from l to r
    for (int i = l; i <= r; i++)
    {
        // If an element less than or equal to the pivot is found...
        if (arr[i] <= pivot)
        {
            // Then swap arr[cnt] and arr[i] so that the smaller element arr[i] 
            // is to the left of all elements greater than pivot
            swap(&arr[cnt], &arr[i]);

            // Make sure to increment cnt so we can keep track of what to swap
            // arr[i] with
            cnt++;
        }
}
//******************



const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99]; // should return 100
const array2 = ['a', 3, 4, 2]; // sho;uld return 4
const array3 = []; // should return 0

const biggestNumberInArray = (arr) => {
  heighestNo=0;
    arr.forEach(item => {
      if(item>heighestNo){
      heighestNo=item;
      //console.log(maxnumber);
    };
}); 
   console.log(heighestNo);
};
biggestNumberInArray(array);





const biggestNumberInArray = (arr) => {
  heighestNo=0;
  for (let i = 0; i < arr.length; i++) {   
    if(arr[i]>heighestNo){
      heighestNo=arr[i];
      //console.log(maxnumber);
    };

   //console.log(arr[i]);
}
  console.log(heighestNo);
};

biggestNumberInArray(array);
biggestNumberInArray(array2);
biggestNumberInArray(array3);

const array = [-1,0,3,100, 99, 2, 99];
function biggestNumberInArray(arr) {
  heighestNo=0;
  for (let i = 0; i < arr.length; i++) {   
    
    if(arr[i]>heighestNo){
      heighestNo=arr[i];
      //console.log(maxnumber);
    }
  };
    console.log(heighestNo);
}
biggestNumberInArray(array);


function biggestNumberInArray2(arr) {

}

function biggestNumberInArray3(arr) {

}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1
  books: 2
  floss: 100
}

function checkBasket(basket, lookingFor) {

}


//ans
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
};

function checkBasket(basket) {
  /*for (item in basket) {
  console.log(item);
};*/
  //if(){};
  for(item in basket) {
    if (item==="books") {
      console.log(item);
    }
    else
    {
      console.log("this item is not books");
    }
  };
  console.log(basket);
}

checkBasket(amazonBasket);