//  const strings=(str)=>
//     str.length<4?str:str.slice(0,3)+str.slice(-3);

//  console.log(strings('1234567'))
//  console.log(strings('r23oharn'))
//  console.log(strings('rskfhagsn'))
//  console.log(strings('roh'))
 
//  const stringsd=(str)=>
//     str.length%2==0?str.slice(0,str.length/2):str

//  console.log(stringsd('1223456'));
//  console.log(stringsd('122345'));


 
// //  const concatinate1=(str)=>str.slice(1)
// //  const concatinate2=(str)=>str.slice(1)
// // console.log(concatinate1("12345")+concatinate2("6789"));

// const concat=(str1, str2)=>str1.slice(1)+str2.slice(0,-1);
// console.log(concat("rrohan","kumarr"));


// const positive3=(intt1,int2)=>100-intt1>0&&100-int2>0?console.log('sd'):console.log("nullsf");

// positive3(1000,30)
const nearestInt=(x,y)=>{
    var a=100-x;
    var b=100-y;
    if (a>0&&b>0||a<0&&b<0||a<0&&b>0||a>0&&b<0){
        if(a<b){
            console.log(x);
            
        }else{
            console.log(y);
            
        }

    }
    if (a<0&&b<0){
        if(a>b){
            console.log(x);
            
        }else{
            console.log(y);
            
        }

    }
    if (a>0&&b<0){
        // if(a>b){
        //     console.log(a);
            
        // }else{
        //     console.log(b);
            
        // }
        console.log(x);
        

    }
    if (a<0&&b>0){
        // if(a>b){
        //     console.log(a);
            
        // }else{
        //     console.log(b);
            
        // }
console.log(y);

    }
}
nearestInt(60,10)
