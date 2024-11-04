import React from "react";

export default function WebsiteStructure() {
  return (
    <>
      <header style={styles.header}>Header</header>
      <nav style={styles.nav}>Navigation Menu</nav>
      <main style={styles.main}>
        <aside style={styles.sidebar}>Content</aside>
        <section style={styles.mainContent}>Main Content</section>
        <aside style={styles.sidebar}>Content</aside>
      </main>
      <footer style={styles.footer}>Footer</footer>
    </>
  );
}
const styles = {
  header: {
    backgroundColor: "#e0e0e0",
    padding: "20px",
    textAlign: "center",
    margin: "10px",
  },
  nav: {
    backgroundColor: "#e0e0e0",
    padding: "15px",
    textAlign: "center",
    margin: "10px",
  },
  main: {
    display: "flex",
    alignItems: "center",
    margin: "10px",
  },
  sidebar: {
    backgroundColor: "#e0e0e0",
    width: "20%",
    height: "370px",
    padding: "20px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainContent: {
    backgroundColor: "#e0e0e0",
    width: "60%",
    height: "370px",
    padding: "20px",
    textAlign: "center",
    margin: "7px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    backgroundColor: "#e0e0e0",
    padding: "20px",
    height: "100px",
    margin: "10px",
    display: "flex", // Center content
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
  },
};
