import React, { useContext, useEffect } from "react";
import JobSearch from "../components/JobSearch";
import JobCard from "../components/JobCard";
import { GlobalJobContext } from "../context/GlobalJobContext";
import axios from "axios";

const JobVacancy = () => {
  const { data, setData } = useContext(GlobalJobContext);

  useEffect(() => {
    let fetchData = async () => {
      let result = await axios
        .get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .catch((error) => console.log(error));

      setData(result.data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center px-20 py-10">
      <JobSearch />
      <div className="grid grid-cols-2 gap-4 py-3">
        {data.map((item) => {
          return (
            <JobCard
              key={item.id}
              id={item.id}
              job_title={item.title}
              company_name={item.company_name}
              company_image={item.company_image_url}
              company_city={item.company_city}
              company_description={item.job_description}
              salary_min={item.salary_min}
              salary_max={item.salary_max}
            />
          );
        })}
      </div>
    </div>
  );
};

export default JobVacancy;
