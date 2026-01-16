"use client";
import { useState } from "react";
import BlurText from "./components/BlurText/BlurText";
import Dock from "./components/Dock/Dock";
import FullPageAurora from "./components/FullPageAurora";
import Lanyard from "./components/Lanyard/Lanyard";
import { VscHome, VscFiles, VscAccount, VscSettingsGear, VscSend, VscLinkExternal, VscFile, VscMail, VscLocation } from 'react-icons/vsc';
import GradientText from "./components/GradientText/GradientText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Image from "next/image";
import CircularText from "./components/CircularText/CircularText";
import ShinyText from "./components/ShinyText/ShinyText";
import ScrollReveal from "./components/ScrollReveal/ScrollReveal";
import Tabs from "./components/Tabs/Tabs";
import GitHubCalendar from "react-github-calendar";
import GitHubCalendarComponent from "./components/GithubCalendar";
import Chatbot from "./components/Chatbot/Chatbot";


export default function Home() {
  // State untuk form
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  // Handler untuk input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handler untuk submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi form
    if (!formData.name || !formData.message) {
      alert("Please fill in all fields!");
      return;
    }

    const whatsappMessage = `Hi! My name is ${formData.name}\n${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const phoneNumber = "6281388692011";

    // Redirect ke WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

    // Reset form setelah submit
    setFormData({
      name: "",
      message: "",
    });
  };

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
    {
      icon: <VscSend size={18} />,
      label: 'Contact me',
      onClick: () => {
        const section = document.getElementById('section-4');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
  ];
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FullPageAurora />

      {/* Navbar Start */}
      <div className="fixed top-0 left-0 w-full h-auto z-50 mt-3 md:mt-5 px-4">
        <Dock
          items={items}
          panelHeight={48}
          baseItemSize={30}
          magnification={40}
          className="bg-[#090F17] rounded-lg shadow-lg border-[0.5px] border-gray backdrop-blur-sm"
        />
      </div>
      {/* Navbar End */}

      {/* Section 1 Start */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 min-h-screen items-center py-16 sm:py-20 lg:py-0" id="section-1">
          <div className="lg:col-span-7 flex items-center lg:items-start justify-center flex-col gap-4 sm:gap-5 lg:gap-7 order-2 lg:order-1 w-full">
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
              <div className="hidden md:flex md:justify-center lg:justify-start w-full">
                <CircularText
                  text="*FRONTEND*DEVELOPER"
                  onHover="speedUp"
                  spinDuration={20}
                  className=""
                />
              </div>
            </AnimatedContent>

            <div className="w-full text-center lg:text-left">
              <BlurText
                text="Hello, I'm Tubagus Syahrijal Amri"
                delay={200}
                animateBy="words"
                direction="top"
                className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-satoshi drop-shadow-[0_0_30px_rgba(255,255,255,1)]"
              />
            </div>

            <BlurText
              text="Building modern, responsive websites that drive digital innovation and user satisfaction."
              delay={200}
              animateBy="words"
              direction="top"
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-satoshi drop-shadow-[0_0_30px_rgba(255,255,255,1)] text-center lg:text-left w-full max-w-xl sm:max-w-2xl mx-auto lg:mx-0"
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
              <div className="flex flex-row items-center gap-4 md:gap-5 lg:gap-6 justify-center lg:justify-start w-full">
                <Image
                  src="/assets/icons/laravel.svg"
                  alt="Laravel"
                  width={50}
                  height={50}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[50px] lg:h-[50px] hover:scale-125 transition-all duration-200"
                />
                <Image
                  src="/assets/icons/react.svg"
                  alt="React"
                  width={50}
                  height={50}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[50px] lg:h-[50px] hover:scale-125 transition-all duration-200"
                />
                <Image
                  src="/assets/icons/tailwind.svg"
                  alt="Tailwind"
                  width={50}
                  height={50}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[50px] lg:h-[50px] hover:scale-125 transition-all duration-200"
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
              <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 justify-center lg:justify-start w-full">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  onclick={() => {
                    const section = document.getElementById('section-3');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  showBorder={true}
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-satoshi font-medium px-5 md:px-6 py-2.5 md:py-3 hover:scale-105 transition-transform duration-150 w-full sm:w-auto text-center whitespace-nowrap max-w-[200px] sm:max-w-none"
                >
                  Portfolio <VscFiles size={16} className="ml-1 inline-block text-white mb-0.5 md:w-[18px] md:h-[18px]" />
                </GradientText>
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={true}
                  onclick={() => {
                    const section = document.getElementById('section-4');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-satoshi font-medium px-5 md:px-6 py-2.5 md:py-3 hover:scale-105 transition-transform duration-150 w-full sm:w-auto text-center whitespace-nowrap max-w-[200px] sm:max-w-none"
                >
                  Let's connect <VscLinkExternal size={16} className="ml-1 inline-block text-white mb-0.5 md:w-[18px] md:h-[18px]" />
                </GradientText>
              </div>
            </AnimatedContent>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center w-full h-full min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-0">
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
        <section className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-center items-center flex-col gap-6 sm:gap-8 lg:gap-10 mb-5 py-8 sm:py-12 lg:py-20" id="section-2">
          <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-10">
            <ShinyText text="About Me" disabled={false} speed={1.5} className='border border-gray-700 rounded-2xl px-2 py-0.5' />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-around gap-6 sm:gap-8 lg:gap-16 w-full">
            <div className="flex-shrink-0">
              <Image
                className="h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 lg:h-72 lg:w-72 rounded-full shadow-[0_0_88px_0_rgba(55,31,85,1)]"
                src="/assets/images/profile.JPG"
                width={300}
                height={300}
                alt="Profile"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="mb-3 sm:mb-4 lg:mb-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-satoshi font-bold text-center md:text-left text-white drop-shadow-[0_0_30px_rgba(255,255,255,1)]">
                You can call me <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Tebe</span>, or <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Bagus</span>—whichever you prefer.
              </h1>
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-satoshi font-light text-center md:text-left text-white drop-shadow-[0_0_30px_rgba(255,255,255,1)]">
                Malang-based frontend developer passionate about crafting clean, functional solutions that blend design and technology. Focus on creating intuitive and visually engaging digital experiences, driven by curiosity and a love for solving real-world problems through code.
              </h1>
              <div className="flex flex-row items-center gap-3 sm:gap-4 lg:gap-6 justify-center md:justify-start mt-3 sm:mt-4 lg:mt-5">
                <div onClick={() => { window.open('https://github.com/bagussyahrijal', '_blank'); }} className="p-2 rounded-xl bg-gradient-to-r from-stone-800 via-zinc-800 to-neutral-900 opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-200 drop-shadow-[0_0_30px_rgba(255,255,255,1)] cursor-pointer">
                  <Image
                    src="/assets/icons/github.svg"
                    alt="Github"
                    width={24}
                    height={24}
                    className="w-6 h-6 md:w-[30px] md:h-[30px]"
                  />
                </div>
                <div onClick={() => { window.open('https://www.linkedin.com/in/tubagus-syahrijal-amri-9b912a2a0/', '_blank'); }} className="p-2 rounded-xl bg-gradient-to-r from-stone-800 via-zinc-800 to-neutral-900 opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-200 drop-shadow-[0_0_30px_rgba(255,255,255,1)] cursor-pointer">
                  <Image
                    src="/assets/icons/linkedin.svg"
                    alt="Linkedin"
                    width={24}
                    height={24}
                    className="w-6 h-6 md:w-[30px] md:h-[30px]"
                  />
                </div>
                <div onClick={() => { window.open('https://instagram.com/bagussyahrijal', '_blank'); }} className="p-2 rounded-xl bg-gradient-to-r from-stone-800 via-zinc-800 to-neutral-900 opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-200 drop-shadow-[0_0_30px_rgba(255,255,255,1)] cursor-pointer">
                  <Image
                    src="/assets/icons/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="w-6 h-6 md:w-[30px] md:h-[30px]"
                  />
                </div>
              </div>
            </div>
          </div>
            <div className="w-full overflow-x-auto hidden sm:block">
            <GitHubCalendarComponent />
            </div>
        </section>
      </AnimatedContent>
      {/* Section 2 End */}

      {/* Section 3 Start */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-center items-center flex-col mt-8 sm:mt-12 lg:mt-24 mb-5" id="section-3">
        <ShinyText text="Portofolio" disabled={false} speed={1.5} className='border border-gray-700 rounded-2xl px-2 py-0.5' />
        <Tabs />
      </section>
      {/* Section 3 End */}

      {/* Section 4 Start - Contact Section */}
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={true}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        animateOpacity
        scale={0.5}
        threshold={0.5}
        delay={200}
      >
        <section className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-center items-center flex-col mt-8 sm:mt-12 lg:mt-24 mb-8 sm:mb-12 lg:mb-20" id="section-4">
          <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-10">
            <ShinyText
              text="Contact Me"
              disabled={false}
              speed={1.5}
              className='border border-gray-700 rounded-2xl px-2 py-0.5'
            />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-satoshi text-center text-white drop-shadow-[0_0_30px_rgba(255,255,255,1)]">
              Let's Work Together
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-satoshi text-center text-gray-400 max-w-2xl px-4">
              Have a project in mind or just want to chat? Feel free to reach out!
            </p>
          </div>

          <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              {/* Email Card */}
              <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={true}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0}
                animateOpacity
                scale={0.9}
                threshold={0.2}
                delay={100}
              >
                <div className="group bg-gradient-to-br from-[#10132F] to-[#1A1D40] rounded-2xl p-4 md:p-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300 cursor-pointer"
                  onClick={() => window.location.href = 'mailto:tubagussyahrijalamri@gmail.com'}
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="p-2.5 sm:p-3 lg:p-4 bg-gradient-to-r from-[#40ffaa]/20 to-[#4079ff]/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <VscMail size={20} className="sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#40ffaa]" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white font-satoshi mb-1">Email</h3>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-400 break-all">bagussyahrijal123@gmail.com</p>
                    </div>
                  </div>
                </div>
              </AnimatedContent>

              {/* Location Card */}
              <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={true}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0}
                animateOpacity
                scale={0.9}
                threshold={0.2}
                delay={200}
              >
                <div className="group bg-gradient-to-br from-[#10132F] to-[#1A1D40] rounded-2xl p-4 md:p-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="p-2.5 sm:p-3 lg:p-4 bg-gradient-to-r from-[#40ffaa]/20 to-[#4079ff]/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <VscLocation size={20} className="sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#4079ff]" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white font-satoshi mb-1">Location</h3>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-400">Malang, East Java, Indonesia</p>
                    </div>
                  </div>
                </div>
              </AnimatedContent>

              {/* Social Links */}
              <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={true}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0}
                animateOpacity
                scale={0.9}
                threshold={0.2}
                delay={300}
              >
                <div className="bg-gradient-to-br from-[#10132F] to-[#1A1D40] rounded-2xl p-4 md:p-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white font-satoshi mb-3 sm:mb-4">Connect With Me</h3>
                  <div className="flex gap-3 md:gap-4">
                    <div
                      onClick={() => window.open('https://github.com/bagussyahrijal', '_blank')}
                      className="p-2 sm:p-2.5 lg:p-3 bg-gradient-to-r from-stone-800 via-zinc-800 to-neutral-900 rounded-xl opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-200 cursor-pointer"
                    >
                      <Image src="/assets/icons/github.svg" alt="Github" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                    </div>
                    <div
                      onClick={() => window.open('https://www.linkedin.com/in/tubagus-syahrijal-amri-9b912a2a0/', '_blank')}
                      className="p-2 sm:p-2.5 lg:p-3 bg-gradient-to-r from-stone-800 via-zinc-800 to-neutral-900 rounded-xl opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-200 cursor-pointer"
                    >
                      <Image src="/assets/icons/linkedin.svg" alt="Linkedin" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                    </div>
                    <div
                      onClick={() => window.open('https://instagram.com/bagussyahrijal', '_blank')}
                      className="p-2 sm:p-2.5 lg:p-3 bg-gradient-to-r from-stone-800 via-zinc-800 to-neutral-900 rounded-xl opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-200 cursor-pointer"
                    >
                      <Image src="/assets/icons/instagram.svg" alt="Instagram" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            </div>

            {/* Contact Form */}
            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0}
              animateOpacity
              scale={0.9}
              threshold={0.2}
              delay={200}
            >
              <div className="bg-gradient-to-br from-[#10132F] to-[#1A1D40] rounded-2xl p-5 sm:p-6 lg:p-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300">
                <form className="space-y-3 sm:space-y-4 lg:space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-white font-satoshi font-semibold mb-2 text-xs sm:text-sm lg:text-base">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#1A1D40] text-white text-xs sm:text-sm lg:text-base rounded-xl border border-gray-700 focus:border-[#40ffaa] focus:outline-none transition-colors font-satoshi"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-satoshi font-semibold mb-2 text-xs sm:text-sm lg:text-base">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#1A1D40] text-white text-xs sm:text-sm lg:text-base rounded-xl border border-gray-700 focus:border-[#40ffaa] focus:outline-none transition-colors font-satoshi resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white font-satoshi font-semibold py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base rounded-xl hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2"
                  >
                    <VscSend size={14} className="sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px]" />
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            </AnimatedContent>
          </div>
        </section>
      </AnimatedContent>
      {/* Section 4 End */}

      {/* Footer */}
      <footer className="border-t border-gray-800 py-4 sm:py-6 lg:py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 font-satoshi text-xs sm:text-sm lg:text-base">
            © 2025 Tubagus Syahrijal Amri. All rights reserved.
          </p>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
}
