import { useGetTasksQuery } from "@/state/api";
import Header from "@/components/Header";
import TaskCard from "@/components/TaskCard";

type ListProps = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

const ListView = ({ id, setIsModalNewTaskOpen }: ListProps) => {
  const input = {
    projectId: Number(id),
  };
  const { data: tasks, isLoading, error } = useGetTasksQuery(input);
  {
    isLoading && <div>Loading...</div>;
  }
  {
    error && <div>Error loading tasks</div>;
  }
  return (
    <div className="px-4 pb-8 xl:px-6">
      <div className="pt-5">
        <Header
          name="List"
          buttonComponent={
            <button
              className="bg-blue-primary flex items-center rounded px-3 py-2 text-white hover:bg-blue-600"
              onClick={() => setIsModalNewTaskOpen(true)}
            >
              Add Task
            </button>
          }
          isSmallText
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {tasks && tasks.map((task) => <TaskCard key={task.id} task={task} />)}
      </div>
    </div>
  );
};

export default ListView;
