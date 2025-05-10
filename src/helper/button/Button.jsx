import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <div>
      <Link href="/about">
        <button className="mb-6 bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600">
          ← Back to All Teachers
        </button>
      </Link>
    </div>
  );
};

export default Button;
