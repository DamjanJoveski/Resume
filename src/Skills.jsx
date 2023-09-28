import html from './images/html-logo.png'
import css from './images/css-logo.png'
import javascript from './images/javascript-logo.png'
import react from './images/react-logo.png'
import sql from './images/sql-logo.png'
import dbm from './images/dbm-logo.png'
import java from './images/java-logo.png'
import nodejs from './images/nodejs-logo.png'


export const Skills = () => {
    const skills = [
        {
            title: 'HTML',
            imageUrl: `${html}`,
        },
        {
            title: 'CSS',
            imageUrl: `${css}`,
        },
        {
            title: 'Javascript',
            imageUrl: `${javascript}`,
        },
        {
            title: 'React',
            imageUrl: `${react}`,
        },
        {
            title: 'Java',
            imageUrl: `${java}`,
        },
        {
            title: 'Database Management',
            imageUrl: `${dbm}`,
        },
        {
            title: 'SQL',
            imageUrl: `${sql}`,
        },
        {
            title: 'Node.js',
            imageUrl: `${nodejs}`,
        },

    ];

    return (
        <div className="w-full h-screen py-12 mx-auto max-w-[1000px]">
            <div className="py-12 text-center">
                <h2 className="text-2xl md:text-3xl text-white">
                    Here are some technologies that I have experimented with
                </h2>
            </div>
            <div className="w-full">
                <div className="flex flex-wrap justify-around content-between">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-purple-800 w-40 h-40 md:w-52 md:h-52 rounded-lg shadow-md p-4 m-4 bg-opacity-20 backdrop-blur-lg flex flex-col justify-center items-center"
                        >
                            <img
                                src={skill.imageUrl}
                                alt={`${skill.title} logo`}
                                className="h-20 mx-auto mb-4 object-contain"
                            />
                            <h2 className="text-sm md:text-lg font-semibold text-white m-auto text-center overflow-hidden">
                                {skill.title}
                            </h2>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};
