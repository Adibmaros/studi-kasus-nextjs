"use client";

import { FormEvent, Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const registered = searchParams.get("registered") === "1";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    try {
      setSubmitting(true);
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Email atau password salah.");
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Terjadi kesalahan saat login.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{ maxWidth: "440px", margin: "2rem auto" }}>
      <div className="page-header">
        <div>
          <h1 className="page-title">Login Admin</h1>
          <p className="page-subtitle">
            Masuk untuk mengakses dashboard pengelolaan produk.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="card">
        {registered && (
          <div className="alert alert-success">
            Registrasi berhasil! Silakan login dengan akun barumu.
          </div>
        )}
        {error && <div className="alert alert-error">{error}</div>}

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
            placeholder="admin@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
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
          {submitting ? "Memproses..." : "Login"}
        </button>

        <p
          className="page-subtitle"
          style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.9rem" }}
        >
          Belum punya akun admin?{" "}
          <Link
            href="/register"
            style={{ color: "var(--primary)", fontWeight: 600 }}
          >
            Daftar di sini
          </Link>
        </p>
      </form>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={<div className="card empty-state">Memuat form login...</div>}
    >
      <LoginForm />
    </Suspense>
  );
}
