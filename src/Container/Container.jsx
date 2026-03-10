import { cn } from "@/lib/utils";
const Container = ({ children, className }) => {
  return (
    <div className={cn("mx-auto w-full max-w-[1406px] px-4 sm:px-6 lg:px-10", className)}>
      {children}
    </div>
  );
};

export default Container;