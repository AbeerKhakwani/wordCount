// var wordCount = function(input) {
//     var inputArray = input.split(" ");
//     var arrayChecking = {};
//
//
//     inputArray.forEach(function(word, index) {
//
//         if (arrayChecking[word]) {
//
//             arrayChecking[word] += 1;
//         } else {
//             arrayChecking[word] = 1;
//
//         }
//
//
//     });
//
//
//     return arrayChecking;
//
//
// }
//
//
var wordCount = function(input) {
    var inputArray = input.split(" ");
    var arrayChecking = {};
    var sorted=[];
    var returnString= "";
    inputArray.forEach(function(word, index) {

        if (arrayChecking[word]) {

            arrayChecking[word] += 1;
        } else {
            arrayChecking[word] = 1;

        }
    });
    for(var word in arrayChecking){
        sorted.push([word, arrayChecking[word]]);
        sorted.sort(function(a,b){return b[1]-a[1]});
    }
    //debugger;
    for(var i = 0; sorted.length > i; i++){
        returnString+=" " +sorted[i][0];

    }
    return returnString;
}

$(function(){


});
