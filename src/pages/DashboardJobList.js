import axios from "axios";
import {
  Button,
  Checkbox,
  Label,
  Modal,
  Table,
  TextInput,
  Textarea,
} from "flowbite-react";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const DashboardJobList = () => {
  const [jobs, setJobs] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModelEdit, setOpenModalEdit] = useState(false);
  const [id, setId] = useState();
  const [fetchStatus, setFetchStatus] = useState(true);
  const [statusJob, setStatusJob] = useState(false);
  const [input, setInput] = useState({
    title: "",
    company_name: "",
    company_city: "",
    job_description: "",
    salary_min: 0,
    salary_max: 0,
    company_image_url: "",
    job_type: "",
    job_tenure: "",
    job_status: 0,
  });

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
    };
  };

  useEffect(() => {
    if (fetchStatus) {
      let fetchData = async () => {
        let result = await axios
          .get("https://dev-example.sanbercloud.com/api/job-vacancy")
          .catch((error) => console.log(error));
        setJobs(result.data.data);
        setFetchStatus(false);
      };
      fetchData();
    }
  }, [fetchStatus, setFetchStatus]);

  const handleDelete = (idData) => {
    let id = parseInt(idData);
    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`, {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then((res) => {
        setFetchStatus(true);
        setOpenModal(false);
      });
  };

  const handleEdit = (event) => {
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
      job_tenure,
      job_status
    } = input;

    axios
      .put(
        `https://dev-example.sanbercloud.com/api/job-vacancy/${id}`,
        {
          title,
          company_name,
          company_city,
          job_description,
          salary_min,
          salary_max,
          company_image_url,
          job_type,
          job_tenure,
          job_status,
        },
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      )
      .then((res) => {
        setOpenModalEdit(false);
        setFetchStatus(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="px-8 mt-3 overflow-x-auto sm:rounded-lg">
      <Modal
        show={openModelEdit}
        size="md"
        onClose={() => setOpenModalEdit(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Edit Data
            </h3>
            <form
              onSubmit={handleEdit}
              className="flex md-w-full flex-col gap-4"
            >
              <div className="mb-2">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="Company Image URL"
                    value="Company Image URL"
                  />
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
              <div>
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
              <div>
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
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={input.job_status == 1 ? true : false}
                  onChange={() => {
                    setStatusJob(!statusJob)
                    if (statusJob) {
                      input.job_status = 1; 
                    } else {
                      input.job_status = 0;
                    }
                  }}
                  value={input.job_status == 1 ? true : false}
                  id="open"
                  name="open"
                />
                <Label htmlFor="">Open Job</Label>
              </div>
              <Button className="w-full mt-5" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  handleDelete(id);
                }}
              >
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Table striped>
        <Table.Head>
          <Table.HeadCell className="bg-purple-600 font-bold text-white">
            No
          </Table.HeadCell>
          <Table.HeadCell className="bg-purple-600 font-bold text-white">
            Job Title
          </Table.HeadCell>
          <Table.HeadCell className="bg-purple-600 font-bold text-white">
            Company Name
          </Table.HeadCell>
          <Table.HeadCell className="bg-purple-600 font-bold text-white">
            Company City
          </Table.HeadCell>
          <Table.HeadCell className="bg-purple-600 font-bold text-white">
            Company Description
          </Table.HeadCell>
          <Table.HeadCell className="bg-purple-600 font-bold text-white">
            Salary Min
          </Table.HeadCell>
          <Table.HeadCell className="bg-purple-600 font-bold text-white">
            Salary Max
          </Table.HeadCell>
          <Table.HeadCell className="bg-purple-600 font-bold text-white">
            Job Description
          </Table.HeadCell>
          <Table.HeadCell className="bg-purple-600 font-bold text-white">
            Job Type
          </Table.HeadCell>
          <Table.HeadCell className="bg-purple-600 font-bold text-white">
            Job Tenure
          </Table.HeadCell>
          <Table.HeadCell className="bg-purple-600 font-bold text-white">
            Job Status
          </Table.HeadCell>
          <Table.HeadCell className="bg-purple-600 font-bold text-white">
            Company Image Url
          </Table.HeadCell>
          <Table.HeadCell className="bg-purple-600 font-bold text-white">
            Action
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {jobs.map((item) => {
            return (
              <Table.Row
                key={item.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.id}
                </Table.Cell>
                <Table.Cell>{item.title}</Table.Cell>
                <Table.Cell>{item.company_name}</Table.Cell>
                <Table.Cell>{item.company_city}</Table.Cell>
                <Table.Cell>{item.job_description}</Table.Cell>
                <Table.Cell>{item.salary_min}</Table.Cell>
                <Table.Cell>{item.salary_max}</Table.Cell>
                <Table.Cell>{item.job_description}</Table.Cell>
                <Table.Cell>{item.job_type}</Table.Cell>
                <Table.Cell>{item.job_tenure}</Table.Cell>
                <Table.Cell>{item.job_status}</Table.Cell>
                <Table.Cell>{item.company_image_url}</Table.Cell>
                <Table.Cell className="flex flex-row gap-2">
                  <Button
                    color="failure"
                    value={item.id}
                    onClick={(event) => {
                      setId(item.id);
                      setOpenModal(true);
                      event.preventDefault();
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    color="light"
                    value={item.id}
                    onClick={(event) => {
                      event.preventDefault();
                      setId(item.id);
                      setInput({
                        title: item.title,
                        company_name: item.company_name,
                        company_city: item.company_city,
                        job_description: item.job_description,
                        salary_min: item.salary_min,
                        salary_max: item.salary_max,
                        company_image_url: item.company_image_url,
                        job_type: item.job_type,
                        job_tenure: item.job_tenure,
                        job_status: item.job_status,
                      });
                      setOpenModalEdit(true);
                    }}
                  >
                    Edit
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default DashboardJobList;
