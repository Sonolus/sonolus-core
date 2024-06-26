import { promisify } from 'node:util'
import { gzip, gzipSync } from 'node:zlib'

const zlibOptions = {
    level: 9,
}

const gzipPromise = promisify(gzip)

export const compress = <T>(data: T): Promise<Buffer> =>
    gzipPromise(JSON.stringify(data), zlibOptions)

export const compressSync = <T>(data: T): Buffer => gzipSync(JSON.stringify(data), zlibOptions)
