import React from "react";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BatteryFullIcon from "@material-ui/icons/BatteryFull";
import DialpadIcon from "@material-ui/icons/Dialpad";

function BloodRequestForm({ handleChange, handleSubmit, values }) {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="row gy-2">
        <h3 className="text-center form-title mb-4">Add Blood Request</h3>
        <hr className="mt-0" />

        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <FingerprintIcon fontSize="small" />
          </span>
          <input
            name="patient_id"
            onChange={handleChange}
            type="text"
            value={values.patient_id}
            className="form-control py-2"
            placeholder="Enter patient ID"
          />
        </div>

        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <AccountCircleIcon fontSize="small" />
          </span>
          <input
            name="patient_name"
            onChange={handleChange}
            type="text"
            value={values.patient_name}
            className="form-control py-2"
            placeholder="Enter patient name"
          />
        </div>

        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <BatteryFullIcon fontSize="small" />
          </span>
          <select
            name="blood_group"
            onChange={handleChange}
            value={values.blood_group}
            className="form-control py-2"
          >
            <option value="" disabled>
              Blood Group...
            </option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <DialpadIcon fontSize="small" />
          </span>
          <input
            name="plasma"
            onChange={handleChange}
            type="text"
            value={values.plasma}
            className="form-control py-2"
            placeholder="Enter plasma"
          />
        </div>

        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <DialpadIcon fontSize="small" />
          </span>
          <input
            name="platelet"
            onChange={handleChange}
            type="text"
            value={values.platelet}
            className="form-control py-2"
            placeholder="Enter platelet"
          />
        </div>

        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <DialpadIcon fontSize="small" />
          </span>
          <input
            name="rbc"
            onChange={handleChange}
            type="text"
            value={values.rbc}
            className="form-control py-2"
            placeholder="Enter rbc"
          />
        </div>

        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <DialpadIcon fontSize="small" />
          </span>
          <input
            name="wb"
            onChange={handleChange}
            type="text"
            value={values.wb}
            className="form-control py-2"
            placeholder="Enter whole blood"
          />
        </div>

        <div className="input-group mx-auto d-block text-right mt-2">
          <button
            type="submit"
            className="btn-submit btn btn-primary shadow p-2 px-4"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default BloodRequestForm;
