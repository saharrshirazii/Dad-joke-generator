const myElement = document.getElementById('img');
const myBtn = document.getElementById('jokeBtn');

generateImage();

function generateImage(){
    const config = {
        headers: {
            Accept : 'application/json',
        },
    };

    fetch('https://api.tvmaze.com/search/shows/' , config)
    .then((res) => res.json())
    .then((data) => {   console.log(data);
        myElement.src = data.url;
    })
    .catch((error) => {
        console.error('Error fetching image:', error);
        myElement.alt = 'Oops! Something went wrong. Please try again later.';
    });             

}


myBtn.addEventListener('click', generateImage);
