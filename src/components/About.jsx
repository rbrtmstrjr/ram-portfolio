import user2 from "../images/pink-girl.png";

export default function About() {
  return (
    <article className="flex flex-col md:flex-row" id="id3">
      <aside className="bg-light-500 w-full md:w-2/5 pl-4 md:pl-32 pt-4 md:pt-12 flex items-end relative">
        <img
          src={user2}
          alt="girl-banner"
          className="w-3/4 md:w-full z-10 grayscale opacity-50"
        />
        <img
          src={user2}
          alt="girl-banner"
          className="w-3/4 ml-10 z-10 absolute"
        />
      </aside>
      <aside className="w-full md:w-3/5 pr-4 md:pr-32 py-12 md:py-12 pl-4 md:pl-12 bg-light-100">
        <div className="w-full p-6 bg-white rounded-lg border-t-light-400 border-t-4 flex flex-col gap-2 shadow-sm">
          <h2 className="text-2xl font-bold text-light-400">Hello 👋</h2>
          <p className="text-sm">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate
          </p>
        </div>
        <ol className="border-l border-light-400 border-dashed pl-4 ml-8 md:ml-12 mt-8">
          <li>
            <div className="flex flex-start items-center">
              <div className="bg-light-400 w-4 h-4 flex items-center justify-center rounded-full -ml-6 mr-7 -mt-2"></div>
              <h4 className="font-bold text-light-400 -mt-2 font-custom">
                Work 2
              </h4>
            </div>
            <div className="ml-6 mb-6">
              <h3 className="text-primary text-sm">4 February, 2022</h3>
              <p className="mt-2 mb-4 p-6 bg-white rounded-md text-sm shadow-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </li>
          <li>
            <div className="flex flex-start items-center">
              <div className="bg-light-400 w-4 h-4 flex items-center justify-center rounded-full -ml-6 mr-7 -mt-2"></div>
              <h4 className="font-bold text-light-400 -mt-2 font-custom">
                Work 1
              </h4>
            </div>
            <div className="ml-6 mb-6">
              <h3 className="text-primary text-sm">12 January, 2022</h3>
              <p className="mt-2 mb-4 p-6 bg-white rounded-md text-sm shadow-sm">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque
              </p>
            </div>
          </li>
          <li>
            <div className="border border-light-400 bg-light-100 w-4 h-4 flex items-center justify-center rounded-full -ml-6 mr-7 -mt-2"></div>
          </li>
        </ol>
      </aside>
    </article>
  );
}
