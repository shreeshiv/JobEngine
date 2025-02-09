import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function PostJobForm() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">
            Job Details
          </h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Enter the basic information about the job posting.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="job_id"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Job ID
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="job_id"
                  id="job_id"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  placeholder="SE-2024-001"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="title"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Job Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  placeholder="Senior Software Engineer"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="job_description"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Job Description
              </label>
              <div className="mt-2">
                <textarea
                  id="job_description"
                  name="job_description"
                  rows={4}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            <div className="col-span-full">
              <h3 className="text-base font-semibold text-gray-900">
                Requirements
              </h3>

              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="min_experience"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Minimum Experience (years)
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="min_experience"
                      id="min_experience"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="max_annual_salary"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Maximum Annual Salary
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="max_annual_salary"
                      id="max_annual_salary"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm/6 font-medium text-gray-900">
                    Work Authorization
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="requires_sponsorship"
                        name="requires_sponsorship"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300"
                      />
                      <label
                        htmlFor="requires_sponsorship"
                        className="text-sm text-gray-600"
                      >
                        Requires Sponsorship
                      </label>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="work_type"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Work Type
                  </label>
                  <div className="mt-2">
                    <select
                      id="work_type"
                      name="work_type"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300"
                    >
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="skills"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Required Skills
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="skills"
                      id="skills"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300"
                      placeholder="Python, JavaScript, React, AWS (comma separated)"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <h3 className="text-base font-semibold text-gray-900">
                Company Information
              </h3>

              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="company_name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Company Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="company_name"
                      id="company_name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="industry"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Industry
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="industry"
                      id="industry"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="company_size"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Company Size
                  </label>
                  <div className="mt-2">
                    <select
                      id="company_size"
                      name="company_size"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300"
                    >
                      <option value="1-50">1-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="500-1000">500-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="funding_stage"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Funding Stage
                  </label>
                  <div className="mt-2">
                    <select
                      id="funding_stage"
                      name="funding_stage"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300"
                    >
                      <option value="Seed">Seed</option>
                      <option value="Series A">Series A</option>
                      <option value="Series B">Series B</option>
                      <option value="Series C">Series C</option>
                      <option value="Public">Public</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Post Job
        </button>
      </div>
    </form>
  );
}
