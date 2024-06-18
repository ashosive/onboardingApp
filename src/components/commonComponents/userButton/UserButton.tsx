import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import './Button.css';

interface UserButtonProps {
    label: string;
}

const UserButton: React.FC<UserButtonProps> = ({ label }) => {
    return (
        <div>
            <div className="logo-container">
                <div className="logo-box">
                    <FontAwesomeIcon
                        icon={faUserFriends}
                        size="2x"
                        className="logo-icon"
                    />
                    <h2 className="logo-text">{label}</h2>
                </div>
            </div>
        </div>
    );
};

export default UserButton;
