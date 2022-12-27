import React from "react";
import img1 from '../../Assets/img/blogQ/1.png'
import img2 from '../../Assets/img/blogQ/2.jpg'
import img3 from '../../Assets/img/blogQ/3.jpg'
import img4 from '../../Assets/img/blogQ/4.png'


const BlogQ = () => {
  return (
    <div>
      <div>
        <div className="card card-side bg-base-100 shadow-xl mt-10">
          <img src={img1} alt="Movie" className="w-1/4" />
          <div className="card-body">
            <h2 className="card-title">Difference between SQL and NoSQL </h2>
            <p>
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables with logical links between them). NoSQL is a class of DBMs
              that are non-relational and generally do not use SQL.
            </p>
           
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl mt-10">
          <img src={img2} alt="Movie" className="w-1/4" />
          <div className="card-body">
            <h2 className="card-title">What is JWT, and how does it work? </h2>
            <p>
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
            </p>
            
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl mt-10">
          <img src={img3} alt="Movie" className="w-1/4" />
          <div className="card-body">
            <h2 className="card-title">What is the difference between javascript and NodeJS? </h2>
            <p>
            JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
            </p>
           
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl mt-10">
          <img src={img4} alt="Movie" className="w-1/4" />
          <div className="card-body">
            <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
            <p>
            How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogQ;
