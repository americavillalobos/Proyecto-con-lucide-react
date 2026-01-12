import { db } from "../firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  getDocs
} from "firebase/firestore";

const ticketsCollection = collection(db, "tickets");

export const getTickets = async () => {
  const snapshot = await getDocs(ticketsCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const createTicket = async (ticket) => {
  const docRef = await addDoc(ticketsCollection, ticket);
  return { id: docRef.id, ...ticket };
};

export const removeTicket = async (id) => {
  await deleteDoc(doc(db, "tickets", id));
};

export const updateTicketStatus = async (id, status) => {
  await updateDoc(doc(db, "tickets", id), { status });
};
