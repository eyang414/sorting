describe('Bubble Sort', function(){
    
    it ('handles an empty array', function(){
        
        expect( bubbleSort([])).toEqual([]);
        
    })
    
    it('if you only have one element in array', function(){
        expect(bubbleSort([2])).toEqual([2]);
    })
    
    it ('it has to return the array in order', function(){
        expect(bubbleSort([3,2,1])).toEqual([1,2,3]);
    })
    
    it('lets count how many times you swapped', function(){
        spyOn(window, 'swap').and.callThrough();
        swap(2,3);
        expect(swap.calls.count()).toEqual(1);
    })
})