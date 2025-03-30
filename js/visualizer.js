class Visualizer {
    constructor() {
        this.array = [];
        this.arrayContainer = document.getElementById('array-container');
        this.comparisons = 0;
        this.swaps = 0;
    }
    
    generateArray(size) {
        this.array = Array.from({length: size}, () => Math.floor(Math.random() * 100) + 1);
        this.resetStats();
        this.updateVisual(this.array, -1, -1, 'default');
    }
    
    resetStats() {
        this.comparisons = 0;
        this.swaps = 0;
        document.getElementById('comparisons').textContent = `Comparisons: ${this.comparisons}`;
        document.getElementById('swaps').textContent = `Swaps: ${this.swaps}`;
    }
    
    async updateVisual(array, index1, index2, state) {
        // Update stats
        if (state === 'comparing') {
            this.comparisons++;
            document.getElementById('comparisons').textContent = `Comparisons: ${this.comparisons}`;
        }
        if (array[index1] !== this.array[index1] || array[index2] !== this.array[index2]) {
            this.swaps++;
            document.getElementById('swaps').textContent = `Swaps: ${this.swaps}`;
        }
        
        // Update array
        this.array = [...array];
        
        // Clear container
        this.arrayContainer.innerHTML = '';
        
        // Calculate bar width based on array size
        const barWidth = Math.max(2, Math.floor((this.arrayContainer.clientWidth - this.array.length * 2) / this.array.length));
        
        // Create bars
        this.array.forEach((value, index) => {
            const bar = document.createElement('div');
            bar.className = 'array-bar';
            bar.style.height = `${value * 3}px`;
            bar.style.width = `${barWidth}px`;
            
            // Apply state styling
            if (index === index1 || index === index2) {
                bar.classList.add(state);
            }
            
            this.arrayContainer.appendChild(bar);
        });
    }
    
    getArray() {
        return [...this.array];
    }
    
    updateAlgorithmInfo(algorithm) {
        const complexityInfo = {
            bubble: {
                time: 'O(n²)',
                space: 'O(1)'
            },
            quick: {
                time: 'O(n log n)',
                space: 'O(log n)'
            },
            merge: {
                time: 'O(n log n)',
                space: 'O(n)'
            },
            insertion: {
                time: 'O(n²)',
                space: 'O(1)'
            },
            linear: {
                time: 'O(n)',
                space: 'O(1)'
            },
            binary: {
                time: 'O(log n)',
                space: 'O(1)'
            }
        };
        
        const info = complexityInfo[algorithm];
        if (info) {
            document.getElementById('time-complexity').textContent = `Time Complexity: ${info.time}`;
            document.getElementById('space-complexity').textContent = `Space Complexity: ${info.space}`;
        }
    }
} 