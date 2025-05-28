
"use client"
import { useState } from 'react';

import { sortingAlgorithms } from './data/sorting-data';
import SortingVisualizer from './visualizations/sorting-visualizer';

export default function SortingClient() {
  
    const [selectedSort, setSelectedSort] = useState(sortingAlgorithms[0].id);
    
    const currentSort = sortingAlgorithms.find(sort => sort.id === selectedSort);
  
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <h2 className="text-xl font-semibold mb-4">Choose a Sorting Algorithm</h2>
        <nav className="space-y-2">
          {sortingAlgorithms.map((sort) => (
            <button
              key={sort.id}
              onClick={() => setSelectedSort(sort.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                selectedSort === sort.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
              }`}
            >
              <div className="font-medium">{sort.name}</div>
              <div className={`text-sm mt-1 ${
                selectedSort === sort.id ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'
              }`}>
                {sort.description}
              </div>
            </button>
          ))}
        </nav>
      </div>

      <div className="lg:col-span-2">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 min-h-96">
          <h2 className="text-2xl font-bold mb-4">{currentSort?.name}</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {currentSort?.description}
          </p>
          
          {/* Placeholder for sorting visualization */}
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
            <div className="text-gray-500 dark:text-gray-400">
              <div className="text-lg font-medium mb-2">Visualization Area</div>
                <SortingVisualizer 
                  algorithmId={currentSort?.id || 'bubble'} 
                  algorithmName={currentSort?.name || 'Bubble Sort'} 
                />
            </div>
          </div>
          
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Time Complexity</h3>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>Best: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">{currentSort?.timeComplexity.best}</code></div>
                <div>Average: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">{currentSort?.timeComplexity.average}</code></div>
                <div>Worst: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">{currentSort?.timeComplexity.worst}</code></div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">How it Works</h3>
              <ol className="list-decimal list-inside space-y-1">
                {currentSort?.howItWorks.map((step, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-400">{step}</li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Code Example</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{currentSort?.codeExample}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}