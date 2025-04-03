"use client";

import React, { useEffect, useState } from "react";
import TitleBox from "../common/TitleBox";

const ToDoWrapper = () => {
  const modeArr = [{ title: "All" }, { title: "NotDone" }, { title: "Done" }];

  const getStoredTasks = () => {
    if (typeof window !== "undefined") {
      const storedTasks = localStorage.getItem("list");
      return storedTasks ? JSON.parse(storedTasks) : [];
    }
    return [];
  };

  const [addInputValue, setAddInputValue] = useState("");
  const [tasks, setTasks] = useState<
    { id: number; text: string; isComplete: boolean }[]
  >(getStoredTasks());
  const [selectedNav, setSelectedNav] = useState("All");
  const [updateTaskList, setUpdateTaskList] = useState(tasks);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    if (selectedNav === "All") {
      setUpdateTaskList(tasks);
    } else if (selectedNav === "NotDone") {
      setUpdateTaskList(tasks.filter((item) => !item.isComplete));
    } else if (selectedNav === "Done") {
      setUpdateTaskList(tasks.filter((item) => item.isComplete));
    }
  }, [selectedNav, tasks]);

  const renderState = (item: string) => {
    setSelectedNav(item);
  };

  const addTask = () => {
    if (addInputValue.trim() === "") return;
    const newTask = { id: Date.now(), text: addInputValue, isComplete: false };
    setTasks([...tasks, newTask]);
    setAddInputValue("");
  };

  const completeTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isComplete: true } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="h-140 m-4 p-2 flex flex-col bg-white rounded-xl text-black">
      <TitleBox>할일</TitleBox>
      <div className="h-7 mb-2.5 flex border-b border-black">
        {modeArr.map((item, index) => (
          <div
            key={index}
            onClick={() => renderState(item.title)}
            className={`w-1/3 flex justify-center cursor-pointer ${
              selectedNav === item.title ? "text-red-500 font-bold" : ""
            }`}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="pb-2 flex">
        <input
          value={addInputValue}
          onChange={(e) => setAddInputValue(e.target.value)}
          className="w-2/3 h-8 px-2 border border-gray-400 rounded-xl"
          type="text"
        />
        <button
          onClick={addTask}
          className="w-1/3 h-8 flex justify-center items-center"
        >
          추가
        </button>
      </div>
      <div className="overflow-y-scroll">
        {updateTaskList.map((item) => (
          <div key={item.id} className="px-2 flex border-b border-gray-400">
            <div
              className={`w-2/3 ${
                item.isComplete ? "text-gray-400 line-through" : ""
              }`}
            >
              {item.text}
            </div>
            <div className="w-1/3 flex">
              <button onClick={() => completeTask(item.id)} className="w-1/2">
                완료
              </button>
              <button onClick={() => deleteTask(item.id)} className="w-1/2">
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoWrapper;
