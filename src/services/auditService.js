import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Colección de auditorías
const auditsCollection = collection(db, "audits");

// Guardar una auditoría
export const saveAudit = async (auditResults) => {
  try {
    const docRef = await addDoc(auditsCollection, {
      date: new Date().toISOString(),
      results: auditResults
    });
    console.log("Auditoría guardada con ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error guardando auditoría:", error);
  }
};

// Traer todas las auditorías
export const getAudits = async () => {
  const snapshot = await getDocs(auditsCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
