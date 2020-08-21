import { Request, Response } from 'express';
import * as ToolsService from '../services/ToolsService';
import Tool from '../models/Tool';
import * as respondWith from '../utils/respondWith';

export async function index(req: Request, res: Response){
  try{
    const tools = await ToolsService.listAll();
    
    return respondWith.success(res, tools);
  } catch (error) {
    return respondWith.error(res)
  }
}

export async function show(req: Request, res: Response){
  try {
    const id = req.params.id;
    const tool = await Tool.findById(id);
  
    return respondWith.success(res, tool);
  } catch (error) {
    return respondWith.error(res)
  }
}

export async function store(req: Request, res: Response){
  try {
    const tool = await Tool.create(req.body);
    
    return respondWith.success(res, tool);
  } catch (error) {
    return respondWith.error(res)
  }
}

export async function update(req: Request, res: Response){
  try {
    const id = req.params.id;
    await Tool.updateOne({_id: id}, req.body);

    return respondWith.success(res);
  } catch (error) {
    return respondWith.error(res)
  }
}

export async function destroy(req: Request, res: Response){
  try {
    const id = req.params.id;
    await Tool.deleteOne({_id: id});
    
    return respondWith.success(res);
  } catch (error) {
    return respondWith.error(res)
  }
}

export async function test(req: Request, res: Response){
  // Initialize a tool
  const tool = new Tool({
    title: 'Teste1',
    tags: ["First", "Second"]
  });

  // Save the tool
  await tool.save();
  
  // Using instance method of Tool Model Instance
  console.log('mixTitleAndTag', await tool.mixTitleAndTag());
  
  // Create another tool
  await Tool.create({
    title: 'fastify',
    tags: ["web", "framework", "node"],
  });

  // Using static method of Tool Model
  Tool.findByTitle('fastify')
  .then((data: any) => { console.log('data', data)})
  .catch((err: any) => {console.log('err', err)});
  
  // Using mongoose default query methods
  const tools = await Tool.find();
  return res.json({data: tools});
}