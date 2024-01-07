import "./normalize.css";
import Layout from "./components/Layout";
import Details from "./components/Details";
import WorkExperience from "./components/WorkExperience";
import Hobby from "./components/Hobby";
import Image from "./components/Image";

export default function App() {
  return (
    <Layout
      left={
        <div>
          <Details />
          <WorkExperience />
          <Hobby />
        </div>
      }
      right={
        <div>
          <Image src="https://th.bing.com/th/id/R.2b3c1572af8c8f459c595d013e6db2ec?rik=vLC%2bW92qOW%2fefw&riu=http%3a%2f%2fphoto.aseed.fr%2fwp-content%2fuploads%2f2015%2f10%2fphotographe-CV-LinkedIn-Nice-1.jpg&ehk=di5HMaW51kDGoerwtkenIXoJGbf5GyagBSCIX5BVNMU%3d&risl=&pid=ImgRaw&r=0" />
        </div>
      }
    />
  );
}
