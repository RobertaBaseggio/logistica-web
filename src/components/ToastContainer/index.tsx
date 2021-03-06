import React from "react";
import { ToastMessage } from "../../hooks/toast";
import { Container } from "./styles";
import Toast from "./Toast";
import { useTransition } from "react-spring";

interface ToastContainerProps {
    message: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({message}) => {
    const messageWithTransitions = useTransition(
        message,
        message => message.id,
        {
            from: {right:"-120%", opacity: 0},
            enter: {right: "0%", opacity: 1},
            leave: {right: "-120%", opacity: 0},
        }
    )
    return (
    <Container>
        {messageWithTransitions.map(({item, key, props}) => (
         <Toast key={key} style={props} message={item}/>
        ))}
    </Container>
    );
};

export default ToastContainer;