import { createHash } from 'crypto'

export function hash(buffer: Buffer): string {
    return createHash('sha1').update(buffer).digest('hex')
}
