import { code, output } from './example';
import { Button, Preview, Heading } from '@/components/common';

const Console = ({className}) => {
  return (
    <div className={`py-[60px] w-full ${className}`}>
      <Heading>See the time in real-time</Heading>
      <Heading sub>
        A highly portable and versatile plugin ecosystem which will enable fine-grained tracing in your Javascript source code
      </Heading>
      <Preview className="w-[870px] mx-auto mt-[20px]" code={code} output={output} />
      <Button className="mx-auto mt-[40px]" arrow>
       Try it out
      </Button>
    </div>
  );
};

export default Console;
