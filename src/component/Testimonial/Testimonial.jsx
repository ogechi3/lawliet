import React from "react";
import "./Testimonial.css"


const Testimonial = () => {
  return (
    <div className="testimonial" id="testimonials">
      <h1>Clients Testimonial</h1>
      <div className="testimonial-card">
        {TESTIMONIALS.map((testi) => (
          <div key={testi.title}>
            <div className="testi-card">
              <p>{testi.title}</p>
              <p>{testi.subtitle}</p>
            </div>
            <div className="testi-title">
                <p>{testi.name}</p>
                <p>{testi.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TESTIMONIALS = [
  {
    title: "Incredible Experience",
    name:"Anya Tailor Joy",
    position:"CEO, SF Industires",
    subtitle:
      "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.",
  },
  {
    title: "Dependable, Responsive, Professional Partner",
    name:"Sri Alam",
    position:"CEO, Membagongkan GROUP",
    subtitle:
      "Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. ",
  },
];

export default Testimonial;
