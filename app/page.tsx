"use client";
import BlurText from "./components/BlurText/BlurText";
import Dock from "./components/Dock/Dock";
import FullPageAurora from "./components/FullPageAurora";
import Lanyard from "./components/Lanyard/Lanyard";
import { VscHome, VscFiles, VscAccount, VscSettingsGear, VscSend, VscLinkExternal, VscFile } from 'react-icons/vsc';
import GradientText from "./components/GradientText/GradientText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Image from "next/image";
import CircularText from "./components/CircularText/CircularText";
import ShinyText from "./components/ShinyText/ShinyText";
import ScrollReveal from "./components/ScrollReveal/ScrollReveal";
import Tabs from "./components/Tabs/Tabs";
import GitHubCalendar from "react-github-calendar";
import GitHubCalendarComponent from "./components/GithubCalendar";

export default function Home() {
  const items = [
    {
      icon: <VscHome size={18} />,
      label: 'Home',
      onClick: () => {
        const section = document.getElementById('section-1');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      icon: <VscAccount size={18} />, label: 'About me', onClick: () => {
        const section = document.getElementById('section-2');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      icon: <VscFiles size={18} />, label: 'Portfolio', onClick: () => {
        const section = document.getElementById('section-3');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    { icon: <VscSend size={18} />, label: 'Contact me', onClick: () => alert('Settings!') },
  ];
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FullPageAurora />

      {/* Navbar Start */}
      <div className="fixed top-0 left-0 w-full h-[68px] z-50 mt-5">
        <Dock
          items={items}
          panelHeight={48}
          baseItemSize={30}
          magnification={40}
          // distance={1000}
          className="bg-[#090F17] rounded-lg shadow-lg border-[0.5px] border-gray backdrop-blur-sm"
        />
      </div>
      {/* Navbar End */}

      {/* Section 1 Start */}
      <div className="container mx-auto">
        <div className="grid grid-cols-12" id="section-1">
          <div className="col-span-7 flex items-start justify-center flex-col gap-6">
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={true}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0}
              animateOpacity
              scale={0.5}
              threshold={0.2}
              delay={200}>

              <CircularText
                text="*FRONTEND*DEVELOPER"
                onHover="speedUp"
                spinDuration={20}
                className=""
              />
            </AnimatedContent>
            <BlurText
              text="Hello, I'm Tubagus Syahrijal Amri"
              delay={200}
              animateBy="words"
              direction="top"
              className=" text-5xl font-bold font-satoshi  drop-shadow-[0_0_30px_rgba(255,255,255,1)]"
            />
            <BlurText
              text="Building modern, responsive websites that drive digital innovation and user satisfaction."
              delay={200}
              animateBy="words"
              direction="top"
              className=" text-2xl font-satoshi drop-shadow-[0_0_30px_rgba(255,255,255,1)]"
            />
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0}
              animateOpacity
              scale={0.5}
              threshold={0.2}
              delay={200}
            >
              <div className="flex flex-row items-center gap-4 justify-start">
                <Image
                  src="/assets/icons/laravel.svg"
                  alt="Laravel"
                  width={50}
                  height={50}
                  className="hover:scale-125 transition-all duration-200"
                />
                <Image
                  src="/assets/icons/react.svg"
                  alt="Laravel"
                  width={50}
                  height={50}
                  className="hover:scale-125 transition-all duration-200"
                />
                <Image
                  src="/assets/icons/tailwind.svg"
                  alt="Laravel"
                  width={50}
                  height={50}
                  className="hover:scale-150 transition-all duration-200"
                />
              </div>
            </AnimatedContent>
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0}
              animateOpacity
              scale={0.5}
              threshold={0.2}
              delay={200}
            >
              <div className="flex flex-row items-center gap-4 justify-start">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  onclick={() => {
                    const section = document.getElementById('section-1');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                  }
                  showBorder={true}
                  className="text-xl font-satoshi font-medium px-4 py-1 mx-0 hover:scale-105 transition-transform duration-150"
                >
                  Portfolio <VscFiles size={18} className="ml-1 inline-block text-white mb-1" />
                </GradientText>
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={true}
                  className="text-xl font-satoshi font-medium px-4 py-1 mx-0 hover:scale-105 transition-transform duration-150"
                >
                  Let's connect <VscLinkExternal size={18} className="ml-2 inline-block text-white" />
                </GradientText>
              </div>
            </AnimatedContent>

          </div>
          <div className="col-span-5">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
      {/* Section 1 End */}

      {/* Section 2 Start */}
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={true}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        animateOpacity
        scale={0.5}
        threshold={1}
        delay={200}

      >
        <section className="container mx-auto flex justify-center items-center flex-col gap-10 mb-5" id="section-2">
          <div className="flex flex-col items-center justify-center gap-6 mb-10">
            <ShinyText text="About Me" disabled={false} speed={1.5} className='border border-gray-700 rounded-2xl px-2 py-0.5' />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-around gap-16">
            <div className="">
              <Image className="h-72 w-72 rounded-[200px] shadow-[0_0_88px_0_rgba(55,31,85,1)]" src="/assets/images/profile.JPG" width={300} height={300}
                alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="mb-5 text-4xl font-satoshi font-bold md:text-left text-white drop-shadow-[0_0_30px_rgba(255,255,255,1)]">
                You can call me <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Tebe</span>, or <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Bagus</span>—whichever you prefer.
              </h1>
              <h1 className="text-xl font-satoshi font-light text-center md:text-left text-white drop-shadow-[0_0_30px_rgba(255,255,255,1)]">
                Malang-based frontend developer passionate about crafting clean, functional solutions that blend design and technology. Focus on creating intuitive and visually engaging digital experiences, driven by curiosity and a love for solving real-world problems through code.
              </h1>
              <div className="flex flex-row items-center gap-6 justify-start mt-5">
                <div onClick={() => { window.open('https://github.com/bagussyahrijal', '_blank'); }} className="p-2 rounded-xl bg-gradient-to-r from-stone-800 via-zinc-800 to-neutral-900 opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-200 drop-shadow-[0_0_30px_rgba(255,255,255,1)]">
                  <Image
                    src="/assets/icons/github.svg"
                    alt="Github"
                    width={30}
                    height={30}
                    className=""
                  />
                </div>
                <div onClick={() => { window.open('https://www.linkedin.com/in/tubagus-syahrijal-amri-9b912a2a0/', '_blank'); }} className="p-2 rounded-xl bg-gradient-to-r from-stone-800 via-zinc-800 to-neutral-900 opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-200 drop-shadow-[0_0_30px_rgba(255,255,255,1)]">
                  <Image
                    src="/assets/icons/linkedin.svg"
                    alt="Linkedin"
                    width={30}
                    height={30}
                    className=""
                  />
                </div>
                <div onClick={() => { window.open('https://instagram.com/bagussyahrijal', '_blank'); }} className="p-2 rounded-xl bg-gradient-to-r from-stone-800 via-zinc-800 to-neutral-900 opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-200 drop-shadow-[0_0_30px_rgba(255,255,255,1)]">
                  <Image
                    src="/assets/icons/instagram.svg"
                    alt="Instagram"
                    width={30}
                    height={30}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
          <GitHubCalendarComponent />
        </section>
      </AnimatedContent>
      {/* Section 2 End */}

      {/* Section 3 Start */}
      <section className="container mx-auto flex justify-center items-center flex-col mt-24 mb-5" id="section-3">
        <ShinyText text="Portofolio" disabled={false} speed={1.5} className='border border-gray-700 rounded-2xl px-2 py-0.5' />
        <Tabs />
      </section>
      {/* Section 3  */}
    </div>
  );
}
