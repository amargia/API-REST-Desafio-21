import mongoose, { mongo } from "mongoose";
import { expect } from "chai";
import { describe } from "mocha";
import supertest from "supertest";
import app from "../app.js";

const request = supertest(app);

describe('Testing API RESTful', () => {
  describe('GET', () => {
      it('Debería retornar status 200', async() => {
          const response = await request.get('/');
          expect(response.status).to.equal(200);
      });
  })
  describe('POST', () => {
      it('Debería retornar status 201', async() => {
          const obj = {
              name: 'Test',
              price: 1234,
              thumbnail: 'Testing Image'
          }
          const response = await request.post('/').send(obj);
          expect(response.status).to.equal(201);
      });
  })
  describe('PUT', () => {
      it('Debería retornar status 204', async() => {
          let allProducts = await request.get('/');
          allProducts = JSON.parse(allProducts.text).result;
          const lastProd = allProducts[allProducts.length - 1]
          const obj = {
              name: 'Test2',
              price: 123,
              thumbnail: 'Testing Image2'
          }
          const response = await request.put(`/${lastProd.id}`).send(obj);
          expect(response.status).to.equal(204);
      });
  })
  describe('DELETE', () => {
          it('Debería retornar status 204', async() => {
              let allProducts = await request.get('/');
              allProducts = JSON.parse(allProducts.text).result;
              const lastProd = allProducts[allProducts.length - 1]
              const response = await request.delete(`/${lastProd.id}`)
              expect(response.status).to.equal(204);
          });
      })
})