import React, {useRef, useCallback} from 'react';
import { Container, Content, Background  } from './styles';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import getValidationErros from "../../utils/getValidationErros";

import { useAuth } from '../../hooks/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';

interface signInFormData{
  email: string;
  senha: string;
}

const SigIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { signIn } = useAuth();
    const { addToast } = useToast();

    const handleSubmit = useCallback(async (data: signInFormData) => {
      try {
        formRef.current?.setErrors({});
  
        const schema = Yup.object().shape({
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Informe um e-mail válido"),
          senha: Yup.string().required("Senha obrigatoria"),
        });
  
        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          email: data.email,
          senha: data.senha
        })

      } catch (err) {
        const errors = getValidationErros(err);
        formRef.current?.setErrors(errors);

        addToast({
          type: 'error', 
          title: 'Ocorreu um erro na  autenticação',
          description:  'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    }, [signIn, addToast]);

    return(
        <Container>
            <Content>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu Login</h1>
                    <Input icon={FiMail} name="email" placeholder="E-mail" />
                    <Input icon={FiLock} name="senha" type="password" placeholder="senha" />
                    
                    <Button type="submit">Entrar</Button>

                    <a href="teste">Esqueci minha senha</a>
                </Form>

                <a href="teste">
                <FiLogIn />
                Criar conta
                </a>
            </Content>
            <Background />
        </Container>
    )};

export default SigIn;