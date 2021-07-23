import React from 'react';
import { Container, Content, Background  } from './styles';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SigIn: React.FC = () => (
    <Container>
        <Content>
            <form>
                <h1>Faça seu Login</h1>
                <Input icon={FiMail} name="email" placeholder="E-mail" />
                <Input icon={FiLock} name="senha" type="password" placeholder="senha" />
                
                <Button type="submit">Entrar</Button>

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