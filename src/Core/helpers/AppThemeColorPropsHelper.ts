export default class AppThemeColorPropsHelper {

    static rgbToHex(r: number, g: number, b: number) {
        let rHex = r.toString(16),
            gHex = g.toString(16),
            bHex = b.toString(16);

        if (rHex.length === 1) rHex = `0${rHex}`;
        if (gHex.length === 1) gHex = `0${gHex}`;
        if (bHex.length === 1) bHex = `0${bHex}`;

        return `#${rHex}${gHex}${bHex}`;
    };

    // input: 'rgb(r, g, b)'
    static rgbStringToHex(rgb: string) {
        const separator = rgb.indexOf(",") > -1 ? '' : '';
        const separatedRGB = rgb.substring(4).split(")")[0].split(separator);
        let rHex = (+separatedRGB[0]).toString(16),
            gHex = (+separatedRGB[1]).toString(16),
            bHex = (+separatedRGB[2]).toString(16);

        if (rHex.length === 1) rHex = `0${rHex}`;
        if (gHex.length === 1) gHex = `0${gHex}`;
        if (bHex.length === 1) bHex = `0${bHex}`;

        return `#${rHex}${gHex}${bHex}`;
    };

    static rgbaToHex(r: number, g: number, b: number, a: number) {
        let rHex = r.toString(16),
            gHex = g.toString(16),
            bHex = b.toString(16),
            aHex = Math.round(a * 255).toString(16);

        if (rHex.length === 1) rHex = `0${rHex}`;
        if (gHex.length === 1) gHex = `0${gHex}`;
        if (bHex.length === 1) bHex = `0${rHex}`;
        if (aHex.length === 1) aHex = `0${aHex}`;

        return `#${rHex}${gHex}${bHex}${aHex}`;
    };

    static hexToRGBA(color: string, opacity: number = 1) {
        let colorHex = color.replace('#', '');
        if (colorHex.length === 3) colorHex = `${colorHex[0]}${colorHex[0]}${colorHex[1]}${colorHex[1]}${colorHex[2]}${colorHex[2]}`;
        const rValue = parseInt(colorHex.substring(0, 2), 16),
            gValue = parseInt(colorHex.substring(2, 4), 16),
            bValue = parseInt(colorHex.substring(4, 6), 16);
        /* Backward compatibility for whole number based opacity values. */
        if (opacity > 1 && opacity <= 100) opacity = opacity / 100;
        return `rgba(${rValue},${gValue},${bValue},${opacity})`;
    };


    /**
     * 
     * @param color1 => The first color (hex). 
     * @param color2 => The second color (hex). 
     * @param percentage => Weight as a decimal between 0 and 1.
     * @returns string => The mixed color (hex).
     */
    static mixColors(color1: string, color2: string, percentage: number) {
        // 1: validate input, make sure we have provided a valid hex
        if (color1.length != 4 && color1.length != 7) throw new Error('Color 1 must be provided as hexes');
        if (color2.length != 4 && color2.length != 7) throw new Error('Color 2 must be provided as hexes');
        if (percentage > 1 || percentage < 0) throw new Error('Percentage must be between 0 and 1');

        // 2: check to see if we need to convert 3 char hex to 6 char hex, else slice off hash
        //      the three character hex is just a representation of the 6 hex where each character is repeated
        //      ie: #060 => #006600 (green)
        const shortToFullHexCode = (hex: string) => {
            return hex.length === 4 ?
                `${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
                : hex.substring(1);
        };
        let color1HexCode = shortToFullHexCode(color1),
            color2HexCode = shortToFullHexCode(color2);

        // 3: we have valid input, convert colors to rgb
        const color1RGB = [parseInt(color1HexCode[0] + color1HexCode[1], 16), parseInt(color1HexCode[2] + color1HexCode[3], 16), parseInt(color1HexCode[4] + color1HexCode[5], 16)],
            color2RGB = [parseInt(color2HexCode[0] + color2HexCode[1], 16), parseInt(color2HexCode[2] + color2HexCode[3], 16), parseInt(color2HexCode[4] + color2HexCode[5], 16)];

        // 4: blend
        const color3RGB = [
            (1 - percentage) * color1RGB[0] + percentage * color2RGB[0],
            (1 - percentage) * color1RGB[1] + percentage * color2RGB[1],
            (1 - percentage) * color1RGB[2] + percentage * color2RGB[2]
        ];

        // 5: convert to hex
        const color3RHex = this.integerToHex(color3RGB[0]),
            color3GHex = this.integerToHex(color3RGB[1]),
            color3BHex = this.integerToHex(color3RGB[2]);
        const color3 = `#${color3RHex}${color3GHex}${color3BHex}`;

        // return hex
        return color3;
    }

    /**
     * Converts a number into a two character hex string.
     * @param value => The number to be converted
     * @returns string => The hex value of provided number
     */
    static integerToHex(value: number) {
        let hex = Math.round(value).toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    };

    // Tint a color: mix a color with white
    static tintColor(color: string, weight: number) {
        return this.mixColors('#ffffff', color, weight);
    }

    // Shade a color: mix a color with black
    static shadeColor(color: string, weight: number) {
        return this.mixColors('#000000', color, weight);
    }

    // Shade the color if the weight is positive, else tint it
    static shiftColor(color: string, weight: number) {
        if (weight > 0) return this.shadeColor(color, weight);
        else return this.tintColor(color, weight);
    }

    // @function -color($color, $weight) {
    // @return if ($weight > 0, shade - color($color, $weight), tint - color($color, -$weight));
    // }

    // // Return opaque color
    // // opaque(#fff, rgba(0, 0, 0, .5)) => #808080
    // static opaqueColor(background: string, foreground: string) {
    //     const rgbaForeground = this.hexToRGBA(foreground, 1);

    //     return this.mixColors();
    //     return this.mixColors(rgba($foreground, 1), $background, opacity($foreground) * 100);
    // }
};