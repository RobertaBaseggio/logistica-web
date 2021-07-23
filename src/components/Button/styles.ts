import styled from "styled-components";
import { shade } from 'polished';

export const Container = styled.button`

    background: #c29e7e;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #312e31;
    width: 100%;
    margin-top: 16px;

    transition: background-color 0.2s;

    &:hover{
        background: ${shade(0.2, '#c29e7e')}
    }
`;