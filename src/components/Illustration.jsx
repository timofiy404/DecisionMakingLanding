import React from 'react';

const Illustration = ({ src, title }) => {
    return (
        <div style={{ flex: "1", minWidth: "250px", textAlign: "center" }}>
            <div style={{ background: "#eef2ff", borderRadius: "1rem", padding: "2rem", marginBottom: "0.5rem" }}>
                {src ? (
                    <img src={src} alt="Illustration" style={{ maxWidth: "100%", height: "auto" }} />
                ) : (
                    <span style={{ fontSize: "3rem" }} aria-hidden="true"></span>
                )}
            </div>
            {title && <p>{title}</p>}
        </div>
    );
};

export default Illustration;