// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-4xl font-bold leading-10 text-black md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hey there, <br />
            I am {' '}
            <span className="text-[#054bad]">{personalData.name}</span>
            <br/>
            <span className="text-[#008080]">{personalData.designation}</span>
          </h1>
          
         

          <div className="my-8 flex items-center gap-5">
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-[#0a66c2] hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-[#171515] hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#054bad] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link 
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-[#008080] px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" 
              role="button" 
              target="_blank" 
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* Updated Right Side - Code Terminal */}
        <div className="order-1 lg:order-2 bg-black border border-[#2a2a2a] rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:border-violet-500/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]">
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#0d0d0d] border-b border-[#2a2a2a]">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="h-3.5 w-3.5 rounded-full bg-red-500"></div>
                <div className="h-3.5 w-3.5 rounded-full bg-yellow-500"></div>
                <div className="h-3.5 w-3.5 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs font-semibold text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/30">
                developer.js
              </span>
            </div>
          </div>

          {/* Code content */}
          <div className="px-4 lg:px-8 py-6 lg:py-8 bg-black">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">developer</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Vanshika Chanana</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              
              <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">Next.js</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">React.js</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Redux Toolkit</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Node.js</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Express.js</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">TypeScript</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">LangChain</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">PostgreSQL</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">toolsOwned:</span>
                <span className="text-orange-400">5</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">education:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">B.Tech CSE (8.5 CGPA)</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-emerald-400">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">toolsOwned</span>
                <span className="mr-2 text-amber-300">&gt;</span>
                <span className="text-orange-400">0</span>
                <span className="text-amber-300"> &amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.includes</span>
                <span className="text-gray-400">{'('}</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Next.js</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-gray-400">{')'}</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;