function testScores(array) { 
    let score = []; 
    score = array.filter(element => element >= 70);

    return score; 
}
console.log(testScores([40,50,70,73,75,89,77,33,44,67,88,86]))


function increase_score(array) {
    let result = array.map((score)=> score + 5)
        return result
}
console.log(increase_score([85,92,78,88,95]))



function number_square(array) {
    let result = array.map((number)=> number * number)
        return result 
}
    
console.log(number_square([2,4,6,8,10]))



function distribute_book(array){
    let bookcollection = ["gta", "cookbook", "snakegirl", "pizzaboy", "alithegreat"]; 
    
    book_allocation = array.forEach((member) => member == bookcollection) 
        return book_allocation
    }
    // console.log(distribute_book(["Emily", "Jack", "Sophia", "Daniel"]))



    module.exports = {testScores, increase_score, number_square };

