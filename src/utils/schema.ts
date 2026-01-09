import {z} from "zod";

// zod: https://zod.dev/api#string-formats
export const basePenSchema = z.object({
    x: z
        .number()
        .describe(
            "X coordinate of the top-left corner"
        ),
    y: z
        .number()
        .describe(
            "Y coordinate of the top-left corner"
        ),
    width: z
        .number()
        .describe(
            "width of the square"
        ),
    height: z
        .number()
        .describe(
            "height of the square"
        ),
    text: z
        .string()
        .optional()
        .describe(
            "Text to display on the square center"
        ),
    color: z
        .string()
        .optional()
        .describe(
            "Color of the square in hex format"
        ),
    background: z
        .string()
        .optional()
        .describe(
            "Background color of the square ,support hex format or image url"
        ),
    // 完善其他的schema属性
})

export type BasePenSchema = z.infer<typeof basePenSchema>
