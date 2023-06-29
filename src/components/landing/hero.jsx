import { FaArrowUp } from "react-icons/fa";
import { Button } from "@/components/common";
import { Timekeeper } from "@/icons";

const Hero = () => {
  return (
    <div className="relative">
    <div className="md:w-1/2 min-h-full absolute inline-block border-r-2 md:ml-[2px] z-0 border-dashed "></div>
    <div className="py-14 ">
     
      <div className="flex justify-center items-center ">
      
        <Button className="bg-white border font-medium gap-x-2 z-10">
          <span className="gradient-text ">Coming Soon</span>
          <FaArrowUp className="text-primary-medium rotate-45" />
        </Button>
        
      </div>
      <h1 className=" font-bold tracking-[-4.8px] font-cabinet text-[65px] md:text-[80px] lg:text-[110px]">
        TimeKeeper
      </h1>
      <div className="flex justify-between space-x-1">
        <p className="tracking-[-0.5px] font-inter md:text-[24px] text-gray-medium w-full lg:w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repudiandae quasi magnam rem voluptatibus dicta
          quo quos quod recusandae amet, ex aut quam delectus animi voluptatem eum fugiat. Laudantium, pariatur?
        </p>
        <div className="md:block hidden">
          <Timekeeper height={250} />
        </div>
      </div>
      <div className="flex gap-x-2 mt-[20px]">
        <Button arrow>Get started</Button>
        <Button href="#" className="bg-transparent" arrowClassName="text-primary-light">
          See the docs
        </Button>
      </div>
      </div>
      </div>

     
  );
};

export default Hero;
