import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggler";
function Header() {
  return (
    <header>
      <Link href="/">
        <Image 
        alt="disney logo"
        src="https://links.papareact.com/a943ae"
        width={120}
        height={100}
        className="cursor-pointer invert"
        />

      
      </Link>
      <div className="flex space-x-2 ">
        {/* GenreDropdown */}
        {/* SearchInput */}
        {/* Themetoggler */}
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
