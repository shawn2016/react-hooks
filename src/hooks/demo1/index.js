/*
 * @Author: shawn
 * @LastEditTime: 2019-08-30 08:22:41
 */
// import React, { useState } from "react";

// /**
//  * @description: 就是React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序。
//  * @return:
//  */
// let showSex = true
// function Example2(){
//     const [ age , setAge ] = useState(18)
//     if(showSex){
//         const [ sex , setSex ] = useState('男')
//         showSex=false
//     }

//     const [ work , setWork ] = useState('前端程序员')
//     return (
//         <div>
//             <p>JSPang 今年:{age}岁</p>
//             <p>性别:{sex}</p>
//             <p>工作是:{work}</p>

//         </div>
//     )
// }
// export default Example2;
/**
 * @description:  多状态声明的注意事项
 * @return:
 */
import React, { useState } from "react";
function Example2() {
  const [age, setAge] = useState(18);
  const [sex, setSex] = useState("男");
  const [work, setWork] = useState("前端程序员");
  return (
    <div>
      <p>shawn 今年:{age}岁</p>
      <p>性别:{sex}</p>
      <p>工作是:{work}</p>
    </div>
  );
}
export default Example2;
