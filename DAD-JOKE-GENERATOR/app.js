// const jokeEl = document.getElementById('joke');
// const jokeBtn = document.getElementById('jokeBtn');

// generateJoke();

// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     };

//     fetch('https://icanhazdadjoke.com/', config)
//         .then((res) => res.json())
//         .then((data) => {
//             jokeEl.innerHTML = data.joke;
//         })
//         .catch((error) => {
//             console.error('Error fetching joke:', error);
//             jokeEl.innerHTML = 'Oops! Something went wrong. Please try again later.';
//         });
// }

// jokeBtn.addEventListener('click', generateJoke);


const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };

    try {
        const res = await fetch('https://icanhazdadjoke.com/', config);
        const data = await res.json();
        if (!res.ok){
            throw new error ('Joke not found');
        }


        jokeEl.innerHTML = data.joke;
    } catch (error) {
        console.error('Error fetching joke:', error);
        jokeEl.innerHTML = 'Something is wrong!';
        jokeEl.style.color = 'red';
    
    }
}

jokeBtn.addEventListener('click', generateJoke);
