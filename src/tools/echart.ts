

const echartMCPTool = {
    name: "EChart",
    description: "Generate EChart",
    inputSchema: {
        type: "object",
        properties: {
            title: {
                type: "string",
                description: "Title of the chart"
            },
            data: {
                type: "array",
                description: "Data for the chart"
            }
        }
    }
}