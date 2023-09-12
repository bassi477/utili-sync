// Z-index master list
//
// Warning: Avoid customizing these values. They're used for a bird's eye view
// of components dependent on the z-axis and are designed to all work together.
const zindexDropdown = 1000,
    zindexSticky = 1020,
    zindexFixed = 1030,
    zindexModalBackdrop = 1040,
    zindexOffCanvas = 1050,
    zindexModal = 1060,
    zindexPopover = 1070,
    zindexTooltip = 1080;

const AppThemeZIndexProps = {
    dropdown: zindexDropdown,
    sticky: zindexSticky,
    fixed: zindexFixed,
    modalBackdrop: zindexModalBackdrop,
    offCanvas: zindexOffCanvas,
    modal: zindexModal,
    popover: zindexPopover,
    tooltip: zindexTooltip,
};

export default AppThemeZIndexProps;