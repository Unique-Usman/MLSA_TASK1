import React from "react";

const Education = ({ institutions }) => {
  return (
    <section
      style={{
        backgroundColor: "#f4f4f4",
        padding: "20px",
        borderRadius: "5px",
        marginBottom: "20px",
      }}
      id="education"
    >
      <h2 style={{ fontSize: "24px", color: "#333", marginBottom: "15px" }}>Education</h2>
      <div className="education-details">
        {institutions.map((institution, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "5px" }}>
              {institution.name}
            </h3>
            <p style={{ fontSize: "16px", marginBottom: "3px" }}>Degree: {institution.degree}</p>
            <p style={{ fontSize: "16px", marginBottom: "3px" }}>
              Field of Study: {institution.fieldOfStudy}
            </p>
            <p style={{ fontSize: "16px", marginBottom: "3px" }}>Year: {institution.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
