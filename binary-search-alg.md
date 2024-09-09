## Introduction
Binary search algorithm takes sorted array and an item as input and returns the position of the item in the array.

## Algorithm
1. Start with the middle number in the array as the guess and let it be ```m```.
2. Let the index of lowest number be ```l = 0``` and the highest number be ```h = length of array - 1```.
   And the middle number(guess) be ```(l + h)/2```.
3. If guess is equal to item then return the position of the middle number and stop.
4. Else if guess is lower than the item then move the lowest number ahead to middle number which is ```l = m + 1```.
5. Else if guess is higher than the item then move the highest number behind to middle number which is ```h = m -1```.
6. Else return nothing and stop.
7. Repeat(Use the truth that ```l``` is always less than or equal to ```h``` to repeat) the steps till the target position of item is returned.  
