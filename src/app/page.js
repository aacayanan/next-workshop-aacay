import storeInfo from "./storeInfo";
import styles from "./page.module.css";
import ListingCard from "./components/ListingCard";

export default function Home() {
  const image = "./assets/item1.jpg";
  const name = "Stinky Pirate";
  const price = "$110";
  return (
    <main className={styles.main}>
      <h1 className={styles.store_header}>Pirate Marketplace</h1>
      <ListingCard
        image={image}
        name={name}
        price={price}
        />
    </main>
  );
}
