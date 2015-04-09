describe('wordOrder', function() {
    it("returns word entered once", function() {
        expect(wordCount("a")).to.eql(" a");
    });
    it("returns word entered twice to count 2 in an array", function() {
        expect(wordCount("a a")).to.eql(" a");
    });
    it("returns word entered twice to count 2 in an array", function() {
        expect(wordCount("a a b b c d")).to.eql(" a b c d");
    });
    it("if one word is reapeat more then another word it comes up first", function() {
        expect(wordCount("b b a b a c")).to.eql(" b a c");
    });
});
