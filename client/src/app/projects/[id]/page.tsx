"use client";
import { use, useState } from "react";
import ProjectHeader from "../ProjectHeader";
import BoardView from "../BoardView";

const page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState("Board");
  const [isModelNewTaskOpen, setIsModelNewTaskOpen] = useState(false);
  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <BoardView id={id} setIsModalNewTaskOpen={setIsModelNewTaskOpen} />
      )}
    </div>
  );
};

export default page;
