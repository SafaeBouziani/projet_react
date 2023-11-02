import { BsPersonCircle } from "react-icons/bs";
import Formation from "../Input_part2/InputNum2";
import { NavLink } from 'react-router-dom';
import '../Input_part2/InputNum2.css'
const FormPage2 = () => {
  return (
    <div className="app">
      <form action="">
        <div className="prf">
          <BsPersonCircle />
          <label htmlFor="">Profil</label>
          <textarea className="profil" id="profil"></textarea>
        </div>
        <div>
            <Formation title="Formation" type="Etablissment d'enseignement:"/>
            <Formation title="Exprerience professionelle" type="Employeur"/>
        </div>
        <div className="langue">
            <title>Langues</title>
            <label htmlFor="">Langue</label>
            <input type="text" placeholder="par Ex. Anglais" />
            <label htmlFor="">Niveau</label>
            <select name="" id="">
                <option value="langue maternelle">langue maternelle</option>
                <option value="courant">courant</option>
                <option value="satisfaisant<">satisfaisant</option>
                <option value="notion de base">notion de base</option>
            </select>
        </div>
        <div>
            <label htmlFor="">Loisirs</label>
            <input type="text" placeholder="par Ex. Lecture"/>
        </div>
        <button className="pre"><NavLink to='/Formulaire_page1'><legend>Précédent</legend></NavLink></button>
        <button><NavLink to='/'><legend>Enregistrer</legend></NavLink></button>
      </form>
         
          
         
         <div>
        
         </div>
    </div>
  );
};
export default FormPage2