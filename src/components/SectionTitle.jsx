import React from "react";

export default function SectionTitle({ title, subtitle }) {
    return (
        <div style={{ marginBottom: 60 }}>
            <div className="main-header text-center">
                <h3>{title}</h3>
                <div className="tex-bg">SDW Carpentry</div>
            </div>
            {typeof subtitle === "string" ? <p style={{ textAlign: "center" }}>{subtitle}</p> : subtitle}
        </div>
    );
}
