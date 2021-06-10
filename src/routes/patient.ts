import { Router } from "express";
import { Patient } from "../modals/patient";

export const patientRouter = Router();

interface IPatient {
  name: string;
  age: number;
  address: string;
}

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
  const { name, age, address }: IPatient = req.body;
  if (
    !name ||
    name === "" ||
    !age ||
    age === null ||
    !address ||
    address === ""
  ) {
    console.log("no patient");
    res.json({ msg: "please fill the form" });
  } else {
    const newPatient = new Patient({
      name,
      age,
      address,
    });
    console.log(newPatient);
    res.json({ msg: "ok" });
  }
});
