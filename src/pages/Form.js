import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useSelector,useDispatch } from "react-redux";
import { handleApiCall } from "../api/handleApiCall";
import { toast } from "react-toastify";
import { setUser } from "../redux/features/userSlice";


const Form = () => {
  const navigate = useNavigate();
  const uid = useSelector((state) => state.user.uid);
  console.log(uid);

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    dob: "",
    phone: "",
    email: "",
    NIC: "",
    province: "",
    city: "",
    ElectionDistrict: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to backend)
    console.log("Form submitted");
    console.log(form);

    try {
      const response = await handleApiCall(
        `http://localhost:5000/api/users/update/${uid}`,
        "PATCH",
        { 'Content-Type': 'application/json' },
        form
      );

      if (response.status === 200){
        dispatch(setUser({
          uid : response.data.updatedUser._id,
          firstname : response.data.updatedUser.firstname,
          email : response.data.updatedUser.email
        }))
      }
    }catch(error){
      console.log(error);
      toast.error("failed" + error);
    }
    toast.success("User form created..!")
    navigate('/dashboard');
  };

  const provinces = [
    "Northern Province",
    "North Central Province",
    "North Western Province",
    "Central Province",
    "Western Province",
    "Eastern Province",
    "Southern Province",
    "Sabaragamuwa Province",
    "Uva Province"
  ];

  const districts = [
    "Colombo", "Gampaha", "Kalutara", "Kandy", "Matale", "Nuwara Eliya", "Galle", "Matara", "Hambantota",
    "Jaffna", "Kilinochchi", "Mannar", "Vavuniya", "Mullaitivu", "Batticaloa", "Ampara", "Trincomalee",
    "Kurunegala", "Puttalam", "Anuradhapura", "Polonnaruwa", "Badulla", "Monaragala", "Ratnapura", "Kegalle"
  ];

  const cities = [
    "Akkaraipattu", "Ambalangoda", "Ampara", "Anuradhapura", "Badulla", "Balangoda", "Bandarawela", "Batticaloa",
    "Chilaw", "Colombo", "Dambulla", "Dehiwala-Mount Lavinia", "Embilipitiya", "Galle", "Gampaha", "Gampola",
    "Hambantota", "Hatton", "Horana", "Ja-Ela", "Jaffna", "Kalutara", "Kandy", "Kegalle", "Kelaniya", "Kilinochchi",
    "Koggala", "Kurunegala", "Maharagama", "Matale", "Matara", "Monaragala", "Moratuwa", "Mullaitivu",
    "Nawalapitiya", "Negombo", "Nuwara Eliya", "Panadura", "Peliyagoda", "Pettah", "Piliyandala", "Point Pedro",
    "Polonnaruwa", "Puttalam", "Ratnapura", "Tangalle", "Trincomalee", "Vavuniya", "Wattala"
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-Poppins">
      <div className="bg-white shadow-lg rounded-lg px-8 py-10 w-full max-w-5xl ">
        <div className="flex justify-center mb-6">
          <Link to="/">
            <img alt="Volety" src={Logo} className="h-8 w-auto" />
          </Link>
        </div>

        <h2 className="text-2xl mb-2 font-bold">Fill out your information</h2>
        <p className="mb-8 text-gray-600 text-sm">
          Please fill out your information below
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="block text-left text-gray-800 font-bold">First Name</label>
              <input type="text" name="firstname" placeholder="First Name" className="w-full text-sm p-2 mt-1 border border-gray-300 rounded-lg" onChange={handleChange} />
            </div>

            <div className="flex flex-col">
              <label className="block text-left text-gray-800 font-bold">Middle Name</label>
              <input type="text" name="middlename" placeholder="Middle Name" className="w-full text-sm p-2 mt-1 border border-gray-300 rounded-lg" onChange={handleChange} value={form.middleName} />
            </div>

            <div className="flex flex-col">
              <label className="block text-left text-gray-800 font-bold">Last Name</label>
              <input type="text" name="lastname" placeholder="Last Name" className="w-full text-sm p-2 mt-1 border border-gray-300 rounded-lg" onChange={handleChange} value={form.lastName} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="block text-left text-gray-800 font-bold">Birthday</label>
              <input type="date" name="dob" className="w-full text-sm p-2 mt-1 border border-gray-300 rounded-lg" onChange={handleChange} value={form.birthday} />
            </div>

            <div className="flex flex-col">
              <label className="block text-left text-gray-800 font-bold">Contact Number</label>
              <div className="flex items-center mt-1">
                <span className="p-2 text-sm inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-100 text-gray-700 rounded-l-md">
                  +94
                </span>
                <input type="text" name="phone" placeholder="Contact Number" className="w-full text-sm p-2 border border-gray-300 rounded-r-lg" onChange={handleChange} value={form.contactNumber} />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="block text-left text-gray-800 font-bold">Email</label>
            <input type="email" name="email" placeholder="Email" className="w-full text-sm p-2 mt-1 border border-gray-300 rounded-lg" onChange={handleChange} value={form.email} />
          </div>

          <div className="flex flex-col">
            <label className="block text-left text-gray-800 font-bold">NIC Number</label>
            <input type="text" name="NIC" placeholder="NIC Number" className="w-full text-sm p-2 mt-1 border border-gray-300 rounded-lg" onChange={handleChange} value={form.NIC} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="block text-left text-gray-800 font-bold">Province</label>
              <select name="province" className="w-full text-sm p-2 mt-1 border border-gray-300 rounded-lg" onChange={handleChange} value={form.province}>
                <option value="" disabled>Select Province</option>
                {provinces.map((province, index) => (
                  <option key={index} value={province}>{province}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="block text-left text-gray-800 font-bold">City/Municipality</label>
              <select name="city" className="w-full text-sm p-2 mt-1 border border-gray-300 rounded-lg" onChange={handleChange} value={form.city}>
                <option value="" disabled>Select City/Municipality</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="block text-left text-gray-800 font-bold">Electoral District</label>
              <select name="ElectronDistric" className="w-full text-sm p-2 mt-1 border border-gray-300 rounded-lg" onChange={handleChange} value={form.electionDistrict}>
                <option value="" disabled>Select Electoral District</option>
                {districts.map((district, index) => (
                  <option key={index} value={district}>{district}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <button type="submit" className="w-full p-3 bg-[#a81d74] text-white rounded-lg cursor-pointer text-base hover:bg-[#a81d74] transition">
              SUBMIT
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <Link to="/signup" className="text-[#a81d74] hover:underline">Back to Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Form;