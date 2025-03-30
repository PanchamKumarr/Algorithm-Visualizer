class SearchingAlgorithms {
    static async linearSearch(array, target, updateVisual, speed) {
        for (let i = 0; i < array.length; i++) {
            // Highlight current element being compared
            await updateVisual(array, i, i, 'comparing');
            await new Promise(resolve => setTimeout(resolve, speed));
            
            if (array[i] === target) {
                await updateVisual(array, i, i, 'sorted'); // Found
                return i;
            }
            
            // Reset highlight if not found
            await updateVisual(array, i, i, 'default');
        }
        
        return -1;
    }
    
    static async binarySearch(array, target, updateVisual, speed) {
        // First sort the array for binary search
        array.sort((a, b) => a - b);
        await updateVisual(array, 0, array.length - 1, 'default');
        
        let left = 0;
        let right = array.length - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            // Highlight the middle element
            await updateVisual(array, mid, mid, 'comparing');
            await new Promise(resolve => setTimeout(resolve, speed));
            
            if (array[mid] === target) {
                await updateVisual(array, mid, mid, 'sorted'); // Found
                return mid;
            }
            
            if (array[mid] < target) {
                // Highlight the section we're moving to
                await updateVisual(array, mid + 1, right, 'comparing');
                await new Promise(resolve => setTimeout(resolve, speed));
                left = mid + 1;
            } else {
                // Highlight the section we're moving to
                await updateVisual(array, left, mid - 1, 'comparing');
                await new Promise(resolve => setTimeout(resolve, speed));
                right = mid - 1;
            }
            
            // Reset all highlights
            await updateVisual(array, 0, array.length - 1, 'default');
        }
        
        return -1;
    }
} 