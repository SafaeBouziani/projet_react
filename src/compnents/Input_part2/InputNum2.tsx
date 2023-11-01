import "./InputNum2.css";
import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
interface FormProps {
  title: string;
  type: string;
}
const Formation: React.FC<FormProps> = (props) => {
  return (
    <div className="Inpt">
      <form action="">
        <fieldset>
          <div>
            <FaGraduationCap />
            <label htmlFor="">{props.title}</label>
            <input type="text" placeholder="par Ex. : Gestion d'entreprise" />
          </div>
          <div>
            <label htmlFor="">{props.type}</label>
            <input type="text" />
          </div>
          <div className="duree">
            <div>
              <label htmlFor="">Depuis</label>
              <input type="number" max={2023} min={1990} />
            </div>
            <div>
              <label htmlFor="">Jusqu'à</label>
              <input type="number" max={2023} min={1990} />
            </div>
          </div>
          <div>
            <label htmlFor="">Description</label>
            <textarea name="" id=""></textarea>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
export default Formation;
