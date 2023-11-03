import Link from "next/link";
import React from "react";

const Socials = () => {
  return (
    <div>
      <ul className="flex gap-5">
        <Link href={"#"}>Link 1</Link>
        <Link href={"#"}>Link 2</Link>
        <Link href={"#"}>Link 3 </Link>
        <Link href={"#"}>Link 4</Link>
      </ul>
    </div>
  );
};

export default Socials;
