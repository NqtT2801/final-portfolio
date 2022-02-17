import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width={'65%'}
                            text={'65%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'JAVA'}
                            width={'10%'}
                            text={'10%'}
                        />
                        <ProgressBar 
                            title={'PYTHON'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'65%'}
                            text={'65%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
