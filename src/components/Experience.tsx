import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto w-full max-w-5xl px-6 py-20 sm:px-8"
    >
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-medium tracking-[0.2em] text-sky-500 uppercase">
          Where I've worked
        </p>

        <h2
          id="experience-heading"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Experience<span className="text-sky-500">.</span>
        </h2>

        <p className="mt-4 leading-7 text-gray-500 dark:text-gray-400">
          Beyond building software, I've worked with students and academic staff
          to solve problems, explain technical concepts, and keep things running
          smoothly.
        </p>
      </div>

      <article className="relative border-l border-gray-200 pl-6 dark:border-gray-700 sm:pl-8">
        <span
          aria-hidden="true"
          className="absolute -left-1.25 top-1.5 h-2.5 w-2.5 rounded-full bg-sky-500 ring-4 ring-white dark:ring-gray-950"
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              {experience.role}
            </h3>

            <p className="mt-1 font-medium text-sky-600 dark:text-sky-400">
              {experience.company}
            </p>
          </div>

          <span className="w-fit rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-700 dark:text-gray-300">
            Two contracts
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {experience.periods.map((period) => (
            <span
              key={period}
              className="rounded-md bg-gray-100 px-3 py-1.5 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300"
            >
              {period}
            </span>
          ))}
        </div>

        <p className="mt-6 max-w-3xl leading-7 text-gray-600 dark:text-gray-300">
          {experience.description}
        </p>

        <ul className="mt-5 space-y-3">
          {experience.responsibilities.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-6 text-gray-600 dark:text-gray-400 sm:text-base"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600 dark:border-gray-700 dark:text-gray-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </article>
    </section>
  );
}
