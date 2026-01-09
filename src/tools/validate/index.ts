export function isValidateMeta2dOption(option: string,type: string = 'pen'):boolean {
    try {
        // 先验证是否是图元
        const parsedOption = JSON.parse(option);
        if(!parsedOption || typeof parsedOption !== 'object') {
            return false;
        }
        return true
    } catch (error) {
        return false;
    }
}
