import cppk from './../../assets/logo/Cppk_logo.svg'
import rti from './../../assets/logo/rti_logo.svg'
import logo_3 from './../../assets/logo/3_logo.svg'

import './Partners.css'


const Partners = () => {
    
    return (
        <div className="container">
            <div className="partners">
                <h2>Наши партнеры</h2>
                <div className="partners_logo">
                    <img src={cppk} alt="" />
                    <img src={rti} alt="" />
                    <img src={logo_3} alt="" />
                </div>        
            </div>  
        </div>
      );
}
 
export default Partners;