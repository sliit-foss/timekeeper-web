import ShellTabs from "./tabs";

const Installer = ({ library, dev = false }) => {
  return (
    <ShellTabs
      tabs={[
        { name: "npm", code: `npm install${dev ? " --save-dev" : ""} ${library}` },
        { name: "yarn", code: `yarn add${dev ? " --dev" : ""} ${library}` },
        { name: "pnpm", code: `pnpm add${dev ? " --save-dev" : ""} ${library}` }
      ]}
    />
  );
};

export default Installer;
