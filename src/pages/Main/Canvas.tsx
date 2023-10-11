import React from "react";
import { EditorFilter, Toolbar, EditorProps, NodeEditor } from "../../components";
import ThemeChanger from "../../components/ThemeChanger/ThemeChanger";

const Canvas: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 h-screen z-20">
        {/* <EditorFilter /> */}
        <NodeEditor />
        <div className="fixed top-5 left-5">
          <ThemeChanger/>
        </div>
        {/* <EditorProps /> */}
      </div>
      {/* <Toolbar /> */}
    </>
  );
};

export default Canvas;
