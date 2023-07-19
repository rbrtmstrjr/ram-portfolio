export default function Feedback() {
  return (
    <article className="px-4 py-12" id="id4">
      <h1 className="text-2xl font-bold text-light-400 text-center">
        What My Clients Say To Me
      </h1>
      <div className="flex flex-col md:flex-row mt-4 gap-3">
        <div className="rounded-lg bg-white shadow-md p-6 w-full md:w-1/3 text-sm">
          <div className="flex items-center">
            <div className="w-1/5">
              <img
                src="./src/assets/images/user1.png"
                className="w-14 h-14 rounded-full"
              />
            </div>
            <div className="pl-4">
              <h1 className="font-bold text-lg text-light-400">
                Robert S. Maestro Jr.
              </h1>
              <h4 className=" text-gray-600">Web Designer - Manila</h4>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>

          <p className="mt-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium
          </p>
        </div>

        <div className="rounded-lg bg-white shadow-md border border-gray-500 p-6 w-full md:w-1/3 text-sm">
          <div className="flex items-center">
            <div className="w-1/5">
              <img
                src="./src/assets/images/user2.png"
                className="w-14 h-14 rounded-full"
              />
            </div>
            <div className="pl-4">
              <h1 className="font-bold text-lg text-light-400">
                Robert S. Maestro Jr.
              </h1>
              <h4 className=" text-gray-600">Web Designer - Manila</h4>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>

          <p className="mt-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium
          </p>
        </div>

        <div className="rounded-lg bg-white shadow-md p-6 w-full md:w-1/3 text-sm">
          <div className="flex items-center">
            <div className="w-1/5">
              <img
                src="./src/assets/images/user3.png"
                className="w-14 h-14 rounded-full"
              />
            </div>
            <div className="pl-4">
              <h1 className="font-bold text-lg text-light-400">
                Robert S. Maestro Jr.
              </h1>
              <h4 className=" text-gray-600">Web Designer - Manila</h4>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>

          <p className="mt-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium
          </p>
        </div>
      </div>
    </article>
  );
}
