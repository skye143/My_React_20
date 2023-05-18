
import React from "react";
import profileImage from "../../assets/large/Profile/Profile_Pic.png";

function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div className="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div className="intro-info">
          <div className="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <div>
            <p>
              Greetings! My name is Skye Heredia, and I'm an ambitious individual about to turn 24, residing in the vibrant state of New Jersey. In February of this year, I enrolled in Rutgers University's prestigious Full Stack Development Bootcamp, marking an exhilarating new chapter in my professional journey. As a native of New Jersey, I feel honored to have the opportunity to attend such a respected institution in my hometown. Previously, I excelled as an APTL for Target, which instilled in me values of diligence and perseverance. However, I recognize that transitioning to a career in coding requires a different skill set and unwavering dedication. Before joining the bootcamp, I spent a year self-studying coding, laying the foundation for my decision to take my abilities to new heights.
              <br /><br />
              Despite the significant career change, I am genuinely excited to learn and grow in the coding world. Mastering full stack development opens up endless possibilities, and I am grateful to the bootcamp program for equipping me with knowledge of various coding languages. I understand that becoming a skilled full stack developer requires hard work, practice, and dedication. I am determined to put in maximum effort to achieve my goals in this new career. With a positive attitude and drive to succeed, I am confident that I will be ready to tackle any challenges that come my way as I embark on this new journey after completing the Rutgers University bootcamp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;