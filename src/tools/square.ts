import { z } from "zod";

const NAME = "square"

export const squarePenTool = {
    name: "meta2d_squarePen",
    description: "Draw a meta2d square pen",
    inputSchema: z.object({
        x: z.number().describe("X coordinate of the top-left corner"),
        y: z.number().describe("Y coordinate of the top-left corner"),
        width: z.number().describe("width of the square"),
        height: z.number().describe("height of the square"),
        text: z.string().describe("Text to display on the square center")
    }),
    run: async (params:{
        name: "square",
        x: number,
        y: number,
        width: number,
        height: number,
        text: string
    })=>{
        params.name = NAME
        const response = {
            content: [
                {
                    type: "text" as const,
                    text: JSON.stringify(params)
                },
            ],
        };
        return response
    }
}