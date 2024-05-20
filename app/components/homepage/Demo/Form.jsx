import Prism from "prismjs";
import "prismjs/themes/prism.css";
import { useEffect, useState } from "react";
import TypeIt from "typeit-react";
import { useDemo } from "./DemoContext";

export default function Form(props) {
  const { currentStep, formRef, delay, setCurrentStep } = useDemo();
  const [isEntering, setIsEntering] = useState(true);

  const steps = [
    `<section><input type="text" value="Experience with Large Scale systems?" readonly /></section>`,
    `<section><label><input type="checkbox" checked /> Experienced with Large Scale systems</label><p>Transformed monolithic servers into 7 cloud-deployable microservices using Java Spring Boot and AWS, reducing server response time by 50%.</p></section>`,
    `<section><input type="text" value="Proven Experience with Backend Systems?" readonly /></section>`,
    `<section><label><input type="checkbox" checked /> Proven Experience with Backend Systems</label><p>Implemented service discovery and load balancing using Java Spring Cloud Netflix Eureka and Ribbon, ensuring high availability and load distribution across microservices.</p></section>`,
    `<section><input type="text" value="Proven Experience with Frontend Systems?" readonly /></section>`,
    `<section><label><input type="checkbox" checked /> Proven Experience with Frontend Systems</label><p>Developed dynamic web applications using React.js and JavaScript, reducing page load times by 30% through optimization techniques.</p></section>`,
    `<section><h2>Technical Skills</h2><p>Backend: Java, Spring Boot, Microservices, AWS, Docker</p><p>Frontend: React.js, JavaScript, HTML, CSS</p></section>`,
    `<section><h2>Project Highlights</h2><p>Led the development of a high-availability microservices architecture, enhancing system performance and scalability.</p></section>`,
    `<section><h2>Awards and Certifications</h2><p>Certified Kubernetes Administrator, AWS Certified Solutions Architect, and recognized for outstanding contributions in software engineering.</p></section>`,
    `<section><h2>Professional Experience</h2><p>Extensive experience in leading teams and driving large-scale projects to successful completion.</p></section>`,
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
