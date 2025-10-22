const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };

    fetch('https://icanhazdadjoke.com/', config)
        .then((res) => res.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke;
        })
        .catch((error) => {
            console.error('Error fetching joke:', error);
            jokeEl.innerHTML = 'Oops! Something went wrong. Please try again later.';
        });
}

jokeBtn.addEventListener('click', generateJoke);


// const jokeEl = document.getElementById('joke');
// const jokeBtn = document.getElementById('jokeBtn');

// generateJoke();

// async function generateJoke() {
//     try{
//         const config = {
//             headers: {
//                 Accept: 'application/json',
//             },
//         };
//         const res = await fetch ('https://icanhazdadjoke.com/ss', config)
//         if (!res.ok){
//             throw new Error (`Response not ok ${res.status}`);
//         }
//         const data = await res.json();
//         jokeEl.innerHTML = data.joke;   
//     }
//     catch(error){
//         console.error('Error fetching joke:', error);
//         jokeEl.innerHTML = error.message; 
//         jokeEl.style.color = 'red';      
// } 
// }

// jokeBtn.addEventListener('click', generateJoke);