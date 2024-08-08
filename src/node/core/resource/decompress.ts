import { promisify } from 'node:util'
import { unzip, unzipSync } from 'node:zlib'

const unzipPromise = promisify(unzip)

export const decompress = async <T>(data: Buffer): Promise<T> =>
    JSON.parse((await unzipPromise(data)).toString()) as never

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export const decompressSync = <T>(data: Buffer): T =>
    JSON.parse(unzipSync(data).toString()) as never
