import { useEffect, useState } from "react";
import validator from "validator";
const Password = () => {
  const [value, setValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const checkValid = (e) => {
    setValue(e.target.value);
    console.log(value);
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMsg("Strong Password");
    } else {
      setErrorMsg("Weak Password");
    }
  };

  return (
    <div>
      <h1 className="text-center mb-6 font-semibold text-2xl">
        Password Validator
      </h1>
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

      <div className="flex items-center justify-center gap-6">
        <label
          htmlFor="Password"
          className=" text-xs font-medium text-gray-700"
        >
          {" "}
          Password{" "}
        </label>

        <input
          type="password"
          id="UserEmail"
          placeholder="*********"
          value={value}
          className="outline-none rounded-md border pl-4 px-20 py-2 border-black shadow-sm sm:text-sm"
          onChange={checkValid}
        />
      </div>
      <div>
        {errorMsg === "" ? null : (
          <p className="text-red-800 text-center font-medium my-6">{`${errorMsg} !!`}</p>
        )}
      </div>
    </div>
  );
};

export default Password;
