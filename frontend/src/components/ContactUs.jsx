import React from "react";

const ContactUs = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
   
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
  
        setTimeout(() => setSubmitSuccess(false), 3000);
      } else {
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-row min-h-screen w-screen relative">
      <div
        style={{ fontFamily: "'Instrument Sans', sans-serif" }}
        className="hidden lg:flex w-1/2 flex-col pl-20 pr-48 justify-center"
      >
        <p className="text-xs leading-relaxed">
          Whether you have an idea, a question, or simply want to explore how V
          can work together, V're just a message away.
        </p>
        <p className="text-xs leading-relaxed">Let's catch up over coffee.</p>
        <p className="text-xs leading-relaxed">
          Great stories always begin with a good conversation
        </p>
      </div>

      <div className="flex w-full lg:w-1/2 flex-col justify-center items-center px-6 md:px-12 lg:pr-24 lg:pl-8 py-12">
        <div className="flex flex-col items-center mb-4">
          <h2
            style={{ fontFamily: "'Halant', sans-serif" }}
            className="text-2xl md:text-3xl"
          >
            Join the Story
          </h2>
          <p
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            className="text-xs text-center"
          >
            Ready to bring your vision to life? Let's talk.
          </p>
        </div>

        <form className="flex flex-col gap-4 w-full max-w-lg mt-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name*"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border bg-white border-gray-300 text-xs outline-none focus:border-purple-500"
          />
          {errors.name && <span className="text-red-500 text-xs -mt-2">{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Your email*"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border bg-white border-gray-300 text-xs outline-none focus:border-purple-500"
          />
          {errors.email && <span className="text-red-500 text-xs -mt-2">{errors.email}</span>}

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border bg-white border-gray-300 text-xs outline-none focus:border-purple-500"
          />

          <textarea
            name="message"
            placeholder="Your message*"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border bg-white border-gray-300 text-xs outline-none resize-none focus:border-purple-500"
          />
          {errors.message && <span className="text-red-500 text-xs -mt-2">{errors.message}</span>}

          <button
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            type="submit"
            disabled={isSubmitting}
            className="self-center px-8 py-2 bg-orange-500 text-white rounded-full text-sm mt-1 disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          
          {submitSuccess && (
            <p className="text-green-600 text-sm text-center -mt-2">Form Submitted</p>
          )}
        </form>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 text-center">
          <span className="text-xs text-orange-500 font-bold">
            vernita@varnanfilms.co.in
          </span>
          <span className="text-xs text-orange-500 font-bold">
            +91 98736 83567
          </span>
        </div>
      </div>

      <img
        src="/images/contact-bottom-mandala.svg"
        className="absolute bottom-0 -left-9 h-60 w-60 -z-1 hidden lg:block"
      />

      <img
        src="/images/contact-upper-mandala.svg"
        className="absolute top-0 right-0 h-60 w-60 -z-1 hidden md:block"
      />
    </div>
  );
};

export default ContactUs;