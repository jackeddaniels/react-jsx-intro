"use strict";

function App() {
  const people = [{name:"Axa", age:25},
                  {name:"John", age:32},
                  {name:"Larry Wheels", age:28}];
  return <div>
         <Person person={people[0]}/>
         <Person person={people[1]}/>
         <Person person={people[2]}/>
  </div>;
}