## Introduction
Selection sort algorithm takes unsorted array as input and returns sorted array.

## Algorithm
1. Starts with slection of smallest element in the array and stores its index.
   Steps to find index of smallest element given below,
    1. Let first element of the array as smallest element.
    2. Iterate through the array from second element and if an element is less than the last smallest element store it a the new
       smallest element.
    3. Finally, end of the iteration return the index of smallest element in the array.
2. Once the index of smallest element is found, remove it from the unsorted array and add it to new sorted array.
3. Repeat these steps for number of times equal to size of input unsorted array.
4. Finally return the sorted array.

## Time Complexity
*Best Case*: O(<code>n<sup>2</sup></code>) (Best case would be the case when sorted array is provided as input.)  
*Worst Case*: O(<code>n<sup>2</sup></code>)

If ```n``` is the size of array, 
as <code>n<sup>2</sup></code> operations takes place for sure in each case time complexity is same. 

    
