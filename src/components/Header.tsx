"use client";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header className="container-rounded">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-row gap-2">
          <h1 className="text-text">Pavel Kilian</h1>
        </div>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
