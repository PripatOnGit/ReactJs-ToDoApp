import React from "react";
import "./Tag.css";
const Tag = ({ tagname, selectTag, selected }) => {
  const tagsStyle = {
    Grocery: { backgroundColor: "#fda821" },
    Home: { backgroundColor: "#15d4c8" },
    Study: { backgroundColor: "#ffd12c" },
    Health: { backgroundColor: "#CD853F" },
    default: { backgroundColor: "#f9f9f9" },
  };

  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagsStyle[tagname] : tagsStyle.default}
      onClick={() => selectTag(tagname)}
    >
      {tagname}
    </button>
  );
};

export default Tag;
