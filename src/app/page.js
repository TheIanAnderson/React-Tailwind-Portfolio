import Image from "next/image";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import ian from "../../public/ian-1.png";
import rocket from "../../public/rocket.png";
import weather from "../../public/weather.png";
import note from "../../public/note.png";
import password from "../../public/password.png";
import { IoIosRocket } from "react-icons/io";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Ian Anderson's Portfolio</title>
      </Head>
      <main className="  bg-slate-50 px-10 md:px-10 lg:px-60">
        <section className="min-h-screen">
          <nav className="py-10 mb-5 flex justify-between text-black">
            <h1 className="text-red-400 text-md font-burtons">
              Created by ian.
            </h1>
            <ul className="flex items-center">
              <li className="cursor-pointer text-2xl">
                <BsFillMoonStarsFill />
              </li>
              <li className="bg-gradient-to-r from-cyan-400 to-teal-400 text-white px-4 py-2 rounded-md ml-8">
                <a href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-black text-center p-10">
            <h2 className="text-6xl font-semibold py-2 bg-gradient-to-r from-cyan-400 to-yellow-400 text-transparent bg-clip-text">
              Ian Anderson
            </h2>
            <h4 className=" font-normal text-2xl py-2 text-stone-500">
              Full Stack Developer
            </h4>
            <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-200 bg-white hover:shadow-2xl hover:shadow-yellow-200 shadow-lg  p-10 rounded-3xl my-10">
              <div className="py-5 flex justify-center mx-auto">
                <Image
                  className="shadow-2xl rounded-full"
                  width={300}
                  height={300}
                  src={ian}
                />
              </div>
              <p className="text-m py-5 leading-8 text-gray-800 md:text-md max-w-md mx-auto">
                {" "}
                Welcome!
                <br />
                Seeking internship in 2024, my interest is in front end
                developement and design, utilizing industry standard
                teachnologies.
                <br></br>
              </p>
              <div className="text-5xl flex justify-center gap-10 py-3 text-yellow-400">
                <a href="#">
                  <AiFillLinkedin />
                </a>
                <a href="#">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center p-10">
            <h3 className="text-3xl font-semibold py-1 text-stone-800">
              <span className="text-stone-400 font-normal p-3">{"<"}</span>
              Project Portfolio
              <span className="text-stone-400 font-normal p-1">{"/>"}</span>
            </h3>
            <p className="text-stone-600 font-medium mt-3">
              Technologies Utilized:
            </p>
            <p className=" font-medium text-lg py-2 leading-8 bg-gradient-to-r from-red-400 to-violet-400 text-transparent bg-clip-text">
              React <span className="text-stone-400 text-sm">•</span> Node{" "}
              <span className="text-stone-400 text-sm">•</span> Express{" "}
              <span className="text-stone-400 text-sm">•</span> MongoDB{" "}
              <span className="text-stone-400 text-sm">•</span> JavaScript
              <br></br>
              HTML <span className="text-stone-400 text-sm">•</span> CSS{" "}
              <span className="text-stone-400 text-sm">•</span> Tailwind{" "}
              <span className="text-stone-400 text-sm">•</span> Materialize{" "}
              <span className="text-stone-400 text-sm">•</span> Sequelize
            </p>
          </div>
          <div className="xl:flex gap-20">
            <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-200 hover:shadow-2xl hover:shadow-red-500 bg-white text-black text-center shadow-2xl p-10 rounded-xl my-10 ">
              <div className="flex items-center justify-center">
                <Image width={200} src={rocket} />
              </div>
              <h3 className="text-lg font-semibold pt-8 pb-2">
                Restaurant Express
              </h3>
              <p className="xl:hidden py-2 md:text-md max-w-md mx-auto m">
                Restaurant Express is a RESTful website for handling food orders
                from user input! It utilizes SQL, Sequelize, Materialize-CSS,
                Javascript, and OAuth. With these technologies combined, you'll
                have a smooth user experience as you navigate through signing
                up, logging in, and ordering from the menu!
              </p>
              <h4 className=" underline font-semibold py-4 text-teal-500">
                <a
                  href="https://restaurant-express-c9c955225096.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here to Blast into Flavor!
                </a>
              </h4>
            </div>
            <div className=" transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-200 bg-white hover:shadow-2xl hover:shadow-cyan-500 shadow-lg text-black text-center  p-10 rounded-xl my-10">
              <div className="flex items-center justify-center">
                <Image width={200} src={weather} />
              </div>
              <h3 className="text-lg font-semibold pt-8 pb-2">
                Traveler's Weather App
              </h3>
              <p className="xl:hidden py-2 md:text-md max-w-md mx-auto">
                A frequent flyer's favorite app! In this challenge I learned
                about how API calls work, and effectivly implemented them to
                populate useful weather data for someone who wants to check the
                forcast for multiple cities at a time. Enjoy checking what your
                current weather is and the five day forcast!
              </p>
              <h3 className=" underline font-semibold text-teal-500">
                <a
                  href="https://theiananderson.github.io/Weather-app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here to Check on the Sky!
                </a>
              </h3>
              <p className="text-gray-300 py-1"></p>
              <p className="text-gray-300 py-1"></p>
              <p className="text-gray-300 py-1"></p>
            </div>
            <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-200 bg-white hover:shadow-2xl shadow-lg hover:shadow-yellow-600 text-black text-center p-10 rounded-xl my-10">
              <div className="flex items-center justify-center">
                <Image width={300} src={note} />
              </div>
              <h3 className="text-lg font-semibold pt-8 pb-2">
                Personal Note Taker
              </h3>
              <p className="xl:hidden py-2 md:text-md max-w-md mx-auto">
                Got something to jot down? Well by all means, use my Note Taker!
                This project's focus for me was learning how to handle routing
                in an application, a database, as well as session data and data
                persistence for something a user had previously saved to still
                be there after the page reloads. What are you waiting for? Give
                it a try!
              </p>
              <h3 className=" underline font-semibold text-teal-500">
                <a
                  href="https://note-taker-pro-plus-92742ea17e61.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here to Take Note!
                </a>
              </h3>
              <p className="text-gray-300 py-1"></p>
              <p className="text-gray-300 py-1"></p>
              <p className="text-gray-300 py-1"></p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3></h3>
          </div>
        </section>
      </main>
    </div>
  );
}
