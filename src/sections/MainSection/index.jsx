import React from "react"
import {FaFacebookF} from "react-icons/fa";
import Button from "../../components/Button"
import Avatar from "../../components/Avatar"
import Label from "../../components/Label"
import { 
    Wrapper,
    AvatarWrapper,
    ListSocial,
    SkillsWrapper,
    ListSkills,
    Content
} from "./styles";

function MainSection(){
    return(
        <Wrapper>
            <Content>
            <AvatarWrapper>
                <Avatar 
                    url="https://www.aljazeera.com/mritems/Images/2019/6/13/ce0ece26ee1348f2b1c453f314dc0a6e_18.jpg"
                    size={130}
                />
                <h1>Herick Exterkoetter</h1>
                <p>Alguma coisa</p>


            <ListSocial>
                <li>
                    <a 
                        aria-label="Facebook"
                        href="{{}}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookF />
                    </a>
                </li>
            </ListSocial>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </AvatarWrapper>


            <SkillsWrapper>
                <h2>Habilidades</h2>
                <ListSkills>
                    <li><Label>React</Label></li>  
                    <li><Label>JavaScript</Label></li>
                    <li><Label>HTML</Label></li>
                    <li><Label>CSS</Label></li>
                </ListSkills>
                
            </SkillsWrapper>

            <Button 
                as="a" 
                href="mailto:herickherick47@gmail.com" 
                >Me Contrate</Button>
            </Content>
        </Wrapper>
    )
}

export default MainSection;