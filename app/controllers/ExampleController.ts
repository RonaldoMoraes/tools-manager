import { Request, Response } from 'express';
import * as ExampleService from '../services/ExampleService';
// import Example from '../models/Example';

export async function index(request: Request, response: Response){
  console.log('index');
  // const example = new Example();
  const examples = ExampleService.listAll();

  return response.json(examples);
}

export async function show(request: Request, response: Response){
  console.log('show');

  return response.json({crazy: "show"});
}

export async function store(request: Request, response: Response){
  console.log('store');

  return response.json({crazy: "store"});
}

export async function update(request: Request, response: Response){
  console.log('update');

  return response.json({crazy: "update"});
}

export async function destroy(request: Request, response: Response){
  console.log('delete');

  return response.json({crazy: "delete"});
}
