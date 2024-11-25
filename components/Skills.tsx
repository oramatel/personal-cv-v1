import React from "react";

const skillsData = [
  "FortiNet",
  "Aruba",
  "HPE",
  "Cisco",
  "Meraki",
  "Juniper",
  "Open Source Apps",
  "Azure",
  "AWS",
  "CloudFlare",
  "AWS",
  "Python",
  "PHP",
  "RESTful APIs",
];

function Skills() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Certifications/Experience</h1>
      <div className="flex flex-wrap gap-2">
        {skillsData.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-500 text-gray-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
