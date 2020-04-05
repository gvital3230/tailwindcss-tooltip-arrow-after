const _ = require('lodash');

module.exports = function () {
    return function ({addUtilities, e, theme}) {
        addUtilities(_.map(theme('tooltipArrows'), ({borderColor, backgroundColor, size, offset, borderWidth}, key) => {
            return {
                [`.${e(key)}`]: {
                    '&-top': {
                        position: 'relative',
                        '&:before, &:after': {
                            content: '""',
                            position: 'absolute',
                            left: offset + 'px',
                            top: '-' + size * 2 + 'px',
                            borderTop: size + 'px solid transparent',
                            borderRight: size + 'px solid transparent',
                            borderBottom: size + 'px solid ' + borderColor,
                            borderLeft: size + 'px solid transparent',
                        },
                        '&:after': {
                            borderBottom: size + 'px solid ' + backgroundColor,
                            top: '-' + (2 * size - borderWidth) + 'px'
                        },
                    },
                    '&-right': {
                        position: 'relative',
                        '&:before, &:after': {
                            content: '""',
                            position: 'absolute',
                            top: offset + 'px',
                            right: '-' + size * 2 + 'px',
                            borderTop: size + 'px solid transparent',
                            borderRight: size + 'px solid transparent',
                            borderBottom: size + 'px solid transparent',
                            borderLeft: size + 'px solid ' + borderColor,
                        },
                        '&:after': {
                            borderLeft: size + 'px solid ' + backgroundColor,
                            right: '-' + (2 * size - borderWidth) + 'px'
                        },
                    },
                    '&-bottom': {
                        position: 'relative',
                        '&:before, &:after': {
                            content: '""',
                            position: 'absolute',
                            left: offset + 'px',
                            bottom: '-' + size * 2 + 'px',
                            borderTop: size + 'px solid ' + borderColor,
                            borderRight: size + 'px solid transparent',
                            borderBottom: size + 'px solid transparent',
                            borderLeft: size + 'px solid transparent',
                        },
                        '&:after': {
                            borderTop: size + 'px solid ' + backgroundColor,
                            bottom: '-' + (2 * size - borderWidth) + 'px'
                        },
                    },
                    '&-left': {
                        position: 'relative',
                        '&:before, &:after': {
                            content: '""',
                            position: 'absolute',
                            top: offset + 'px',
                            left: '-' + size * 2 + 'px',
                            borderTop: size + 'px solid transparent',
                            borderRight: size + 'px solid ' + borderColor,
                            borderBottom: size + 'px solid transparent',
                            borderLeft: size + 'px solid transparent',
                        },
                        '&:after': {
                            borderRight: size + 'px solid ' + backgroundColor,
                            left: '-' + (2 * size - borderWidth) + 'px'
                        },
                    },
                }
            };
        }));
    }
}


