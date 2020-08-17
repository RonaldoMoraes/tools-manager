import { Request, Response } from 'express';
import * as ExampleService from '../services/ExampleService';
import Example from '../models/Example';

export async function index(request: Request, response: Response){
  console.log('index');
  const examples = ExampleService.listAll();

  return response.json(examples);
}

export async function show(request: Request, response: Response){
  console.log('show');
  const example = new Example();

  return response.json(example);
}

export async function store(request: Request, response: Response){
  console.log('store');
  let examples = ExampleService.listAll();
  examples.push(request.body);

  return response.json(examples);
}

export async function update(request: Request, response: Response){
  console.log('update');

  return response.json({data: "update"});
}

export async function destroy(request: Request, response: Response){
  console.log('delete');

  return response.json({data: "delete"});
}
