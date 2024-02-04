import axios from "axios";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { MdEmail, MdPeople, MdPictureInPicture } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiCircleCheck } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { GlobalJobContext } from "../context/GlobalJobContext";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    image_url: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  const { navigate } = useContext(GlobalJobContext);

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "name") {
      setInput({ ...input, name: value });
    } else if (name === "password") {
      setInput({ ...input, password: value });
    } else if (name === "image_url") {
      setInput({ ...input, image_url: value });
    } else if (name === "email") {
      setInput({ ...input, email: value });
    }
  };

  const handleSuccess = () => {
    setOpenModal(false);
    navigate("/");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let { name, email, password, image_url } = input;

    axios
      .post("https://dev-example.sanbercloud.com/api/register", {
        name,
        email,
        password,
        image_url,
      })
      .then((res) => {
        setOpenModal(true);
        setSuccess(true);
        setMessage("Registration Success");
        setInput({
          name: "",
          email: "",
          password: "",
          image_url: "",
        });
      })
      .catch((err) => {
        setOpenModal(true);
        setSuccess(false);
        let obj = JSON.parse(err.response.data)
        if (obj.password !== undefined) {
          setMessage(obj.password);
        } else if (obj.email !== undefined) {
          setMessage(obj.email);
        } else if (obj.name !== undefined) {
          setMessage(obj.name);
        } else if (obj.image_url !== undefined) {
          setMessage(obj.image_url);
        }
      });
  };


  return (
    <div className="flex flex-col rounded-xl shadow-2xl p-10 m-10 bg-white">
      <h1 className="text-center font-bold text-2xl">Register</h1>
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Name" value="Your Name" />
          </div>
          <TextInput
            id="name"
            name="name"
            type="text"
            placeholder="ex: Bonnie Green"
            required
            icon={MdPeople}
            value={input.name}
            onChange={handleInput}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            name="email"
            placeholder="name@email.com"
            required
            value={input.email}
            icon={MdEmail}
            onChange={handleInput}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            id="password"
            type="password"
            name="password"
            required
            icon={RiLockPasswordLine}
            onChange={handleInput}
            value={input.password}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Image URL" value="Your Image URL" />
          </div>
          <TextInput
            id="image_url"
            type="text"
            name="image_url"
            required
            icon={MdPictureInPicture}
            onChange={handleInput}
            value={input.image_url}
          />
        </div>
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default Register;
