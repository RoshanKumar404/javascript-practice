const filenames=['new.html','bro.js','dude.jsx','hell.cpp','hi.py'];
const log= filenames.map(names=> names.substring(names.lastIndexOf('.')))
console.log(log);
const blog=log.filter(str=>str==='.cpp')
console.log(blog);