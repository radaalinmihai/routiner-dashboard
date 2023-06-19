import React from "react";

import styles from "./layout.module.css";
export const metadata = {
  title: 'Sign in - Routiner',
  description: 'Generated by Next.js',
}

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={styles.layout}>{children}</div>
      </body>
    </html>
  )
}
