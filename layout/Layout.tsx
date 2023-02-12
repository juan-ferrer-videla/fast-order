import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.css";

interface Props {
  title?: string;
  children: ReactNode;
}

export default function Layout({
  children,
  title = "Order fast and easy with Fast Order",
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
