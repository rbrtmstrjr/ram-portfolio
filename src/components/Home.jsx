import {
  BiLogoFacebookSquare,
  BiLogoInstagramAlt,
  BiSolidMoon,
} from "react-icons/bi";

export default function Home() {
  return (
    <section className="p-4 md:px-32 py-6 bg-light-100 relative -z-20" id="id1">
      <div className="absolute w-40 h-40 md:w-96 md:h-96 bg-superlight rounded-full -left-12 md:-left-40 -top-12 md:-top-32 -z-10"></div>
      <div className="absolute w-20 md:w-32 h-20 md:h-32 bg-superlight rounded-full right-8 md:right-32 top-4 md:top-20 -z-10"></div>
      <nav className="flex justify-between w-full font-black text-light-400 z-10 text-xl">
        <h3>RAM</h3>
        <div className="flex justify-end text-2xl gap-4 items-center">
          <BiLogoFacebookSquare />
          <BiLogoInstagramAlt />
          <BiSolidMoon />
        </div>
      </nav>
      <main className="py-6 flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center">
          <h1 className="text-4xl font-hand">Hi Im</h1>
          <h1 className="text-5xl text-light-200 font-black">
            ROSE <span className="text-light-400">ABEGAIL</span>
          </h1>
          <p className="text-sm">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface.
          </p>
          <div className="flex gap-4">
            <button className="text-white font-semibold tracking-widest w-36 p-2 bg-light-200 rounded-lg">
              VIEW CV
            </button>
            <button className="text-light-400 font-semibold tracking-widest w-36 p-2 bg-white rounded-lg">
              CONNECT
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-end items-center relative">
          <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-white rounded-full -z-10"></div>
          <img
            src="./src/assets/images/girl_banner.png"
            alt="girl-banner"
            className="w-3/4 z-10"
          />
        </div>
      </main>
    </section>
  );
}
