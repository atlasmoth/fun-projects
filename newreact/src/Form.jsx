import React, { useState, useEffect } from "react";

export default function Form() {
  const [comment, setComment] = useState("");
  console.log("I have been called chale");
  return (
    <form>
      <div className="control">
        <textarea
          className="textarea"
          placeholder="Normal textarea"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onBlur={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
    </form>
  );
}
