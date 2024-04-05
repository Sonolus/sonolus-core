import { webcrypto } from 'node:crypto'
import { signaturePublicKeyJWK } from '../../../common/core/service/keys'

let signaturePublicKey: webcrypto.CryptoKey | undefined

export const getSignaturePublicKey = async (): Promise<webcrypto.CryptoKey> => {
    signaturePublicKey ??= await webcrypto.subtle.importKey(
        'jwk',
        signaturePublicKeyJWK,
        { name: 'ECDSA', namedCurve: 'P-256' },
        false,
        ['verify'],
    )

    return signaturePublicKey
}
