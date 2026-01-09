import {z} from "zod";

export const basePenSchema = z.object({
    x: z.number().describe("X coordinate of the top-left corner"),
    y: z.number().describe("Y coordinate of the top-left corner"),
    width: z.number().describe("width of the square"),
    height: z.number().describe("height of the square"),
    text: z.string().describe("Text to display on the square center")
})

export type BasePenSchema = z.infer<typeof basePenSchema>
