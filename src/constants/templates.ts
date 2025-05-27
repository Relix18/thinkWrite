export const templates = [
  { id: "blank", label: "Blank Document", imageUrl: "/blank-document.svg" },
  {
    id: "software-proposal",
    label: "Software development proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>Software Development Proposal</h1>

  <p><strong>Prepared for:</strong> [Client Name or Company]</p>
  <p><strong>Prepared by:</strong> [Your Name or Company]</p>
  <p><strong>Date:</strong> [Proposal Date]</p>
  <p><strong>Project Title:</strong> [Project Name]</p>

  <h2>1. Executive Summary</h2>
  <p>This proposal outlines the development of a custom [software/app/platform] designed to solve [specific problem or opportunity]. The solution will aim to provide [key benefits or outcomes].</p>

  <h2>2. Project Scope</h2>
  <p>The project includes the following key components:</p>
  <ul>
    <li>Requirement gathering and analysis</li>
    <li>UI/UX design</li>
    <li>Front-end development</li>
    <li>Back-end development</li>
    <li>Testing and QA</li>
    <li>Deployment and post-launch support</li>
  </ul>

  <h2>3. Timeline</h2>
  <p>Estimated timeline: [e.g., 8 weeks]</p>
  <ol>
    <li>Week 1–2: Planning & Design</li>
    <li>Week 3–5: Development</li>
    <li>Week 6: Testing</li>
    <li>Week 7–8: Deployment and Support</li>
  </ol>

  <h2>4. Cost Estimate</h2>
  <p>Total Estimated Cost: [e.g., $5,000]</p>
  <p>Includes design, development, testing, and deployment.</p>

  <h2>5. Technologies Used</h2>
  <p>We propose using the following technologies:</p>
  <ul>
    <li>Frontend: HTML, CSS, JavaScript, [React/Next.js]</li>
    <li>Backend: Node.js, Express.js, [Other]</li>
    <li>Database: MongoDB / PostgreSQL</li>
    <li>Hosting: [e.g., Vercel, AWS, DigitalOcean]</li>
  </ul>

  <h2>6. Maintenance & Support</h2>
  <p>We offer [30/60/90] days of free support post-launch, including bug fixes and minor updates.</p>

  <h2>7. Terms & Conditions</h2>
  <p>50% payment upfront, 50% upon completion. All source code will be handed over after full payment.</p>

  <h2>8. Contact Information</h2>
  <p><strong>Name:</strong> [Your Name]</p>
  <p><strong>Email:</strong> [Your Email]</p>
  <p><strong>Phone:</strong> [Your Phone Number]</p>

  <p>Thank you for considering this proposal. We look forward to working with you!</p>`,
  },
  {
    id: "project-proposal",
    label: "Project proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: ` <h1>Project Proposal</h1>

  <p><strong>Project Title:</strong> [Your Project Title]</p>
  <p><strong>Prepared by:</strong> [Your Name / Team Name]</p>
  <p><strong>Prepared for:</strong> [Client / Organization / Instructor]</p>
  <p><strong>Date:</strong> [Proposal Date]</p>

  <h2>1. Introduction</h2>
  <p>This proposal outlines the objectives, methodology, and expected outcomes of the project titled "[Project Title]". The project aims to address [brief problem/opportunity statement].</p>

  <h2>2. Project Objectives</h2>
  <ul>
    <li>[Objective 1]</li>
    <li>[Objective 2]</li>
    <li>[Objective 3]</li>
  </ul>

  <h2>3. Problem Statement</h2>
  <p>[Describe the problem you intend to solve or the opportunity you want to explore. Explain its importance or relevance.]</p>

  <h2>4. Proposed Solution / Methodology</h2>
  <p>[Explain the approach or solution you plan to implement. Include tools, techniques, or processes you’ll use.]</p>

  <h2>5. Timeline</h2>
  <p>Estimated duration: [e.g., 6 weeks]</p>
  <ol>
    <li>Week 1: Research and Planning</li>
    <li>Week 2–3: Development / Execution</li>
    <li>Week 4: Testing / Review</li>
    <li>Week 5–6: Finalization and Submission</li>
  </ol>

  <h2>6. Expected Outcomes</h2>
  <p>[List the key results or deliverables you expect to achieve by the end of the project.]</p>

  <h2>7. Resources Required</h2>
  <ul>
    <li>Tools/Software: [e.g., Figma, VS Code, Node.js]</li>
    <li>Team Members: [e.g., 2 developers, 1 designer]</li>
    <li>Other Requirements: [e.g., access to APIs, hardware, datasets]</li>
  </ul>

  <h2>8. Budget (If Applicable)</h2>
  <p>[Outline any estimated costs if needed – tools, services, subscriptions, etc.]</p>

  <h2>9. Conclusion</h2>
  <p>This project will provide a solution to [restate problem] using [your proposed method]. We are confident in our ability to deliver value through this project.</p>

  <h2>10. Contact Information</h2>
  <p><strong>Name:</strong> [Your Name]</p>
  <p><strong>Email:</strong> [your@email.com]</p>
  <p><strong>Phone:</strong> [your number]</p>

  <p>We appreciate your consideration of this proposal.</p>`,
  },
  {
    id: "business-letter",
    label: "Business letter",
    imageUrl: "/business-letter.svg",
    initialContent: ` <!-- Sender Information -->
  <p>Your Name</p>
  <p>Your Position</p>
  <p>Your Company Name</p>
  <p>Your Address Line 1</p>
  <p>Your Address Line 2</p>
  <p>Your Email</p>
  <p>Your Phone Number</p>

  <!-- Date -->
  <p>Date: May 27, 2025</p>

  <!-- Recipient Information -->
  <p>Recipient's Name</p>
  <p>Recipient's Position</p>
  <p>Recipient's Company Name</p>
  <p>Recipient's Address Line 1</p>
  <p>Recipient's Address Line 2</p>

  <!-- Subject -->
  <p><strong>Subject:</strong> Proposal for Business Collaboration</p>

  <!-- Body -->
  <p>Dear [Recipient's Name],</p>

  <p>I am writing to formally propose a potential business collaboration between [Your Company] and [Recipient's Company]. Our goal is to align our strengths in order to deliver mutual value and long-term growth.</p>

  <p>With our expertise in [your field/industry] and your company's impressive track record in [their field/industry], we believe this partnership can lead to innovative solutions and expanded market reach.</p>

  <p>I would appreciate the opportunity to discuss this proposal further. Please let me know a convenient time for a meeting or call.</p>

  <p>Thank you for considering this opportunity. I look forward to your response.</p>

  <!-- Closing -->
  <p>Sincerely,</p>
  <p>Your Name</p>
  <p>Your Position</p>`,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
    <p>[Your Full Name]</p>
  <p>Email: [your email]</p>
  <p>Phone: [your phone number]</p>
  <p>Address: [your address]</p>
  <p>Website or LinkedIn: [optional]</p>

  <!-- Objective or Summary -->
  <h2>Objective</h2>
  <p>[Brief statement about your career goals or what you want to achieve]</p>

  <!-- Skills -->
  <h2>Skills</h2>
  <p>[Skill 1], [Skill 2], [Skill 3], ...</p>

  <!-- Work Experience -->
  <h2>Work Experience</h2>
  <p>[Job Title]</p>
  <p>[Company/Organization Name]</p>
  <p>[Start Date] – [End Date]</p>
  <p>[Summary of your responsibilities and achievements]</p>

  <p>[Job Title]</p>
  <p>[Company/Organization Name]</p>
  <p>[Start Date] – [End Date]</p>
  <p>[Summary of your responsibilities and achievements]</p>

  <!-- Education -->
  <h2>Education</h2>
  <p>[Degree or Qualification]</p>
  <p>[School or Institution]</p>
  <p>[Dates Attended]</p>

  <!-- Additional Sections (Optional) -->
  <h2>Certifications</h2>
  <p>[Certification Name] – [Issuing Organization], [Year]</p>

  <h2>Languages</h2>
  <p>[Language] – [Proficiency]</p>

  <h2>Interests</h2>
  <p>[Interest 1], [Interest 2], [Interest 3]</p>`,
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/cover-letter.svg",
    initialContent: ` 
  <p>[Your Name]</p>
  <p>[Your Address]</p>
  <p>[City, State ZIP]</p>
  <p>[Email Address]</p>
  <p>[Phone Number]</p>


  <p>[Date]</p>


  <p>[Hiring Manager’s Name]</p>
  <p>[Company Name]</p>
  <p>[Company Address]</p>
  <p>[City, State ZIP]</p>

  <p><strong>Subject:</strong> Application for [Job Title]</p>


  <p>Dear [Hiring Manager’s Name],</p>


  <p>I am writing to express my interest in the [Job Title] position at [Company Name]. With my background in [relevant field or experience], I am confident that I can contribute positively to your team.</p>

  <p>In my previous role at [Previous Company], I developed skills in [mention relevant skills or achievements], which I believe align well with the requirements of this position.</p>

  <p>I am excited about the opportunity to bring my expertise in [your field or skill] to [Company Name] and contribute to your ongoing success.</p>

  <p>Thank you for considering my application. I look forward to the possibility of discussing how I can be an asset to your team. Please feel free to contact me at [phone number] or [email address].</p>


  <p>Sincerely,</p>
  <p>[Your Name]</p>`,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: ` <p>[Your Name]</p>
  <p>[Your Position]</p>
  <p>[Your Company Name]</p>
  <p>[Your Address Line 1]</p>
  <p>[Your Address Line 2]</p>
  <p>[Your Email]</p>
  <p>[Your Phone Number]</p>

  <!-- Date -->
  <p>[Date]</p>

  <!-- Recipient Information -->
  <p>[Recipient's Name]</p>
  <p>[Recipient's Position]</p>
  <p>[Recipient's Company Name]</p>
  <p>[Recipient's Address Line 1]</p>
  <p>[Recipient's Address Line 2]</p>

  <!-- Subject -->
  <p><strong>Subject:</strong> [Subject of the Letter]</p>

  <!-- Greeting -->
  <p>Dear [Recipient's Name],</p>

  <!-- Body -->
  <p>[First paragraph: introduction and purpose]</p>
  <p>[Second paragraph: details and context]</p>
  <p>[Third paragraph: conclusion and call to action]</p>

  <!-- Closing -->
  <p>Sincerely,</p>
  <p>[Your Name]</p>
  <p>[Your Position]</p>`,
  },
];
