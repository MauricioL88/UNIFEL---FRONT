// fetch('https://api.chucknorris.io/jokes/random')
//     .then((response) => response.json())
//     .then((data) => console.log(data.value));


// Com tratamento de erro e async e await
const data = async () => {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const res = await response.json();
        console.log(res.value);    
    } catch (error) {
        console.log(error);    
    }                
}

data();