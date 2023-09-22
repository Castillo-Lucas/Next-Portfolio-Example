import TestimonialSlider from "../../components/TestimonialSlider";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container max-auto h-full flex flex-col justify-center">
        {/* Title */}
        <h2 className="h2 mb-8 xl:mb-0">
          What clients <span className="text-accent">say</span>
        </h2>

        {/* Title */}
        <div>
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
