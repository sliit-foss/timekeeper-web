const Preview = ({ code = [""], output = [""], className = "" }) => {
  return (
    <div className={`grid ${className}`}>
      <div className="grid col-start-1 ml-[50%] mt-[calc(50%+40px)] border-t-2 border-l-2 border-dashed rounded-tl-[40px] place-items-end"></div>
      <div className="grid col-start-2 border-[#F5F5F5] border-t-[36px] mb-[40px] rounded-[20px]">
        <pre className="leading-5 font-medium font-sf text-[22px] bg-white px-[24px] pt-[18px] pb-[38px] border-[1px] rounded-b-[20px]">
          {code.map((i) => (
            <>
              {i}
              <br />
            </>
          ))}
        </pre>
      </div>
      <div className="grid col-start-3 mr-[50%] mt-[calc(50%+40px)] border-t-2 border-r-2 border-dashed rounded-tr-[40px] place-items-start"></div>
      <div className="grid col-start-1 row-start-2 col-span-3 w-full border-[#F5F5F5] border-[1px] border-t-[36px] rounded-[20px]">
        <pre className="leading-[26px] non-italic font-medium font-sf text-[20px] ml-[25px] pr-[25px] mb-[26px] mt-[18px] rounded-b-[20px] whitespace-pre-wrap w-[821px]">
          {output.map((i) => (
            <>
              {i}
              <br />
            </>
          ))}
        </pre>
      </div>
    </div>
  );
};

export default Preview;
