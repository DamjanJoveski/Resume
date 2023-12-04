import chess from './projectData/chess/cheSS.png';
import issTracker from './projectData/iss-tracker/iss-tracker.png';
import image1 from './projectData/kdlabs/Screenshot 2023-08-24 at 21.05.05.png';

export const Projects = () => {

    const projects = [
        {
            title:'Chess',
            data:`${chess}`,
            description:'A chess game developed in React.js under mentorship from Netcetera',
            link:'https://github.com/krsteetc/reactjs_chess_tut.git'
        },
        {
            title:'ISS Tracker',
            data:`${issTracker}`,
            description:'A web app made for tracking the ISS in real-time, it also displays the number of astronauts and their names',
            link:'https://github.com/DamjanJoveski/ISS-Tracker'
        },
        {
            title:'KD Labs',
            data: `${image1}`,
            description:'A landing page developed in React.js and tailwind css for my cousin that works as a graphic designer',
            link:'https://github.com/DamjanJoveski/kdlabs.git'
        },

    ]

    return (
        <div id='projects' className='w-full md:h-screen max-w-[1500px] mx-auto mt-36 pt-16'>
            <div className='text-center pt-10'>
                <h2 className='text-2xl md:text-3xl text-white'>Some ongoing projects</h2>
            </div>
                <div className="flex flex-wrap justify-around content-evenly py-24">
                    {projects.map((project, index) => (
                        <a href={project.link} target="_blank" rel="noreferrer">
                        <div
                            key={index}
                            className="bg-purple-600 w-full max-w-[90%] md:w-72 md:h-96 rounded-lg md:hover:scale-125 ease-in-out duration-300 shadow-md p-4 m-4 bg-opacity-20 backdrop-blur-lg flex flex-col justify-center items-center"
                        >
                            <img
                                src={project.data}
                                alt={`${project.title} `}
                                className="h-48 mx-auto mb-4 object-contain md:hover:scale-[200%] ease-in-out duration-500"
                            />
                            <h2 className="text-sm md:text-lg font-semibold text-white m-auto text-center overflow-hidden">
                                {project.title}
                            </h2>
                            <p className='text-sm text-white'>
                                {project.description}
                            </p>
                        </div>
                        </a>
                    ))}
        </div>
        </div>
    )
}