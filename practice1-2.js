// const fileExtension=(str)=>str.slice(str.lastIndexOf( '.'));
// console.log(fileExtension('rohan.cpp'));

// const filenames=['new.html','bro.js','dude.jsx','hell.cpp','hi.py'];
// // const log= filenames.map(names=> names.substring(names.lastIndexOf('.')))
// // console.log(log);
// // const blog=log.filter(str=>str==='.cpp')
// // console.log(blog);
// // const filename=(str)=>str.slice(str.lastIndexOf('.'));
// // console.log(filename('rohit.xte'));

// const fileExtension=filenames.map(extrensions=>extrensions.slice(extrensions.lastIndexOf('.')));
// console.log(fileExtension);


const abc='abcdefghijklmnopqrstuvwxyz';
// const splited=abc.split('').map(()=>'*').join('')
// //const replce=splited.map(()=>'*').join('')
const splited=abc.split('')
console.log(splited);


// correct date format 
const DateFormat=(date=new Date())=>{
    const day=date.getDate();
    const month=date.getMonth()+1;
    const year=date.getFullYear ();
       return `${day}-${month}-${year}`;

}
console.log(DateFormat());

    
   
