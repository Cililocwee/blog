import React from "react";

export default function AboutMe() {
  return (
    <div className="mb-auto flex flex-col align-items-center pt-3 pb-16 lg:pt-8 lg:pb-24  dark:bg-gray-900">
      <div className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <h1 className="text-center my-4 text-3xl font-extrabold lemb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-whiteading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
          About Me
        </h1>
        <p className="whitespace-pre-wrap">
          Welcome! I'm Corrie Stroup, a Front-End Developer, born and raised in
          the Southern/Mid-Western US. I currently live in Vietnam with my
          lovely wife and three adorable (and frustrating) cats.
        </p>
        <br />
        <section>
          <h2 className="text-center my-4 text-2xl font-extrabold lemb-4 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-2xl dark:text-whiteading-tight text-gray-900 lg:mb-6 lg:text-2xl dark:text-white">
            Education
          </h2>
          <p className="whitespace-pre-wrap">
            I studied natural languages (German) and Second Language Pedagogy,
            as language systems have always been fascinating to me. Although I
            am not classically educated in Computer Science, I do find the field
            riveting. I began programming as a hobby in university, starting by
            hacking together a few Python scripts here and there. I made a few
            personal-use apps in the first few years I was abroad, but my Python
            development fell to the wayside. Since 2019, I have been absolutely
            devouring anything and everything related to Web Development. After
            spending the requisite time in tutorial Hell, I found The Odin
            Project, which gave me a solid direction and has provided me the
            needed springboard to dive right into webdev.
          </p>
          <br />
        </section>

        <section>
          <h2 className="text-center my-4 text-2xl font-extrabold lemb-4 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-2xl dark:text-whiteading-tight text-gray-900 lg:mb-6 lg:text-2xl dark:text-white">
            Life Philosophy
          </h2>
          <p className="whitespace-pre-wrap">
            In life, as in programming, I believe that less is more. That's not
            to say I live a minimalistic lifestyle; no - on the contrary, I
            believe it's important to enjoy life. But the more moving parts
            something has, the more opportunities for something to go wrong.
            Minimize the parts, minimize the margin of error, enjoy a smooth and
            productive life.
          </p>
          <br />
        </section>

        <section>
          <h2 className="text-center my-4 text-2xl font-extrabold lemb-4 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-2xl dark:text-whiteading-tight text-gray-900 lg:mb-6 lg:text-2xl dark:text-white">
            Passion
          </h2>
          <p>
            I have a passion for problem solving and pattern recognition. What
            originally helped me choose to study natural languages in university
            also helped me to find a footing in programming languages: I'm a man
            of syntax, I love discovering new patterns, new and better ways of
            accomplishing tasks. My appetite for learning and acquiring new
            skills is never satiated, which is what drives me and keeps me
            passionate about programming: it's always changing, new shifts, new
            paradigms, new ideas to learn and develop.
          </p>
        </section>
      </div>
    </div>
  );
}
