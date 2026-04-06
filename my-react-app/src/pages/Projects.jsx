import React from 'react';
import ProjectsCard from '../components/ProjectsCard/ProjectsCard';  
import Footer from '../components/Footer/Footer';

const Projects = () => {
  const projects = [
    {
      title: "Linux Wiki",
      status: "Active",
      image: "/group.png", 
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      title: "Linux Wiki",
      status: "Archived",
      image: "/Project_img.png",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white p-6 md:p-12">
 

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((item, index) => (
          <ProjectsCard key={index} {...item} /> 
        ))}
      </div>

  
    </div>
    
  );
};

export default Projects;