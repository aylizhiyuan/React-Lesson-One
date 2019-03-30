## 了解JSX语法规则

1. 了解什么是jsx?
2. jsx语法如何写？
3. 如何将jsx语法输出？

> jsx可以作为表达式插入，例如{1+2}
> 同时可以放任何js的代码 例如{ function(){return "is good"} };
> 可以进行条件判断 { isGoodWord ? <strong>is good </strong> : <strong>is not good</strong>}
> jsx甚至可以作为函数的变量传递到函数的内部使用 例如{this.renderGoodWord(<strong>is good</strong>,<span>is not good</span>)}
