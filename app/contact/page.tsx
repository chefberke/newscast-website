import React from "react";

function Contact() {
  return (
    <div>
      <div>
        <h2 className="text-xl font-medium">Contact</h2>
      </div>
      <div className="pt-7">
        <p className="font-light text-neutral-200">
          You can contact me via
          <a href="mailto:berkekanber@gmail.com" className="underline">
            {" "}
            email
          </a>{" "}
          or
          <a
            href="https://www.linkedin.com/in/berke-kanber-942392265/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {" "}
            LinkedIn
          </a>
          . If you'd like to chat and get to know each other, you can grab some
          time on my calendar to schedule a meeting. I look forward to meeting
          you and exchanging ideas!
        </p>
      </div>
    </div>
  );
}

export default Contact;
