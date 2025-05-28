export interface TutorialLayoutProps {
  title: string;
  children: React.ReactNode;
}

export interface SortingAlgorithm {
  id: string;
  name: string;
  description: string;
  timeComplexity: {
    best: string;
    average: string;
    worst: string;
  };
  spaceComplexity: string;
  stable: boolean;
  howItWorks: string[];
  codeExample: string;
  visualizationSteps?: unknown[];
}

export interface SortStep {
  array: number[];
  comparing?: [number, number];
  swapping?: [number, number];  
  sorted?: number[];
  description: string;
}

export interface SortingVisualizerProps {
  algorithmId: string;
  algorithmName: string;
}

export type StepGenerator = (inputArray: number[]) => SortStep[];