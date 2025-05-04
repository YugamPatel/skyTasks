import { Router } from "express";
import { getProjects } from "../controllers/projectController";

const router = Router();

// Define the route for getting all projects
router.get("/", getProjects);

export default router;