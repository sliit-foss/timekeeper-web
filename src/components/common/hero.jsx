import { FaArrowUp, FaChevronRight } from 'react-icons/fa';
import Logo from '../assets/logo';
const Hero = () => {
    return (
        <div className='h-screen'>
            <button className='btn-primary my-20'>
                <span className='gradient-text'>Coming Soon</span>
                <FaArrowUp style={{ color: "#11EFE3", transform: "rotate(45deg)" }} />
            </button>
            <h1 className=" font-bold tracking-[-4.8px] font-cabinet text-[65px] md:text-[80px] lg:text-[121px]">TimeKeeper</h1>
            <div className='flex items-center space-x-1'>
                <p className='tracking-[-0.5px] font-inter md:text-[26px] opacity-40 w-full lg:w-[500px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repudiandae quasi magnam rem voluptatibus dicta quo quos quod recusandae amet, ex aut quam delectus animi voluptatem eum fugiat. Laudantium, pariatur?
                </p>
                <div className='md:block lg:px-[140px] px-[40px] hidden'>
                    <Logo height={250} />
                </div>
            </div>
            <div className='grid items-center md:grid-rows-1 md:grid-cols-4 grid-cols-1 grid-rows-3 md:place-items-start place-items-center space-x-4 mt-[40px]'>
                <button className='flex w-fit row-start-1 items-center md:text-[20px] font-medium space-x-1 rounded-2xl bg-[#11EFE33D] px-4 py-1'>
                    <span className='gradient-text'>Get started</span>
                    <FaChevronRight style={{ color: '#11EFE3' }}/>
                </button>
                <a href='#' className='flex items-center space-x-1 w-fit md:row-start-1 md:col-start-2 md:col-end-4 row-start-3'>
                    <span className='font-bold font-sf md:text-[20px] gradient-text'>See the docs</span> 
                    <FaChevronRight style={{ color: '#11EFE3' }}/>
                </a>
            </div>
        </div>
    );
}

export default Hero;