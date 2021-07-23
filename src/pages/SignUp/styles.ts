import styled from 'styled-components';
import backgroundSigUp from '../../assets/sigup.jpg';
import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-itens: stretch;

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    place-content: center;

    width: 100%;
    max-width: 700px;

    form{
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1{
            margin-bottom: 24px;
        }

    

        a{
            color: #f4ede8;
            display: block;
            margin-top: 24px;
            text-decoration: none;

            transition: color 0.2s;

            &:hover {
                color:${shade(0.2, '#f4ede8')}
            }
        }
    }
        > a{
            color: #eae8e2;
            display: block;
            margin-top: 24px;
            text-decoration: none;

            display: flex;
            align-itens:center;

            transition: color 0.2s;

            svg{
                margin-right: 16px;
            }

            &:hover{
                color:${shade(0.2, '#eae8e2')}
            }
        }
}
    
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundSigUp}) no-repeat center;
    background-size: cover;
`;