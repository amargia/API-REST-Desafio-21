import mongoose from "mongoose";
import { expect } from "chai";
// import { describe } from "mocha";
import supertest from "supertest";
import app from "../app.js";

let request;
let server;

describe("Testing API RESTful", () => {
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

  describe("GET", () => {
    it("should return 200", async () => {   
      const response = await request.get("/");
      // console.log(response.body);       
      expect(response.status).to.equal(200); 
    })
  });



  describe("POST", () => {    
    it("should add product", async () => {     
        const producto = {
          name: "test",
          description: "test",
          code: 444,
          price: 1,
          thumbnail: "test",
          stock: 1,
          timestamp: "test"
        }
        const response = await request.post("/").send(producto);
        expect(response.status).to.eql(201);

        const newResponse = (await (await request.get("/")).body.length) - 1;
        console.log(newResponse);
  
        // const product = response.body;
  
        // expect(product).to.include.keys("name", "description");
        // expect(product.name).to.eql(producto.name);
        // expect(product.description).to.eql(producto.description);
    });
  });  

  describe("PUT", () => {
    it("should modify product", async () => {
        const id = "638cdba942c918d12967e172" //verificar ID
        const producto = {name: "test4", description: "test4", code: 123, price: 2, thumbnail: "test4", stock: 2}
        const response = await request.put(`/${id}`).send(producto);
        const product = await request.get(`/${id}`);
        
        expect(response.status).to.eql(200);
        expect(product.body.name).to.eql(producto.name);
    });
  });

  describe("DELETE", () => {
    
    it("should delete product", async () => {
      const data = await request.get("/");
      const arrLength = data.body.length;
      
      const id = "63950e744dc836121f2e2f57" // cambiar ID de producto para que funcione, este ya lo eliminó
      const response = await request.delete(`/${id}`); 
      
      const data2 = await request.get("/");
      const arrLength2 = data2.body.length;

      expect(response.status).to.eql(200);
      expect(arrLength2).to.eql(arrLength - 1);
      
    });
  });
});




/* Conexion a la base de datos */
async function connectDb() {
  const URL = process.env.MONGO_URL || 'mongodb://localhost:27017/test'  
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Base de datos conectada");
  } catch (error) {
    throw new Error(`Error de conexión en la base de datos: ${err}`);
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