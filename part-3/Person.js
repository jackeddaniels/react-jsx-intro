"use strict";

function Person({ name, age }) {
  const voteMsg = age > 18 ? "Please go vote!" : "You must be 18.";
    return <div><p>Learn more information about this person:</p>
    <p>Age: { age } { voteMsg }</p>
    <p></p>
    </div>;
}