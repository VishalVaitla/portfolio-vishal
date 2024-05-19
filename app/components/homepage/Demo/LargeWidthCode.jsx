import parse from "html-react-parser";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import { useEffect } from "react";
import TypeIt from "typeit-react";
import { useDemo } from "./DemoContext";

// Initial Demo Code
const initialDemoCode = [
  [
    `&lt;section&gt;`,
    `  &lt;h1&gt;Vishal Vaitla - Turning Tech Challenges into High-Performance Solutions&lt;/h1&gt;`,
    `&lt;/section&gt;`,
  ],
  [
    `&lt;section&gt;`,
    `  &lt;label&gt;`,
    `    &lt;input type="checkbox" /&gt; Highlight Backend Skills`,
    `  &lt;/label&gt;`,
    `&lt;/section&gt;`,
  ],
  [
    `&lt;section&gt;`,
    `  &lt;h2&gt;Backend Projects&lt;/h2&gt;`,
    `  &lt;p&gt;Transformed monolithic servers into cloud-deployable microservices using Java Spring Boot and AWS.&lt;/p&gt;`,
    `&lt;/section&gt;`,
  ],
  [
    `&lt;section&gt;`,
    `  &lt;label&gt;`,
    `    &lt;select&gt;`,
    `      &lt;option&gt;Explore Frontend Skills&lt;/option&gt;`,
    `    &lt;/select&gt;`,
    `  &lt;/label&gt;`,
    `&lt;/section&gt;`,
  ],
  [
    `&lt;section&gt;`,
    `  &lt;h2&gt;Frontend Projects&lt;/h2&gt;`,
    `  &lt;p&gt;Developed dynamic web applications using React.js and JavaScript.&lt;/p&gt;`,
    `&lt;/section&gt;`,
  ],
  [
    `&lt;section&gt;`,
    `  &lt;h2&gt;Technical Skills&lt;/h2&gt;`,
    `  &lt;p&gt;Backend: Java, Spring Boot, Microservices, AWS, Docker&lt;/p&gt;`,
    `  &lt;p&gt;Frontend: React.js, JavaScript, HTML, CSS&lt;/p&gt;`,
    `&lt;/section&gt;`,
  ],
  [
    `&lt;section&gt;`,
    `  &lt;h2&gt;Project Highlights&lt;/h2&gt;`,
    `  &lt;p&gt;Key projects with descriptions and achievements.&lt;/p&gt;`,
    `&lt;/section&gt;`,
  ],
  [
    `&lt;section&gt;`,
    `  &lt;h2&gt;Awards and Certifications&lt;/h2&gt;`,
    `  &lt;p&gt;Relevant awards and certifications that underline expertise and commitment to excellence.&lt;/p&gt;`,
    `&lt;/section&gt;`,
  ],
  [
    `&lt;section&gt;`,
    `  &lt;h2&gt;Professional Experience&lt;/h2&gt;`,
    `  &lt;p&gt;Timeline of key roles and contributions in previous positions.&lt;/p&gt;`,
    `&lt;/section&gt;`,
  ],
  [
    `&lt;section&gt;`,
    `  &lt;h2&gt;Contact Me&lt;/h2&gt;`,
    `  &lt;p&gt;Explore my resume in detail and reach out for an interview opportunity.&lt;/p&gt;`,
    `&lt;/section&gt;`,
  ],
];

// Demo
export default function LargeWidthCode(props) {
  const { currentStep, delay, setCurrentStep } = useDemo();

  useEffect(() => {
    Prism.highlightAll();
  }, [currentStep]);

  return (
    <code className="language-html" {...props}>
      <noscript>{parse(initialDemoCode[currentStep].join("<br />"))}</noscript>
      <TypeIt
        options={{
          speed: delay.type,
          deleteSpeed: delay.delete,
          cursor: false,
          startDelay: 0,
          afterComplete: () => {
            setCurrentStep((prev) => (prev + 1) % initialDemoCode.length);
          },
        }}
        getBeforeInit={(instance) => {
          initialDemoCode[currentStep].forEach((line) => {
            instance.type(line).type("<br />");
          });

          return instance;
        }}
      />
    </code>
  );
}
