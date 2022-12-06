import mongoose from "mongoose";
import { expect } from "chai";
import supertest from "supertest";
import app from "../app.js";
import { describe } from "mocha";

let request;
let server;

//Comienzo del Test donde se conecta a la DB
describe("testeo API REST", () => {
    before(async function () {
        await connectDb();
        server = await startServer();
        request = supertest(
          `http://localhost:${server.address().port}/lista-productos`
        );
      });
    
      after(function () {
        mongoose.disconnect();
        server.close();
      });
    
    //Test para probar el GET de productos
    describe("GET", () => {
        it("should return 200", async () => {
            const response = await request.get("/");
            expect(response.status).to.equal(200);
        });
    });
    
    //Test para probar el POST de productos
    describe("POST", () => {
        it("should add product", async () => { 
            const response = await request.post("/").send({
                title: "test",
                price: 10,
                thumbnail: "test",
            });
            expect(response.status).to.equal(201);
        });
    });
    
    //Test para probar el PUT de productos
    describe("PUT", () => {
        it("should change product", async () => {
            let allProducts = await request.get('/');
            allProducts = JSON.parse(allProducts.text).result;
            const lastProd = allProducts[allProducts.length - 1]
            const response = await request.put(`/${lastProd.id}`).send({
                name: 'test',
                price: 123,
                thumbnail: 'testUrl'
            });
            expect(response.status).to.equal(204);
        });
    });
    
    //Test para probar el DELETE de productos
    describe("DELETE", () => {
        it("should delete product", async () => {
            let allProducts = await request.get('/');
            allProducts = JSON.parse(allProducts.text).result;
            const lastProd = allProducts[allProducts.length - 1]
            const response = await request.delete(`/${lastProd.id}`)
            expect(response.status).to.equal(204);
        });
    });
});


//funciones para conectar a la base de datos MongoDB e inicializar servidor
async function connectDb() {
    try {
        const URL = process.env.MONGO_URL || 'mongodb://localhost:27017/test'
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Could not connect to MongoDB', error);
    }
}

async function startServer() {
    return new Promise((resolve, reject) => {
      const PORT = 0;
      const server = app.listen(PORT, () => {
        console.log(
          `Servidor express escuchando en el puerto ${server.address().port}`
        );
        resolve(server);
      });
      server.on("error", (error) => {
        console.log(`Error en Servidor: ${error}`);
        reject(error);
      });
    });
}