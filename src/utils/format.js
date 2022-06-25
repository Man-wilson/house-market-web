export const formatCurrency = value =>
	value.toLocaleString('USD', {
		style: 'currency',
		currency: 'USD',
	});
