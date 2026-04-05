// all cheatsheet data
// each entry has: title, category, description, and code
// categories: git, terminal, javascript, css
var cheatsheetData = [
  {
    title: "Git Clone Repository",
    category: "git",
    description: "Clone a remote repository to your local machine",
    code: "git clone https://github.com/username/repo.git",
  },
  {
    title: "Git Commit Changes",
    category: "git",
    description: "Commit staged changes with a descriptive message",
    code: "git commit -m 'Add new feature description'",
  },
  {
    title: "Git Push to Remote",
    category: "git",
    description: "Push your commits to a remote branch",
    code: "git push origin main",
  },
  {
    title: "Git Pull Latest Changes",
    category: "git",
    description: "Fetch and merge the latest changes from remote",
    code: "git pull origin main",
  },
  {
    title: "List Files in Directory",
    category: "terminal",
    description: "Display all files and folders in the current directory",
    code: "ls -la",
  },
  {
    title: "Change Directory",
    category: "terminal",
    description: "Navigate to a different folder",
    code: "cd /path/to/directory",
  },
  {
    title: "JavaScript Array Map",
    category: "javascript",
    description: "Transform each element in an array using a function",
    code: "const doubled = numbers.map(n => n * 2);",
  },
  {
    title: "JavaScript Object Destructuring",
    category: "javascript",
    description: "Extract values from objects into separate variables",
    code: "const { name, age } = person;",
  },
  {
    title: "JavaScript Fetch API",
    category: "javascript",
    description: "Make an HTTP request to fetch data from an API",
    code: "fetch('https://api.example.com/data')\n  .then(res => res.json())\n  .then(data => console.log(data));",
  },
  {
    title: "CSS Flexbox Container",
    category: "css",
    description: "Create a flexible container that layouts children in a row",
    code: ".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",
  },
  {
    title: "CSS Grid Layout",
    category: "css",
    description: "Create a responsive grid layout for organizing content",
    code: ".grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}",
  },
  {
    title: "CSS Media Query",
    category: "css",
    description: "Apply styles that only work on mobile screens",
    code: "@media (max-width: 768px) {\n  .responsive {\n    font-size: 14px;\n  }\n}",
  },
  {
    title: "Print Working Directory",
    category: "terminal",
    description: "Show the current directory path",
    code: "pwd",
  },
  {
    title: "Create Directory",
    category: "terminal",
    description: "Create a new folder",
    code: "mkdir folder-name",
  },
  {
    title: "Remove File",
    category: "terminal",
    description: "Delete a file from the directory",
    code: "rm filename",
  },
  {
    title: "React useState Hook",
    category: "react",
    description: "Manage state inside a functional component using useState",
    code: "const [count, setCount] = useState(0);",
  },
  {
    title: "React useEffect Hook",
    category: "react",
    description: "Run side effects like fetching data when component mounts",
    code: "useEffect(() => {\n  fetchData();\n}, []);",
  },
  {
    title: "React Props",
    category: "react",
    description:
      "Pass data from parent component to child component using props",
    code: "function Greeting({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}",
  },
  {
    title: "React Map List",
    category: "react",
    description: "Render a list of items dynamically using the map function",
    code: "fruits.map((fruit) => (\n  <li key={fruit}>{fruit}</li>\n));",
  },
  {
    title: "React Conditional Rendering",
    category: "react",
    description: "Show or hide elements based on a condition in React",
    code: "{isLoggedIn ? <h2>Welcome!</h2> : <h2>Please log in.</h2>}",
  }
];
