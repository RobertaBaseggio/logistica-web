import React from 'react';
import { Container, Content, Background  } from './styles';
import {FiArrowLeft, FiUser, FiLock} from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';
import {Form} from "@unform/web";
import { useRef } from 'react';
import { FormHandles } from '@unform/core';
import { useCallback } from 'react';

const SigIn: React.FC = () => {
    
    const formRef = useRef<FormHandles>(null);
    const handleSubmit = useCallback((data: object): void => {
        console.log(data);
    }, []);

    return(
    <Container>
        <Background />
        <Content>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Faça seu Cadastro</h1>
                <Input icon={FiUser} name="email" placeholder="E-mail" />
                <Input icon={FiLock} name="senha" type="password" placeholder="senha" />
                
                <Button type="submit">Cadastrar</Button>
            </Form>

            <a href="teste">
            <FiArrowLeft />
            Voltar para o login
            </a>
        </Content>
    </Container>
);
};

export default SigIn;