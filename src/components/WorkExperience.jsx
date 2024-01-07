import styled from 'styled-components';
import ExperienceCard from './ExperienceCard';

const WorkExperience = () => {
  return(
    <div>
       <Title>Work Experience</Title>
       <ExperienceList>
          <ExperienceCard 
            title = "Lead UI/UX Designer"
            start="Aug 2021"
            end="Current..."
 companyLogo="https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19705.png"
            companyName="BMW"
            location="Dubai, UAE"
            buletPoints={[
               'Visual Design',
               'UX Reasearching',
               'Prototyping',
               'Principle', 
               'Presentations',
               'User Jorneys'
             ]}
            boxShadow="15px 15px 0px 0px #3DC39B"
            />
          <ExperienceCard 
            title = "Senior UI/UX Designer"
            start="Nov 2019"
            end=" Aug 2021"
            companyLogo="https://i.pinimg.com/originals/18/70/21/187021018f6863aa668d51f481ee2672.png"
            companyName="AppsIntegra Technology"
            location="Dubai, UAE"
            buletPoints={[
              'Visual Design',
               'UX Reasearching',
               'Prototyping',
               'Front-end Dev',
               'Unity 3d Models',
               'Principle', 
               'Presentations',
               'Web / Mobile'
             ]}
            boxShadow= "15px 15px 0px 0px #928CF8"/>
          <ExperienceCard 
            title = "UI /UX Designer - Front-end"
            start="Nov 2017"
            end="Nov 2019"
            companyLogo="https://clipground.com/images/logos-png-8.png"
            companyName="Transimperial"
            location="Minsk, Belarus"
            buletPoints={[
               'Visual Design',
               'UX Reasearching',
               'Prototyping',
               'Principle', 
               'Front-end Dev',
               'Web / Mobile'
             ]}
            boxShadow= "15px 15px 0px 0px #FE74A6"/>
         <ExperienceCard 
           title="Freelance Designer"
           start="June 2016"
           end="Sep 2017"
           companyLogo="https://seeklogo.com/images/D/dots-custom-element-logo-548C2E82F3-seeklogo.com.png"
           companyName="It-Practik Lab"
           location="Minsk, Belarus"
           buletPoints={[
             'Visual Design',
             'Reasearching',
             'Prototyping',
             'Web / Mobile'
           ]}
           boxShadow= "15px 15px 0px 0px #5B6DFF"/>
       </ExperienceList>
    </div>
  )
}

export default WorkExperience;

const Title = styled.div`
  color: #0B0B0B;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 58px;
  margin-bottom: 23px;
  `;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 20px;
`;