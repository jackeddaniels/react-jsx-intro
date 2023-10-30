'use strict';

function App() {
  const tweets = [
    {username: 'Joey', name: 'Joe', date: '12/12/12', message: 'Hello'},
    {username: 'Conker', name: 'test', date: '12/30/12', message: 'Hello World'},
    {username: 'breakingbad', name: 'skinnypete', date: '5/25/23', message: 'ayooo'}
  ]

  return <div>
    <Tweets tweets={ tweets } />
  </div>
}