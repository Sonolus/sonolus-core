import { promisify } from 'util'
import { unzip, unzipSync } from 'zlib'

const unzipPromise = promisify(unzip)

export const decompress = async <T>(data: Buffer): Promise<T> =>
    JSON.parse((await unzipPromise(data)).toString())

export const decompressSync = <T>(data: Buffer): T => JSON.parse(unzipSync(data).toString())
