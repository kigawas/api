[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["accounts/info"](_accounts_info_.md)

# External module: "accounts/info"

## Index

### Functions

* [info](_accounts_info_.md#info)

## Functions

###  info

▸ **info**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/accounts/info.ts:35](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/api-derive/src/accounts/info.ts#L35)*

**`name`** info

**`description`** Returns aux. info with regards to an account, current that includes the accountId, accountIndex and nickname

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`address?`: AccountIndex | AccountId | Address | string | null): *Observable‹[DeriveAccountInfo](../interfaces/_types_.deriveaccountinfo.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`address?` | AccountIndex &#124; AccountId &#124; Address &#124; string &#124; null |