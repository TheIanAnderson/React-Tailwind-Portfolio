import Image from "next/image";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import ian from "../../public/ian-1.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ian Anderson's Portfolio</title>
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between text-black">
            <h1 className="text-xl font-burtons">developedbyIan</h1>
            <ul className="flex items-center">
              <li className="cursor-pointer text-2xl">
                <BsFillMoonStarsFill />
              </li>
              <li className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">
                <a href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-black text-center p-10">
            <h2 className="text-5xl py-2 text-cyan-500">Ian Anderson</h2>
            <h4 className="text-2xl py-2">Full Stack Developer</h4>
            <p className="text-m py-5 leading-8 text-gray-800">
              {" "}
              Seeking internship in 2024, my interest is in front end
              developement with utilizing these teachnologies:
              <br></br>
              <br></br>
              React | Node | Express | MongoDB | JavaScript
            </p>
            <div className="text-5xl flex justify-center gap-10 py-3 text-gray-600">
              <a href="#">
                <AiFillLinkedin />
              </a>
              <a href="#">
                <FaGithub />
              </a>
            </div>
            <div className="relative mx-auto">
              <Image src={ian} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
