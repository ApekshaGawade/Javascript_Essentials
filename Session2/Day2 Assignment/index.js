// Assignment Day 2
// 1. Create a Array with five names and print all five in reverse.
let ar=['apple','mango','banana','cherry','pear'];
for(let j=ar.length-1;j>=0; j--) 
{
    console.log(ar[j]);
}

// 2. print only the elements which are divisible by 5 from 1 to 50.
for(let i=1;i<=50;i++)
{
    if(i%5==0)
    {
        console.log(i);
    }
}
