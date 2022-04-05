import React from 'react';
import ContactImage from '../../images/contact.png';

export const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="contact__image">
              <img src={ContactImage} alt="contact" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="contact__title">
              <h3>Contact</h3>
              <p>Any Questions or Remarks? Just write us a message.</p>
            </div>
            <form>
              <div className="input-row">
                <div className="input-group" style={{ marginRight: '20px' }}>
                  <label>First Name</label>
                  <input type="text" />
                </div>
                <div className="input-group">
                  <label>Last Name</label>
                  <input type="text" />
                </div>
              </div>
              <div className="input-group">
                <label>Email</label>
                <input type="email" />
              </div>
              <div className="input-group">
                <label>Message</label>
                <textarea />
              </div>
              <button type="sumit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
