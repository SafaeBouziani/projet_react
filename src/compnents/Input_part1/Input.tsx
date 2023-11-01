import React, { useState } from "react";
import './Input.css'
import { FaCheckCircle } from "react-icons/fa";

import { VscError } from "react-icons/vsc";
interface FormProps {
  lab_name: string;
  ClassName: string;
  type: string;
  id: string;
}
const FormInput: React.FC<FormProps> = (props) => {
  return (
    <div className="formInput">
      <label>{props.lab_name}</label>
      <input
        type={props.type}
        className={props.ClassName}
       
        id={props.id}
      ></input>
      <FaCheckCircle className="valid_icon"/>
      <VscError className="error_icon" />
    </div>
  );
};
export default FormInput;
