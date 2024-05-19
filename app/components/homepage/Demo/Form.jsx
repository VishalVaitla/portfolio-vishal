import Prism from "prismjs";
import "prismjs/themes/prism.css";
import { useEffect, useState } from "react";
import TypeIt from "typeit-react";
import { useDemo } from "./DemoContext";

// Demo
export default function Form(props) {
  const { currentStep, formRef, delay, setCurrentStep } = useDemo();
  const [isEntering, setIsEntering] = useState(true);

  const steps = [
    `<section><h1>Vishal Vaitla - Turning Tech Challenges into High-Performance Solutions</h1></section>`,
    `<section><label><input type="checkbox" class="checkbox-animation" /> Highlight Backend Skills</label></section>`,
    `<section><h2>Backend Projects</h2><p>Transformed monolithic servers into cloud-deployable microservices using Java Spring Boot and AWS.</p></section>`,
    `<section><label><select><option>Explore Frontend Skills</option></select></label></section>`,
    `<section><h2>Frontend Projects</h2><p>Developed dynamic web applications using React.js and JavaScript.</p></section>`,
    `<section><h2>Technical Skills</h2><p>Backend: Java, Spring Boot, Microservices, AWS, Docker</p><p>Frontend: React.js, JavaScript, HTML, CSS</p></section>`,
    `<section><h2>Project Highlights</h2><p>Key projects with descriptions and achievements.</p></section>`,
    `<section><h2>Awards and Certifications</h2><p>Relevant awards and certifications that underline expertise and commitment to excellence.</p></section>`,
    `<section><h2>Professional Experience</h2><p>Timeline of key roles and contributions in previous positions.</p></section>`,
    `<section><h2>Contact Me</h2><p>Explore my resume in detail and reach out for an interview opportunity.</p></section>`,
  ];

  useEffect(() => {
    Prism.highlightAll();
  }, [currentStep]);

  useEffect(() => {
    setIsEntering(true);
  }, [currentStep]);

  return (
    <div ref={formRef} {...props}>
      <div className={`step ${isEntering ? "enter" : "exit"}`}>
        <TypeIt
          key={currentStep} // Ensure it resets for each step
          options={{
            speed: delay.type,
            deleteSpeed: delay.delete,
            startDelay: 0,
            cursor: false,
            afterComplete: () => {
              if (currentStep === 1) {
                // Simulate checkbox click after the typewriter effect
                const checkbox = formRef.current.querySelector(".checkbox-animation");
                if (checkbox) {
                  checkbox.checked = true;
                }
              }

              setTimeout(() => {
                setIsEntering(false);
                setTimeout(() => {
                  setCurrentStep((prev) => (prev + 1) % steps.length);
                }, 1000); // Duration to wait before switching to next step
              }, delay.displayComponent);
            },
          }}
          getBeforeInit={(instance) => {
            instance.type(steps[currentStep]);
            return instance;
          }}
        />
      </div>
    </div>
  );
}
