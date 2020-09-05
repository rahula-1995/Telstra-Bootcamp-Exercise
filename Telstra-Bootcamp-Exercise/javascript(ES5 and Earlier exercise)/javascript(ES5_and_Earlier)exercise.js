//javascript(ES5 and earlier) exercise
//1
let x=1;
let i=1;
while(i<=10){
	if(i==1){
		console.log(i)
	}
	x=x*2
	console.log(x);
	i++
}

//3

let x=1;
for(let i=1;i<=10;i++){
	if(i==1){
		console.log(i)
	}
	x=x*2
	console.log(x);
}

//4

let count=1;
for(let i=1;i<=5;i++){
	let res="";
	for(let j=1;j<=i;j++){
		res+=count+" ";
		count++

	}
	console.log(res)

}

//5

let arr=[1,2,3,4,5];
console.log(arr.length);
arr[0]+=1;
console.log(arr[0]);
arr[arr.length-1]=parseInt(arr[arr.length-1])+parseInt(arr[arr.length-2])
console.log(arr[arr.length-1])
arr[arr.length]=6
newarr=[]
for(let i of arr){
	newarr.push(i)
}
console.log(newarr)

//6
let arr=[1,2,3,4,5,6]
res=0
for(let k of arr){
	res+=k
}
console.log(res)


//8

let arr=[1,2,3,4,5,6]
let res=[]
for(let k of arr){
	res.push(k*k)
}
console.log(res)

//7

let arr=[1,2,3,4,5,6]
let res=0
for(let k of arr){
	res+=(k*k)
}
console.log(res)

//9
function square(x){
	return x*x
}
console.log(square(3))

//10

var hrs=(new Date()).getHours()
function loghrs(hrs){
	switch (hrs){
		case 5<=hrs<12:
		console.log("Good morning")
		case 12 <= hrs < 16:
		console.log("good afternoon")
		case 16 <= hrs < 20: 
		console.log("Good evening")
		default:
		console.log("Good night")
	}
}
loghrs(hrs)

//11

var result=function(arr){
	res=0
for(let k of arr){
	res+=k

}
return res}
console.log(result([1,2,3,4,5,6]))

//12

var result=function(arr){
	res=0
for(let k of arr){
	res+=k*k

}
return res}
console.log(result([1,2,3,4,5,6]))

//13

let contains=(arr,key)=> {if (arr.includes(key)){
	return true;
}
else{
	return false;
}}
console.log(contains([1,2,3,4,5,6],3))


//15

var square=(x)=> {return x*x}
var cube=(x)=> {return x*x*x}

var suma=(x,y,key)=> {return key(x)+key(y)}
console.log(suma(2,3,square)) 
console.log(suma(3,4,cube))

//16
var square=(x)=> {return x*x}
var cube=(x)=> {return x*x*x}

var suma=(arr,key)=> {
	let res=0
for (let i of arr){
	res+=key(i)
}
return res}
console.log( suma( [ 1, 2, 3 ], square ) )
console.log( suma( [ 1, 2, 3 ], cube ) )

//17

var exponent=(x)=> {
	var square=(x)=> {return x*x}
	var cube=(x)=> {return x*x*x}
	var anyt=(x)=> {return x}
	switch (x){
		case 2:
		return square
		case 3:
		return cube
		default:
		return anyt
	}

}
var fn
fn=exponent(2)
console.log(fn(2))
console.log(fn(5))
fn=exponent(3)
console.log(fn(2))
console.log(fn(5))
fn=exponent(4)
console.log(fn(2))
console.log(fn(5))

//18

var addto=(x)=> {
	var addin=(y)=>{
		return x+y
	}
	return addin
}
var fn=addto(10)
console.log(fn(5))

//19

const john={
	name: "john",age: parseInt("32")
};
const jane={
	name:"jane",age: parseInt("33")
};
console.log(john.age)
//jane.age=parseInt(jane.age)+1
jane.age+=1
console.log(jane.age)
john.adress={}
john.adress.city="delhi"
console.log(john.adress.city)
john.spousename=jane
jane.spousename=john
jane.emailid=['abc@gmail.com','bcd@gmail.com']
console.log(jane.emailid[1])
celebratebirth=(x)=> {return x+1}
john.celebirth=(age)=> {return this.age++}
console.log(john.celebirth(john.age))

console.log(john)
console.log(jane)

//21

var foo=(x,y)=> console.log(x,y,this);
const newfoo=foo.bind({x:1})
newfoo(12)

//22

var suma=(x,y)=> { console.log(x,y,this)
	return x+y;}
console.log(suma(10,20));
const newsuma=suma.bind({x:1},20);
console.log(newsuma(50))

//23

let arr=[ 5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29 ];
arr.sort(function(a,b){return a-b})
console.log(arr)
arr.sort((a,b)=>b-a)
console.log(arr)
arr.push(37)
console.log(arr)
arr.pop()
arr[4]="seven"
arr[5]="eleven"
console.log(arr)
console.log(arr.includes(41))

//24

var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
var newday=[]
newar=[]
for(let i of days){
	if(i.length==6){
		newday.push(i)
	}
	if('STUVWXYZ'.includes(i[0])){
		newar.push(i)
	}
}
console.log(newar)
console.log(newday)

//24

var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
var newarray=[]
var newarray1=[]
var newarray2=[]
//days.forEach((ele)=>console.log(ele))
days.forEach((ele)=> { console.log(ele)
	newarray.push(ele.length)
	if('STUVWXYZ'.includes(ele[0])){
		newarray1.push(ele)}
		if(ele.length==6){
		newarray2.push(ele)
	}
})
console.log(newarray,newarray1,newarray2)

//25

var phones = [
    { name : 'Samsung Galaxy S10+ Plus', price: 620, type: 'refurbished', manufacturer: 'Samsung' },
    { name : 'Apple iPhone 7 Plus', price: 450, type: 'refurbished', manufacturer: 'Apple' },
    { name : 'One Plus 6', price: 430, type: 'new', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone Xs', price: 910, type: 'new', manufacturer: 'Apple' },
    { name : 'One Plus 7', price: 430, type: 'refurbished', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone 8 Plus', price: 610, type: 'new', manufacturer: 'Apple' },
];
var phonearray=[]
phones.forEach((ele)=>
{
	phonearray.push(ele.name)
})
const newphone=phones.find(ele=> ele.type==='new')
console.log(newphone)
const cheapphone=phones.filter(ele=> ele.price<440)
console.log(cheapphone)


//26

var quote = 'With great power comes great responsibility';
const newquote=quote.replace("responsibility","electricitybill")
const index=quote.indexOf("great")
console.log(index)
console.log(quote.slice(0,10))
console.log(newquote)





