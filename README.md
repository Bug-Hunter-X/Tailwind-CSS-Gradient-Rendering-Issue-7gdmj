# Tailwind CSS Gradient Rendering Issue

This repository demonstrates a common issue encountered when using Tailwind CSS gradients: the gradient may not render correctly or might be unexpectedly overridden.

## Bug
The bug lies in either the missing or incorrect configuration of the `gradient` plugin within the `tailwind.config.js` file, or style conflicts.

## Solution
Ensure that the gradient plugin is correctly enabled in your `tailwind.config.js` file and look for any CSS rules that might inadvertently override the gradient styles.

## Reproduction
1. Clone this repository.
2. Run `npm install`.
3. Observe the rendering of the gradient in `bug.js`.
4. Compare the result with the corrected code in `bugSolution.js`.

## Contributing
Contributions are welcome!