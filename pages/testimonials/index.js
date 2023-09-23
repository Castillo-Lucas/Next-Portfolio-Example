import TestimonialSlider from "../../components/TestimonialSlider";

const Testimonials = () => {
  return (
    <div className="h-full  py-32 text-center container mx-auto">
      <div className="h-full flex flex-col justify-center">
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
