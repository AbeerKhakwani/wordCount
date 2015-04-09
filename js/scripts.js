var wordCount = function(input) {
    var inputArray = input.split(" ");
    var arrayChecking = [];


    inputArray.forEach(function(word, index) {


        if (arrayChecking[word]) {

            arrayChecking[word] += 1;
        } else {
            arrayChecking[word] = 1;

        }
    });
    
    return arrayChecking;


}
