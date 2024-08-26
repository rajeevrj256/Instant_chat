import React from 'react';

const MessageTime = ({ createdAt }) => {
    const formattedTime = new Date(createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <time className="text-xs opacity-50 text-white">{formattedTime}</time>
    );
};

export default MessageTime;
