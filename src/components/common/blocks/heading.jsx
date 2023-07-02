const Heading = ({children, sub}) => {
    return (
        <>
            {  
                !sub ?
                (<h1 className="font-cabinet lg:tracking-[-3px] font-bold text-[60px] text-center lg:text-[76px] leading-[73px]">{children}</h1>) :
                (<p className="text-gray-medium text-[26px] lg:tracking-[-0.5px] leading-tight text-center mx-auto w-full md:w-[800px] font-inter">{children}</p>)
            }
        </>
    );
};

export default Heading