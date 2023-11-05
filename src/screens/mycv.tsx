import { Intro } from "../components/Intro";
import { Langues } from "../components/langues";
import { Formations } from "../components/formations";
import { Contact } from "../components/contact";
import { CentresInt } from "../components/centresInt";
import { CompInfo } from "../components/compInfo";
import { CompPerso } from "../components/compPerso";
import REACTLOGO from 'C:/Users/SAFAE/Desktop/my-app/src/images/mypic.jpg'
export const MyCV = () => {
  return (
    <div>
      <h1 className="intro">Curriculum Vitae</h1>
      <img src={REACTLOGO} alt="cvImage" width={500} height={500}/>
      <Intro/>
      <Contact/>
      <Formations/>
      <CompInfo/>
      <CompPerso/>
      <Langues/>
      <CentresInt/>
      <hr></hr>
      <footer>
        <p className="footer">Édité par: Safae Bouziani et Fatima Zahra Boujrad<br />
          dernière mise à jour: 28/10/2023 <br />
          Copyright</p>
      </footer>
    </div>
  );
}
