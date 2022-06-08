import React from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import './BackButton.css';

export const BackButton = () => {
    const navigate = useNavigate();
    return (
        <div className={'back-button-container'} onClick={() => navigate('/')}>
            <ArrowLeftOutlined />
            <span>Back to folders</span>
        </div>
    );
}