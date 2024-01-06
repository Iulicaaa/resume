import './normalize.css';
import Layout from './components/Layout';
import Details from './components/Details';

export default function App() {
  return (
    <Layout
      left = { 
        <div>
          <Details />
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

