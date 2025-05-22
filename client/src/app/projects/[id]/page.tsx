"use client";
import { use, useState } from "react";
import ProjectHeader from "../ProjectHeader";
import Board from "../BoardView";
import List from "../ListView";
import TimeLine from "../TimelineView";
import Table from "../TableView";
import ModalNewTask from "@/components/ModalNewtask";

const Project = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState("Board");
  const [isModelNewTaskOpen, setIsModelNewTaskOpen] = useState(false);
  return (
    <div>
      <ModalNewTask
        id={id}
        isOpen={isModelNewTaskOpen}
        onClose={() => {
          setIsModelNewTaskOpen(false);
        }}
      />
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <Board id={id} setIsModalNewTaskOpen={setIsModelNewTaskOpen} />
      )}
      {activeTab === "List" && (
        <List id={id} setIsModalNewTaskOpen={setIsModelNewTaskOpen} />
      )}
      {activeTab === "Timeline" && (
        <TimeLine id={id} setIsModalNewTaskOpen={setIsModelNewTaskOpen} />
      )}
      {activeTab === "Table" && (
        <Table id={id} setIsModalNewTaskOpen={setIsModelNewTaskOpen} />
      )}
    </div>
  );
};

export default Project;
