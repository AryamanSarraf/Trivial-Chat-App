import { Router } from "express";
import {
  handleGetIndex,
  handleGetJobs,
  handleGetCovid19,
  handleGetFacilities,
  handleGetNoticeBoard,
  handleGetMessage,
  handleGetWelcomeUser,
  handlePostJobs,
  handleGetJob,
} from "../controllers/index";
import { auth } from "../controllers/services/microservices/auth";

export const router = Router();

router.get("/", handleGetIndex);
router.get("/jobs", auth, handleGetJobs);
router.get("/getjobs", auth, handleGetJob);
router.get("/covid19", auth, handleGetCovid19);
router.get("/facilities", auth, handleGetFacilities);
router.get("/notice-board", auth, handleGetNoticeBoard);
router.get("/messages", auth, handleGetMessage);
router.get("/welcomeuser", auth, handleGetWelcomeUser);
router.post("/jobs", auth, handlePostJobs);
