import Layout from "../layout/Layout";
import styles from "../styles/Home.module.css";
import { getSections } from "../services/getSections";

export async function getStaticProps() {
  const sections = await getSections();
  return {
    props: {
      sections,
    },
    revalidate: 1200,
  };
}
interface Props {
  sections: any;
}

export default function Home({ sections }: Props) {
  console.log(sections);
  return (
    <Layout>
      <div className={styles.container}></div>
    </Layout>
  );
}
