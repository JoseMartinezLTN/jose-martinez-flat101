"use client";
import { postCommentToEpisodeCall } from "@/app/api/episodeApi";
import styles from "./CommentForm.module.css";
import { useState } from "react";

export default function CommentForm({ episodeId }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    postCommentToEpisodeCall({
      id: episodeId,
      ...form,
    });
    setSubmitted(true);

    setForm({ name: "", email: "", comment: "" });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        type="text"
        name="name"
        placeholder="Tu nombre"
        value={form.name}
        onChange={handleChange}
        required
        className={styles.formInput}
      />

      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={handleChange}
        required
        className={styles.formInput}
      />

      <textarea
        name="comment"
        placeholder="Comentario (máx. 500 caracteres)"
        value={form.comment}
        onChange={handleChange}
        maxLength={500}
        required
        className={styles.formTextarea}
      />

      <button type="submit" className={styles.formButton}>
        ENVIAR
      </button>

      {submitted && <p className={styles.formSuccess}>¡Comentario enviado!</p>}
    </form>
  );
}
