



fetch('https://restcountries.com/v3.1/all').then((response) => {
    let jsonOutput = response.json();
    return jsonOutput; 
}).then((jsonData) => {
    console.log(jsonData); 
}).catch((error) => {
        console.log(error);
});



async function getFlag() {
    let finalOutputWithJSON;
    try {
        let output = await fetch('https://restcountries.com/v3.1/all');
         finalOutputWithJSON = output.json();
    } catch(error) {
        console.log("There was an error", error);
    }

    return finalOutputWithJSON;
}

let data = await getFlag();
console.log(data)