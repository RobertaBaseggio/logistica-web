import React from 'react';
import { Container, Content, Background  } from './styles';
import {FiLogIn} from 'react-icons/fi';

import Input from '../../components/input';

const SigIn: React.FC = () => (
    <Container>
        <Content>
            <form>
                <h1>Faça seu Login</h1>
                <Input name="email" placeholder="E-mail" />
                <Input name="senha" type="password" placeholder="senha" />
                <button type="submit">Entrar</button>

                <a href="teste">Esqueci minha senha</a>
            </form>

            <a href="teste">
            <FiLogIn />
            Criar conta
            </a>
        </Content>
        <Background />
    </Container>
);

export default SigIn;