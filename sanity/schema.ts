import { type SchemaTypeDefinition } from "sanity";
import { insightSchema } from "./schemas/insight";
import { categorySchema } from "./schemas/category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [insightSchema, categorySchema],
};
