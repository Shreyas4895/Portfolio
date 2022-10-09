import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Good communication skills, interpersonal and organizational skill with
          strong leadership quality. Able to work independently as well as
          collaboratively. Ability to deal effectively & professionally with
          people at all levels across the organization or multiple groups from
          diverse cultures/backgrounds,. Self-starter person who can prioritize
          and meet deadlines while handling multiple assignments simultaneously.
          Team player that works well under pressure situations both
          individually or in a team environment
        </p>
      </div>
    </div>
  );
};

export default About;
