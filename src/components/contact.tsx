import { SlPhone,SlSocialGoogle,SlGlobeAlt,SlHeart } from "react-icons/sl";
export const Contact = () => {
    return (
      <div className="crps">    
        <h2>CONTACT:</h2>
        <ul>
          <li className="flex justify-center items-center"><SlPhone className="mr-3"/>0684418194</li>
          <li className="flex justify-center items-center"><SlSocialGoogle className="mr-3"/>safima234@gmail.com</li>
          <li className="flex justify-center items-center"><SlGlobeAlt className="mr-3"/>Kenitra,Maroc</li>
          <li className="flex justify-center items-center"><SlHeart className="mr-3"/>Célibataire,19 ans</li>
        </ul>
      </div>
    );
  }