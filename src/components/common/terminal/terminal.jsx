import { twMerge } from "tailwind-merge";

const Terminal = ({ code = [""], styles = { root: "", header: "", body: "" } }) => {
  return (
    <div className={twMerge("mb-[40px] rounded-primary", styles.root)}>
      <div className={twMerge("border-x border-t bg-gray-ultra-light h-[36px] rounded-t-primary", styles.header)} />
      <pre
        className={twMerge(
          "font-medium font-sf text-[22px] bg-white px-[24px] pt-[18px] pb-[38px] border rounded-b-primary leading-5",
          styles.body
        )}
      >
        {code.map((line) => (
          <>
            {line}
            <br />
          </>
        ))}
      </pre>
    </div>
  );
};

export default Terminal;
