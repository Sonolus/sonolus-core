export type Option = SliderOption | ToggleOption

type SliderOption = {
    name: OptionName
    standard?: boolean
    scope?: string
    type: 'slider'
    def: number
    min: number
    max: number
    step: number
    display: 'number' | 'percentage'
}

type ToggleOption = {
    name: OptionName
    standard?: boolean
    scope?: string
    type: 'toggle'
    def: 0 | 1
}

export enum OptionName {
    LevelSpeed = '#SPEED',
    AutoPlay = '#AUTO',
    MirrorLevel = '#MIRROR',
    Random = '#RANDOM',
    Hidden = '#HIDDEN',
    StrictJudgment = '#JUDGMENT_STRICT',
    LooseJudgment = '#JUDGMENT_LOOSE',
    SFX = '#EFFECT',
    StageVisibility = '#STAGE',
    StageSize = '#STAGE_SIZE',
    StageTransparency = '#STAGE_ALPHA',
    StageTilt = '#STAGE_TILT',
    VerticalStageCover = '#STAGE_COVER_VERTICAL',
    HorizontalStageCover = '#STAGE_COVER_HORIZONTAL',
    StageCoverTransparency = '#STAGE_COVER_ALPHA',
    LockStageAspectRatio = '#STAGE_ASPECTRATIO_LOCK',
    StageEffect = '#STAGE_EFFECT',
    StageEffectSize = '#STAGE_EFFECT_SIZE',
    StageEffectTransparency = '#STAGE_EFFECT_ALPHA',
    LaneVisibility = '#LANE',
    LaneSize = '#LANE_SIZE',
    LaneTransparency = '#LANE_ALPHA',
    LaneEffect = '#LANE_EFFECT',
    LaneEffectSize = '#LANE_EFFECT_SIZE',
    LaneEffectTransparency = '#LANE_EFFECT_ALPHA',
    JudgmentLineVisibility = '#JUDGELINE',
    JudgmentLineSize = '#JUDGELINE_SIZE',
    JudgmentLineTransparency = '#JUDGELINE_ALPHA',
    JudgmentLineEffect = '#JUDGELINE_EFFECT',
    JudgmentLineEffectSize = '#JUDGELINE_EFFECT_SIZE',
    JudgmentLineEffectTransparency = '#JUDGELINE_EFFECT_ALPHA',
    SlotVisibility = '#SLOT',
    SlotSize = '#SLOT_SIZE',
    SlotTransparency = '#SLOT_ALPHA',
    SlotEffect = '#SLOT_EFFECT',
    SlotEffectSize = '#SLOT_EFFECT_SIZE',
    SlotEffectTransparency = '#SLOT_EFFECT_ALPHA',
    NoteVisibility = '#NOTE',
    NoteSpeed = '#NOTE_SPEED',
    RandomNoteSpeed = '#NOTE_SPEED_RANDOM',
    NoteSize = '#NOTE_SIZE',
    NoteTransparency = '#NOTE_ALPHA',
    NoteEffect = '#NOTE_EFFECT',
    NoteEffectSize = '#NOTE_EFFECT_SIZE',
    NoteEffectTransparency = '#NOTE_EFFECT_ALPHA',
    MarkerVisibility = '#MARKER',
    MarkerSize = '#MARKER_SIZE',
    MarkerTransparency = '#MARKER_ALPHA',
    ConnectorVisibility = '#CONNECTOR',
    ConnectorSize = '#CONNECTOR_SIZE',
    ConnectorTransparency = '#CONNECTOR_ALPHA',
    SimultaneousLineVisibility = '#SIMLINE',
    SimultaneousLineSize = '#SIMLINE_SIZE',
    SimultaneousLineTransparency = '#SIMLINE_ALPHA',
}
