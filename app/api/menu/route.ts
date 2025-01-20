import { menu } from '../../db/menu';

export async function GET() {
  return Response.json(menu);
}