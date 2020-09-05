//1
const iPhone11 = {
    name: 'iPhone 11',
    manufacturer: 'Apple',
    price: 699,
    specs: {
        color: 'White',
        memory: {
            value: 128,
            unit: 'MB'
        },
        cameras: {
            front: '12 MP Wide',
            rear: '12 MP Ultra Wide'
        },
        availableColors: [ 'Black', 'Green', 'Yellow', 'Purple', 'Red', 'White' ]
    },
    calculateDiscoutedPrice: function( percentage ) {
        return this.price * ( 100 - percentage ) / 100;
    }
}

var {
    name:name,
    manufacturer:brand,
    specs:{
        memory:{
            value:ram
        },
    
    cameras:{
        rear:rearCamera
    },
    availableColors:[,secondColor,,,,]}

}=iPhone11
console.log( name, brand, ram, rearCamera, secondColor );

//2
const printPhoneDetails = function()  {
    const { calculateDiscoutedPrice } = this;
    console.log(`Apple iPhone is available at 10% discounted rate of $${calculateDiscoutedPrice.call(this, 10)}`);
};
printPhoneDetails.call(iPhone11);


//3

var sum=(...args)=> 
{
    return args.reduce((current,previous)=>{return current+previous})
}
var result=sum(1,2,3,4);
console.log(result)

//4
var max=(...args)=> 
{
    return args.reduce((current,previous)=>{return Math.max(current,previous)})
}
var result=max(25, 65, 35, 45);
console.log(result)

//5
const numbers = [ 25, 65, 35, 75, 45 ];
console.log(Math.max(...numbers))

//6
const shallowCopy = { ...iPhone11 };
const deepCopy = {
    ...iPhone11,
    specs: {
        ...iPhone11.specs,
        memory: {
            ...iPhone11.specs.memory,
        },
        cameras: {
            ...iPhone11.specs.cameras,
        },
        availableColors: [...iPhone11.specs.availableColors],
    }
}
console.log(shallowCopy, deepCopy);
iPhone11.specs.color = 'Red';
iPhone11.specs.availableColors.push('JetBlack');
console.log(shallowCopy, deepCopy);




