[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/v4/ExtrinsicPayload"](../modules/_primitive_extrinsic_v4_extrinsicpayload_.md) › [ExtrinsicPayloadV4](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md)

# Class: ExtrinsicPayloadV4 <**S, T, V, E**>

**`name`** ExtrinsicPayloadV4

**`description`** 
A signing payload for an [Extrinsic](../interfaces/_interfaces_runtime_types_.extrinsic.md). For the final encoding, it is variable length based
on the contents included

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **ExtrinsicPayloadV4**

  ↳ [ExtrinsicPayloadV4](../interfaces/_interfaces_runtime_types_.extrinsicpayloadv4.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#constructor)

### Properties

* [[Symbol.toStringTag]](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#[symbol.tostringtag])
* [registry](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#registry)

### Accessors

* [Type](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#type)
* [blockHash](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#blockhash)
* [encodedLength](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#encodedlength)
* [era](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#era)
* [genesisHash](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#genesishash)
* [hash](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#hash)
* [isEmpty](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#isempty)
* [method](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#method)
* [nonce](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#nonce)
* [specVersion](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#specversion)
* [tip](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#tip)

### Methods

* [[Symbol.iterator]](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#[symbol.iterator])
* [eq](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#eq)
* [get](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#get)
* [getAtIndex](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#getatindex)
* [sign](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#sign)
* [toArray](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#toarray)
* [toHex](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#tohex)
* [toJSON](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#tojson)
* [toRawType](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#torawtype)
* [toString](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#tostring)
* [toU8a](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#tou8a)
* [typesToMap](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#static-typestomap)
* [with](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicPayloadV4**(`registry`: [Registry](../interfaces/_types_.registry.md), `value?`: [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) | Uint8Array | string): *[ExtrinsicPayloadV4](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts:21](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`value?` | [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) &#124; Uint8Array &#124; string |

**Returns:** *[ExtrinsicPayloadV4](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md)*

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

###  registry

• **registry**: *[Registry](../interfaces/_types_.registry.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md).[registry](../interfaces/_types_.codec.md#registry)*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Struct.ts#L34)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  blockHash

• **get blockHash**(): *[Hash](../interfaces/_interfaces_runtime_types_.hash.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts:29](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts#L29)*

**`description`** The block [Hash](../interfaces/_interfaces_runtime_types_.hash.md) the signature applies to (mortal/immortal)

**Returns:** *[Hash](../interfaces/_interfaces_runtime_types_.hash.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Struct.ts#L171)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](../interfaces/_interfaces_runtime_types_.extrinsicera.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts:36](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts#L36)*

**`description`** The [ExtrinsicEra](../interfaces/_interfaces_runtime_types_.extrinsicera.md)

**Returns:** *[ExtrinsicEra](../interfaces/_interfaces_runtime_types_.extrinsicera.md)*

___

###  genesisHash

• **get genesisHash**(): *[Hash](../interfaces/_interfaces_runtime_types_.hash.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts:43](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts#L43)*

**`description`** The genesis [Hash](../interfaces/_interfaces_runtime_types_.hash.md) the signature applies to (mortal/immortal)

**Returns:** *[Hash](../interfaces/_interfaces_runtime_types_.hash.md)*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[Bytes](_primitive_bytes_.bytes.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts:50](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts#L50)*

**`description`** The [Bytes](_primitive_bytes_.bytes.md) contained in the payload

**Returns:** *[Bytes](_primitive_bytes_.bytes.md)*

___

###  nonce

• **get nonce**(): *[Compact](_codec_compact_.compact.md)‹[Index](../interfaces/_interfaces_runtime_types_.index.md)›*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts:57](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts#L57)*

**`description`** The [Index](../interfaces/_interfaces_runtime_types_.index.md)

**Returns:** *[Compact](_codec_compact_.compact.md)‹[Index](../interfaces/_interfaces_runtime_types_.index.md)›*

___

###  specVersion

• **get specVersion**(): *[u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts:64](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts#L64)*

**`description`** The specVersion for this signature

**Returns:** *[u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32)*

___

###  tip

• **get tip**(): *[Compact](_codec_compact_.compact.md)‹[Balance](../interfaces/_interfaces_runtime_types_.balance.md)›*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts:71](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts#L71)*

**`description`** The tip [Balance](../interfaces/_interfaces_runtime_types_.balance.md)

**Returns:** *[Compact](_codec_compact_.compact.md)‹[Balance](../interfaces/_interfaces_runtime_types_.balance.md)›*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[keyof S, [Codec](../interfaces/_types_.codec.md)]›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

Returns an iterable of entries in the map.

**Returns:** *IterableIterator‹[keyof S, [Codec](../interfaces/_types_.codec.md)]›*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Struct.ts#L189)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Struct.ts#L197)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Struct.ts#L204)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  sign

▸ **sign**(`signerPair`: [IKeyringPair](../interfaces/_types_.ikeyringpair.md)): *Uint8Array*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts:78](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/primitive/Extrinsic/v4/ExtrinsicPayload.ts#L78)*

**`description`** Sign the payload with the keypair

**Parameters:**

Name | Type |
------ | ------ |
`signerPair` | [IKeyringPair](../interfaces/_types_.ikeyringpair.md) |

**Returns:** *Uint8Array*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_.md#bareopts)): *Uint8Array*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Struct.ts#L266)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](../interfaces/_types_.registry.md), `Types`: Record‹string, [Constructor](../interfaces/_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Struct.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`Types` | Record‹string, [Constructor](../interfaces/_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*