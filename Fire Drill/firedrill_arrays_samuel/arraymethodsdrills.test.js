const testScores = require("./testScores, increase_score, number_square");

test("test for scores equal or over 70", () => {
    let array = [40,50,70,73,75,89,77,33,44,67,88,86];
    let result = testScores(array);
    let expected = [70, 73, 75, 89, 77, 88, 86];
    expect(result).toEqual(expected)

});



test("test for scores can be increased by 5", () => {
    let array = [85,92,78,88,95];
    let result = increase_score(array);
    let expected = [90, 97, 83, 93, 100];
    expect(result).toEqual(expected)

});



test("test for number can be squared", () => {
    let array = [2,4,6,8,10];
    let result = number_square(array);
    let expected = [4, 16, 36, 64, 100];
    expect(result).toEqual(expected)

});