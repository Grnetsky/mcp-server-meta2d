import { z } from "zod";
import {basePenSchema} from "../utils/schema.js";
const NAME = "square"

export const squarePenTool = {
    name: "meta2d_squarePen",
    description: "Draw a meta2d square pen",
    inputSchema: z.object({
        ...basePenSchema.shape
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