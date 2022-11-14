import React from "react";
import "./Container.scss";

type ContainerProps = {
  children: React.ReactNode;
};
export default function Container({ children }: ContainerProps) {
  return (
    <div className="app-container">
      <div className="body">{children}</div>
    </div>
  );
}
