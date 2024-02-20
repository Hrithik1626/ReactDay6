import React from "react";
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";

import Nav from "./Components/Nav"
import Data from "./Components/Data"
import Full from "./Components/Full"
import Carrier from "./Components/Carrier"
import Cyber from "./Components/Cyber"
import All from "./Components/All"

function App() {
  const fullStackContent = [
    {
      image:
        "https://d2ms8rpfqc4h24.cloudfront.net/Guide_to_Full_Stack_Development_000eb0b2d0.jpg",
      alt: "full-stack",
      title: "Full Stack Development",
      description:
        " Full-stack development is the process of designing, creating, testing, and deploying a web application from start to finish. Full-stack developers are web developers who have experience with all parts of online development.Front-end coding: HTML, CSS, and scripting languages like JavaScript.",
    },
    {
      image:
        "https://static.javatpoint.com/blog/images/how-to-be-a-full-stack-developer.png",
      alt: "full-stack",
      title: "Full Stack Development",
      description:
        "The Frontend Syllabus starts with programming basics, transitions to Java, covers data structures, and then delves into HTML, CSS, CSS frameworks, animations, Figma, and JavaScript. Learners also explore DOM manipulation, asynchronous JavaScript, and frontend frameworks like React.",
    },
    {
      image:
        "https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg",
      alt: "full-stack",
      title: "Full Stack Development",
      description:
        "Full Stack Development refers to the development of both front end(client side) and back end(server side) portions of web application.It is the visible part of website or web application which is responsible for user experience"
    },
  ];
  const CarrierDev = [
    {
      image: "https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/career-development-pillar-page-overview.png",
      alt: "full-stack",
      title: "Career Development",
      description:
"In today’s era of revolution in the workplace, companies are compelled to reevaluate their recruitment process and talent management framework. The new base of consumers who demand more personal and insightful brand experiences causes companies to review their management approaches. Employers nowadays"    },
    {
      image:
        "https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/09/23163958/Career-Planning-and-Development.png",
      alt: "full-stack",
      title: "Career Development",
      description:
"A career development plan is an integrative process in which an individual sets career development goals, creates a personal action plan and a roadmap to determine numerous ways to achieve these goals. Such practices include education programs, training, and growth enhancement activities pursued in order to obtain correct guidance and scheduling."    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiktvk4W_P6frw9oKrrUjUMw0n7i_TQ2y31ucu_P5P7nV5f38HSIWiai6ydX0zps8m4YA&usqp=CAU",
      alt: "full-stack",
      title: "Career Development",
      description:
" A Career Development Plan is advantageous and valuable for both employers and employees. It is a comprehensive analysis of where an employee is, what they desire, and the most efficient way to get from where they are to where they want to be. Let us discuss how it can be beneficial for both an employee and an employer below:"    },
    
  ];
  const Cybersec = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3YG7Zuzw4snvYPdDTAjZbw3V0v1SH2w1ZkTCUk2MVvA&s",
      alt: "full-stack",
      title: "Cyber Security",
      description:
"Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It's also known as information technology security or electronic information security. The term applies in a variety of contexts, from business to mobile computing, and can be divided into a few common categories."    },
    {
      image:
        "https://www.neit.edu/wp-content/uploads/2022/10/Cyber-Security-Icon-Concept-2-1.jpeg",
      alt: "full-stack",
      title: "Cyber Security",
      description:
" focuses on keeping software and devices free of threats. A compromised application could provide access to the data its designed to protect. Successful security begins in the design stage, well before a program or device is deployed.the practice of securing a computer network"    },
    {
      image:
      "https://www.linknet.id/files/photos/shares/article/cyber%20security.jpg",
      alt: "full-stack",
      title: "Cyber Security",
      description:
" Operational security includes the processes and decisions for handling and protecting data assets. The permissions users have when accessing a network and the procedures that determine how and where data may be stored or shared all fall under this umbrella."    },
    
  ];
  const DataScience = [

    {
      image:
        "https://imageio.forbes.com/specials-images/imageserve/615a844b0e678d9d11c5fc26/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      alt: "full-stack",
      title: "Data Science",
      description:
"Data science is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from potentially noisy, structured, or unstructured data."    },
    {
      image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_Data_Science.jpg",
      alt: "full-stack",
      title: "Data Science",
      description:
        "Data science is a broad career path that is undergoing developments and thus promises abundant opportunities in the future. Data science job roles are likely to get more specific, which in turn will lead to specializations in the field.",
    },
    {
      image:
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovs1Kr4ZOirLkheLhmDvO-7UU6DWbZUM80A&usqp=CAU",       alt: "full-stack",
      title: "Data Science",
      description:
"Data science is the study of data to extract meaningful insights for business. It is a multidisciplinary approach that combines principles and practices from the fields of mathematics, statistics, artificial intelligence, and computer engineering to analyze large amounts"    },
  ];
  const allCards = [
    ...fullStackContent,
    ...CarrierDev,
    ...Cybersec,
    ...DataScience,
  ];

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/all" element={<All allcard={allCards}/>} />
        <Route
          path="/full-stack"
          element={<Full content={fullStackContent} />}
        />
        <Route path="/data-science" element={<Data datas={DataScience} />} />
        <Route path="/cyber-security" element={<Cyber contents={Cybersec} />} />
        <Route
          path="/carrier-development"
          element={<Carrier data={CarrierDev} />}
        />
        <Route
          path="*"
          element={<Navigate to="/all"/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;