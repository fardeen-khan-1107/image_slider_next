"use client";
import React from 'react';
import Link from 'next/link';

const Content = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="w-full text-center text-4xl font-bold main">Welcome to Accura tequipment</h1>
        <div>
        <p className='sub-content'>
          Accura is a premier provider of comprehensive products and solutions designed for technical education. We collaborate with companies, colleges, universities, and educational institutions to enhance the education and training of technical specialists, aligning with Indian educational standards. Our commitment is to empower the next generation of technical professionals through innovative and high-quality educational tools and resources.
          <Link href="/learn-more" className="learn-more-link text-blue-600">
            – Learn more!
          </Link>
        </p>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          text-align: center;
          padding: 20px;
          background: linear-gradient(270deg, #e0eafc, #cfdef3);
          background-size: 400% 400%;
          animation: gradientAnimation 15s ease infinite;
        }
        .main{
            background: linear-gradient(90deg, rgba(179,102,128,1) 0%, rgba(159,121,175,1) 99%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent; 
        }
        .sub-contnet{
            background: linear-gradient(90deg, rgba(179,102,128,1) 0%, rgba(159,121,175,1) 99%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent; 
        }
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .content {
          max-width: 800px;
          background: rgba(255, 255, 255, 0.8);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .learn-more-link {
          color: blue;
          text-decoration: underline;
          cursor: pointer;
        }
        h1 {
          margin-bottom: 20px;
        }
        p {
          font-size: 18px;
          line-height: 1.5;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default Content;
