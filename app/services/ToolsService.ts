import Tool from '../models/Tool';

export async function listAll() {
  return await Tool.find();
}