import './normalize.css';
import Layout from './components/Layout';
import Details from './components/Details';
import WorkEperience from './components/WorkExperience';
import Hobby from './components/Hobby';

export default function App() {
  return (
    <Layout
      left = { 
        <div>
          <Details />
          <WorkEperience />
          <Hobby/>
        </div>
      }     
       right = {
         <div>
           Right side
         </div>
       } 
    />
  )
}

