export const SKILLS = [
  { name: "HTML5", level: 100, color: "#E85D25", logo: "HTML5" },
  { name: "CSS3", level: 100, color: "#249CDA", logo: "CSS3" },
  { name: "Sass", level: 80, color: "#C96195", logo: "Sass" },
  { name: "Bootstrap", level: 60, color: "#533B78", logo: "Bootstrap" },
  { name: "Javascript", level: 80, color: "#EFD81D", logo: "Javascript" },
  { name: "Vue.js", level: 70, color: "#3FB27F", logo: "Vuejs" },
  { name: "Vuex", level: 70, color: "#33475B", logo: "Vuex" },
  { name: "Angular", level: 100, color: "#BD002E", logo: "Angular" },
  { name: "Node.js", level: 30, color: "#539e43", logo: "nodejs" },
  { name: "JQuery", level: 30, color: "#0864A7", logo: "JQuery" },
  { name: "Postman", level: 70, color: "#ff6c37", logo: "Postman" },
  { name: "Ionic", level: 60, color: "#367CF7", logo: "Ionic" },
  { name: "React.js", level: 70, color: "#50BBD7", logo: "Reactjs" },
  { name: "Wordpress", level: 30, color: "#207196", logo: "Wordpress" },
  { name: "Git", level: 70, color: "#E84E31", logo: "Git" },
  { name: "Typescript", level: 60, color: "#2D79C7", logo: "Typescript" },
  { name: "Java", level: 30, color: "#E88A32", logo: "Java" },
  { name: "NoSQL", level: 60, color: "#F7C52B", logo: "NoSQL" },
  { name: "Photoshop", level: 50, color: "#001D34", logo: "Photoshop" },
  { name: "Jira", level: 70, color: "#1A80FF", logo: "Jira" },
  { name: "AWS", level: 30, color: "#FF8E04", logo: "AWS" },
  { name: "C#", level: 30, color: "#953DAC", logo: "CSharp" },
];

export const WORK_EXPERIENCE = [
  {
    company: "Deloitte Digital",
    role: "Consultant / Frontend Feveloper",
    dateStart: "Oct 2021",
    dateEnd: "present",
    location: "Bucharest",
    companyLogo: "deloitte-digital",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Angular",
      "Sass",
      "TypeScript",
      "REST",
      "Jira",
      "Confluence",
      "React",
      "Thymeleaf",
      "Mambu",
      "moment.js",
      "AWS Services",
      "Java",
    ],
    projects: [
      {
        name: "Client 1 - Alpha Team",
        country: "United Kingdom",
        startDate: "Oct 2021",
        endDate: "Jan 2022",
        industry: ["Banking", "Insurance"],
        technologies: ["Angular 8+", "RxJs", "Jira", "moment.js"],
        contribution: [
          "Wrote a tutorial about how to write clean code when working on the frontend side for Alpha Team",
          "Feature that show to the user the active policies into a responsive and interactive design",
          "Upgraded from Angular 8 to Angular 13",
          "Added consistency to the CSS and HTML code maintaining a good collaboration with the designer",
          "Added possibility to use a vocabulary for an easier translation",
          "Improved the user authentication flow and added more layers of security for the confidential information",
          "Adding the possibility of a Mid Term Adjustment to a policy",
          "Mentoring frontend colleagues",
        ],
      },
      {
        name: "Client 2",
        country: "Germany",
        startDate: "Feb 2022",
        endDate: "present",
        industry: ["Banking"],
        technologies: [
          "React",
          "Thymeleaf",
          "Mambu",
          "moment.js",
          "TypeScript",
          "AWS Services",
          "Java",
        ],
        contribution: [
          "Create new React components and upload them into Mambu",
          "Modify Java functions accordingly to Thymeleaf templates to create custom PDF files",
        ],
      },
    ],
  },
  {
    company: "IBM iX",
    role: "Frontend Feveloper",
    dateStart: "Dec 2018",
    dateEnd: "Oct 2021",
    location: "Bucharest",
    companyLogo: "ibm",
    technologies: [
      "Angular",
      "SharePoint",
      "Vagrant",
      "Ionic",
      "Sass",
      "TypeScript",
      "JQuery",
      "REST",
      "Capacitor",
      "RxJs",
      "React.js",
      "Adobe Experience Manager",
      "Jira",
      "Vue.js",
      "Firebase",
      "Vuex",
      "Unit Testing",
    ],
    projects: [
      {
        name: "Internship",
        country: "Romania",
        startDate: "Dec 2018",
        endDate: "Feb 2019",
        industry: [],
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "Angular",
          "RxJs",
          "Vue.js",
          "Vuex",
          "Firebase",
          "Ionic",
        ],
        contribution: [
          "Designing mobile-based features using Ionic, working in an agile team.",
        ],
      },
      {
        name: "Client 1",
        country: "Germany",
        startDate: "Mar 2019",
        endDate: "Mar 2020",
        industry: ["Insurance"],
        technologies: [
          "Angular",
          "Ionic",
          "Sass",
          "TypeScript",
          "REST",
          "Capacitor",
          "RxJs",
        ],
        contribution: [
          "Delivered a good quality presentation website for our client in order to present our projects to their customers, in a small amount of time so the client was able to see the results and to use it",
          "Investigated and solved some vulnerabilities from the applications",
          "Contributed actively on a project from March and until the end of November, by helping other colleagues with code review and implementing reusable components. I also helped taking decisions in business rules and in development process",
          "Participated in every meeting and decision in a proactive way in order to deliver a quality and clean code which meets the client requirements",
        ],
      },
      {
        name: "Client 2",
        country: "United Kingdom",
        startDate: "Mar 2020",
        endDate: "Mar 2020",
        industry: ["Retail"],
        technologies: ["react.js"],
        contribution: [
          "Redesigning the on-boarding process for non plastic material and packaging suppliers onto the materials library and imagining the presentation and navigation of the library in parallel",
          "Participated in discussions with the design and front-end team in order to clarify and suggest edits so the user can have a better experience using the website",
          "Created reusable pages using React.js which corresponds to the design",
          "Created dynamic forms using Formik framework for the registration of new plastic free materials",
        ],
      },
      {
        name: "Client 3",
        country: "United States",
        startDate: "Apr 2020",
        endDate: "Oct 2021",
        industry: ["E-Commerce"],
        technologies: [
          "Angular",
          "Sass",
          "TypeScript",
          "REST",
          "RxJs",
          "Adobe Experience Manager",
          "VirtualBox",
          "JQuery",
          "Unit Testing",
        ],
        contribution: [
          "Created new components and features for the application in a way that we can reuse them when it is need",
          "Helped both design and development departments to take decisions in order to deliver the best features",
          "Learned better ways to solve the problems that appears during the development",
          "Delivered WYSIWYG (What You See Is What You Get), a feature that wants to improve the customer experience regarding the promotional codes.The first phase included changing the design of both coupons and product promotions, including more descriptive text and a user-friendly design, changes made throughout the application, on all banners. In the same phase was included the creation of the right drawer, which replaces the pop-up with the description of the promotion or the description page for it, being available by clicking on the link with the coupon / promotion details. If there are multiple promotions for a single product, they are displayed as a total, and will be described accordingly in the right drawer. The second phase includes the implementation of the new API response, which includes a new possibility to process the offers, displaying the requirement quantity, following that on the stores where the feature is activated, to display and if the offer has been completed and benefit from it. The new treatment system is visible both in the coupon design, in the mini-cart or in the top menu, in the right drawer and in the product page",
        ],
      },
    ],
  },
  {
    company: "Groupe Renault",
    role: "Database Administrator",
    dateStart: "Jun 2017",
    dateEnd: "Sep 2017",
    location: "Bucharest",
    companyLogo: "renault",
    technologies: ["Matlab", "SQL", "Excel", "PowerPoint"],
    projects: [
      {
        name: "Drive your future",
        country: "Worldwide",
        startDate: "Jun 2017",
        endDate: "Sep 2017",
        industry: ["Automotive"],
        technologies: ["Matlab", "SQL", "Excel", "PowerPoint"],
        contribution: [
          "Generating reports using large amounts of data from company clients around the globe",
          "Database maintenance using my own Matlab scripts",
        ],
      },
    ],
  },
];

export const EDUCATIONS = [
  {
    school: "Romanian-American University",
    degree: "Master's degree",
    fieldOfStudy:
      "Computer/Information Technology Administration and Management",
    startYear: "2018",
    endYear: "2020",
    grade: "9.66",
    logo: "romanian-american-university",
  },
  {
    school: "Romanian-American University",
    fieldOfStudy:
      "Computer/Information Technology Administration and Management",
    degree: "Licentiate degree",
    startYear: "2015",
    endYear: "2018",
    grade: "9.50",
    logo: "romanian-american-university",
  },
];

export const CERTIFICATIONS = [
  {
    logo: "HackerRank",
    name: "Angular Certificate",
    organization: "HackerRank",
    issueDate: "Mar 2022",
    url: "https://www.hackerrank.com/certificates/502d54979ed0",
  },
  {
    logo: "EF-Standard",
    name: "English Certificate - C1 Advanced",
    organization: "EF Standard English Test (EF SET)",
    issueDate: "Mar 2022",
    url: "https://www.efset.org/cert/V3b9C2",
  },
  {
    logo: "Think-like-a-hacker",
    name: "Think like a hacker",
    organization: "IBM",
    issueDate: "Sep 2021",
    url: "https://www.credly.com/badges/2b0b25bd-328e-45c3-8248-85e09c380ef2",
  },
  {
    logo: "IBM_Cloud_Essentials",
    name: "IBM Cloud Essentials",
    organization: "IBM",
    issueDate: "Jan 2021",
    url: "https://www.youracclaim.com/badges/26b0884f-9c3a-42f1-be74-6b23c4f6a743",
  },
  {
    logo: "Security-_-Privacy-by-Design-Foundational",
    name: "Security and Privacy by Design Foundations",
    organization: "IBM",
    issueDate: "Jan 2021",
    url: "https://www.youracclaim.com/badges/84998ca5-487f-4c61-b1e5-298ec991bb20",
  },
  {
    logo: "Watson_and_Cloud_Foundations",
    name: "Watson and Cloud Foundations",
    organization: "IBM",
    issueDate: "Jan 2021",
    url: "https://www.youracclaim.com/badges/11c2db76-b461-4bf9-8a12-9a42663d404f",
  },
  {
    logo: "IBM-Mentor",
    name: "IBM Mentor",
    organization: "IBM",
    issueDate: "Dec 2020",
    url: "https://www.youracclaim.com/badges/841adfea-65df-4a8e-bbe1-267d70cb6a21",
  },
  {
    logo: "JavaScript-Front-End-Development",
    name: "JavaScript Frontend Development",
    organization: "IBM",
    issueDate: "Dec 2020",
    url: "https://www.youracclaim.com/badges/b6792b26-e919-4de1-bc24-d4192439aa50",
  },
  {
    logo: "Badges_v8-07_Practitioner",
    name: "Enterprise Design Thinking Practitioner",
    organization: "IBM",
    issueDate: "Mar 2020",
    url: "https://www.youracclaim.com/badges/f28084ab-7407-4d30-8f84-e612adc40402",
  },
  {
    logo: "IBM-Agile-Explorer",
    name: "IBM Agile Explorer",
    organization: "IBM",
    issueDate: "Mar 2020",
    url: "https://www.youracclaim.com/badges/8ed472e8-38c5-42c0-aee7-c1993e9f737f",
  },
];

export const AWARDS = [
  {
    name: "Rau-DevHack Hackathon",
    place: 2,
    date: "Apr 2019",
  },
  {
    name: "Web&Mobile Challenge at DevHacks",
    date: "Nov 2018",
    place: 1,
  },
];

export const PHOTOS = [
  {
    name: "Herculane",
    live: "https://500px.com/photo/274673693/Herculane-by-Gheorghe-Madalina-Eleonora",
    logo: "https://drscdn.500px.org/photo/274673693/q%3D80_m%3D2000/v2?sig=8ca6a504a9b659352523386d6b165d110ff3fc53618fd56f7dc6b136683c7e1d",
  },
  {
    name: "Bucharest International Air Show",
    live: "https://500px.com/photo/1007902123/Bucharest-International-Air-Show-by-Gheorghe-Madalina-Eleonora/",
    logo: "https://drscdn.500px.org/photo/1007902123/q%3D80_m%3D2000/v2?sig=3d058c5ea07fd1272709010cd936e35775f4ac71b017634de84ff736acabced2",
  },
  {
    name: "Mogosoaia - Canon Summer School",
    live: "https://500px.com/photo/274680569/Mogosoaia--Canon-Summer-School-by-Gheorghe-Madalina-Eleonora/",
    logo: "https://drscdn.500px.org/photo/274680569/q%3D80_m%3D1500/v2?sig=169412e495354420c2b23257d27673c74df27a3b9847ee874b65f2766d4576d3",
  },
  {
    name: "Red ladybug on a leaf",
    live: "https://500px.com/photo/274675811/Red-ladybug-on-a-leaf-by-Gheorghe-Madalina-Eleonora/",
    logo: "https://drscdn.500px.org/photo/274675811/q%3D80_m%3D1500/v2?sig=c090e926a2d8d1bdbf2ab6e1e5e75ec0f98548542f12af9386b756e4a4b257c9",
  },
  {
    name: "Fireworks",
    live: "https://500px.com/photo/274677385/Fireworks-by-Gheorghe-Madalina-Eleonora/",
    logo: "https://drscdn.500px.org/photo/274677385/q%3D80_m%3D1500/v2?sig=0fd7bc43cfa47853c0167cba3d68a1e655836bb4cb2eaefc8cbbf61f92547945",
  },
  {
    name: "Crocodile",
    live: "https://500px.com/photo/1035360032/Crocodile-by-Gheorghe-Madalina-Eleonora/",
    logo: "https://drscdn.500px.org/photo/1035360032/q%3D80_m%3D1500/v2?sig=d2b5090a1fe8ceab337e18acbf0e97d150271717e202853c087f667fac8f2141",
  },
  {
    name: "Aerial Show",
    logo: "https://drscdn.500px.org/photo/1035360036/q%3D80_m%3D1500/v2?sig=7e45e0da89c7c06bf98d99774144ed85cab4069f8eb250a96f065dfb33a9a1b4",
    live: "https://500px.com/photo/1035360036/aerial-show-by-gheorghe-madalina-eleonora",
  },
  {
    name: "Comana small views",
    logo: "https://drscdn.500px.org/photo/1047892545/q%3D80_m%3D2000/v2?sig=3be22983810770804b8624dce550771a37f0b971d65e1c75fa53a28025b47372",
    live: "https://500px.com/photo/1047892545/Comana-small-views-by-Gheorghe-Madalina-Eleonora/",
  },
];

export const RECOMMENDATIONS = [
  {
    text: `Madalina recently joined our team and rapidly adapted to the project specifics and pace. Feedback from both team and local technical lead is positive as Madalina started working on the project near stabilization phase, but managed to get familiar in a short timeframe with the complexity of the project. As areas of focus I encourage Madalina to work closely with the local and member firm stakeholders by following clear planning & milestones and by addressing questions to reduce delivery ambiguity (more of a "pull" approach, vs push). In addition, Madalina should continue to demonstrate ownership of work and commitment towards project objectives, team with leads to create recommendations/ propose solutions and anticipate potential risks related to managed work/processes. Being a first review on this project, I encourage Madalina to follow-up on her objectives and desired outcomes for assigned areas of responsibility by setting personal goals accordingly with her coach & delivery lead.`,
    author: "Silvana-Roberta Helal",
    role: "Senior Manager",
    date: "May 2, 2022",
    from: "Deloitte Digital",
  },
  {
    text: `Madalina joined the team in a very critical moment. She replaced our Frontend team member and the handover duration wasn't the most adequate. However, Madalina could quickly take over the tasks assigned to her and she could deliver them with a very good quality on the agreed time. Madalina is also a team player and she knows when she need to raise the hand when and issue appears. I suggest Madalina to continue working on this way and not stop learning not only frontend technical things but also Cloud and Devops tools to increase the value of her profile.`,
    author: "Diego Frison Aladren",
    role: "Solution Lead",
    date: "Apr 20, 2022",
    from: "Deloitte Digital",
  },
  {
    text: `I’ve met Madalina when she joined the project in February as a front-end developer. Madalina is great at picking new things up. Even though Next JS and React weren’t her areas of focus, she managed to quickly learn the frameworks and took over the FE topics and successfully implemented new functionalities in no time. Regarding team dynamics, she integrated fast in the team, proving great collaboration skills, and communicates well with the team and in client based meetings. I would encourage her to keep up the good work, and continue the same good practices to further develop her technical and soft skills. II really enjoy working with her and I’m looking forward to collaborate with her in the future.`,
    author: "Cristina-Mihaela Antohe",
    role: "Backend Developer",
    date: "Apr 20, 2022",
    from: "Deloitte Digital",
  },
  {
    text: `Hi Mada,
      <br>
      You can find my feedback for our collaboration bellow:
      <br>
      I’m working together with Madalina since February this year. Though she joined the project in a phase where everything was almost finished, she managed to get up to speed with the technology and the ways of working in a very short time. Given the speedy handover, the short ramp-up period and the big amount of information, she managed to understand the architecture of the solution quickly. From early on, she was fully independent from a tech perspective, requiring assistance only for understanding the feature she needed to implement. Even though she is a less experienced frontend developer than the former one, seeing her work I can confirm that she managed to surpass everyone’s expectations. She communicates the blockers & issues clearly, she developed complex features faster and with increased quality than before.She handled cloud configuration & installs for the applications that she developed with ease, even though this is out of her area of expertise. 
      <br>
      She is asking everyone for information when she needs it, she is efficiently communicating her concerns and thus, every story that she implemented was easily integrated with the backend components and the platform. Moreover, I appreciate the fact that during refinements and clarifications, she challenges the approach and the input data, and, thus we managed to increase the quality of the features’ description resulting in better structured stories and acceptance criteria.
      <br>
      I know that this project was Madalina’s chance to work with React and I’m recommending her to continue to do so. I’m sure that there are still areas where she can improve. At the same time, I’m hoping that was a good introduction for her with this technology. 
      Madalina still needs to focus on understanding stories and requirements better. At the same time, given the short span of time she’s been on the project and the complexity of the stories coupled with some descriptions being in german, I consider that she did a great job in this regard.
      <br>
      Concluding these lines, I’m happy that I got the chance to work with her and I would definitely like to continue doing this in the future.`,
    author: "Andrei-Ioan Popescu",
    role: "Team Lead",
    date: "Apr 20, 2022",
    from: "Deloitte Digital",
  },
  {
    text: `As a Business Analyst in the project, although I am unable to evaluate the technical skills, I can definitely provide feedback on the project contributions: Madalina was on-boarded the fastest onto the project. The transition was from the previous developer was seamless. Overnight she became the expert and point of contact for front-end applications. She has delivered all her tasks with great speed and took on several topics instantly. The entire project is happy to have her onboard.`,
    author: "Kavitha Padmanabham",
    role: "Business Analyst",
    date: "Apr 20, 2022",
    from: "Deloitte Digital",
  },
  {
    text: `Hi Madalina,<br>
      Madalina was a fundamental part of Alpha for Insurance, particularly at a point where we needed to ramp up development. Madalina instantly collaborated with the team and importantly understood our objectives quickly. The repeated feedback from the development lead was how quickly our production increased – thanks to Madalina. Madalina clearly has a strong skillset which benefited our FE team significantly. Madalina worked hard to develop her colleagues and ensured they were implementing best practice techniques. As a Product Manager, I really value this. Thank you 😊`,
    author: "Jack Taylor",
    role: "Manager",
    date: "Apr 6, 2022",
    from: "Deloitte Digital",
  },
  {
    text: "Madalina has recently joined the project and up until now she has a good attitude towards it. I can clearly see that Madalina is a smart person, she managed to learn the project very fast and started doing complex stories in short time after joining the team. In terms of collaboration, she already started communicating efficiently with multiple members of the local team and the remote team.",
    author: "Corina Costin",
    role: "Backend Developer",
    date: "Apr 5, 2022",
    from: "Deloitte Digital",
  },
  {
    text: `Hi Madalina,<br>
      Please find below my feedback for you. The feedback is based on my interaction with you, as well as feedback I have received from various Alpha stakeholders (UK and ERDC).<br>
      During her time spent on Alpha space, Madalina has shown a lot of flexibility and maturity.<br>
      Even though she had to change teams and industries, from banking to insurance, her experience has been extremely appreciate by our main stakeholders and there have been multiple requests to keep her on Alpha.
      From a technical perspective, she delivers extremely fast and at a high quality. For example, she managed to bring visible improvements on the web app in just a couple of weeks, as well as mentioning more junior team members. If given the opportunity (to match her expertise and role desired), she has the ability to make a huge  difference, she has the skills and determination needed. For that, she has my respect and support through her career path, here in Digital.
      <br>
      As a future recommendation, I would probably suggest Madalina to socialise and interact with her team more. I fully understand it can be challenging to adapt to a new company, environment, team but sometimes, all you need to do is open yourself a little bit, and let your colleagues get closer to you.
      Note: The above suggest is based on my personal experience from a while back. It\'s up to Madalina to analyse and decide if it was just a context issue or if she thinks there is room to improve as I\'m not that close to her day to day activity.
      <br>
      Thanks,
      Isabela`,
    author: "Isabela Pecete",
    role: "Project Manager",
    date: "Feb 7, 2022",
    from: "Deloitte Digital",
  },
  {
    text: `To Whom It May Concern,<br>
      I have been working with Madalina for almost two months on Alpha for Insurance core project. Even though the collaboration was for a short while as the project could not afford extra costs at this time, she managed to leave a very strong impression. She gave a huge boost to our Web app development, she came with a very long list of improvements to our existing app and managed to implement a lot of those items in just a couple of weeks: upgrade Angular from ver 8 up to ver 13, brought in good practices like introducing a vocabulary into the app, introducing CSS constants, introducing model classes, refactoring a lot of components to make them more reusable, adjust tons of pieces of layout to make them more responsive, updating and eliminating redundant dependencies, etc. She is mastering SASS, she is extremely fast at delivering very appealing layouts with very well structured CSS code. The quality of the code she has been writing and the overall work quality has been impressive. She delivered a lot of features in a very short time, at the highest standards. She is hard working and determined to deliver good quality work. For Web developer Consultant level she is a top performer. I hope to work with Madalina soon. I would always want her in my team, given the opportunity.<br>
      Thank you for your hard work and for the huge improvements to our app, Madalina!`,
    author: "Dragos-Vasile Lungu",
    role: "Technical Lead",
    date: "Ian 28, 2022",
    from: "Deloitte Digital",
  },
  {
    text: "I spent a lot of time working together with Madalina over the last few years on both personal project and competitions, so here are my thoughts on this experience. Without doubt I can say that she had a big impact on me. She's ambitious, enjoys learning new things all the time, she takes action whenever the situation requires it.She never stepped back from a challenge, but rather is determined to figure out how we overcome it.Madalina was there when anyone from the team needed support on any level: if it's a coding problem, providing some information, investigating an issue, giving an advice non-work related or just for a simple talk. She always encourages everyone to push their limits and become a better version on themselves. Her patient and professional attitude makes it really easy to talk to. She's not just about work, she's also about being human and having a good time while trying to grow as much as possible.",
    author: "Narcisa-Elena Badea",
    role: "Frontend Developer",
    date: "Nov 27, 2021",
    from: "IBM",
  },
  {
    text: "Madalina is a very practical person. Working on various projects with her I was able to see how flexible she can be, especially with the help of her vast knowledge in the IT field. In addition to intelligence, I noticed that she also has leadership qualities that have been very helpful in any project. Attention to detail characterizes her, so it's hard not to get things going almost perfectly with her. She is a charismatic, dynamic person with a very precise decision-making power. Nothing remains unresolved with Madalina!",
    author: "Mihaela Gales",
    role: "System Support Engineer",
    date: "Nov 25, 2021",
    from: "Vodafone",
  },
  {
    text: "For the past years I had the opportunity to work along Madalina on multiple personal & comercial projects. She was able to develop features in an extremely elegant and creative way all the time. Her ability to develop high quality products while being under extreme pressure is something that I look up to, not only that she's able to stay calm and professional in difficult situations.She's also able to make everyone in the team feel that they are also capable of doing more than they expect from themselves.",
    author: "Emanuel Cepoi",
    role: "Full-Stack Developer",
    date: "Sep 24, 2021",
    from: "Wooter Apparel",
  },
  {
    text: "Madalina is always reliable and helping her team members, able to understand the requirements and come up with a solution. It was a joy and always had confidence while working with her. I am strongly recommend her in any new opportunity and challenge.",
    author: "Raluca Rusu",
    role: "Project Manager",
    date: "Sep 13, 2021",
    from: "IBM",
  },
  {
    text: "Madalina was my mentor during my internship period at IBM iX. She was friendly and open from the start and rapidly developed a learning plan for me. We had a great mentor-mentee relationship during that time and she was always eager to show me new front-end tricks and quirks. She is a talented Front-End Developer, capable to tackle any challenge with success. The proactivity which she possesses inspired me a lot throught my internship period. I recommend her with confidence.",
    author: "Madalin Tuca",
    role: "Frontend Developer",
    date: "Sep 2, 2021",
    from: "IBM",
  },
  {
    text: "Madalina, thank you for your support as technical mentor for our new intern. Appreciate your guidance and helping bring new talent to our wider iX IBM team and also constant strong contribution to our project delivery. Keep up the good work!",
    author: "Alexandra-Luminita Tanef",
    role: "Project Manager",
    date: "Aug 6, 2021",
    from: "IBM",
  },
  {
    text: "I worked with Madalina on the same project for over a year. Even though she started as a Junior Developer, she quickly managed to learn and acquire quite an extensive set of skills.Her determination to never give up and always learn and improve, is what sets her apart from many other developers out there.It's been a pleasure working with her. She is currently riding the proverbial wave and I am sure she will achieve great things in the future.I highly recommend her to anyone looking to expand their team(s).",
    author: "Theodor Palamaru",
    role: "Frontend Developer",
    date: "Jun 22, 2021",
    from: "IBM",
  },
  {
    text: "Great job on the project Madalina, the feedback received for the project is very good. Also I like your drive and attitude and I hope you will continue to invest in your skills as you did until now, and more. For this year, keep up the good work and continue to grow your technical and soft skills!",
    author: "Sorina Radulescu",
    role: "People Manager",
    date: "Dec 16, 2020",
    from: "IBM",
  },
  {
    text: "Madalina had a very good start and path in the project, having in charge a very hard project and client on a team, being in front of the client for direct communication and problem solving. I am very satisfied with her abilities to create and maintain a good working relationship both with the client and her team members,to adapt quickly to change and to help any time need it. Also, the technical feedback from the TTL is very good. Keep up the good work!",
    author: "Raluca Rusu",
    role: "Project Manager",
    date: "15 Feb, 2019",
    from: "IBM",
  },
];

export const CONTACT = [
  {
    website: "Gmail",
    link: "mailto:madalinaeleonora.gheorghe@gmail.com",
    user: "madalinaeleonora.gheorghe@gmail.com",
  },
  {
    website: "LinkedIn",
    link: "https://www.linkedin.com/in/madalinaeleonorag/",
    user: "/madalinaeleonorag",
  },
  {
    website: "Medium",
    link: "https://madalinaeleonorag.medium.com/",
    user: "/madalinaeleonorag",
  },
  {
    website: "GitHub",
    link: "https://github.com/madalinaeleonorag",
    user: "/madalinaeleonorag",
  },
  {
    website: "Instagram",
    link: "https://www.instagram.com/madalinaeleonorag/",
    user: "/madalinaeleonorag",
  },
  {
    website: "Facebook",
    link: "https://www.facebook.com/mdx.madalinaeleonora/",
    user: "/madalinaeleonora",
  },
  {
    website: "PayPal",
    link: "https://www.paypal.com/paypalme/madalinaeleonorag",
    user: "/madalinaeleonorag",
  },
  {
    website: "500px",
    link: "https://500px.com/p/madalinaeleonorag?view=galleries",
    user: "/madalinaeleonorag",
  },
];
