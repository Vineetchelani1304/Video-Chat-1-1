import './'
import './App.css';
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';
import { AppBar, Typography } from '@material-ui/core';
function App() {
  return (
    <div>
      <div className=" text-center text-4xl font-bold">
        <VideoPlayer/>
      </div>
      <Options>
        <Notifications/>
      </Options>
        
    </div>
  );
}

export default App;
