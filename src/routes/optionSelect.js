import { Router } from "express";
import {
  dayServiceGetAll,
  guardTypeGetAll,
  modalityHourGetAll,
  categorySelectGetAll,
} from "../controllers/optionSelect";

const router = Router();

router.get("/guardtype", guardTypeGetAll);

router.get("/modalityhour", modalityHourGetAll);

router.get("/dayservice", dayServiceGetAll);

router.get("/categorysel", categorySelectGetAll);
export default router;
