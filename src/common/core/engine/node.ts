import { RuntimeFunction } from '../runtimes/function.js'

export type EngineDataNode = EngineDataValueNode | EngineDataFunctionNode

export type EngineDataValueNode = {
    value: number
}

export type EngineDataFunctionNode = {
    func: RuntimeFunction
    args: number[]
}
