import { promisify } from 'util'
import { unzip, unzipSync } from 'zlib'

const unzipPromise = promisify(unzip)

export async function decompress<T>(data: Buffer): Promise<T> {
    return JSON.parse((await unzipPromise(data)).toString())
}

export function decompressSync<T>(data: Buffer): T {
    return JSON.parse(unzipSync(data).toString())
}
