describe('split array function', function(){
    it('is able to split an array into two halves',function(){
        expect(splitArray([1,2,3,4])).toEqual([[1,2],[3,4]])
        expect(splitArray([1,2,3])).toEqual([[1,2],[3]]);
    })
})


