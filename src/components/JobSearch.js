import React, { useContext } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaBagShopping } from "react-icons/fa6";
import { GlobalJobContext } from "../context/GlobalJobContext";
import axios from "axios";

const JobSearch = () => {
  const { setData, search, setSearch } = useContext(GlobalJobContext);

  const handleOnChangeSearch = (event) => setSearch(event.target.value);

  const handleSearch = (event) => {
    event.preventDefault();

    let fetchDataFilter = async () => {
      setData([]);

      let result = await axios
        .get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .catch((error) => console.log(error));

      let allDatas = result.data.data;

      if (search !== "") {
        let filteredData = allDatas.filter((item) => {
          return item.company_name.toLowerCase().includes(search.toLowerCase());
        });
        setData(filteredData);
      } else {
        setData(allDatas);
      }
    };
    fetchDataFilter();
  };

  return (
    <form onSubmit={handleSearch} class="flex items-center">
      <label for="simple-search" class="sr-only">
        Search
      </label>
      <div class="relative w-full flex">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <FaBagShopping className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="text"
          id="simple-search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Jobs By Name"
          onChange={handleOnChangeSearch}
          value={search}
        />
        <button
          type="button"
          class="absolute inset-y-0 end-0 flex items-center pe-3"
          onClick={(event) => setSearch("")}
        >
          <AiOutlineCloseCircle className="w-5 h-5 text-[30px] text-[#a5a6a6] hover:text-gray-500 icon" />
        </button>
      </div>
      <button
        type="submit"
        class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          class="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span class="sr-only">Search</span>
      </button>
    </form>
  );
};

export default JobSearch;
