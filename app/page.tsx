'use client'
import { useState } from "react";

export default function Home() {
  const [projectList, setProjectList] = useState([
    {
      name: 'Expanding Cards',
      route: '/expanding-cards',
    },
    {
      name: 'Progress Steps',
      route: '/progress-steps'
    },
    {
      name: 'Rotating Navigation Animation',
      route: '/rotating-navigation-animation',
    }
  ]);
  return (
    <main className="flex min-h-screen bg-indigo-950 flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">
        {`Ryozm's 50 Projects `}
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {
          projectList.map((project, index) => (
            <div key={index} className="flex items-center justify-center">
              <a href={project.route} className="flex items-center justify-center text-center hover:text-indigo-500 hover:ring-4 hover:ring-indigo-500 w-48 h-24 bg-indigo-300 rounded-md ">
                <h2 className="text-xl font-bold">{project.name}</h2>
              </a>
            </div>
          ))
        }
      </div>
    </main>
  );
}
