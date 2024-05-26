import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";


export const HERO_CONTENT = `I am an enthusiastic developer with a strong foundation in multiple programming languages, including C, C++, Java, Python, and SQL. My expertise extends to advanced fields such as machine learning and artificial intelligence. With a solid background in these technologies, I am driven to develop innovative and efficient solutions that push the boundaries of what's possible in the tech world. I am passionate about leveraging my skills to create impactful projects that not only enhance user experiences but also drive business growth. My goal is to deliver solutions that increase operational efficiency, open new revenue streams, and contribute to the overall success of any organization I am part of.`;

export const ABOUT_TEXT = `I am a dedicated and versatile computer science undergraduate at the University of Victoria, currently pursuing a minor in business. My passion lies in creating efficient and user-friendly applications. With a strong foundation in programming languages like C, C++, Java, Python, and SQL, I have also delved into advanced fields such as machine learning and artificial intelligence. My journey in technology began with a deep curiosity for how things work, and it has evolved into an academic pursuit where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of academics, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  
];

export const PROJECTS = [
  {
    title: "Emotify - Real-time Emotion Detection",
    image: project1,
    description:
      "Emotify is an advanced AI project that leverages the power of YOLOv8 for real-time facial expression recognition. This project aims to accurately detect and interpret human facial emotions, using a dataset sourced from Roboflow Universe.",
     url:"https://github.com/akaAdiArun/Emotify",
      technologies: ["Python", "OpenCV", "YOLOv8", "Roboflow"],
  },
  {
    title: "Poetify - AI Poetry Generator",
    image: project2,
    description:
      "Poetify is an AI-powered tool that generates poetry in the style of Shakespeare. It utilizes a Recurrent Neural Network  with Long Short-Term Memory (LSTM) to model and generate text. The AI has been trained on a large dataset of Shakespeare's poems, allowing it to capture the essence and style of his writing.",
    url:"https://github.com/akaAdiArun/Poetify",
      technologies: ["Python", "TensorFlow", "Keras", "Numpy"],
  },
  
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "This personal portfolio website showcasing projects, skills, and contact information. The website was built using React, Bootstrap, and Framer Motion, and it features a clean and modern design that highlights my work and experience. The website is fully responsive and optimized for all devices.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  
];

export const CONTACT = {
  address: "1650 Tasco Close, Victoria, BC, V8N 5P2, Canada",
  phoneNo: "+1 (250) 884-4906",
  email: "adithyakrishna10000@gmail.com",
};
