import { Link } from "react-router-dom";

const NavBarLinks = ({ title, dLink }: { title: string; dLink: string }) => {
  return (
    <li>
      <Link
        className="text-gray-500 transition hover:text-gray-500/75"
        to={dLink}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavBarLinks;
