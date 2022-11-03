import admin from "firebase-admin";

import config from "../config/config.js";

admin.initializeApp({
  credential: admin.credential.cert(config.firebase),
  databaseURL: "https://eccomerce-coder-78197-default-rtdb.firebaseio.com"
});

const db = admin.firestore();
console.log('Database conectada')

class ContenedorFirebase {
  constructor(collectionName) {
    this.collection = db.collection(collectionName);
  }

  async getById(id) {
    // NO FUNCIONA
    try {
        const doc = this.collection.doc(`${id}`)
        const item = await doc.get()
        const response = item.data()
        return response;
    } catch (err) {
        console.log(err)
    }
  }

  async getAll() {
    try {
      const result = [];
      const data = await this.collection.get();
      data.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      return result
    } catch (err) {
        console.log(err)
    }
  }

  async deleteById(id) {
    try {
        const doc = this.collection.doc(`${id}`)
        const item = await doc.delete();
        return item;

    } catch (err) {
        console.log(err)
    }
  }

  async save(object){
    try{
        let doc = this.collection.doc()
        const objeto = await doc.create(object);
        return objeto;
    }
    catch(err){
        console.log(err)
    }

  }

  async update(id,objeto){
    try{
        const doc = this.collection.doc(`${id}`)
        const item = await doc.update(objeto)
        return item;
    }
    catch(err){
        console.log(err)
    }
  }

}


export {ContenedorFirebase};