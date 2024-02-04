import axios from "axios";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import Cookies from "js-cookie";
import React, { useContext, useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { GlobalJobContext } from "../context/GlobalJobContext";
import { RxCrossCircled } from "react-icons/rx";

const Login = () => {
  let { navigate } = useContext(GlobalJobContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();

    axios
      .post(`https://dev-example.sanbercloud.com/api/login `, {
        email: email,
        password: password,
      })
      .then((res) => {
        let { token } = res.data;
        Cookies.set("token", token);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setOpenModal(true);
      });
  };

  return (
    <div className="rounded-xl shadow-2xl p-10 m-10 bg-white">
      <h1 className="font-bold text-center text-2xl mb-3 border-solid border-black">
        Login
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
            <RxCrossCircled className="mx-auto mb-4 h-14 w-14 text-red-500 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Wrong Password or Email
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                {"Ok"}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <form onSubmit={handleLogin} className="flex md-w-full flex-col gap-4">
        <div>
          <div className="mb-2 block w-full">
            <Label htmlFor="Email" value="Your Email" />
          </div>
          <TextInput
            name="email"
            required
            shadow
            type="email"
            placeholder="ex : name@email.com"
            icon={MdEmail}
            value={email}
            onChange={handleInput}
          />
        </div>
        <div>
          <div className="mb-2 block w-full">
            <Label htmlFor="Password" value="Password" />
          </div>
          <TextInput
            name="password"
            type="password"
            required
            shadow
            value={password}
            icon={RiLockPasswordLine}
            onChange={handleInput}
          />
        </div>
        <Button className="w-full mt-5" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
