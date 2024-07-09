export const Education = () => {

    const education = [
        {
            title:'Faculty',
            description:'Faculty of Information And Communication Technologies Bitola',
        },
        {
            title:'Software developer at avilo (previously Vantevo AS)',
            description:'I play a role as a software developer that build web/mobile apps with React, Ionic and is expanding with PHP',
        },
        {
            title:'Internship at Netcetera',
            description:'Software engineering internship, worked with React, Spring boot, OpenAPI, MapStruct',
        },
        {
            title:'Internship at avilo',
            description:'Software development internship, worked with React and Flask',
        },
        {
            title:'React Course',
            description:'A course from Udemy about React that goes into depth about the technology',
        },
        {
            title:'Web development course',
            description:'A course from Udemy that starts with the basics of web development like html, css and javascript, gives an overview of backend development with Node.js as well.',
        },
        {
            title:'Java spring course',
            description:'Udemy course on Spring Boot, covering fundamental concepts and advanced topics in Java web development.',
        },
    ]

    return (
        <div id='education' className='w-full max-w-[90%] md:max-w-[1000px] h-screen mx-auto mt-40 py-16 text-center'>
            <h2 className='text-white md:text-3xl text-2xl'>
                Relevant formal and informal education and experience
            </h2>
        <div className='flex flex-col mt-10 '>
            {education.map(
                (education, index) => (
                    <div className='w-full mx-auto my-5 rounded-lg bg-purple-600 bg-opacity-20 backdrop-blur-lg p-2 py-4'>
                        <h3 className='text-white font-semibold text-2xl py-1'>
                            {education.title}
                        </h3>
                        <p className='text-gray-400'>
                            {education.description}
                        </p>
                    </div>
                    )
            )}
        </div>

        </div>
    )
}