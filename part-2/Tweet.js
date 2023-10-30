'use strict';

function Tweets({ tweets }) {
  return <ul className="tweeter">
    { tweets.map(m => <li>
      Username: { m.username },
      Name: { m.name },
      Date: { m.date },
      Message: { m.message }</li>)}
    </ul>;
}