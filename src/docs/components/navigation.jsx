import { twMerge } from "tailwind-merge";

const Navigation = ({ className, ...props }) => {
  return (
    <nav className={twMerge("w-fuil h-full", className)} {...props}>
      <ul>
        <li>
          <a href="/docs">Docs</a>
        </li>

        <li>
          <a href="/docs/components">Components</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
