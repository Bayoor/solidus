// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./contact.css";

const ContactUs = () => {
  // const [successMsg, setSuccessMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const { reset } = useForm();

  function onSubmit(event) {
    // event.preventDefault();
    console.log(event);
    // setSuccessMsg("User registration success");
    reset();
  }

  // const { reset} = useForm();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(state);
  // };

  // console.log({ ...register("email")});

  return (
    <div className="contact">
      <div className="contact__heading">
        <h2>
          Interested in Solidus?
          <br /> get in touch with our team.
        </h2>
        <p>
          Send us an email at team@solidusgaming.com.<br/> You can also contact us
          by filling out this form and we’ll get back to you as soon as
          possible.
        </p>
      </div>

      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        {/* {successMsg && <p className="success-msg">{successMsg}</p>} */}
        <div className="form__input">
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              id="name"
              placeholder="Enter your name"
            />
            {errors.name?.type === "required" && (
              <p className="errorMsg">Name is required*.</p>
            )}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              {...register("email", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              })}
              id="email"
              placeholder="Enter your Email Address"
            />
            {errors.email?.type === "required" && (
              <p className="errorMsg">Email is required*.</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="errorMsg">Email is not valid*.</p>
            )}
          </div>

          <div>
            <label htmlFor="number">Phone Number</label>
            <br />
            <input
              type="text"
              name="number"
              {...register("number", { required: true })}
              id="number"
              placeholder="Enter your phone number"
            />
            {errors.number?.type === "required" && (
              <p className="errorMsg">Phone number is required*.</p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <br />
          <br />
          <textarea
            className="textarea"
            name="message"
            {...register("message", { required: true })}
            id="message"
            // cols="30"
            // rows="10"
            placeholder="Type your message here"
          ></textarea>
          {errors.email?.type === "required" && (
            <p className="errorMsg">Enter a message* .</p>
          )}
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
