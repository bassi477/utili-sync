// Spacing
//
// Control the default styling of most Bootstrap elements by modifying these
// variables. Mostly focused on spacing.
// You can add more entries to the $spacers map, should you need more variation.
const spacerBase = 8,
    spacer = 1 * spacerBase,
    spacers = {
        0: 0,
        1: spacer * .25,
        2: spacer * .5,
        3: spacer,
        4: spacer * 1.5,
        5: spacer * 30,
    },
    negativeSpacers = undefined;

// if needed can implement this later.
// $negative-spacers: if($enable-negative-margins, negativify-map($spacers), null) !default;


const AppThemeSpacingProps = {
    spacerBase,
    spacer,
    spacers,
    negativeSpacers,
};

export default AppThemeSpacingProps;