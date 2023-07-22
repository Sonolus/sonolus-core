export const InstructionText = {
    Tap: '#TAP',
    TapAndHold: '#TAP_HOLD',
    TapAndRelease: '#TAP_RELEASE',
    TapAndFlick: '#TAP_FLICK',
    TapAndSlide: '#TAP_SLIDE',
    Hold: '#HOLD',
    HoldAndSlide: '#HOLD_SLIDE',
    HoldAndFollow: '#HOLD_FOLLOW',
    Release: '#RELEASE',
    Flick: '#FLICK',
    Slide: '#SLIDE',
    SlideAndFlick: '#SLIDE_FLICK',
    Avoid: '#AVOID',
    Jiggle: '#JIGGLE',
} as const

export type InstructionText = (typeof InstructionText)[keyof typeof InstructionText]
