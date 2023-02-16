import React from "react";

export default function Todo({ todo }) {
  return (
    <div>
      {/* <label>
        <input type="checkbox" checked={todo.complete} readOnly />
        {todo.name}

      </label> */}
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div
            key={todo.name}
            className="relative pl-20 bg-orange-50 rounded-lg "
          >
            <dt className="text-base font-semibold leading-7 text-gray-900">
              <div
                className="absolute top-5 left-2 flex items-center justify-center rounded-lg Class
                    Properties"
              >
                {/* <feature.icon className="w-24  h-24"></feature.icon> */}
              </div>
              {todo.emoji}
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600 pl-6">
              {todo.description}
            </dd>
            {/* <Counter /> */}
          </div>
        </dl>
      </div>
    </div>
  );
}
