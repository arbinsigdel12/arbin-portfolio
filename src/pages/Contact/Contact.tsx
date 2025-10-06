import React, { useState } from "react";
import styles from "./Contact.module.scss";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:sigdelarbin1@gmail.com?subject=${encodeURIComponent(
      "Contact from portfolio"
    )} &body=${encodeURIComponent(
      `${form.name} (${form.email}):\n\n${form.message}`
    )}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <section className="container">
      <h2>Contact</h2>
      <form className={styles.form} onSubmit={onSubmit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={onChange} required />
        </label>
        <label>
          Email
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            required
            type="email"
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            rows={6}
            required
          />
        </label>
        <div>
          <button type="submit">Send Message</button>
          {sent && (
            <span className={styles.sent}>
              Message opened in your mail client.
            </span>
          )}
        </div>
      </form>
    </section>
  );
};

export default Contact;
