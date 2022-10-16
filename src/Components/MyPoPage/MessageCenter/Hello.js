import React from 'react';
import ChatBot from 'react-simple-chatbot';
import './Hello.css'

const Hello = () => {
    return (
        <ChatBot
            steps={[
                {
                    id: '1',
                    message: "Hey! What's up?",
                    trigger: '2',
                },
                {
                    id: '2',
                    user: true,
                    trigger: '3',
                },
                {
                    id: '3',
                    message: '{previousValue}, I am fine. How is going on?',
                    trigger: '4',
                },



                {
                    id: '4',
                    user: true,
                    trigger: '5',
                },
                {
                    id: '5',
                    message: 'I am doing great. Thanks.',
                    trigger: '6',
                },
                {
                    id: '6',
                    user: true,
                    trigger: '7',
                },
                {
                    id: '7',
                    message: 'Where are you?',
                    end: true,
                }

            ]}
        />
    );
};

export default Hello;