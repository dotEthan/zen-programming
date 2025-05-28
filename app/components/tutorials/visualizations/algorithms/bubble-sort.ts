import type { SortStep } from "@/app/types/tutorials";


export function generateBubbleSortSteps(inputArray: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const arr = [...inputArray];
  
  steps.push({
    array: [...arr],
    description: "Initial array"
  });
  
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      steps.push({
        array: [...arr],
        comparing: [j, j + 1],
        description: `Comparing ${arr[j]} and ${arr[j + 1]}`
      });
      
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        steps.push({
          array: [...arr],
          swapping: [j, j + 1],
          description: `Swapped ${arr[j + 1]} and ${arr[j]}`
        });
      }
    }
  }
  
  return steps;
}