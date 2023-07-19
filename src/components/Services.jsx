import { CiMinimize1, CiWavePulse1, CiCompass1 } from "react-icons/ci";

export default function About() {
  return (
    <article
      className="p-4 md:px-32 py-8 md:py-14 bg-gradient-to-b from-light-100 to-light-300"
      id="id2"
    >
      <h1 className="text-2xl font-bold text-light-400">What I Do?</h1>
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <div className="w-full md:w-1/3 p-8 bg-light-100 rounded-lg border-t-light-400 border-t-4 flex flex-col gap-4">
          <CiMinimize1 className="text-7xl border p-3 rounded-2xl border-light-400 text-light-400" />
          <h2 className="font-bold text-light-400">SERVICES</h2>
          <p className="text-sm">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or
          </p>
        </div>

        <div className="w-full md:w-1/3 p-8 bg-white rounded-lg border-t-light-400 border-t-4 flex flex-col gap-4">
          <CiWavePulse1 className="text-7xl border p-3 rounded-2xl border-light-400 text-light-400" />
          <h2 className="font-bold text-light-400">SERVICES</h2>
          <p className="text-sm">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or
          </p>
        </div>

        <div className="w-full md:w-1/3 p-8 bg-light-100 rounded-lg border-t-light-400 border-t-4 flex flex-col gap-4">
          <CiCompass1 className="text-7xl border p-3 rounded-2xl border-light-400 text-light-400" />
          <h2 className="font-bold text-light-400">SERVICES</h2>
          <p className="text-sm">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or
          </p>
        </div>
      </div>
    </article>
  );
}
