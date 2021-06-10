import { Router } from "express";
import { quarantinePatient } from "../modals/quarantine";

export const quarantineRouter = Router();

interface IPatient {
  name: string;
  requirenment: string;
  address: string;
}

quarantineRouter.get("/", (req, res) => {
  quarantinePatient.find((err, patient) => {
    if (err) {
      res.json({ msg: "no patient found" });
    } else if (patient) {
      res.json(patient);
    } else {
      res.json({ msg: "can not find patient" });
    }
  });
});

quarantineRouter.post("/", (req, res) => {
  const { name, requirenment, address }: IPatient = req.body;
  if (
    !name ||
    name === "" ||
    !requirenment ||
    requirenment === null ||
    !address ||
    address === ""
  ) {
    res.json({ msg: "please fill the form" });
  } else {
    const newPatient = new quarantinePatient({
      name,
      requirenment,
      address,
    });
    newPatient.save();
    res.json({ msg: "ok" });
  }
});
