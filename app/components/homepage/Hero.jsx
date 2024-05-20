import Typewriter from "typewriter-effect";
import Demo from "~/components/homepage/Demo";
import ArrowRight from "~/components/icons/ArrowRight";

export default function Hero(props) {
  return (
    <section className="hero" {...props}>
      <div className="hook">
        <h1 className="hero-title">
          <mark>Vishal Vaitla </mark> <br />
          <br />
          {/* <h3>Empowering Businesses with 3 Years of Full-Stack Excellence</h3> */}
        </h1>
        <div style={{ color: "white", fontSize: "30px", textAlign: "center" }}>
          <Typewriter
            options={{
              strings: [
                "Empowering Businesses with 3 Years of Full-Stack Excellence",
                "Harnessing the Power of Microservices, Cloud, and Web Development to Tackle Large-Scale Challenges",
                "Dive in to Explore!!",
              ],
              autoStart: true,
              loop: true,
              cursor: "!",
              deleteSpeed: 0,
              delay: 50,
              pauseFor: 2000,
            }}
          />
        </div>
        <div className="grid ctas">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1LKH7yryzSXJd7USSL_S4E-qUd4QgLoY6/view?usp=sharing"
            role="button"
            className="cta contrast"
          >
            Resume
            <ArrowRight />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/vishal-vaitla"
            role="button"
            className="cta"
          >
            Connect on LinkedIn
            <ArrowRight />
          </a>
        </div>
      </div>
      <Demo />
    </section>
  );
}
