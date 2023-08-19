import { Console, Hero, Vision } from "@/components/landing";

const Landing = () => {
  return (
    <>
      <Hero className="mx-[40px] md:mx-[55px]" />
      <Console />
      <Vision />
    </>
  );
};

export default Landing;
