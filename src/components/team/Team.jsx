import React from "react";
import teamData from "./teamsDetails.json";

const Team = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {teamData.team_members.map((member) => (
        <div
          key={member.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{member.name}</div>
            <p className="text-gray-700 text-base">
              Position: {member.position}
            </p>
            <p className="text-gray-700 text-base">Email: {member.email}</p>
            <p className="text-gray-700 text-base">
              Department: {member.department}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
