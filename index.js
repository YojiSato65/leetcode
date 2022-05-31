// 1. Two Sum

// const twoSum = function (nums, target)
// {
//     for (i = 0; i < nums.length; i++)
//     {
//         for (j = i + 1; j < nums.length; j++)
//         {
//             if (nums[i] + nums[j] === target)
//             {
//                 return [i, j]
//             }
//         }
//     }
// }
// console.log(twoSum([2, 3, 4], 7))


// 2. Palindrome Number

// const isPalindrome = function (x)
// {
//     let rev_num = 0
//     let num = x
//     console.log('rev_num', rev_num, 'x', x)
//     while (num > 0)
//     {
//         rev_num = rev_num * 10 + num % 10
//         num = Math.floor(num / 10)
//     }

//     if (x === rev_num)
//     {
//         return true
//     } return false
// }
// console.log(isPalindrome(13221))