import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Form, useParams } from "react-router-dom";

const UserDetails = () => {
  const [userDetail, setuserDetail] = useState(null);
  const { id } = useParams();
  const selectedData = async () => {
    const userData = await axios.get(
      `https://65e975efc9bf92ae3d39369a.mockapi.io/api/v1/users/${id}`
    );
    // console.log(userData.data)
    setuserDetail(userData.data)
  };

  useEffect(() => {
    selectedData();
  }, []);
  return <div>

  <h1>Name : {userDetail?.name}</h1>
  <h1>Email : {userDetail?.email_id}</h1>
  <h1>Mobile Number : {userDetail?.mobile_number}</h1>
  </div>
};

export default UserDetails;
