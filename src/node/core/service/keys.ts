import { webcrypto } from 'crypto'
import { encryptionPublicKeySPKI } from '../../../common/core/service/keys'

let encryptionPublicKey: webcrypto.CryptoKey | undefined

export const getEncryptionPublicKey = async (): Promise<webcrypto.CryptoKey> => {
    encryptionPublicKey ??= await webcrypto.subtle.importKey(
        'spki',
        Buffer.from(encryptionPublicKeySPKI, 'base64'),
        { name: 'RSA-OAEP', hash: { name: 'SHA-1' } },
        false,
        ['encrypt'],
    )

    return encryptionPublicKey
}
