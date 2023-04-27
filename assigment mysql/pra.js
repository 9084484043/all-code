let avgCount=(arr)=>{
    let len=arr.length
    let sum=0
    for(let i=0;i<len;i++){
        sum+=arr[i]
    }
    let avg=sum/len
    let count=0
    for(let j=0;j<arr.length;j++){
        if(arr[j]===avg){
            count++
        }
            
    }
    return count
    }
    
    console.log(avgCount([ 2,2,2,2,2]) );
    