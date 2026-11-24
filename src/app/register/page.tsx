"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    try {
      setSubmitting(true);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Gagal mendaftar");
      }

      router.push("/login?registered=1");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{ maxWidth: "440px", margin: "2rem auto" }}>
      <div className="page-header">
        <div>
          <h1 className="page-title">Register Admin</h1>
          <p className="page-subtitle">
            Buat akun admin baru melalui Route Handler POST /api/auth/register.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="card">
        {error && <div className="alert alert-error">{error}</div>}

        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Nama Lengkap
          </label>
          <input
            id="name"
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Budi Santoso"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="budi@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password (minimal 6 karakter)
          </label>
          <input
            id="password"
            type="password"
            minLength={6}
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%" }}
          disabled={submitting}
        >
          {submitting ? "Mendaftar..." : "Daftar"}
        </button>

        <p
          className="page-subtitle"
          style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.9rem" }}
        >
          Sudah punya akun?{" "}
          <Link
            href="/login"
            style={{ color: "var(--primary)", fontWeight: 600 }}
          >
            Login di sini
          </Link>
        </p>
      </form>
    </div>
  );
}
