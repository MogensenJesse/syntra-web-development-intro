const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set, get, child, remove } = require("firebase/database");
const uuidv4 = require("uuid").v4;

const firebaseConfig = {
  apiKey: "AIzaSyDgdrurQiWH039djC7IqLmkzgKVNP5Qkis",
  authDomain: "countries-1c733.firebaseapp.com",
  databaseURL: "https://countries-1c733-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "countries-1c733",
  storageBucket: "countries-1c733.appspot.com",
  messagingSenderId: "424730380692",
  appId: "1:424730380692:web:b386550ed7bce1beb7a781",
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

module.exports = {
  //hier klopt nog iets niet
  writeItem: (item) => {
    const id = uuidv4();
    set(ref(database, "countries/" + id), item);
  },
  updateItem: (id, item) => {
    set(ref(database, "countries/" + id), item);
  },
  readItem: async (itemId) => {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `countries/${itemId}`));
    if (snapshot.exists()) {
      return snapshot.val();
    }
  },
  readAll: async () => {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `countries`));
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
  },
  removeItem: async (itemId) => {
    await remove(ref(database, `countries/${itemId}`));
  },
};
