import React, { useState, useEffect } from "react";
import Review from "./Review";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("http://15.206.6.75/wunder-veda-be/public/api/get-testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data.testimonials))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <>
      {testimonials.map((testimonial, index) => (
        <Review key={index} testimonial={testimonial} />
      ))}
    </>
  );
};

export default Testimonials;
