import * as React from "react";

type EmailTemplateProps = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function EmailTemplate({ name, email, phone, message }: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        color: "#0f172a",
      }}
    >
      <div
        style={{
          background: "#081425",
          padding: "28px 32px",
          borderRadius: "12px 12px 0 0",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "20px", color: "#ffffff" }}>
          New Contact Enquiry - <span style={{ color: "#f59e0b" }}>Shezuna</span>
        </h1>
      </div>

      <div
        style={{
          background: "#f8fafc",
          padding: "28px 32px",
          borderRadius: "0 0 12px 12px",
          border: "1px solid #e2e8f0",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td
                style={{
                  padding: "10px 0",
                  fontSize: "13px",
                  color: "#64748b",
                  width: "120px",
                  verticalAlign: "top",
                }}
              >
                Name
              </td>
              <td style={{ padding: "10px 0", fontSize: "15px", fontWeight: 600 }}>{name}</td>
            </tr>

            <tr style={{ borderTop: "1px solid #e2e8f0" }}>
              <td
                style={{
                  padding: "10px 0",
                  fontSize: "13px",
                  color: "#64748b",
                  verticalAlign: "top",
                }}
              >
                Email
              </td>
              <td style={{ padding: "10px 0", fontSize: "15px" }}>
                <a href={`mailto:${email}`} style={{ color: "#1d4ed8" }}>
                  {email}
                </a>
              </td>
            </tr>

            <tr style={{ borderTop: "1px solid #e2e8f0" }}>
              <td
                style={{
                  padding: "10px 0",
                  fontSize: "13px",
                  color: "#64748b",
                  verticalAlign: "top",
                }}
              >
                Phone
              </td>
              <td style={{ padding: "10px 0", fontSize: "15px" }}>
                <a href={`tel:${phone}`} style={{ color: "#1d4ed8" }}>
                  {phone}
                </a>
              </td>
            </tr>

            <tr style={{ borderTop: "1px solid #e2e8f0" }}>
              <td
                style={{
                  padding: "10px 0",
                  fontSize: "13px",
                  color: "#64748b",
                  verticalAlign: "top",
                }}
              >
                Message
              </td>
              <td
                style={{
                  padding: "10px 0",
                  fontSize: "15px",
                  lineHeight: 1.6,
                  whiteSpace: "pre-wrap",
                }}
              >
                {message}
              </td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            marginTop: "24px",
            padding: "16px",
            background: "#fff7ed",
            border: "1px solid #fed7aa",
            borderRadius: "8px",
            fontSize: "13px",
            color: "#92400e",
          }}
        >
          Reply directly to this email to respond to {name}.
        </div>
      </div>
    </div>
  );
}
