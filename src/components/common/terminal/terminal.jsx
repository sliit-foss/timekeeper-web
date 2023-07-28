import { twMerge } from "tailwind-merge";

const Terminal = ({ code = [""], styles = { root: "", header: "", body: "" } }) => {
  return (
    <div className={twMerge("md:mb-[40px] mb-0 rounded-primary border rounded-b-primary", styles.root)}>
      <div className={twMerge("bg-gray-ultra-light h-[36px] rounded-t-primary", styles.header)} />
      <pre
        className={twMerge(
          "font-sf text-[22px] bg-white md:px-[24px] md:pt-[18px] md:pb-[38px] md:rounded-b-primary md:m-0 m-[16px] md:leading-5",
          styles.body
        )}
      >
        {code.map((line, index) => (
          <div key={index}>
            {line}
            <br />
          </div>
        ))}
      </pre>
    </div>
  );
};

export default Terminal;
