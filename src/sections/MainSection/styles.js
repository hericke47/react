import styled from "styled-components"
import { Wrapper as ButtonWrapper } from "../../components/Button/styles"
import { Wrapper as WrapperAvatar } from "../../components/Avatar/styles"


export const Wrapper = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    color: #ffffff;
    text-align:center;

    ${ButtonWrapper}{
        width: 175px;
        display: block;
        margin: 0 auto;
    }
`

export const Content = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
`

export const AvatarWrapper = styled.div`
    padding: 30px;
    text-align: center;
    width: 100%;

    p {
        color: rgba(255,255,255, 0.7);
        font-size: 14px;
        line-height: 28px;
    }
`

export const ListSocial = styled.ul`
    display: inline-block;
    color: #fff;
    list-style: none;
    margin: 10px 0;

    li {
        display: inline-block;
    }

    a {
        display: block;
        width: 35px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        color: inherit;
    }
`

export const SkillsWrapper = styled.div`
    text-align: center;
    margin-bottom: .5em;

    h2 {
        margin-bottom: .5em;
    }
`

export const ListSkills = styled.ul`
    display: block;

    li {
        display: inline-block;
        margin: 5px;
    }
`
