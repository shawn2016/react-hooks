/*
 * @Author: shawn
 * @LastEditTime: 2019-08-30 08:38:45
 */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
/**
 * @description: useEffect的第二个参数的作用  为空时  卸载组件才会调用，否则可以转值
 * @return:
 */
function Index() {
  useEffect(() => {
    console.log("useEffect=>老弟，你来了！Index页面");
    return () => {
      console.log("老弟，你走了!Index页面");
    };
  }, []);
  return <h2>JSPang.com</h2>;
}

function List() {
  useEffect(() => {
    console.log("useEffect=>老弟，你来了！List页面");
    return () => {
      console.log("老弟，你走了!List页面");
    };
  }, []);
  return <h2>List-Page</h2>;
}

function Example() {
  // 数组解构
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`You clicked ${count} times`);
    return () => {
      console.log("==========");
    };
  }, [count]);
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

      <Router>
        <ul>
          <li>
            {" "}
            <Link to="/">首页</Link>{" "}
          </li>
          <li>
            <Link to="/list/">列表</Link>{" "}
          </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/" component={List} />
      </Router>
    </div>
  );
}
export default Example;
