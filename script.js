// Task 1: Comparing two JSONs without order

let obj1= {name:"Person1",age:5};
let obj2={age:5,name:"Person1"};
let a=JSON.stringify(obj1);
let b=JSON.stringify(obj2);
var result=true;
if(a.length==b.length)

{
    for(var key in a)
    {
        if(a[key]==b[key])
        {
            result=true;
        }
        else
        {
            result=false;
        }
    }
}
else
{
    result=false;
}
console.log(result);


//Task 2: Displaying all countries flags from the rest countries API

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function()
{
    var data=request.response;
    var result=JSON.parse(data);
    for(var i=0;i<result.length;i++)
    {
        console.log(result[i].flag);
    }
}

//Task 3: Displaying all countries names, regions, sub-region and population

var request1=new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload=function()
{
    var data1=request1.response;
    var result1=JSON.parse(data1);
    for(i=0;i<result1.length;i++)
    {
        console.log("country name:",result1[i].name.common,"region:",result1[i].region,"sub region:",result1[i].subregion,"population:",result1[i].population);
    }
}
    
