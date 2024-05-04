import React from "react";
import teamData from "./teamsDetails.json";

const Team = () => {

  const activeEmployees = teamData.team_members.filter(
    (member) => member.status === "Active Employee"
  );
  const alumni = teamData.team_members.filter(
    (member) => member.status === "Alumni"
  );

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Active Employees</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {activeEmployees.map((member) => (
            <div
              key={member.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{member.name}</div>
                <p className="text-gray-700 text-base">
                  Position: {member.position}
                </p>
                <p className="text-gray-700 text-base">
                  Email: {member.email}
                </p>
                <p className="text-gray-700 text-base">
                  Department: {member.department}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Alumni</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {alumni.map((member) => (
            <div
              key={member.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{member.name}</div>
                <p className="text-gray-700 text-base">
                  Position: {member.position}
                </p>
                <p className="text-gray-700 text-base">
                  Email: {member.email}
                </p>
                <p className="text-gray-700 text-base">
                  Department: {member.department}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;