import {TypeAnimation} from "react-type-animation";

export const Main = () => {
    return (
        <div id='main' className='z-10'>
            <div className='w-full h-screen'>
                <div className='max-w-[900px] mx-auto h-full w-full py-52 px-4 lg:py-72'>
                    <h1>
                        <TypeAnimation
                            sequence={[
                                'Hello there',
                                1000,
                                'My name is Damjan Joveski',
                                1000,
                                "I'm on a journey to become a software engineer",
                                1000,
                                "Here's a little bit about myself and my journey...",
                            ]}
                            wrapper="span"
                            speed={20}
                            style={{ fontSize: '3em', display: 'inline-block', color:'white' }}
                            repeat={Infinity}
                        />
                    </h1>
                </div>
            </div>
        </div>
    )
}