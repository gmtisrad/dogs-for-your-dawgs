function handleSubmit () {
    $('.js-submit-button').on('click', function(event) {
        event.preventDefault();
        let numDogs;
        numDogs = $('.num-dogs').val();
        console.log(numDogs);
        getDogs(numDogs);
    });
}

function getDogs(numDogs) {
    fetch(`https://dog.ceo/api/breeds/image/random/${numDogs}`).then(response => response.json()).then((responseJson) => {
        let dogsHtml = '';
        for (i = 0; i < responseJson.message.length; i++) {
            dogsHtml += `<img src='${responseJson.message[i]}' alt='result-image'>`;
        }
        $('.js-results').html(dogsHtml);
    });
}
$(handleSubmit);