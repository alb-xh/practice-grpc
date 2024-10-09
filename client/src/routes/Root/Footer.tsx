import { useNavigate } from 'react-router-dom';

import './Footer.css';

function Footer () {
  const navigate = useNavigate();

  return (
    <footer>
      <button className='new_product' onClick={() => navigate('/create-product')} >+</button>
    </footer>
  )
};

export default Footer;
