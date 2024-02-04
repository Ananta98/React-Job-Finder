import axios from "axios";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import Cookies from "js-cookie";
import React, { useContext, useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { GlobalJobContext } from "../context/GlobalJobContext";
import { CiCircleCheck } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";

const ChangePassword = () => {
  const [input, setInput] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  let { navigate } = useContext(GlobalJobContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    let { current_password, new_password, new_confirm_password } = input;

    axios
      .post(
        "https://dev-example.sanbercloud.com/api/change-password",
        {
          current_password,
          new_password,
          new_confirm_password,
        },
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      )
      .then((res) => {
        setSuccess(true);
        setMessage("Success Update Password")
        setOpenModal(true)
        setInput({
          current_password: "",
          new_password: "",
          new_confirm_password: "",
        });
      })
      .catch((err) => {
        console.log(err)
        setSuccess(false)
        setOpenModal(true)
        let obj = JSON.parse(err.response.data)
        if (obj.current_password !== undefined) {
          setMessage(obj.current_password);
        } else if (obj.new_password !== undefined) {
          setMessage(obj.new_password);
        } else if (obj.new_confirm_password !== undefined) {
          setMessage(obj.new_confirm_password);
        } 
      });
  };

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "current_password") {
      setInput({ ...input, current_password: value });
    } else if (name === "new_password") {
      setInput({ ...input, new_password: value });
    } else if (name === "new_confirm_password") {
      setInput({ ...input, new_confirm_password: value });
    }
  };

  const handleSuccess = () => {
    setOpenModal(false);
    navigate("/dashboard/list-job-vacancy");
  };

  return (
    <div className="rounded-xl shadow-lg p-5 m-10 bg-white w-screen">
      <h1 className="font-bold text-xl mb-3 border-solid border-black">
        Change password
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
          <div className="mb-2 block">
            <Label htmlFor="current password" value="Current password" />
          </div>
          <TextInput
            id="current_password"
            type="password"
            name="current_password"
            required
            icon={RiLockPasswordLine}
            onChange={handleInput}
            value={input.current_password}
          />
        </div>
        <div className="mb-2">
          <div className="mb-2 block">
            <Label htmlFor="new password" value="New password" />
          </div>
          <TextInput
            id="new_password"
            type="password"
            name="new_password"
            required
            icon={RiLockPasswordLine}
            onChange={handleInput}
            value={input.new_password}
          />
        </div>
        <div className="mb-2">
          <div className="mb-2 block">
            <Label htmlFor="Password" value="Password Confirmation" />
          </div>
          <TextInput
            id="new_confirm_password"
            type="password"
            name="new_confirm_password"
            required
            icon={RiLockPasswordLine}
            onChange={handleInput}
            value={input.new_confirm_password}
          />
        </div>
        <Button className="mt-2" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default ChangePassword;
