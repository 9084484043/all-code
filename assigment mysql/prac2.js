function average(arr){
    let largest=-Infinity
    let smallest=Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
        largest=arr[i]
    }
    if(arr[i]<smallest){
        smallest=arr[i]
    }
}
         let largeNo=0
         let smallNo=0
    for(let i=0;i<arr.length;i++){
        if(largest==arr[i]){
            largeNo++
        }
        if(smallest==arr[i]){
            smallNo++
        }
}
return   ((largest*largeNo)+(smallest*smallNo))/(largeNo+smallNo)
}
// console.log(average([1,4,3,2]));
















{

    const finddomains = (input) => {
     
        let domainFre = {};
        let ans = [];

        for (let i = 0; i < input.length; i++) {
 
            let findindex = input[i].indexOf('@');
            if (input[i].substring(findindex + 1) in domainFre)
                domainFre[input[i].substring(findindex + 1)]++;
            else domainFre[input[i].substring(findindex + 1)] = 1;
        }
 
        for (let it in domainFre)
            ans.push([it]);
 
        return ans.sort();
    }


console.log(finddomains(['ghi@hotmail.com', 'def@yahoo.com', 'ghi@gmail.com', 'abc@channelier.com', 'abc@hotmail.com', 'def@hotmail.com', 'abc@gmail.com', 'abc@yahoo.com', 'def@channelier.com','jkl@hotmail.com', 'ghi@yahoo.com', 'def@gmail.com']))


}







