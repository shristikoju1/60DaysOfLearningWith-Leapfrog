import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "baf93cef-f8bb-4c18-a926-3f78db18fe27");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us your blooms of thought! <img src={msg_icon} alt="" /></h3>
        <p>We’d love to hear from you! Whether you have questions about our beautiful floral arrangements, need assistance with an order, or want to discuss custom designs for a special event, we're here to help.</p>
        <ul>
          <li><img src={mail_icon} alt="" />hr@phoolnook.np</li>
          <li><img src={phone_icon} alt="" />+977 9812345670</li>
          <li><img src={location_icon} alt="" />Kamalbinayak, Bhaktapur</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label htmlFor="">Phone Number</label>
          <input type="text" name='phone' placeholder='Enter your mobile number' required />
          <label htmlFor="">Email Address</label>
          <input type="text" name='email' placeholder='Enter your email address' required />
          <label htmlFor="">Write Your Message Here</label>
          <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
