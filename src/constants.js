export const OPERATORS = {
	MOOV: {
		prefixMobile10: '01',
		prefix10: '21',
		prefixMobile8: [
			'01',
			'02',
			'03',
			'40',
			'41',
			'42',
			'43',
			'50',
			'51',
			'52',
			'53',
			'70',
			'71',
			'72',
			'73',
		],
		prefix8: ['208', '218', '228', '238'],
	},
	MTN: {
		prefixMobile10: '05',
		prefix10: '25',
		prefixMobile8: [
			'04',
			'05',
			'06',
			'44',
			'45',
			'46',
			'54',
			'55',
			'56',
			'64',
			'65',
			'66',
			'74',
			'75',
			'76',
			'84',
			'85',
			'86',
			'94',
			'95',
			'96',
		],
		prefix8: ['200', '210', '220', '230', '240', '300', '310', '320', '330', '340', '350', '360'],
	},
	ORANGE: {
		prefixMobile10: '07',
		prefix10: '27',
		prefixMobile8: [
			'07',
			'08',
			'09',
			'47',
			'48',
			'49',
			'57',
			'58',
			'59',
			'67',
			'68',
			'69',
			'77',
			'78',
			'79',
			'87',
			'88',
			'89',
			'97',
			'98',
		],
		prefix8: [
			'202',
			'203',
			'212',
			'213',
			'215',
			'217',
			'224',
			'225',
			'234',
			'235',
			'243',
			'244',
			'245',
			'306',
			'316',
			'319',
			'327',
			'337',
			'347',
			'359',
			'368',
		],
	},
};
export const MOBILE = 'mobile';
export const PHONE = 'phone';
export const PNN_MOBILE_8 = [
	...OPERATORS.MOOV.prefixMobile8,
	...OPERATORS.MTN.prefixMobile8,
	...OPERATORS.ORANGE.prefixMobile8,
];
export const PNN_PHONE_8 = [
	...OPERATORS.MOOV.prefix8,
	...OPERATORS.MTN.prefix8,
	...OPERATORS.ORANGE.prefix8,
];
export const PNN_MOBILE_10 = [
	OPERATORS.MOOV.prefixMobile10,
	OPERATORS.MTN.prefixMobile10,
	OPERATORS.ORANGE.prefixMobile10,
];
export const PNN_PHONE_10 = [
	OPERATORS.MOOV.prefix10,
	OPERATORS.MTN.prefix10,
	OPERATORS.ORANGE.prefix10,
];
export const CI_PREFIX = ['00225', '+225']; // international prefixes of CI
export const FORMAT_LOCAL = 'L';
export const FORMAT_INTERNATIONAL = 'I';
export const OPERATOR_MOOV = 'MOOV';
export const OPERATOR_MTN = 'MTN';
export const OPERATOR_ORANGE = 'ORANGE';
