//! Coding Addict -- { :YouTube }
//! reactjs.org, react.dev
//! Install Quokka.js
// Vite -- Next Generation Frontend Tooling { better create-react-app }
// npx create-react-app tutorial
// npx create-react-app@latest tutorial {:Incase the 1st one doesn't work also helps i initiate git repo}
// Get-ChildItem -Force  { List Hidden Files }
// Ctrl + D { Select Word} -> Ctrl + Shift + L (Select All Occurences)

// VS Code Extensions
// Auto Rename Tag
// Highlight Matching Tag
// Prettier
// Settings -> Search -> default formatter -> Editor: Default Formatter
// settings.json
// "editor.formatOnSave": true,
// "editor.formatOnPaste": true,
// "editor.defaultFormatter": "esbenp.prettier-vscode",
// "prettier.singleQuote": true,
// "prettier.semi": false,
// Emmet
// "emmet.includeLanguages": {
//     "javascript": "javascriptreact"
// }

// ES7 Snippets
// ES7+ React/Redux/React-Native snippets
// rafce (arrow func with export)
// rfce (regualr func with export)
// uncheck
// Settings -> React Snippets -> Import React On Top

// JSX Rules
// 1.Should return only one element
// return <>...</>; shorthand;
// 2.camelCase property naming convention
// 3.className instead of class
// 4.close every element

// React Developer Tools: Google Chrome Extensions

// https://www.amazon.com/Best-Sellers-Books/zgbs/books/

// Book List
// JSX - JavaScript
// { Video: Javascript Nuggets - Destructuring (object) }

// { Video: Javascript Nuggets - Map } moment --> npm package for dates & time
// https://www.youtube.com/watch?v=f_sEWa5hA0Q
const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
  },
  {
    name: 'john',
    age: 26,
    position: 'intern',
  },
];

const ages = people.map((person) => {
  return person.age * 2;
});
console.log(ages);

const newPeople = people.map((person) => {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});
console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector('#result');
result.innerHTML = names.join('');

// { Video: Javascript Nuggets - Spread Operator }
// [ React Events] (https://reactjs.org/docs/events.html)
// [ Video: JavaScript Nuggets - Destructuring (Array) ]
// { Video: Javascript Nuggets - Filter and Find }

// npm run build
// netlify.com: { magical-vacherin-4bf4c3 }
// https://react-course-fundamentals-walherb.netlify.app/

//! Backroads Application
// rel = 'noreferrer';
// rmdir - Force - Recurse.git;
// rd / s / q.git;
// git init;

/*
…or create a new repository on the command line
echo "# temp-backroads-app" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/walherb/temp-backroads-app.git
git push -u origin main

@used
…or push an existing repository from the command line
git remote add origin https://github.com/walherb/temp-backroads-app.git
git branch -M main
git push -u origin main
*/

//! Project Deployment --
/*
@used
https://main--temp-backroads-app-walherb.netlify.app/
rm -rf .git
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/walherb/temp-backroads-app.git
git branch -M main
git push -u origin main

@used
git clone https://github.com/walherb/temp-backroads-app.git
npm install && npm start
commit && push on VS Code

VITE
npm create vite@latest my-react-app -- --template react
npm install && npm run dev

; --------------------------------------------------------------
git remote add origin https://github.com/walherb/03-advanced-react.git
git branch -M main
git push -u origin main

git remote add origin https://github.com/walherb/react-course-v3.git
git branch -M main
git push -u origin main

[JavaScript Nuggets - Destructuring (Array)]
[JavaScript Nuggets - Filter and Find]

@Stopped at Video: 91

!CSS
Coding Addict - [Default Starter Video](https://youtu.be/UDdyGNlQK5w)
Repo - [Default Starter Repo](https://github.com/john-smilga/default-starter)


*/
