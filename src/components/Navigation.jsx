import {
  CiHome,
  CiLocationArrow1,
  CiUser,
  CiShare2,
  CiStar,
} from "react-icons/ci";

export default function Navigation() {
  return (
    <nav className="flex relative justify-center z-50">
      <div className="w-60 p-2 text-light-400 bg-light-300 flex gap-4 text-xl fixed rounded-full justify-center bottom-4 backdrop-blur bg-opacity-40">
        <a
          href="#id1"
          className="hover:bg-light-400 rounded-md p-1 hover:text-white"
        >
          <CiHome />
        </a>
        <a
          href="#id2"
          className="hover:bg-light-400 rounded-md p-1 hover:text-white"
        >
          <CiLocationArrow1 />
        </a>
        <a
          href="#id3"
          className="hover:bg-light-400 rounded-md p-1 hover:text-white"
        >
          <CiUser />
        </a>
        <a
          href="#id4"
          className="hover:bg-light-400 rounded-md p-1 hover:text-white"
        >
          <CiStar />
        </a>

        <a
          href="#id5"
          className="hover:bg-light-400 rounded-md p-1 hover:text-white"
        >
          <CiShare2 />
        </a>
      </div>
    </nav>
  );
}
