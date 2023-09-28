import {
    AiOutlineAudit,
    AiOutlineHome,
    AiOutlineMenu,
    AiOutlineMessage,
    AiOutlineProfile,
} from "react-icons/ai";
import {useState} from "react";
import {IoSchoolOutline} from "react-icons/io5";

export const SideNav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} size={25} className='absolute top-4 right-4 z-[99] md:hidden text-white' />
            {
                nav ? (
                        <div className='fixed w-full h-screen bg-black/85 flex flex-col justify-center items-center z-20'>
                            <a href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-purple-600  m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-purple-500 ease-in duration-200'>
                                <AiOutlineHome size={25} />
                                <span className='pl-4'>Home</span>
                            </a>
                            <a href='#skills' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-purple-600 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-purple-500 ease-in duration-200'>
                                <AiOutlineAudit size={25} />
                                <span className='pl-4'>Skills</span>
                            </a>
                            <a href='#projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-purple-600 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-purple-500 ease-in duration-200'>
                                <AiOutlineProfile size={25} />
                                <span className='pl-4'>Projects</span>
                            </a>
                            <a href='#education' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-purple-600 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-purple-500 ease-in duration-200'>
                                <IoSchoolOutline size={25} />
                                <span className='pl-4'>Education</span>
                            </a>
                            <a href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-purple-600 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-purple-500 ease-in duration-200'>
                                <AiOutlineMessage size={25} />
                                <span className='pl-4'>Contact</span>
                            </a>
                        </div>
                )
                    :
                    (
                        ''
                    )
            }

            <div className='md:block hidden fixed top-[25%] z-10 ml-3'>
                <div className='flex flex-col'>
                    <a href='#main' className='rounded-full shadow-lg bg-purple-600 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-purple-500 ease-in duration-300'>
                        <AiOutlineHome size={25} />
                    </a>
                    <a href='#skills' className='rounded-full shadow-lg bg-purple-600 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-purple-500 ease-in duration-300'>
                        <AiOutlineAudit size={25} />
                    </a>
                    <a href='#projects' className='rounded-full shadow-lg bg-purple-600 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-purple-500 ease-in duration-300'>
                        <AiOutlineProfile size={25} />
                    </a>
                    <a href='#education' className='rounded-full shadow-lg bg-purple-600 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-purple-500 ease-in duration-300'>
                        <IoSchoolOutline size={25} />
                    </a>
                    <a href='#contact' className='rounded-full shadow-lg bg-purple-600 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-purple-500 ease-in duration-300'>
                        <AiOutlineMessage size={25} />
                    </a>
                </div>
            </div>

        </div>
    )
}