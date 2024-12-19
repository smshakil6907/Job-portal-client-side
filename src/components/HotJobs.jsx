import React, { useEffect, useState } from "react";
import JobsCard from "./JobsCard";

export default function HotJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://job-portal-server-beryl.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {jobs.map((job) => (
        <JobsCard key={job._id} job={job}></JobsCard>
      ))}
    </div>
  );
}
