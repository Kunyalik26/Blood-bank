import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          Managing a blood bank is a multifaceted task crucial to healthcare systems. It involves maintaining a diverse and ample blood supply through strategic planning, regular community blood drives, and awareness campaigns. Stringent safety protocols, including donor screening and infectious disease testing, ensure the quality of stored blood. Community engagement initiatives dispel myths, encouraging voluntary donations. In emergencies, effective communication channels, disaster preparedness plans, and collaborations with healthcare organizations are pivotal. Technological integration, such as automated inventory systems, enhances efficiency and responsiveness. Overall, successful blood bank management requires a comprehensive approach, combining community involvement, safety measures, and technological advancements to sustain a readily available and safe blood supply.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
