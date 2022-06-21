fetch('url').then((response)=>{
    return response.json();
}).then((informacion)=>{
    console.log(informacion);
});