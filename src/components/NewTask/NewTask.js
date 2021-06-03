import { useCallback } from "react";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const { onAddTask } = { ...props };
  const createTask = useCallback(
    (taskText, data) => {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
      onAddTask(createdTask);
    },
    [onAddTask]
  );

  const enterTaskHandler = useCallback(
    (taskText) => {
      sendTaskRequest(
        {
          url: "https://react-complete-guide-3008c-default-rtdb.firebaseio.com/tasks.json",
          method: "POST",
          body: { text: taskText },
          headers: {
            "Content-Type": "application/json",
          },
        },
        createTask.bind(null, taskText)
      );
    },
    [createTask, sendTaskRequest]
  );

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
