import FormInput from "../Input_part1/Input";
import './formulaire.css'
import { NavLink } from "react-router-dom";
const Formulaire = () => {
  return (
    <div className="Formu">
      <form method="get">
        
        <FormInput type="text" ClassName="name" id="nom" lab_name="Nom:" />
        <FormInput
          type="text"
          ClassName="prenom"
          id="prenom"
          lab_name="Prenom:"
        />
        <FormInput type="number" ClassName="age" id="age" lab_name="Age:" />
        <FormInput
          type="date"
          ClassName="date"
          id="date"
          lab_name="Date de naissance::"
        />
        <FormInput
          type="number"
          ClassName="tel"
          id="tel"
          lab_name="numéro de télephone:"
        />
        <FormInput
          type="text"
          ClassName="adress"
          id="adress"
          lab_name="Adresse:"
        />
        <FormInput
          type="email"
          ClassName="email"
          id="email"
          lab_name="Email:"
        />
        <div className="bot">
          <label htmlFor="image" className="image"  >inserer votre image</label>
         <input type="file" id="image" className="image" accept="image/*" ></input>
          <button className="suivant">
            <NavLink to="/Formulaire_page2"><legend>Suivant</legend></NavLink>
          </button>
        </div>
      </form>
     
    </div>
  );
};
export default Formulaire;
