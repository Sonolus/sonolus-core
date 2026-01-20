import { promisify } from 'node:util'
import { InputType, unzip, unzipSync } from 'node:zlib'

const unzipPromise = promisify(unzip)

export const decompress = async <T>(data: InputType): Promise<T> =>
    JSON.parse((await unzipPromise(data)).toString()) as never

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export const decompressSync = <T>(data: InputType): T =>
    JSON.parse(unzipSync(data).toString()) as never
