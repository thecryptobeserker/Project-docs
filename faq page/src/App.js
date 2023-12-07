import React from 'react';
import './styles.css'; // Import the CSS file for styling

const FAQ = () => {
  return (
    <div className="faq-container">
      <h1 className="faq-title">FAQ</h1>
      <div className="faq-section">
        <h2 className="faq-question">What is the motivation behind Goodfellas?</h2>
        <p className="faq-answer">Goodfellas is a family business with roots of pizza making going all the way back to Italy. We decided to bring our talents to the States and truly enjoy making high-quality pizza.</p>
      </div>
      <div className="faq-section">
        <h2 className="faq-question">I’m having a bit of trouble with my reservation. What should I do?</h2>
        <p className="faq-answer">If you are struggling with making a reservation, please call us or send us an email. Emails will get responses within 24h. Our information can be found on the home page of our website.</p>
      </div>
      <div className="faq-section">
        <h2 className="faq-question">Do you guys offer any promotions/deals?</h2>
        <p className="faq-answer">Yes! We always have deals running at any given day. We could have multiple promotions ongoing per day but we guarantee at least one deal a day! To inquire more please call or send us an email.</p>
      </div>
      <div className="faq-section">
        <h2 className="faq-question">What is your pizza secret recipe?</h2>
        <p className="faq-answer">While we cannot disclose our secret recipes, we do guarantee that every menu item is made with care and love.</p>
      </div>
      <div className="faq-section">
        <h2 className="faq-question">Are reservations required?</h2>
        <p className="faq-answer">No, but we recommend them to avoid long wait times.</p>
      </div>
      <div className="faq-section">
        <h2 className="faq-question">Will there be any new stores opening?</h2>
        <p className="faq-answer">Stay tuned!</p>
      </div>
    </div>
  );
};

export default FAQ;
