import React from 'react';
import LiveFeedDisplayer from './components/live-feed-displayer/live-feed-displayer';
import TableAvailabilityDisplayer from './components/table-availability-displayer/table-availability-displayer';
import './App.scss';

const App: React.FunctionComponent = () => (
    <div className="App">
      <LiveFeedDisplayer />
      <TableAvailabilityDisplayer />
    </div>
)


export default App;
