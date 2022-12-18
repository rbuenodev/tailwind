import React from "react";
import Badge from "../components/badge";
import Button from "../components/button";
import Card from "../components/card";
import Dropdown from "../components/dropdown";
import Input from "../components/input";

const Components: React.FC = () => {
  return (
    <div className="container mx-auto mt-10">
      <a
        href="/"
        className="bg-green-400 hover:bg-green-700 py-2 px-4 text-2xl rounded-md shadow-sm"
      >
        Voltar
      </a>
      <Badge />
      <Button />
      <Card />
      <Dropdown />
      <Input />
    </div>
  );
};
export default Components;
