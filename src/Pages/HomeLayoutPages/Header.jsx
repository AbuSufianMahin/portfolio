import React from 'react';
import portfolioDP from "../../assets/Images/porfolio-dp.jpg"
import { Button } from '../../Components/ui/button';
import { Download } from 'lucide-react';

const Header = () => {
    return (
        <section className='py-12 lg:py-24'>
            <div className='w-11/12 md:w-10/12 max-w-6xl mx-auto flex flex-col md:flex-row text-center md:text-left items-center gap-6 lg:gap-10'>
                <div className='md:flex-4 lg:flex-2'>
                    <div className='p-5 rounded-full bg-[#444444]'>
                        <div className='rounded-full overflow-hidden'>
                            <img src={portfolioDP} alt="" className='w-full' />
                        </div>
                    </div>
                </div>
                <div className='text-[#d5d5d5] md:flex-5 lg:flex-3 px-4'>
                    <h3 className='mb-4'>Web Developer</h3>
                    <h1 className='text-4xl lg:text-5xl font-extrabold mb-4 lg:mb-6 text-[#f5f5f5]'>Abu Sufian Mahin</h1>
                    <p className='text-sm md:text-base'>Curious and driven CSE undergrad who loves creating clean, user-friendly web apps. Comfortable with Python, React, and databases, I enjoy turning tricky challenges into smooth, practical solutions. Always excited to learn new things and grow along the way.
                    </p>


                    <div className='mt-4 lg:mt-6'>
                        <a
                            href="/sufian_resume.pdf"
                            download
                        >
                            <Button className="rounded-full border-2 border-primary text-[#d5d5d5] bg-transparent hover:bg-primary" size={"lg"}><Download strokeWidth={2} />Resume</Button>
                        </a>
                        
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Header;