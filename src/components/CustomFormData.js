import axios from "axios";
import { Button, Label, Modal, TextInput, Textarea } from "flowbite-react";
import React, { useState, useContext } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { GlobalJobContext } from "../context/GlobalJobContext";
import Cookies from "js-cookie";

const CustomFormData = () => {
  const [input, setInput] = useState({
    title: "",
    company_name: "",
    company_city: "",
    job_description: "",
    salary_min: 0,
    salary_max: 0,
    company_image_url: "",
    job_status : 1,
    job_type : "",
    job_tenure : "",
  });
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  let { navigate } = useContext(GlobalJobContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    let {
      title,
      company_name,
      company_city,
      job_description,
      salary_min,
      salary_max,
      company_image_url,
      job_type,
      job_tenure
    } = input;

    axios
      .post(
        "https://dev-example.sanbercloud.com/api/job-vacancy",
        {
          title,
          company_name,
          company_city,
          job_description,
          salary_min,
          salary_max,
          company_image_url,
          job_type,
          job_tenure
        },
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      )
      .then((res) => {
        setOpenModal(true);
        setSuccess(true);
        setMessage("Registration Success");
        setInput({
          title: "",
          company_name: "",
          company_city: "",
          job_description: "",
          salary_min: 0,
          salary_max: 0,
          company_image_url: "",
          job_status : 1,
        });
      })
      .catch((err) => {
        setOpenModal(true);
        setSuccess(false);
        setMessage("Unsuccessful insert new job vacancy");
      });
  };

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "company_image_url") {
      setInput({ ...input, company_image_url: value });
    } else if (name === "title") {
      setInput({ ...input, title: value });
    } else if (name === "company_name") {
      setInput({ ...input, company_name: value });
    } else if (name === "company_city") {
      setInput({ ...input, company_city: value });
    } else if (name === "job_description") {
      setInput({ ...input, job_description: value });
    } else if (name === "salary_min") {
      setInput({ ...input, salary_min: parseInt(value) });
    } else if (name === "salary_max") {
      setInput({ ...input, salary_max: parseInt(value) });
    } else if (name === "job_type") {
      setInput({ ...input, job_type: value });
    } else if (name === "job_tenure") {
      setInput({ ...input, job_tenure: value });
    }
  };

  const handleSuccess = () => {
    setOpenModal(false);
    navigate("/dashboard/list-job-vacancy");
  };

  return (
    <>
      <div className="rounded-xl shadow-lg px-4 mt-3 mx-3 my-3 bg-white w-screen overflow-y-auto">
        <h1 className="font-bold text-xl mb-3 border-solid border-black">
          Create New Job Vacancy
        </h1>
        <Modal
          show={openModal}
          size="md"
          onClose={() => setOpenModal(false)}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              {success === true ? (
                <CiCircleCheck className="mx-auto mb-4 h-14 w-14 text-green-500 dark:text-gray-200" />
              ) : (
                <RxCrossCircled className="mx-auto mb-4 h-14 w-14 text-red-500 dark:text-gray-200" />
              )}
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                {message}
              </h3>
              <div className="flex justify-center gap-4">
                {success ? (
                  <Button color="success" onClick={() => handleSuccess()}>
                    {"Ok"}
                  </Button>
                ) : (
                  <Button color="failure" onClick={() => setOpenModal(false)}>
                    {"Ok"}
                  </Button>
                )}
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <div className="mb-2 block w-full">
              <Label htmlFor="Company Image URL" value="Company Image URL" />
            </div>
            <TextInput
              onChange={handleInput}
              name="company_image_url"
              value={input.company_image_url}
              type="text"
              required
              shadow
            />
          </div>
          <div className="mb-2">
            <div className="mb-2 block w-full">
              <Label htmlFor="Job Title" value="Job Title" />
            </div>
            <TextInput
              onChange={handleInput}
              name="title"
              value={input.title}
              type="text"
              required
              shadow
            />
          </div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="Company Name" value="Company Name" />
            </div>
            <TextInput
              onChange={handleInput}
              name="company_name"
              value={input.company_name}
              type="text"
              required
              shadow
            />
          </div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="Company City" value="Company City" />
            </div>
            <Textarea
              onChange={handleInput}
              name="company_city"
              value={input.company_city}
              type="text"
              required
              shadow
            />
          </div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="Job Description" value="Job Description" />
            </div>
            <TextInput
              onChange={handleInput}
              name="job_description"
              type="text"
              value={input.job_description}
              required
              shadow
            />
          </div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="Salary Min" value="Salary Min" />
            </div>
            <TextInput
              onChange={handleInput}
              name="salary_min"
              type="number"
              value={input.salary_min}
              required
              shadow
            />
          </div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="Salary Max" value="Salary Max" />
            </div>
            <TextInput
              onChange={handleInput}
              name="salary_max"
              type="number"
              value={input.salary_max}
              required
              shadow
            />
          </div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="Job Type" value="Job Type" />
            </div>
            <TextInput
              onChange={handleInput}
              name="job_type"
              type="text"
              value={input.job_type}
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Job Tenure" value="Job Tenure" />
            </div>
            <TextInput
              onChange={handleInput}
              name="job_tenure"
              type="text"
              value={input.job_tenure}
              required
              shadow
            />
          </div>
          <Button className="w-full mt-5 mb-5" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default CustomFormData;
