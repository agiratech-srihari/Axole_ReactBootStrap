import React from 'react'
import './FooterImg.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faCalendarAlt } from '@fortawesome/fontawesome-free-solid';

const index = () => {

  const imgArray = ['https://preview.colorlib.com/theme/axole/images/image_1.jpg.webp',
    'https://preview.colorlib.com/theme/axole/images/image_2.jpg.webp',
    'https://preview.colorlib.com/theme/axole/images/image_3.jpg.webp',
  ];

  return (
    <>
      {imgArray.map((item, i) => (
        <div className='footer-image-cont' key={i} >
          <img src={item} className="footer-img"/>
          <div>
            <div className='footer-div-flex'>
              <p className='footer-icon-content'><FontAwesomeIcon icon={faCalendarAlt}  /> JAN. 30,2021</p>
              <p className='footer-icon-content'><FontAwesomeIcon icon={faUser}  /> ADMIN</p>
            </div>
            <h6 className='footer-h6'>Creativity and Inspiration</h6>
          </div>
        </div>
      ))}
    </>
  )
}

export default index