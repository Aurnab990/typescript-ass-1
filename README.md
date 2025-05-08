# What are some differences between interfaces and types in TypeScript?
Ans: Interface and Type alias are the most important for TypeScript. Their system or declaration is different, but the goal is pretty much same. If we make some difference between them, below I discuss on it.

In every primitive data types we can use Type alias, and for Object, we can use an Interface or a types both. But for object it prefer Interface.
Now we will see the basic definition of both.

Type Alias:
<pre lang="markdown">
  ```ts types Person = {
  name: string, 
  phone: number}
  ``` </pre>

Interface:
<pre lang="markdown"> ```ts interface Person {name: string, phone: number}``` </pre>


