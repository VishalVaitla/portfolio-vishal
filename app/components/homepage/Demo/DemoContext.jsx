import { createContext, useContext, useRef, useState } from "react";

const DemoContext = createContext({});
const useDemo = () => useContext(DemoContext);

export default function DemoProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(0);

  // Form ref to manage form elements
  const formRef = useRef(null);

  // Speed and delay
  const speed = 25; // Adjust speed for better readability
  const stepDelays = [
    3000, // Step 1
    3000, // Step 2
    3000, // Step 3
    3000, // Step 4
    3000, // Step 5
    3000, // Step 6
    3000, // Step 7
    3000, // Step 8
    3000, // Step 9
    3000, // Step 10
  ];

  const delay = {
    type: speed,
    delete: 0,
    pause: speed * 10,
    displayComponent: stepDelays[currentStep],
  };

  // Reset TypeIt instance
  const manualLoop = (instance) => {
    instance.reset();
    instance.go();
  };

  return (
    <DemoContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        delay,
        manualLoop,
        formRef, // Provide formRef in the context
      }}
    >
      {children}
    </DemoContext.Provider>
  );
}

export { DemoProvider, useDemo };
