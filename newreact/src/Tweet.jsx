import React, { useState, useEffect } from "react";

export default function Tweet({ data }) {
  return <div className="box">{JSON.stringify(data)}</div>;
}
