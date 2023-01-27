// var nums = document.querySelector(".key1");
// console.log(nums.innerText);
// nums.addEventListener("click",function(){
//     let text = nums.innerHTML 
//     console.log(text)
// })

var nums = document.querySelectorAll(".numbers");
var ans = document.querySelector(".value");
//nums = [9,8,7,6,5,4,3,2,1,0]
    
for(let i = 0; i<nums.length; i++){

    let digit = 0;
    nums[i].addEventListener("click",function(){
        // console.log(nums[i].value)
        digit = nums[i].value;
        ans.innerText = digit
    })
    
    
    
    
}