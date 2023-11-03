"use client";
import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="container-rounded">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-row gap-2">
          <h1 className="text-text">Pavel Kilian</h1>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
