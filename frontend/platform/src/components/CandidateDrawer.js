"use client";

import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import CandidateMatchDetails from "./CandidateMatchDetails";

export default function CandidateDrawer({ open, setOpen, candidate }) {
  if (!candidate) return null;

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <div className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto relative w-screen max-w-6xl transform transition duration-500 ease-in-out">
              <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-none"
                >
                  <span className="absolute -inset-2.5" />
                  <span className="sr-only">Close panel</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <Dialog.Title className="text-xl font-semibold text-gray-900">
                    Candidate Profile
                  </Dialog.Title>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  {/* Candidate Information */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {candidate.name}
                      </h3>
                      <div className="mt-2">
                        <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                          {candidate.status}
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <dl className="divide-y divide-gray-200">
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                          <dt className="text-sm font-medium text-gray-500">
                            Experience
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {candidate.experience}
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                          <dt className="text-sm font-medium text-gray-500">
                            Match Score
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {candidate.matchScore}%
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                          <dt className="text-sm font-medium text-gray-500">
                            Applied Date
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {new Date(
                              candidate.appliedDate
                            ).toLocaleDateString()}
                          </dd>
                        </div>
                      </dl>
                    </div>

                    {/* Add Match Details Section */}
                    <div className="border-t border-gray-200 pt-4">
                      <CandidateMatchDetails candidate={candidate} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
