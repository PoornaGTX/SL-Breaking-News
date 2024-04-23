import { links } from '@/util/links';
import { navLinkType } from '@/util/type';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="max-w-7xl bg-neutral-300 mx-auto flex justify-center gap-x-5 mt-5 py-4 sticky top-0">
      {links.map((link: navLinkType) => {
        return (
          <Link href={link.href} className="text-xl">
            {link.lable}
          </Link>
        );
      })}
    </div>
  );
};

export default NavBar;
