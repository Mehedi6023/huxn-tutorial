import { useState } from "react";

interface ContactFormState {
  name: string;
  email: string;
}
const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: "",
    email: "",
  });
  return <div>ContactForm</div>;
};

export default ContactForm;
