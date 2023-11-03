export const Contact = () => {
    
    return (
        <div id='contact' className='max-w-[1200px] m-auto md:pl-20 p-4 py-16 md:h-screen mt-80 text-white'>
            <h2 className='py-4 text-4xl font-bold text-center text-white'>
                Contact
            </h2>
            <form action="https://getform.io/f/965fe934-e9df-4d40-86ee-c628ee13bfba" method="POST" encType="multipart/form-data">
                <div className='grid md:grid-cols-2 gap-4 w-full py-2 '>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Name</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-400 bg-gray-600 bg-opacity-20 backdrop-blur-lg focus:outline-none' type='text' name="name"/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Phone</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-400 bg-gray-600 bg-opacity-20 backdrop-blur-lg focus:outline-none' type="text" name="phone"/>
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-400 bg-gray-600 bg-opacity-20 backdrop-blur-lg focus:outline-none' type="email" name="email"/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-400 bg-gray-600 bg-opacity-20 backdrop-blur-lg focus:outline-none' type="text" name="subject"/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 border-gray-400 bg-gray-600 bg-opacity-20 backdrop-blur-lg focus:outline-none' rows="10" name="message"> </textarea>
                </div>
                <button className='bg-purple-600 bg-opacity-20 backdrop-blur-lg text-white mt-5 w-full p-4 rounded-lg shadow-lg hover:shadow-purple-500 hover:scale-105 ease-in-out duration-300 focus:outline-none'>
                    Send Message
                </button>
            </form>
        </div>
    )
}