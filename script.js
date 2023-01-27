

let nums = document.querySelectorAll(".numbers");
let ans = document.querySelector(".value");
let operations = document.querySelectorAll(".operator")
let output = Number(ans.innerText);
//nums = [9,8,7,6,5,4,3,2,1,0]
    
for(let i = 0; i<nums.length; i++){

    let digit = 0;
    nums[i].addEventListener("click",function(){
        // console.log(nums[i].value)
        digit = nums[i].value;
        ans.innerText = digit
        ans.value = digit
        output = Number(ans.innerText);

    })
    
    
}

for(let i = 0; i<operations.length; i++){

    operations[i].addEventListener("click",function(){
        let a = operations[i].value;
        if(typeof(output) == "number"){
            ans.innerText += a; 
            output = ans.innerText;
        }else{
            let len = output.replace("+",a);
            // output[len] = a;
            console.log(len)



        }
    })

}


