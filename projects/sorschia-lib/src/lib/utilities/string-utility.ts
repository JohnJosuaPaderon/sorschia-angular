export class StringUtility {

    public static isNullOrWhitespace(input: string): boolean {
        if (typeof input === 'undefined' || input == null)
            return true;

        return input.trim().length < 1;
    }
    
}
