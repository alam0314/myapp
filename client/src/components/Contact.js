import React, { useState } from 'react';
import "./contact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [inputvalue, setInputvalue] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    message: ""
  });

  const getvalue = (e) => {
    const { name, value } = e.target;
    setInputvalue(() => {
      return {
        ...inputvalue,
        [name]: value
      }
    })

  }

  const sentUserdata = async (e) => {
    e.preventDefault();
    const { fname, lname, email, mobile, message } = inputvalue;
    if (fname === "") {
      toast.error("fname is require")
    } else if (email === "") {
      toast.error("email is require")
    } else if (!email.includes("@")) {
      toast.error("invalid email")
    } else if (mobile === "") {
      toast.error("mobile is require")
    } else {
      const res = await fetch("http://localhost:6002/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fname, lname, email, mobile, message
        })
      });
      const data = await res.json();

      if (data.status === 201) {
        toast.success("Your Response Submitted");
        setInputvalue({
          ...inputvalue,
          fname: "",
          lname: "",
          email: "",
          mobile: "",
          message: ""
        })
      }
      else{
        alert("Message not sent.");
      }
    }
  }

  return (
    <>
      <div className="contact_container">
        <h1 class="heading"> <span>Contact</span> Us </h1>
        <form action="" data-aos="zoom">
          <div class="inputBox">
              <input type="text" placeholder="FirstName" name="fname" data-aos="fade-up" value={inputvalue.fname} onChange={getvalue}/>
              <input type="text" placeholder="LastName" name="lname" data-aos="fade-up" value={inputvalue.lname} onChange={getvalue}/>
              <input type="email" placeholder="email" name="email" data-aos="fade-up" value={inputvalue.email}  onChange={getvalue} />
              <input type="tel" placeholder="mobile" name="mobile" data-aos="fade-up" value={inputvalue.mobile}  onChange={getvalue}/>
              
          </div>
          
          <textarea name="message" placeholder="your message" id="" cols="30" rows="10" data-aos="fade-up" onChange={getvalue} value={inputvalue.message}></textarea>
          
          <input type="submit" value="send message"  class="btnstyle" onClick={sentUserdata}/>
          
        </form>
          
          <ToastContainer />
        </div>
    </>
  )
}

export default Contact