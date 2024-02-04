import React from "react";
import { Link } from "react-router-dom";

const JobCard = (props) => {
  function formatPrice(price) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  }

  return (
    <div class="group grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
      <Link target="_blank" href={`/job-detail/${props.id}`} >
        <a
          target="_blank" href={`/job-detail/${props.id}`}
          class="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"
        >
          <div class="group relative h-16 w-16 m-5 overflow-hidden rounded-lg">
            <img
              src={props.company_image}
              alt={props.company_name}
              class="h-full w-full object-cover text-gray-700"
            />
          </div>
        </a>
      </Link>
      <div class="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
        <h3 class="text-sm text-gray-600">{props.company_name}</h3>
        <a
          href="#"
          class="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
        >
          {" "}
          {props.job_title}{" "}
        </a>
        <p class="overflow-hidden pr-7 text-sm">{props.company_description}</p>

        <div class="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
          <div class="">
            Location:
            <span class="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
              {" "}
              {props.company_city}{" "}
            </span>
          </div>
          <div class="">
            Salary:
            <span class="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
              {formatPrice(props.salary_min)} - {formatPrice(props.salary_max)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
