// LICENSE is MIT
//
//  Copyright (c) 2024
//      Marsel Bairamov <https://github.com/marselbairam>
//      Nikita Chetverikov <https://github.com/ZedByl>

import { Plugin } from 'rollup'
export type Options = {
	replaceValue?: string
	regExp?: string
}

export default function replaceStyleInject(options: Options): Plugin