import Link from "next/link";

interface NavItemProps {
  link: string;
  href: string;
  isSticky: boolean;
}

export const NavItem = ({ link, href, isSticky }: NavItemProps) => {
  return (
    <li className="ml-2">
      <Link href={href}>
        <div
          className={`font-medium text-lg block  ${
            isSticky ? "text-muted-foreground dark:text-white" : ""
          }`}
        >
          {link}
        </div>
      </Link>
    </li>
  );
};
