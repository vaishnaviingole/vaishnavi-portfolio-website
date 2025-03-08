import React from 'react';
import Style from './SkillsEd.module.scss';
import javaLogo from './java-logo.jpg';
import mysqlLogo from './mysql-logo.jpg';
import javascriptLogo from './javascript-logo.jpg';
import reactjsLogo from './reactjs-logo.png';
import uniLogo from './uni.jpg';
import cdacLogo from './cdac.jpg';
import htmlLogo from './html-logo.png';
import cssLogo from './css-logo.png';
import gitLogo from './git-logo.png';
import springLogo from './spring-logo.png';
import wiproLogo from './wipro-logo.png';

export default function SkillsAndEducation() {
  return (
    <div className={Style.container}>
      {/* Left Section (Experience + Education) */}
      <div className={Style.leftSection}>
        {/* Experience Section */}
        <div className={Style.experience}>
          <div className={Style.experienceHeader}>
            <span>💼 Experience</span>
          </div>
          <div className={Style.experienceContent}>
            <div className={Style.experienceItem}>
              <img src={wiproLogo} alt="Wipro Logo" className={Style.companyLogo} />
              <div>
                <p><strong>Project Engineer - Wipro</strong></p>
                <p>July 2023 - Present</p>
                <p>Enhancing and customizing ServiceNow applications, focusing on system integrations and automating workflows. Expertise in JavaScript and REST API development.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className={Style.education}>
          <div className={Style.educationHeader}>
            <span>🎓 Education</span>
          </div>
          <div className={Style.educationContent}>
            <div className={Style.educationItem}>
              <img src={uniLogo} alt="University Logo" />
              <div>
                <p>Bachelor of Engineering (BE) in Computer Science</p>
                <p>Sant Gadge Baba Amravati University, 2018-2022</p>
              </div>
            </div>
            <div className={Style.educationItem}>
              <img src={cdacLogo} alt="Institute Logo" />
              <div>
                <p>Postgraduate Diploma in Advanced Computing (PG-DAC)</p>
                <p>Institute For Software Development and Advanced Computing, 2022-2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Skills) */}
      <div className={Style.rightSection}>
        <div className={Style.skillHeader}>
          <span>💻 Skills</span>
        </div>
        <div className={Style.skillContent}>
          <div className={Style.skillRow}>
            <div className={Style.skillItem}>
              <img src={javaLogo} alt="Java Logo" />
              <p>Java</p>
            </div>
            <div className={Style.skillItem}>
              <img src={mysqlLogo} alt="MySQL Logo" />
              <p>MySQL</p>
            </div>
            <div className={Style.skillItem}>
              <img src={javascriptLogo} alt="JavaScript Logo" />
              <p>JavaScript</p>
            </div>
          </div>
          <div className={Style.skillRow}>
            <div className={Style.skillItem}>
              <img src={reactjsLogo} alt="ReactJS Logo" />
              <p>ReactJS</p>
            </div>
            <div className={Style.skillItem}>
              <img src={htmlLogo} alt="HTML Logo" />
              <p>HTML</p>
            </div>
            <div className={Style.skillItem}>
              <img src={cssLogo} alt="CSS Logo" />
              <p>CSS</p>
            </div>
          </div>
          <div className={Style.skillRow}>
            <div className={Style.skillItem}>
              <img src={springLogo} alt="Spring Logo" />
              <p>Spring Boot</p>
            </div>
            <div className={Style.skillItem}>
              <img src={gitLogo} alt="Git Logo" />
              <p>GIT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
