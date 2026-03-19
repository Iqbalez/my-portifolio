import { useEffect, useRef } from "react";
import "./styles/Testimonials.css";

const testimonials = [
  {
    quote:
      "Working with Iqbal was a seamless experience from start to finish. His attention to detail and ability to translate complex requirements into clean, functional code made our project a success. Highly recommended for any serious development work.",
    name: "Sarah Mitchell",
    title: "CEO, TechBridge Solutions",
  },
  {
    quote:
      "Iqbal delivered beyond our expectations. He took our vague idea and turned it into a polished product with incredible speed. His communication throughout the project was outstanding and he always kept us in the loop.",
    name: "Daniel Alemayehu",
    title: "Founder, Addis Digital",
  },
  {
    quote:
      "What sets Iqbal apart is his deep understanding of both frontend and backend systems. He built our entire platform architecture and it has scaled beautifully. A true full-stack engineer who cares about quality.",
    name: "James Carter",
    title: "CTO, CloudScale Inc.",
  },
  {
    quote:
      "From the initial consultation to the final deployment, Iqbal demonstrated exceptional professionalism. He proactively identified potential issues and resolved them before they became problems. A pleasure to work with.",
    name: "Amina Yusuf",
    title: "Product Manager, NovaTech",
  },
  {
    quote:
      "Iqbal transformed our outdated web presence into a modern, performant application. The new platform loads instantly and our user engagement has increased dramatically. His expertise in modern frameworks is top-notch.",
    name: "Marcus Chen",
    title: "Director of Engineering, Vertex Labs",
  },
];

const Testimonials = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;
    const scroller = scrollerRef.current;
    const items = Array.from(scroller.children);
    items.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      clone.setAttribute("aria-hidden", "true");
      scroller.appendChild(clone);
    });
  }, []);

  return (
    <div className="testimonials-section" id="testimonials">
      <div className="testimonials-header section-container">
        <p className="testimonials-label">What others say</p>
        <h2>
          Kind words from <span>satisfied clients</span>
        </h2>
      </div>

      <div className="testimonials-scroll-container">
        <div className="testimonials-track" ref={scrollerRef}>
          {testimonials.map((item, idx) => (
            <div className="testimonial-card" key={idx}>
              <blockquote>
                <p>"{item.quote}"</p>
              </blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
