import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import profilePhoto from "./me.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8
      bg-gradient-to-br from-neutral-950 from-50% to-indigo-800">
      <section className="about-me max-w-[80%] lg:max-w-[60%] xl:max-w-[40%] 2xl:max-w-[30%]">
        <h1 className="text-3xl text-center font-bold mb-8">Who is Keith Austin?</h1>
        <Image
          src={profilePhoto}
          alt=""
          width={144}
          height={144}
          className="rounded-full mx-auto mb-4"
        />
        <br />
        <p>
          Hi there! My name is Keith, and I am a software engineer from Maine. I am a 
          serial hobbyist and all around turbo-nerd, and I love dogs. 
        </p>
        <br />
        <p>
          I started learning to code when I was ten years old, after discovering Ruby.
          I fell in love instantly, and I&apos;ve never stopped learning. These days, my focus 
          is on JavaScript and Front-end development, but I also love game development, 
          systems-level work and I have even recently taken an interested in embedded 
          software. 
        </p>
        <h2 className="text-xl font-semibold text-center my-8">My Projects</h2>
      </section>
      <section className="projects-container grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3
        max-w-[95%] lg:max-w-[85%] xl:max-w-[75%] 2xl:max-w-[60%] mb-8">
        <ProjectCard>
          <h2 className="font-bold">WorldTree</h2>
          <br />
          <p>
            A framework for ECS architecture in Nim. A project I developed to learn more about
            data-oriented design, and because there wasn&apos;t already a robust ECS framework available
            for Nim. 
          </p>
          <br />
          <a href="https://github.com/keithaustin/worldtree" 
            className="absolute bottom-2 font-semibold underline hover:no-underline">
            Check out the code on GitHub!
          </a>
        </ProjectCard>
        <ProjectCard>
        <h2 className="font-bold">Blueberry</h2>
        <br />
          <p>
            A programming language interpreter written in JavaScript. This project was
            intended to help me learn more about how programming languages work under the
            hood. I&apos;ve also created a webapp that runs the interpreter on the client side,
            so you can play around with the language, no download required!
          </p>
          <br />
          <br />
          <a href="https://blueberry.keithaustin.dev/"
            className="absolute bottom-2 font-semibold underline hover:no-underline">
              Check out the live demo!
          </a>
        </ProjectCard>
        <ProjectCard>
          <h2 className="font-bold">Crappy Bird</h2>
          <br />
          <p>
            This was my first project both with Crystal and with SFML.
            This is a very simple Flappy Bird clone built on an Entity-Component-System
            architecture. It is not the most sophisticated implementation, but I intend
            to work on further projects with this toolset and I am very excited by what
            can be done in Crystal.
          </p>
          <br />
          <br />
          <a href="https://github.com/keithaustin/crappy-bird"
            className="absolute bottom-2 font-semibold underline hover:no-underline">
              Check out the code on GitHub!
          </a>
        </ProjectCard>
      </section>
      <section className="more-projects text-center">
        <h2 className="text-xl font-semibold mb-2">Want to see my other projects?</h2>
        <p>Visit my GitHub page to see all the cool stuff I&apos;ve been working on!</p>
        <br />
        <a className="underline hover:no-underline"
          href="https://github.com/keithaustin">
            keithaustin on GitHub
        </a>
      </section>
    </main>
  );
}
