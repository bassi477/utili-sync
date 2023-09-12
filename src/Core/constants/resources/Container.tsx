import AppThemeSpacingProps from "./Spacing";

// Grid [breakpoints, containers, columns, padding]
//
// Define the minimum dimensions at which your layout will change,
// Define the maximum width of `.container` for different screen sizes.
// Adapting to different screen sizes, for use in media queries.
// Set the number of columns and specify the width of the gutters.
// Set the container padding.
// (TODO: Calculate dynamic breakpoints based on device width).
// (TODO: If needed, implement assert methods).
// @include _assert-ascending($grid-breakpoints, "$grid-breakpoints");
// @include _assert-starts-at-zero($grid - breakpoints, "$grid-breakpoints");
// @include _assert-ascending($container - max - widths, "$container-max-widths");
const scaleBase = AppThemeSpacingProps.spacerBase,
    spacers = AppThemeSpacingProps.spacers;

const gridBreakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
}, containerMaxWidths = {
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140,
    xxl: 1320
}, gridColumns = 12,
    gridGutterWidth = 1.5 * scaleBase,
    gridRowColumns = 6,
    gutters = spacers,
    containerPaddingX = gridGutterWidth * .5;

const AppThemeContainerProps = {
    maxWidths: containerMaxWidths,
    grid: {
        breakpoints: gridBreakpoints,
        columns: gridColumns,
        rowColumns: gridRowColumns,
        gutterWidth: gridGutterWidth
    },
    gutters,
    paddingX: containerPaddingX
};

export default AppThemeContainerProps;