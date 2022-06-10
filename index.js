/* 
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
 and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
 To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
 and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.


*/

// Solution

var arr1 =[1,2,3,0,0,0];
var arr2 =[2,5,6];

var Arr1 =[1];
var Arr2 =[];

var Arr_1 =[0];
var Arr_2 =[1];

function merge(nums1,nums2)
{
    document.getElementById('result').innerHTML += 
    `<p> first array : [${nums1}] </p>
    <p> second array : [${nums2}] </p>
    `;
    nums1 = nums1.filter((el) => el != 0);
    nums1.sort();
    nums2 = nums2.filter((el) => el != 0);
    nums2.sort();
    nums1=[...nums1,...nums2].sort();
    m = nums1.length; //m+n
    nums2=[];
    n = nums2.length; //0 empty array
    // console.log(nums1);
    document.getElementById('result').innerHTML += 
    `<p> Ruslt Function array : [${nums1}] </p>
    <hr>
    `;
}

merge(arr1,arr2);
merge(Arr1,Arr2);
merge(Arr_1,Arr_2);

var merge = function(nums1, m, nums2, n) {
    let f = m-1;
    let s = n-1;
    let i = m + n - 1;
    
    while( s >= 0 )
    {
        let Vfirst = nums1[f];
        let Vsecond = nums2[s];
        
        if(Vsecond < Vfirst)
        {
            nums1[i] = Vfirst;
            f--;
            i--;
        }
        else{
            nums1[i] = Vsecond;
            s--;
            i--;
        }
    }
    console.log(nums1);
        
};
merge(arr1,3,arr2,3);
merge(Arr1,1,Arr2,0);
merge(Arr_1,0,Arr_2,1);