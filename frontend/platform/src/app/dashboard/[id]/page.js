"use client";
import { useState, useEffect, use } from "react";
import CandidateDrawer from "@/components/CandidateDrawer";
import JobDetails from "./JobDetails";

const jobDetails = {
  id: 1,
  title: "Senior Software Engineer",
  company: "TechCorp Inc.",
  postedDate: "2024-03-15",
  location: "Remote",
  description:
    "We are looking for an experienced Software Engineer to join our team...",
  requirements: [
    "5+ years of experience in software development",
    "Strong proficiency in React and Node.js",
    "Experience with cloud platforms (AWS/GCP)",
    "Excellent communication skills",
  ],
  candidates: [
    {
      id: 1,
      name: "John Smith",
      status: "Shortlisted",
      experience: "7 years",
      matchScore: 92,
      appliedDate: "2024-03-16",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      status: "In Review",
      experience: "6 years",
      matchScore: 88,
      appliedDate: "2024-03-17",
    },
  ],
};

export default function Page({ params }) {
  const resolvedParams = use(params);
  const [job, setJob] = useState(jobDetails);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Use params.id directly in useEffect
  useEffect(() => {
    // Fetch job details from API
    // const fetchJobDetails = async () => {
    //   const response = await fetch(`/api/jobs/${params.id}`);
    //   const data = await response.json();
    //   setJob(data);
    // };
    // fetchJobDetails();
    console.log(resolvedParams.id);
  }, [resolvedParams.id]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white">
      {/* Job Header */}
      <div className="border-b border-gray-200 pb-6 pt-4">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              {job.title}
            </h1>
            <div className="mt-2 text-sm text-gray-500">
              <span>{job.company}</span> • <span>{job.location}</span> •{" "}
              <span>
                Posted {new Date(job.postedDate).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              Active
            </span>
          </div>
        </div>
      </div>

      {/* Job Description */}
      <div className="py-6">
        <h2 className="text-lg font-semibold text-gray-900">Job Description</h2>
        <p className="mt-4 text-sm text-gray-600">{job.description}</p>
      </div>

      {/* Requirements */}
      <div className="py-6">
        <h2 className="text-lg font-semibold text-gray-900">Requirements</h2>
        <ul className="mt-4 list-disc list-inside text-sm text-gray-600">
          {job.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>

      {/* Candidates Table */}
      <div className="py-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Vetted Candidates ({job.candidates.length})
        </h2>
        <div className="mt-4 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                      Candidate
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Experience
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Match Score
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Applied Date
                    </th>
                    <th className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {job.candidates.map((candidate) => (
                    <tr key={candidate.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                        {candidate.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                          {candidate.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {candidate.experience}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {candidate.matchScore}%
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {new Date(candidate.appliedDate).toLocaleDateString()}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <button
                          className="text-indigo-600 hover:text-indigo-900"
                          onClick={() => {
                            setSelectedCandidate(candidate);
                            setDrawerOpen(true);
                          }}
                        >
                          View Profile
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Add the drawer component */}
      <CandidateDrawer
        open={drawerOpen}
        setOpen={setDrawerOpen}
        candidate={selectedCandidate}
      />
    </div>
  );
}
