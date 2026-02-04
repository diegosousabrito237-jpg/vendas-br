import { firebaseConfig } from "./firebase-config.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function carregarProdutos(){
  const q = query(collection(db, "produtos"), orderBy("criadoEm", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => d.data());
}
