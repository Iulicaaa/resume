import './normalize.css';
import Layout from './components/Layout';
import Details from './components/Details';
import WorkEperience from './components/WorkExperience';

export default function App() {
  return (
    <Layout
      left = { 
        <div>
          <Details />
          <WorkEperience />
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

