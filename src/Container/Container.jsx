import { cn } from "@/lib/utils";
const Container = ({ children, className }) => {
  return (
    <div className={cn("mx-auto w-full max-w-[1406px] px-2 sm:px-2 lg:px-2", className)}>
      {children}
    </div>
  );
};

export default Container;