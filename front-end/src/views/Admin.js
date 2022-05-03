import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Admin() {
  const [errorMessage, setErrormessage] = useState();
  const [selectForm, setSelectForm] = useState("");
  const [dataAPI, setDataAPI] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const onSubmitLogin = (data) => {
    fetch("http://localhost:8000/admin/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => setErrormessage(res.description))
      .catch((err) => console.log(err));
  };

  const renderLogin = () => {
    return (
      <>
        <button onClick={() => setSelectForm("register")}>
          Switch to register
        </button>
        <form onSubmit={handleSubmit(onSubmitLogin)}>
          <label htmlFor="email">
            *Email :
            <input
              type="text"
              {...register(
                "email",
                {
                  pattern: /^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                },
                { required: true }
              )}
            />
          </label>
          {errors.email && <p>Please enter a valid email.</p>}

          <label htmlFor="password">
            Password :
            <input
              type="pasword"
              {...register("password", {
                maxLength: { value: 50, message: "50 characters max" },
              })}
            />
          </label>
          {<p>{errors.email?.message}</p>}
          <input type="submit" value="send" />
          {<p>{errorMessage ? errorMessage : null}</p>}
        </form>
      </>
    );
  };
  const onSubmitRegister = (data) => {
    fetch("http://localhost:8000/admin/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => setErrormessage(res.description))
      .catch((err) => console.log(err));
  };
  const renderRegister = () => {
    return (
      <>
        {" "}
        <button onClick={() => setSelectForm("login")}>Switch to login</button>
        <form onSubmit={handleSubmit(onSubmitRegister)}>
          <label htmlFor="email">
            *Email :
            <input
              type="text"
              {...register(
                "email",
                {
                  pattern: /^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                },
                { required: true }
              )}
            />
          </label>
          {errors.email && <p>Please enter a valid email.</p>}

          <label htmlFor="password">
            Password :
            <input
              type="pasword"
              {...register("password", {
                maxLength: { value: 50, message: "50 characters max" },
              })}
            />
          </label>
          {<p>{errors.email?.message}</p>}
          <input type="submit" value="send" />
          {<p>{errorMessage ? errorMessage : null}</p>}
        </form>
      </>
    );
  };

  const handleSelectForm = () => {
    if (selectForm === "login") {
      {
        return renderLogin();
      }
    } else if (selectForm === "register") {
      {
        return renderRegister();
      }
    } else if (selectForm === "") {
      return (
        <>
          <button onClick={() => setSelectForm("login")}>Login</button>
          <button onClick={() => setSelectForm("register")}>Register</button>
        </>
      );
    }
  };
  const checkResult = (res) => {
    console.log(res);
    if (res.message === "Please login again") {
      return;
    } else {
      setDataAPI(res.result);
    }
  };
  useEffect(() => {
    fetch("http://localhost:8000/elevator")
      .then((res) => res.json())
      .then((res) => checkResult(res))
      .then(console.log(dataAPI))
      .catch((err) => console.log(err));
  }, [errorMessage]);

  const renderData = () => {
    return dataAPI.map((res) => {
      return (
        <div>
          <p>
            Call : {res.call}, From : {res.from}, To : {res.to}
          </p>
        </div>
      );
    });
  };
  return (
    <>
      {handleSelectForm()}
      {dataAPI.length > 0 ? renderData() : null}
    </>
  );
}
