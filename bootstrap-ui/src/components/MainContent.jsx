    import React from 'react'   
import SocialIcon from './SocialIcon';
import  Profile from '../assets/profile.png';

const MainContent = () => {
    return (
        <div className="container w-80 mt-5 bg-light p-5">
            <div className='row p-5 pb-md-0 pb-5 align-items-center'>
                <div className='col-12 col-md-7 order-2 order-md-1'>
                    <h1 className='fw-bold mb-5'>Hi, I'm John Deo.</h1>

                    <p 
                    className='fs-5 fw-medium'>
                         A freelancing Web Developer from London . I convert custom Web
                        Design to Bootsrap Template . I make YouTube videos and Write
                        Blogs.
                    </p>
                    <a href="" className='btn btn-outline-success mt-3'>I'M AVAILABLE</a>
                   <SocialIcon /> 

                </div>
                <div className='col-12 col-md-5 order-1 order-md-2 mb-5 mb-md-0'>
                    <img src={Profile} alt="" />
                </div>
            </div>

        </div>
    )
}

export default MainContent;
