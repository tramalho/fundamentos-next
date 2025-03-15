import Link from "next/link";
import styles from "../styles/Estiloso.module.css";
import Layout from "../components/Layout";

export default function Estiloso() {
	return (
		<Layout titulo="Exemplo CSS modularizado">
			<div className={styles.roxo}>
				<h1>CSS Modularizado</h1>
				<h1>Estilo usando CSS modularizado</h1>
			</div>
		</Layout>
	);
}
