import Link from "~/components/Link";
import Demo from "~/components/homepage/Demo";
import ArrowRight from "~/components/icons/ArrowRight";

export default function Hero(props) {
  return (
    <section className="hero" {...props}>
      <div className="hook">
        <h1 className="hero-title">
          <mark>Vishal Vaitla</mark> <br />
          Front-End & Backend Developer with Expertise in Modern Web Technologies
        </h1>
        <p className="secondary">
          Software Engineer with a Master's in Computer Science from San Jose State University.
        </p>
        <p className="secondary">Specializing in:</p>
        <ul className="specialties">
          <li>Microservices</li>
          <li>Cloud Deployments</li>
          <li>Real-Time Data Processing</li>
        </ul>
        <p className="secondary">Proven track record of:</p>
        <ul className="achievements">
          <li>Optimizing system performance</li>
          <li>Enhancing user experiences</li>
        </ul>
        <p className="secondary">
          Explore my work, discover my journey, and let's create something amazing together!
        </p>
        <div className="grid ctas">
          <Link to="/docs" role="button" className="cta">
            Download Resume
            <ArrowRight />
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/vishal-vaitla"
            role="button"
            className="cta contrast"
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
