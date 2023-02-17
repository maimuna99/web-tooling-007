import React from "react";
import PropTypes from "prop-types";

export default function Task({ task: { title } }) {
  return (
    <>
      <input
        className="relative block w-80 appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        type="text"
        value={title}
        name="title"
        placeholder="Input title"
      />
    </>
  );
}

Task.propTypes = {
  /** Composition of the task */

  value: PropTypes.string.isRequired,
};
