function bubbleSort(inputArr){
    
    var placeHolder;
    
    if (inputArr.length < 2){
        return inputArr;
    }
    
    j = inputArr.length-1;
    
    for (var j=0;j<inputArr.length;j++){
        for (var i=0;i<inputArr.length-1;i++){
            if(inputArr[i]>inputArr[i+1]){
                swap(inputArr[i+1], inputArr[i])
                
            } 
            
        }
    }
    
    
    
    
    return inputArr;
}

function swap(first, second){
    placeHolder = first;
                first = second;
                second = first;
}