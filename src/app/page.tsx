'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative flex flex-col gap-16">
      <nav className="fixed top-0 z-50 w-full bg-black px-4">
        <div className="m-auto flex w-full max-w-[1280px] items-center">
          <Link
            onMouseDown={(event) => event.preventDefault()}
            className="block items-center justify-center border-y-2 border-transparent p-4 text-center text-xs lowercase transition-all hover:border-b-black focus:z-50 focus:border-black focus:ring-0 focus:outline-0"
            href="#home"
          >
            <span className="font-bold">Hussein Fawaz</span>
          </Link>
          <Link
            onMouseDown={(event) => event.preventDefault()}
            className="ml-auto block items-center justify-center border-y-2 border-transparent p-4 text-center text-xs lowercase transition-all hover:border-b-black focus:z-50 focus:border-black focus:ring-0 focus:outline-0"
            href="#experience"
          >
            Experience
          </Link>
          <Link
            onMouseDown={(event) => event.preventDefault()}
            className="block items-center justify-center border-y-2 border-transparent p-4 text-center text-xs lowercase transition-all hover:border-b-black focus:z-50 focus:border-black focus:ring-0 focus:outline-0"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            onMouseDown={(event) => event.preventDefault()}
            className="block items-center justify-center border-y-2 border-transparent p-4 text-center text-xs lowercase transition-all hover:border-b-black focus:z-50 focus:border-black focus:ring-0 focus:outline-0"
            href="#contact"
          >
            Contact
          </Link>
        </div>
      </nav>
      <section
        id="home"
        className="flex h-full min-h-screen w-full items-center justify-center p-4"
      >
        <div className="m-auto flex w-full max-w-[1280px] flex-col gap-8">
          <h1 className="text-center text-5xl lowercase md:text-8xl">
            Hussein Fawaz
            <br />
            Full-Stack Software Developer
          </h1>
          <h2 className="text-center text-2xl lowercase md:text-5xl">
            4 Years Professional Experience Designing and Building Exceptional
            User Experiences
          </h2>
        </div>
      </section>
      <section
        id="experience"
        className="flex h-full min-h-screen w-full items-center justify-center p-4"
      >
        <div className="m-auto flex w-full max-w-[1280px] flex-col items-center justify-center gap-8">
          <h1 className="text-center text-5xl lowercase md:text-8xl">
            Experience
          </h1>
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-center text-2xl lowercase md:text-5xl">
                Code Ninjas
              </h2>
              <h3 className="text-center">Instructor</h3>
              <h3 className="text-center">Burnaby, BC</h3>
              <h3 className="text-center">August 2025 - Present</h3>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-center text-2xl lowercase md:text-5xl">
                Jenna Coles Design
              </h2>
              <h3 className="text-center">Full-Stack Software Developer</h3>
              <h3 className="text-center">Toronto, ON</h3>
              <h3 className="text-center">June 2022 - Present</h3>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-center text-2xl lowercase md:text-5xl">
                Switchboard
              </h2>
              <h3 className="text-center">Web Software Developer</h3>
              <h3 className="text-center">Vancouver, BC</h3>
              <h3 className="text-center">January 2021 - December 2023</h3>
            </div>
          </div>
          <Link
            onMouseDown={(event) => event.preventDefault()}
            className="block items-center justify-center self-center rounded border border-white bg-black p-4 text-center text-white lowercase transition-all hover:bg-white hover:text-black focus:z-50 focus:border-black focus:ring-0 focus:outline-0"
            href="https://docs.google.com/document/d/1556_mPAxeexguFJGg-k6Kg3q0U8zdiHWkyLg1vZ53f4/export?format=pdf"
            target="_blank"
            download
          >
            Download Resume
          </Link>
        </div>
      </section>
      <section
        id="projects"
        className="flex h-full min-h-screen w-full items-center justify-center p-4"
      >
        <div className="m-auto flex w-full max-w-[1280px] flex-col gap-8">
          <h1 className="text-center text-5xl lowercase md:text-8xl">
            Projects
          </h1>
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex w-full flex-col gap-8">
              <video
                className="w-full bg-black"
                src="/rembump_demo_new.mp4"
                width=""
                height=""
                muted
                controls
                autoPlay
                loop
                playsInline
              ></video>
              <div className="flex flex-col gap-4">
                <h2 className="text-center text-2xl lowercase md:text-5xl">
                  RemBump
                </h2>
                <h3 className="text-center">
                  the smart music therapy experience
                </h3>
              </div>
              <Link
                onMouseDown={(event) => event.preventDefault()}
                className="block items-center justify-center self-center rounded border border-white bg-black p-4 text-center text-white lowercase transition-all hover:bg-white hover:text-black focus:z-50 focus:border-black focus:ring-0 focus:outline-0"
                href="https://www.rembump.com/"
                target="_blank"
              >
                Visit RemBump
              </Link>
            </div>
            <div className="flex w-full flex-col gap-8">
              <video
                className="w-full bg-black"
                src="/noureddinefeathers_demo_new.mp4"
                width=""
                height=""
                muted
                controls
                autoPlay
                loop
                playsInline
              ></video>
              <div className="flex flex-col gap-4">
                <h2 className="text-center text-2xl lowercase md:text-5xl">
                  Noureddine Feathers
                </h2>
                <h3 className="text-center">
                  shop high quality ostrich feather dusters
                </h3>
              </div>
              <Link
                onMouseDown={(event) => event.preventDefault()}
                className="block items-center justify-center self-center rounded border border-white bg-black p-4 text-center text-white lowercase transition-all hover:bg-white hover:text-black focus:z-50 focus:border-black focus:ring-0 focus:outline-0"
                href="https://www.noureddinefeathers.com/"
                target="_blank"
              >
                Visit Noureddine Feathers
              </Link>
            </div>
            <div className="flex w-full flex-col gap-8">
              <video
                className="w-full bg-black"
                src="/filmfest_demo_new.mp4"
                width=""
                height=""
                muted
                controls
                autoPlay
                loop
                playsInline
              ></video>
              <div className="flex flex-col gap-4">
                <h2 className="text-center text-2xl lowercase md:text-5xl">
                  FilmFest
                </h2>
                <h3 className="text-center">
                  track and rate movies with your friends
                </h3>
              </div>
              <Link
                onMouseDown={(event) => event.preventDefault()}
                className="block items-center justify-center self-center rounded border border-white bg-black p-4 text-center text-white lowercase transition-all hover:bg-white hover:text-black focus:z-50 focus:border-black focus:ring-0 focus:outline-0"
                href="https://filmfest-2025.vercel.app/"
                target="_blank"
              >
                Visit FilmFest
              </Link>
            </div>
            <div className="flex w-full flex-col gap-8">
              <video
                className="w-full bg-black"
                src="/cellystats_demo_new.mp4"
                width=""
                height=""
                muted
                controls
                autoPlay
                loop
                playsInline
              ></video>
              <div className="flex flex-col gap-4">
                <h2 className="text-center text-2xl lowercase md:text-5xl">
                  cellystats
                </h2>
                <h3 className="text-center">
                  view and compare hockey player statistics
                </h3>
              </div>
              <Link
                onMouseDown={(event) => event.preventDefault()}
                className="block items-center justify-center self-center rounded border border-white bg-black p-4 text-center text-white lowercase transition-all hover:bg-white hover:text-black focus:z-50 focus:border-black focus:ring-0 focus:outline-0"
                href="https://cellystats.vercel.app/"
                target="_blank"
              >
                Visit CellyStats
              </Link>
            </div>
            <div className="flex w-full flex-col gap-8">
              <video
                className="w-full bg-black"
                src="/quickreport_demo_new.mp4"
                width=""
                height=""
                muted
                controls
                autoPlay
                loop
                playsInline
              ></video>

              <div className="flex flex-col gap-4">
                <h2 className="text-center text-2xl lowercase md:text-5xl">
                  QuickReport
                </h2>
                <h3 className="text-center">
                  convert CSV files to polished PDF files
                </h3>
              </div>
              <Link
                onMouseDown={(event) => event.preventDefault()}
                className="block items-center justify-center self-center rounded border border-white bg-black p-4 text-center text-white lowercase transition-all hover:bg-white hover:text-black focus:z-50 focus:border-black focus:ring-0 focus:outline-0"
                href="https://quickreport-v1.vercel.app/"
                target="_blank"
              >
                Visit QuickReport
              </Link>
            </div>
            <div className="flex w-full flex-col gap-8">
              <video
                className="w-full bg-black"
                src="/quickchart_demo_new.mp4"
                width=""
                height=""
                muted
                controls
                autoPlay
                loop
                playsInline
              ></video>
              <div className="flex flex-col gap-4">
                <h2 className="text-center text-2xl lowercase md:text-5xl">
                  QuickChart
                </h2>
                <h3 className="text-center">
                  generate bar, line, and area charts and save as PNG or JPG
                </h3>
              </div>
              <Link
                onMouseDown={(event) => event.preventDefault()}
                className="block items-center justify-center self-center rounded border border-white bg-black p-4 text-center text-white lowercase transition-all hover:bg-white hover:text-black focus:z-50 focus:border-black focus:ring-0 focus:outline-0"
                href="https://quickchart-v1.vercel.app/"
                target="_blank"
              >
                Visit QuickChart
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="flex h-full min-h-screen w-full items-center justify-center p-4"
      >
        <div className="m-auto flex w-full max-w-[1280px] flex-col gap-8">
          <h1 className="text-center text-5xl lowercase md:text-8xl">Contact</h1>
            <div className="flex flex-col gap-8">
              <h2 className="text-center text-2xl lowercase md:text-5xl">
                Email
              </h2>
              <Link
                onMouseDown={(event) => event.preventDefault()}
                className="block items-center justify-center self-center rounded border border-white bg-black p-4 text-center text-white lowercase transition-all hover:bg-white hover:text-black focus:z-50 focus:border-black focus:ring-0 focus:outline-0"
                href="mailto: hsnfwz99@gmail.com"
                target="_blank"
              >
                hsnfwz99@gmail.com
              </Link>
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="text-center text-2xl lowercase md:text-5xl">
                LinkedIn
              </h2>
              <Link
                onMouseDown={(event) => event.preventDefault()}
                className="block items-center justify-center self-center rounded border border-white bg-black p-4 text-center text-white lowercase transition-all hover:bg-white hover:text-black focus:z-50 focus:border-black focus:ring-0 focus:outline-0"
                href="https://www.linkedin.com/in/hsnfwz/"
                target="_blank"
              >
                /in/hsnfwz
              </Link>
            </div>
        </div>
      </section>
      <footer className="m-auto w-full max-w-[1280px] p-4">
        <h2 className="text-xs lowercase text-center">&copy; 2025 Hussein Fawaz</h2>
      </footer>
    </main>
  );
}
