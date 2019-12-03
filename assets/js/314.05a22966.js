(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{511:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"extending-extrinsics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extending-extrinsics"}},[t._v("#")]),t._v(" Extending extrinsics")]),t._v(" "),a("p",[t._v("On some chains, the need may arise to customize the extrinsic format. In this section we will explain what extrinsics and their payloads contain, explain how signed extensions work and provide a walk through of an advanced use-case where extrinsics are customized for a specific Substrate chain.")]),t._v(" "),a("h2",{attrs:{id:"extensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extensions"}},[t._v("#")]),t._v(" Extensions")]),t._v(" "),a("p",[t._v("In Substrate (which forms the base of Polkadot and a number of custom chains), an extrinsic has a specific version, flag to indicating if it has been signed, the address, signature, extra data as well as the actual method with params. In addition, the signature is generated over the call and may include values that are not encoded into the final extrinsic.")]),t._v(" "),a("p",[t._v("For instance, with version 3 extrinsics, the signature payload contains the runtime spec version as well as the "),a("code",[t._v("genesisHash")]),t._v(" and "),a("code",[t._v("blockHash")]),t._v(" (the latter being equivalent to the "),a("code",[t._v("genesisHash")]),t._v(" in case of immortal transactions), however while these 3 fields are signed together with the method data, they do not actually appear in the extrinsic itself. Rather the chain executing the transaction will retrieve this information, add it to the method data and compare the signatures thereof.")]),t._v(" "),a("p",[t._v("So in both the cases of the "),a("code",[t._v("genesisHash")]),t._v(" and "),a("code",[t._v("specVersion")]),t._v(", if these do not match the signer version, the transaction won't be accepted - however the extrinsic doesn't explicitly carry this information in the data being transmitted, rather only implicitly as part of the signature. And it always forms part of the validation.")]),t._v(" "),a("h2",{attrs:{id:"default-extrinsics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-extrinsics"}},[t._v("#")]),t._v(" Default extrinsics")]),t._v(" "),a("p",[t._v("With the above in-mind, the extrinsic format is explicitly defined as having the following structure in Substrate -")]),t._v(" "),a("div",{staticClass:"language-rust line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" UncheckedExtrinsic"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Call"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Signature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Extra"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" Extra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SignedExtension\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" signature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Option"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Signature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Extra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Call"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("The "),a("code",[t._v("Option")]),t._v(" is here encoded such that is conveys both the extrinsic version "),a("code",[t._v("0x03")]),t._v(" for Substrate 2.x chains ("),a("code",[t._v("0x01")]),t._v(" for Substrate 1.x chains) as well as a high-bit that indicates if the transaction is signed or unsigned. (For unsigned the "),a("code",[t._v("signature")]),t._v(" details therefore does not appear). The "),a("code",[t._v("SignedExtension")]),t._v(" part defined both the data in the actual extrinsic as well as data, i.e. "),a("code",[t._v("AdditionalSigned")]),t._v(", that appears in the payload for the signature, but is not explicitly contained in the extrinsic.")]),t._v(" "),a("p",[t._v("The default "),a("code",[t._v("SignedExtension")]),t._v(" for Substrate 2.x with extrinsic version 3 is defined as follow -")]),t._v(" "),a("div",{staticClass:"language-rust line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" SignedExtra "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tsystem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("CheckVersion"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Runtime"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tsystem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("CheckGenesis"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Runtime"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tsystem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("CheckEra"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Runtime"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tsystem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("CheckNonce"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Runtime"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tsystem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("CheckWeight"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Runtime"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tbalances"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("TakeFees"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Runtime"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tcontracts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("CheckBlockGasLimit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Runtime"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("Some of these are only checks, requiring no additional data in the payload or extrinsic itself, i.e. the contracts checks do exactly that. It only applies checks and invalidates when those checks are invalid. This is a powerful concept, for instance on the "),a("a",{attrs:{href:"https://github.com/paritytech/polkadot/blob/f52c714ec3411eea58647d0f5176f4eb81660188/runtime/src/lib.rs#L117-L139",target:"_blank",rel:"noopener noreferrer"}},[t._v("initial Kusama chain this was used to limit the types of calls allowed"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"extension-deep-dive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extension-deep-dive"}},[t._v("#")]),t._v(" Extension deep-dive")]),t._v(" "),a("p",[t._v("For each of the default extensions, we will take a look through to understand the implications of the specific extension and how it relates to both the data contained in the extrinsic as well as the signature payload.")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("system::CheckVersion")]),t._v(" - This checks that the spec version matches between the extrinsic and the chain. It takes no parameters which means that these is no explicit data in the extrinsic format for this field, however it has "),a("code",[t._v("type AdditionalSigned = u32")]),t._v(" which means that a "),a("code",[t._v("u32")]),t._v(" containing the runtime spec version is part of the signature payload.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("system::CheckGenesis")]),t._v(" - This checks that the "),a("code",[t._v("genesisHash")]),t._v(" matches between extrinsic and chain. Like the previous check, no additional data is added to the extrinsic, however with "),a("code",[t._v("type AdditionalSigned = T::Hash")]),t._v(", the "),a("code",[t._v("genesisHash")]),t._v(" is part of the signature payload.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("system::CheckEra")]),t._v(" - This checks the era (mortal or immortal) for the transaction being sent. It checks both the "),a("code",[t._v("era: Era")]),t._v(" as part of the actual extrinsic and the "),a("code",[t._v("blockHash")]),t._v(" via the "),a("code",[t._v("type AdditionalSigned = T::Hash")]),t._v(". This means that the extrinsic era is both in the data being signed and the extrinsic itself, while the "),a("code",[t._v("blockHash")]),t._v(" the era applies to is only available in the signature payload.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("system::CheckNonce")]),t._v(" - This checks the nonce for the sending account. Unlike the preceding checks, it has no payload-specific data, however the "),a("code",[t._v("nonce: Compact<T::Index>")]),t._v(" ("),a("code",[t._v("Index")]),t._v(" is default "),a("code",[t._v("u32")]),t._v(") is applicable to both the extrinsic and, therefore, the actual signature payload as well.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("system::CheckWeight")]),t._v(" - This checks the weight and length of the block and ensure that it does not exceed the limits. It does not have any specific data attached to either the extrinsic nor payload, but rather just does calculations based on the weights and type of transaction received.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("balances::TakeFees")]),t._v(" - Consumes fees proportional to the length and weight of the transaction. It operates on the "),a("code",[t._v("fee: Compact<T::Balance>")]),t._v(", which means this value is included in both the extrinsic and subsequent payload being signed.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("contracts::CheckBlockGasLimit")]),t._v(" - As explained briefly above, this extension does not add data to the extrinsic, or the signature payload, however it ensures that the transaction does not exceeds the block gas limit.")])])]),t._v(" "),a("h2",{attrs:{id:"extrinsic-and-signature-payloads"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extrinsic-and-signature-payloads"}},[t._v("#")]),t._v(" Extrinsic and signature payloads")]),t._v(" "),a("p",[t._v("With the above extension, the following formats for the extrinsic and payloads are the outcome of the application of the signed extension. For the extrinsic the following data is "),a("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/8b0ef159c05bcb5d9b664546d0e7289e79b5c9d5/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L27",target:"_blank",rel:"noopener noreferrer"}},[t._v("always encoded for v3 extrinsics"),a("OutboundLink")],1),t._v(" -")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExtrinsicV3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   signer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Address'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   signature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Signature'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   era"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ExtrinsicEra'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// extra via system::CheckEra")]),t._v("\n   nonce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Compact<Index>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// extra via system::CheckNonce")]),t._v("\n   tip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Compact<Balance>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// extra via balances::TakeFees")]),t._v("\n   method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Call'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("The signature payload will contain the same information as the extrinsic, with the following "),a("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/8b0ef159c05bcb5d9b664546d0e7289e79b5c9d5/packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts#L33",target:"_blank",rel:"noopener noreferrer"}},[t._v("additional information"),a("OutboundLink")],1),t._v(" as expected by the "),a("code",[t._v("AdditionalSigned")]),t._v(" portions of the extensions -")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExtrinsicPayloadV3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Bytes'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   era"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ExtrinsicEra'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// extra via system::CheckEra")]),t._v("\n   nonce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Compact<Index>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// extra via system::CheckNonce")]),t._v("\n   tip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Compact<Balance>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// extra via balances::TakeFees")]),t._v("\n   specVersion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'u32'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// additional via system::CheckVersion")]),t._v("\n   genesisHash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hash'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// additional via system::CheckGenesis")]),t._v("\n   blockHash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hash'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// additional via system::CheckEra")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[t._v("As per the above structures, it means that both the extrinsic sent on-chain as well as the data being signed to generate the signature is tied by the hip based on the logic the chain expects via "),a("code",[t._v("SignedExtension")]),t._v(". The API is only aware of the version of the extrinsic being used on-chain (it determines this on connection) and therefore only knows about the specific logic that has been coded for the extrinsic version.")]),t._v(" "),a("h2",{attrs:{id:"extending-existing-or-implementing-new"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extending-existing-or-implementing-new"}},[t._v("#")]),t._v(" Extending existing or implementing new")]),t._v(" "),a("p",[t._v("When the API encodes or decodes an extrinsic, it uses the first "),a("code",[t._v("Option")]),t._v(" byte to determine the version. Once it has this value, it will create a specific extrinsic via "),a("code",[t._v("createType('ExtrinsicV3', value)")]),t._v(". This means that at any point, you can supply your own version of either the "),a("code",[t._v("Extrinsic")]),t._v(" or "),a("code",[t._v("ExtrinsicPayload")]),t._v(" and you can do so via 2 avenues -")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("If you are extending/replacing the existing version, you can inject your own types for both "),a("code",[t._v("ExtrinsicV3")]),t._v(" and "),a("code",[t._v("ExtrinsicV3Payload")]),t._v(" (assuming you are replacing v3)")])]),t._v(" "),a("li",[a("p",[t._v("If you are adding a new version, you can add a handler for both "),a("code",[t._v("ExtrinsicUnknown")]),t._v(" and "),a("code",[t._v("ExtrinsicPayloadUnknown")]),t._v(". These will be constructed when the version the API is aware of does not match with the on-chain version.")])])]),t._v(" "),a("p",[t._v("While we will not provide a full example of all the code here, the above links will show the existing implementations. However, assuming we have a chain where neither the nonce or tip is applicable (or we just don't care) and we are ignoring the check to the runtime versioning.")]),t._v(" "),a("p",[t._v("Additionally assuming that we have made the required "),a("code",[t._v("SignedExtension")]),t._v(" updates by removing "),a("code",[t._v("system::CheckVersion")]),t._v(", "),a("code",[t._v("system::CheckNonce")]),t._v(" and "),a("code",[t._v("balances::TakeFees")]),t._v(", we can do the following -")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OwnExtrinsic")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   signer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Address'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   signature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Signature'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   era"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ExtrinsicEra'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// extra via system::CheckEra")]),t._v("\n   method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Call'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OwnExtrinsicPayload")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Bytes'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   era"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ExtrinsicEra'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// extra via system::CheckEra")]),t._v("\n   genesisHash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hash'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// additional via system::CheckGenesis")]),t._v("\n   blockHash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hash'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// additional via system::CheckEra")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// signing logic needs to be included, as per existing")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// inject our types at API construction")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" api "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ApiPromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ExtrinsicV3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" OwnExtrinsic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ExtrinsicV3Payload'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" OwnExtrinsicPayload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br")])]),a("p",[t._v("The above example is certainly an advanced example, but it shows that all data types in the API can be adjusted and these adjustment can be provided to the API. In all cases, if you made updates to the formats and types of the actual runtime, you need to ensure that the API is aware of these changes.")]),t._v(" "),a("p",[t._v("In the above example, should these updates only be made on the node side, without the required API adjustments, the API will generate invalid transactions for the node since it is unaware of the changes and adjusted formats. Making the adjustments on only one side will mean that the signature verification can fail and that the format will not be decodable via the node.")]),t._v(" "),a("p",[t._v("(These extensions are not exposed via metadata at all, and would be quite difficult to do as well - since each of these have specific logic as well as data types assigned.)")]),t._v(" "),a("h2",{attrs:{id:"using-with-typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-with-typescript"}},[t._v("#")]),t._v(" Using with TypeScript")]),t._v(" "),a("p",[t._v("The API is built with TypeScript (as are all projects in the "),a("a",{attrs:{href:"https://github.com/polkadot-js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("polkadot-js organization"),a("OutboundLink")],1),t._v(") and as such allows developers using TS to have access to all the type interfaces defined on the chain, as well as having access to typings on interacting with the "),a("code",[t._v("api.*")]),t._v(" namespaces. In the next section we will provide an overview of "),a("router-link",{attrs:{to:"/start/typescript.html"}},[t._v("what is available in terms of types and TypeScript")]),t._v(".")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);