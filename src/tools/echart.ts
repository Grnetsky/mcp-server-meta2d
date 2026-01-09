import {z} from "zod";
import {BasePenSchema, basePenSchema} from "../utils/schema.js";

export const echartsMCPTool = {
    name: "meta2d_EChart",
    description: "Generate EChart",
    inputSchema: z.object({
        ...basePenSchema.shape
    }),

    /**
     * TODO 使用mcp客户端进行调用echarts的mcp服务
     * 由于暂时没有MCP客户端 暂时不实现
     * */
    run:async (
        params: BasePenSchema & {
            name: "echarts",
        }
    )=>{

    }
}