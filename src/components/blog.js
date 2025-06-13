import { useState } from "react";

const Blog = () => {
  const [currentArticle, setCurrentArticle] = useState(0);

  const parser = new DOMParser();

  const blogArticles = [
    {
      subject: "React",
      title: "Understanding Unique Keys in React Lists",
      content: [
        <div className="blog-paragraph">
          One common error developers face in React is the warning: "Each child
          in a list should have a unique 'key' prop." This issue arises when
          rendering lists of elements without assigning a proper identifier,
          causing React to mismanage rendering updates.
        </div>,
        <div className="blog-paragraph">
          React uses keys to track elements between renders. Without unique
          keys, React might reuse incorrect components, leading to unpredictable
          UI behavior. It's especially problematic in dynamic lists where items
          are frequently added or removed.
        </div>,
        <div className="blog-paragraph">
          To avoid this, always assign a unique identifier, preferably a stable
          ID from your data source. Avoid using array indexes as keys, as this
          can cause bugs when the order of items changes.
        </div>,
        <div className="blog-paragraph">
          Here's an example of proper key usage:
          <pre>
            <code>
              {`\n items.map(item => <li key={item.id}>{item.name}</li>)`}
            </code>
          </pre>
        </div>,
        <div className="blog-paragraph">
          In summary, failing to provide unique keys in React lists leads to
          rendering bugs. The solution is to ensure each list item has a
          consistent and unique key, usually from a unique ID in the data model.
        </div>,
      ],
    },
    {
      subject: "React",
      title: "Conditionally Adding Attributes in React",
      content: [
        <div className="blog-paragraph">
          React developers often need to conditionally apply HTML attributes
          like 'disabled', 'required', or 'className' to JSX elements. This need
          becomes tricky when the logic is complex or involves multiple
          conditions.
        </div>,
        <div className="blog-paragraph">
          JSX allows you to use JavaScript expressions directly inside your
          component render methods. You can leverage ternary operators or
          short-circuit evaluation to conditionally apply attributes.
        </div>,
        <div className="blog-paragraph">
          One common approach is to create attribute objects dynamically and
          spread them onto elements. This keeps the JSX cleaner and more
          readable.
        </div>,
        <div className="blog-paragraph">
          Example:
          <pre>
            <code>{`<input type="text" {...(isRequired && { required: true })} />`}</code>
          </pre>
        </div>,
        <div className="blog-paragraph">
          To sum up, conditionally adding attributes in React is best handled
          using JavaScript expressions in JSX. This approach is flexible and
          allows clean conditional logic within your components.
        </div>,
      ],
    },
    {
      subject: "C#",
      title: "Using Directives: Inside or Outside Namespace?",
      content: [
        <div className="blog-paragraph">
          A frequent debate among C# developers is whether 'using' directives
          should be placed inside or outside of namespace declarations. This can
          impact both readability and the potential for naming conflicts.
        </div>,
        <div className="blog-paragraph">
          Traditionally, 'using' statements are placed at the top of the file,
          outside any namespace declaration. However, with the introduction of
          top-level statements in C# 10, some developers prefer placing them
          inside the namespace to limit scope.
        </div>,
        <div className="blog-paragraph">
          Microsoft recommends placing them outside unless you have a specific
          reason to contain them. Doing so helps in avoiding deeply nested
          structures and maintains consistency with the majority of codebases.
        </div>,
        <div className="blog-paragraph">
          Example:
          <pre>
            <code>{`using System; \n namespace MyApp   \n class Program { 'static' void Main() {     Console.WriteLine("Hello World"); }<  \n     }<  \n }`}</code>
          </pre>
        </div>,
        <div className="blog-paragraph">
          In conclusion, while C# allows flexibility, placing 'using' directives
          outside the namespace is the widely accepted practice, reducing
          confusion and enhancing readability.
        </div>,
      ],
    },
    {
      subject: "C#",
      title: "Getting Integer Values from Enums in C#",
      content: [
        <div className="blog-paragraph">
          Enums are a powerful feature in C#, but extracting their underlying
          integer values can be confusing for newcomers. Developers often need
          these values when interacting with databases or APIs.
        </div>,
        <div className="blog-paragraph">
          Each enum member is associated with an integer value by default. You
          can cast an enum to an integer to retrieve its value. This allows for
          cleaner and more interoperable code.
        </div>,
        <div className="blog-paragraph">
          Be cautious when assigning custom values to enums, as it can lead to
          unexpected behavior if not handled carefully. Always ensure enum
          values are unique and meaningful.
        </div>,
        <div className="blog-paragraph">
          Example:
          <pre>
            <code>{`enum Status { Active = 1, Inactive = 2 }<  \n int value = (int)Status.Active; // value = 1`}</code>
          </pre>
        </div>,
        <div className="blog-paragraph">
          Ultimately, understanding how to cast enums to integers in C# allows
          developers to bridge enum logic with external systems efficiently and
          correctly.
        </div>,
      ],
    },
    {
      subject: "React",
      title: "Optimizing Performance with React.memo",
      content: [
        <div className="blog-paragraph">
          React applications often face performance issues when components
          unnecessarily re-render. This can significantly affect responsiveness
          in large applications with many nested components.
        </div>,
        <div className="blog-paragraph">
          React provides a built-in solution with{" "}
          <pre>
            <code>{`React.memo`}</code>
          </pre>
          , a higher-order component that prevents re-rendering when props
          haven’t changed.
        </div>,
        <div className="blog-paragraph">
          It works best for functional components and is ideal for components
          with expensive rendering logic. Be cautious when using it with props
          that change frequently or are deeply nested.
        </div>,
        <div className="blog-paragraph">
          Example:
          <pre>
            <code>{`const MyComponent = React.memo(function MyComponent(props)   \n   \n   return <div>{props.name}</div>;<  \n });`}</code>
          </pre>
        </div>,
        <div className="blog-paragraph">
          To conclude,{" "}
          <pre>
            <code>{`React.memo`}</code>
          </pre>{" "}
          is an effective way to improve rendering performance by memoizing
          functional components based on props stability.
        </div>,
      ],
    },
    {
      subject: "React",
      title: "Handling Forms with Controlled Components",
      content: [
        <div className="blog-paragraph">
          Handling user input in forms is a common task in React applications.
          Without a structured approach, managing form state can quickly become
          difficult and error-prone.
        </div>,
        <div className="blog-paragraph">
          React promotes the use of controlled components, where form input
          values are managed by the component’s state.
        </div>,
        <div className="blog-paragraph">
          This approach allows for real-time validation, conditional rendering,
          and integration with other state logic.
        </div>,
        <div className="blog-paragraph">
          Example:
          <pre>
            <code>{`const [name, setName] = useState('');<  \n <input value={name} onChange={e => setName(e.target.value)} />`}</code>
          </pre>
        </div>,
        <div className="blog-paragraph">
          In short, using controlled components ensures a predictable and
          maintainable approach to form handling in React.
        </div>,
      ],
    },
    {
      subject: "React",
      title: "Using useEffect Correctly",
      content: [
        <div className="blog-paragraph">
          React's{" "}
          <pre>
            <code>{`useEffect`}</code>
          </pre>{" "}
          hook is often misused or misunderstood, leading to unexpected behavior
          like infinite loops or stale data.
        </div>,
        <div className="blog-paragraph">
          <pre>
            <code>{`useEffect`}</code>
          </pre>{" "}
          allows side effects such as data fetching or subscriptions in function
          components. It should be used carefully with dependency arrays to
          avoid unnecessary re-renders.
        </div>,
        <div className="blog-paragraph">
          Dependencies must include all variables from the component’s scope
          that are used inside the effect to prevent bugs.
        </div>,
        <div className="blog-paragraph">
          Example:
          <pre>
            <code>{`useEffect(() =>   \n   \n   fetchData();<  \n }, [query]);`}</code>
          </pre>
        </div>,
        <div className="blog-paragraph">
          To sum up, using{" "}
          <pre>
            <code>{`useEffect`}</code>
          </pre>{" "}
          correctly involves managing dependencies properly and understanding
          how React schedules re-renders based on them.
        </div>,
      ],
    },
    {
      subject: "React",
      title: "Conditional Rendering Techniques in React",
      content: [
        <div className="blog-paragraph">
          Conditional rendering is key to dynamic UI, but beginners often
          clutter their JSX with confusing ternary operators or duplicated code.
        </div>,
        <div className="blog-paragraph">
          React supports several conditional rendering patterns such as
          ternaries, short-circuiting, and function-based returns.
        </div>,
        <div className="blog-paragraph">
          Choosing the right pattern improves readability and reduces bugs in
          conditional UI logic.
        </div>,
        <div className="blog-paragraph">
          Example:
          <pre>
            <code>{`{isLoggedIn ? <Dashboard /> : <Login />}`}</code>
          </pre>
        </div>,
        <div className="blog-paragraph">
          Ultimately, using the right conditional rendering pattern based on
          context makes your React components more concise and readable.
        </div>,
      ],
    },
    {
      subject: "React",
      title: "Lifting State Up in React Components",
      content: [
        <div className="blog-paragraph">
          Sharing state between React components is a common requirement, but
          can become tricky if state management is poorly structured.
        </div>,
        <div className="blog-paragraph">
          The React way to solve this is to 'lift state up' to the closest
          common ancestor so multiple child components can access and update it.
        </div>,
        <div className="blog-paragraph">
          This pattern improves state consistency across components and avoids
          prop drilling or redundant logic.
        </div>,
        <div className="blog-paragraph">
          Example:
          <pre>
            <code>{`function Parent()   \n   \n   const [count, setCount] = useState(0);<  \n   return (<Child count={count} setCount={setCount} />);<  \n }`}</code>
          </pre>
        </div>,
        <div className="blog-paragraph">
          In conclusion, lifting state up ensures centralized state management
          for multiple child components needing shared data.
        </div>,
      ],
    },
    {
      subject: "React",
      title: "Using Context API for State Sharing",
      content: [
        <div className="blog-paragraph">
          Prop drilling becomes a problem in deeply nested component trees where
          state needs to be shared across multiple levels.
        </div>,
        <div className="blog-paragraph">
          React's Context API offers a clean solution by allowing components to
          access shared state without passing props manually.
        </div>,
        <div className="blog-paragraph">
          Context is best used for global state like themes, auth, or user
          preferences. Avoid overusing it for frequently updated local state.
        </div>,
        <div className="blog-paragraph">
          Example:
          <pre>
            <code>{`const ThemeContext = React.createContext();<  \n <ThemeContext.Provider value={value}>...</ThemeContext.Provider>`}</code>
          </pre>
        </div>,
        <div className="blog-paragraph">
          To summarize, the Context API solves prop drilling by providing a
          mechanism to share state across many components with ease.
        </div>,
      ],
    },
    {
      subject: "React",
      title: "Using Refs to Access DOM Elements in React",
      content: [
        <div className="blog-paragraph">
          In some cases, developers need direct access to DOM nodes in
          React—such as focusing an input or integrating a third-party library.
        </div>,
        <div className="blog-paragraph">
          React provides{" "}
          <pre>
            <code>{`useRef`}</code>
          </pre>{" "}
          to create persistent references to DOM elements or values that persist
          across renders without causing re-renders.
        </div>,
        <div className="blog-paragraph">
          Refs should be used sparingly and only when necessary, as they bypass
          React’s declarative paradigm.
        </div>,
        <div className="blog-paragraph">
          Example:
          <pre>
            <code>{`const inputRef = useRef(null);<  \n useEffect(() => { inputRef.current.focus(); }, []);<  \n <input ref={inputRef} />`}</code>
          </pre>
        </div>,
        <div className="blog-paragraph">
          In closing,{" "}
          <pre>
            <code>{`useRef`}</code>
          </pre>{" "}
          is the right tool when you need to imperatively interact with DOM
          elements or store mutable values.
        </div>,
      ],
    },
    {
      subject: "C#",
      title: "Nullable Reference Types in C#",
      content: [
        <div className="blog-paragraph">
          Null reference exceptions are a frequent source of bugs in C#.
          Developers often struggle with ensuring variables are initialized
          correctly.
        </div>,
        <div className="blog-paragraph">
          C# 8 introduced nullable reference types to help catch these issues at
          compile-time rather than at runtime.
        </div>,
        <div className="blog-paragraph">
          By annotating variables as nullable, the compiler can provide warnings
          when a null value might be used improperly.
        </div>,
        <div className="blog-paragraph">
          Example:
          <pre>
            <code>{`string? name = null; // Nullable<  \n string name = "John"; // Non-nullable`}</code>
          </pre>
        </div>,
        <div className="blog-paragraph">
          In summary, nullable reference types provide safer and more
          predictable code by making nullability explicit and compiler-enforced.
        </div>,
      ],
    },
    {
      subject: "C#",
      title: "Async and Await in C#",
      content: [
        <div className="blog-paragraph">
          Writing asynchronous code in C# can be complex and error-prone without
          a clear understanding of{" "}
          <pre>
            <code>{`async`}</code>
          </pre>{" "}
          and{" "}
          <pre>
            <code>{`await`}</code>
          </pre>{" "}
          keywords.
        </div>,
        <div className="blog-paragraph">
          <pre>
            <code>{`async`}</code>
          </pre>{" "}
          and{" "}
          <pre>
            <code>{`await`}</code>
          </pre>{" "}
          simplify asynchronous programming by making asynchronous code look
          synchronous.
        </div>,
        <div className="blog-paragraph">
          They are often used in conjunction with{" "}
          <pre>
            <code>{`Task`}</code>
          </pre>
          -based methods to avoid blocking the main thread.
        </div>,
        <div className="blog-paragraph">
          Example:
          <pre>
            <code>{`public async Task<string> GetDataAsync()   \n   \n   var result = await httpClient.GetStringAsync(url);<  \n   return result;<  \n }`}</code>
          </pre>
        </div>,
        <div className="blog-paragraph">
          To conclude, mastering{" "}
          <pre>
            <code>{`async`}</code>
          </pre>
          /
          <pre>
            <code>{`await`}</code>
          </pre>{" "}
          leads to more responsive applications and easier-to-maintain
          asynchronous code.
        </div>,
      ],
    },
    {
      subject: "C#",
      title: "LINQ Basics in C#",
      content: [
        <div className="blog-paragraph">
          Manipulating collections is a common task in C#, and doing so
          imperatively can lead to verbose and less readable code.
        </div>,
        <div className="blog-paragraph">
          LINQ (Language Integrated Query) provides a declarative approach to
          querying collections using a SQL-like syntax.
        </div>,
        <div className="blog-paragraph">
          It supports filtering, projecting, joining, and grouping data in a
          concise and expressive way.
        </div>,
        <div className="blog-paragraph">
          Example:
          <pre>
            <code>{`var results = users.Where(u => u.IsActive).Select(u => u.Name);`}</code>
          </pre>
        </div>,
        <div className="blog-paragraph">
          In summary, LINQ simplifies data manipulation in C# and should be used
          wherever readability and conciseness are desired.
        </div>,
      ],
    },
    {
      subject: "C#",
      title: "Understanding Delegates and Events in C#",
      content: [
        <div className="blog-paragraph">
          Delegates and events are fundamental to implementing callback
          mechanisms and the observer pattern in C#.
        </div>,
        <div className="blog-paragraph">
          A delegate is a type-safe function pointer, while events are a way to
          expose delegates publicly with controlled access.
        </div>,
        <div className="blog-paragraph">
          This model is heavily used in GUI applications and for implementing
          custom event-driven logic.
        </div>,
        <div className="blog-paragraph">
          Example:
          <pre>
            <code>{`public delegate void Notify();<  \n public event Notify OnNotify;`}</code>
          </pre>
        </div>,
        <div className="blog-paragraph">
          In conclusion, understanding how delegates and events work enables you
          to build flexible and decoupled systems in C#.
        </div>,
      ],
    },
    {
      subject: "C#",
      title: "C# Exception Handling Best Practices",
      content: [
        <div className="blog-paragraph">
          Exception handling is essential for robust C# applications, yet
          developers often misuse try-catch blocks or ignore exceptions
          entirely.
        </div>,
        <div className="blog-paragraph">
          Good practices include catching specific exceptions, using finally
          blocks for cleanup, and avoiding empty catch statements.
        </div>,
        <div className="blog-paragraph">
          Avoid using exceptions for flow control as it degrades performance and
          readability.
        </div>,
        <div className="blog-paragraph">
          Example:
          <pre>
            <code>{`try   \n   \n   File.ReadAllText(path);<  \n } catch (FileNotFoundException ex)   \n   \n   Console.WriteLine(ex.Message);<  \n }`}</code>
          </pre>
        </div>,
        <div className="blog-paragraph">
          In short, structured and thoughtful exception handling leads to more
          reliable and maintainable C# applications.
        </div>,
      ],
    },
    {
      subject: "C#",
      title: "Interfaces vs Abstract Classes in C#",
      content: [
        <div className="blog-paragraph">
          When designing extensible systems in C#, developers often face the
          choice between interfaces and abstract classes.
        </div>,
        <div className="blog-paragraph">
          Interfaces define a contract with no implementation, while abstract
          classes can contain shared implementation.
        </div>,
        <div className="blog-paragraph">
          Use interfaces for loosely coupled components, and abstract classes
          when you need base logic or state.
        </div>,
        <div className="blog-paragraph">
          Example:
          <pre>
            <code>{`interface ILogger { void Log(string message); }<  \n abstract class BaseLogger { public abstract void Log(string msg); }`}</code>
          </pre>
        </div>,
        <div className="blog-paragraph">
          Ultimately, interfaces and abstract classes serve different purposes
          and should be chosen based on system design needs.
        </div>,
      ],
    },
    {
      subject: "C#",
      title: "Working with Tuples in C#",
      content: [
        <div className="blog-paragraph">
          Returning multiple values from a method in C# was once awkward. Tuples
          now provide a concise solution.
        </div>,
        <div className="blog-paragraph">
          C# 7 introduced value tuples with naming support for elements, making
          code cleaner and more readable.
        </div>,
        <div className="blog-paragraph">
          They are ideal for short-lived data grouping and method returns, but
          should be avoided for complex data structures.
        </div>,
        <div className="blog-paragraph">
          Example:
          <pre>
            <code>{`(string name, int age) GetUser() => ("Alice", 30);`}</code>
          </pre>
        </div>,
        <div className="blog-paragraph">
          To summarize, tuples are a lightweight and expressive way to return or
          group data in modern C# code.
        </div>,
      ],
    },
    {
      subject: "C#",
      title: "Pattern Matching in C#",
      content: [
        <div className="blog-paragraph">
          Traditional conditional logic in C# can be verbose and less
          expressive. Pattern matching offers a cleaner way to inspect and
          handle data.
        </div>,
        <div className="blog-paragraph">
          Introduced in recent versions of C#, pattern matching enhances{" "}
          <pre>
            <code>{`switch`}</code>
          </pre>
          ,{" "}
          <pre>
            <code>{`is`}</code>
          </pre>
          , and{" "}
          <pre>
            <code>{`when`}</code>
          </pre>{" "}
          statements with more powerful semantics.
        </div>,
        <div className="blog-paragraph">
          It allows for type checking, property matching, and null guards
          directly in conditions.
        </div>,
        <div className="blog-paragraph">
          Example:
          <pre>
            <code>{`if (shape is Circle { Radius: > 10 }) { ... }`}</code>
          </pre>
        </div>,
        <div className="blog-paragraph">
          In conclusion, pattern matching makes conditional logic more readable
          and expressive in modern C# development.
        </div>,
      ],
    },
  ];

  function displayArticle(articleIndex) {
    return blogArticles[articleIndex].content.map(
      (paragraph, index) => paragraph
    );
  }
  return (
    <div id="blog-container" style={{ display: "flex" }}>
      <ul
        id="side-menu"
        style={{ padding: "0px 20px 40px 40px", width: "25%" }}
      >
        {blogArticles.map((article, index) => (
          <li
            key={`blogLink${index}`}
            id={index}
            onClick={() => setCurrentArticle(index)}
          >
            {article.title}
          </li>
        ))}
      </ul>
      <div id="blog-content" style={{ paddingLeft: 70, width: "74%" }}>
        <h2 style={{ paddingBottom: 30 }}>
          {blogArticles[currentArticle].title}
        </h2>
        {displayArticle(currentArticle)}
      </div>
    </div>
  );
};
export default Blog;
