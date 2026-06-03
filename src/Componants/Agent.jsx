import React from 'react'
import { NavLink } from 'react-router'

function Agent() {
    const agent=[
  {
  id:1,
  name:"Brittany Watkins",
  img:"https://demo01.houzez.co/wp-content/uploads/2016/02/Artboard-2team-300x300.jpg",
  description:"Licensed real estate agent with 5 years of experience specializing in residential properties in the Chicago area. Dedicated to providing exceptional service and finding the perfect home for every client.",
  link:"/agent/Brittany-Watkins"
},
{
  id:2,
  name:"Michelle Ramirez",
  img:"https://demo01.houzez.co/wp-content/uploads/2016/02/agent-1-300x300.jpg",
  description:"Licensed real estate agent with 5 years of experience specializing in residential properties in the Chicago area. Dedicated to providing exceptional service and finding the perfect home for every client.",
  link:"/agent/Michelle-Ramirez"
},
{
  id:3,
  name:"Samuel Palmer",
  img:"https://demo01.houzez.co/wp-content/uploads/2016/02/agent-3-300x300.jpg",
  description:"Licensed real estate agent with 5 years of experience specializing in residential properties in the Chicago area. Dedicated to providing exceptional service and finding the perfect home for every client.",
  link:"/agent/Samuel-Palmer"
},
]
  return (
    <>
          <section className="w-full py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
       
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-[40px] text-gray-700 font-normal leading-tight">
              Meet Our Agents
            </h2>
            <p className="text-[15px] text-gray-500 mt-5 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

       
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {agent.map((agent) => (
              <div
                key={agent.id}
                className="bg-white rounded-md p-6 hover:shadow-xl hover:shadow-gray-300 transition-all duration-300 ease-in-out hover:-translate-y-2 cursor-pointer group flex flex-col justify-between border border-gray-150"
              >
                <div>
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative p-1.5 rounded-full border-2 border-dashed border-gray-200 group-hover:border-sky-500 transition-colors duration-300">
                      <img
                        src={agent.img}
                        alt={agent.name}
                        className="h-[180px] w-[180px] rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-center text-xl font-medium text-gray-800 group-hover:text-sky-500 transition-colors duration-200">
                    {agent.name}
                  </h3>
                  <p className="text-center text-sm text-gray-500 mt-3 leading-relaxed px-2">
                    {agent.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-center mt-6">
                  <NavLink
                    to={agent.link}
                    className="w-full sm:w-auto text-center text-sky-500 border-2 border-sky-500 py-3 px-10 bg-white rounded-sm hover:text-white hover:bg-sky-500 transition-all duration-300 ease-in-out text-sm font-medium"
                  >
                    View Profile
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Agent