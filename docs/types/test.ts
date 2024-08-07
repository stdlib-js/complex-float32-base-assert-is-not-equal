/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import Complex64 = require( '@stdlib/complex-float32-ctor' );
import isNotEqualf = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const z1 = new Complex64( 5.0, 3.0 );
	const z2 = new Complex64( 5.0, 3.0 );

	isNotEqualf( z1, z2 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument that is not a complex number...
{
	const z2 = new Complex64( 5.0, 3.0 );

	isNotEqualf( 'abc', z2 ); // $ExpectError
	isNotEqualf( 123, z2 ); // $ExpectError
	isNotEqualf( true, z2 ); // $ExpectError
	isNotEqualf( false, z2 ); // $ExpectError
	isNotEqualf( [], z2 ); // $ExpectError
	isNotEqualf( {}, z2 ); // $ExpectError
	isNotEqualf( ( x: number ): number => x, z2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument that is not a complex number...
{
	const z1 = new Complex64( 5.0, 3.0 );

	isNotEqualf( z1, 'abc' ); // $ExpectError
	isNotEqualf( z1, 123 ); // $ExpectError
	isNotEqualf( z1, true ); // $ExpectError
	isNotEqualf( z1, false ); // $ExpectError
	isNotEqualf( z1, [] ); // $ExpectError
	isNotEqualf( z1, {} ); // $ExpectError
	isNotEqualf( z1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const z1 = new Complex64( 5.0, 3.0 );
	const z2 = new Complex64( 5.0, 3.0 );

	isNotEqualf(); // $ExpectError
	isNotEqualf( z1 ); // $ExpectError
	isNotEqualf( z1, z2, {} ); // $ExpectError
}
