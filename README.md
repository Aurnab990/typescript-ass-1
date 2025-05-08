# What are some differences between interfaces and types in TypeScript?
Ans: Interface and Type alias are the most important for TypeScript. Their system or declaration is different, but the goal is pretty much same. If we make some difference between them, below I discuss on it.

In every primitive data types we can use Type alias, and for Object, we can use an Interface or a types both. But for object it prefer Interface.
Now we will see the basic definition of both.

Type Alias:
<pre lang="markdown">
  ```
  type Person = {
  name: string, 
  phone: number
  }
  ``` </pre>

Interface:
<pre lang="markdown">
  ```
  interface Person {
  name: string, 
  phone: number
  }
  ``` </pre>

We can also see the difference between them when we need to extends another varriable or class. Interface uses inheritance for extend class, but type alias not support inheritance it use intersection (&) for extends class or variable. We can see the syntex of both.
Type Alias:
<pre lang="markdown">
  ```
  type User= {
  name: string;
  }
  type useerWithRole = User & (role: string);
  ``` </pre>

  Interface:
  <pre lang="markdown">
  ```
  interface User{
    name: string;
    }
  interface UserWithRole extends User{
    role: string;
  }
  ``` </pre>

  Another important difference between them is: Interface can be merged ,but Types can't be merged, it gives "Duplicate Identifier error".

  Type Alias:
  <pre lang="markdown">
  ```
  type User= {name: string};
  type User= {address: string}; 
  }
  
  ``` </pre>
  ```Duplicate Identifier error```
  Interface:
  <pre lang="markdown">
  ```
  interface User {name: string};
  interface User {address: string}; 
  }
  
  ``` </pre>

  Conclusion:
  We can use both of them very easily. But when and where we need to use them and get some benefit that is the most important things. 
  So if work with Object, Classes we can use Interface and also for merge. And on the other hand, in Tuples , union , intersection for 
  this we can use Type Alias for more compatability.

  ***
  
  


