import React from 'react';

const ProjectCard = ({ children }: { children: React.ReactNode }) => 
{
    return (
        <div className="project-container p-2 m-2 bg-cyan-950/30 min-w-[266px] 
            rounded-lg relative shadow-xl hover:shadow-2xl">
            {children}
        </div>
    );
}

export default ProjectCard;