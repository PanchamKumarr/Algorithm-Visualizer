# Algorithm Visualizer

A web-based visualization tool for common sorting and searching algorithms. This project helps in understanding how different algorithms work through interactive animations.
## LIVE DEMO
[LIVE](https://algorithm-visualizer-seven-sigma.vercel.app/)

## Features

- **Sorting Algorithms**

  - Bubble Sort
  - Quick Sort
  - Merge Sort
  - Insertion Sort

- **Searching Algorithms**

  - Linear Search
  - Binary Search

- **Interactive Controls**
  - Adjustable array size
  - Animation speed control
  - Real-time visualization
  - Algorithm complexity information
  - Performance statistics (comparisons and swaps)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/algorithm-visualizer.git
   ```

2. Open the project:
   - Simply open the `index.html` file in your web browser
   - Alternatively, use a local server:
     ```bash
     python -m http.server 8000
     ```
     Then visit `http://localhost:8000` in your browser

## Usage

1. Select an algorithm from the dropdown menu
2. Adjust the array size and animation speed using the sliders
3. Click "Generate New Array" to create a new random array
4. Click "Start Visualization" to begin the algorithm animation
5. Watch the visualization and observe the algorithm's behavior
6. View the algorithm's time and space complexity information
7. Monitor the number of comparisons and swaps performed

## Technical Details

- Built with vanilla JavaScript, HTML, and CSS
- No external dependencies required
- Responsive design that works on all screen sizes
- Modular code structure for easy maintenance and extensions

## Algorithm Complexities

| Algorithm      | Time Complexity | Space Complexity |
| -------------- | --------------- | ---------------- |
| Bubble Sort    | O(n²)           | O(1)             |
| Quick Sort     | O(n log n)      | O(log n)         |
| Merge Sort     | O(n log n)      | O(n)             |
| Insertion Sort | O(n²)           | O(1)             |
| Linear Search  | O(n)            | O(1)             |
| Binary Search  | O(log n)        | O(1)             |

## Contributing

Feel free to contribute to this project by:

1. Forking the repository
2. Creating a new branch
3. Making your changes
4. Submitting a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
