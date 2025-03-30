class SortingAlgorithms {
    static async bubbleSort(array, updateVisual, speed) {
        const n = array.length;
        let swapped;
        
        for (let i = 0; i < n - 1; i++) {
            swapped = false;
            for (let j = 0; j < n - i - 1; j++) {
                // Highlight comparing elements
                await updateVisual(array, j, j + 1, 'comparing');
                await new Promise(resolve => setTimeout(resolve, speed));
                
                if (array[j] > array[j + 1]) {
                    // Swap elements
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    swapped = true;
                }
                
                // Reset highlight
                await updateVisual(array, j, j + 1, 'default');
            }
            
            if (!swapped) break;
            
            // Mark the last element as sorted
            await updateVisual(array, n - i - 1, n - i - 1, 'sorted');
        }
        
        return array;
    }
    
    static async quickSort(array, updateVisual, speed, start = 0, end = array.length - 1) {
        if (start >= end) {
            await updateVisual(array, start, start, 'sorted');
            return;
        }
        
        const pivotIndex = await this.partition(array, start, end, updateVisual, speed);
        await updateVisual(array, pivotIndex, pivotIndex, 'sorted');
        
        await this.quickSort(array, updateVisual, speed, start, pivotIndex - 1);
        await this.quickSort(array, updateVisual, speed, pivotIndex + 1, end);
    }
    
    static async partition(array, start, end, updateVisual, speed) {
        const pivot = array[end];
        let i = start - 1;
        
        for (let j = start; j < end; j++) {
            await updateVisual(array, j, end, 'comparing');
            await new Promise(resolve => setTimeout(resolve, speed));
            
            if (array[j] < pivot) {
                i++;
                [array[i], array[j]] = [array[j], array[i]];
                await updateVisual(array, i, j, 'default');
            }
        }
        
        [array[i + 1], array[end]] = [array[end], array[i + 1]];
        return i + 1;
    }
    
    static async mergeSort(array, updateVisual, speed, start = 0, end = array.length - 1) {
        if (start >= end) return;
        
        const mid = Math.floor((start + end) / 2);
        await this.mergeSort(array, updateVisual, speed, start, mid);
        await this.mergeSort(array, updateVisual, speed, mid + 1, end);
        await this.merge(array, start, mid, end, updateVisual, speed);
    }
    
    static async merge(array, start, mid, end, updateVisual, speed) {
        const left = array.slice(start, mid + 1);
        const right = array.slice(mid + 1, end + 1);
        let i = 0, j = 0, k = start;
        
        while (i < left.length && j < right.length) {
            await updateVisual(array, k, mid + j + 1, 'comparing');
            await new Promise(resolve => setTimeout(resolve, speed));
            
            if (left[i] <= right[j]) {
                array[k] = left[i];
                i++;
            } else {
                array[k] = right[j];
                j++;
            }
            
            await updateVisual(array, k, k, 'sorted');
            k++;
        }
        
        while (i < left.length) {
            array[k] = left[i];
            await updateVisual(array, k, k, 'sorted');
            i++;
            k++;
        }
        
        while (j < right.length) {
            array[k] = right[j];
            await updateVisual(array, k, k, 'sorted');
            j++;
            k++;
        }
    }
    
    static async insertionSort(array, updateVisual, speed) {
        for (let i = 1; i < array.length; i++) {
            const key = array[i];
            let j = i - 1;
            
            await updateVisual(array, i, i, 'comparing');
            await new Promise(resolve => setTimeout(resolve, speed));
            
            while (j >= 0 && array[j] > key) {
                await updateVisual(array, j, j + 1, 'comparing');
                array[j + 1] = array[j];
                j--;
                
                await new Promise(resolve => setTimeout(resolve, speed));
            }
            
            array[j + 1] = key;
            await updateVisual(array, j + 1, j + 1, 'sorted');
        }
        
        return array;
    }
} 