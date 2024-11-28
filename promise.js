const p=new Promise((resolve,rejected)=>{
    // rejected('RRejected');
    resolve('yo bro')
})

console.log(p);

console.log(p.then((data)=>{
    console.log(data)
}))

console.log('heheh')