describe('wordOrder', function() {
    // it("returns word entered once", function() {
    //     expect(wordCount("a")).to.eql({a:1});
    // });
    // it("returns word entered twice to count 2 in an array", function() {
    //     expect(wordCount("a a")).to.eql({a:2});
    // });
    // it("returns word entered twice to count 2 in an array", function() {
    //     expect(wordCount("a a b b c d")).to.eql({a:2, b:2 ,c:1 , d:1});
    // });
    it("if one word is reapeat more then another word it comes up first", function() {
        expect(wordCount("b a a b a c")).to.eql({c:1, a:3, b:2});
    });
});
