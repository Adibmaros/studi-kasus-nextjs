"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-brand">
          Katalog Produk
        </Link>
        <nav className="navbar-links">
          <Link href="/" className="btn btn-secondary">
            Katalog
          </Link>

          {status === "loading" ? null : session?.user ? (
            <>
              <Link href="/admin" className="btn btn-primary">
                Dashboard Admin
              </Link>
              <span className="page-subtitle" style={{ fontSize: "0.85rem" }}>
                Halo, {session.user.name}
              </span>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="btn btn-primary">
              Login Admin
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
