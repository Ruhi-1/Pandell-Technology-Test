const SIZE_OF_ARRAY = 10000;

$(document).ready(function () {
    // shuffle array by choosing a random index and swapping with current index
    function shuffleArray(inputArr) {
        for (var i = inputArr.length - 1; i >= 0; i--) {
            var randomIndex = Math.floor(Math.random() * (i + 1));
            var randomItem = inputArr[randomIndex];
            inputArr[randomIndex] = inputArr[i];
            inputArr[i] = randomItem;
        }
        console.log(inputArr);
    }

    // since the size of the array has to be 10,000 and the array
    // has to contain unique numbers from 1 to 10,000, you can just
    // add 1 to 10,000 into an array and shuffle it.
    var arr = [];
    for (var i = 1; i <= SIZE_OF_ARRAY; i++) {
        arr.push(i);
    }
    shuffleArray(arr);
    $.each(arr, function (key, value) {
        $("#inputArr").append("<li>" + value + "</li>");
    });
});


// document.getElementById('button')
//     .addEventListener('click', handleLetterClick);
// replayBtn.addEventListener('click', init);