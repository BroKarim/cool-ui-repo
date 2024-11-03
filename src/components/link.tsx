import { cn } from "@/lib/utils";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Link: React.FC<LinkProps> = ({ href, children, className = "" }) => (
  <a href={href} target="_blank" className={cn("w-fit font-medium hover:underline", className)}>
    {children}
  </a>
);

export default Link;
