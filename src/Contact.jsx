import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
export default function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            pauseOnHover: true,
          });
        },
        (error) => {
          toast.error("Failed to send message!", {
            position: "top-right",
            autoClose: 3000,
            pauseOnHover: true,
          });
        }
      );

    e.target.reset(); // optional: reset form
  };
  return (
    <>
      <div className="contactContainer">
        <div className="contactElement">
          <div className="contactHead">
            <span>Contact Me</span>
            <p>
              I'd love to hear from you to reach our for any opportunities and
              questions!
            </p>
          </div>
          <div className="contactBody">
            <form ref={form} onSubmit={sendEmail}>
              <TextField
                required
                id="outlined-required"
                label="Your Email"
                className="inputs"
                name="email"
                sx={{
                  input: { color: "white" },
                  "& label": { color: "white" },
                  "& label.Mui-focused": { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ff0800",
                    },
                  },
                }}
              />
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                className="inputs"
                name="name"
                sx={{
                  input: { color: "white" },
                  "& label": { color: "white" },
                  "& label.Mui-focused": { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ff0800",
                    },
                  },
                }}
              />
              <TextField
                required
                id="outlined-required"
                label="Subject"
                className="inputs"
                name="title"
                sx={{
                  input: { color: "white" },
                  "& label": { color: "white" },
                  "& label.Mui-focused": { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ff0800",
                    },
                  },
                }}
              />
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
                className="inputs"
                name="message"
                sx={{
                  input: { color: "white" },
                  "& label": { color: "white" },
                  "& label.Mui-focused": { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& textarea": {
                      color: "white",
                    },
                    "& fieldset": {
                      borderColor: "gray",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ff0800",
                    },
                  },
                }}
              />
              <Button variant="outlined" className="button" type="submit">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
