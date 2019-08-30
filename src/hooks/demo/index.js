/*
 * @Author: shawn
 * @LastEditTime: 2019-08-30 08:16:43
 */
import React, { useState } from "react";
/**
 * @description: hooks简单使用 useState是react自带的一个hook函数，它的作用是用来声明状态变量
 * @return:
 */
function Example() {
  // 数组解构
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
    </div>
  );
}
export default Example;
