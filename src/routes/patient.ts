import { Router } from "express";
import { Patient } from "../modals/patient";

export const patientRouter = Router();

patientRouter.get("/", (req, res) => {
  Patient.find((err, patient) => {
    if (err) {
      res.json({ msg: "no patient found" });
    } else if (patient) {
      res.json(patient);
    } else {
      res.json({ msg: "can not find patient" });
    }
  });
});

patientRouter.post("/", (req, res) => {
  console.log(req.body);
  res.json({ msg: "ok" });
});
