import './normalize.css';
import Layout from './components/Layout';

export default function App() {
  return (
    <Layout
      left = { 
        <div>
          Left side
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

