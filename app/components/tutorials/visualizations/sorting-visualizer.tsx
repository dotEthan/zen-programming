// visualizations/sorting-visualizer.tsx
"use client";
import { useState } from 'react';
import { generateBubbleSortSteps } from './algorithms/bubble-sort';
import type { SortingVisualizerProps, SortStep, StepGenerator } from '@/app/types/tutorials';
// import { generateMergeSortSteps } from './algorithms/merge-sort';
// ... other imports

const stepGenerators: Record<string, StepGenerator> = {
  bubble: generateBubbleSortSteps,
  // merge: generateMergeSortSteps,
  // ... others
};


export default function SortingVisualizer({ algorithmId, algorithmName }: SortingVisualizerProps) {
  const [inputArray, setInputArray] = useState<number[]>([64, 34, 25, 12, 22, 11, 90]);
  const [steps, setSteps] = useState<SortStep[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  
  const generateSteps = () => {
    const generator = stepGenerators[algorithmId];
    if (generator) {
      const newSteps = generator(inputArray);
      setSteps(newSteps);
      setCurrentStep(0);
    }
  };
  
  const currentStepData = steps[currentStep];
  
  return (
    <div className="space-y-4">
      {/* Input Section */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Enter array (comma-separated):
        </label>
        <input
          type="text"
          value={inputArray.join(', ')}
          onChange={(e) => {
            const values = e.target.value.split(',').map(v => parseInt(v.trim())).filter(v => !isNaN(v));
            setInputArray(values);
          }}
          className="w-full p-2 border rounded dark:bg-gray-700"
        />
        <button
          onClick={generateSteps}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Generate {algorithmName} Steps
        </button>
      </div>
      
      {/* Visualization */}
      {steps.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2">
            {currentStepData?.array.map((value, index) => (
              <div
                key={index}
                className={`w-12 h-12 flex items-center justify-center border-2 font-bold ${
                  currentStepData.comparing?.includes(index) ? 'bg-yellow-200 border-yellow-500' :
                  currentStepData.swapping?.includes(index) ? 'bg-red-200 border-red-500' :
                  currentStepData.sorted?.includes(index) ? 'bg-green-200 border-green-500' :
                  'bg-gray-100 border-gray-300'
                }`}
              >
                {value}
              </div>
            ))}
          </div>
          
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            {currentStepData?.description}
          </div>
          
          {/* Controls */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="flex items-center px-4">
              Step {currentStep + 1} of {steps.length}
            </span>
            <button
              onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
              disabled={currentStep === steps.length - 1}
              className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}