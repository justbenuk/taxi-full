import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="border-t border-gray-200 py-2 text-center">
        <span className="text-sm">&copy; {new Date().getFullYear()} Just Ben UK</span>
      </div>
    </footer>
  );
}
