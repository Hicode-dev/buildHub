'use client'
import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Button, notification } from "antd";
import AsyncSelect from 'react-select/async';

const Forms = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const filterColors = (inputValue) => {
    return colourOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  const customInputStyle = {
    fontSize: '14px',
    border: 'none',
    backgroundColor: '#cec7d24b',
    width: '25rem',
    height: '3rem',
    outline: 'none'
  };

  const openNotification = (placement) => {
    notification.info({
      message: `Notification `,
      description: `thank you for sending a message `,
      placement,
      className: 'top-20 '
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const countrySelect = document.getElementById("countries");
      const employmentStatusSelect = document.getElementById("employment-status");
      const skillSelect = document.getElementById("skills");
  
      const country = countrySelect.options[countrySelect.selectedIndex].text;
      const employmentStatus = employmentStatusSelect.options[employmentStatusSelect.selectedIndex].text;
      const skillToLearn = skillSelect.options[skillSelect.selectedIndex].text;
  
      const response = await fetch("https://techxmail.onrender.com/sendmail", {
        method: "POST",
        body: JSON.stringify({
          name: fullname,
          mail: "kingdavies2021@gmail.com",
          text: `Message : ${message} \n Email: ${email} \n Fullname: ${fullname} \n Company Name: ${companyName} \n Phone Number: ${phoneNumber} \n Country: ${country} \n Employment Status: ${employmentStatus} \n Skill to Learn: ${skillToLearn}`,
          subject: " someone signed up on buildhuib waitlist ",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        setFullname("");
        setEmail("");
        setCompanyName("");
        setPhoneNumber("");
        setMessage("");
        openNotification("topRight");
      } else {
        alert("Failed to send the message. Please try again later.");
      }
    } catch (error) {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="block rounded-lg md:px-[2rem]">
      <form onSubmit={handleSubmit}>
        <div className="border-solid border-[rgba(241,_241,_255,_0.12)] text-black shadow-[0px_20px_40px_0px_rgba(186,_186,_186,_0.15)] lg:px-10 w-full lg:w-[30rem] bg-[#E9E4FFB2  ] flex flex-col gap-2 h-[813px] py-12 border rounded-lg">
          <div className="font-medium leading-[24px] text-[#353038] self-start w-16">
            Fullname
          </div>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className="border-solid bg-[#cec7d24b] focus-within:border-[#8c1ae6] bg-[#cec7d24b] outline-none flex flex-col justify-center mb-2 pl-4 h-12 shrink-0 items-start border rounded-lg"
            placeholder="Fullname"
          />
          <div className="whitespace-nowrap font-medium leading-[24px] text-[#353038] self-start w-[111px]">
            Email address
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-solid focus-within:border-[#8c1ae6] bg-[#cec7d24b] outline-none flex flex-col justify-center mb-2 pl-4 h-12 shrink-0 items-start border rounded-lg"
            placeholder="Email address"
          />


          <label className="block  mb-2 text-black outline-none">

country          </label>
          <select id="countries"
            className="select-field outline-none reselect focus-within:border-[#8c1ae6] py-3 rounded-md bg-[#cec7d24b]">
            <option className="">Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>

          <label className="block mb-2 pt-6 text-black outline-none">

          Employment status         </label>
          <select  id="employment-status"
            className="select-field outline-none reselect focus-within:border-[#8c1ae6] py-3 rounded-md bg-[#cec7d24b]">
            <option className="">Unemployed</option>
            <option value="US">Employed</option>
            <option value="CA">Student</option>
            <option value="FR">Rather not say</option>
          </select>

          <label className="block mb-2 text-black outline-none pt-6">

          What skill do you want to learn?</label>
          <select   id="skills"
            className="select-field outline-none reselect focus-within:border-[#8c1ae6] py-3 rounded-md bg-[#cec7d24b]">
            <option className="">Frontend Development</option>
            <option value="US">Backend Development</option>
            <option value="CA">Product Management</option>
            <option value="FR">project Management</option>
            <option value="DE">Digital Marketing </option>
            <option value="DE">product Design </option>
            <option value="DE">Tecnical Writers </option>
            <option value="DE">Cyber security </option>
          </select>


          <button
            type="submit"
            className="bg-black  flex flex-col justify-center h-12 shrink-0 items-center rounded-lg"
            disabled={loading}
          >
            <div className="whitespace-nowrap font-bold leading-[24px] text-white w-[117px]">
              {loading ? "calm down chief " : "Sign Up"}
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};



export default Forms;
