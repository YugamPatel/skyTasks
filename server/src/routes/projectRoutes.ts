import { Router } from "express";
import { getProjects, createProject } from "../controllers/projectController";

const router = Router();

// Define the route for getting all projects
router.get("/", getProjects);
router.post("/", createProject);

export default router;