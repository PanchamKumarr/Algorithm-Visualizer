document.addEventListener('DOMContentLoaded', () => {
    const visualizer = new Visualizer();
    const algorithmSelect = document.getElementById('algorithm-select');
    const generateArrayBtn = document.getElementById('generate-array');
    const startBtn = document.getElementById('start');
    const speedInput = document.getElementById('speed');
    const sizeInput = document.getElementById('size');
    
    let isRunning = false;
    
    // Initialize with default array
    visualizer.generateArray(50);
    visualizer.updateAlgorithmInfo(algorithmSelect.value);
    
    // Event Listeners
    generateArrayBtn.addEventListener('click', () => {
        if (!isRunning) {
            const size = parseInt(sizeInput.value);
            visualizer.generateArray(size);
        }
    });
    
    algorithmSelect.addEventListener('change', () => {
        visualizer.updateAlgorithmInfo(algorithmSelect.value);
    });
    
    startBtn.addEventListener('click', async () => {
        if (isRunning) return;
        
        isRunning = true;
        startBtn.disabled = true;
        generateArrayBtn.disabled = true;
        
        const algorithm = algorithmSelect.value;
        const speed = 101 - parseInt(speedInput.value); // Invert speed so higher value = faster
        const array = visualizer.getArray();
        
        try {
            switch (algorithm) {
                case 'bubble':
                    await SortingAlgorithms.bubbleSort(array, visualizer.updateVisual.bind(visualizer), speed);
                    break;
                case 'quick':
                    await SortingAlgorithms.quickSort(array, visualizer.updateVisual.bind(visualizer), speed);
                    break;
                case 'merge':
                    await SortingAlgorithms.mergeSort(array, visualizer.updateVisual.bind(visualizer), speed);
                    break;
                case 'insertion':
                    await SortingAlgorithms.insertionSort(array, visualizer.updateVisual.bind(visualizer), speed);
                    break;
                case 'linear':
                    const linearTarget = Math.floor(Math.random() * 100) + 1;
                    alert(`Searching for value: ${linearTarget}`);
                    const linearResult = await SearchingAlgorithms.linearSearch(array, linearTarget, visualizer.updateVisual.bind(visualizer), speed);
                    setTimeout(() => alert(`Value ${linearTarget} ${linearResult !== -1 ? 'found at index ' + linearResult : 'not found'}`), speed);
                    break;
                case 'binary':
                    const binaryTarget = Math.floor(Math.random() * 100) + 1;
                    alert(`Searching for value: ${binaryTarget}`);
                    const binaryResult = await SearchingAlgorithms.binarySearch(array, binaryTarget, visualizer.updateVisual.bind(visualizer), speed);
                    setTimeout(() => alert(`Value ${binaryTarget} ${binaryResult !== -1 ? 'found at index ' + binaryResult : 'not found'}`), speed);
                    break;
            }
        } catch (error) {
            console.error('Algorithm error:', error);
        }
        
        isRunning = false;
        startBtn.disabled = false;
        generateArrayBtn.disabled = false;
    });
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            visualizer.updateVisual(visualizer.getArray(), -1, -1, 'default');
        }, 100);
    });
}); 