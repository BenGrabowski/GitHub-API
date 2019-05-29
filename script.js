'use strict'

function getRepos(userName){
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
        .catch(error => {
            $('#error-message').text(`Something went wrong: ${error.message}`);
        });
}

function displayResults(responseJson){
    $('#results-list').empty();
    for (let i = 0; i < responseJson.length; i++){
        $('#results-list').append(
            `<li>
                <h3>${responseJson[i].name}</h3>
                <p><a href="${responseJson[i].html_url}" target="_blank">Link to Repository</a></p>
            </li>`
        );
        console.log(responseJson[i].name);
        console.log(responseJson[i].html_url);
    }
    console.log('displayResults ran');
}

function handleSubmit(){
    $('#submit').click(event => {
        event.preventDefault();
        let userName = $('input[name="user-name"]').val();
        console.log(userName);
        getRepos(userName);
    });
}

$(handleSubmit);