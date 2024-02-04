import React from "react";

const About = () => {
  return (
    <>
      <section class="bg-center bg-no-repeat bg-[url('https://smallbizclub.com/wp-content/uploads/2020/06/bigstock-Group-Of-Professional-Business-349068817.jpg')] bg-gray-700 bg-blend-multiply">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-20">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            We help you to find your{" "}
            <span className="logo ] text-purple-400">
              <strong>Dream</strong>Job
            </span>{" "}
            for Better Future
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Are you looking for a new job or a career change? Do you want to
            find the best opportunities in your field and location? If yes, then
            you need to check out{" "}
            <span className="logo text-[25px] text-blue-500">
              <strong>Job</strong>Search
            </span>{" "}
            , the ultimate website for job seekers. JobFinder is a website that
            helps you find your dream job in minutes.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
                href="/job-vacancy"
                class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Job Vacancy
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="/dashboard"
              class="cursor-pointer inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Dashboard
            </a>
          </div>
        </div>
      </section>
      <div className="w-full bg-white py-16 px-4 my-b">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[500px] mx-auto my-4 border relative rounded-lg overflow-hidden"
            src="https://th.bing.com/th/id/OIG.tN_SzHELCm2O_HMH8EFz?pid=ImgGn"
            alt=""
          />
          <div className="flex flex-col justify-center">
            <p className="text-gray-400 font-bold">JOB SEARCH</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Simple and fast
            </h1>
            <p>
              Search your dream helps your dream job in minutes. You can search
              by keywords, location, industry, salary, and more. You can create
              a free account and start browsing thousands of jobs today.
            </p>
            <button className="inline-flex justify-center my-4 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-16 px-4 my-b">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="text-gray-400 font-bold">JOB SEARCH</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Benefits
            </h1>
            <p>
              You can also upload your resume and apply for jobs with one click.
              JobSearch also provides you with useful tips and resources to
              improve your skills, prepare for interviews, and negotiate your
              salary. JobSearch also provides you with useful tips and resources
              to improve your skills, prepare for interviews, and negotiate your
              salary. JobSearch is the website that works for you, not the
              employers.
            </p>
          </div>
          <img
            className="w-[500px] mx-auto my-4 border relative rounded-lg overflow-hidden"
            src="https://th.bing.com/th/id/OIG.F7ZXCjnDdQ2IUY.PH2aE?pid=ImgGn"
            alt=""
          />
        </div>
      </div>
      <div className="w-full py-16 bg-white text-black px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Want tips and tricks to find new dream job
            </h1>
            <p>Sign up to our newsletter and stay up to date.</p>
          </div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <input
                className="p-3 flex w-full rounded-md text-black"
                type="email"
                placeholder="Enter Email"
              />
              <button className="bg-[#0086df] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
