import { promisify } from 'node:util'
import { InputType, unzip, unzipSync } from 'node:zlib'

const unzipPromise = promisify(unzip)

export const decompress = async <T>(data: InputType): Promise<T> =>
    // oxlint-disable-next-line typescript/no-unsafe-type-assertion
    JSON.parse((await unzipPromise(data)).toString()) as never

// oxlint-disable-next-line typescript/no-unnecessary-type-parameters
export const decompressSync = <T>(data: InputType): T =>
    // oxlint-disable-next-line typescript/no-unsafe-type-assertion
    JSON.parse(unzipSync(data).toString()) as never
