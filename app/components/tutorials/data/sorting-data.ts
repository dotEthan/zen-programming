import type { SortingAlgorithm } from "@/app/types/tutorials";

//Sorting Algorithms:

export const sortingAlgorithms: SortingAlgorithm[] = [
  {
    id: 'bubble',
    name: 'Bubble Sort',
    description: 'Simple comparison-based algorithm...',
    timeComplexity: {
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    stable: true,
    howItWorks: [
      `Create a first loop to track how many loops we've already made, uses n - 1 because the last value has no value after to compare it to.`,
      `Reset 'swapped' value to false to keep track if any swaps have been made, if no swaps are made, the sort function will end early as it must be sorted.` ,
      `Loop through a second time, this loop will do the actual checking and sorting.`,
      `Check if the left value is greater than the right (arr[j] > arr[j + 1]), if it is, we first save the left value in a temporary variable as we're going to overwrite it.`,
      `Then we set the left value to equal the right (arr[j] = arr[j + 1]), next set the right value to what was the left value using the temporary value (arr[j + 1] = temp).`,
      `Then set 'swapped' to true as a swap has happened and we know that means we have to loop through at least once more to check it's completely sorted.`,
      `Lastly we check if the swapped happened, if 'swapped' is still false, no swaps happened and we know the array is sorted correct, so we break the original loop early to save processing time.`
    ],
    codeExample: `function bubbleSort(arr){
      const n = arr.length;

      // First loop
      for (let i = 0; i < n - 1; i++){
        let swapped = false;

        // Second Loop
        for (let j = 0; j < n - i - 1; j++){
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
          }
        }

        if (swapped == false) break;
      }
    }`
  },
  {
    id: 'selection',
    name: 'Selection Sort',
    description: 'Finds the minimum element and places it at the beginning.',
    timeComplexity: {
      best: 'O(n²)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    stable: true,
    howItWorks: [
      `Create a first loop to track how many loops we've already made, uses n - 1 because the last value has no value after to compare it to.`,
    ],
    codeExample: `function bubbleSort(arr){
      const n = arr.length;
      
      // First loop
      for (let i = 0; i < n - 1; i++){
        let swapped = false;

        // Second Loop
        for (let j = 0; j < n - i - 1; j++){
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
          }
        }

        if (swapped == false) break;
      }
    }`
  },
  {
    id: 'insertion',
    name: 'Insertion Sort',
    description: 'Builds the final sorted array one item at a time.',
    timeComplexity: {
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    stable: true,
    howItWorks: [
      `Create a first loop to track how many loops we've already made, uses n - 1 because the last value has no value after to compare it to.`,
    ],
    codeExample: `function bubbleSort(arr){
      const n = arr.length;

      // First loop
      for (let i = 0; i < n - 1; i++){
        let swapped = false;

        // Second Loop
        for (let j = 0; j < n - i - 1; j++){
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
          }
        }

        if (swapped == false) break;
      }
    }`
  },
  {
    id: 'merge',
    name: 'Merge Sort',
    description: 'Divide-and-conquer algorithm that divides the array into halves.',
    timeComplexity: {
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n log n)'
    },
    spaceComplexity: 'O(n)',
    stable: true,
    howItWorks: [
      `Create a first loop to track how many loops we've already made, uses n - 1 because the last value has no value after to compare it to.`,
    ],
    codeExample: `function bubbleSort(arr){
      const n = arr.length;
      
      // First loop
      for (let i = 0; i < n - 1; i++){
        let swapped = false;

        // Second Loop
        for (let j = 0; j < n - i - 1; j++){
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
          }
        }

        if (swapped == false) break;
      }
    }`
  },
  {
    id: 'quick',
    name: 'Quicksort',
    description: 'Efficient divide-and-conquer algorithm using a pivot element.',
    timeComplexity: {
      best: 'O(n log n))',
      average: 'O(n log n))',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(log n) or O(n)',
    stable: true,
    howItWorks: [
      `Create a first loop to track how many loops we've already made, uses n - 1 because the last value has no value after to compare it to.`,
    ],
    codeExample: `function bubbleSort(arr){
      const n = arr.length;

      // First loop
      for (let i = 0; i < n - 1; i++){
        let swapped = false;

        // Second Loop
        for (let j = 0; j < n - i - 1; j++){
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
          }
        }

        if (swapped == false) break;
      }
    }`
  },
  {
    id: 'heap',
    name: 'Heap Sort',
    description: 'Efficient divide-and-conquer algorithm using a pivot element.',
    timeComplexity: {
      best: 'O(n log n))',
      average: 'O(n log n))',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(log n) or O(n)',
    stable: true,
    howItWorks: [
      `Create a first loop to track how many loops we've already made, uses n - 1 because the last value has no value after to compare it to.`,
    ],
    codeExample: `function bubbleSort(arr){
      const n = arr.length;

      // First loop
      for (let i = 0; i < n - 1; i++){
        let swapped = false;

        // Second Loop
        for (let j = 0; j < n - i - 1; j++){
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
          }
        }

        if (swapped == false) break;
      }
    }`
  },
  {
    id: '3waymerge',
    name: '3 Way merge Sort',
    description: 'Efficient divide-and-conquer algorithm using a pivot element.',
    timeComplexity: {
      best: 'O(n log n))',
      average: 'O(n log n))',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(log n) or O(n)',
    stable: true,
    howItWorks: [
      `Create a first loop to track how many loops we've already made, uses n - 1 because the last value has no value after to compare it to.`,
    ],
    codeExample: `function bubbleSort(arr){
      const n = arr.length;

      // First loop
      for (let i = 0; i < n - 1; i++){
        let swapped = false;

        // Second Loop
        for (let j = 0; j < n - i - 1; j++){
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
          }
        }

        if (swapped == false) break;
      }
    }`
  },
  {
    id: 'cycle',
    name: 'Cycle Sort',
    description: 'Efficient divide-and-conquer algorithm using a pivot element.',
    timeComplexity: {
      best: 'O(n log n))',
      average: 'O(n log n))',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(log n) or O(n)',
    stable: true,
    howItWorks: [
      `Create a first loop to track how many loops we've already made, uses n - 1 because the last value has no value after to compare it to.`,
    ],
    codeExample: `function bubbleSort(arr){
      const n = arr.length;

      // First loop
      for (let i = 0; i < n - 1; i++){
        let swapped = false;

        // Second Loop
        for (let j = 0; j < n - i - 1; j++){
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
          }
        }

        if (swapped == false) break;
      }
    }`
  },
  {
    id: 'counting',
    name: 'Counting Sort',
    description: 'Integer sorting algorithm that counts occurrences of each element.',
    timeComplexity: {
      best: 'O(N+M)',
      average: 'O(N+M)',
      worst: 'O(N+M)'
    },
    spaceComplexity: 'O(N+M)',
    stable: true,
    howItWorks: [
      `Create a first loop to track how many loops we've already made, uses n - 1 because the last value has no value after to compare it to.`,
    ],
    codeExample: `function bubbleSort(arr){
      const n = arr.length;
      
      // First loop
      for (let i = 0; i < n - 1; i++){
        let swapped = false;

        // Second Loop
        for (let j = 0; j < n - i - 1; j++){
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
          }
        }

        if (swapped == false) break;
      }
    }`
  },
  {
    id: 'timsort',
    name: 'TimSort',
    description: 'Integer sorting algorithm that counts occurrences of each element.',
    timeComplexity: {
      best: 'O(N+M)',
      average: 'O(N+M)',
      worst: 'O(N+M)'
    },
    spaceComplexity: 'O(N+M)',
    stable: true,
    howItWorks: [
      `Create a first loop to track how many loops we've already made, uses n - 1 because the last value has no value after to compare it to.`,
    ],
    codeExample: `function bubbleSort(arr){
      const n = arr.length;
      
      // First loop
      for (let i = 0; i < n - 1; i++){
        let swapped = false;

        // Second Loop
        for (let j = 0; j < n - i - 1; j++){
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
          }
        }

        if (swapped == false) break;
      }
    }`
  },
  {
    id: 'radix',
    name: 'Radix Sort',
    description: 'Non-comparative algorithm that sorts by individual digits.',
    timeComplexity: {
      best: 'O(n*d)',
      average: 'O(n*d)',
      worst: 'O(n*d)'
    },
    spaceComplexity: 'O(n+k)',
    stable: true,
    howItWorks: [
      `Create a first loop to track how many loops we've already made, uses n - 1 because the last value has no value after to compare it to.`,
    ],
    codeExample: `function bubbleSort(arr){
      const n = arr.length;

      // First loop
      for (let i = 0; i < n - 1; i++){
        let swapped = false;

        // Second Loop
        for (let j = 0; j < n - i - 1; j++){
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
          }
        }

        if (swapped == false) break;
      }
    }`
  },
  {
    id: 'bucket',
    name: 'Bucket Sort',
    description: 'Distributes elements into buckets and sorts them individually.',
    timeComplexity: {
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    stable: true,
    howItWorks: [
      `Create a first loop to track how many loops we've already made, uses n - 1 because the last value has no value after to compare it to.`,
    ],
    codeExample: `function bubbleSort(arr){
      const n = arr.length;
      
      // First loop
      for (let i = 0; i < n - 1; i++){
        let swapped = false;

        // Second Loop
        for (let j = 0; j < n - i - 1; j++){
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
          }
        }

        if (swapped == false) break;
      }
    }`
  },
  {
    id: 'comb',
    name: 'Comb Sort',
    description: 'Distributes elements into buckets and sorts them individually.',
    timeComplexity: {
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    stable: true,
    howItWorks: [
      `Create a first loop to track how many loops we've already made, uses n - 1 because the last value has no value after to compare it to.`,
    ],
    codeExample: `function bubbleSort(arr){
      const n = arr.length;
      
      // First loop
      for (let i = 0; i < n - 1; i++){
        let swapped = false;

        // Second Loop
        for (let j = 0; j < n - i - 1; j++){
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
          }
        }

        if (swapped == false) break;
      }
    }`
  },
  {
    id: 'pigeonhole',
    name: 'Pigeonhole Sort',
    description: 'Distributes elements into buckets and sorts them individually.',
    timeComplexity: {
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    stable: true,
    howItWorks: [
      `Create a first loop to track how many loops we've already made, uses n - 1 because the last value has no value after to compare it to.`,
    ],
    codeExample: `function bubbleSort(arr){
      const n = arr.length;
      
      // First loop
      for (let i = 0; i < n - 1; i++){
        let swapped = false;

        // Second Loop
        for (let j = 0; j < n - i - 1; j++){
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
          }
        }

        if (swapped == false) break;
      }
    }`
  },
  {
    id: 'introsort',
    name: 'Introsort',
    description: 'Distributes elements into buckets and sorts them individually.',
    timeComplexity: {
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    stable: true,
    howItWorks: [
      `Create a first loop to track how many loops we've already made, uses n - 1 because the last value has no value after to compare it to.`,
    ],
    codeExample: `function bubbleSort(arr){
      const n = arr.length;
      
      // First loop
      for (let i = 0; i < n - 1; i++){
        let swapped = false;

        // Second Loop
        for (let j = 0; j < n - i - 1; j++){
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
          }
        }

        if (swapped == false) break;
      }
    }`
  }
];