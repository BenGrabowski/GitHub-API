'use strict'

function getRepos(){
    const url = `https://api.github.com/users/${userName}/repos`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error (response.statusText);
            }
        })
        .then(responseJson => displayResults(responseJson))
        .catch(error => $('#error-message').text(`Something went wrong: ${error.message}`);
        );
}

function handleSubmit(){
    $('#submit').submit(event => {
        event.preventDefault();
        let userName = $('input[name=user-name]').val();
        getRepos(userName);
    })
}

$(handleSubmit);