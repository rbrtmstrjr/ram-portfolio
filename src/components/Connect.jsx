import {
  BiLogoFacebookSquare,
  BiLogoInstagramAlt,
  BiSolidHeart,
} from "react-icons/bi";

export default function Connect() {
  return (
    <article className="flex flex-col md:flex-row" id="id5">
      <aside className="bg-light-100 w-full md:w-3/5 pl-4 md:pl-32 py-12 pr-4 md:pr-8 flex flex-col gap-4 text-sm">
        <h1 className="text-2xl font-bold text-light-400">Send Me A Message</h1>
        <div className="flex gap-4">
          <input
            type="text"
            className="p-3 rounded-lg w-1/2 bg-white focus:outline-light-400"
            placeholder="Name"
          />
          <input
            type="text"
            className="p-3 rounded-lg w-1/2 bg-white focus:outline-light-400"
            placeholder="Email"
          />
        </div>
        <textarea
          type="text"
          className="p-3 rounded-lg w-full bg-white focus:outline-light-400"
          placeholder="Message"
        />
        <button className="text-white font-semibold tracking-widest w-36 p-2 bg-light-200 rounded-lg">
          SEND
        </button>
      </aside>

      <aside className="w-full md:w-2/5 bg-light-500 md:pr-32 py-12 pl-4 md:pl-8 text-white flex flex-col gap-8 tracking-widest">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">CONTACT INFORMATION</h3>
          <h3 className="text-sm">Phone: 09465410631</h3>
          <h3 className="text-sm">Email: abegail@gmail.com</h3>
        </div>
        <div className="flex text-4xl gap-2">
          <BiLogoFacebookSquare />
          <BiLogoInstagramAlt />
          <BiSolidHeart />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm">ROSE ABEGAIL PORTFOLIO 2023</h3>
          <h3 className="text-sm font-bold mb-8 md:mb-0">MADE WITH LOVE</h3>
        </div>
      </aside>
    </article>
  );
}
