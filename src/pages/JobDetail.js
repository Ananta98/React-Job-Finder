import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  let { id } = useParams();
  let [data, setData] = useState(null);

  useEffect(() => {
    async function getDetail() {
      let result = await axios
        .get("https://dev-example.sanbercloud.com/api/job-vacancy/" + id)
        .catch((error) => console.log(error));
      setData(result.data);
    }
    getDetail();
  }, []);

  if (data != null) {
    return (
      <div className="flex flex-row text-left items-center content-center shadow-2xl bg-white rounded-lg m-10 p-10">
        <img src={data.company_image_url} width={120} height={120} />
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">{data.company_name}</h1>
          <h5>Job Description : {data.job_description}</h5>
          <h5>Job Qualification : {data.job_qualification}</h5>
          <h5>Job Tenure : {data.job_tenure}</h5>
          <h5>Job Type : {data.job_type}</h5>
          <h5>Job Status : {data.job_status ? "Open" : "Close"}</h5>
          <h1>
            Salary : {data.salary_min} - {data.salary_max}
          </h1>
        </div>
      </div>
    );
  } else {
    <div className="text-center">
      <h1>Job Vacancy Not Found</h1>
    </div>;
  }
};

export default JobDetail;
