export const Education = () => {

    const education = [
        {
            title:'High School',
            description:'SOU "Josip Broz Tito Bitola"',
        },
        {
            title:'Faculty',
            description:'Faculty of Information And Communication Technologies Bitola',
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
            description:'Another Udemy course that is all about the Spring framework',
        },
    ]

    return (
        <div id='education' className='w-full max-w-[90%] md:max-w-[1000px] h-screen mx-auto mt-40 py-16 text-center'>
            <h2 className='text-white md:text-3xl text-2xl'>
                Relevant formal and informal education
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