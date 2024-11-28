async function urlFetcher() {
    console.log('assalamalikum boro vai')
    const url='https://jsonplaceholder.typicode.com/posts';
    const res=await fetch(url);
    const data = await res.json();
    console.log(data);
}


urlFetcher();


function hi(){
    console.log('hi');
}
function hi2(){
    console.log('hi2');
}
hi();
hi2();

